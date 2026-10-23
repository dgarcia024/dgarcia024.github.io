const pageMeta = {
    home: {
        title: "Daniel Garcia | @dgarcia024 | Portfolio",
        description:
            "Computer Engineer focused on software development and critical process optimization. Unconditional responsibility towards project goals and assertive communication in multidisciplinary teams, ensuring efficient and scalable technical solutions."
    },
    experience: {
        title: "Experience | Daniel García",
        description:
            "Track record in software development and optimization of critical processes."
    },
    projects: {
        title: "Projects | Daniel García",
        description: "A selection of projects I have worked on."
    },
    skills: {
        title: "Skills | Daniel García",
        description: "Technologies and tools I work with every day."
    },
    contact: {
        title: "Contact | Daniel García",
        description: "Got a project in mind? Drop me a line and let's talk."
    }
};

export default {
    languageLabel: "Language",
    languageOptions: {
        es: "Spanish",
        en: "English"
    },
    nav: {
        home: "Home",
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact"
    },
    navLabel: "Main navigation",

    pageMeta,

    profile: {
        name: "Daniel Antonio García Vásquez",
        jobTitle: "Software Engineer",
        sameAs: ["https://github.com/dgarcia024", "https://linkedin.com/in/dgarcia024"]
    },

    PRESENTATION_TITLE: "Hello, I'm ",
    PRESENTATION_ROLE: "Software Engineer",
    PRESENTATION_DESCRIPTION: "Software Engineer with <span class='text-primary font-bold'>+6 years experience</span> in web development using <span class='text-primary font-bold'>React</span>, <span class='text-primary font-bold'>C#</span> and <span class='text-primary font-bold'>Python</span>. Specialist in critical process optimization and medical systems automation.",

    notFound: {
        heading: "Page not found",
        description: "The page you are looking for does not exist, was moved, or the link is broken.",
        backHome: "Back to home"
    },

    experience: {
        title: "Experience",
        description:
            "Track record in software development and optimization of critical processes.",
        items: [
            {
                role: "Software Developer",
                company: "Instituto de Ciencias Sostenibles (ICS)",
                period: "2024 — 2025",
                description:
                    "Development and maintenance of legacy systems for medical management using ReactJS, C#, MySQL and Transact-SQL. Automation of clinical processes with Python + MySQL."
            },
            {
                role: "Data Quality Control Assistant",
                company: "Instituto de Ciencias Sostenibles (ICS)",
                period: "2023",
                description:
                    "Administration and monitoring of MySQL databases for critical medical records. Standardization of operational processes for bulk data loading."
            },
            {
                role: "Software Developer",
                company: "RadarNic (E-Commerce)",
                period: "2019 — 2022",
                description:
                    "Development and maintenance of RadarNic e-commerce web system using ReactJS, C#, Transact-SQL, Stripe API."
            }
        ]
    },

    projects: {
        title: "Projects",
        description: "A selection of projects I have worked on.",
        items: [
            {
                name: "Medical Management Systems (ICS)",
                description: "Development and maintenance of legacy systems for medical management, clinical process automation, and optimization of critical medical databases.",
                tags: ["ReactJS", "C#", "MySQL", "Transact-SQL", "Python"],
                href: "#"
            },
            {
                name: "RadarNic E-Commerce",
                description: "Development and maintenance of e-commerce platform with Stripe payment integration and full-stack architecture.",
                tags: ["ReactJS", "C#", "Transact-SQL", "Stripe API"],
                href: "#"
            },
            {
                name: "Clinical Process Automation",
                description: "Clinical process automation with Python and MySQL to optimize medical records management and bulk data loading.",
                tags: ["Python", "MySQL", "Automation"],
                href: "#"
            }
        ]
    },

    skills: {
        title: "Skills",
        description: "Technologies and tools I work with every day.",
        groups: [
            {
                name: "Back-end",
                items: ["C#", "Entity Framework Code-First", "Python", "MySQL", "Transact-SQL"]
            },
            {
                name: "Front-end",
                items: ["ReactJS", "JavaScript (ES6+)", "HTML5", "CSS3", "Astro", "Tailwind CSS"]
            },
            {
                name: "Cloud & Tools",
                items: ["GitHub (Git)", "VS Code"]
            },
            {
                name: "Methodologies",
                items: ["Scrum"]
            },
            {
                name: "Soft Skills",
                items: ["Unconditional responsibility", "Assertive communication", "Professional humility"]
            }
        ]
    },

    contact: {
        title: "Contact",
        description: "Got a project in mind? Drop me a line and let's talk.",
        email: "danielgv2404@gmail.com",
        links: [
            { label: "GitHub", href: "https://github.com/dgarcia024" },
            { label: "LinkedIn", href: "https://linkedin.com/in/dgarcia024" },
            { label: "X / Twitter", href: "#" }
        ]
    }
};