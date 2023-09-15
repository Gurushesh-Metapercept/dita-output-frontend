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
      nosearch.innerHTML = ""
      nosearch.style.display = 'none';
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

        if(hits.length === 0){
          nosearch.style.display = 'block';
          nosearch.innerHTML = `No results for <b>\"${query}\"</b>`
        }
       
      
        hits.forEach((hit) => {
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
  
