import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectTwoSecondImage from "../assets/project-2-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.gif";
import projectFive from "../assets/project-5.png";
import projectSix from "../assets/project-6.png";

const projects =  {
    1: {
        title: "HTML Project IT Team Members Page",
        image: projectOne,
        description: (
            <>
                <p>
                I was tasked with creating an IT Team Members Page for Npower that had the following characteristics:
                </p>
                <ul>
                    <li>An add new member form</li>
                    <li>A text input for the member’s first name</li>
                    <li>A text input for the member’s last name</li>
                    <li>A text input for the member’s role in the team</li>
                    <li>A text input for their email address</li>
                    <li>A table that displays the team member list</li>
                </ul>
                <p>Tech Stack: HTML</p>
            </>
        ),
        github: "https://github.com/ngordon1107/-path2tech_html_assignment",
        demo: "https://it-team-member-page.netlify.app/",
    },
    2: {
        title: "Email Client with CSS styling",
        image: projectTwo, projectTwoSecondImage,
        description: (
            <>
                <p>
                    Created a email client that features a sleek sidebar that enhances user navigation. The focus of this project was styling so there is no functionality for this demo. This project features: 
                </p>
                <ul>
                    <li>A sleek sidebar that enhances user navigation (does not need functionality)</li>
                    <li>A personalized welcome message that greets user</li>
                    <li>A button that encourages user to compose new emails</li>
                    <li>An organized list of email folders for efficient email management</li>
                    <li>Search bar at the top (does not need functionality)</li>
                    <li>Email List showcasing emails</li>
                    <li>Section to display selected email’s content</li>
                    <li>Reply section dedicated for composing replies (does not need functionality)
                    </li>
                </ul>
                <p>Tech Stack: HTML, CSS, Responsive Design</p>
            </>
        ),
        github: "https://github.com/ngordon1107/css_project",
        demo: "https://email-client-css-project.netlify.app/",
    },
    3: {
        title: "JavaScript Project TODO List",
        image: projectThree,
        description: (
            <>
                <p>
                    Created a TODO list that can be ran in the CLI, that:
                </p>
                <ul>
                    <li>Allows the user to add task to list</li>
                    <li>Allows the user to remove tasks from the list</li>
                    <li>Allows the user to mark task as complete</li>
                    <li>Displays the total number of tasks</li>
                </ul>
                <p>Tech Stack: JavaScript</p>
            </>
        ),
        github: "https://github.com/ngordon1107/js_project_todo_list",
        demo: "https://github.com/ngordon1107/js_project_todo_list",
    },
    4: {
        title: "DOM Project Book Store Client",
        image: projectFour,
        description: (
            <>
                <p>
                    I led a team of 4 trainees in the creation of this book store client. This project has the following features:
                </p>
                <ul>
                    <li>Uses the fetch API to request data from a bookstore API, and to be able to send data to this API (https://bookstore-api-six.vercel.app/)</li>
                    <li>Creates a form to submit a new book, handle form submissions in JavaScript and make an HTTP POST request</li>
                    <li>Fetches books from the API and display them on the DOM using an HTTP GET request</li>
                    <li>Implement functionality to delete books from the list using an HTTP DELETE request</li>
                </ul>
                <p>Tech Stack: HTML, CSS, JavaScript, DOM (Document Object Model)</p>
            </>
        ),
        github: "https://github.com/ngordon1107/Path2Tech-DOM-Project",
        demo: "https://dom-bookstore-client.netlify.app/",
    },
    5: {
        title: "React Weather Project",
        image: projectFive,
        description: (
            <>
                <p>
                    I built a React application to display the weather and that has the following features:
                </p>
                <ul>
                    <li>On initial render, my app should loads the weather details for the default location of choice</li>
                    <li>A search bar that allows a user to change the location and allows the application to render weather forecast data for the new location</li>
                    <li>Allows the user to enter a city/state, zip code, address, or landmark as a search term</li>
                    <li>Each component’s props is destructured for readability.</li>
                    <li>The application pulls data from an external API using axios or fetch</li>
                    <li>All API keys are hidden using a .env file</li>
                    <li>App has multiple components</li>
                </ul>
                <p>Tech Stack: HTML, CSS, JavaScript, React</p>
            </>
        ),
        github: "https://github.com/ngordon1107/Weather-App-Template",
        demo: "https://p2t-weather-app-project.netlify.app/",
    },
    6: {
        title: "Food Ordering Website",
        image: projectSix,
        description: (
            <>
                <p>
                You will be making a Food Ordering application, and this will be your capstone project. This project will be built with the MERN stack. MERN stands for MongoDB, Express, React, and Node.
                </p>
                <ul>
                    <li>User authentication</li>
                    <li>User Profile</li>
                    <li>Orders and Order Management</li>
                    <li>Detail Page</li>
                    <li>Stripe Payment</li>
                    <li>Responsive Design</li>
                </ul>
                <p>Tech Stack: HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB</p>
            </>
        ),
        github: "need link*",
        demo: "need link*",
    }
}

export default projects;