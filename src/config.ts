export const SITE = {
  name: "Antonio Torres Gómez",
  url: "https://antoitoo01.github.io/cv",
  email: "antoniotorresprivado@gmail.com",
  phone: "+34 651085868",
  github: "https://github.com/antoitoo01",
  linkedin: "https://www.linkedin.com/in/antonio-torres-dev/",
  description: {
    en: "Full-Stack & Mobile Developer. Building performant, cross-platform applications.",
    es: "Desarrollador Full-Stack & Móvil. Construyendo aplicaciones multiplataforma eficientes.",
  },
};

export const SKILLS = {
  backend: ["Java", "Kotlin", "PHP", "Spring Framework", "Ktor", "Symfony", "Laravel"],
  frontend: ["Angular", "Vue.js", "TypeScript", "TailwindCSS", "JavaScript"],
  mobile: ["Kotlin Multiplatform", "Flutter / Dart", "Android", "iOS"],
  devops: ["Docker", "Firebase", "GitHub Actions"],
  databases: ["MySQL", "Oracle PL/SQL", "Firestore"],
  testing: ["JUnit", "Mockito"],
  data: ["Power BI", "BigQuery", "Looker Studio"],
} as const;

export const PROJECTS = [
  {
    title: "PIM System — Frontend",
    description: {
      en: "Product Information Management web application built with Angular 19 and TypeScript for a major home appliance company. Focused on a harmonious, clear UI to reduce product management time by approximately 10 seconds per product.",
      es: "Sistema web de gestión de información de producto construido con Angular 19 y TypeScript para una gran empresa de electrodomésticos. UI clara y concisa para reducir el tiempo de gestión de producto ~10 segundos por producto.",
    },
    stack: ["Angular 19", "TypeScript", "TailwindCSS"],
    github: "https://github.com/antoitoo01",
  },
  {
    title: "Employee Check-In System",
    description: {
      en: "Java application for recording employee check-in/check-out times with time restrictions, geolocation validation, and reporting capabilities. Also contributed to web projects using Laravel, Vue 3, and Tailwind CSS.",
      es: "Aplicación Java para registrar fichajes de empleados con restricciones horarias, validación por geolocalización y generación de informes. También contribuí a proyectos web con Laravel, Vue 3 y Tailwind CSS.",
    },
    stack: ["Java", "Laravel", "Vue 3", "TailwindCSS"],
    github: "https://github.com/antoitoo01",
  },
  {
    title: "All My Money",
    description: {
      en: "Personal finance management app focused on cross-platform accessibility (Desktop, Android, iOS), resource optimization, and easy maintenance. Built with clean architecture and design patterns for a robust, maintainable codebase.",
      es: "Aplicación de gestión de finanzas personales centrada en accesibilidad multiplataforma (Desktop, Android, iOS), optimización de recursos y fácil mantenimiento. Construida con arquitectura limpia y patrones de diseño.",
    },
    stack: ["Kotlin Multiplatform", "Ktor", "Java", "Firebase"],
    github: "https://github.com/antoitoo01",
  },
] as const;

export const EXPERIENCE = [
  {
    role: { en: "Frontend Developer", es: "Desarrollador Frontend" },
    company: "Exembit S.L.",
    location: "Remote",
    period: { en: "Mar 2025 — Jun 2025", es: "Mar 2025 — Jun 2025" },
    description: {
      en: "Front-end development of a Product Information Management (PIM) system with Angular 19 and TypeScript for a major home appliance company. Built a harmonious, clear UI to reduce product management time by approximately 10 seconds per product.",
      es: "Desarrollo frontend de un sistema PIM con Angular 19 y TypeScript para una gran empresa de electrodomésticos. Construí una UI clara y concisa, reduciendo el tiempo de gestión de producto ~10 segundos por producto.",
    },
    type: "freelance",
  },
  {
    role: { en: "Mobile Developer", es: "Desarrollador Móvil" },
    company: "Plairsoft",
    location: "Remote",
    period: { en: "Nov 2024 — Mar 2025", es: "Nov 2024 — Mar 2025" },
    description: {
      en: "I contributed to developing Airsoft Arena, a mobile app for Android and iOS built with Flutter for booking fields, store directories, game stats, social features, and Stripe payments. Also contributed to the Symfony PHP backend for real-time data processing and secure transactions.",
      es: "Contribuí a desarrollar Airsoft Arena, app móvil Android/iOS con Flutter para reservar campos, directorios de tiendas, estadísticas, funciones sociales y pagos Stripe. También contribuí al backend Symfony PHP para procesamiento de datos en tiempo real y transacciones seguras.",
    },
    type: "fulltime",
  },
  {
    role: { en: "Intern Developer", es: "Desarrollador en Prácticas" },
    company: "Megasur S.L.",
    location: "Algeciras, Spain",
    period: { en: "Mar 2024 — May 2024", es: "Mar 2024 — May 2024" },
    description: {
      en: "Developed a Java application for employee check-in/check-out tracking with time restrictions and geolocation. Also worked on web projects using Laravel, Vue 3, Tailwind CSS, and JavaScript.",
      es: "Desarrollé una aplicación Java para fichajes de empleados con restricciones horarias y geolocalización. También trabajé en proyectos web con Laravel, Vue 3, Tailwind CSS y JavaScript.",
    },
    type: "internship",
  },
] as const;

export const EDUCATION = [
  {
    degree: {
      en: "C.F.G.S. Multiplatform Application Development",
      es: "C.F.G.S. Desarrollo de Aplicaciones Multiplataforma",
    },
    school: "I.E.S. Francisco Ayala",
    location: "Granada, Spain",
    period: { en: "Sep 2022 — Jul 2024", es: "Sep 2022 — Jul 2024" },
    description: {
      en: "Official Higher Degree (2,000 hours) covering programming, databases, interface development, mobile devices, services, processes, and ERP-CRM systems. Competencies: full-stack development for desktop and mobile, cross-platform architecture, software engineering best practices.",
      es: "Título Oficial de Formación Profesional (2.000 h) con módulos de programación, bases de datos, interfaces, dispositivos móviles, servicios, procesos y sistemas ERP-CRM. Competencias: desarrollo fullstack para escritorio y móvil, arquitectura multiplataforma, buenas prácticas de ingeniería del software.",
    },
    type: "degree",
  },
  {
    degree: {
      en: "Data Analytics — Cívica",
      es: "Data Analytics — Cívica",
    },
    school: "Cívica",
    location: "Granada, Spain",
    period: { en: "Mar 2026 — Apr 2026", es: "Mar 2026 — Abr 2026" },
    description: {
      en: "156-hour training program in Data Analytics covering SQL, data modeling (BigQuery, Snowflake), dashboard development (Power BI, Looker), functional analysis, and data-driven decision-making. Completed successfully.",
      es: "Programa formativo de 156 horas en Data Analytics: SQL, modelado de datos (BigQuery, Snowflake), desarrollo de dashboards (Power BI, Looker), análisis funcional y toma de decisiones basada en datos.",
    },
    type: "course",
  },
  {
    degree: {
      en: "Efficiency Analysis in Workplace Functions",
      es: "Análisis de Eficiencia en Funciones Laborales",
    },
    school: "Obsidia S.L.",
    location: "Granada, Spain",
    period: { en: "Mar 2024", es: "Mar 2024" },
    description: {
      en: "Training in efficiency analysis applied to workplace functions: quantitative and qualitative analysis, resource optimization, and competitive strategy development.",
      es: "Formación en análisis de eficiencia aplicado a funciones laborales: análisis cuantitativo y cualitativo, optimización de recursos y desarrollo de estrategias competitivas.",
    },
    type: "course",
  },
];

export const TECHNOLOGY_ICONS: Record<string, string> = {
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  Kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  "Spring Framework": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  Angular: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
  "Angular 19": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  "Vue 3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  TailwindCSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Kotlin Multiplatform": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
  "Flutter / Dart": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  Android: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
  iOS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg",
  Ktor: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
  Symfony: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg",
  "Symfony PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg",
  Laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  Firestore: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "GitHub Actions": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "Oracle PL/SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
  JUnit: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  Mockito: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "Power BI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powerbi/powerbi-original.svg",
  BigQuery: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  "Looker Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/looker/looker-original.svg",
};
