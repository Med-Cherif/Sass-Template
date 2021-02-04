window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', scrollY > 0)
})