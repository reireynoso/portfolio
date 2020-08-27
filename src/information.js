const projects = [
    {
        title: "uMessenger",
        projectImage: "https://media.giphy.com/media/kgUwn2MdM5krxFmYtW/giphy.gif",
        description: "uMessage is a full-stack chat application that allows you to send messages and video chat other users by email address. The design of the application is inspired by iMessage and Slack. Client-side built with React. Server-side built with NodeJS, and Express.",
        demoLink: "https://youtu.be/IotlnG6wMZY",
        repoLink: "https://github.com/reireynoso/umessenger-app",
        siteLink: "https://umessenger-frontend.herokuapp.com/"
    },
    {
        title: "L.M.S",
        projectImage: "https://media.giphy.com/media/UTGw6xYVj2A61O7Mc5/giphy.gif",
        description: "Learning Management System is a learning platform designed for teachers and students. Users can register as teachers, students or both. The app is designed to foster collaboration and learning. Server-side is built with Ruby on Rails. Client-side is built with React.",
        demoLink: "https://www.youtube.com/watch?v=WxmL6egpkKs&feature=youtu.be",
        repoLink: "https://github.com/reireynoso/learning-management-system-project",
        siteLink: "https://lms-react.herokuapp.com/"
    },
    {
        title: "Welp",
        projectImage: "https://media.giphy.com/media/McbJseTMZrl8VHcCVX/giphy.gif",
        description: "A Restaurant application (Yelp clone). Users can view restaurants within a specific area. They can rate dishes and leave a review for a specific restaurant. Client-side built with React, React Hooks, and Redux. Server-side built with Ruby on Rails.",
        demoLink: "https://www.youtube.com/watch?v=1cgreYWLC1E",
        repoLink: "https://github.com/reireynoso/restaurant_app_react",
        siteLink: "https://restaurant-client-react.herokuapp.com/"
    },
    {
        title: "Photo Uploader",
        projectImage: "https://media.giphy.com/media/Js2rdwtGAgZr30yBDY/giphy.gif",
        description: "A Photo Uploading application. A user can upload a photo and delete a photo while being able to like, and comment on a specific photo. Cloudinary is incorporated to handle cloud photo storage. Client-side built with React. Server-side built with NodeJS, and Express.",
        demoLink: "https://www.youtube.com/watch?v=QMpfjpzMgsc",
        repoLink: "https://github.com/reireynoso/photo-mern-react",
        siteLink: "https://photo-uploader-react.herokuapp.com/"
    },
    {
        title: "Task Academy",
        projectImage: "https://media.giphy.com/media/h1tzfFfUn6nv4UcCKl/giphy.gif",
        description: "Learning platform with drag and drop functionality to emulate Trello's task organization. A user can enroll for a new course and manage the completed tasks of each course through drag and drop. Client-side built with React. Server-side built with Ruby on Rails",
        demoLink: "https://youtu.be/iCGvpS9cbNw",
        repoLink: "https://github.com/reireynoso/Taskcademy-client",
        siteLink: "https://task-academy-react.herokuapp.com/"
    }
]

const blogs = [
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*8wctPggHf--3OCrH",
        title: "useRef in React",
        description: "The useRef is a hook provided by React and is the equivalent of createRef which is used with class components.",
        topic: 'react',
        link: "https://medium.com/javascript-in-plain-english/implementing-useref-in-react-732908aa1998"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*ngqSFJgQ1fkpW_1Y",
        title: "How to add React Router to your React App",
        description: "In this guide, we will cover how we can implement react-router into your React application.",
        topic: 'react',
        link: "https://medium.com/javascript-in-plain-english/how-to-add-react-router-to-your-react-app-bf764a776122"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*vu5pZbwHCCKbkAPh.png",
        title: "Deploy Multiple Apps Under a Single GitHub Repository to Heroku",
        description: "This guide will cover how to deploy multiple applications under a single GitHub repository.",
        topic: 'other',
        link: "https://medium.com/better-programming/how-to-deploy-multiple-apps-under-a-single-github-repository-to-heroku-f6177489d38"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*5dfbbmhUm_VTaowe",
        title: "How to Upload Files in a React and Rails App",
        description: "In this guide, we will cover how to upload images/videos in a React application.",
        topic: 'other',
        link: "https://medium.com/better-programming/how-to-upload-files-in-a-react-and-rails-app-69c31a9cf9b7"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/1*q4DH34WPy9SZ4LnRAYtPcw.png",
        title: "Build a React Redux App With JavaScript Web Tokens",
        description: "This is a guide on creating a React Redux application from scratch. The focus is on handling a user signing up and logging in — and then authenticating and authorizing them with JSON Web Tokens(JWT).",
        topic: 'react',
        link: "https://medium.com/better-programming/build-a-react-redux-app-with-javascript-web-tokens-9f2b73768e18"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*VKPoLz0BokYh0Wuj",
        title: "Build a Rails API With JWT",
        description: "This is a guide on creating and setting up a Rails API application from scratch. The focus will be on user login and sign up and authorizing/authenticating them with JWT (JSON Web Tokens).",
        topic: 'rails',
        link: "https://medium.com/better-programming/build-a-rails-api-with-jwt-61fb8a52d833"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*POj0vsz3b2UhWb2S.jpg",
        title: "A Simple Introduction to Redux",
        description: "The purpose of this guide is to break down some resources we get from Redux as well as to explain terminologies associated with it.",
        topic: 'redux',
        link: "https://medium.com/better-programming/a-simple-introduction-to-redux-387e6b232760"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*1JeHUV1wSFYeWTcU",
        title: "Polymorphic Associations in Rails",
        description: "In this guide, I will cover the problem I faced during my project and how the concept of polymorphic association solved it.",
        topic: 'rails',
        link: "https://medium.com/better-programming/polymorphic-associations-in-rails-72a91ae1a9dd"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/1*TNKSlcVHe25Gj_U45-0b9w.jpeg",
        title: "Create a Follow/Following Graph in Rails",
        description: "Build a sample social graph so users can follow each other",
        topic: 'rails',
        link: "https://medium.com/better-programming/create-a-follow-following-graph-in-rails-a6ec77139dff?source=---------4------------------"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*2QXFv38dyGxpx5eK.png",
        title: "React-Redux Hooks: useSelector and useDispatch",
        description: "A guide to using Redux with React hooks for cleaner code",
        topic: 'react',
        link: "https://levelup.gitconnected.com/react-redux-hooks-useselector-and-usedispatch-f7d8c7f75cdd"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*hpsZQ7ilZ6daN1fp.png",
        title: "React Hooks: useState and useEffect",
        description: "A guide to using the useState and useEffect hooks in your React app and converting a class component to a function component",
        topic: 'react',
        link: "https://levelup.gitconnected.com/react-hooks-usestate-and-useeffect-2d0b870c654f?source=---------6------------------"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/1*or-e6SwzLqNZ5_r0LnnlwQ.png",
        title: "JWT Auth in a React + Rails App",
        description: "This is a guide for implementing JSON Web Tokens (JWT) for a React (client-side) + Rails (server-side) application. To fully implement JWT, both React and Rails will be set up to handle the tokens generated.",
        topic: 'other',
        link: "https://levelup.gitconnected.com/jwt-auth-in-a-react-rails-app-8a7e6ba1ac0?source=---------7------------------"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/1*T_-NaFaHus_yTblauq3QWw.png",
        title: "Redux Setup for Your React App",
        description: "How to get started with reducers",
        topic: 'react',
        link: "https://medium.com/better-programming/redux-setup-for-your-react-app-d003ec03aedf?source=---------8------------------"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*78Wut4nTELlloega",
        title: "Building a Small Rails API with Serializers",
        description: "This guide will cover the steps necessary for setting up a Rails API.",
        topic: 'rails',
        link: "https://levelup.gitconnected.com/building-a-small-rails-api-with-serializers-32e3e69a078"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*YOinzTd8UtAz9l1Q",
        title: "Javascript Event Listeners: Closure vs. Delegation",
        description: "Proficient JavaScript developers combine both to maximize efficiency",
        topic: 'javascript',
        link: "https://medium.com/better-programming/javascript-event-listeners-closure-vs-delegation-e17552f1f59f"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*uD4kYL7jeIgz4Epg",
        title: "Creating a Basic Rails CRUD App",
        description: "In this tutorial, we will get a Ruby on Rails CRUD app running on our local server implementing RESTful conventions. For this guide, we want to create a course registration application.",
        topic: 'rails',
        link: "https://levelup.gitconnected.com/creating-a-basic-rails-crud-app-8720a53f0158"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*zUE6snp9LHS-OsrW",
        title: "Javascript Basics and Fundamentals",
        description: "The following Javascript fundamentals will be discussed Function Declaration/Expression, ES6 Arrow Function Syntax, Difference between let/const/var, Scope Chain in Functions, Iterator Methods, Pass by Value, Pass by Reference (as simply as possible)",
        topic: 'javascript',
        link: "https://levelup.gitconnected.com/javascript-basics-and-fundamentals-ccb1f017d6f3"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*v79zUcR07Rdg6otp",
        title: "Simple Authentication Guide with Ruby on Rails",
        description: "This is a simple tutorial on implementing authorization/authentication in your Rails application. For the record, this is one of many ways to implement auth, and it is intended to showcase a basic approach.",
        topic: 'rails',
        link: "https://levelup.gitconnected.com/simple-authentication-guide-with-ruby-on-rails-16a6255f0be8"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/0*3Q-U3u48leu4w6LB",
        title: "Guidelines for a New Coding Project",
        description: "Before diving into any coding project, planning is essential. The planning stage itself can be a daunting and tedious task, and you might just be tempted to start coding and plan during the process. I wouldn’t blame you, and I initially had that mindset.",
        topic: 'other',
        link: "https://levelup.gitconnected.com/guidelines-for-a-new-coding-project-7ec063bace78"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/1*Ca_93hUSRQZubVRQC31t3A.jpeg",
        title: "Drag n’Drop with react-beautiful-dnd",
        description: "Implementing and utilizing the react library, react-beautiful-dnd, to manage drag-and-drop feature in your application.",
        topic: 'react',
        link: "https://medium.com/@reireynoso/drag-ndrop-with-react-beautiful-dnd-73014e5937f2"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/1*Jaz_meNgNGqORk6PeV_TRw.jpeg",
        title: "Utilizing Global Variables in DOM Manipulation",
        description: "A DOM element that needs to be updated can be stored in a global variable for ease of access from other functitons.",
        topic: 'javascipt',
        link: "https://medium.com/@reireynoso/utilizing-global-variables-in-dom-manipulation-c1239a8584f0"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/1*INJRYOJ0F4Tu1f1e4CtPQA.jpeg",
        title: "FlexBox, a Layout Solution",
        description: "Flexbox’s underlying principle is to make flexible and intuitive but it can be difficult to visualize exactly how that is happening.",
        topic: 'css',
        link: "https://medium.com/@reireynoso/flexbox-a-layout-solution-41df47441750"
    },
    {
        image: "https://miro.medium.com/fit/c/1400/420/1*UWkL4QRmHnvLiIoXPoU2qA.jpeg",
        title: "TTY-Prompt Select for handling User Inputs",
        description: "Using TTY-Prompt to manage inputs from the user to minimize errors from user.",
        topic: 'ruby',
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
        company_year: "WeWork X Flatiron School | Aug 2019 - August 2020",
        duties: [
            "Presented lectures on Javascript, Ruby, React, Ruby on Rails, and HTML/CSS",
            "Identified/deployed content to meet the predefined learning objectives, and review assessments to diagnose student strengths and weaknesses",
            "Troubleshot with students and staff through different means such as debugging, and pair programming to solve a coding challenge and providing guidance, advice, and resources",
            "Created new units such labs, assessments, blogs, and readmes to contribute to the curriculum",
            "Lead workshops introducing beginner coders to front-end web development with Javascript, HTML and CSS"
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
            "Developed intriguing lessons that actively engaged learners, reinforced problem-solving and critical thinking skills, and prepared students for state exams",
            "Administered formal and informal assessments on a consistent basis to track student progress while at the same time utilizing results to enhance students’ performance",
            "Coordinated with students to develop and maintain classroom rules/procedures to maintain a positive learning environment"
        ]
    },
    {
        title: "I.T. Volunteer",
        company_year: "St. Michael's Hospital | Nov 2011 - Apr 2012",
        duties: [
            "Walked floor to floor troubleshooting and repairing different hardware issues of PCs in the hospital under the guidance of an IT supervisor",
            "Participated in ghosting/duplicating of computer hard drives onto other computer hard drives",
            "Upgraded computer components such as RAM and hard drives under the guidance of an IT supervisor"
        ]
    }
]

const labs = [
    {
        title: "Photo Uploader JS",
        link: "https://github.com/reireynoso/photo_uploader_lab_js",
        topic: "javascript"
    },
    {
        title: "Todo List Lite React",
        link: "https://github.com/reireynoso/todo-list-lab-lite",
        topic: "react"
    },
    {
        title: "Photo Uploader React",
        link: "https://github.com/reireynoso/react-photo-lab",
        topic: "react"
    },
    {
        title: "ECommerce React",
        link: "https://github.com/reireynoso/react-ecommerce-lab",
        topic: "react"
    },
    {
        title: "Debugging in React",
        link: "https://github.com/reireynoso/react-debugging",
        topic: "react"
    },
    {
        title: "Todo List CRUD React",
        link: "https://github.com/reireynoso/react-todo-mock-cc",
        topic: "react"
    },
    {
        title: "Spread Operator JS",
        link: "https://github.com/reireynoso/spread_operator_lecture_js",
        topic: "javascript"
    },
    {
        title: "Course App Rails",
        link: "https://github.com/reireynoso/course-app-rails-lecture",
        topic: "rails"
    },
    {
        title: "Hooks React",
        link: "https://github.com/reireynoso/react-hooks-lecture",
        topic: "react"
    },
    {
        title: "Closures Javascript",
        link: "https://github.com/reireynoso/closure-lesson-plan",
        topic: "javascript"
    },
    {
        title: "Pair Programming I",
        link: "https://github.com/reireynoso/pair-programming-workshop-lab",
        topic: "ruby"
    },
    {
        title: "Pair Programming II",
        link: "https://github.com/reireynoso/pair-programming-workshop-mod2",
        topic: "rails"
    }
]

const lectures = [
    {
        title: "Toy Tale Review Part 1 Dumbo Web 082619",
        image: "https://i.ytimg.com/vi/1I3GAlCwYrM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBr_mwoIrkoEOO3kCZClE1xxjx67w",
        topic: "javascript",
        link: "https://www.youtube.com/watch?v=1I3GAlCwYrM&t=1s"
    },
    {
        title: "Toy Tale Review Part 2 Dumbo Web 082619",
        image: "https://i.ytimg.com/vi/9COH6pvKGsc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDIw4hB5Q5uBb3Bz7R4VUr6aYA9XA",
        topic: "javascript",
        link: "https://www.youtube.com/watch?v=9COH6pvKGsc&t=126s"
    },
    {
        title: "Course Rails App Review 082619",
        image: "https://i.ytimg.com/vi/aAB_--vt6iM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDM4lF4cIOnQQJILq6Guo11yM2Hcg",
        topic: "rails",
        link: "https://www.youtube.com/watch?v=aAB_--vt6iM"
    },
    {
        title: "CLI Setup 082619",
        image: "https://i.ytimg.com/vi/e4CNuvTNQRw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAlTs_7GSaZth5SzQwE-8ea_bzrkg",
        topic: "ruby",
        link: "https://www.youtube.com/watch?v=e4CNuvTNQRw&t=6s"
    },
    {
        title: "Spread Operator 082619",
        image: "https://i.ytimg.com/vi/e1leGDBsoEk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBftNtjyi6FZy4Wjjg-xKsx3Rhu_g",
        topic: "javascript",
        link: "https://www.youtube.com/watch?v=e1leGDBsoEk"
    },
    {
        title: "Destructuring 082619",
        image: "https://i.ytimg.com/vi/x0ghwhSHDjo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC_fG5x9UKwWxE4O-KLyywhdTl3Gw",
        topic: "javascript",
        link: "https://www.youtube.com/watch?v=x0ghwhSHDjo&t=2s"
    },
    {
        title: "Hogwarts React Review 082619",
        image: "https://i.ytimg.com/vi/fuLIhxHSw0k/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC3CLBBk_jUgotI4uehfPw7Zh2A5A",
        topic: "react",
        link: "https://www.youtube.com/watch?v=fuLIhxHSw0k"
    },
    {
        title: "Toy Tales Vanilla JS Review 111819",
        image: "https://i.ytimg.com/vi/VixFTCt4EbI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBsNg1EuS48futj4qTkWAiSOPpEhw",
        topic: "javascript",
        link: "https://www.youtube.com/watch?v=VixFTCt4EbI"
    },
    {
        title: "Spread Operator ES6 JS 111819",
        image: "https://i.ytimg.com/vi/ASzyIRiL_EI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB_02z5PiquhuG20BiG09WFppQakg",
        topic: "javascript",
        link: "https://www.youtube.com/watch?v=ASzyIRiL_EI"
    },
    {
        title: "Destructure ES6 JS 111819",
        image: "https://i.ytimg.com/vi/ZeK1FDIod4E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBA-TMTp9AOFPW3ciUnWHglf7ITWQ",
        topic: "javascript",
        link: "https://www.youtube.com/watch?v=ZeK1FDIod4E"
    },
    {
        title: "React Review ToDoList 111819",
        image: "https://i.ytimg.com/vi/gIVeZLgI9BE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAT-CxnHmfm5SuCJP2uDZsLLRKM7g",
        topic: "react",
        link: "https://www.youtube.com/watch?v=gIVeZLgI9BE"
    },
    {
        title: "React Hooks  111819",
        image: "https://i.ytimg.com/vi/JOOeBEE9hMg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBIc1NzBRaPJviNEAoQKbD-xTw6Kw",
        topic: "react",
        link: "https://www.youtube.com/watch?v=JOOeBEE9hMg&t=1s",
    },
    {
        title: "Ruby Art Gallery Review 030920",
        image: "https://i.ytimg.com/vi/BBbBXL1yv6c/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAQwjVLgYKfUGBF5qFK8wm4VnmlMA",
        topic: "ruby",
        link: "https://www.youtube.com/watch?v=BBbBXL1yv6c"
    },
    {
        title: "Ruby Silicon Valley Review 030920",
        image: "https://i.ytimg.com/vi/fKHbfJyOHOQ/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCRM-LAqeepcE7DsWGgPwY3CLxGKw",
        topic: "ruby",
        link: "https://www.youtube.com/watch?v=fKHbfJyOHOQ"
    },
    {
        title: "Ruby on Rails Course App Review 030920",
        image: "https://i.ytimg.com/vi/OXaPhyAHH0k/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDDxbgBNQQtXrpcSZ_zjRTivZwHjg",
        topic: "rails",
        link: "https://www.youtube.com/watch?v=OXaPhyAHH0k"
    },
    {
        title: "React Hogwarts Review 042020",
        image: "https://i.ytimg.com/vi/2OJlEeSvbe4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCEmjDOmLPqvxWetZwaZnH3wosxeA",
        topic: "react",
        link: "https://www.youtube.com/watch?v=2OJlEeSvbe4"
    }
]

export default {
    projects,
    blogs,
    education,
    work,
    labs,
    lectures
}

