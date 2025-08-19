const skill = document.querySelectorAll(".descard");

skill.forEach(item => {
    item.addEventListener("click", () => {
        let clickedskill = item.querySelector(".skillcontainer");

        // Check if clicked one is already open
        let isOpen = clickedskill.style.display === "flex";

        // Hide all skill containers
        document.querySelectorAll(".skillcontainer").forEach(container => {
            container.style.display = "none";
        });

        // Show the clicked one only if it was closed
        if (!isOpen) {
            clickedskill.style.display = "flex";
        }
    });
});
