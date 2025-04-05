document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill-fill");
    skills.forEach(skill => {
        const fillPercentage = skill.getAttribute("data-fill");
        skill.style.width = fillPercentage + "%";
    });
});
