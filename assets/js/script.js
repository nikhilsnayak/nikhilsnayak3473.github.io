const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

const projectsDetails = [
    {
        title: 'CineVerse',
        description:
            'A frontend wrapper around TMDB API to list the movies with infinite scrolling and skeleton loading effects for better UX',
        githubLink: 'https://github.com/nikhilsnayak3473/cineverse',

    },
    {
        title: 'Palliative Chair',
        description:
            'An enhanced ergonomic chair featuring an integrated Massage unit and Heating Element, specifically designed to provide temporary relief from the discomfort experienced by sedentary employees due to prolonged sitting.',
        githubLink: 'https://github.com/nikhilsnayak3473/Palliative-Chair',

    },
    {
        title: 'Techno Blog',
        description:
            'The REST API allows users to create, read, update and delete blog posts, as well as manage user authentication and authorization. It also contains paging, sorting support and enables users to retrive posts by category',
        githubLink: 'https://github.com/nikhilsnayak3473/techno-blog',

    },
    {
        title: 'i-News',
        description: 'News app built using ReactJS and News api',
        githubLink: 'https://github.com/nikhilsnayak3473/i-News',

    },
    {
        title: 'Strawberry Stacker',
        description:
            'Controlling a team of Quadcopters and achieve the task of picking strawberry boxes from a field and stacking them onto a transport trailer',
        githubLink: 'https://github.com/nikhilsnayak3473/strawberry_stacker',

    },
    {
        title: 'Smart Stock Display',
        description:
            'Display the Stock information of the Stationary in distant area of a campus',
        githubLink: 'https://github.com/nikhilsnayak3473/SMART-STOCK-DISPLAY',
    },
];

const projectTemplate = document.getElementById('project-template');
const projectsContainer = document.querySelector('.projects-container');

projectsDetails.forEach(projectDetail => {
    const project = projectTemplate.content.cloneNode(true);
    project.querySelector('.project-title').innerText = projectDetail.title
    project.querySelector('.description').innerText = projectDetail.description;
    project.querySelector('.btn').setAttribute('href', projectDetail.githubLink);
    projectsContainer.appendChild(project);
})
