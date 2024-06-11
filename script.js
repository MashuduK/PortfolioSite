const learnMoreButton = document.getElementById("learnMoreButton");
const aboutParagraph = document.getElementById("about-paragraph");

learnMoreButton.addEventListener("click", () => {
    aboutParagraph.textContent = "I'm passionate about technology's power to streamline and enhance everyday processes, whether it's troubleshooting a complex IT issue for a user or developing elegant code to automate a task. I believe in a collaborative approach to problem-solving, always seeking to understand the needs of both the end-user and the organization.\n\nBeyond my technical skills, I'm a lifelong learner with a thirst for knowledge. I enjoy exploring new technologies and programming languages, always striving to expand my skill set and stay at the forefront of the industry. I'm also a firm believer in the power of teamwork and collaboration, and I thrive in environments where I can share knowledge and learn from others.\n\nOutside of work, I enjoy tinkering with personal projects, from building small web applications to experimenting with data analysis techniques. I'm also an avid reader and podcast listener, constantly seeking to broaden my horizons and gain new insights.\n\nWhether I'm resolving technical issues, writing code, or simply exploring new ideas, I'm driven by a desire to make a positive impact. I'm excited about the future of technology and eager to contribute my skills and passion to help organizations thrive in the digital age.";
    aboutParagraph.classList.toggle("expanded");
});

// Handle CV button click
const cvButton = document.getElementById("cvButton");
cvButton.addEventListener("click", () => {
    window.open("Copy of Mashudu (TechSupport)_Resume (1).pdf", "_blank"); // Replace with your CV file link
});

// ... rest of your script.js code ... 
