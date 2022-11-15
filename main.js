const emailInputField = document.getElementsByClassName('subscribe__input');
const notifyButton = document.querySelector('.subscribe__button');
const emailErrorText = document.querySelector('.subscribe__input-error');

let viewportWidth = 0;
const queryWidth = 750;

notifyButton.addEventListener('click', function (e) {
    e.preventDefault();

    viewportWidth = window.innerWidth;

    if (!emailInputField[0].validity.valid) {
        emailErrorText.classList.remove('hide');
    } else {
        emailErrorText.classList.add('hide');
    };

    if (!emailInputField[0].validity.valid && (viewportWidth < queryWidth)) {
        notifyButton.classList.add('button-spacer');
    } else {
        notifyButton.classList.remove('button-spacer');
    };
});

// Fixing a small bug that would mess up classes when changing viewport size while
// getting the email check error
window.addEventListener('resize', function () {
    viewportWidth = window.innerWidth;

    if (!emailInputField[0].validity.valid && (viewportWidth > queryWidth)) {
        notifyButton.classList.remove('button-spacer');
    } else if (!emailInputField[0].validity.valid && (viewportWidth < queryWidth)) {
        notifyButton.classList.add('button-spacer');
    }
})