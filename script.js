
const learnMoreButton = document.getElementById("learnMoreButton");
const aboutParagraph = document.getElementById("about-paragraph");

learnMoreButton.addEventListener("click", () => {
    aboutParagraph.textContent = "[Extended bio or more details about yourself here]";
    // Optionally, you can add a CSS class for styling the expanded text
});
const cvButton = document.getElementById("cvButton");
cvButton.addEventListener("click", () => {
    window.open("Copy of Mashudu (TechSupport)_Resume (1).pdf", "_blank"); // Replace with your CV file link
});

// ... rest of your script.js code ... 
