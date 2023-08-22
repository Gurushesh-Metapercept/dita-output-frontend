// ====================set active class=============
window.addEventListener("load", () => {
    const activeUrl = getActiveUrl();
    const ulElement = document.querySelector("#bs-sidebar-nav");
    const nestedATags = getNestedATags(ulElement);
    nestedATags.forEach((aTag) => {
      const Url = aTag.href.split("/").pop();
  
      if (Url == activeUrl) {
        // aTag.style.color = "#1E8B94";
        aTag.style.color = "#000";
        aTag.style.fontWeight = "bold";
      }
    });
  });
  
  const getActiveUrl = () => {
    const url = window.location.href.split("/").pop();
    return url;
  };
  
  function getNestedATags(element) {
    const nestedATags = [];
  
    function traverse(element) {
      if (element.tagName === "A") {
        nestedATags.push(element);
      } else {
        const children = element.children;
        for (const child of children) {
          traverse(child);
        }
      }
    }
  
    traverse(element);
    return nestedATags;
  }
  
  // =================mini TOC====================
  window.addEventListener("load", () => {
    const mainDiv = document.getElementsByClassName("bs-content")[0];
    const allTags = getTagsForTOC(mainDiv);
    //   console.log(allTags);
    if (allTags.length > 1) {
         addLastChildOfMain(allTags);
       }
  });
  
  function getTagsForTOC(element) {
    const nestedATags = [];
    function traverse(element) {
      if (
        element.tagName === "H1" ||
        element.tagName === "H2" ||
        element.tagName === "H3"
      ) {
        if (element.id) {
          element.style.scrollMarginBlockStart = " 60px";
          nestedATags.push(element);
        } else {
          const parentDiv = element.parentNode;
          parentDiv.style.scrollMarginBlockStart = " 60px";
          element.id = parentDiv.id;
          nestedATags.push(element);
        }
      } else {
        const children = element.children;
        for (const child of children) {
          traverse(child);
        }
      }
    }
  
    traverse(element);
    return nestedATags;
  }
  
  const addLastChildOfMain = (allTags) => {
    //   console.log("inadd");
    let innerText = `
          <div class="bs-scrollspy mt-3 mb-5 my-lg-0 mb-lg-5 px-sm-1 text-body-secondary"><span class="onThisTopic">ON THIS TOPIC</span>
          <nav>
          <div data-spy="scroll" data-target="#navbar-example3" data-offset="0" id="scrollTagDiv">
          `;
  
    for (const tag of allTags) {
      //     console.log(tag, tag.id, tag.innerText);
      innerText += `<a id="${tag.id}"  href="#${tag.id}" relationtag=${tag.tagName} onclick='setActiveClassOnClick(this)' >${tag.innerText}</a>`;
      //     innerText += `<h3 id="${tag.id}"><a class="ps-2" href="#${tag.id}">${tag.innerText}</a></h3>`;
    }
  
    innerText += `
       </div></nav></div>
          `;
  
    const mainDiv = document.getElementsByClassName("bs-main")[0];
    mainDiv.insertAdjacentHTML("beforeend", innerText);
  };
  
  const getScrollTagEle = () => {
    const scrollDiv = document.getElementById("scrollTagDiv");
    if(scrollDiv){
      return scrollDiv.children;
    }
    return [];
  };
  const addActiveClassOnScroll = () => {
    const mainDiv = document.getElementsByClassName("bs-content")[0];
    const allTags = getTagsForTOC(mainDiv);
    const scrollTags = getScrollTagEle();
    //   console.log(scrollTags, "active tag");
    for (const tag of allTags) {
      const topHeight = tag.getBoundingClientRect().top;
      if (0 < topHeight && topHeight < 200) {
        for (const child of scrollTags) {
          //  console.log(child.innerText, tag.innerText);
          if (child.innerText == tag.innerText) {
            //    console.log("match", child);
            for (const prevChild of scrollTags) {
              prevChild.classList.remove("active");
            }
            child.classList.add("active");
          }
        }
      }
    }
  };
  
  window.addEventListener("scroll", addActiveClassOnScroll);
  window.addEventListener("load", addActiveClassOnScroll);
  
  function setActiveClassOnClick(e) {
    // console.log(e);
    const scrollTags = getScrollTagEle();
  
    setTimeout(() => {
      for (const prevChild of scrollTags) {
        prevChild.classList.remove("active");
      }
      e.classList.add("active");
    },300);
  }
  


  // ================================================== Comment Box

  document.addEventListener("DOMContentLoaded", () => {
    const reviewButtons = document.querySelectorAll(".reviewBtn");
    const commentForm = document.querySelector(".commentForm");
    const comment__form = document.querySelector("#comment__form");
    const likeBtn = document.querySelector("#likeBtn");
    const dislikeBtn = document.querySelector("#dislikeBtn");
  
    reviewButtons.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        const review = btn.name;
        if(review === "Liked") {
          likeBtn.classList.add("liked")
          dislikeBtn.classList.remove("disliked")
        }
        else if(review === "Disliked") {
          dislikeBtn.classList.add("disliked")
          likeBtn.classList.remove("liked")
        }
        const currentPageUrl = window.location.href;

        if (commentForm) {
          commentForm.classList.add("displayForm");
          const scrollOffset = 100; 
          window.scrollBy({
            top: commentForm.getBoundingClientRect().top - scrollOffset,
            behavior: "smooth",
          })
          for (const ele of comment__form.elements) {
              if (ele.name === "REVIEW") {
                ele.value = review;
              }
              else if (ele.name === "POST_URL") {
                ele.value = currentPageUrl;
              }
            }

        } else {
          console.error("commentForm not found.");
        }
      })
    })
  });


//   document.addEventListener("DOMContentLoaded", () => {
//     const reviewButtons = document.querySelectorAll(".reviewBtn");
//     const commentForm = document.querySelector(".commentForm");
//     const comment__form = document.querySelector("#comment__form");
//     const likeBtn = document.querySelector("#likeBtn");
//     const dislikeBtn = document.querySelector("#dislikeBtn");

  
//     reviewButtons.forEach((btn) => {
//       btn.addEventListener("click", (event) => {
//         event.preventDefault();
//         event.stopPropagation();
//         const review = btn.name;
//         if(review === "Liked") {
//           likeBtn.classList.add("liked")
//           dislikeBtn.classList.remove("disliked")
//         }
//         else if(review === "Disliked") {
//           dislikeBtn.classList.add("disliked")
//           likeBtn.classList.remove("liked")
//         }
//         const currentPageUrl = window.location.href;

//         if (commentForm) {
//           commentForm.classList.add("displayForm");
//           const scrollOffset = 100; 
//           window.scrollBy({
//             top: commentForm.getBoundingClientRect().top - scrollOffset,
//             behavior: "smooth",
//           })
//           for (const ele of comment__form.elements) {
//               if (ele.name === "REVIEW") {
//                 ele.value = review;
//               }
//               else if (ele.name === "POST_URL") {
//                 ele.value = currentPageUrl;
//               }
//             }

//             let submitBtn = document.querySelector("#handleSubmit")
//             submitBtn.addEventListener("click" , () => {
//               sendEmail(comment__form.elements)
//             })

//         } else {
//           console.error("commentForm not found.");
//         }
//       })
//     })
//   });

//   function sendEmail(ele) {
//     console.log(ele.EMAIL.value)
//     Email.send({
//       Host : "smtp.elasticemail.com",
//       Username : "gurushesh.p@metapercept.com",
//       Password : "A45F7607648D21089CDB439D89039DF77AB7",
//       To : 'gurushesh.p@metapercept.com',
//       From : `gurushesh.p@metapercept.com`,
//       Subject : "User Feedback",
//       Body : `User has submitted feedback for the following post <a href="${ele.POST_URL.value}"><b>Link</b></a> <br/>
//       <b>User Reaction</b>: ${ele.REVIEW.value} <br/>
//       <b>Comment</b>: ${ele.DESCRIPTION.value}
//       `
//   }).then(
//     message => alert(message)
//   );

//   return alert("Feedback submitted..")
// }