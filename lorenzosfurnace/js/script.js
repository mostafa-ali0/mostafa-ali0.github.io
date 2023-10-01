/**
 * Home page slider functionality
 */
const carouselSlides = document.querySelectorAll('.carousel-slides-wrapper > img');
let carouselSlideIndex = 1;

/**
 * Author: w3schools
 * URL: https://www.w3schools.com/howto/howto_js_slideshow.asp
 */
let carouselButtonTraversal = direction => {
    for (var i = 0; i < carouselSlides.length; i++){
        carouselSlides[i].style.display = 'none';
    }
    carouselSlideIndex += direction;
    if (carouselSlideIndex > carouselSlides.length){carouselSlideIndex = 1;}
    if (carouselSlideIndex == 0){carouselSlideIndex = carouselSlides.length}
    carouselSlides[carouselSlideIndex-1].style.display = 'block';
}
// automatic slider
function changeSlide(){
    setTimeout(function(){carouselButtonTraversal(1)}, 6900);
    setTimeout(changeSlide, 6900);
}
changeSlide();

/**
 * Nav bar Toggle 
 */
const navButton = document.querySelector('.trigram');
navButton.classList.toggle('show');

let mobileNav = document.createElement('div');
mobileNav.classList.add('mobile-nav-container');
mobileNav.innerHTML = '<h6 class="cross-bold">&nbsp;&#215;</h6><a href="#header">HOMEPAGE</a><a href="#menu-items">MENU ITEMS</a><a href="#checkout">CHECKOUT</a><a href="#footer">CONTACT US</a>';

const welcome = document.querySelector('.welcome');
welcome.insertAdjacentElement('beforebegin', mobileNav);
let navToggle = () => {
    if (navButton.classList.contains('show')){
        mobileNav.style.left = '0';
    }else{
        mobileNav.style.left = '-70vw';
    }
    navButton.classList.toggle('show');
}
navButton.addEventListener('click', navToggle);
mobileNav.addEventListener('click', navToggle);
function resetNav(){
    if (window.innerWidth > 1000){
        mobileNav.style.display = 'none';
    }else{
       mobileNav.style.display = 'block';
    }
}
window.addEventListener('resize', resetNav);


/**
 * Add to cart
 */
const addtocartbtn = document.querySelectorAll('.addtocartbtn > button');
addtocartbtn.forEach(element => {
    element.addEventListener('click', function(){addToCart(element)});
});
var addToCart = btn => {
    let itemCard = btn.parentNode.parentNode;
    itemCard = itemCard.cloneNode(true);
    itemCard.classList.add('checkout-card');
    const removebtn = itemCard.querySelector('.addtocartbtn > button')
    itemCard.lastElementChild.removeChild(removebtn);
    const addbtn = document.createElement('button');
    addbtn.innerHTML = 'REMOVE FROM CART';
    addbtn.addEventListener('click', function(){removeFromCart(addbtn)});
    itemCard.lastElementChild.append(addbtn);
    document.querySelector('.checkout-card-container').append(itemCard);
}

function removeFromCart(btn){
    const itemCard = btn.parentNode.parentNode;
    itemCard.remove();
}

/**
 * Search filter for menu items
 * URL: https://www.youtube.com/watch?v=sT6TCWt1YP8
 * Author: Dear Programmer
 */
 
document.querySelector('#search-input').addEventListener('input', filterList);

function filterList(){
    const searchInput = document.querySelector('#search-input');
    const filter = searchInput.value.toLowerCase();
    const menuItems = document.querySelectorAll('.item');

    menuItems.forEach((item) =>{
        let itemName = item.textContent;
        if(itemName.toLocaleLowerCase().includes(filter.toLocaleLowerCase())){
            item.parentElement.parentElement.style.display = '';
        }else{
            item.parentElement.parentElement.style.display = 'none';
        }
    });

    
}
 
/**
 * Form input 
 */

const submitButton = document.querySelector('#submitButtonOrder');
let submitOrder = () => {
    let orderObject = {
        firstName : document.querySelector('#firstName').value,
        lastName : document.querySelector('#lastName').value
    }
    let first = document.getElementById('firstName').value.length;
    let last = document.getElementById('lastName').value.length;
    let cardnum = document.getElementById('card-num').value.length;
    let cvv = document.getElementById('cvv').value.length;
    let expiry = document.getElementById('valid').value;
    
    if(first < 1){
        window.alert("I'm pretty sure you have a first name :)");
    }
    else if(last < 1){
        window.alert("I'm pretty sure you have a last name :)")
    }
    else if(cardnum < 16){
        window.alert("Your card number is less than 16 digits");
    }
    else if(cvv < 3){
        window.alert("Your cvv is less than 3 digits");
    }
    else if(expiry <= 122021){
        window.alert("Your card expiry is living in the past :)");
    }
    else{
        window.alert("Thanks for shopping! " + orderObject.firstName + " " + orderObject.lastName);
    }
    
}
submitButton.addEventListener('click', submitOrder);
