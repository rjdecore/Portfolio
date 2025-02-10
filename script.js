function toggleSection(id) {
    var sections = document.querySelectorAll("section");
    sections.forEach(section => {
        if (section.id === id) {
            section.classList.toggle("hidden");
        } else {
            section.classList.add("hidden");
        }
    });
}