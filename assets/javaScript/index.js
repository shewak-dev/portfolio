document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll()

document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    projects.forEach(project => {
        observer.observe(project);
    });
});




function downloadResume() {
    window.location.href = "shewak.pdf";
 }
