function details(itemName)

{
window.open (itemName+ ".html", "_blank");
}

var numItems = 0;
var price = 0;
var price_list = [25,30,100,20,450,500,400,600,150,125,175,200]




function cart(itemName)
{


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
break;

case "rage":
price += price_list[1];
break;

case "wealth":
price += price_list[2];
break;

case "intelligence":
price += price_list[3];
break;

case "axe":
price += price_list[4];
break;

case "bow":
price += price_list[5];
break;

case "club":
price += price_list[6];
break;

case "sword":
price += price_list[7];
break;

case "dragon":
price += price_list[8];
break;

case "chick":
price += price_list[9];
break;

case "cat":
price += price_list[10];
break;

case "unicorn":
price += price_list[11];
break;

}


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
var savedItems = localStorage.getItem("totalItems");
var savedPrice = localStorage.getItem("totalPrice");

if (savedItems === null)
{
savedItems = 0;
savedPrice = 0;
}

document.getElementById('titems').innerHTML = savedItems;
document.getElementById('tprice').innerHTML = savedPrice;
}




function buy(itemName)

{
window.open("checkout.html", "_blank")
}

function negotiate(itemName)

{

}

function register()
{
window.open("register.html", "_blank")
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
localStorage.clear();

numItems = 0;
price = 0;

var cartText = document.getElementById("cart");

if (cartText != null)
{
cartText.innerHTML = numItems;
}

alert("Your cart has been emptied!");


}