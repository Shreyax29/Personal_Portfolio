var typed= new Typed(".text", {
    strings: ["Tech Fanatic", "Frontend Developer", "ML Enthusiast", "Cloud Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
}); 

//footer year update dynamically
const currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;
 




