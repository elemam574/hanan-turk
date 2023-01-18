let fixedNav = document.querySelector('.header');
window.addEventListener("scroll", () =>  {
    window.scrollY > 50 ? fixedNav.classList.add('active') : fixedNav.classList.remove('active');
});

function showDetails() {
    let caretList = document.querySelectorAll('.caret-dn');

    caretList.forEach((caret) => {
        caret.addEventListener('click', (e) => {
            caret.classList.toggle('rotated');
            let caretParent = caret.parentElement;
            let showParent = caretParent.parentElement;
            showParent.children[1].classList.toggle('active');
        });
    })
};
showDetails();