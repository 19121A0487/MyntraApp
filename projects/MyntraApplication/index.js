let bagItems=[]

onLoad();


function onLoad(){
    let bagItemsStr= localStorage.getItem('bagItems');
    bagItems=bagItemsStr?JSON.parse(bagItemsStr):[];
    displayItemsHomePage();
    displayBagIcon();

}


function addtoBag(itemID){
    bagItems.push(itemID);
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    displayBagIcon();
}
function displayBagIcon(){
    let bagItemCountElement=document.querySelector('.bag-item-count');
    
    if(bagItems.length>0){
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerText=bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility='hidden';
    }
}

function displayItemsHomePage(){
    let itemsContainerElement=document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }


let innerHTML='';
items.forEach(item=>{
    innerHTML+=`
    <div class="item-container">
        <div class="for-rating">
            <img class="image" src="${item.item_image}" alt="PowerLook">
            <span class="rating">${item.rating.stars}⭐|${item.rating.reviews}</span>
        </div>
        <div class="brand-name">
        ${item.brand_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">₹${item.price.current_price}</span>
            <span class="original-price">₹${item.price.original_price}</span>
            <span class="discount">${item.price.discount}</span>
        </div>
        <div class="bag" onclick="addtoBag(${item.id})">ADD TO BAG</div>
                
    </div>
`;
})


itemsContainerElement.innerHTML=innerHTML;

}

