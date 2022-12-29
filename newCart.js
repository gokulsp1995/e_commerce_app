//  ToDo
//  Create a cart list with the added elements
//  first create the div and add classes
//  When cart button is clicked , display the cart on the webpage with all the items selected
//  dimensions to be corrected

// check if the item is already on list, 
// if added, block the eventListener
// if not, enable the add button
// update the quantity each time for multiple add

let addButtons = document.querySelectorAll(".addButton");
let remButtons = document.querySelectorAll(".remButton");
let sizeChart = document.querySelectorAll(".sizes label"); 
let shoeSection = document.querySelectorAll(".eachOfTheShoes");
let checkButtons = document.querySelectorAll(".sizeRadio");
let nameOfShoes = document.querySelectorAll(".shoeName");
let cartItem = document.querySelector(".cartItem");
let price = document.querySelector(".price");
let imageOfShoe = document.querySelector(".shoeImage");
let quantityInCart = document.createElement("p");
let mainCartList = document.querySelector("#bodyDiv");

for ( let checkBtn of checkButtons) {
    checkBtn.addEventListener("click", () => { 
        for ( let i of checkButtons ) {
            if (i.checked) { 
                i.parentElement.style.backgroundColor = "var(--white)";
                i.parentElement.style.color = "var(--matteBlack)";
                i.parentElement.style.borderRadius = "5px";
            }
            else {
                i.parentElement.style.backgroundColor = "transparent";
                i.parentElement.style.color = "var(--white)";
            }
        }
    });
}
let shoeNamesArray = [
    {
        name: "Nike ZoomX Invincible Run Flyknit 2",
        cost: "₹ 16995",
        src: "https://res.cloudinary.com/dj0nbhjiy/image/upload/v1667232998/zoomx-invincible-run-flyknit-2-road-running-shoes-xrCMmF-removebg-preview_q8hncd.png"
    },
    {
        name: "Nike Air Zoom Pegasus 39",
        cost: "₹ 10495",
        src: "https://res.cloudinary.com/dj0nbhjiy/image/upload/v1667243325/custom-nike-air-zoom-pegasus-39-by-you-removebg-preview_duqi3i.png"
    },
    {
        name: "Nike Air Max 270",
        cost: "₹ 13995",
        src: "https://res.cloudinary.com/dj0nbhjiy/image/upload/v1667243745/air-max-270-shoes-l6NpTq-removebg-preview_foqtfq.png"
    },
    {
        name: "Adidas ULTRA 4D SHOES",
        cost: "₹ 21999",
        src: "https://res.cloudinary.com/dj0nbhjiy/image/upload/v1667244682/Ultra_4D_Shoes_Black_GZ1591_01_standard-removebg-preview_szxmir.png"
    },
    {
        name: "Adidas ULTRABOOST 22",
        cost: "₹ 19999",
        src: "https://res.cloudinary.com/dj0nbhjiy/image/upload/v1667245093/ULTRABOOST_22_White_GW1915_01_standard-removebg-preview_fx5c04.png"
    },
    {
        name: "Adidas WEB BOOST RUNNING",
        cost: "₹ 14999",
        src: "https://res.cloudinary.com/dj0nbhjiy/image/upload/v1667247924/Web_BOOST_Running_Sportswear_Lifestyle_Shoes_Black_GZ6445_01_standard-removebg-preview_ms38j1.png"
    },
    {
        name: "Puma Deviate NITRO Elite Carbon",
        cost: "₹ 17999",
        src: "https://res.cloudinary.com/dj0nbhjiy/image/upload/v1667315910/Deviate-NITRO-Elite-Carbon-Running-Shoes-Men-removebg-preview_il4iz9.png"
    },
    {
        name: "Puma one8 Virat Kohli Velocity Nitro",
        cost: "₹ 17999",
        src: "https://res.cloudinary.com/dj0nbhjiy/image/upload/v1667316462/one8-Virat-Kohli-Velocity-Nitro-2-Men_s--Running-Shoes-removebg-preview_cloubm.png"
    },
    {
        name: "Puma Fast-Trac Nitro",
        cost: "₹ 17999",
        src: "https://res.cloudinary.com/dj0nbhjiy/image/upload/v1667316835/Fast-Trac-Nitro-Men_s-Running-Shoes-removebg-preview_sz804w.png"
    }
];
//  1 array of object add 2 

    for ( let shoeNameArr in shoeNamesArray) {
        console.log("forLoopRun");
        console.log(shoeNameArr);
        console.log(shoeNamesArray[shoeNameArr]);
        mainCartList.innerHTML += 
        `<div class="shoeCartDiv">
            <div id="nameAndCostAlign">
                <p class="shoeNameParagraph">${shoeNamesArray[shoeNameArr].name}</p>
                <p class="shoeCostParagraph">Price: ${shoeNamesArray[shoeNameArr].cost}</p>
            </div>    
                <img class="shoeImage" src="${shoeNamesArray[shoeNameArr].src}" width="200px" alt="Image for shoe"/>
            
            <div class="cart">
                    <button class="addButton">Add Item</button>
                    <button class="remButton">Remove</button>
            </div>
        </div>`;
        // console.log(mainCartList);

        // let shoeCartDiv = document.querySelector(".shoeCartDiv");
        // let shoeNameParagraph = document.querySelector('.shoeNameParagraph');
        // let shoeCostParagraph = document.querySelector('.shoeCostParagraph');
        // let shoeImage = document.querySelector('.shoeImage');
        // let brandName = shoeNamesArray[shoeNameArr].name;

       
        // shoeCartDiv.style.border = "2px solid red";
        // shoeCostParagraph.textContent = shoeNamesArray[shoeNameArr].cost;
        
        // shoeNameParagraph.textContent = shoeNamesArray[shoeNameArr].name;
        // shoeImage.src = shoeNamesArray[shoeNameArr].src;
        // shoeCartDiv.appendChild(shoeNameParagraph);
        // shoeCartDiv.appendChild(shoeImage);
        // shoeCartDiv.appendChild(shoeCostParagraph);

        // mainCartList.appendChild(shoeCartDiv);
        // shoeNameArr[0].classList.add("gridValue")
        // brandName.style.cssText = "font-weight: 700";
        // max and min width , 
        // flex-gap
    }

    quantityInCart.classList.add("cartItemsClass");
    let count = 0;
    
    let createCartItem = () => {
            let shoeInCartDiv = document.createElement("div");
            shoeInCartDiv.classList.add("shoeInCartDiv")
            let shoeInCart = document.createElement("p"); 
            shoeInCart.classList.add("cartItemsClass");
        // if ( cartItem.contains(shoeInCart) ) {
            console.log(shoeInCart);
            cartItem.appendChild(shoeInCartDiv); // Adds a common new div
            shoeInCartDiv.appendChild(shoeInCart);   //Adds the item to the cart
            for ( let eachShoeName of nameOfShoes) {
                shoeInCart.textContent = eachShoeName.textContent;
            }
            console.log("Shoe Name: ", nameOfShoes.textContent);
            cartItem.style.backgroundColor = "var(--matteBlack";
            // console.log(createCartItem);
            console.log("Shoe Name: ",shoeInCart.textContent)
            count++;
            quantityInCart.textContent = count;
            cartItem.appendChild(quantityInCart);
            console.log("add",count);
        // }
        // else if (cartItem.contains(shoeInCart)) {
            count = count + 1;
        // }
    }
    let removeCartItem = () => {
        if ( count >= 1 ) {
            count--;
            quantityInCart.textContent = count;
            console.log("remove",count);
        }
        else if (count === 0 || count < 1 ) {
            cartItem.replaceChildren();
            // shoeInCart.textContent = "";
            cartItem.style.backgroundColor = "transparent";
            console.log(removeCartItem);
            console.log("remove",count);
            }
        }
for ( let addBtn of addButtons ) {
    addBtn.addEventListener("click", createCartItem);
}

for ( let remBtn of remButtons ){
    remBtn.addEventListener("click", removeCartItem);
}