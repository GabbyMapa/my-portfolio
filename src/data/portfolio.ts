import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'External Scholarship Agent',
    description: 'LangGraph-powered scholarship advising assistant that helps students discover and apply for external scholarships using the iGrad API. Developed a modular multi-agent workflow for profile collection, scholarship matching, eligibility evaluation, and application guidance, while maintaining conversation state to deliver personalized, context-aware interactions.',
    technologies: ['Langgraph', 'python', 'FastAPI', 'Node.js'],
    githubUrl: 'https://github.com/Gabriela-Mapa_uopx/external-scholarship-agent',
    liveUrl: 'https://yourportfolio.com',
  },
  {
    id: 2,
    title: 'DinoBEATS',
    description: 'Built DinoBEATs, a Just Dance-style rhythm game in a team of four during a 24-hour hackathon, where players hit arrow keys in sync with falling directional cues tied to chiptune music; built using Java and libGDX and distributed as a runnable JAR via Gradle — won first place in the Retro Track at RowdyHacks 2022',
    technologies: ['Java', 'LibGDX', 'Gradle', 'JavaScript'],
    githubUrl: 'https://github.com/LukeRykta/RowdyHacks2022/tree/master',
    
  },
  {
    id: 3,
    title: 'RESTful social media API',
    description: 'Developed a Twitter-inspired RESTful API using Java, Spring Boot, and PostgreSQL, implementing core social media features including authentication, tweets, likes, follows, and user interactions. Designed relational data models and scalable backend architecture while collaborating in an Agile team environment to integrate, test, and debug API functionality.',
    technologies: ['Java', 'PostgreSQL', 'Springboot', 'TypeScript', 'Lombok', 'pgAdmin', 'Maven'],
    githubUrl: 'https://github.com/GabbyMapa/twitter-sim-API',
  
  },
];

export const personalInfo = {
  name: 'Gabriela Mapa',
  title: 'Full Stack Developer',
  email: 'gabrielamapa3@gmail.com',
  github: 'https://github.com/Gabriela-Mapa_uopx',
  linkedin: 'https://www.linkedin.com/in/gabriela-mapa-64b129192/',
  bio: 'Software Engineer building intelligent, cloud-native applications powered by LLMs and modern web technologies. I work across full-stack development and AWS infrastructure, focusing on scalable, production-ready systems.',
};

export const skills = {
  'Programming': ['Java', 'Python', 'JavaScript', 'Angular', 'Node.js', 'Typescript', 'SQL', ],
  'Database': ['MongoDB', 'PostgreSQL'],
  'Tools': ['Git', 'Docker', 'VS Code', 'Vite', 'Langgraph', 'Langsmith'],
};

export const resumeData = {
  experience: [
    {
      title: 'Fasttrack Engineer',
      organization: 'University of Phoenix',
      period: '2025 - Present',
      description: [
        'Built a multi-agent AI using Langgraph and Amazon Web Services Bedrock AgentCore with dynamic agent discovery, ECS Fargate scraping pipelines, and retrieval-based knowledge workflows',
        'Automated cloud infrastructure and deployment workflows using Lambda, Terraform, Spacelift, GitHub Actions, AppSync, and EventBridge for scalable AI service delivery',
        'Improved platform observability, security, and frontend architecture through LangSmith tracing, Ping Identity session controls, cross-tab synchronization, and micro-frontend UI modernization',
      ],
      technologies: ['Python', 'JavaScript', 'AWS Bedrock Agentcore', 'Node.js', 'Langgraph', `Terraform`],
    },
    {
      title: 'Full Stack Developer',
      organization: 'Cook Systems',
      period: 'September - October 2024',
      description: [
        'Developed full-stack applications using Angular, Spring Boot, TypeScript, and PostgreSQL, delivering scalable web systems with RESTful APIs and relational database integration',
        'Designed and implemented a Twitter-like social platform API with 30+ endpoints supporting authentication, posts, likes, mentions, and follow relationships using Spring Boot, JPA, and PostgreSQL',
        'Developed multiple full-stack projects including a wiki-style project management dashboard with CRUD functionality and a trivia game integrating third-party APIs and custom game logic, collaborating in Agile environments with CI/CD, GitHub workflows, and code reviews',
      ],
      technologies: ['Java', 'Javascript', 'Angular', 'SQL', 'Spring Boot', 'Maven', 'Node'],
    },
  ],
  education: [
    {
      title: 'Bachelor of Science in Computer Science',
      organization: 'University of Texas at San Antonio',
      period: '2019 - 2025',
      description: ['cum laude', 'Focus on software engineering and web development'],
    },
  ],
};
