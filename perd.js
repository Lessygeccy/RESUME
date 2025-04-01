document.addEventListener("DOMContentLoaded", () => {
  
    const profileImg = document.getElementById("profile-img");
    const glowingElement = document.querySelector(".glowing");

    // Function to handle image loading errors
    function handleImageError() {
        console.log("Image failed to load, using fallback");
        profileImg.src = "/placeholder.svg?height=200&width=200&text=LS";
    }

    // Add error handler to the image
    profileImg.addEventListener("error", handleImageError);

    // Add print functionality (optional)
    window.printResume = () => {
        window.print();
    };

    // Add email functionality (optional)
    window.sendEmail = () => {
        window.location.href = "mailto:leskagecels@gmail.com";
    };

    // Check if device is mobile and adjust layout if needed
    function checkMobile() {
        const isMobile = window.innerWidth <= 768;
        document.body.classList.toggle("mobile-view", isMobile);

        // Adjust font sizes dynamically based on viewport width
        if (window.innerWidth < 380) {
            document.documentElement.style.fontSize = "14px";
        } else if (window.innerWidth < 480) {
            document.documentElement.style.fontSize = "15px";
        } else {
            document.documentElement.style.fontSize = "16px";
        }
    }

    // Run on load and on resize
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Mousemove event for the glowing element
    if (glowingElement) {
        document.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX - 20;
            let mouseY = e.clientY - 20;

            glowingElement.style.left = `${mouseX}px`;
            glowingElement.style.top = `${mouseY}px`;
        });
    }
});
