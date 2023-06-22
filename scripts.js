// Sample career data
var careers = [
    {
        name: "Software Developer",
        description: "Develops software applications.",
        salary: "$80,000",
        education: "Bachelor's degree in Computer Science",
        skills: ["Programming", "Problem-solving"]
    },
    {
        name: "Graphic Designer",
        description: "Creates visual designs for various mediums.",
        salary: "$50,000",
        education: "Bachelor's degree in Graphic Design",
        skills: ["Creativity", "Adobe Creative Suite"]
    }
];

// Function to display search results
function displaySearchResults(keyword) {
    var resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "";

    keyword = keyword.toLowerCase();

    var results = careers.filter(function(career) {
        return career.name.toLowerCase().includes(keyword);
    });

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    } else {
        results.forEach(function(career) {
            var careerCard = document.createElement("div");
            careerCard.className = "careerCard";

            var title = document.createElement("h2");
            title.textContent = career.name;
            careerCard.appendChild(title);

            var description = document.createElement("p");
            description.textContent = career.description;
            careerCard.appendChild(description);

            var salary = document.createElement("p");
            salary.textContent = "Salary: " + career.salary;
            careerCard.appendChild(salary);

            var education = document.createElement("p");
            education.textContent = "Education: " + career.education;
            careerCard.appendChild(education);

            var skills = document.createElement("p");
            skills.textContent = "Skills: " + career.skills.join(", ");
            careerCard.appendChild(skills);

            resultsContainer.appendChild(careerCard);
        });
    }
}

// Event listener for search input
var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function(event) {
    var keyword = event.target.value;
    displaySearchResults(keyword);
});

//LOGIN
document.getElementById("loginLink").addEventListener("click", function() {
    var loginSection = document.getElementById("loginSection");
    loginSection.classList.toggle("hidden");
});

// SIGN-UP
document.getElementById("signupLink").addEventListener("click", function() {
    var signupSection = document.getElementById("signupSection");
    signupSection.classList.toggle("hidden");
});

//CAREER QUIZ
document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve selected answers
    var answer1 = document.querySelector('input[name="q1"]:checked').value;
    // Add more answer variables for each question...

    // Calculate the result based on selected answers
    var result = calculateResult(answer1);  // Implement the calculateResult function

    // Display the result
    var resultText = document.getElementById("resultText");
    resultText.innerHTML = result;

    // Show the result section
    var quizResult = document.getElementById("quizResult");
    quizResult.classList.remove("hidden");
});

function calculateResult(answer1) {
    // Implement your logic to calculate the result based on the selected answers
    // You can use conditionals, switches, or any other logic to determine the result
    // Return the appropriate career recommendation based on the answers

    // Example logic:
    if (answer1 === "A") {
        return "Your recommended career is Software Engineer.";
    } else if (answer1 === "B") {
        return "Your recommended career is Project Manager.";
    } else if (answer1 === "C") {
        return "Your recommended career is Graphic Designer.";
    } else if (answer1 === "D") {
        return "Your recommended career is Social Worker.";
    } else {
        return "Unable to provide a career recommendation.";
    }
}


