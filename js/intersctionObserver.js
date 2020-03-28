const welcome = document.querySelector('#welcomeSection');

const options = {
    root: null,
    threshold: 0,
    rootMargin: '-10px'
};

const observer = new IntersectionObserver(function(entries,observer) {
entries.forEach(entry => {
    console.log(entry.target)
})
}, options);

observer.observe(welcome);