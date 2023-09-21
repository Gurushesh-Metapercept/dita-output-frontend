// document.addEventListener("DOMContentLoaded", () => {

//   const scrollButtonDown = document.getElementById('scrollButtonDown');
        
//         scrollButtonDown.addEventListener('click', () => {         
//             window.scrollBy(0, 500);
//         });
   
//         window.addEventListener('scroll', () => {
//             if (window.scrollY >= 100) {
//                 scrollButtonDown.style.display = 'block';
//             } else {
//                 scrollButtonDown.style.display = 'none';
//             }
//         });
// })

document.addEventListener("DOMContentLoaded", () => {
  const scrollButtonDown = document.getElementById('scrollButtonDown');
        
  scrollButtonDown.addEventListener('click', () => {         
    window.scrollBy(0, 500);
  });
   
  window.addEventListener('scroll', () => {
    const distanceToBottom = document.documentElement.scrollHeight - (window.innerHeight + window.scrollY);

    if (window.scrollY <= 0 || distanceToBottom <= 0) {
      scrollButtonDown.style.display = 'none';
    } else {
      scrollButtonDown.style.display = 'block';
    }
  });
});





document.addEventListener("DOMContentLoaded", () => {

  const scrollButtonUp = document.getElementById('scrollButtonUp');
        
        scrollButtonUp.addEventListener('click', () => {
            window.scrollBy(0, -500);
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                scrollButtonUp.style.display = 'block';
            } else {
                scrollButtonUp.style.display = 'none';
            }
        });
})



document.addEventListener("DOMContentLoaded", () => {

  const elementToModify = document.querySelector('.body.taskbody');
  
  const noteElements = elementToModify.querySelectorAll(".note.alert.alert-info");
  
  if (noteElements.length > 0) {
    
    noteElements.forEach(element => {
      
      element.classList.remove('note', 'alert', 'alert-info');
      
      element.classList.add('bigNote');
    });
  }
})

document.addEventListener("DOMContentLoaded", () => {
  const allATags = document.getElementById("sidebar_menulist");
  const aa = allATags.querySelectorAll("a");
  let currenthref = window.location.href;

  currenthref = currenthref.split("#")[0]

  aa.forEach((atag) => {
    
    if (atag.href === currenthref) {
      
      let parentElement = atag;


      parentElement = parentElement.parentElement;

      parentElement.classList.add("activeBG")

    }
  })
})


// =============================================== For Home and Icon in left side menu
// document.addEventListener("DOMContentLoaded", () => {
//   let sidebar_menulist = document.getElementById("sidebar_menulist")

//   var newItem = document.createElement("li");
//   newItem.classList.add("list_style_border")

//   var divElement = document.createElement("div");
//   divElement.className = "d-flex flex-row sidebarMenuText";
//   divElement.innerHTML = `
//   <button data-bs-toggle="collapse" class="btn d-inline-flex align-items-center pe-0">
//   <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(0.8)">
//     <mask id="mask0_3_2825" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
//     <rect width="20" height="20" fill="#D9D9D9"/>
//     </mask>
//     <g mask="url(#mask0_3_2825)">
//     <path d="M5.00004 15.8333H7.50004V10.8333H12.5V15.8333H15V8.33329L10 4.58329L5.00004 8.33329V15.8333ZM5.00004 17.5C4.54171 17.5 4.14935 17.3368 3.82296 17.0104C3.49657 16.684 3.33337 16.2916 3.33337 15.8333V8.33329C3.33337 8.0694 3.3924 7.8194 3.51046 7.58329C3.62851 7.34718 3.79171 7.15274 4.00004 6.99996L9.00004 3.24996C9.15282 3.13885 9.31254 3.05551 9.47921 2.99996C9.64587 2.9444 9.81948 2.91663 10 2.91663C10.1806 2.91663 10.3542 2.9444 10.5209 2.99996C10.6875 3.05551 10.8473 3.13885 11 3.24996L16 6.99996C16.2084 7.15274 16.3716 7.34718 16.4896 7.58329C16.6077 7.8194 16.6667 8.0694 16.6667 8.33329V15.8333C16.6667 16.2916 16.5035 16.684 16.1771 17.0104C15.8507 17.3368 15.4584 17.5 15 17.5H10.8334V12.5H9.16671V17.5H5.00004Z" fill="#69748C"/>
//     </g>
//   </svg>
  
//   </button>
//   <a href="/" class="d-inline-flex align-items-center flex-shrink-1 ps-1" aria-expanded="false" aria-current="true">Home</a>
// `;

// newItem.appendChild(divElement)


//   if (sidebar_menulist) {
    
//     sidebar_menulist.insertBefore(newItem, sidebar_menulist.firstChild);
//   }

// })




  // // ============================================================ Algolia and Search Modal
 
  // document.addEventListener("DOMContentLoaded", () => {
  //   const searchInput = document.getElementById('search-input');
  //   const searchResults = document.getElementById('search-results');
  //   const nosearch = document.getElementById('nosearch');
  //   const headerSearchBox = document.getElementById('headerSearchBox');
  
  //   const client = algoliasearch('QX9MQYMQ4D', 'edc43cd3cc2ceddc90b7eb276b3ccf1e');
  //   const indexName = "output-frontend"

  //   function clearSearchInput() {
  //     searchInput.value = '';
  //     searchResults.innerHTML = '';
  //     nosearch.innerHTML = "No recent searches"
  //     nosearch.style.display = 'block';
  //   }

  //   function focusSearchInput() {
  //       searchInput.focus();
  //   }
  
  //   searchInput.addEventListener('input', async (event) => {
  //     const query = event.target.value;
  
  //     if (query.length > 0) {
  //       nosearch.style.display = 'none';
  //       const index = client.initIndex(indexName);
  //       const { hits } = await index.search(query);
    
  //       searchResults.innerHTML = '';

  //       function decodeHtmlEntities(text) {
  //         const parser = new DOMParser();
  //         const decodedString = parser.parseFromString(text, 'text/html').body.textContent;
  //         return decodedString;
  //       }
  //       console.log(hits)

  //       if(hits.length === 0){
  //         nosearch.style.display = 'block';
  //         nosearch.innerHTML = `No results for <b>\"${query}\"</b>`
  //       }
       
      
  //       hits.forEach((hit) => {
  //         // console.log(hit)
  //         const resultItem = document.createElement('a');
  //         resultItem.classList.add('card');


  //         const cardBody = document.createElement('div');
  //         cardBody.classList.add('card-body');

  //         cardBody.style.whiteSpace = 'normal'; // Allow text to wrap
  //         cardBody.style.overflow = 'hidden'; // Hide any overflow
  //         cardBody.style.textOverflow = 'ellipsis'; // Add ellipsis if text overflows
  //         cardBody.style.width = '100%';
          
  //         resultItem.href = hit.url;
  //         // cardBody.textContent = decodeHtmlEntities(hit._highlightResult.hierarchy.lvl1.value); 

          
  //         if (hit._snippetResult && hit._snippetResult.content) {
  //           const highlightedContent = hit._snippetResult.content.value;
  //           cardBody.innerHTML = highlightedContent;
  //         } else {          
  //           cardBody.textContent = decodeHtmlEntities(hit._highlightResult.hierarchy.lvl1.value); 
  //         }

    
  //         resultItem.appendChild(cardBody);

  //         resultItem.addEventListener('click', () => {
  //           modal.hide();
  //         });
  //         searchResults.appendChild(resultItem);
  //       });
  //     } else {
  //       searchResults.innerHTML = ''; 

  //       nosearch.style.display = 'block';
  //       nosearch.innerHTML = "No recent searches"
        
  //     }
  //   });
     
  
   
  //   const modal = new bootstrap.Modal(document.getElementById('searchBoxModal'));
  //   modal._element.addEventListener('hidden.bs.modal', clearSearchInput);

  //    modal._element.addEventListener('shown.bs.modal', () => {
  //     headerSearchBox.blur(); 
  //     focusSearchInput();
  //   });
  // });
  




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
      // aTag.style.fontWeight = "bold";
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
        <div class="bs-scrollspy mt-3 mb-5 mb-lg-5 px-sm-1 text-body-secondary ignore-this">
        <div id="miniTOC">
        <span class="onThisTopic">ON THIS PAGE</span>
        <nav>
        <div data-spy="scroll" data-target="#navbar-example3" data-offset="0" id="scrollTagDiv">
        `;

  for (const tag of allTags) {
    //     console.log(tag, tag.id, tag.innerText);
    innerText += `<a id="${tag.id}"  href="#${tag.id}" relationtag=${tag.tagName} onclick='setActiveClassOnClick(this)' >${tag.innerText}</a>`;
    //     innerText += `<h3 id="${tag.id}"><a class="ps-2" href="#${tag.id}">${tag.innerText}</a></h3>`;
  }

  innerText += `
     </div>
     </nav>
     </div>
     </div>
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


  // =============================================================== Comment form validation 
  // (function () {
  //   'use strict';
  
  //   const forms = document.querySelectorAll('.requires-validation');
  //   const comment__form = document.querySelector("#comment__form");
  
  //   Array.from(forms).forEach(function (form) {
  //     form.addEventListener('submit', function (event) {
  //       if (!form.checkValidity()) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //       } else {
  //         sendEmail(comment__form.elements, event);
  //       }
  
  //       form.classList.add('was-validated');
  //     }, false);
  //   });
  // })();


  (function () {
    'use strict';
  
    const forms = document.querySelectorAll('.requires-validation');
    const comment__form = document.querySelector("#comment__form");
    const commentForm = document.querySelector(".commentForm");
    const thankYou = document.querySelector(".thankYou");
  
    function sendEmailWithLoader(formElements, event) {

      const submitButton = formElements.submit;
      submitButton.innerHTML = '<div class="spinner-border text-light" role="status"></div> Sending...';
 
      event.preventDefault();
      event.stopPropagation();
  
      setTimeout(function () {
        console.log("Email sent!");
        submitButton.innerHTML = 'Submit';
        sendEmail(comment__form.elements, event);
        console.log(comment__form.elements)
        commentForm.classList.remove("displayForm")
        thankYou.style.display = 'block';
        
      
      }, 2000); 
    }
  
    Array.from(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          sendEmailWithLoader(comment__form.elements, event);
        }
  
        form.classList.add('was-validated');
      }, false);
    });
  })();
  
  
  

// ================================================== Comment Box Hide show
  document.addEventListener("DOMContentLoaded", () => {
    const reviewButtons = document.querySelectorAll(".reviewBtn");
    const commentForm = document.querySelector(".commentForm");
    const comment__form = document.querySelector("#comment__form");
    const likeBtn = document.querySelector("#likeBtn");
    const dislikeBtn = document.querySelector("#dislikeBtn");
    const thankYou = document.querySelector(".thankYou");
    const emailField = document.querySelector("#EMAIL");
    const commentField = document.querySelector("#DESCRIPTION");
   


    reviewButtons.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        emailField.value = ""
        commentField.value = ""
        const review = btn.name;
       
        if(review === "Liked") {
          likeBtn.classList.add("liked")
          dislikeBtn.classList.remove("disliked")
          thankYou.style.display = 'none';
        }
        else if(review === "Disliked") {
          dislikeBtn.classList.add("disliked")+
          likeBtn.classList.remove("liked")
          thankYou.style.display = 'none';
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

            // let submitBtn = document.querySelector("#handleSubmit")
            // submitBtn.addEventListener("click" , () => {
            //   sendEmail(comment__form.elements)
            // })

        } else {
          console.error("commentForm not found.");
        }
      })
    })
  });


  function sendEmail(ele, event) {
    event.preventDefault();
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "gurushesh.p@metapercept.com",
      Password : "A45F7607648D21089CDB439D89039DF77AB7",
      To : 'gurushesh.p@metapercept.com',
      From : `gurushesh.p@metapercept.com`,
      Subject : "User Feedback",
      Body : `User has submitted feedback for the following post <a href="${ele.POST_URL.value}"><b>Link</b></a> <br/>
      <b>Email:</b> ${ele.email.value} <br/>
      <b>User Reaction</b>: ${ele.REVIEW.value} <br/>
      <b>Comment</b>: ${ele.DESCRIPTION.value}
      `
  }).then(
    message => console.warn(message)

  );

  return console.warn("Feedback submitted..")
}




// ========================================================================= Print and Download Function 

window.onload = function() {
  document.getElementById('download-btn').addEventListener('click', function() {
    window.scrollTo(0, 0);

    setTimeout(async function() {
      const headerElement = document.querySelector('#mainHeader').cloneNode(true);
      const articleElement = document.querySelector('article').cloneNode(true);

      // let logo = document.querySelector(".navbar-brand")

      const elementsToIgnore = articleElement.querySelectorAll('.ignore-this');
      elementsToIgnore.forEach(function(element) {
        element.remove();
      });

      const headerElementsToIgnore = headerElement.querySelectorAll('.ignore-this');
      headerElementsToIgnore.forEach(function(element) {
        element.remove();
      });

      const combinedElement = document.createElement('div');
      combinedElement.appendChild(headerElement);
      combinedElement.appendChild(articleElement);

      const imageTypes = ['png', 'jpeg', 'webp']; 
      const options = {
        margin: 10, 
        filename: 'page.pdf',
        image: { type: imageTypes, quality: 0.98 }, 
        html2canvas: { scale: 2 }, 
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', width: 1366, height: 768 } 
      };

      try {
        await html2pdf().from(combinedElement).set(options).save('page.pdf');
        console.log('PDF generated and saved successfully.');

        // Any additional code you want to execute after the PDF is generated and saved

      } catch (error) {
        console.error('An error occurred while generating or saving the PDF:', error);
      }
    }, 1000);
  });
};



// window.onload = function() {
//   document.getElementById('download-btn').addEventListener('click', function() {
//     console.log("hii");
//     const headerElement = document.querySelector('#mainHeader').cloneNode(true);
//     const articleElement = document.querySelector('article').cloneNode(true);

//     const elementsToIgnore = articleElement.querySelectorAll('.ignore-this');
//     elementsToIgnore.forEach(function(element) {
//       element.remove();
//     });

//     const headerElementsToIgnore = headerElement.querySelectorAll('.ignore-this');
//     headerElementsToIgnore.forEach(function(element) {
//       element.remove();
//     });
    

//     const combinedElement = document.createElement('div');
//     combinedElement.appendChild(headerElement);
//     combinedElement.appendChild(articleElement);

//     const imageTypes = ['png', 'jpeg', 'webp']; 
//     const options = {
//       margin: 10, 
//       filename: 'page.pdf',
//       image: { type: imageTypes, quality: 0.98 }, 
//       html2canvas: { scale: 2 }, 
//       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } 
//     };

//     html2pdf().from(combinedElement).set(options).save('page.pdf');
//   });
// }

// window.onload = function() {
//   document.getElementById('download-btn').addEventListener('click', function() {
//     console.log("hii")
//       const headerElement = document.querySelector('#mainHeader').cloneNode(true);
//       const articleElement = document.querySelector('article').cloneNode(true);

//       const elementsToIgnore = articleElement.querySelectorAll('.ignore-this');
//       elementsToIgnore.forEach(function(element) {
//           element.remove();
//       });
      

//       const combinedElement = document.createElement('div');
//       combinedElement.appendChild(headerElement);
//       combinedElement.appendChild(articleElement);

//       const imageTypes = ['png', 'jpeg', 'webp']; 
//       const options = {
//           margin: 10, 
//           filename: 'page.pdf',
//           image: { type: imageTypes, quality: 0.98 }, 
//           html2canvas: { scale: 2 }, 
//           jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } 
//       };

//       html2pdf().from(combinedElement).set(options).save('page.pdf');
//   });
// }

// window.onload = function() {
//     document.getElementById('download-btn').addEventListener('click', function() {
//       const element = document.querySelector('article').cloneNode(true);
//       const elementsToIgnore = element.querySelectorAll('.ignore-this');
      
//       elementsToIgnore.forEach(function(element) {
//         element.remove();
//       })

//     const imageTypes = ['png', 'jpeg', 'webp']; 
//     const options = {
//       margin: 10, // Optional: Adjust margin if needed
//       filename: 'page.pdf',
//       image: { type: imageTypes, quality: 0.98 }, 
//       html2canvas: { scale: 2 }, // Adjust scale if needed
//       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // Set A4 format
//     };

//     console.log(element)
//     html2pdf().from(element).set(options).save('page.pdf');
//   });
// }


// ========================================================================= Working merged page code 
// window.onload = function() {
//   document.getElementById('download-btn').addEventListener('click', async function() {
//     const mainElement = document.querySelector('article').cloneNode(true);
//     const elementsToIgnore = mainElement.querySelectorAll('.ignore-this');
      
//     elementsToIgnore.forEach(function(element) {
//       element.remove();
//     });

//     const imageTypes = ['png', 'jpeg', 'webp']; 
//     const options = {
//       margin: 10,
//       filename: 'page.pdf',
//       image: { type: imageTypes, quality: 0.98 }, 
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//     };

//     const linkedElements = mainElement.querySelectorAll('a');
//     await generatePDFWithLinkedContent(linkedElements, mainElement, options);
//   });
// };

// async function generatePDFWithLinkedContent(linkedElements, mainElement, options) {
//   for (const linkElement of linkedElements) {
//     const linkUrl = linkElement.getAttribute('href');
//     if (linkUrl) {
//       try {
//         const response = await fetch(linkUrl);
//         const linkedContent = await response.text();
//         const linkedDocument = new DOMParser().parseFromString(linkedContent, 'text/html');
//         const linkedArticle = linkedDocument.querySelector('article');
        
//         if (linkedArticle) {
//           const linkedArticleClone = linkedArticle.cloneNode(true);
//           const linkedElementsToIgnore = linkedArticleClone.querySelectorAll('.ignore-this');
          
//           linkedElementsToIgnore.forEach(function(element) {
//             element.remove();
//           });

//           // Append the linked article content to the main content
//           mainElement.appendChild(linkedArticleClone);
//         }
//       } catch (error) {
//         console.error('Error fetching linked content:', error);
//       }
//     }
//   }

//   // Generate a PDF with all linked content and the main content
//   html2pdf().from(mainElement).set(options).save('combined_articles.pdf');
// }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// ========================================================================= Window.print function
// function printPage() {
  
//   let elementsToHide = document.querySelectorAll('.no-print');
//   elementsToHide.forEach(function(element) {
//     element.style.display = 'none';
//   });

  
//   let style = document.createElement('style');
//   style.innerHTML = '@page { size: auto; margin-top: 5mm; margin-bottom: 5mm; }';
//   document.head.appendChild(style);
  
//   window.print();

//   style.remove();
//   elementsToHide.forEach(function(element) {
//     element.style.display = 'block';
//   });
// }



function printPage() {

  window.scrollTo(0, 0);

  setTimeout(() => {

  let elementsToHide = document.querySelectorAll('.no-print');
  elementsToHide.forEach(function(element) {
    element.style.display = 'none';
  });


  // let style = document.createElement('style');
  // style.innerHTML = '@page { size: auto; margin-top: 5mm; margin-bottom: 5mm; }';
  // document.head.appendChild(style);


  window.print();
  // style.remove();

  elementsToHide.forEach(function(element) {
    element.style.display = '';
  });
  }, 500)
}




// function printPage() {
//   // Add the no-print class to elements when printing
//   var elementsToHide = document.querySelectorAll('.no-print');
//   elementsToHide.forEach(function(element) {
//     element.style.display = 'none';
//   });

//   // Set the print style for hiding headers
//   var style = document.createElement('style');
//   style.innerHTML = `
//   @page {
//     size: auto;
//     margin-top: 20mm; 
//     margin-bottom: 20mm;
//   }
// `;
//   document.head.appendChild(style);

//   // Trigger the browser's print dialog
//   window.print();

//   // Remove the added style and restore the display of hidden elements after printing
//   style.remove();
//   elementsToHide.forEach(function(element) {
//     element.style.display = 'block';
//   });
// }






// ========================================================================= with header image

// window.onload = function() {
//   document.getElementById('download-btn').addEventListener('click', function() {
//     const headerImage = new Image();
//     headerImage.src = 'https://64ec5ff713ef6f7368f4b9e5--profound-croquembouche-1abdd5.netlify.app/images/Aurigo_logo.svg'; 

//     const element = document.querySelector('article').cloneNode(true);
//     const elementsToIgnore = element.querySelectorAll('.ignore-this');
  
//     elementsToIgnore.forEach(function(element) {
//       element.remove();
//     });

//     const imageTypes = ['png', 'jpeg', 'webp']; 
//     const options = {
//       margin: 10, // Optional: Adjust margin if needed
//       filename: 'page.pdf',
//       image: { type: imageTypes, quality: 0.98 }, 
//       html2canvas: { scale: 2 }, // Adjust scale if needed
//       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // Set A4 format
//     };

//     const combinedElement = document.createElement('div');
//     combinedElement.appendChild(headerImage);
//     combinedElement.appendChild(element);

//     console.log(combinedElement);

//     html2pdf().from(combinedElement).set(options).save('page.pdf');
//   });
// };



// ============================================================================================


document.addEventListener("DOMContentLoaded", () => {
  const previousBtn = document.getElementById("previousBtn")
  const nextBtn = document.getElementById("nextBtn")

  const allATags = document.getElementById("sidebar_menulist");
  const aa = allATags.querySelectorAll("a");
  let currenthref = window.location.href;

  function capitalizeFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  currenthref = currenthref.split("#")[0]
  
    let currentIndex = -1;
    for (let i = 0; i < aa.length; i++) {
      if (aa[i].href === currenthref) {
        currentIndex = i;
        break;
      }
    }

  aa.forEach((atag, index) => {

    if (atag.href === currenthref) {
      
      let parentElement = atag;
      

      
      while (parentElement && parentElement.tagName !== "LI") {
        parentElement = parentElement.parentElement;
      }

      if (parentElement && parentElement.tagName === "LI") {

        const previousSibling = parentElement.previousElementSibling;
        const nextSibling = parentElement.nextElementSibling;

        if (previousSibling) {
          const preATagHref = previousSibling.querySelectorAll("a")[0].href

          let arrLen = preATagHref.split("/")[preATagHref.split("/").length - 1].replace(".html", "").replaceAll("_", " ") 
          arrLen = capitalizeFirstLetter(arrLen)
          const dot = arrLen.length > 30 ? "..." : "" 
          previousBtn.innerHTML = `
          <a href="${preATagHref}" class="previous d-flex">
            <div class="arrowIcon me-3 d-none d-md-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
              </svg>
            </div>
            <div class="btnText d-flex flex-column">
              <span>PREVIOUS</span>
              ${arrLen.slice(0, 30)} ${dot}
            </div>
        </a> 
          `
        } else {
          console.log("No Previous Sibling");
          
          if (index === currentIndex) {
            console.log(aa[index - 1].href)

            let elseArrLen = aa[index - 1].href.split("/")[aa[index - 1].href.split("/").length - 1].replace(".html", "").replaceAll("_", " ") 
            elseArrLen = capitalizeFirstLetter(elseArrLen)

             const dot = elseArrLen.length > 30 ? "..." : ""
             
             previousBtn.innerHTML = `
          <a href="${aa[index - 1].href}" class="previous d-flex">
            <div class="arrowIcon me-3 d-none d-md-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
              </svg>
            </div>
            <div class="btnText d-flex flex-column">
              <span>PREVIOUS</span>
              ${elseArrLen.slice(0, 30)} ${dot}
            </div>
        </a> 
          `

            console.log(elseArrLen)
          }
        }


        if (nextSibling) {
        const nextATagHref = nextSibling.querySelectorAll("a")[0].href
        let arrLen = nextATagHref.split("/")[nextATagHref.split("/").length - 1].replace(".html", "").replaceAll("_", " ")
        arrLen = capitalizeFirstLetter(arrLen)
        const dot = arrLen.length > 30 ? "..." : "" 
          
        nextBtn.innerHTML = `
            <a href="${nextATagHref}" class="next d-flex">   
                <div class="btnText d-flex align-items-end text-end flex-column">
                  <span>NEXT</span>
                  ${arrLen.slice(0, 30)}${dot}
                </div>
                <div class="arrowIcon ms-3 d-none d-md-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                </div>
            </a>
              `
        } else {
          console.log("No Next Sibling");
          

          if (index === currentIndex) {
            let arrLen = aa[index + 1].href.split("/")[aa[index + 1].href.split("/").length - 1].replace(".html", "").replaceAll("_", " ")

            arrLen = capitalizeFirstLetter(arrLen)
            const dot = arrLen.length > 30 ? "..." : "" 
              
            nextBtn.innerHTML = `
                <a href="${aa[index + 1].href}" class="next d-flex">   
                    <div class="btnText d-flex align-items-end text-end flex-column">
                      <span>NEXT</span>
                      ${arrLen.slice(0, 30)}${dot}
                    </div>
                    <div class="arrowIcon ms-3 d-none d-md-block">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                      </svg>
                    </div>
                </a>
                  `
          }
        }
      } 
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {

  setTimeout(() => {
    const miniTOC = document.getElementById('miniTOC');

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 50) {
          miniTOC.style.display = 'block';
      } 
      // else {
      //     miniTOC.style.display = 'none';
      // }
  });
  }, 500)
        
})

document.addEventListener("DOMContentLoaded", () => {

  const iconAndTitle = document.querySelectorAll("#sidebar_menulist > li.list_style_border > div > div.iconAndTitle")

  
  const pathArr = [
     `<svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
     <mask id="mask0_3_2860" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
     <rect width="20" height="20" fill="#12636A"/>
     </mask>
     <g mask="url(#mask0_3_2860)">
     <path d="M9.16663 11.6666H10.8333C11.0694 11.6666 11.2673 11.5868 11.427 11.427C11.5868 11.2673 11.6666 11.0694 11.6666 10.8333C11.6666 10.5972 11.5868 10.3993 11.427 10.2395C11.2673 10.0798 11.0694 9.99996 10.8333 9.99996H9.16663C8.93052 9.99996 8.7326 10.0798 8.57288 10.2395C8.41315 10.3993 8.33329 10.5972 8.33329 10.8333C8.33329 11.0694 8.41315 11.2673 8.57288 11.427C8.7326 11.5868 8.93052 11.6666 9.16663 11.6666ZM9.16663 9.16663H14.1666C14.4027 9.16663 14.6007 9.08677 14.7604 8.92704C14.9201 8.76732 15 8.5694 15 8.33329C15 8.09718 14.9201 7.89927 14.7604 7.73954C14.6007 7.57982 14.4027 7.49996 14.1666 7.49996H9.16663C8.93052 7.49996 8.7326 7.57982 8.57288 7.73954C8.41315 7.89927 8.33329 8.09718 8.33329 8.33329C8.33329 8.5694 8.41315 8.76732 8.57288 8.92704C8.7326 9.08677 8.93052 9.16663 9.16663 9.16663ZM9.16663 6.66663H14.1666C14.4027 6.66663 14.6007 6.58677 14.7604 6.42704C14.9201 6.26732 15 6.0694 15 5.83329C15 5.59718 14.9201 5.39926 14.7604 5.23954C14.6007 5.07982 14.4027 4.99996 14.1666 4.99996H9.16663C8.93052 4.99996 8.7326 5.07982 8.57288 5.23954C8.41315 5.39926 8.33329 5.59718 8.33329 5.83329C8.33329 6.0694 8.41315 6.26732 8.57288 6.42704C8.7326 6.58677 8.93052 6.66663 9.16663 6.66663ZM6.66663 15C6.20829 15 5.81593 14.8368 5.48954 14.5104C5.16315 14.184 4.99996 13.7916 4.99996 13.3333V3.33329C4.99996 2.87496 5.16315 2.4826 5.48954 2.15621C5.81593 1.82982 6.20829 1.66663 6.66663 1.66663H16.6666C17.125 1.66663 17.5173 1.82982 17.8437 2.15621C18.1701 2.4826 18.3333 2.87496 18.3333 3.33329V13.3333C18.3333 13.7916 18.1701 14.184 17.8437 14.5104C17.5173 14.8368 17.125 15 16.6666 15H6.66663ZM6.66663 13.3333H16.6666V3.33329H6.66663V13.3333ZM3.33329 18.3333C2.87496 18.3333 2.4826 18.1701 2.15621 17.8437C1.82982 17.5173 1.66663 17.125 1.66663 16.6666V5.83329C1.66663 5.59718 1.74649 5.39926 1.90621 5.23954C2.06593 5.07982 2.26385 4.99996 2.49996 4.99996C2.73607 4.99996 2.93399 5.07982 3.09371 5.23954C3.25343 5.39926 3.33329 5.59718 3.33329 5.83329V16.6666H14.1666C14.4027 16.6666 14.6007 16.7465 14.7604 16.9062C14.9201 17.0659 15 17.2638 15 17.5C15 17.7361 14.9201 17.934 14.7604 18.0937C14.6007 18.2534 14.4027 18.3333 14.1666 18.3333H3.33329Z" fill="#12636A"/>
     </g>
     </svg>
     `,
     `<svg width="18" height="18"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.84 31.82"><defs><style>.a{fill:#12636A;}</style></defs><path class="a" d="M31.84,24.86l-.07-3.22-2.45.18a5.94,5.94,0,0,0-1.67-2.64L28.76,17l-2.83-1.54-1.12,2.16a6.19,6.19,0,0,0-3.14.13l-1.3-2.05-2.72,1.73,1.26,2a6.52,6.52,0,0,0-1.45,2.78l-2.37.11.13,3.27,2.45-.11a6.06,6.06,0,0,0,1.66,2.64l-1.1,2.16,2.83,1.49,1.12-2.16a6.09,6.09,0,0,0,3.14-.19l1.24,2,2.72-1.72L28,27.73A6.16,6.16,0,0,0,29.41,25Zm-5.26.34,0,0a3.46,3.46,0,1,1-1.47-4.69A3.46,3.46,0,0,1,26.56,25.22ZM25,24.38l0,0a1.63,1.63,0,0,1-2.2.66,1.65,1.65,0,1,1,1.51-2.93h0A1.66,1.66,0,0,1,25,24.38ZM0,11.27H11.35V0H0ZM2.8,2.84H8.61V8.42H2.8ZM0,25.64H11.35V14.37H0Zm2.8-8.42H8.61v5.57H2.8ZM25.86,0H14.52V11.27H25.86ZM23.13,8.42H17.32V2.84h5.81Z"/></svg>`,
     `<?xml version="1.0" encoding="utf-8"?>
     <!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
     <svg width="18" height="18" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
     <style type="text/css">
       .st0{fill:#12636A;}
     </style>
     <path class="st0" d="M28.1,3.4C28.1,3.4,28.1,3.4,28.1,3.4C28.1,3.4,28.1,3.4,28.1,3.4L28.1,3.4z M30.4,10.4
       c-1.7,1.3-4.1,0.9-5.4-0.8L18.8,11c0,0.2,0,0.4,0,0.6c0,4.3-3.5,7.8-7.8,7.8c-0.3,0-0.7,0-1-0.1l-1.8,5.5c1.2,0.7,1.9,2,1.9,3.4
       c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9c0.2,0,0.4,0,0.5,0L8.5,19c-1-0.3-1.9-0.8-2.7-1.5
       c-3.3-2.8-3.6-7.8-0.8-11L3.5,4.8C3.2,4.9,2.8,5,2.5,5C1.1,5,0,3.9,0,2.5C0,1.1,1.1,0,2.5,0C3.9,0,5,1.1,5,2.5
       c0,0.4-0.1,0.9-0.3,1.3l1.5,1.6C7,4.7,7.9,4.2,9,4c4.2-1.1,8.5,1.4,9.6,5.5l5.8-1.3c-0.1-0.3-0.1-0.6-0.1-0.9c0-2.1,1.7-3.9,3.9-3.9
       c1.2,0,2.4,0.6,3.1,1.5C32.5,6.7,32.1,9.1,30.4,10.4z M14,7.3h-2V5.1h-2v2.2H7.9v5.2h4.2v1.4H8.9c-0.6,0-1,0.4-1,1v0.9H10V18h1.9
       v-2.2H14v-5.2H9.9V9.2h3c0.6,0,1.1-0.5,1.1-1.1V7.3z"/>
     </svg>
     `,
     `<?xml version="1.0" encoding="utf-8"?>
     <!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
     <svg fill="#12636A" width="18" height="18" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
     <path d="M10.2,11.3H7v-3c0-0.9,0.6-1.5,1.4-1.5h0.3c0.8,0,1.5,0.7,1.5,1.5V11.3z M10,2.2l-1.4-1l-1.4,1l-6,4.3
       C1.7,7.2,2.6,7.4,3.3,7v3.6C2,10.9,1.1,12,1.1,13.3c0,0.2,0.1,0.5,0.1,0.7c-0.5-0.1-1.1,0.2-1.2,0.8c-0.1,0.6,0.2,1.1,0.8,1.2h6.9
       c0.3-0.3,0.4-0.7,0.4-1.2c0-1-0.8-1.7-1.7-1.7c0,0,0,0-0.1,0H6.1c0-0.9-0.6-1.7-1.3-2.1V6l3.7-2.7l3.9,2.8v8.3H11
       c-0.8,0-1.5,0.7-1.5,1.5h2.9h1.3H14V7.1c0.7,0.3,1.5,0.1,2-0.6L10,2.2z M4.8,0H3.2v3.6l1.6-1.1V0z"/>
     </svg>
     `,
     `<svg width="18" height="18" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><defs><clipPath id="clip-path"><rect x="7.51" y="3" width="84.73" height="93.7" fill="#12636A"/></clipPath></defs><g clip-path="url(#clip-path)"><path d="M16.37,81.35V12.55H48.22V22.84a5.92,5.92,0,0,0,6,5.64H64.84v7.84a6,6,0,0,0,5.92,6h3.18V28.48l-8.78-8.63-8.1-8.13L48.5,3h-41V90.39H31.59V87.21A6.15,6.15,0,0,0,25.47,81h0ZM44.11,57.14V48.51H53V41.22H44.11V32.36H36.18v8.86H27.32v7.42h8.86v8.5Z" fill="#12636A"/><path d="M92.24,96.7H81.36L64.43,79.77l-.35-.38-3.19,3.18L48.16,69.84,60.55,57.46,73.28,70.19,70.1,73.37l.37.35L91.16,94.41a4.11,4.11,0,0,1,1.08,2.29M61,51.63l18,18,2.17-2.17a4.33,4.33,0,0,0,0-6.12l0,0L69.05,49.15a3.93,3.93,0,0,0-5.55,0ZM40.27,72.38a4.36,4.36,0,0,0,0,6.15L52.43,90.68a3.94,3.94,0,0,0,5.57,0l2.49-2.48-18-18Z" fill="#12636A"/></g></svg>`,
     `<?xml version="1.0" encoding="utf-8"?>
     <!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
     <svg fill="#12636A" width="18" height="18" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
     <path d="M9.1,14.8H6v3H3v-3H0v-1.3c0-0.8,0.7-1.5,1.5-1.5h4.7v-1.6H0V3h3V0h3v3h3.1v1.2c0,0.9-0.7,1.6-1.6,1.6H2.9v1.6h6.2v2.9V14.8
       z M32,15.5h-2.4V25H32v7H13.5V17.8h10.9V25h2.2v-9.5H13.4v-1.4h13.2v-2.4h3v2.4H32V15.5z M23,26.4v-7.2h-8.1v11.4h15.7l0-4.2H23z
        M32,18.8v-1.7h-1.5v1.7H32z M16.4,22h1.5v-1.7h-1.5V22z M20,22h1.5v-1.7H20V22z M16.4,25.7h1.5V24h-1.5V25.7z M20,25.7h1.5V24H20
       V25.7z M16.4,29.4h1.5v-1.7h-1.5V29.4z M20,29.4h1.5v-1.7H20V29.4z M25.6,27.7h-1.5v1.7h1.5V27.7z M29.1,27.7h-1.5v1.7h1.5V27.7z
        M13.9,7.6h10.6v3.2H26V6.1H13.9V4.4l-3.1,2.4l3.1,2.4V7.6z M8.8,24.2H7.8v-4.9H6.3v6.4h2.4v1.7l3.1-2.4l-3.1-2.4V24.2z"/>
     </svg>
     `

  ]
  

  iconAndTitle.forEach((li, index) => {
    const svgElement = document.createElement("div");
    svgElement.innerHTML = pathArr[index];

    li.insertBefore(svgElement, li.firstChild);
  });
  
})