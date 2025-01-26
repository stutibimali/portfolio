document.addEventListener("DOMContentLoaded", () => {
    const aboutText = 
    "Hi! I am Stuti Bimali, a Master's student in Data Science at the University of New Haven, with a background in Computer Science and Engineering. I am passionate about unlocking the potential of data to solve complex challenges and drive innovation.<br>"+
    "My ambition is to bridge the gap between cutting-edge technology and meaningful real-world applications, particularly in healthcare and beyond. I am deeply interested in developing intelligent systems that seamlessly integrate diverse data modalities, transforming complexity into actionable insights and enabling impactful decision-making.<br>"+
    "I thrive at the intersection of analytical rigor, creativity, and purpose-driven innovation. My current focus lies in exploring advanced methodologies to optimize systems, uncover hidden patterns, and contribute to solutions that make a tangible difference.<br>"+
    "Beyond academics, I am driven by collaboration and the exchange of ideas. I believe in the power of teamwork to inspire creativity and achieve transformative outcomes. I am eager to connect with like-minded individuals and organizations to explore opportunities for impactful collaboration.<br>"+
    "<br>Let’s shape a future defined by data-driven innovation and meaningful change—together!"
    ;
    const contactInfo = {
        address: "36 Baggott St., West Haven, CT 06516, United States",
        phone: "203-298-2102",
        email: "sbima1@unh.newhaven.edu",
    };

    const publicationText = "<br><b style='font-size: 20px; color: grey'>Comparative study of different methods for fire detection using Convolutional Neural Network (CNN)</b><br>"+
    "<br><b>Stuti Bimali</b>, Dr. Rachana P., Dr. B. Rajalakshmi, Tushar Bhat, Sukhmanjeet Kaur<br><br>"
    ;


    // Populate About Section
    document.getElementById("about-text").innerHTML = aboutText;

    // Populate Contact Info Section
    const contactContainer = document.getElementById("contact-info");
    contactContainer.innerHTML = `
        <p><strong>Address:</strong> ${contactInfo.address}</p>
        <p><strong>Phone:</strong> ${contactInfo.phone}</p>
        <p><strong>Email:</strong> <a href="mailto:${contactInfo.email}">${contactInfo.email}</a></p>
    `;
    // Populate About Section
    document.getElementById("publication").innerHTML = publicationText;
    // Set Email Link
    document.getElementById("email-link").href = `mailto:${contactInfo.email}`;
});
