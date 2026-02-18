export const translations = {
  it: {
    nav: {
      about: "Chi Sono",
      experience: "Esperienza",
      skills: "Competenze",
      education: "Formazione",
      bugbounty: "Bug Bounty",
      contact: "Contatti",
    },
    hero: {
      title: "Antonio Squillace",
      roles: {
        security: "Analista Sicurezza Applicativa",
        pentester: "Penetration Tester",
        developer: "Sviluppatore Backend",
      },
      description: "Professionista nel campo della sicurezza informatica con esperienza biennale come tester di penetrazione, specializzato nella valutazione di vulnerabilità e nello sviluppo backend sicuro.",
      downloadCV: "Scarica CV",
    },
    about: {
      title: "Chi Sono",
      p1: "Sono un professionista nel campo della sicurezza informatica con un'esperienza biennale come tester di penetrazione, specializzato nella valutazione di vulnerabilità, test di intrusione e nella redazione di report dettagliati sui rischi per la sicurezza.",
      p2: "La mia esperienza include la progettazione e l'attuazione di test di penetrazione mirati, attraverso i quali ho efficacemente identificato e contribuito a mitigare minacce significative alla sicurezza IT di diverse organizzazioni.",
      p3: "Agile nell'adattamento a contesti diversificati, valorizzo il lavoro di squadra e la collaborazione come elementi chiave per il successo dei progetti di sicurezza informatica.",
    },
    experience: {
      title: "Esperienza Lavorativa",
      items: [
        {
          title: "Analista di Sicurezza Applicativa",
          company: "Attuale",
          period: "2024 – Attuale",
          points: [
            "Analisi statica e dinamica di file eseguibili, librerie software e applicazioni mobili per identificare comportamenti sospetti o malevoli.",
            "Attività di reverse engineering su software e componenti per comprendere logiche di funzionamento interne.",
            "Utilizzo di debugger, disassemblatori (IDA Pro, Ghidra) e sandbox.",
            "Documentazione tecnica delle vulnerabilità scoperte (es. buffer overflow, race condition)."
          ]
        },
        {
          title: "Sviluppatore Backend",
          company: "Attuale",
          period: "2024 – Attuale",
          points: [
            "Sviluppo e manutenzione di applicazioni backend robuste, scalabili e performanti.",
            "Progettazione e implementazione di API RESTful sicure.",
            "Containerizzazione di applicazioni tramite Docker.",
            "Conduzione di attività di code review e mitigazione vulnerabilità (Secure SDLC)."
          ]
        },
        {
          title: "Penetration Tester",
          company: "Poste Italiane",
          period: "01/05/2022 – 31/12/2023",
          points: [
            "Scansioni di Vulnerability Assessment mediante tool automatici.",
            "Attività di Penetration Test infrastrutturali/applicativi.",
            "Verifiche dello stato di sicurezza dei sistemi in ambiente di produzione e certificazione."
          ]
        },
        {
          title: "Security Assessment Consultant",
          company: "Ministero della Giustizia",
          period: "01/12/2022 – 30/06/2023",
          points: [
            "Attività di PT a livello applicativo.",
            "Attività di reportistica e verifiche condotte su sistemi in certificazione."
          ]
        }
      ]
    },
    skills: {
      title: "Competenze Tecniche",
      categories: {
        programming: "Programmazione",
        tools: "Strumenti Cybersecurity",
        infra: "Infrastruttura & Cloud",
        compliance: "Compliance & Standard"
      }
    },
    education: {
      title: "Istruzione e Formazione",
      items: [
        {
          degree: "Laurea Magistrale in Ingegneria Informatica (Cybersecurity)",
          school: "Università della Calabria",
          date: "15/12/2022",
          details: "Voto finale: 110. Tesi: Un sistema cyber range basato su digital twin per l'analisi di attacchi informatici a sistemi di controllo industriale."
        },
        {
          degree: "Laurea Triennale in Ingegneria Informatica",
          school: "Università della Calabria",
          date: "16/09/2019",
          details: "Voto finale: 96. Tesi: Attacchi informatici basati su tecniche basate su Return Oriented Programming (ROP)."
        },
        {
          degree: "Certified Ethical Hacker (CEH)",
          school: "EC-Council",
          date: "2024"
        }
      ]
    },
    bugbounty: {
      title: "Attività di Bug Bounty",
      description: "Vulnerabilità identificate e segnalate responsabilmente.",
      items: [
        {
          id: "LVE-2023-0153",
          title: "Administrator account information exposure",
          target: "LG SuperSign CMS",
        },
        {
          id: "LVE-2023-0154",
          title: "Encrypted information exposure",
          target: "LG SuperSign CMS",
        },
        {
          id: "LVE-2023-0155",
          title: "RCE possible vulnerability via bind shell",
          target: "LG SuperSign CMS",
        }
      ],
      linkText: "Dettagli bollettino sicurezza LG",
    },
    contact: {
      title: "Contatti",
      description: "Interessato a collaborare o hai una domanda? Non esitare a contattarmi!",
      location: "San Mauro Marchesato (KR), Italia"
    }
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      bugbounty: "Bug Bounty",
      contact: "Contact",
    },
    hero: {
      title: "Antonio Squillace",
      roles: {
        security: "Application Security Analyst",
        pentester: "Penetration Tester",
        developer: "Backend Developer",
      },
      description: "Cybersecurity professional with two years of experience as a penetration tester, specialized in vulnerability assessment and secure backend development.",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      p1: "I am a cybersecurity professional with two years of experience as a penetration tester, specializing in vulnerability assessment, intrusion testing, and drafting detailed security risk reports.",
      p2: "My experience includes designing and implementing targeted penetration tests, through which I have effectively identified and helped mitigate significant IT security threats for various organizations.",
      p3: "Agile in adapting to diverse contexts, I value teamwork and collaboration as key elements for the success of cybersecurity projects.",
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          title: "Application Security Analyst",
          company: "Current",
          period: "2024 – Present",
          points: [
            "Static and dynamic analysis of executables, software libraries, and mobile apps to identify suspicious behavior.",
            "Reverse engineering on software and components to understand internal logic.",
            "Use of debuggers, disassemblers (IDA Pro, Ghidra), and sandboxes.",
            "Technical documentation of discovered vulnerabilities (e.g., buffer overflow, race condition)."
          ]
        },
        {
          title: "Backend Developer",
          company: "Current",
          period: "2024 – Present",
          points: [
            "Development and maintenance of robust, scalable, and high-performance backend applications.",
            "Design and implementation of secure RESTful APIs.",
            "Containerization of applications using Docker.",
            "Code reviews and vulnerability mitigation (Secure SDLC)."
          ]
        },
        {
          title: "Penetration Tester",
          company: "Poste Italiane",
          period: "05/01/2022 – 12/31/2023",
          points: [
            "Vulnerability Assessment scans using automated tools.",
            "Infrastructural and application Penetration Testing.",
            "Security state verification in production and certification environments."
          ]
        },
        {
          title: "Security Assessment Consultant",
          company: "Ministry of Justice",
          period: "12/01/2022 – 06/30/2023",
          points: [
            "Application-level Penetration Testing.",
            "Reporting activities and checks on systems undergoing certification."
          ]
        }
      ]
    },
    skills: {
      title: "Technical Skills",
      categories: {
        programming: "Programming",
        tools: "Cybersecurity Tools",
        infra: "Infrastructure & Cloud",
        compliance: "Compliance & Standards"
      }
    },
    education: {
      title: "Education & Certifications",
      items: [
        {
          degree: "Master's Degree in Computer Engineering (Cybersecurity)",
          school: "University of Calabria",
          date: "12/15/2022",
          details: "Final grade: 110. Thesis: A cyber range system based on digital twins for the analysis of cyber attacks on industrial control systems."
        },
        {
          degree: "Bachelor's Degree in Computer Engineering",
          school: "University of Calabria",
          date: "09/16/2019",
          details: "Final grade: 96. Thesis: Cyber attacks based on Return Oriented Programming (ROP) techniques."
        },
        {
          degree: "Certified Ethical Hacker (CEH)",
          school: "EC-Council",
          date: "2024"
        }
      ]
    },
    bugbounty: {
      title: "Bug Bounty Activity",
      description: "Responsibly disclosed vulnerabilities and security findings.",
      items: [
        {
          id: "LVE-2023-0153",
          title: "Administrator account information exposure",
          target: "LG SuperSign CMS",
        },
        {
          id: "LVE-2023-0154",
          title: "Encrypted information exposure",
          target: "LG SuperSign CMS",
        },
        {
          id: "LVE-2023-0155",
          title: "RCE possible vulnerability via bind shell",
          target: "LG SuperSign CMS",
        }
      ],
      linkText: "LG Security Bulletin Details",
    },
    contact: {
      title: "Contact",
      description: "Interested in working together or have a question? Feel free to reach out!",
      location: "San Mauro Marchesato (KR), Italy"
    }
  }
}
