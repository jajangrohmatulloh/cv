const header = document.getElementsByTagName('header')[0];
const about = document.getElementById('about');
document.addEventListener('scroll', function (e) {
    window.scrollY > about.offsetTop - 10
        ? header.classList.add('navbar-fixed')
        : header.classList.remove('navbar-fixed');
});

const hamburger = document.getElementsByClassName('hamburger')[0];

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('toggle');
});
