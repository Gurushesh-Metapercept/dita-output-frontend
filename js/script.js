  
  // ============================================================ Algolia and Search Modal
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const nosearch = document.getElementById('nosearch');
    const headerSearchBox = document.getElementById('headerSearchBox');
  
    const client = algoliasearch('QX9MQYMQ4D', 'edc43cd3cc2ceddc90b7eb276b3ccf1e');
    const indexName = "output-frontend"

    function clearSearchInput() {
      searchInput.value = '';
      searchResults.innerHTML = '';
      nosearch.innerHTML = "No recent searches"
      nosearch.style.display = 'block';
    }

    function focusSearchInput() {
        searchInput.focus();
    }
  
    searchInput.addEventListener('input', async (event) => {
      const query = event.target.value;
  
      if (query.length > 0) {
        nosearch.style.display = 'none';
        const index = client.initIndex(indexName);
        const { hits } = await index.search(query);
    
        searchResults.innerHTML = '';

        function decodeHtmlEntities(text) {
          const parser = new DOMParser();
          const decodedString = parser.parseFromString(text, 'text/html').body.textContent;
          return decodedString;
        }
        console.log(hits)

        if(hits.length === 0){
          nosearch.style.display = 'block';
          nosearch.innerHTML = `No results for <b>\"${query}\"</b>`
        }
       
      
        hits.forEach((hit) => {
          // console.log(hit)
          const resultItem = document.createElement('a');
          resultItem.classList.add('card');


          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body');

          cardBody.style.whiteSpace = 'normal'; // Allow text to wrap
          cardBody.style.overflow = 'hidden'; // Hide any overflow
          cardBody.style.textOverflow = 'ellipsis'; // Add ellipsis if text overflows
          cardBody.style.width = '100%';
          
          resultItem.href = hit.url;
          // cardBody.textContent = decodeHtmlEntities(hit._highlightResult.hierarchy.lvl1.value); 

          
          if (hit._snippetResult && hit._snippetResult.content) {
            const highlightedContent = hit._snippetResult.content.value;
            cardBody.innerHTML = highlightedContent;
          } else {          
            cardBody.textContent = decodeHtmlEntities(hit._highlightResult.hierarchy.lvl1.value); 
          }

    
          resultItem.appendChild(cardBody);

          resultItem.addEventListener('click', () => {
            modal.hide();
          });
          searchResults.appendChild(resultItem);
        });
      } else {
        searchResults.innerHTML = ''; 

        nosearch.style.display = 'block';
        nosearch.innerHTML = "No recent searches"
        
      }
    });
     
  
   
    const modal = new bootstrap.Modal(document.getElementById('searchBoxModal'));
    modal._element.addEventListener('hidden.bs.modal', clearSearchInput);

     modal._element.addEventListener('shown.bs.modal', () => {
      headerSearchBox.blur(); 
      focusSearchInput();
    });
  });
  




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
        <div class="bs-scrollspy mt-3 mb-5 my-lg-0 mb-lg-5 px-sm-1 text-body-secondary ignore-this"><span class="onThisTopic">ON THIS TOPIC</span>
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
    console.log("triggered")

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

