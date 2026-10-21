const pageMeta = {
    home: {
        title: "Daniel Garcia | @dgarcia024 | Portafolio",
        description:
            "Hola, Soy Daniel Garcia. Ingeniero en Computación con seis años de experiencia en desarrollo de software y optimización de procesos críticos."
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
        name: "Daniel García",
        jobTitle: "Desarrollador de software",
        sameAs: ["https://github.com/dgarcia024"]
    },

    PRESENTATION_TITLE: "Hola, Soy ",
    PRESENTATION_ROLE: "Desarrollador de software",
    PRESENTATION_DESCRIPTION: "Con +6 años de experiencia, me especializo en aplicaciones web con <span class='text-primary font-bold'>React</span> y APIs con <span class='text-primary font-bold'>Python</span> y <span class='text-primary font-bold'>.NET</span>.",

    notFound: {
        heading: "Página no encontrada",
        description:
            "La página que buscas no existe, fue movida o el enlace está roto.",
        backHome: "Volver al inicio"
    },

    // TODO: reemplazar con la información real
    experience: {
        title: "Experiencia",
        description:
            "Trayectoria en desarrollo de software y optimización de procesos críticos.",
        items: [
            {
                role: "Desarrollador de software",
                company: "Nombre de la empresa",
                period: "2023 — Actualidad",
                description: "Responsabilidades principales y logros destacados en el puesto."
            },
            {
                role: "Desarrollador de software",
                company: "Nombre de la empresa",
                period: "2021 — 2023",
                description: "Responsabilidades principales y logros destacados en el puesto."
            },
            {
                role: "Practicante de desarrollo",
                company: "Nombre de la empresa",
                period: "2020 — 2021",
                description: "Responsabilidades principales y logros destacados en el puesto."
            }
        ]
    },

    // TODO: reemplazar con la información real
    projects: {
        title: "Proyectos",
        description: "Una selección de proyectos en los que he trabajado.",
        items: [
            {
                name: "Nombre del proyecto",
                description: "Breve descripción del problema que resuelve y tu aporte en él.",
                tags: ["React", ".NET"],
                href: "#"
            },
            {
                name: "Nombre del proyecto",
                description: "Breve descripción del problema que resuelve y tu aporte en él.",
                tags: ["Python", "API"],
                href: "#"
            },
            {
                name: "Nombre del proyecto",
                description: "Breve descripción del problema que resuelve y tu aporte en él.",
                tags: ["React", "Python"],
                href: "#"
            }
        ]
    },

    // TODO: reemplazar con la información real
    skills: {
        title: "Habilidades",
        description: "Tecnologías y herramientas con las que trabajo cada día.",
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
                name: "Herramientas",
                items: ["Git", "GitHub Actions", "Docker", "Linux", "CI/CD"]
            }
        ]
    },

    // TODO: reemplazar el correo y los enlaces con los reales
    contact: {
        title: "Contacto",
        description: "¿Tienes un proyecto en mente? Escríbeme y lo charlamos.",
        email: "tu-correo@ejemplo.com",
        links: [
            { label: "GitHub", href: "https://github.com/dgarcia024" },
            { label: "LinkedIn", href: "#" },
            { label: "X / Twitter", href: "#" }
        ]
    }
};
