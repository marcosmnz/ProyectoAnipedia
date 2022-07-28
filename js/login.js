

const openLogin = () => {
    document.querySelector("#modal-login").classList.add("is-active");

};

const openSignUp = () => {
    document.querySelector("#modal-signup").classList.add("is-active");

};

document.querySelector('#openModalLogin').addEventListener('click', openLogin);
document.querySelector('#openModalSignUp').addEventListener('click', openSignUp);

