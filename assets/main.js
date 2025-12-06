//================== Filter =================
const filter_tabs = document.querySelectorAll(".filter-btn");
const filter_tabs2 = document.querySelectorAll(".filter-btn2");
const filter_contents = document.querySelectorAll(".filter [data-content]");

filter_tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        filter_contents.forEach((fc) => {
            fc.classList.remove("active");
        });

        target.classList.add("active");



        filter_tabs.forEach(tab =>{
            tab.classList.remove('active')
        });

    tab.classList.add('active');
    });
});





//================== Theme =================
const theme_btn = document.getElementById("theme-btn");

theme_btn.addEventListener("click", ()=>{
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme");

    //chang icon
    theme_btn.classList.toggle("ri-moon-line");  //moon icon 
    theme_btn.classList.toggle("ri-sun-line");  //sun icon   
});




//================== Scroll Reveal Animation =================
const sr = ScrollReveal({
    origin: "top",
    distance: "600px",
    duration: 2500,
    delay: 400,
    reset: true,
});

sr.reveal(`.profile-data .imgBx`);
sr.reveal(`.profile-data .name`, { delay: 500 });
sr.reveal(`.profile-data .profession`, { delay: 600 });
sr.reveal(`.profile-data .socials`, { delay: 700 });
sr.reveal(`.profile-info`, {interval: 100, delay: 700 });
sr.reveal(`.profile-btns`, { delay: 800 });
sr.reveal(`.filter-tabs`, { delay: 900 });
sr.reveal(`.filter-sections`, { delay: 1000 });




//================== يتم تشغيله عند لمس العنصر =================
const touchBox = document.getElementById("touch-box");
// عند بداية اللمس
touchBox.addEventListener("touchstart", () => {
    touchBox.classList.add("active");
    touchBox.innerText = "لمستني!";
});

// عند تحريك الإصبع
touchBox.addEventListener("touchmove", (event) => {
    const touch = event.touches[0]; // النقطة الحالية للمس
    touchBox.innerText = `X: ${touch.clientX}, Y: ${touch.clientY}`;
});

// عند إنهاء اللمس
touchBox.addEventListener("touchend", () => {
    touchBox.classList.remove("active");
    touchBox.innerText = "المسني أو اسحبني";
});





//================== تغيير اللون بناءً على موقع اللمس =================

touchBox.addEventListener("touchmove", (event) => {
    const touch = event.touches[0];
    const color = `rgb(${touch.clientX % 255}, ${touch.clientY % 255}, 150)`;
    touchBox.style.backgroundColor = color;
});
