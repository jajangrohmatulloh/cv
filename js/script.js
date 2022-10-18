const header = document.getElementsByTagName('header')[0];
const about = document.getElementById('about');
const navbarItems = document.getElementsByClassName('navbar-items')[0];

document.addEventListener('scroll', function (e) {
    window.scrollY > about.offsetTop - 10
        ? header.classList.add('navbar-fixed')
        : header.classList.remove('navbar-fixed');
});

const hamburger = document.getElementsByClassName('hamburger')[0];

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('toggle');
    header.classList.toggle('navbar-items-collapse');
});
