const pageMeta = {
    home: {
        title: "Daniel Garcia | @dgarcia024 | Portfolio",
        description:
            "Hello, I’m Daniel García. I am a computer engineer with six years of experience in software development and the optimization of critical processes."
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
        name: "Daniel García",
        jobTitle: "Software developer",
        sameAs: ["https://github.com/dgarcia024"]
    },

    PRESENTATION_TITLE: "Hello, I'm ",
    PRESENTATION_ROLE: "Software developer",
    PRESENTATION_DESCRIPTION: "With 6+ years of experience, I specialize in web applications with <span class='text-primary font-bold'>React</span> and APIs with <span class='text-primary font-bold'>Python</span> and <span class='text-primary font-bold'>.NET</span>.",

    notFound: {
        heading: "Page not found",
        description: "The page you are looking for does not exist, was moved, or the link is broken.",
        backHome: "Back to home"
    },

    // TODO: replace with the real information
    experience: {
        title: "Experience",
        description:
            "Track record in software development and optimization of critical processes.",
        items: [
            {
                role: "Software developer",
                company: "Company name",
                period: "2023 — Present",
                description: "Main responsibilities and notable achievements in the role."
            },
            {
                role: "Software developer",
                company: "Company name",
                period: "2021 — 2023",
                description: "Main responsibilities and notable achievements in the role."
            },
            {
                role: "Software engineering intern",
                company: "Company name",
                period: "2020 — 2021",
                description: "Main responsibilities and notable achievements in the role."
            }
        ]
    },

    // TODO: replace with the real information
    projects: {
        title: "Projects",
        description: "A selection of projects I have worked on.",
        items: [
            {
                name: "Project name",
                description: "Short description of the problem it solves and your contribution.",
                tags: ["React", ".NET"],
                href: "#"
            },
            {
                name: "Project name",
                description: "Short description of the problem it solves and your contribution.",
                tags: ["Python", "API"],
                href: "#"
            },
            {
                name: "Project name",
                description: "Short description of the problem it solves and your contribution.",
                tags: ["React", "Python"],
                href: "#"
            }
        ]
    },

    // TODO: replace with the real information
    skills: {
        title: "Skills",
        description: "Technologies and tools I work with every day.",
        groups: [
            {
                name: "Frontend",
                items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
            },
            {
                name: "Backend",
                items: ["Python", ".NET", "Node.js", "REST APIs", "SQL"]
            },
            {
                name: "Tools",
                items: ["Git", "GitHub Actions", "Docker", "Linux", "CI/CD"]
            }
        ]
    },

    // TODO: replace the email and links with the real ones
    contact: {
        title: "Contact",
        description: "Got a project in mind? Drop me a line and let's talk.",
        email: "your-email@example.com",
        links: [
            { label: "GitHub", href: "https://github.com/dgarcia024" },
            { label: "LinkedIn", href: "#" },
            { label: "X / Twitter", href: "#" }
        ]
    }
};
