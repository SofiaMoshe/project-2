/***  The "Name" field: ***/
// Use the .focus() method on the <input type="text"> element for the "Name" field.

document.getElementById('name').focus();


/***  "Job Role" section: ***/
// Hide the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.

document.getElementById("other-job-role").style.display = "none";

const jobRole = document.querySelector('select[id="title"]');

jobRole.addEventListener('change', e => {
    if (e.target.value === 'other') {
        document.getElementById('other-job-role').style.display = 'block';
    } else {
        document.getElementById('other-job-role').style.display = "none";
    }
});


/*** "T-Shirt Info" section: ***/

const design = document.getElementById("design");
const optionColor = color.children;

design.addEventListener("change", (e)=>{
    color.disabled = false;
    for(let i=0; i < optionColor.length; i++){
    const colorValue = e.target.value;
    const colorTheme = optionColor[i].getAttribute("data-theme");
        if (colorValue === colorTheme){
            optionColor[i].hidden = false;
            optionColor[i].setAttribute("selected", true);
            color.getElementsByTagName("option")[i].selected = true;

        } else if (colorValue !== colorTheme) {
            optionColor[i].hidden = true;
            optionColor[i].setAttribute("selected", false);
            console.log(colorTheme);
        }
    }
});

/***  Register for activities ***/

const activities = document.getElementById("activities");
const activitiesCost = document.getElementById('activities-cost');
let total = 0;

activities.addEventListener('change', e => {
    var cost = parseInt(e.target.getAttribute("data-cost"));

    const checked = e.target.checked;

    if (checked === true) {
        total += cost;
    } else {
        total -= cost;
    }
    activitiesCost.innerHTML = `Total: $${total}`;

})


console.log(activities);

/***  Payment Info ***/

const payment = document.getElementById("payment");
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');

payPal.style.display = 'none';
bitCoin.style.display='none';

payment.children.item(1).setAttribute("selected", "select");

payment.addEventListener("change", (e)=>{
    
    if(e.target.value === "paypal"){
        payPal.style.display = "block";
        bitCoin.style.display = "none";
        creditCard.style.display = "none";
    };
 
    if(e.target.value === "bitcoin"){
        bitCoin.style.display = "block";
        payPal.style.display = "none";
        creditCard.style.display = "none";
    };


    if (e.target.value === "credit-card"){
        payPal.style.display = "none";
        bitCoin.style.display = "none";
        creditCard.style.display = "block";
    }

});


/*** Form Validation ***/

const form = document.querySelector('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const creditCardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvvCode = document.getElementById('cvv');

/*** Name Validation ***/
form.addEventListener("submit", (e)=>{
    const nameValue = userName.value
    const nameRegex = /[a-zA-Z0-9]$/
    const nameTest = nameRegex.test(nameValue);
    if(nameTest === false){
        e.preventDefault();
        nameEle.parentNode.classList.add("not-valid");
        nameEle.parentNode.classList.remove("valid");
        nameEle.lastElementChild;
        document.querySelector("#name-hint").style.display = "block";
    } 

    //*** Email Validation ***/
    const emailValue = email.value
    const emailRegex = /[^@]+@[^@.]+\.[a-z]+$/i;
    const emailTest = emailRegex.test(emailValue);

    if(emailTest === false){
        e.preventDefault();
        email.parentNode.classList.add("not-valid");
        email.parentNode.classList.remove("valid");
        document.querySelector("#email-hint").style.display = "block";
    } 

    if(emailTest === true){
        email.parentNode.classList.remove("not-valid");
        email.parentNode.classList.add("valid");
        document.querySelector("#email-hint").style.display = "none";
    }

    //*** Activities Validation ***/

    let activities = [];
    let activ = document.getElementById("activities-box")


    for (i=0; i < checkBoxes.length; i++){
        activities += checkBoxes[i].checked;
    }

    if (activities.includes(true)){
        activ.parentNode.classList.remove("not-valid");
        activ.parentNode.classList.add("valid");
        document.querySelector("#activities-hint").style.display = "none";
    } 

    if (activities.includes(true) === false){
        e.preventDefault();
        activ.parentNode.classList.add("not-valid");
        activ.parentNode.classList.remove("valid");
        document.querySelector("#activities-hint").style.display = "block";
    }

    if (payMethod.value === "credit-card" ) {
        const cardNumber = document.getElementById("cc-num");
        const zipCode = document.getElementById("zip");
        const cvv = document.getElementById("cvv");
        
    /*** Credit Card Validation ***/
        const ccVal = cardNumber.value
        const ccRegex = /\d{13,16}?$/;
        const ccTest = ccRegex.test(ccVal);
        
        if(ccTest === false){
            e.preventDefault();
            cardNumber.parentNode.classList.add("not-valid");
            cardNumber.parentNode.classList.add("valid");
            document.querySelector("#cc-hint").style.display = "block";
        }
        
        if(ccTest === true){
            cardNumber.parentNode.classList.remove("not-valid");
            cardNumber.parentNode.classList.add("valid");
            document.querySelector("#cc-hint").style.display = "none";
        }
        
    /*** Zip Code Validation ***/
        const zipValue = zipCode.value
        const zipRegex = /^\d{5}?$/;
        const zipTest = zipRegex.test(zipValue);
        
        if(zipTest === false){
            e.preventDefault();
            zipCode.parentNode.classList.add("not-valid");
            zipCode.parentNode.classList.remove("valid");
            document.querySelector("#zip-hint").style.display = "block";
        }
        
        if(zipTest === true){
            zipCode.parentNode.classList.remove("not-valid");
            zipCode.parentNode.classList.add("valid");
            document.querySelector("#zip-hint").style.display = "none";
        }
        
        /*** CVV Validation ***/
        
        const cvvVal = cvv.value
        const cvvRegex = /^\d{3,4}?$/;
        const cvvTest = cvvRegex.test(cvvVal);
        const cvvHint = document.getElementById("cvv-hint");
        
        if(cvvTest === false){
            e.preventDefault();
            cvv.parentNode.classList.add("not-valid");
            cvv.parentNode.classList.remove("valid");
            document.querySelector("#cvv-hint").style.display = "block";
        }
        
        if(cvvTest === true){
            cvv.parentNode.classList.remove("not-valid");
            cvv.parentNode.classList.add("valid");
            document.querySelector("#cvv-hint").style.display = "none";
        }
    } 
    });

    /*** Accessibilityn ***/

    const activityElement = document.querySelectorAll('input[type=checkbox]');

    for(i=0; i < activityElement.length; i++){
        activityElement[i].addEventListener("focus",(e)=>{
            e.target.parentElement.classList.add("focus");
        });
        activityElement[i].addEventListener("blur",(e)=>{
            e.target.parentNode.classList.remove("focus");
        });
    };