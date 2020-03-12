const projects = [
    {
        title: "Learning Management System",
        projectImage: "https://i.ytimg.com/vi/WxmL6egpkKs/hqdefault.jpg",
        description: "Learning Management System is a learning platform for teachers and students. Server-server is built with Ruby on Rails. Client-side is built with React.",
        demoLink: "https://www.youtube.com/watch?v=WxmL6egpkKs&feature=youtu.be",
        repoLink: "https://github.com/reireynoso/learning-management-system-project",
        siteLink: "https://lms-react.herokuapp.com/"
    },
    {
        title: "Welp (Restaurant App)",
        projectImage: "https://media-exp1.licdn.com/dms/image/sync/C4D27AQG2Thwhlt9M4w/articleshare-shrink_800/0?e=1584122400&v=beta&t=QvCiwEgRfCnO3qd1-GCuWjoD2WGuETANKkR_rcKBtlI",
        description: "A Restaurant application (Yelp clone). Client-side built with React, React Hooks, and Redux. Server-side built with Ruby on Rails",
        demoLink: "https://www.youtube.com/watch?v=1cgreYWLC1E",
        repoLink: "https://github.com/reireynoso/restaurant_app_react",
        siteLink: "https://restaurant-client-react.herokuapp.com/"
    },
    {
        title: "Photo Uploader App",
        projectImage: "https://media-exp1.licdn.com/dms/image/sync/C4E27AQH502EnYxWjBQ/articleshare-shrink_800/0?e=1584122400&v=beta&t=pAEOm-cv0zF4vgQwueYIEtnoqcZxRlJkj2PvfyiqXIY",
        description: "A Photo Uploading application. Client-side built with React. Server-side built with Ruby on Rails",
        demoLink: "https://www.youtube.com/watch?v=QMpfjpzMgsc",
        repoLink: "https://github.com/reireynoso/photo-mern-react",
        siteLink: "https://photo-uploader-react.herokuapp.com/"
    },
    {
        title: "Task Academy",
        projectImage: "https://i.ytimg.com/vi/iCGvpS9cbNw/hqdefault.jpg",
        description: "Learning platform with drag and drop task management functionality.",
        demoLink: "https://youtu.be/iCGvpS9cbNw",
        repoLink: "https://github.com/reireynoso/Taskcademy-client",
        siteLink: "https://task-academy-react.herokuapp.com/"
    }
]

const blogs = [
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*1JeHUV1wSFYeWTcU",
        title: "Polymorphic Associations in Rails",
        description: "A while back, while working on a project, I decided to have separate models/tables for teachers and students as opposed to having one user model. At the time, having two models worked best for the structure of my application.",
        link: "https://medium.com/better-programming/polymorphic-associations-in-rails-72a91ae1a9dd"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/1*TNKSlcVHe25Gj_U45-0b9w.jpeg",
        title: "Create a Follow/Following Graph in Rails",
        description: "Build a sample social graph so users can follow each other",
        link: "https://medium.com/better-programming/create-a-follow-following-graph-in-rails-a6ec77139dff?source=---------4------------------"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*2QXFv38dyGxpx5eK.png",
        title: "React-Redux Hooks: useSelector and useDispatch",
        description: "A guide to using Redux with React hooks for cleaner code",
        link: "https://levelup.gitconnected.com/react-redux-hooks-useselector-and-usedispatch-f7d8c7f75cdd"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*hpsZQ7ilZ6daN1fp.png",
        title: "React Hooks: useState and useEffect",
        description: "A guide to using the useState and useEffect hooks in your React app and converting a class component to a function component",
        link: "https://levelup.gitconnected.com/react-hooks-usestate-and-useeffect-2d0b870c654f?source=---------6------------------"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/1*or-e6SwzLqNZ5_r0LnnlwQ.png",
        title: "JWT Auth in a React + Rails App",
        description: "This is a guide for implementing JSON Web Tokens (JWT) for a React (client-side) + Rails (server-side) application. To fully implement JWT, both React and Rails will be set up to handle the tokens generated. Keep in mind that this guide will cover one basic approach to implementing JWT.",
        link: "https://levelup.gitconnected.com/jwt-auth-in-a-react-rails-app-8a7e6ba1ac0?source=---------7------------------"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/1*T_-NaFaHus_yTblauq3QWw.png",
        title: "Redux Setup for Your React App",
        description: "How to get started with reducers",
        link: "https://medium.com/better-programming/redux-setup-for-your-react-app-d003ec03aedf?source=---------8------------------"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*78Wut4nTELlloega",
        title: "Building a Small Rails API with Serializers",
        description: "This guide will cover the steps necessary for setting up a Rails API. Before starting, ensure that Postgres is installed and initialized on your machine. If it’s not, it can be found at https://postgresapp.com. In addition, Postman will be utilized to test the API endpoints. Download and install postman from https://www.getpostman.com/.",
        link: "https://levelup.gitconnected.com/building-a-small-rails-api-with-serializers-32e3e69a078"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*YOinzTd8UtAz9l1Q",
        title: "Javascript Event Listeners: Closure vs. Delegation",
        description: "Proficient JavaScript developers combine both to maximize efficiency",
        link: "https://medium.com/better-programming/javascript-event-listeners-closure-vs-delegation-e17552f1f59f"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*uD4kYL7jeIgz4Epg",
        title: "Creating a Basic Rails CRUD App",
        description: "In this tutorial, we will get a Ruby on Rails CRUD app running on our local server implementing RESTful conventions. For this guide, we want to create a course registration application. Let’s begin by planning our models.",
        link: "https://levelup.gitconnected.com/creating-a-basic-rails-crud-app-8720a53f0158"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*zUE6snp9LHS-OsrW",
        title: "Javascript Basics and Fundamentals",
        description: "The following Javascript fundamentals will be discussed Function Declaration/Expression, ES6 Arrow Function Syntax, Difference between let/const/var, Scope Chain in Functions, Iterator Methods, Pass by Value, Pass by Reference (as simply as possible)",
        link: "https://levelup.gitconnected.com/javascript-basics-and-fundamentals-ccb1f017d6f3"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*v79zUcR07Rdg6otp",
        title: "Simple Authentication Guide with Ruby on Rails",
        description: "This is a simple tutorial on implementing authorization/authentication in your Rails application. I will be using the latest version (6.0) of Ruby on Rails. For the record, this is one of many ways to implement auth, and it is intended to showcase a basic approach.",
        link: "https://levelup.gitconnected.com/simple-authentication-guide-with-ruby-on-rails-16a6255f0be8"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*3Q-U3u48leu4w6LB",
        title: "Guidelines for a New Coding Project",
        description: "Before diving into any coding project, planning is essential. But what exactly are you planning for? A lot! The planning stage itself can be a daunting and tedious task, and you might just be tempted to start coding and plan during the process. I wouldn’t blame you, and I initially had that mindset.",
        link: "https://levelup.gitconnected.com/guidelines-for-a-new-coding-project-7ec063bace78"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/1*Ca_93hUSRQZubVRQC31t3A.jpeg",
        title: "Drag n’Drop with react-beautiful-dnd",
        description: "For our Module 4 project, we wanted to create an application that combined Khan Academy and Trello. In summary, a user would be able to register for a course that had specific tasks. Once the task was completed, a user had the ability to drag the task to a separate list as a way of organizing which tasks were finished. As you may have guessed by now, our app required a drag n’ drop feature. Lucky for us, there is a lot of libraries available for react that allows for drag n’ drop interactions within react.",
        link: "https://medium.com/@reireynoso/drag-ndrop-with-react-beautiful-dnd-73014e5937f2"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/1*Jaz_meNgNGqORk6PeV_TRw.jpeg",
        title: "Utilizing Global Variables in DOM Manipulation",
        description: "Flatiron School introduced JavaScript with a bang immediately focusing on DOM manipulation. I thought it was all fun and games until we had to incorporate CRUD (Create, Read, Update, and Delete). Initially, the CRD was not too bad. Update added another step that made it difficult. The approach to updating is if you clicked an element that you wanted to edit, a form should populate with the element’s information and then you had to submit the form to save the changes. The approach needed two event listeners and most of the time, my second event listener was out of scope to access the element I was trying to change.",
        link: "https://medium.com/@reireynoso/utilizing-global-variables-in-dom-manipulation-c1239a8584f0"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/1*INJRYOJ0F4Tu1f1e4CtPQA.jpeg",
        title: "FlexBox, a Layout Solution",
        description: "My cohort and I at Flatiron school recently covered the topic CSS (Cascade Styling Sheets). Although I still have very little experience in the topic, I remember using one neat resource that assisted in building better layouts for my HTML. Flexbox’s underlying principle is to make flexible and intuitive but it can be difficult to visualize exactly how that is happening.",
        link: "https://medium.com/@reireynoso/flexbox-a-layout-solution-41df47441750"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/1*UWkL4QRmHnvLiIoXPoU2qA.jpeg",
        title: "TTY-Prompt Select for handling User Inputs",
        description: "For a project, I wanted create an application where users are able to register for courses, professionally called, “Bootleg Registrar.” A user would be presented a list of course names available and they would input the name of the class they would like to register for. For example, if a user wanted to add course to their schedule, they would be presented with a list of 8+ courses, and they would type the course they wanted to add. Their course list would update and they had the ability to add more or drop.",
        link: "https://medium.com/@reireynoso/tty-prompt-select-for-handling-user-inputs-aed13f46c8bc"
    }
]

const education = [
    {
        school: "Flatiron School",
        location_year: "Brooklyn, NY - 2019",
        program: "Software Engineering Immersive"
    },
    {
        school: "New Jersey City University",
        location_year: "Jersey City, NJ - 2019",
        program: "M.A in Educational Technology"
    },
    {
        school: "Rutgers - Newark",
        location_year: "Newark, NJ - 2013",
        program: "B.A in Mathematics / Minor in Computer Science"
    }
]

const work = [
    {
        title: "Software Engineering Coach",
        company_year: "WeWork X Flatiron School | Aug 2019 - Current",
        duties: [
            "Assisting students and staff with real time efforts, such as debugging a student’s project or assignment and providing guidance to coding approach.",
            "Identify and deploy content for the coming week to meet the predefined learning objectives.",
            "Create/iterate/review assessments to diagnose student strengths and weaknesses."
        ]
    },
    {
        title: "Math Intervention Teacher",
        company_year: "Perth Amboy School District | Feb 2018 - Mar 2019",
        duties: [
            "Implemented a three-tiered center model with different activities reinforcing students’ comprehension of mathematical concepts in a small group setting",
            "Utilized various sources of data to employ data-driven instruction and improve the comprehension of students struggling in certain math concepts.",
            "Collaborated with math classroom teachers to determine the assistance their students’ require and provide in-class support"
        ]
    },
    {
        title: "Mathematics Teacher",
        company_year: "Jersey City Board of Education | Oct 2013 - Jan 2018",
        duties: [
            "Develop intriguing lessons that actively engaged learners, reinforced problem-solving and critical thinking skills, and prepared students for state exams",
            "Administered formal and informal assessments on a consistent basis to track student progress while at the same time utilizing results to enhance students’ performance",
            "Worked with students to develop and maintain classroom rules/procedures to maintain a positive learning environment"
        ]
    },
    {
        title: "I.T Volunteer",
        company_year: "St. Michael's Hospital | Nov 2011 - Apr 2012",
        duties: [
            "Walked floor to floor troubleshooting and repairing different hardware issues of PCs in the hospital under the guidance of an IT supervisor",
            "Participated in ghosting/duplicating of computer hard drives onto other computer hard drives",
            "Upgraded computer components such as RAM and hard drives under the guidance of an IT supervisor"
        ]
    }
]

export default {
    projects,
    blogs,
    education,
    work
}

