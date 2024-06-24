const CONVININENCE_FEES=99;
let bagItemObjects;
onLoad();

displayBagSummary();
function onLoad(){
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
    
}

function displayBagSummary(){
    let bagSummaryElement=document.querySelector('.bag-summary');
    let totalItems=bagItemObjects.length;
    let totalMRP=0;
    let totalDiscount=0;
    
    bagItemObjects.forEach(bagItem=>{
        totalMRP+=bagItem.price.original_price;
        totalDiscount+=bagItem.price.original_price-bagItem.price.current_price;

    })
    let finalPayment=totalMRP-totalDiscount+CONVININENCE_FEES;

    bagSummaryElement.innerHTML=`
    <div class="bag-details-container">
                <div class="price-header">PRICE DETAILS(${totalItems} items)</div>
                <div class="price-item">
                    <span class="price-item-tag">Total MRP</span>
                    <span class="price-item-value">₹${totalMRP}</span>
                </div>
                <div class="price-item">
                    <span class="price-item-tag">Discount on MRP</span>
                    <span class="price-item-value priceDetail-base-discount" >-₹${totalDiscount}</span>
                </div>
                <div class="price-item">
                    <span class="price-item-tag">Convinience Fee</span>
                    <span class="price-item-value">₹99</span>
                </div>
               
                
                <div class="price-footer">
                    <span class="price-item-tag">Total Amount</span>
                    <span class="price-item-value">₹${finalPayment}</span>
                </div> 
                <button class="btn-place-order">
                    <div class="css-xjhrni">PLACE ORDER</div>
                </button>
            </div>`;

}

function loadBagItemObjects(){
    console.log(bagItems);
    bagItemObjects=bagItems.map(itemID=>{
        for(let i=0;items.length;i++){
            if(itemID==items[i].id){
                return items[i];            }
        }
    });
    console.log(bagItemObjects);
}

function displayBagItems(){
    
    let containerElement = document.querySelector('.bag-items-container');
    // containerElement.innerHTML = 
    let innerHTML='';
   bagItemObjects.forEach(bagItem => {
    innerHTML+=generateItemHTML(bagItem);
   });
    containerElement.innerHTML=innerHTML;
}

function removeFromBag(itemID){
    bagItems= bagItems.filter(bagItemID=>bagItemID!=itemID);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagIcon();
    displayBagItems();
}

function generateItemHTML(item){
    return `<div class="bag-item-container">
            <div class="item-left-part">
                <img class="bag-item-img" src="./${item.item_image}" alt="Item Image" alt="shirt-image">
            </div>
            <div class="item-right-part">
                <div class="company">${item.brand_name}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price-container">
                    <div class="current-price">₹${item.price.current_price}</div>
                    <div class="original-price">₹${item.price.original_price}</div>
                    <div class="discount-percentage">${item.price.discount}</div>
                </div>
                <div class="return-period">
                    <span class="return-period-days">7 days</span> return available
                </div>
                <div class="delivery-details">Delivery by
                    <span class="delivery-details-days">10 Nov 2023</span>
            </div>
            <div class="remove-from-cart" onclick="removeFromBag(${item.id})">x</div>
        </div>`;

}