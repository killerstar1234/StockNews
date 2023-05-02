window.onload = async () => {

    // Get the wishlist from local data
    
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    const defaultOptions = [
        "TSLA",
        "AAPL",
        "AMZN"
    ]

    if(wishlist.length === 0) {
        
        for(let i = 0; i < defaultOptions.length; i++) {
            wishlist.push(defaultOptions[i]);
        }

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    // Display the wishlist prices and html elements

    // <li class="wishlist-item">
    //     <a href="#" class="wishlist-link">
    //     <span class="wishlist-name">Tesla</span>
    //     <span class="wishlist-price">$1000</span>
    //     </a>
    // </li>

    try {
        for (const name of wishlist) {
          const response = await fetch(`/search/getPrice?name=${name}`);
          const data = await response.json();
          const price = data;


          // I have to edit this so it includes the url to the stock analisis for the news dive in...
          addWishlistItem(name, price);

        }
    } catch (error) {
        console.error(error);
    }



}




function addWishlistItem(name, price) {
    const wishlistItems = document.getElementById('wishlist-items');
    
    // create a new list item element
    const listItem = document.createElement('li');
    listItem.classList.add('wishlist-item');
    
    // create a new link element
    const link = document.createElement('a');
    link.classList.add('wishlist-link');
    link.setAttribute('href', `/search/analysis?name=${name}`);
    link.setAttribute('target', "_blank")
    
    // create a new span element for the name
    const nameSpan = document.createElement('span');
    nameSpan.classList.add('wishlist-name');
    nameSpan.textContent = name;
    
    // create a new span element for the price
    const priceSpan = document.createElement('span');
    priceSpan.classList.add('wishlist-price');
    priceSpan.textContent = price;
    
    // append the name and price spans to the link element
    link.appendChild(nameSpan);
    link.appendChild(priceSpan);
    
    // append the link element to the list item
    listItem.appendChild(link);
    
    // append the list item to the wishlist items list
    wishlistItems.appendChild(listItem);
  }


async function addStock() {

    const name = document.getElementById('name').value;

    try {
          const response = await fetch(`/search/getPrice?name=${name}`);
          const data = await response.json();
          const price = data;


          // I have to edit this so it includes the url to the stock analisis for the news dive in...
          addWishlistItem(name, price);

        } catch (error) {
        console.error(error);
    }


    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    wishlist.push(name)

    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    document.getElementById('name').value = '';


}




function deleteStock() {

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    const wishlistItems = document.getElementById('wishlist-items');

    wishlistItems.addEventListener('click', (event) => {

      if (event.target.tagName === 'SPAN') {
        // The clicked element was an 'li' element inside the 'ul'
        console.log(event.target.innerHTML);

        for(let i = 0; i < wishlist.length; i++) {
            if(event.target.innerHTML.toLowerCase() === wishlist[i].toLowerCase()) {
                // Remove the item from the wishlist array
                wishlist.splice(i, 1);
                // Remove the clicked li element from the DOM
                event.target.parentNode.removeChild(event.target);
                // Exit the loop since we've found a match
                break;
            }
        }

        localStorage.setItem('wishlist', JSON.stringify(wishlist));


      }
    });


}