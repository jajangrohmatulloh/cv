const header = document.getElementsByTagName('header')[0];
const about = document.getElementById('about');
document.addEventListener('scroll', function (e) {
    window.scrollY > about.offsetTop
        ? header.classList.add('navbar-fixed')
        : header.classList.remove('navbar-fixed');
});
