function details(itemName)

{
window.open (itemName+ ".html", "_blank");
}

var numItems = 0;
var price = 0;
var price_list = [25,30,100,20,450,500,400,600,150,125,175,200]







function cart(itemName)
{

var currentPrice = 0;
var currentName = "";
var currentImage = "";


if (localStorage.getItem("totalItems") !== null) 
{
    numItems = parseInt(localStorage.getItem("totalItems"));
    price = parseInt(localStorage.getItem("totalPrice"));
}


if(itemName !== undefined)
{
numItems += 1;
document.getElementById('cart').innerHTML = numItems;
alert(itemName + " has been added to your cart!");

switch(itemName)
{
case "love":
price += price_list[0];
currentPrice = price_list[0];
currentName = "Love Spell";
currentImage = "media/Love Spell.png";
break;

case "rage":
price += price_list[1];
currentPrice = price_list[1];
currentName = "Rage Spell";
currentImage = "media/Rage Spell.png";
break;

case "wealth":
price += price_list[2];
currentPrice = price_list[2];
currentName = "Wealth Spell";
currentImage = "media/Wealth Spell.png";
break;

case "intelligence":
price += price_list[3];
currentPrice = price_list[3];
currentName = "Intelligence Spell";
currentImage = "media/Intelligence Spell.png";
break;

case "axe":
price += price_list[4];
currentPrice = price_list[4];
currentName = "Enchanted Axe";
currentImage = "media/Enchanted Axe.png";
break;

case "bow":
price += price_list[5];
currentPrice = price_list[5];
currentName = "Enchanted Bow";
currentImage = "media/Enchanted Bow.png";
break;

case "club":
price += price_list[6];
currentPrice = price_list[6];
currentName = "Enchanted Club";
currentImage = "media/Enchanted Club.png";
break;

case "sword":
price += price_list[7];
currentPrice = price_list[7];
currentName = "Enchanted Sword";
currentImage = "media/Enchanted Sword.png";
break;

case "dragon":
price += price_list[8];
currentPrice = price_list[8];
currentName = "Hatchling Dragon";
currentImage = "media/Hatchling Dragon.png";
break;

case "chick":
price += price_list[9];
currentPrice = price_list[9];
currentName = "Phoenix Chick";
currentImage = "media/Phoenix Chick.png";
break;

case "cat":
price += price_list[10];
currentPrice = price_list[10];
currentName = "Spectral Cat";
currentImage = "media/Spectral Cat.png";
break;

case "unicorn":
price += price_list[11];
currentPrice = price_list[11];
currentName = "Unicorn Foal";
currentImage = "media/Unicorn Foal.png";
break;

}

var purchasedItem = 
{
id: itemName,
name: currentName,
price: currentPrice,
image: currentImage,
quantity:1
};

var detailedList = [];

if(localStorage.getItem("detailedCart") !== null)
{
detailedList = JSON.parse(localStorage.getItem("detailedCart"));
}

detailedList.push(purchasedItem);
localStorage.setItem("detailedCart", JSON.stringify(detailedList));


localStorage.setItem("totalItems", numItems)
localStorage.setItem("totalPrice", price)

}

var cartText = document.getElementById("cart");
if (cartText !== null)
{
cartText.innerHTML = numItems;
}

}




function checkout()
{
var savedCart = localStorage.getItem("detailedCart");
var container = document.getElementById("cart-container");
var summary = document.getElementById("cart-summary");

if(savedCart === null || savedCart ==="[]")
{
container.innerHTML = "<h2 id='header-text'>Your cart is currently empty!</h2>";
summary.style.display = "none";
return;
}

var cartArray = JSON.parse(savedCart);

var subTotal = 0;
var shipping = 10;

container.innerHTML ="";

for(var i = 0; i < cartArray.length; i++)
{
var item = cartArray[i];
var itemPrice = item.price * item.quantity;
subTotal += itemPrice;


container.innerHTML += `
<div style="border: 1px solid black; padding: 10px; margin-bottom: 10px; overflow:hidden ;">

<img src= "${item.image}" style="width:50px; height:50px; float:left; margin-right: 15px;">
<h4 id='body-text'>${item.name}</h4>
<p>Price: $${item.price} | Quantity: ${item.quantity}</p>

<input type="button" value="Remove Item" onclick="removeItem(${i})" class="body-text">

`;

}

var taxAmount = .06*subTotal;
var finalTotal = taxAmount + subTotal + shipping;

document.getElementById("subtotal").innerHTML = subTotal.toFixed(2);
document.getElementById("tax").innerHTML = taxAmount.toFixed(2);
document.getElementById("gtotal").innerHTML = finalTotal.toFixed(2);


}


function removeItem(index)
{
var cartArray = JSON.parse(localStorage.getItem("detailedCart"));

cartArray.splice(index, 1);

localStorage.setItem("detailedCart", JSON.stringify(cartArray));


var newNumItems = 0;
var newPrice = 0;

for (var i=0; i < cartArray.length; i++)
{
newNumItems += cartArray[i].quantity;
newPrice += cartArray[i].price;
}

localStorage.setItem("totalItems", newNumItems);
localStorage.setItem("totalPrice", newPrice);

var cartText = document.getElementById("cart");
if(cartText !== null)
{
cartText.innerHTML = newNumItems;
}


checkout();

}



function buy(itemName)

{
window.open("checkout.html", "_blank")
}




function negotiate(itemName)

{
//unable to implement, function is too complex.

}




function register()
{
window.open("register.html", "_blank")
}




function submitForm()
{
var newName = document.getElementById('fullname').value;
var newAd = document.getElementById('address').value;
var newEmail= document.getElementById('email').value;
var newPhone = document.getElementById('phone').value;
var newPw = document.getElementById('pw').value;

var userProfile = {name: newName, address:newAd,
email: newEmail, phone: newPhone, password: newPw};

let profileString = JSON.stringify(userProfile);
localStorage.setItem("registeredUser", profileString);


alert ("Registration successful! Welcome to the Emporium, " + newName + "!");

}





function validate(clickedID)
{
var nameBox = document.getElementById('fullname');
var adBox = document.getElementById('address');
var emailBox = document.getElementById('email');
var phoneBox = document.getElementById('phone');
var pwBox = document.getElementById('pw');
var confirmpwBox = document.getElementById('confirmpw');

var simpleEmail = /.+@.+\..+/;
var phonePattern = /^\d{10}$/;

if(clickedID === "fullname")
{
if(nameBox.value ==="")
{
nameBox.style.borderColor="red";
alert("Please enter your full name!");
}

else
{
nameBox.style.borderColor="green";
}
}


else if (clickedID ==="address")
{
if(adBox.value==="")
{
adBox.style.borderColor="red";
alert("Please enter your address!");
}

else
{
adBox.style.borderColor="green";
}

}

else if (clickedID ==="email")
{
if(emailBox.value ==="" || simpleEmail.test(emailBox.value) === false)
{
emailBox.style.borderColor="red";
alert("Please enter a valid email!");
}

else
{
emailBox.style.borderColor="green";
}
}

else if (clickedID ==="phone")
{

if(phonePattern.test(phoneBox.value) === false)
{
phoneBox.style.borderColor="red";
alert("Please enter a valid 10-digit number!");
}

else
{
phoneBox.style.borderColor="green";
}
}

else if (clickedID ==="pw")
{
if(pwBox.value.length < 8 || pwBox.value.length == 0)
{
pwBox.style.borderColor="red";
alert("Please enter minimum 8 characters!");
}

else
{
pwBox.style.borderColor="green";
}

}

else if (clickedID ==="confirmpw")
{
if(confirmpwBox.value != pwBox.value)
{
pwBox.style.borderColor="red";
alert("Confirm password should match the password!");
}

else
{
confirmpwBox.style.borderColor="green";
}
}
}




function emptyCart()
{
localStorage.removeItem("detailedCart");
localStorage.setItem("totalItems", 0);
localStorage.setItem("totalPrice",0);

numItems = 0;
price = 0;

var cartText = document.getElementById("cart");

if (cartText != null)
{
cartText.innerHTML = numItems;
}

alert("Your cart has been emptied!");
}





function filterProducts()
{
var searchInput = document.getElementById('searchBar').value.toLowerCase();

var categoryInput = document.getElementById('filter').value;


var products = document.getElementsByClassName('product');

for (var i = 0; i < products.length; i++)
{
var currentBox = products[i]

var boxCategory = currentBox.getAttribute('data-category');

var boxText = currentBox.innerText.toLowerCase();

var passesCategoryTest = (categoryInput === "all" || boxCategory === categoryInput);

var passesSearchTest = boxText.includes(searchInput);

if(passesCategoryTest === true && passesSearchTest === true)
{
currentBox.style.display = "";
}

else
{
currentBox.style.display = "none";
}

}


}



function receipt()
{
var savedCart = localStorage.getItem("detailedCart");
var cartArray = JSON.parse(savedCart);

var receiptHTML = "<h1 style= 'color:green;'>Your order has been placed successfully!</h1>";

receiptHTML += "<h3>Order Receipt:</h3><ul>";

for (var i = 0; i < cartArray.length; i++)
{
var item = cartArray[i];
receiptHTML += "<li>" + item.quantity + "x " + item.name + " -$" + item.price + "</li>";


}

receiptHTML += "</ul>";

var total = document.getElementById("gtotal").innerText;
receiptHTML += "<h2>Total paid: $"+ total + "</h2>";
receiptHTML += "<p>Thank you for shopping at Supernatural Emporium. Your order will be magically teleported to you shortly!</p>";

document.getElementById("cart-container").style.display = "none";
document.getElementById("cart-summary").style.display = "none";

var receiptBox = document.getElementById("receipt-container");
receiptBox.innerHTML = receiptHTML;
receiptBox.style.display = "block";

emptyCart();

}

