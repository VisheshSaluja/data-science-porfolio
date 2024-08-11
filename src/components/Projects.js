// import React from 'react';
// import './Project.css';

// const Projects = () => {
//     return (
//         <section id="projects">
//             <h2>Projects</h2>
//             <div className="project-list">
//                 <div className="project-item">
//                     <h3>Project 1</h3>
//                     <p>Description of Project 1...</p>
//                 </div>
//                 <div className="project-item">
//                     <h3>Project 2</h3>
//                     <p>Description of Project 2...</p>
//                 </div>
//                 {/* Add more projects as needed */}
//             </div>
//         </section>
//     );
// }

// export default Projects;





// Test




import React from 'react';
import './Project.css';

const Projects = () => {
    const projectData = [
        {
            title: "Project 1",
            description: "Description of Project 1...",
            image: "https://via.placeholder.com/400x200" // Replace with actual image URL
        },
        {
            title: "Project 2",
            description: "Description of Project 2...",
            image: "https://via.placeholder.com/400x200" // Replace with actual image URL
        },
        // Add more projects as needed
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projectData.map((project, index) => (
                    <div className="project-item" key={index}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
