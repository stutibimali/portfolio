

document.addEventListener("DOMContentLoaded", () => {
    const aboutText = 
    "Hi! I am Stuti Bimali, a Master's student in Data Science at the University of New Haven, with a background in Computer Science and Engineering. I am passionate about unlocking the potential of data to solve complex challenges and drive innovation.<br>"+
    "My ambition is to bridge the gap between cutting-edge technology and meaningful real-world applications, particularly in healthcare and beyond. I am deeply interested in developing intelligent systems that seamlessly integrate diverse data modalities, transforming complexity into actionable insights and enabling impactful decision-making.<br>"+
    "I thrive at the intersection of analytical rigor, creativity, and purpose-driven innovation. My current focus lies in exploring advanced methodologies to optimize systems, uncover hidden patterns, and contribute to solutions that make a tangible difference.<br>"+
    "Beyond academics, I am driven by collaboration and the exchange of ideas. I believe in the power of teamwork to inspire creativity and achieve transformative outcomes. I am eager to connect with like-minded individuals and organizations to explore opportunities for impactful collaboration.<br>"+
    "<br>Let’s shape a future defined by data-driven innovation and meaningful change—together!"
    ;
    const contactInfo = {
        address: "West Haven, CT 06516, United States",
        phone: "+1 203-298-2102",
        altemail: "sbima1@unh.newhaven.edu",
        email:"bimalistuti@gmail.com"
    };

    const publicationText = "<br><b style='font-size: 20px; color: grey'>Comparative study of different methods for fire detection using Convolutional Neural Network (CNN)</b><br>"+
    "<br><b>Stuti Bimali</b>, Dr. Rachana P., Dr. B. Rajalakshmi, Tushar Bhat, Sukhmanjeet Kaur<br>"+
    "<p><b>Published in:</b> 2022 4th International Conference on Smart Systems and Inventive Technology (ICSSIT)<br>"+
    "<b>DOI:</b> <a href='https://ieeexplore.ieee.org/document/9716284'>10.1109/ICSSIT53264.2022.9716284</a><br>"+
    "<b>Date of Conference:</b> 20-22 January 2022<br>"+
    "<b>Conference Location:</b> Tirunelveli, India<br>"+
    "<b>Publisher:</b> IEEE (Institute of Electrical and Electronics Engineers)<br>"+
    "<b>Date Added to IEEE Xplore:</b> 25 February 2022</p>"
    ;


    // Populate About Section
    document.getElementById("about-text").innerHTML = aboutText;

    // Populate Contact Info Section
    const contactContainer = document.getElementById("contact-info");
    contactContainer.innerHTML = `
        <div class="contact-card">
            <div class="contact-item">
                <i class="icon-location"></i>
                <span><strong>Address:</strong> ${contactInfo.address}</span>
            </div>
            <div class="contact-item">
                <i class="icon-phone"></i>
                <span><strong>Phone:</strong> ${contactInfo.phone}</span>
            </div>
            <div class="contact-item">
                <i class="icon-email"></i>
                <span><strong>Email:</strong> <a href="mailto:${contactInfo.email}">${contactInfo.email}</a></span>
            </div>
            <div class="contact-item">
                <i class="icon-email"></i>
                <span><strong>Alt-Email:</strong> <a href="mailto:${contactInfo.altemail}">${contactInfo.altemail}</a></span>
            </div>
        </div>
    `;

    // Populate Publication Section
    document.getElementById("publication").innerHTML = publicationText;
    
    // Set Email Link
    document.getElementById("email-link").href = `mailto:${contactInfo.email}`;
});

function viewPaper() {
     // Simulate file download
     window.open('documents/Publication paper.pdf', '_blank');
}

function viewReport() {
    // Simulate file download
    window.open('documents/Paper report.pdf', '_blank');
}

function viewCertificate() {
    // Simulate file download
    window.open('documents/certificate.pdf', '_blank');
}

function linkpublication() {
    // link of publication 
    window.open('https://ieeexplore.ieee.org/document/9716284', '_blank');
}

document.addEventListener("DOMContentLoaded", () => {
    const githubUsername = "stutibimali";  // Replace with your GitHub username
    const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;
    
    // Fetch repositories from GitHub API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayProjects(data))
        .catch(error => console.error("Error fetching GitHub repos:", error));
    
    // Function to display repositories
    function displayProjects(repos) {
        const projectContainer = document.getElementById("project");
        repos.forEach(repo => {
            const repoElement = document.createElement("div");
            repoElement.classList.add("repo");

            // Create elements for each project
            const repoTitle = document.createElement("h3");
            repoTitle.textContent = repo.name;

            const repoDescription = document.createElement("p");
            repoDescription.textContent = repo.description ? repo.description : "No description provided";

            const repoLink = document.createElement("a");
            repoLink.href = repo.html_url;
            repoLink.target = "_blank";
            repoLink.textContent = "View on GitHub";

            // Append project details to the container
            repoElement.appendChild(repoTitle);
            repoElement.appendChild(repoDescription);
            repoElement.appendChild(repoLink);
            projectContainer.appendChild(repoElement);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const experiences = [
        {
            company: "iAssist Innovations Labs - Bangalore, India",
            role: "AI Scientist",
            time: "Jun 2023 - Jul 2024 ~ 1 yr 2 mos",
            logo: "images/logo1.png",
            companyinfo: "A research organization in IT Space that continuously works towards solving unsolved problems with innovative products.",
            points: [
                "Designed and implemented a system to analyze hospital bills, enabling banks to efficiently manage and process insurance claims, significantly enhancing customer experience",
                "Automated key processes in a major project, increasing the automation rate from 5% to 30% in the initial stages, and trained the team to build on this progress for sustainable growth.",
                "Developed and deployed algorithms to optimize bill processing in healthcare, improving data accuracy and operational efficiency through advanced data analysis techniques.",
                "Supported the QA team by resolving real-time issues within five minutes, minimizing downtime and ensuring smooth project execution.",
                "Automated QA processes for data extraction, ensuring high data integrity and reliability for subsequent research and application development.",
                "Collaborated with cross-functional teams to deliver innovative solutions under tight deadlines, demonstrating technical expertise, problem-solving skills, and a proactive approach to innovation."
            ]
        },
        {
            company: "Cognizant - Bangalore, India",
            role: "Programming Analyst Intern",
            time: "Sept 2022 – Jan 2023 ~ 5 mos",
            logo: "images/logo2.png",
            companyinfo: "A global professional services company that helps businesses modernize their technology, processes, and experiences.",
            points: [
                "Conducted in-depth data analysis and reporting, providing actionable insights that supported data-driven decision-making in cross-functional teams.",
                "Collaborated with multidisciplinary teams to analyze and interpret large datasets, enhancing project outcomes through a researchoriented approach to problem-solving.",
                "Gained hands-on experience in core data science concepts and tools, including machine learning algorithms, SQL, Python, and Java.",
                "Applied theoretical knowledge to real-world data problems, designing and implementing models for data analysis and processing.",
                "Developed Java applications for data management, gaining proficiency in object-oriented programming and data structures.",
                "Presented learning outcomes and conceptual models to the team, refining communication and presentation skills."
            ]
        }
    ];

    const experienceContainer = document.getElementById("experience");

    experiences.forEach(exp => {
        const expElement = document.createElement("div");
        expElement.classList.add("experience-item");

        const pointsHTML = exp.points.map(point => `<li>${point}</li>`).join("");
        expElement.innerHTML = `
            <div class="experience-content">
                <div class="experience-header">
                    <img class="company-logo" src="${exp.logo}" alt="${exp.company} Logo">
                    <h3>${exp.company}</h3>
                </div>
                <div class="experience-text">
                    <h4>${exp.role}</h4>
                    <small>${exp.time}</small>
                    <p>${exp.companyinfo}</p>
                    <ul>
                    <p>${pointsHTML}</p>
                </ul>
                </div><br><br>

            </div>
        `;

        experienceContainer.appendChild(expElement);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const education = [
        {
            campus: "Tagliatela College of Engineering - University of New Haven",
            major: "Masters in Data Science",
            time: "Aug 2024 - present",
            logo: "images/logo6.jpeg",
            grade: "Grade: 4/4",
            location: "West Haven, Connecticut, USA"
        },
        {
            campus: "New Horizon College of Engineering - Visvesvaraya Technological University(VTU)",
            major: "Bachelor of Engineering - Computer Science and Engineering",
            time: "Jul 2018 - Jul 2022",
            logo: "images/logo5.png",
            grade: "Grade: 9.13/10",
            location: "Bangalore, Karnataka, India"
        },
        {
            campus: "GoldenGate International Secondary School",
            major: "10+2 Biology",
            time: "2016 - 2018",
            logo: "images/logo4.png",
            grade: "Grade: 3.03/4",
            location: "Battisputali, Kathmandu, Nepal"
        },
        {
            campus: "GEMS Higher Secondary School",
            major: "Grade 10",
            time: "2016",
            logo: "images/logo3.png",
            grade: "Grade: 3.7/4",
            location: "Dhapakhel, Lalitpur, Nepal"
        }
    ];

    const educationContainer = document.getElementById("education");

    education.forEach(exp2 => {
        const expElement2 = document.createElement("div");
        expElement2.classList.add("education-item");

        expElement2.innerHTML = `
            <div class="education-content">
                <div class="education-header">
                    <img class="campus-logo" src="${exp2.logo}" alt="${exp2.campus} Logo">
                    <h3>${exp2.campus}</h3>
                </div>
                <div class="education-text">
                    <h4>${exp2.major}</h4>
                    <small>${exp2.time}</small>
                    <p>${exp2.location}</p>
                    <p>${exp2.grade}</p>

                </div><br><br>

            </div>
        `;

        educationContainer.appendChild(expElement2);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const Certification = `
        <ul>
            <li style="list-style-type: square;"><b>LinkedIn Learning</b> - HTML Essential Training<b style="font-size: 12px; color: #777;">  -  January 31, 2025</b><br>
            <button onclick="showCertificate('documents/stutibimali_HTML Essential Training.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>LinkedIn Learning</b> - Python: Working with REST and Web Data<b style="font-size: 12px; color: #777;">  -  January 30, 2025</b><br>
            <button onclick="showCertificate('documents/StutiBimali_Python Working with REST and Web Data.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>LinkedIn Learning</b> - Data Science Foundations: Data Engineering<b style="font-size: 12px; color: #777;">  -  January 27, 2025</b><br>
            <button onclick="showCertificate('documents/CertificateOfCompletion_Data Science Foundations Data Engineering-StutiB.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>Great Learning Academy</b> - Introduction to R<b style="font-size: 12px; color: #777;">  -  July 2024</b><br>
            <button onclick="showCertificate('documents/R.png')">Show</button></li><br>
            <li style="list-style-type: square;"><b>British Airways</b> - Data Science Virtual Experience Program: Forage<b style="font-size: 12px; color: #777;">  -  February 2023 to March 2023</b><br>
            <button onclick="showCertificate('documents/British Airways.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>KPMG</b> - Data Analytics Consulting Virtual Internship: Forage<b style="font-size: 12px; color: #777;">  -  February 2023</b><br>
            <button onclick="showCertificate('documents/KPMG.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>IBM</b> - Machine Learning - Dimensionality Reduction: Cognitive Class<b style="font-size: 12px; color: #777;">  -  June 16, 2022</b><br>
            <button onclick="showCertificate('documents/IBM ML0109EN Certificate _ Cognitive Class.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>The Sparks Foundation</b> - Graduate Rotational Internship Program<b style="font-size: 12px; color: #777;">  -  May 2022 to June 2022</b><br>
            <button onclick="showCertificate('documents/spark.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>SkillUp</b> - Data Science with Python<b style="font-size: 12px; color: #777;">  -  December 23, 2021</b><br>
            <button onclick="showCertificate('documents/datascience certificate.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>SmartKnower</b> - Internship on Data Science<b style="font-size: 12px; color: #777;">  -  April 1, 2021 to May 31, 2021</b><br>
            <button onclick="showCertificate('documents/4162300654.jpg')">Show</button></li><br>
            <li style="list-style-type: square;"><b>Duke University</b> - Data Science Math Skills: Coursera<b style="font-size: 12px; color: #777;">  -  August 31, 2020</b><br>
            <button onclick="showCertificate('documents/Coursera 9EE3AXTBYLVA.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>Google</b> - Operating Systems and You: Becoming a Power User: Coursera<b style="font-size: 12px; color: #777;">  -  August 6, 2020</b><br>
            <button onclick="showCertificate('documents/google certificate3.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>Google</b> - The Bits and Bytes of Computer Networking: Coursera<b style="font-size: 12px; color: #777;">  -  May 26, 2020</b><br>
            <button onclick="showCertificate('documents/google certificate2.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>Google</b> - Technical Support Fundamentals: Coursera<b style="font-size: 12px; color: #777;">  -  April 27, 2020</b><br>
            <button onclick="showCertificate('documents/google certificate.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>Rhyme</b> - Object-Oriented Programming with Java: Coursera<b style="font-size: 12px; color: #777;">  -  April 25, 2020</b><br>
            <button onclick="showCertificate('documents/java program certificate.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>Coursera Project Network</b> - Object-Oriented Programming with Java<b style="font-size: 12px; color: #777;">  -  April 25, 2020</b><br>
            <button onclick="showCertificate('documents/Coursera XGNASK4MUKAY.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>Coursera Project Network</b> - Create Your First Python Program<b style="font-size: 12px; color: #777;">  -  April 22, 2020</b><br>
            <button onclick="showCertificate('documents/python first certificate.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>Coursera Project Network</b> - Command Line in Linux<b style="font-size: 12px; color: #777;">  -  April 21, 2020</b><br>
            <button onclick="showCertificate('documents/Coursera DP75XSGCBYW9.pdf')">Show</button></li><br>
            <li style="list-style-type: square;"><b>Coursera Project Network</b> - Javascript animation for websites, storytelling, data visualization and games<b style="font-size: 12px; color: #777;">  -  April 21, 2020</b><br>
            <button onclick="showCertificate('documents/Coursera H4SQNCA8MZXG.pdf')">Show</button></li>
            
        </ul>
    `;
    const worksem = `
        <ul>
            <li style="list-style-type: square;"><b>Webinar</b></li><br>
                <ul>
                    <li style="list-style-type: circle;">' AI SOLUTION FOR ENTERPRISES AND CONTAINERISING APPLICATIONS USING E4S '<b> conducted by ANNA University</b><b style="font-size: 12px; color: #777;"> - August 14, 2020</b><br>
                    <button onclick="showCertificate('documents/certificate AI 7-9.pdf')">Show</button></li>
                    <br>
                    <li style="list-style-type: circle;">' OpenPOWER BIG DATA AI '<b> conducted by University of Wisconsin Platteville</b><b style="font-size: 12px; color: #777;"> - June 19, 2020</b><br>
                    <button onclick="showCertificate('documents/certificate3_14.pdf')">Show</button></li>
                    <br>
                </ul>
                <br>
            <li style="list-style-type: square;"><b>Workshop</b></li><br>
                <ul>
                    <li style="list-style-type: circle;">' Introduction to Computer Algorithms '<b> conducted by SGP GLOBAL IT ACADEMY PRIVATE LIMITED</b><b style="font-size: 12px; color: #777;"> - April 24, 2020</b><br>
                    <button onclick="showCertificate('documents/Stuti Bimali.png')">Show</button></li>
                    <br>
                    <li style="list-style-type: circle;">' UNIX AND SHELL PROGRAMMING '<b> conducted by PraLoTech Solutions LLP</b><b style="font-size: 12px; color: #777;"> - November 3, 2019</b><br>
                    <button onclick="showCertificate('certificates/unix_shell_programming.pdf')">Show</button></li>
                    <br>
                    
                </ul>
                <br>
            <li style="list-style-type: square;"><b>Seminar</b></li><br>
                <ul>
                    <li style="list-style-type: circle;">' NewSpace - An Era of Small Satellites: Opportunities and Challenges '<b> hosted by Indian Technology Congress Association and UNISEC India</b><b style="font-size: 12px; color: #777;"> - April 11, 2019</b><br>
                    <button onclick="showCertificate('certificates/newspace_small_satellites.pdf')">Show</button></li>
                    <br>
                </ul>
            <li style="list-style-type: square;"><b>Quiz</b></li><br>
                <ul>
                    <li style="list-style-type: circle;"> Quiz on ' Object Oriented Programming in Java '<b> organized by Department of Computer Science and Engineering, Shaikh College of Engineering and Technology Belagavi </b><b style="font-size: 12px; color: #777;"></b><br>
                    <button onclick="showCertificate('documents/Quiz.png')">Show</button></li>
                    <br>
                    <li style="list-style-type: circle;"> Online Quiz on ' C Programming '<b> organized by Department of CSE, Vemana Institute of Technology, Bengaluru </b><b style="font-size: 12px; color: #777;"> - July 14, 2020</b><br>
                    <button onclick="showCertificate('documents/quiz2.pdf')">Show</button></li>
                    <br>
                    <li style="list-style-type: circle;"> Quiz on ' ARM7 Microcontroller & its Instruction set '<b> organized by Department of Computer Science and Engineering, TOCE </b><b style="font-size: 12px; color: #777;"></b><br>
                    <button onclick="showCertificate('documents/quiz1.pdf')">Show</button></li>
                    
                    
                </ul>
        </ul>
    `;

    document.getElementById("Certification").innerHTML = Certification;
    document.getElementById("workshop").innerHTML = worksem;
});

function showCertificate(certPath) {
    const certificateImage = document.getElementById("certificateImage");
    const certificateIframe = document.getElementById("certificateIframe");

    // Hide both image and iframe initially
    certificateImage.style.display = "none";
    certificateIframe.style.display = "none";

    // If it's a PDF, show it in the iframe
    if (certPath.endsWith('.pdf')) {
        certificateIframe.src = certPath;
        certificateIframe.style.display = "block";
    } else {
        certificateImage.src = certPath;
        certificateImage.style.display = "block";
    }

    // Show the overlay
    document.getElementById("overlay").style.display = "flex";
}

// Function to close the overlay
function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}