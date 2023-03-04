const switchButton = document.getElementById('formToggler');
const signUpForm = document.getElementById('signUp');
const logInForm = document.getElementById('logIn');
const accQuest = document.getElementById('accQuest');

// Switch btn function
switchButton.onclick = ()=> {
    signUpForm.classList.toggle('d-none');
    logInForm.classList.toggle('d-none');

    if(signUpForm.classList.contains('d-none')) {
        accQuest.innerHTML = "Don't have an account?";
        switchButton.innerText = "Sign Up"
    } else {
        accQuest.innerHTML = "Already have an account?";
        switchButton.innerText = "Sign In"
    }
}