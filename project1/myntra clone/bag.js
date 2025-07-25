const CONVENIENCE_FEES = 99;
let bagItemObjects;
onLoad();

function onLoad() {
  loadBagItemObjects();
  displayBagIcons();
  displayBagSummary();
  displayBagSummary();

}
// localStorage.removeItem("addBag");
// loadBagItemObjects();
//   displayBagIcons();
//   displayBagItem();
function displayBagSummary(){
  let  bagSummaryElement = document.querySelector(".bag-summary");

  let totalItems =bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;


  bagItemObjects.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price -bagItem.current_price;
  });
  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  bagSummaryElement.innerHTML = `<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItems}Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">₹ ${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-₹ ${totalDiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">₹ 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">₹ ${finalPayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`;
}


function loadBagItemObjects(){
  console.log(addBag);
  bagItemObjects = addBag.map(itemId => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id){
      return items[i];
    }
  }
  return null ;
  });
console.log(bagItemObjects);
}
function displayBagIcons(){
 
  let containerElement = document.querySelector(".bag-items-container");
let innerHTML = '';
 bagItemObjects.forEach(addBag => {
  innerHTML += generateItemHTML(addBag);
});
containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId){
   addBag = addBag.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem("addBag", JSON.stringify(addBag));
  loadBagItemObjects();
  displayBagIcons();
  displayBagItem();
  displayBagSummary();

}

function generateItemHTML(item){
return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${item.item_Image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company_name}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
  </div>`;}