const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4animation() {
    var elemC = document.querySelector("#elem-container");
    var fixedIm = document.querySelector("#fixed-image");

    elemC.addEventListener("mouseenter", function () {
        fixedIm.style.display = "block";
    })
    elemC.addEventListener("mouseleave", function () {
        fixedIm.style.display = "none";
    });

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var img = e.getAttribute("data-image");
            fixedIm.style.backgroundImage = `url(${img})`;
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 50,
        freeMode: true,
    });
}

function loaderAnimation() {
    var loader = document.querySelector('#loader');
    setTimeout(function () {
        loader.style.top = '-100%';
    }, 4000)
}

document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('customCursor');
    const customCursorArea = document.querySelector('#page5');
    const rect = customCursorArea.getBoundingClientRect();

    if (e.pageX >= rect.left && e.pageX <= rect.right && e.pageY >= rect.top && e.pageY <= rect.bottom) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
        cursor.style.opacity = 1; // Show the custom cursor
    } else {
        cursor.style.opacity = 0; // Hide the custom cursor
    }
});



loaderAnimation();
swiperAnimation();
page4animation();