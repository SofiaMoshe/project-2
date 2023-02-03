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

color.disabled = true;

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
            // console.log(colorTheme);
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


// console.log(activities);

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

    const userName = document.getElementById("name");
    const emailAddress = document.getElementById("email");
    const zipCode = document.getElementById('zip');
    const cvvCode = document.getElementById('cvv');
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        // Name Validation
        const userNameValue = userName.value;
        const userNameRegex = /[a-zA-Z0-9]$/;
        const userNameTest = userNameRegex.test(userNameValue);
        
        if(userNameTest === false){
            e.preventDefault();
            userName.parentNode.classList.add("not-valid");
            userName.parentNode.classList.remove("valid");
            userName.lastElementChild;
            document.querySelector("#name-hint").style.display = "block";
        } else if(userNameTest === true){
            userName.parentNode.classList.remove("not-valid");
            userName.parentNode.classList.add("valid");
            document.querySelector("#name-hint").style.display = "none";
        }

       // Email Validation
        const emailValue = emailAddress.value;
        const emailRegex = /[^@]+@[^@.]+\.[a-z]+$/i;
        const emailAddressTest = emailRegex.test(emailValue);

        if(emailAddressTest === false){
            e.preventDefault();
            emailAddress.parentNode.classList.add("not-valid");
            emailAddress.parentNode.classList.remove("valid");
            document.querySelector("#name-hint").style.display = "block";
         } else if(emailAddressTest=true){
            emailAddress.parentNode.classList.remove("not-valid");
            emailAddress.parentNode.classList.add("valid");
            document.querySelector("#name-hint").style.display = "none";

         }
        // //  The "Register for Activities" section must have at least one activity selected.

            const activityHint = document.querySelector('#activities-hint');
            const activityInputList = document.getElementById('activities-box').getElementsByTagName('input');
            let checkedBox = false;
         
            for(let i = 0; i < activityInputList.length; i++) {
                if(activityInputList[i].checked === true) {
                    checkedBox = true;
                } 
            }

            if (checkedBox) {
                activities.classList.remove('not-valid')
                activities.classList.add('valid');
                activityHint.style.display = 'none';
            } else {
                activities.classList.remove('valid');
                activities.classList.add('not-valid');
                activityHint.style.display = 'block';
                e.preventDefault();
            }
        
            // Card Number creditCard
            const creditCardValue = creditCard.value
            const creditCardRegex = /^\d{13,16}$/;
            const creditCardTest = creditCardRegex.test(creditCardValue);
            
            if(creditCardTest === false){
                e.preventDefault();
                creditCard.parentNode.classList.add("not-valid");
                creditCard.parentNode.classList.remove("valid");
                creditCard.lastElementChild;
                document.querySelector("#name-hint").style.display = "block";
            } else if(creditCardTest === true){
                creditCard.parentNode.classList.remove("not-valid");
                creditCard.parentNode.classList.add("valid");
                document.querySelector("#name-hint").style.display = "none";
            }


            // Zip Code
            const zipCodeValue = zipCode.value;
            const zipCodeRegex = /^\d{5}$/;
            const zipCodeTest = zipCodeRegex.test(zipCodeValue);
            
            if(zipCodeTest === false){
                e.preventDefault();
                zipCode.parentNode.classList.add("not-valid");
                zipCode.parentNode.classList.remove("valid");
                zipCode.lastElementChild;
                document.querySelector("#name-hint").style.display = "block";
            } else if(zipCodeTest === true){
                zipCode.parentNode.classList.remove("not-valid");
                zipCode.parentNode.classList.add("valid");
                document.querySelector("#name-hint").style.display = "none";
            }

            // cvvCode
            const cvvCodeValue = cvvCode.value;
            const cvvCodeRegex = /^\d{3}$/;
            const cvvCodeTest = cvvCodeRegex.test(cvvCodeValue);
            
            if(cvvCodeTest === false){
                e.preventDefault();
                cvvCode.parentNode.classList.add("not-valid");
                cvvCode.parentNode.classList.remove("valid");
                cvvCode.lastElementChild;
                document.querySelector("#name-hint").style.display = "block";
            } else if(cvvCodeTest === true){
                cvvCode.parentNode.classList.remove("not-valid");
                cvvCode.parentNode.classList.add("valid");
            }

    });

    /*** Accessibility ***/

    const activityElement = document.querySelectorAll('input[type=checkbox]');

    for(i=0; i < activityElement.length; i++){
        activityElement[i].addEventListener("focus",(e)=>{
            e.target.parentElement.classList.add("focus");
        });
        activityElement[i].addEventListener("blur",(e)=>{
            e.target.parentNode.classList.remove("focus");
        });
    };