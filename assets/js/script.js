// cOUNTER 
// window.addEventListener('scroll', reveal);
var reveals = document.querySelector('.reveal');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;

        var revealtop = reveals[i].getBoundingClientRect().top;

        var revealPoint = 50;

        if (revealtop < windowHeight - revealPoint) {

            let valueDisplay = document.querySelectorAll(".counts");
            let intervel = 1000;

            valueDisplay.forEach((valueDisplay) => {
                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let duration = Math.floor(intervel / endValue);
                let counter = setInterval(function () {
                    startValue += 1;
                    valueDisplay.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }

                }, duration);
            });

        } else {
            reveals[i].classList.remove('active');
        };

    };
};
const observer = new IntersectionObserver(reveal, options);
observer.observe(reveals);

