//  ToDo
//  Create a cart list with the added elements
//  first create the div and add classes
//  When cart button is clicked , display the cart on the webpage with all the items selected
//  dimensions to be corrected

// check if the item is already on list, 
// if added, block the eventListener
// if not, enable the add button
// update the quantity each time for multiple add

// let addButtons = document.querySelector(".addButton");
// let remButtons = document.querySelectorAll(".remButton");
let sizeChart = document.querySelectorAll(".sizes label"); 
let shoeSection = document.querySelectorAll(".eachOfTheShoes");
let checkButtons = document.querySelectorAll(".sizeRadio");
let nameOfShoes = document.querySelectorAll(".shoeName");
let cartItem = document.querySelector(".cartItem");

let price = document.querySelector(".price");
let imageOfShoe = document.querySelector(".shoeImage");
let quantityInCart = document.createElement("p");
let mainCartList = document.querySelector("#bodyDiv");
let cartHeading = document.getElementById("cartHeading");

//     ('click',(event)=>{
//     anjali(event);
// } );

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
        // console.log(shoeNamesArray[shoeNameArr]);
        mainCartList.innerHTML += 
        `<div class="shoeCartDiv">
            <p class="shoeNameParagraph">${shoeNamesArray[shoeNameArr].name}</p>
            <p class="shoeCostParagraph">Price: ${shoeNamesArray[shoeNameArr].cost}</p>
            <img class="shoeImage" src="${shoeNamesArray[shoeNameArr].src}" width="200px" alt="Image for shoe"/>
            <button class="addButton">ADD</button>
            <button class="remButton">REMOVE</button>
        </div>`;
        // console.log(mainCartList);
        let shoeCartDiv = document.querySelector(".shoeCartDiv");
        let shoeNameParagraph = document.querySelectorAll('.shoeNameParagraph');
        
        // console.log("shoeNameParagraph",count5++," ",`${shoeNamesArray[shoeNameArr].name}`);
        
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

    //  function createCartItem(e) {
    //     // console.log("function: ", e);
    //     if ( cartItem.contains(shoeInCart) ) {
    //         count++;
    //     }
    //     else {
    //         let shoeInCartDiv = document.createElement("div");
    //         shoeInCartDiv.classList.add("shoeInCartDiv");
    //         let shoeInCart = document.createElement("p"); 
    //         shoeInCart.classList.add("cartItemsClass");
    //         let imageInCart = document.createElement("img");
    //         imageInCart.classList.add("imageInCart");
        
    //         cartItem.appendChild(shoeInCartDiv); // Adds a common new div
    //         cartItem.style.backgroundColor = "var(--matteBlack";
    //         cartItem.appendChild(quantityInCart);
        
    //         shoeInCartDiv.appendChild(shoeInCart);   //Adds the item to the cart
    //         for ( let eachShoeName of nameOfShoes) {
    //             shoeInCart.textContent = eachShoeName.textContent;
    //         }
    //         quantityInCart.textContent = count;
    //     }
    // }

        let addButtons = document.querySelectorAll(".addButton");
        let remButtons = document.querySelectorAll(".remButton");
        for ( let addBtn of addButtons ) {
            addBtn.addEventListener("click", (e) => {
                createCartItem(e);
                // console.log("addBtn", e.target.parentElement);
            });
            // console.log("Add: ",count1++, " ",addBtn);
        }

        // for ( let addBtn of addButtons ) {
        //     // console.log(addBtn);
        //     addBtn.addEventListener("click", (e) => {
        //         console.log("event console",e);
        //         anjali(e);
        //     });
            // console.log("Add: ",count1++, " ",addBtn);
            // }
            let addedShoeNameParagraph = document.querySelector(".addedShoeNameParagraph");
            let countForQuant = 0;
            let arrForParagraphs = [];

        function createCartItem(e) {
            // console.log("cart-event",e.target.parentElement);
            let cartSelectReference = e.target.parentElement;
            // console.log("children of cart: ",cartSelectReference.children);
            // let newDivInsideCart = document.createElement("div");
            
            // if ( `${cartSelectReference.children[0].textContent}` === )
            if ( arrForParagraphs.includes(cartSelectReference.children[0].textContent)){
                
                countForQuant = countForQuant + 1;
                console.log("countForQuantFor Repeat",countForQuant);
                
            }
            else if ( !arrForParagraphs.includes(cartSelectReference.children[0].textContent)){
                countForQuant++;
            cartItem.innerHTML += `
                <div class="newDivInsideCart">
                    <p class="addedShoeNameParagraph">${cartSelectReference.children[0].textContent}</p>
                    <p class="addedShoeQuantity">Quantity: <span>${countForQuant}</span></p>
                    <p class="addedShoeCost">${cartSelectReference.children[1].textContent}</p>
                    <img class="addedShoeNameImage" src="${cartSelectReference.children[2].src}" width="100px"/>
                </div>
            `;
            cartHeading.style.display = "block";
            console.log("countForQuant",countForQuant);
            arrForParagraphs.push(cartSelectReference.children[0].textContent);
            console.log("arrForParagraphs",arrForParagraphs);
            // console.log("Name of the clicked shoe: ",cartSelectReference.children);
            // console.log("Name inside clicked shoe: ",cartSelectReference.children[0]);
            }
        }   

        // function anjali(e){
        //     console.log("hello",e.target.parentElement);
        // }   
    let removeCartItem = () => {
        if ( countForQuant >= 1 ) {
            countForQuant--;
            quantityInCart.textContent = countForQuant;
            console.log("remove",countForQuant);
        }
        else if (countForQuant === 0 ) {
            cartItem.replaceChildren();
            // shoeInCart.textContent = "";
            cartItem.style.backgroundColor = "invisible";
            cartHeading.style.display = "none";
            // console.log(removeCartItem);
            // console.log("remove",count);
            }
        }
for ( let remBtn of remButtons ){
    remBtn.addEventListener("click", removeCartItem);
    // console.log("Remove: ", count1++, remBtn);
}