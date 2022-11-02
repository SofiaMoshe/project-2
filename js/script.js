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

const color = document.querySelector('#color');
const design = document.querySelector('#design');
const colorSelector = document.querySelectorAll('#color option');

color.disabled = true;

design.addEventListener('change', e => {
    color.disabled = false;
    for (let i = 0; i < colorSelector; i++) {
        const eventValue = e.target.value;
        let dataAttribute = colorSelector[i].getAttribute('data-theme');
        if (eventValue === dataAttribute) {

            colorSelector[i].hidden = false;
            colorSelector[i].setAttribute('selected', true);
        } else {
            colorSelector[i].hidden = true;
            colorSelector[i].setAttribute('selected', false);
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


