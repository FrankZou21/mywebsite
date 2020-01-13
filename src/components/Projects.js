import React from "react";
import Project from "./Project.js";
import "./styles/Projects.css"

const projects = [
  {
    name: "Trekk",
    background: "https://www.augment.com/blog/wp-content/uploads/2017/04/apple-augmented-reality2-100709335-large.jpg",
    description: "Trekk is a mobile application that allows users to create and share custom augmented reality tours, or 'Trekks'. A user is able to customize their own Trekks by submitting marker images with their corresponding media to be displayed. These media can be in the form of a text description, image url and/or video url. Guests can access private Trekks via a randomly generated access code provided by the Trekk owner.",
    image: ["https://camo.githubusercontent.com/6e68e406606779aba6ea96f510e3653d857af8d4/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f676b51517039314271676346516758466e6c2f67697068792e676966"],
    link: "https://github.com/JacksonStark/trekk"
  },
  {
    name: "Interview Scheduler",
    background: "https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",  
    description: "Making use of React and Axios to access a server and pull relevant information to populate a interview scheduler. The scheduler can create, delete and update appointments which will then update the server with changes. The project was used to practising different testing methods including using applications such as Jest, Storybook and Cypress.",
    image: ["https://github.com/FrankZou21/scheduler/raw/master/docs/Front_Page.png?raw=true", "https://github.com/FrankZou21/scheduler/raw/master/docs/Editing_Appointment.png?raw=true", "https://github.com/FrankZou21/scheduler/raw/master/docs/Deleting_Appointment.png?raw=true", "https://github.com/FrankZou21/scheduler/raw/master/docs/Switching_Appointments.png?raw=true"],
    link: "https://github.com/FrankZou21/scheduler"
  },
  {
    name: "ToDoProject",
    background: "https://images.pexels.com/photos/1059383/pexels-photo-1059383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "To-Do List is a multi-page full stack web app that allows the user to register, login and update a To- Do list based on four categories - places to eat, products to buy, films to watch, and books to read. The app makes use of 4 diGerent API's to access information on the search parameter provided by the user to update the correct category on the list.",
    image: [],
    link: "https://github.com/FrankZou21/ToDoProject"
  },
  {
    name: "Tweeter",
    background: "https://i0.wp.com/www.hdwallpapers.in/walls/abstract_color_background_picture_8016-wide.jpg?resize=450%2C250",
    description: "Making use of front end skills such as HTML, CSS, JS, jQuery and AJAX along with back end tools such as Node, Express and MongoDB to create a simple, single-page Twitter clone. This project was originally forked from lighthouse labs with the server premade.",
    image: ["https://github.com/FrankZou21/tweeter/raw/master/docs/Tweeter-Main-Page.png?raw=true", "https://github.com/FrankZou21/tweeter/raw/master/docs/Composing-Tweet.png?raw=true", "https://github.com/FrankZou21/tweeter/raw/master/docs/Compose-Tweet-Error.png?raw=true"],
    link: "https://github.com/FrankZou21/tweeter"
  },
  {
    name: "TinyApp",
    background: "https://petapixel.com/assets/uploads/2013/11/petitmonde1.png",
    description: "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs",
    image: ["https://github.com/FrankZou21/tinyapp/raw/master/docs/Front_Page_With_Urls.png?raw=true", "https://github.com/FrankZou21/tinyapp/raw/master/docs/Rename_Url.png?raw=true", "https://github.com/FrankZou21/tinyapp/raw/master/docs/Front_Page_Not_Logged_In.png?raw=true"],
    link: "https://github.com/FrankZou21/tinyapp"
  },
]

export default function Projects() {  

  const displayProjects = projects.map((project) => {
    return (
      <Project
        name={project.name}
        background={project.background}
        description={project.description}
        image={project.image}
        link={project.link}
      />
    );
  });

  
  return (
    <div >
      <div className="projectsLayout">
        {displayProjects}
      </div>
    </div>
  );
}