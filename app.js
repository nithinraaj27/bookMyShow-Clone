const bannerContent = document.querySelector('.banner-content');
const itemWidth = document.querySelector('.banner-item').offsetWidth

const lbutton = document.getElementById('bleft');
const rbutton = document.getElementById('bright');

lbutton.addEventListener('click', () => {
    console.log('left');
    // bannerContent.style.transform = `translateX(${bannerContent.scrollLeft - itemWidth}px)`;
    bannerContent.style.animationPlayState = 'paused';
    bannerContent.style.transform = `translateX(${bannerContent.scrollLeft - itemWidth}px)`;
})

rbutton.addEventListener('click', () => {
    console.log("right");
    // bannerContent.style.transform = `translateX(${bannerContent.scrollLeft + itemWidth}px)`;
    bannerContent.style.animationPlayState = 'paused'; // Pause the automatic scrolling
    bannerContent.style.transform = `translateX(${bannerContent.scrollLeft + itemWidth}px)`;
})

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".moviee-list")

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 300);
        clickCounter++;
        if (itemNumber - (6 + clickCounter) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 250}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
        }
    });
}); 

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

const buttons = document.querySelectorAll('.moviee-list-item-img');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        window.location.href = 'booking.html'
    })
})
