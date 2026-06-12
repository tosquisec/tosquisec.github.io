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
      description: "Professionista nel campo della sicurezza informatica con esperienza quadriennale nel mondo del lavoro, ma appassionato da una vita. Specializzato nella valutazione di vulnerabilità e nello sviluppo backend sicuro.",
      downloadCV: "Scarica CV",
      stats: {
        experience: { value: "4+", label: "Anni Esperienza" },
        cves: { value: "3", label: "LVE Pubblicate" },
        cert: { value: "CEH", label: "Certificato" },
      },
    },
    about: {
      title: "Chi Sono",
      subtitle: "Un approccio a 360° alla sicurezza informatica",
      cards: [
        {
          title: "Offensive Security",
          description: "Penetration testing, vulnerability assessment e analisi delle minacce per identificare e mitigare rischi di sicurezza IT.",
        },
        {
          title: "Sviluppo Sicuro",
          description: "Sviluppo backend con architettura security-first, code review approfondite e integrazione di controlli OWASP Top 10.",
        },
        {
          title: "Compliance & Audit",
          description: "Auditing ISO 27001, aderenza agli standard NIST e GDPR, e valutazione CVSS per la classificazione delle vulnerabilità.",
        },
      ],
    },
    experience: {
      title: "Esperienza Lavorativa",
      subtitle: "Il mio percorso professionale nella cybersecurity",
      items: [
        {
          title: "Analista di Sicurezza Applicativa",
          company: "Attuale",
          period: "2024 – Attuale",
          isCurrent: true,
          points: [
            "Analisi statica e dinamica di file eseguibili, librerie software e applicazioni mobili per identificare comportamenti sospetti o malevoli.",
            "Attività di reverse engineering su software e componenti per comprendere logiche di funzionamento interne e individuare vulnerabilità non documentate.",
            "Utilizzo di debugger, disassemblatori (come IDA Pro, Ghidra) e sandbox per l'analisi approfondita del codice e del suo comportamento a runtime.",
            "Documentazione tecnica delle vulnerabilità scoperte (es. buffer overflow, race condition) e stesura di report dettagliati con relative prove."
          ]
        },
        {
          title: "Sviluppatore Backend",
          company: "Attuale",
          period: "2024 – Attuale",
          isCurrent: true,
          points: [
            "Sviluppo e manutenzione di applicazioni backend robuste, scalabili e performanti.",
            "Progettazione e implementazione di API RESTful sicure per l'integrazione tra servizi.",
            "Containerizzazione di applicazioni tramite Docker.",
            "Conduzione di attività di code review per identificare e mitigare vulnerabilità di sicurezza, secondo le pratiche di sviluppo sicuro (Secure SDLC).",
            "Integrazione di controlli di sicurezza nel ciclo di vita dello sviluppo per la prevenzione di attacchi comuni (es. OWASP Top 10)."
          ]
        },
        {
          title: "Penetration Tester",
          company: "Poste Italiane",
          period: "05/2022 – 12/2023",
          isCurrent: false,
          points: [
            "Scansioni di Vulnerability Assessment mediante tool automatici.",
            "Attività di Penetration Test infrastrutturali/applicativi.",
            "Verifiche dello stato di sicurezza dei sistemi in ambiente di produzione e certificazione.",
            "Attività di reportistica."
          ]
        },
        {
          title: "Security Assessment Consultant",
          company: "Università LUMSA ROMA",
          period: "05/2023 – 11/2023",
          isCurrent: false,
          points: [
            "Attività di rientro vulnerabilità.",
            "Progettazione e gestione SOC.",
            "Attività di orchestrazione e monitoraggio.",
            "Attività di verifica."
          ]
        },
        {
          title: "Security Assessment Consultant",
          company: "Ministero della Giustizia",
          period: "12/2022 – 06/2023",
          isCurrent: false,
          points: [
            "Attività di PT a livello applicativo.",
            "Attività di reportistica.",
            "Attività condotte su sistemi in certificazione."
          ]
        }
      ]
    },
    skills: {
      title: "Competenze Tecniche",
      subtitle: "Strumenti e tecnologie che utilizzo quotidianamente",
      categories: {
        programming: "Programmazione",
        tools: "Strumenti Cybersecurity",
        infra: "Infrastruttura & Cloud",
        compliance: "Compliance & Standard"
      }
    },
    education: {
      title: "Istruzione e Formazione",
      subtitle: "Il percorso accademico e le certificazioni professionali",
      groupDegrees: "Lauree",
      groupCerts: "Certificazioni & Corsi",
      items: [
        {
          degree: "Laurea Magistrale in Ingegneria Informatica (Cybersecurity)",
          school: "Università della Calabria",
          date: "2022",
          grade: "110/110",
          details: "Tesi: Un sistema cyber range basato su digital twin per l'analisi di attacchi informatici a sistemi di controllo industriale.\n\nIl lavoro di tesi mira a utilizzare l'analisi dei processi per scoprire modelli comportamentali che consentiranno il rilevamento di attacchi informatici che modificano il flusso di controllo normale di un sistema cyber-fisico. Per fare ciò, si utilizza il Process Mining, un insieme di tecniche tradizionalmente utilizzate per il miglioramento dei processi aziendali ma che possono essere usate per il rilevamento di anomalie nei sistemi di controllo industriale. Un'ulteriore attività condotta in questo lavoro di tesi, ha riguardato la realizzazione di uno scenario operativo immersivo che consiste di componenti emulative e simulative di sistemi cyber-fisici per il testing e la verifica di eventuali vulnerabilità (applicando le suddette tecniche) in ambienti completamente isolati e controllati. Più precisamente, ci si è occupati della progettazione e implementazione di un sistema cyber range in grado di ospitare scenari che integrano digital twin (DT) sia per i sistemi IT ma anche per i sistemi ICS. Il DT utilizzato in questo studio è basato su un impianto di simulazione di un sistema di palletizzazione, i cui elementi principali sono: un braccio meccanico, una rulliera, un sensore e i pacchi. L'approccio di analisi utilizza questo gemello digitale per modellare ed eseguire diversi scenari realistici di attacco consapevole del processo e generare un set di dati che riflettono le misurazioni del processo, in condizioni di normale operatività e in scenari di attacco."
        },
        {
          degree: "Laurea Triennale in Ingegneria Informatica",
          school: "Università della Calabria",
          date: "2019",
          grade: "96/110",
          details: "Tesi: Attacchi informatici basati su tecniche basate su Return Oriented Programming (ROP).\n\nIl lavoro di tesi si propone di esplorare e analizzare in dettaglio la Return Oriented Programming (ROP), una tecnica avanzata di sfruttamento della memoria che consente agli aggressori di eseguire codice arbitrario nei sistemi vulnerabili. Attraverso un'indagine approfondita delle varie sfaccettature della ROP, il testo si addentra nelle metodologie con cui gli attaccanti possono eludere le moderne misure di sicurezza, quali la non esecuzione di codice (NX) e la randomizzazione dello spazio degli indirizzi (ASLR), dimostrando l'importanza di sviluppare e implementare strategie di difesa sempre più robuste e sofisticate."
        }
      ],
      certifications: [
        { degree: "Certified Ethical Hacker (CEH)", school: "EC-Council", date: "2024" },
        { degree: "Splunk Enterprise", school: "5 Emme Informatica", date: "2024" },
        { degree: "Lead Auditor ISO/IEC 27001:2022", school: "DIMITTO", date: "2023" },
        { degree: "Lead Auditor ISO 27001:2017", school: "DIMITTO", date: "2023" },
        { degree: "Audit ISO 17021-1 / ISO 19011", school: "DIMITTO", date: "2023" },
        { degree: "Mastering CVSS v3.1", school: "FIRST Learning", date: "2023" },
        { degree: "Autopsy Forensic", school: "Basis Tech", date: "2020" },
        { degree: "CyberChallenge.IT", school: "Cybersecurity National Lab", date: "2019" }
      ]
    },
    bugbounty: {
      title: "Bug Bounty",
      description: "Vulnerabilità identificate e segnalate responsabilmente a vendor internazionali.",
      counter: "Vulnerabilità Segnalate",
      items: [
        {
          id: "LVE-2023-0153",
          title: "Administrator account information exposure",
          target: "LG SuperSign CMS",
          severity: "high",
        },
        {
          id: "LVE-2023-0154",
          title: "Encrypted information exposure",
          target: "LG SuperSign CMS",
          severity: "high",
        },
        {
          id: "LVE-2023-0155",
          title: "RCE possible vulnerability via bind shell",
          target: "LG SuperSign CMS",
          severity: "critical",
        }
      ],
      linkText: "Dettagli bollettino sicurezza LG",
    },
    contact: {
      title: "Contatti",
      description: "Interessato a collaborare o hai una domanda? Non esitare a contattarmi!",
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
      description: "Cybersecurity professional with four years of experience in the professional world, but a lifelong enthusiast. Specialized in vulnerability assessment and secure backend development.",
      downloadCV: "Download CV",
      stats: {
        experience: { value: "4+", label: "Years Experience" },
        cves: { value: "3", label: "LVEs Published" },
        cert: { value: "CEH", label: "Certified" },
      },
    },
    about: {
      title: "About Me",
      subtitle: "A 360° approach to cybersecurity",
      cards: [
        {
          title: "Offensive Security",
          description: "Penetration testing, vulnerability assessment, and threat analysis to identify and mitigate IT security risks.",
        },
        {
          title: "Secure Development",
          description: "Backend development with security-first architecture, thorough code reviews, and OWASP Top 10 controls integration.",
        },
        {
          title: "Compliance & Audit",
          description: "ISO 27001 auditing, NIST and GDPR standards adherence, and CVSS scoring for vulnerability classification.",
        },
      ],
    },
    experience: {
      title: "Work Experience",
      subtitle: "My professional journey in cybersecurity",
      items: [
        {
          title: "Application Security Analyst",
          company: "Current",
          period: "2024 – Present",
          isCurrent: true,
          points: [
            "Static and dynamic analysis of executables, software libraries, and mobile apps to identify suspicious behavior.",
            "Reverse engineering on software and components to understand internal logic and identify undocumented vulnerabilities.",
            "Use of debuggers, disassemblers (such as IDA Pro, Ghidra), and sandboxes for deep analysis of code and its runtime behavior.",
            "Technical documentation of discovered vulnerabilities (e.g., buffer overflow, race condition) and drafting detailed reports with relevant evidence."
          ]
        },
        {
          title: "Backend Developer",
          company: "Current",
          period: "2024 – Present",
          isCurrent: true,
          points: [
            "Development and maintenance of robust, scalable, and high-performance backend applications.",
            "Design and implementation of secure RESTful APIs for integration between services.",
            "Containerization of applications using Docker.",
            "Conducting code review activities to identify and mitigate security vulnerabilities, according to secure development practices (Secure SDLC).",
            "Integration of security controls in the software development lifecycle for the prevention of common attacks (e.g., OWASP Top 10)."
          ]
        },
        {
          title: "Penetration Tester",
          company: "Poste Italiane",
          period: "05/2022 – 12/2023",
          isCurrent: false,
          points: [
            "Vulnerability Assessment scans using automated tools.",
            "Infrastructural and application Penetration Testing.",
            "Security state verification in production and certification environments.",
            "Reporting activities."
          ]
        },
        {
          title: "Security Assessment Consultant",
          company: "LUMSA University of Rome",
          period: "05/2023 – 11/2023",
          isCurrent: false,
          points: [
            "Vulnerability remediation activities.",
            "SOC design and management.",
            "Orchestration and monitoring activities.",
            "Verification activities."
          ]
        },
        {
          title: "Security Assessment Consultant",
          company: "Ministry of Justice",
          period: "12/2022 – 06/2023",
          isCurrent: false,
          points: [
            "Application-level Penetration Testing.",
            "Reporting activities.",
            "Activities conducted on systems undergoing certification."
          ]
        }
      ]
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Tools and technologies I work with daily",
      categories: {
        programming: "Programming",
        tools: "Cybersecurity Tools",
        infra: "Infrastructure & Cloud",
        compliance: "Compliance & Standards"
      }
    },
    education: {
      title: "Education & Certifications",
      subtitle: "Academic background and professional credentials",
      groupDegrees: "Degrees",
      groupCerts: "Certifications & Courses",
      items: [
        {
          degree: "Master's Degree in Computer Engineering (Cybersecurity)",
          school: "University of Calabria",
          date: "2022",
          grade: "110/110",
          details: "Thesis: A cyber range system based on digital twins for the analysis of cyber attacks on industrial control systems.\n\nThe thesis aims to use process analysis to discover behavioral patterns that will enable the detection of cyber attacks that modify the normal control flow of a cyber-physical system. To achieve this, Process Mining is used, a set of techniques traditionally used for business process improvement but which can be applied to anomaly detection in industrial control systems. An additional activity conducted in this thesis involved the creation of an immersive operational scenario consisting of emulative and simulative components of cyber-physical systems for testing and verifying potential vulnerabilities (applying the aforementioned techniques) in completely isolated and controlled environments. More precisely, it involved the design and implementation of a cyber range system capable of hosting scenarios that integrate digital twins (DT) for both IT and ICS systems. The DT used in this study is based on a simulation plant of a palletizing system, whose main elements are: a mechanical arm, a roller conveyor, a sensor, and packages. The analysis approach uses this digital twin to model and execute several realistic process-aware attack scenarios and generate datasets reflecting process measurements under normal operating conditions and under attack scenarios."
        },
        {
          degree: "Bachelor's Degree in Computer Engineering",
          school: "University of Calabria",
          date: "2019",
          grade: "96/110",
          details: "Thesis: Cyber attacks based on Return Oriented Programming (ROP) techniques.\n\nThe thesis aims to explore and analyze in detail Return Oriented Programming (ROP), an advanced memory exploitation technique that allows attackers to execute arbitrary code on vulnerable systems. Through an in-depth investigation of the various facets of ROP, the text delves into the methodologies by which attackers can bypass modern security measures, such as non-executable memory (NX) and address space layout randomization (ASLR), demonstrating the importance of developing and implementing increasingly robust and sophisticated defense strategies."
        }
      ],
      certifications: [
        { degree: "Certified Ethical Hacker (CEH)", school: "EC-Council", date: "2024" },
        { degree: "Splunk Enterprise", school: "5 Emme Informatica", date: "2024" },
        { degree: "Lead Auditor ISO/IEC 27001:2022", school: "DIMITTO", date: "2023" },
        { degree: "Lead Auditor ISO 27001:2017", school: "DIMITTO", date: "2023" },
        { degree: "Audit ISO 17021-1 / ISO 19011", school: "DIMITTO", date: "2023" },
        { degree: "Mastering CVSS v3.1", school: "FIRST Learning", date: "2023" },
        { degree: "Autopsy Forensic", school: "Basis Tech", date: "2020" },
        { degree: "CyberChallenge.IT", school: "Cybersecurity National Lab", date: "2019" }
      ]
    },
    bugbounty: {
      title: "Bug Bounty",
      description: "Responsibly disclosed vulnerabilities to international vendors.",
      counter: "Vulnerabilities Reported",
      items: [
        {
          id: "LVE-2023-0153",
          title: "Administrator account information exposure",
          target: "LG SuperSign CMS",
          severity: "high",
        },
        {
          id: "LVE-2023-0154",
          title: "Encrypted information exposure",
          target: "LG SuperSign CMS",
          severity: "high",
        },
        {
          id: "LVE-2023-0155",
          title: "RCE possible vulnerability via bind shell",
          target: "LG SuperSign CMS",
          severity: "critical",
        }
      ],
      linkText: "LG Security Bulletin Details",
    },
    contact: {
      title: "Contact",
      description: "Interested in working together or have a question? Feel free to reach out!",
    }
  }
}
