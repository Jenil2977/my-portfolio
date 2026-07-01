export interface Profile {
  name: string;
  title: string;
  subTitle: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  about: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  location: string;
  startDate: string;
  endDate: string;
  coursework: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote: boolean;
  highlights: string[];
  skills: string[];
}

export interface ProjectItem {
  title: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  date: string;
  description: string;
  highlights: string[];
  features: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  details: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeData {
  profile: Profile;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  certifications: CertificationItem[];
  achievements: string[];
  formspreeEndpoint: string; // Recruiter can update this in their config
}

export const resumeData: ResumeData = {
  profile: {
    name: "Jenil Patel",
    title: "AI & Full-Stack Developer",
    subTitle: "B.Tech Student in Information Technology specializing in Python, Django, and AI/ML applications",
    location: "Bhavnagar, Gujarat, India",
    email: "jenilpatel614@gmail.com",
    phone: "+91-8530797917",
    linkedin: "https://www.linkedin.com/in/jenil-patel2977/",
    github: "https://github.com/Jenil2977",
    about: "I am a passionate Information Technology student and backend developer specialized in building AI-powered products, Retrieval-Augmented Generation (RAG) chatbots, and optimized REST APIs. With hands-on internship experience in Python, Django, and Java, I love creating clean, scalable backend systems and intelligent tools. I am continuously learning prompt engineering, agent workflows, and machine learning architectures to build software that makes a real-world impact."
  },
  education: [
    {
      institution: "Gyanmanjari Innovative University",
      degree: "Bachelor of Technology",
      fieldOfStudy: "Information Technology",
      location: "Bhavnagar, Gujarat",
      startDate: "Aug. 2023",
      endDate: "May 2027",
      coursework: [
        "Machine Learning",
        "Data Structures",
        "Database Management",
        "Computer Vision",
        "NLP",
        "Statistics and Probability",
        "Python Programming"
      ]
    }
  ],
  experience: [
    {
      company: "Su-kEm Tech Lab",
      role: "Python and Django Backend Developer Intern",
      location: "Remote",
      startDate: "Jun. 2025",
      endDate: "Jul. 2025",
      isRemote: true,
      skills: ["Django", "Django REST Framework", "Python", "pytest", "PostgreSQL", "Git", "REST APIs"],
      highlights: [
        "Developed and maintained RESTful APIs using Django REST Framework, reducing average API response time by 30 percent through query optimization and caching strategies.",
        "Implemented data preprocessing pipelines in Python to clean and transform raw datasets for downstream machine learning model consumption.",
        "Collaborated with a 4-member team using Git version control to build scalable backend modules, following MVC architecture and writing unit tests with pytest.",
        "Integrated PostgreSQL database models and wrote complex ORM queries, improving data retrieval efficiency for analytics dashboards."
      ]
    },
    {
      company: "iKraft Solutions",
      role: "Java Developer Intern",
      location: "Bhavnagar, Gujarat",
      startDate: "Jun. 2024",
      endDate: "Jul. 2024",
      isRemote: false,
      skills: ["Java", "OOP", "JUnit", "Data Ingestion", "Agile", "Git"],
      highlights: [
        "Built and tested Java-based backend modules using object-oriented programming principles, reducing code redundancy by 25 percent through design pattern implementation.",
        "Developed data ingestion and transformation utilities in Java to process structured datasets, supporting reporting and analytics workflows.",
        "Participated in Agile sprint cycles, contributed to daily standups, and delivered features on schedule across 3 sprint cycles.",
        "Wrote JUnit test cases achieving 85 percent code coverage, ensuring stability of production-grade backend services."
      ]
    }
  ],
  projects: [
    {
      title: "AI Resume Intelligence Platform",
      technologies: ["FastAPI", "Python", "SpaCy", "EasyOCR", "Sentence Transformers", "HTML/CSS"],
      githubUrl: "https://github.com/jenil-patel",
      liveUrl: "https://github.com/jenil-patel",
      date: "2026",
      description: "An AI-powered resume parsing and analysis platform utilizing advanced NLP and OCR tools to rank candidates and check job descriptions alignment.",
      highlights: [
        "Developed an AI-powered resume analysis platform that extracts candidate information, skills, education, and experience from PDF and image resumes using SpaCy NLP and EasyOCR.",
        "Implemented ATS score calculation, resume strength analysis, missing skill detection, and AI-generated feedback to help improve resume quality.",
        "Built a FastAPI-based web application with an interactive dashboard for resume screening, candidate ranking, and job-resume matching.",
        "Integrated Sentence Transformers for semantic similarity matching between resumes and job descriptions, enabling intelligent candidate evaluation and ranking."
      ],
      features: [
        "Automated PDF & image information extraction",
        "ATS Score Calculation & Improvement Tips",
        "FastAPI Interactive Screening Dashboard",
        "Semantic candidate-job description matching"
      ]
    },
    {
      title: "RAG-Based Document Q&A Chatbot",
      technologies: ["Python", "LangChain", "FAISS", "Gemini API", "Streamlit"],
      githubUrl: "https://github.com/jenil-patel",
      liveUrl: "https://github.com/jenil-patel",
      date: "2026",
      description: "A Retrieval-Augmented Generation (RAG) chatbot allowing users to upload PDF documents and ask contextual questions using LLMs.",
      highlights: [
        "Developed a Retrieval-Augmented Generation (RAG) chatbot that enables users to upload PDF documents and ask natural language questions with context-aware responses.",
        "Implemented semantic document retrieval using FAISS vector database and HuggingFace embeddings for efficient similarity search across document chunks.",
        "Integrated Google Gemini 2.5 Flash API with LangChain-based text processing pipeline to generate accurate answers grounded in retrieved document context.",
        "Built an interactive Streamlit web application supporting PDF upload, text extraction, chunking, vector indexing, and real-time document question answering."
      ],
      features: [
        "Multi-page PDF parsing and chunking",
        "FAISS Vector Database indexing",
        "Gemini 2.5 Flash context grounding",
        "Interactive Streamlit user interface"
      ]
    },
    {
      title: "LostnFound Portal",
      technologies: ["React.js", "TypeScript", "Firebase Firestore", "Firebase Storage", "Flask", "Tailwind CSS"],
      githubUrl: "https://github.com/jenil-patel",
      liveUrl: "https://github.com/jenil-patel",
      date: "2024",
      description: "A full-stack, responsive web application for reporting and claiming lost or found items with image uploads and category filtering.",
      highlights: [
        "Developed a full-stack Lost & Found portal using React.js and TypeScript, enabling users to report, search, and manage lost or found items with image uploads.",
        "Integrated Firebase Firestore and Firebase Storage for real-time data management, secure cloud image storage, and CRUD operations on item records.",
        "Implemented authentication, category-based filtering, search functionality, and LocalStorage fallback support, while designing a responsive UI with Tailwind CSS."
      ],
      features: [
        "Real-time item reporting & database updates",
        "Secure photo uploads with Firebase Storage",
        "Category filtering & search query routing",
        "Responsive, modern Tailwind UI layout"
      ]
    }
  ],
  skills: [
    {
      category: "Languages",
      skills: ["Python", "Java", "SQL", "JavaScript", "HTML", "CSS"]
    },
    {
      category: "AI and ML",
      skills: ["Pandas", "NumPy", "Matplotlib", "EasyOCR", "TensorFlow", "Keras", "Scikit-learn", "PyTorch", "OpenCV", "SpaCy"]
    },
    {
      category: "Frameworks & Tools",
      skills: ["Django", "FastAPI", "Flask", "LangChain", "n8n", "Git"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "SQLite", "FAISS (Vector Store)"]
    },
    {
      category: "Developer Tools",
      skills: ["VS Code", "Jupyter Notebook", "Google Colab", "GitHub"]
    }
  ],
  certifications: [
    {
      title: "AI Fluency: Framework & Foundations",
      issuer: "Anthropic",
      year: "2026",
      details: "LLM Architecture, AI Systems Design, Generative AI Applications"
    },
    {
      title: "Data Science Course",
      issuer: "CodeWithHarry",
      year: "2026",
      details: "Python, NumPy, Pandas, Matplotlib, Data Analysis, Machine Learning Fundamentals"
    },
    {
      title: "Claude Code in Action",
      issuer: "Anthropic",
      year: "2026",
      details: "LLM-based Applications, AI Agent Workflows, Claude API"
    },
    {
      title: "Claude 101",
      issuer: "Anthropic",
      year: "2026",
      details: "Prompt Engineering, Responsible AI Development, AI-Assisted Software Development"
    },
    {
      title: "Python for Data Science",
      issuer: "simplilearn",
      year: "2025",
      details: "Data Analysis, Data Preprocessing, EDA, Data Visualization with Pandas and NumPy"
    }
  ],
  achievements: [
    "Published 3 major AI & full-stack open-source projects",
    "Completed 5 professional AI, Machine Learning, and Data Science certifications",
    "Achieved 30% reduction in API response times through DRF query optimizations during internship",
    "Developed robust RAG system with Gemini 2.5 and FAISS vector matching",
    "Designed and tested Java services attaining 85% JUnit code coverage"
  ],
  formspreeEndpoint: "https://formspree.io/f/mqakojze"
};
