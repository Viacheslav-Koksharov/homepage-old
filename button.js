const refs = {
    btn: document.querySelector(".buttonUp"),
};

refs.btn.addEventListener('click', onButtonClick)

function onButtonClick(e) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
