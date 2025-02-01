// Countdown Timer
const countDownDate = new Date("May 17, 2025 00:00:00").getTime();

const timer = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        "<h2>Countdown to JISMUN'25:</h2>" +
        "<p>" + days + "d " + hours + "h " + minutes + "m " + seconds + "s </p>";

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "<h2>Event Started!</h2>";
    }
}, 1000);

// Smooth Scroll Function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
