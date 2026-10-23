const pageMeta = {
    home: {
        title: "Daniel Garcia | @dgarcia024 | Portafolio",
        description:
            "Ingeniero en Computación con enfoque en el desarrollo de software y optimización de procesos críticos. Responsabilidad incondicional hacia los objetivos del proyecto y capacidad de comunicación asertiva en equipos multidisciplinarios, asegurando soluciones técnicas eficientes y escalables."
    },
    experience: {
        title: "Experiencia | Daniel García",
        description:
            "Trayectoria en desarrollo de software y optimización de procesos críticos."
    },
    projects: {
        title: "Proyectos | Daniel García",
        description: "Una selección de proyectos en los que he trabajado."
    },
    skills: {
        title: "Habilidades | Daniel García",
        description: "Tecnologías y herramientas con las que trabajo cada día."
    },
    contact: {
        title: "Contacto | Daniel García",
        description: "¿Tienes un proyecto en mente? Escríbeme y lo charlamos."
    }
};

export default {
    languageLabel: "Idioma",
    languageOptions: {
        es: "Español",
        en: "Inglés"
    },
    nav: {
        home: "Inicio",
        experience: "Experiencia",
        projects: "Proyectos",
        skills: "Habilidades",
        contact: "Contacto"
    },
    navLabel: "Navegación principal",

    pageMeta,

    profile: {
        name: "Daniel Antonio García Vásquez",
        jobTitle: "Ingeniero de software",
        sameAs: ["https://github.com/dgarcia024", "https://linkedin.com/in/dgarcia024"]
    },

    PRESENTATION_TITLE: "Hola, Soy ",
    PRESENTATION_ROLE: "Ingeniero de software",
    PRESENTATION_DESCRIPTION: "Ingeniero de software con <span class='text-primary font-bold'>+6 años de experiencia</span> en desarrollo web con <span class='text-primary font-bold'>React</span>, <span class='text-primary font-bold'>C#</span> y <span class='text-primary font-bold'>Python</span>. Especialista en optimización de procesos críticos y automatización de sistemas",

    notFound: {
        heading: "Página no encontrada",
        description:
            "La página que buscas no existe, fue movida o el enlace está roto.",
        backHome: "Volver al inicio"
    },

    experience: {
        title: "Experiencia",
        description:
            "Trayectoria en desarrollo de software y optimización de procesos críticos.",
        items: [
            {
                role: "Desarrollador de Sistemas",
                company: "Instituto de Ciencias Sostenibles (ICS)",
                period: "2024 — 2025",
                description:
                    "Desarrollo y mantenimiento sobre sistemas legados para gestión médica utilizando ReactJS, C#, MySQL y Transact-SQL. Automatización de procesos clínicos con Python + MySQL."
            },
            {
                role: "Asistente de Control de Calidad de Datos",
                company: "Instituto de Ciencias Sostenibles (ICS)",
                period: "2023",
                description:
                    "Administración y monitoreo de BD MySQL para registros médicos críticos. Estandarización de procesos operativos para la carga masiva de datos."
            },
            {
                role: "Desarrollador de sistemas",
                company: "RadarNic (E-Commerce)",
                period: "2019 — 2022",
                description:
                    "Desarrollo y mantenimiento de sistema web de comercio RadarNic utilizando ReactJS, C#, Transact-SQL, Stripe API."
            }
        ]
    },

    projects: {
        title: "Proyectos",
        description: "Una selección de proyectos en los que he trabajado.",
        items: [
            {
                name: "Sistemas de gestión médica (ICS)",
                description: "Desarrollo y mantenimiento de sistemas legados para gestión médica, automatización de procesos clínicos y optimización de bases de datos médicas críticas.",
                tags: ["ReactJS", "C#", "MySQL", "Transact-SQL", "Python"],
                href: "#"
            },
            {
                name: "RadarNic E-Commerce",
                description: "Desarrollo y mantenimiento de plataforma de comercio electrónico con integración de pagos Stripe y arquitectura full-stack.",
                tags: ["ReactJS", "C#", "Transact-SQL", "Stripe API"],
                href: "#"
            },
            {
                name: "Automatización de procesos clínicos",
                description: "Automatización de procesos clínicos con Python y MySQL para optimizar la gestión de registros médicos y carga masiva de datos.",
                tags: ["Python", "MySQL", "Automatización"],
                href: "#"
            }
        ]
    },

    skills: {
        title: "Habilidades",
        description: "Tecnologías y herramientas con las que trabajo cada día.",
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
                name: "Metodologías",
                items: ["Scrum"]
            },
            {
                name: "Habilidades Blandas",
                items: ["Responsabilidad incondicional", "Comunicación asertiva", "Humildad profesional"]
            }
        ]
    },

    contact: {
        title: "Contacto",
        description: "¿Tienes un proyecto en mente? Escríbeme y lo charlamos.",
        email: "danielgv2404@gmail.com",
        links: [
            { label: "GitHub", href: "https://github.com/dgarcia024" },
            { label: "LinkedIn", href: "https://linkedin.com/in/dgarcia024" },
            { label: "X / Twitter", href: "#" }
        ]
    }
};