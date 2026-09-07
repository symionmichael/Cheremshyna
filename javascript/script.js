// Button animation



// Navigation scrolling
const buttons = document.querySelectorAll("nav ul li button");

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        const targetId = button.dataset.target;
        const target = document.getElementById(targetId);

        target.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
        });
    });
});