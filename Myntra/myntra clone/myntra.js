let addBag;
onLoad();

function onLoad() {
  let addBagStr = localStorage.getItem("addBag");
  addBag = addBagStr ? JSON.parse(addBagStr) : [];
  displayItemsOnHomePage();
  displayBagItem();
}
function addToBag(itemId){
addBag.push(itemId);
localStorage.setItem('addBag', JSON.stringify(addBag));
displayBagItem();
}  

function displayBagItem(){
  let bagItemsCount = document.querySelector(".bag-add-count");
  
  if (addBag.length > 0){
    console.log("i am here");
    bagItemsCount.style.visibility = "visible";
    bagItemsCount.innerText = addBag.length;
  } else {
 bagItemsCount.style.visibility = "hidden";
}
}

function displayItemsOnHomePage(){
  let itemsContainer =document.querySelector(".items-container");
  if(!itemsContainer){
    return ; 
  }
  let innerHTML='';
  items.forEach(item => {
    innerHTML += `
     <div class="item-container">
          <img class="item-image" src="${item.item_Image}" alt="1item">
          <div class="rating">
            ${item.rating.stars}⭐ | ${item.rating.no0fReviews}
          </div>
          <div class="companyname">
         ${item.company_name}
          </div>
          <div class="itemname">
              ${item.item_name}
          </div>
          <div class="price">
              <span class="currentprice"> Rs ${item.current_price}</span>
              <span class="originalprice"> Rs ${item.original_price}</span>
              <span class="discount">( ${item.discount_percentage}% OFF)</span>
          </div>
          <button class="btnbag" onclick="addToBag(${item.id})">
              Add To Bag
          </button>
      </div>`
  });
  itemsContainer.innerHTML = innerHTML;
  
}

