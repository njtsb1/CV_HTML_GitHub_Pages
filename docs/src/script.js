(function () {
  'use strict';

  // -------------------------
  // Theme toggle (existing logic)
  // -------------------------
  const body = document.getElementById('page-body');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  // Initialize theme from localStorage if available
  try {
    const savedTheme = localStorage.getItem('cv_theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
      if (themeIcon) themeIcon.className = 'fa fa-moon-o';
    } else {
      body.classList.remove('dark-theme');
      if (themeIcon) themeIcon.className = 'fa fa-sun-o';
    }
  } catch (e) {
    // ignore storage errors
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark-theme');
      if (themeIcon) themeIcon.className = isDark ? 'fa fa-moon-o' : 'fa fa-sun-o';
      try {
        localStorage.setItem('cv_theme', isDark ? 'dark' : 'light');
      } catch (e) {}
    });
  }

  // -------------------------
  // TRANSLATIONS: en-US / pt-BR / es-ES (complete)
  // -------------------------
  const translations = {
    "en-US": {
      "meta.title": "Nivaldo Beirão - Online CV",
      "name": "Nivaldo José Tadeu dos Santos Beirão",
      "role": "IT GOVERNANCE ANALYST | GRC (GOVERNANCE, RISK & COMPLIANCE) | BUSINESS PROCESS SPECIALIST | LMS MOODLE | TIER 1-3 SUPPORT",
      "location": "Remote / Brazil (GMT-3)",

      // Hard Skills
      "skills.Hard-title": "Hard Skills",
      "skills.IT_Management": "IT Management",
      "skills.IT_Governance": "IT Governance",
      "skills.Project-Management": "Project Management",
      "skills.Strategic-Planning": "Strategic Planning",
      "skills.Moodle": "Moodle",
      "skills.Standardized_Work": "Standardized Work",
      "skills.Process_Optimization": "Process Optimization",
      "skills.Financial_Risk_Management": "Financial Risk Management",
      "skills.Compliance_Management": "Compliance Management",
      "skills.Administrative_Support": "Administrative Support",
      "skills.Technical_Support": "Technical Support",
      "skills.Microsoft_Excel": "Microsoft Excel",
      "skills.Calculation": "Calculation",
      "skills.JavaScript": "JavaScript",
      "skills.HTML": "HTML",
      "skills.CSS": "CSS",
      "skills.Banking_Operations": "Banking Operations",
      "skills.Customer_Service": "Customer Service",
      "skills.Internal_Process_Audit": "Internal Process Audit",
      "skills.Inventory_and_Asset_Management": "Inventory and Asset Management",

      // Soft Skills
      "skills.Soft-title": "Soft Skills",
      "skills.Analytical_Thinking": "Analytical Thinking",
      "skills.Emotional_Intelligence": "Emotional Intelligence",
      "skills.Teamwork": "Teamwork",
      "skills.Organization": "Organization",
      "skills.Resilience": "Resilience",
      "skills.Critical_Thinking": "Critical Thinking",
      "skills.Leadership": "Leadership",
      "skills.People_Management": "People Management",

      // Languages
      "languages.title": "Languages",
      "languages.pt": "Portuguese",
      "languages.en": "English",
      "languages.es": "Spanish",

      // About
      "about.title": "About",
      "about.text": "IT Governance and Management Specialist with a solid background in Business Administration and a focus on Operational Efficiency and GRC (Governance, Risk and Compliance). Experience in developing auditable processes, regulatory compliance and large-scale digital asset management using Artificial Intelligence. Analytical and resilient profile, with a history of technical excellence (Harvard CC50) and a focus on service stability and risk mitigation. Artificial Intelligence: AI in Practice, Prompt Engineering for administrative productivity and process automation. Frameworks: ITIL Fundamentals and Balanced Scorecard (BSC)",

      // Experiences (sample keys)
      "experience.title": "Experiences",
      "experience.multimedia.title": "Multimedia Editor and Digital Asset Manager - Freelance work on YouTube",
      "experience.multimedia.date_text": "April 2023 -",
      "experience.multimedia.date_tag": "Present",
      "experience.multimedia.p1": "Digital Process Management and Production at Scale.",
      "experience.multimedia.p2": "Responsible for structuring the workflow and technical delivery of digital assets, ensuring 100% compliance with quality standards and deadlines. Strategic use of Artificial Intelligence to optimize translation and editing processes.",
      "experience.multimedia.p3": "Data Governance: Management and organization of a cloud repository with over 8,000 digital assets, ensuring integrity and versioning.",
      "experience.multimedia.p4": "Institutional Standardization: Creation of protocols for subtitling, translation, and audio normalization, ensuring a cohesive visual and sound identity.",
      "experience.multimedia.p5": "Linguistic Compliance: Supervision and technical review of AI-assisted subtitles and translations (PT-BR, EN-US, ES-ES), ensuring communication accuracy.",
      "experience.multimedia.p6": "Operational Efficiency: Implementation of dynamic editing methodologies that resulted in the delivery of over 8,000 audio files and 550 videos with a high standard of finish.",

      "experience.sports-trader.title": "Risk Analyst and Market Intelligence - Freelance work on Betfair",
      "experience.sports-trader.date_text": "March 2021 -",
      "experience.sports-trader.date_tag": "December 2021",
      "experience.sports-trader.p1": "Focus Area: Statistical Analysis, GRC (Governance, Risk and Compliance) and Asset Management in Highly Volatile Markets.",
      "experience.sports-trader.p2": "Focus on the development and execution of predictive models based on probability and applied statistics, with rigorous control of operational risks and compliance with market strategies.",
      "experience.sports-trader.p3": "Responsibilities and Governance (GRC):",
      "experience.sports-trader.p4": "Risk and Compliance Modeling: Analysis of complex variables to support strategic decision-making in real time, ensuring the integrity of processes and compliance with established risk models.",
      "experience.sports-trader.p5": "Risk Management (Bankroll Management): Capital management focused on asset preservation and loss mitigation, using audit tools and \"logbooks\" to ensure governance over investments.",
      "experience.sports-trader.p6": "Quantitative Analysis and Pricing: Advanced asset pricing study (ODDs), evaluating volatility and resistance points, ensuring that operations are within acceptable risk metrics.",
      "experience.sports-trader.p7": "Operational Discipline and Auditing: Maintaining high analytical rigor under pressure, ensuring that 100% of strategies followed the pre-established operational governance plan, without deviations in conduct or execution.",
      "experience.sports-trader.p8": "Results and Competencies:",
      "experience.sports-trader.p9": "Data Intelligence: Transforming raw data into investment decisions, using statistical calculators and market trend analysis.",
      "experience.sports-trader.p10": "Resilience and Risk Control: Mastery of bankroll management techniques and psychological control, fundamental for the sustainability of operations in highly uncertain environments.",

      "experience.administrative-assistant.title": "Administrative Assistant - Vale Do Ribeira University Center (Univr)",
      "experience.administrative-assistant.date_text": "July 2016 -",
      "experience.administrative-assistant.date_tag": "September 2019",
      "experience.administrative-assistant.p1": "Focus Area: Educational Data Management, GRC (Governance, Risk, and Compliance), and Technological Support for Virtual Environments.",
      "experience.administrative-assistant.p2": "Strategic role in developing technological solutions applied to education, focusing on academic data governance and compliance with federal regulatory standards (MEC).",
      "experience.administrative-assistant.p3": "Responsibilities and Governance (GRC):",
      "experience.administrative-assistant.p4": "Regulatory Data Governance (MEC/ENADE): Direct support to the Institutional Researcher in the collection and processing of data for the Higher Education Census. Guaranteeing the integrity, reliability, and compliance of data reported to the MEC, mitigating risks of institutional irregularities.",
      "experience.administrative-assistant.p5": "Process Management and Auditing: Preparation, control, and management of critical documents and reports in Excel, ensuring compliance with regulatory deadlines and the organization of the academic workflow.",
      "experience.administrative-assistant.p6": "Virtual Learning Environment (VLE) Administration: Management of the Moodle platform, defining security and usability standards for more than 2,500 users.",
      "experience.administrative-assistant.p7": "Flow and Calendar Management: Organization of complex academic schedules (Urânia) and activity calendars via Google Sheets, optimizing the allocation of institutional resources.",
      "experience.administrative-assistant.p8": "Results and Technical Competencies:",
      "experience.administrative-assistant.p9": "Standardization and Scalability: Management of the Moodle LMS with the creation of templates for 27 courses (On-site and Distance Learning), ensuring visual and operational consistency for the institution.",
      "experience.administrative-assistant.p10": "Strategic Support: Provision of specialized technical support to coordinators and faculty, ensuring the operational continuity of synchronous and asynchronous classes.",
      "experience.administrative-assistant.p11": "Institutional Transition: Active participation in the technological transition process from College to University Center, ensuring the conformity of data systems during the expansion to Distance Learning.",

      "experience.intern-registro.title": "Business Administration Intern - Regional Education Unit of Registro",
      "experience.intern-registro.date_text": "July 2014 -",
      "experience.intern-registro.date_tag": "July 2016",
      "experience.intern-registro.p1": "Focus Area: Strategic IT Support, GRC (Asset Control and Compliance), and Educational Project Management.",
      "experience.intern-registro.p2": "Work experience at NIET (Educational Information and Technology Center), focused on IT infrastructure and operational data management for the state education network.",
      "experience.intern-registro.p3": "Responsibilities and Governance (GRC/Excel):",
      "experience.intern-registro.p4": "Inventory and Data Management (Intermediate Excel): Creation and maintenance of control spreadsheets for the management of technological assets in 40 school units. Use of search formulas and pivot tables for hardware monitoring and maintenance status.",
      "experience.intern-registro.p5": "IT Compliance and Governance: Ensuring the standardization and security of local networks and mobile devices, ensuring that the use of digital tools was in accordance with the guidelines of the Department of Education.",
      "experience.intern-registro.p6": "Incident Management (Help Desk): Level 1 support (On-site/Remote) via TeamViewer and WhatsApp Business, focusing on quick resolution and incident logging for support auditing.",
      "experience.intern-registro.p7": "Inclusion Project Planning: Assistance in executing schedules and monitoring goals for large-scale technological training programs.",
      "experience.intern-registro.p8": "Results and Competencies:",
      "experience.intern-registro.p9": "Multiplier Training: Direct training and management of over 200 monitors over 2 years, disseminating best practices for information use and security.",
      "experience.intern-registro.p10": "Service Scalability: Active technical support to 40 school units, ensuring the continuity of pedagogical and administrative operations in the region.",

      "experience.intern-miracatu.title": "Business Administration Intern - Regional Education Unit of Miracatu",
      "experience.intern-miracatu.date_text": "August 2011 -",
      "experience.intern-miracatu.date_tag": "August 2013",
      "experience.intern-miracatu.p1": "Focus Area: Strategic IT Support, GRC (Governance, Assets, and Compliance), and Implementation of Educational Solutions.",
      "experience.intern-miracatu.p2": "Work at NIET (Educational Information and Technology Center), focusing on technological infrastructure and process standardization for the state education network.",
      "experience.intern-miracatu.p3": "Responsibilities and Governance (GRC/Excel):",
      "experience.intern-miracatu.p4": "Inventory and Data Management (Intermediate Excel): Creation and control of spreadsheets for managing technological assets of 28 school units. Use of formulas and pivot tables to monitor the hardware lifecycle and maintenance status.",
      "experience.intern-miracatu.p5": "Compliance and Standardization: Ensuring the correct implementation of the Education Department's IT guidelines, guaranteeing that support and infrastructure were in full compliance with institutional standards.",
      "experience.intern-miracatu.p6": "Incident Management and Help Desk: Level 1 technical support (on-site and remote), focused on the rapid resolution of critical problems and the recording of incidents to ensure operational continuity.",
      "experience.intern-miracatu.p7": "Governance in Training: Organization of schedules and materials for technological training, focusing on the dissemination of technical knowledge within school units.",
      "experience.intern-miracatu.p8": "Results and Competencies:",
      "experience.intern-miracatu.p9": "Training of Multipliers: Direct management and training of over 120 monitors, ensuring technological autonomy in schools in the region.",
      "experience.intern-miracatu.p10": "Operational Efficiency: Active and structured technical support to 28 school units, optimizing the use of technological resources and incident management.",

      "experience.cashier-bank.title": "Clerk / Cashier - Bradesco Bank",
      "experience.cashier-bank.date_text": "April 2009 -",
      "experience.cashier-bank.date_tag": "March 2011",
      "experience.cashier-bank.p1": "Focus Area: Financial Operations Management, GRC (Governance, Risk and Compliance) and Banking Compliance.",
      "experience.cashier-bank.p2": "Strategic performance in customer service and cash management, with a total focus on accuracy, mitigation of operational risks and compliance with regulatory standards.",
      "experience.cashier-bank.p3": "Responsibilities and Governance (GRC):",
      "experience.cashier-bank.p4": "Cash Flow Control and Risk Management: Responsible for the daily opening, closing and reconciliation of funds, ensuring 100% accuracy in records and acting in the prevention of losses and fraud.",
      "experience.cashier-bank.p5": "Compliance and Asset Processing: Management of payments, taxes and agreements, ensuring the integrity of transactions and compliance with Central Bank guidelines and internal protocols.",
      "experience.cashier-bank.p6": "Critical Support and Process Auditing: Support to INSS beneficiaries and suppliers, performing rigorous document verification to ensure institutional security.",
      "experience.cashier-bank.p7": "Data and Documentation Governance: Control of mailbags and critical documents, ensuring full traceability and organization of the administrative flow according to audit standards.",
      "experience.cashier-bank.p8": "Results and Competencies:",
      "experience.cashier-bank.p9": "Crisis and Transition Management: Active role in the migration of operating systems, ensuring that the technological transition respected governance pillars and did not affect service compliance.",
      "experience.cashier-bank.p10": "Compliance Multiplier: Responsible for training and onboarding new employees, disseminating the culture of safety, ethics, and the institution's GRC rules.",
      "experience.cashier-bank.p11": "Operational Excellence: Recognition for conflict resolution in high-pressure environments and customer loyalty through secure and transparent processes.",

      "experience.general-services.title": "Operations and Sales Assistant (Retail) - Tio Beba Supermarkets",
      "experience.general-services.date_text": "January 2009 -",
      "experience.general-services.date_tag": "March 2011",
      "experience.general-services.p1": "Operational Process Management, Inventory, and Cash Flow",
      "experience.general-services.p2": "Multifunctional role focused on organization, asset control, and excellence in customer service, ensuring that company rules are followed with technical and ethical rigor.",
      "experience.general-services.p3": "Responsibilities and Governance:",
      "experience.general-services.p4": "Cash Management: Responsible for cash operations, ensuring 100% accuracy in closings and verification of invoices and mailbags.",
      "experience.general-services.p5": "Logistics and Inventory: Strategic organization of inventory and sales area, optimizing replenishment time and ensuring accuracy in shipment verification.",
      "experience.general-services.p6": "Administrative Versatility: Direct support in purchasing routines, pricing, and file control, maintaining the order of institutional documents.",
      "experience.general-services.p7": "Customer Service and Support: Integration between administrative and commercial areas, focusing on resolving customer problems and providing logistical support (deliveries).",
      "experience.general-services.p8": "Results and Competencies:",
      "experience.general-services.p9": "Operational Efficiency: Guarantee of total compliance in internal cash and inventory audit processes.",
      "experience.general-services.p10": "Agility and Resilience: Ability to adapt to different sectors (commerce, finance, and logistics), maintaining a high standard of delivery under pressure.",

      // Education
      "education.title": "Education",
      "education.dio.title": "Digital Innovation One (DIO)",
      "education.dio.date": "October 2021 - Present",
      "education.dio.text": "Largest open IT education platform in Latin America, with over 1 million users. DIO partners with innovative companies, providing immersive learning experiences focused on employability. Main certifications are listed below.",
      "education.univr.mba": "VALE DO RIBEIRA UNIVERSITY CENTER (UNIVR) - MBA",
      "education.univr.mba.date": "2017 - 2018",
      "education.univr.mba.title": "MBA in Information Technology Management and Governance",
      "education.univr.mba.text": "Focus on governance frameworks, technology compliance, and strategic IT asset management. Development of skills in systems auditing, information security, and alignment between technology and business objectives.",
      "education.univr.bachelor": "VALE DO RIBEIRA UNIVERSITY CENTER (UNIVR) - Bachelor's",
      "education.univr.bachelor.date": "2010 - 2017",
      "education.univr.bachelor.title": "Bachelor's Degree in Business Administration",
      "education.univr.bachelor.text": "Solid background in organizational management, administrative processes, applied law, and finance. Focus on developing a systemic vision and process analysis for operational efficiency.",

      // Projects (p1 - p150)
      "projects.title": "Projects",
      "projects.github": "GitHub",
      "projects.github.p1": "Creating a Canvas Type Application with Power Platform",
      "projects.github.p2": "Adding Security to APIs in AWS with Amazon Cognito",
      "projects.github.p3": "Exploring Rest Assured for API Test Automation",
      "projects.github.p4": "QA Professional: Manual Functional Testing",
      "projects.github.p5": "Implementing a Login Screen with Validation Using TypeScript",
      "projects.github.p6": "Developing the DIO Platform Registration Screen with React",
      "projects.github.p7": "Creating a GitHub Repository Wiki with React",
      "projects.github.p8": "Identifying Your Skills that Can be Monetized",
      "projects.github.p9": "AI Interviewer: Your Intelligent Interview Simulator",
      "projects.github.p10": "AI Career Mentor: Discover Your Future in Tech",
      "projects.github.p11": "Creating a Personal Finance Organization App with Vibe Coding",
      "projects.github.p12": "Creating a Calculator with React",
      "projects.github.p13": "Abstracting DIO Formations Using Object Orientation with Kotlin",
      "projects.github.p14": "Creating a BuzzFeed Clone with Angular",
      "projects.github.p15": "Creating a Blog with Angular",
      "projects.github.p16": "Building a Pokédex with JavaScript",
      "projects.github.p17": "Creating Your First Landing Page with HTML and CSS",
      "projects.github.p18": "Creating Your First Complete Website with HTML",
      "projects.github.p19": "Creating a Web Page Using Learned Tags",
      "projects.github.p20": "Creating a CI/CD Pipeline with Cloud Build and Terraform",
      "projects.github.p21": "Using Cloud Shell",
      "projects.github.p22": "Customizing Dashboard and Changing Language Preferences",
      "projects.github.p23": "Billing Export in Google Cloud Platform",
      "projects.github.p24": "Defining Billing Budget in Google Cloud Platform",
      "projects.github.p25": "Designing Your Folder and Project Organization and Access Groups in Google Cloud Platform",
      "projects.github.p26": "Creating a Deploy Pipeline with GitLab and Kubernetes",
      "projects.github.p27": "Creating an Application Deploy",
      "projects.github.p28": "Defining a Local Swarm Cluster with Vagrant",
      "projects.github.p29": "Creating a Container for a WEB Application",
      "projects.github.p30": "Exploring Demographics with Big Data Services in AWS",
      "projects.github.p31": "Training Neural Networks with Transfer Learning",
      "projects.github.p32": "Best Practices with DynamoDB",
      "projects.github.p33": "Creating Models with Python and Machine Learning to Predict COVID-19 Evolution in Brazil",
      "projects.github.p34": "Native App About Women's Football with Android Jetpack and Java",
      "projects.github.p35": "Creating the Front-end with ReactJS",
      "projects.github.p36": "Booking App DIO",
      "projects.github.p37": "Creating the iFood Interface with React Native",
      "projects.github.p38": "Infrastructure as Code with Serverless Framework on AWS",
      "projects.github.p39": "Creating a Star Wars Spacecraft Manager with SQL Server + .NET",
      "projects.github.p40": "Creating an Application for Currency Conversion and Exchange",
      "projects.github.p41": "Developing Your Blog with Java and Angular Technologies",
      "projects.github.p42": "Creating a ReactJS News Application Using PWA",
      "projects.github.p43": "Creating a Website to Find Restaurants Using Google Maps that Queries Google API",
      "projects.github.p44": "Creating Your Big Data Ecosystem in the Cloud",
      "projects.github.p45": "Data Analysis with Python and Pandas",
      "projects.github.p46": "Creating a Game Catalog Using Best Architecture Practices with .NET",
      "projects.github.p47": "Building a Project with Architecture Based on Microservices Using Spring Cloud",
      "projects.github.p48": "Building a Time and Access Control System with Spring Boot",
      "projects.github.p49": "Creating a Classifieds System with Ruby on Rails",
      "projects.github.p50": "MindApp - Developing Cloud Tags with Ruby",
      "projects.github.p51": "Create a Dragon Ball Z Sphere Manager Using ReactJS, Jest, React Testing Library and Cypress",
      "projects.github.p52": "Developing SPA with Angular",
      "projects.github.p53": "Creating a Budget System, Using CQRS, Quarkus, Kafka and Deploy on EKS",
      "projects.github.p54": "Running Your Java Application on Kubernetes. From Deploy to Debug without Fear!",
      "projects.github.p55": "Creating an E-commerce Solution with Microservices in Java",
      "projects.github.p56": "Creating Your Marvel and DC Super Heroes Manager in a Reactive API with Spring Boot",
      "projects.github.p57": "Using Cypress E2E to Test a Blog in Angular",
      "projects.github.p58": "Creating Project to Query Weather Forecast via API",
      "projects.github.p59": "Implementing Your Unit and Integration Testing Stack in a .NET Crowdfunding Project",
      "projects.github.p60": "Building a .NET API Project Integrated with MongoDB",
      "projects.github.p61": "Building a ChatbotFit on Telegram with JavaScript and NodeJS",
      "projects.github.p62": "Building Sexy APIs Using Serverless Architecture",
      "projects.github.p63": "Background Tasks Using Node.js and Redis",
      "projects.github.p64": "Requesting Data from a Cryptocurrency API",
      "projects.github.p65": "Practical Introduction to TypeScript",
      "projects.github.p66": "Learning Spring Data JPA in Practice with Java",
      "projects.github.p67": "Tech Potential Challenge: Payment API",
      "projects.github.p68": "Building a Task Scheduling System with Entity Framework",
      "projects.github.p69": "Creating a System and Abstracting a Smartphone with OOP in C#",
      "projects.github.p70": "Building a Hotel Hosting System in C#",
      "projects.github.p71": "Building a Parking System with C#",
      "projects.github.p72": "The Role of SQL and NoSQL Databases in Data Engineering",
      "projects.github.p73": "Build a Logical Database Project from Scratch",
      "projects.github.p74": "Building Your First Logical Database Project",
      "projects.github.p75": "Building a Conceptual Database Schema",
      "projects.github.p76": "Refining a Conceptual Database Design – E-COMMERCE",
      "projects.github.p77": ".Docker: Practical Use in the Microservices Scenario",
      "projects.github.p78": "Infrastructure as Code - Web Server Provisioning Script (Apache)",
      "projects.github.p79": "Infrastructure as Code: Script for Creating User, Directory Structure and Permissions",
      "projects.github.p80": "Performing Cloud Deploy of a Set of APIs Developed in Spring Boot",
      "projects.github.p81": "Integrating a Node.js Backend with a React Frontend for an E-commerce",
      "projects.github.p82": "Developing a Hamburger Menu and Morphing Menu with CSS Transitions",
      "projects.github.p83": "Building an App Using Motion Sensor with React Native",
      "projects.github.p84": "Learn to Create a Parking System Using TypeScript",
      "projects.github.p85": "How to Create a Front-end for an E-commerce Using Angular",
      "projects.github.p86": "Developing a Progressive Web Application with React to Map COVID-19 Data Around the World",
      "projects.github.p87": "Development of Unit Tests to Validate a REST API for Beer Inventory Management",
      "projects.github.p88": "Create Your Meeting Room Manager with Java and Angular",
      "projects.github.p89": "Building a REST API for Querying Brazilian Cities from Zero to Production",
      "projects.github.p90": "Developing a People Management System in REST API with Spring Boot",
      "projects.github.p91": "Creating Your Game in Space Shooter Style",
      "projects.github.p92": "Creating Your Own Tic-Tac-Toe Game with HTML and Javascript",
      "projects.github.p93": "Developing a Memory Game",
      "projects.github.p94": "Building Your First Spaceship Game",
      "projects.github.p95": "Recreating the Famous Dinosaur Game without Internet",
      "projects.github.p96": "Creating a Fully Managed Hadoop Ecosystem with Google Cloud Dataproc",
      "projects.github.p97": "MySql - How to Model a Watched Series Control Database",
      "projects.github.p98": "Simplifying the Creation of Image Processing Packages in Python",
      "projects.github.p99": "Building a URL Shortener",
      "projects.github.p100": "Creating a Fully Componentized Front-end in Practice with ReactJS",
      "projects.github.p101": "Creating Your Memory Game Genius Style",
      "projects.github.p102": "Creating an App to Showcase Your GitHub Portfolio",
      "projects.github.p103": "Creating a Business Card App in Kotlin",
      "projects.github.p104": "Creating a Reminders and Tasks App with Kotlin",
      "projects.github.p105": "Exploring Design Patterns in Practice with Java",
      "projects.github.p106": "Abstracting a Bootcamp Using Object Orientation in Java",
      "projects.github.p107": "Creating a Digital Bank with Java and Object Orientation",
      "projects.github.p108": "Abstracting an RPG Game Using Object Orientation with C#",
      "projects.github.p109": "Recreating the Snake Game with JavaScript",
      "projects.github.p110": "Recreating the Netflix Interface",
      "projects.github.p111": "Recreating Instagram's Homepage",
      "projects.github.p112": "Creating Your First GitHub Repository to Share Your Progress",
      "projects.github.p113": "Creating a Simple Series Registration App in .NET",
      "projects.github.p114": "Creating a Bank Transfer Application with .NET",
      "projects.github.p115": "Creating Your Online CV With HTML and GitHub Pages",
      "projects.github.p116": "Creating Robust Solutions in Dynamics 365 with the SDK Extension",
      "projects.github.p117": "Documenting and Testing Your REST API with Kotlin",
      "projects.github.p118": "Contributing to an Open Source Project on GitHub",
      "projects.github.p119": "Simulating a Bank Account Through the Terminal/Console",
      "projects.github.p120": "Creating a Small System for Validation of a Selection Process",
      "projects.github.p121": "Modeling the iPhone with UML: Music, Calls and Internet Functions",
      "projects.github.p122": "Publishing Your REST API in the Cloud Using Spring Boot 3, Java 17 and Railway",
      "projects.github.p123": "Recreating the PlayStation Store Interface with Angular",
      "projects.github.p124": "Exploring Generative AI in an ETL Pipeline with Python",
      "projects.github.p125": "Creating a Sales Management Report with Power BI",
      "projects.github.p126": "Creating a Corporate Dashboard with MySQL and Azure Integration",
      "projects.github.p127": "Customizing Database Indexes and Procedures",
      "projects.github.p128": "Customizing Access and Automating Actions in MySQL",
      "projects.github.p129": "Creating Transactions, Performing Database Backup and Recovery",
      "projects.github.p130": "Analyzing Sales Dashboard Data in Power BI",
      "projects.github.p131": "Sales Dashboard with Power BI using Star Schema",
      "projects.github.p132": "Modeling an E-Commerce Dashboard with Power BI Using DAX Formulas",
      "projects.github.p133": "Creating a Management Dashboard for Decision Making with Power BI",
      "projects.github.p134": "Creating a Sales and Profit Report with Data Analytics in Power BI",
      "projects.github.p135": "Creating Dynamic Reports Using Parameters in Power BI",
      "projects.github.p136": "Creating and Using Your Cryptocurrency Wallet",
      "projects.github.p137": "Creating Your First Cryptocurrency on the Ethereum Network",
      "projects.github.p138": "Create Your Pokémon NFT with Blockchain",
      "projects.github.p139": "Creating Your First Token from Scratch Using Web3 Standards",
      "projects.github.p140": "Creating an NFT in Practice",
      "projects.github.p141": "Creating a Decentralized Autonomous Organization Using Web3 Standards",
      "projects.github.p142": "Recreating Wikipedia with a Modern Layout",
      "projects.github.p143": "Cloning the YouTube Page with CSS",
      "projects.github.p144": "Reproducing YouTube Listing Grid Layout with CSS Grid",
      "projects.github.p145": "Building a Responsive Layout for Discord Website with CSS",
      "projects.github.p146": "Cloning the HBO Max Site with HTML/CSS Animations",
      "projects.github.p147": "Publishing Your Professional Portfolio on GitHub Pages",
      "projects.github.p148": "Creating Your Personal Blog with Next.js",
      "projects.github.p149": "Creating an RG for the Minecraft Creeper with Lua",
      "projects.github.p150": "Building a Moon Battle Simulator with Lua",
      "projects.github.p151": "Creating an Adventure Simulator with Lua",
      "projects.github.p152": "Creating the Harvest Game with Roblox",
      "projects.github.p153": "Create an experience on Roblox",

      // Footer
      "footer.social": "My Social Networks",
      "footer.powered": "Powered by w3.css"
    },

    // -------------------------
    // Portuguese (pt-BR) - original content (keeps original Portuguese text)
    // -------------------------
    "pt-BR": {
      "meta.title": "Nivaldo Beirão - Online CV",
      "name": "Nivaldo José Tadeu dos Santos Beirão",
      "role": "ANALISTA DE GOVERNANÇA DE TI | GRC (GOVERNANÇA, RISCOS & COMPLIANCE) | PROCESSOS ADMINISTRATIVOS | MOODLE (AVA) | SUPORTE N1 AO N3",
      "location": "Remoto / Brasil (GMT-3)",

      "skills.Hard-title": "Hard Skills",
      "skills.IT_Management": "Gestão de TI",
      "skills.IT_Governance": "Governança de TI",
      "skills.Project-Management": "Gerenciamento de Projetos",
      "skills.Strategic-Planning": "Planejamento Estratégico",
      "skills.Moodle": "Moodle",
      "skills.Standardized_Work": "Trabalho Padronizado",
      "skills.Process_Optimization": "Otimização de Processos",
      "skills.Financial_Risk_Management": "Gestão de Risco Financeiro",
      "skills.Compliance_Management": "Gestão de Conformidade",
      "skills.Administrative_Support": "Suporte Administrativo",
      "skills.Technical_Support": "Suporte Técnico",
      "skills.Microsoft_Excel": "Microsoft Excel",
      "skills.Calculation": "Cálculo",
      "skills.JavaScript": "JavaScript",
      "skills.HTML": "HTML",
      "skills.CSS": "CSS",
      "skills.Banking_Operations": "Operações Bancárias",
      "skills.Customer_Service": "Atendimento ao Cliente",
      "skills.Internal_Process_Audit": "Auditoria de Processos Internos",
      "skills.Inventory_and_Asset_Management": "Gestão de Inventário e Ativos",

      "skills.Soft-title": "Soft Skills",
      "skills.Analytical_Thinking": "Raciocínio Analítico",
      "skills.Emotional_Intelligence": "Inteligência Emocional",
      "skills.Teamwork": "Trabalho em Equipe",
      "skills.Organization": "Organização",
      "skills.Resilience": "Resiliência",
      "skills.Critical_Thinking": "Pensamento Crítico",
      "skills.Leadership": "Liderança",
      "skills.People_Management": "Gestão de Pessoas",

      "languages.title": "Idiomas",
      "languages.pt": "Português",
      "languages.en": "Inglês",
      "languages.es": "Espanhol",

      "about.title": "Sobre",
      "about.text": "Especialista em Governança e Gestão de TI com sólida formação em Administração de Empresas e foco em Eficiência Operacional e GRC (Governança, Risco e Conformidade). Experiência em desenvolvimento de processos auditáveis, conformidade regulatória e gestão de ativos digitais em larga escala utilizando Inteligência Artificial. Perfil analítico e resiliente, com histórico de excelência técnica (Harvard CC50) e foco em estabilidade de serviço e mitigação de riscos. Inteligência Artificial: IA na Prática, Prompt Engineering para produtividade administrativa e automação de processos. Frameworks: ITIL Fundamentals e Balanced Scorecard (BSC)",

      "experience.title": "Experiências",
      "experience.multimedia.title": "Editor Multimídia e Gerente de Ativos Digitais - Trabalho Freelance no YouTube",
      "experience.multimedia.date_text": "Abril 2023 -",
      "experience.multimedia.date_tag": "Presente",
      "experience.multimedia.p1": "Gestão de Processos Digitais e Produção em Escala.",
      "experience.multimedia.p2": "Responsável por estruturar o fluxo de trabalho e entrega técnica de ativos digitais, garantindo 100% de conformidade com padrões de qualidade e prazos. Uso estratégico de Inteligência Artificial para otimizar processos de tradução e edição.",
      "experience.multimedia.p3": "Governança de Dados: Gestão e organização de um repositório em nuvem com mais de 8.000 ativos digitais, garantindo integridade e versionamento.",
      "experience.multimedia.p4": "Padronização Institucional: Criação de protocolos para legendagem, tradução e normalização de áudio, garantindo identidade visual e sonora coesa.",
      "experience.multimedia.p5": "Conformidade Linguística: Supervisão e revisão técnica de legendas e traduções assistidas por IA (PT-BR, EN-US, ES-ES), garantindo precisão na comunicação.",
      "experience.multimedia.p6": "Eficiência Operacional: Implementação de metodologias de edição dinâmicas que resultaram na entrega de mais de 8.000 arquivos de áudio e 550 vídeos com alto padrão de acabamento.",

      "experience.sports-trader.title": "Analista de Risco e Inteligência de Mercado - Trabalho Freelance na Betfair",
      "experience.sports-trader.date_text": "Março 2021 -",
      "experience.sports-trader.date_tag": "Dezembro 2021",
      "experience.sports-trader.p1": "Área de Atuação: Análise Estatística, GRC (Governança, Risco e Conformidade) e Gestão de Ativos em Mercados Altamente Voláteis.",
      "experience.sports-trader.p2": "Foco no desenvolvimento e execução de modelos preditivos baseados em probabilidade e estatística aplicada, com rigoroso controle de riscos operacionais e conformidade com estratégias de mercado.",
      "experience.sports-trader.p3": "Responsabilidades e Governança (GRC):",
      "experience.sports-trader.p4": "Modelagem de Risco e Conformidade: Análise de variáveis complexas para apoiar decisões estratégicas em tempo real, garantindo integridade dos processos e conformidade com modelos de risco estabelecidos.",
      "experience.sports-trader.p5": "Gestão de Risco (Bankroll Management): Gestão de capital focada na preservação de ativos e mitigação de perdas, utilizando ferramentas de auditoria e \"diários\" para garantir governança sobre investimentos.",
      "experience.sports-trader.p6": "Análise Quantitativa e Precificação: Estudo avançado de precificação de ativos (ODDs), avaliando volatilidade e pontos de resistência, garantindo operações dentro de métricas de risco aceitáveis.",
      "experience.sports-trader.p7": "Disciplina Operacional e Auditoria: Manutenção de alto rigor analítico sob pressão, garantindo que 100% das estratégias seguissem o plano de governança operacional preestabelecido, sem desvios de conduta ou execução.",
      "experience.sports-trader.p8": "Resultados e Competências:",
      "experience.sports-trader.p9": "Inteligência de Dados: Transformação de dados brutos em decisões de investimento, utilizando calculadoras estatísticas e análise de tendências de mercado.",
      "experience.sports-trader.p10": "Resiliência e Controle de Risco: Domínio de técnicas de gestão de bankroll e controle psicológico, fundamentais para a sustentabilidade das operações em ambientes altamente incertos.",

      "experience.administrative-assistant.title": "Assistente Administrativo - Centro Universitário Vale Do Ribeira (Univr)",
      "experience.administrative-assistant.date_text": "Julho 2016 -",
      "experience.administrative-assistant.date_tag": "Setembro 2019",
      "experience.administrative-assistant.p1": "Área de Atuação: Gestão de Dados Educacionais, GRC (Governança, Risco e Conformidade) e Suporte Tecnológico a Ambientes Virtuais.",
      "experience.administrative-assistant.p2": "Papel estratégico no desenvolvimento de soluções tecnológicas aplicadas à educação, com foco em governança de dados acadêmicos e conformidade com normas regulatórias federais (MEC).",
      "experience.administrative-assistant.p3": "Responsabilidades e Governança (GRC):",
      "experience.administrative-assistant.p4": "Governança de Dados Regulatórios (MEC/ENADE): Apoio direto ao Pesquisador Institucional na coleta e processamento de dados para o Censo da Educação Superior. Garantia da integridade, confiabilidade e conformidade dos dados reportados ao MEC, mitigando riscos de irregularidades institucionais.",
      "experience.administrative-assistant.p5": "Gestão de Processos e Auditoria: Preparação, controle e gestão de documentos e relatórios críticos em Excel, garantindo cumprimento de prazos regulatórios e organização do fluxo acadêmico.",
      "experience.administrative-assistant.p6": "Administração do Ambiente Virtual de Aprendizagem (AVA): Gestão da plataforma Moodle, definindo padrões de segurança e usabilidade para mais de 2.500 usuários.",
      "experience.administrative-assistant.p7": "Gestão de Fluxo e Calendário: Organização de cronogramas acadêmicos complexos (Urânia) e calendários de atividades via Google Sheets, otimizando alocação de recursos institucionais.",
      "experience.administrative-assistant.p8": "Resultados e Competências Técnicas:",
      "experience.administrative-assistant.p9": "Padronização e Escalabilidade: Gestão do LMS Moodle com criação de templates para 27 cursos (Presencial e EaD), garantindo consistência visual e operacional para a instituição.",
      "experience.administrative-assistant.p10": "Suporte Estratégico: Fornecimento de suporte técnico especializado a coordenadores e docentes, garantindo continuidade operacional de aulas síncronas e assíncronas.",
      "experience.administrative-assistant.p11": "Transição Institucional: Participação ativa no processo de transição tecnológica de Faculdade para Centro Universitário, assegurando conformidade dos sistemas de dados durante a expansão para Ensino a Distância.",

      "experience.intern-registro.title": "Estagiário em Administração - Unidade Regional de Ensino de Registro",
      "experience.intern-registro.date_text": "Julho 2014 -",
      "experience.intern-registro.date_tag": "Julho 2016",
      "experience.intern-registro.p1": "Área de Atuação: Suporte Estratégico de TI, GRC (Controle de Ativos e Conformidade) e Gestão de Projetos Educacionais.",
      "experience.intern-registro.p2": "Atuação no NIET (Núcleo de Informação e Tecnologia Educacional), com foco em infraestrutura de TI e gestão operacional de dados para a rede estadual de ensino.",
      "experience.intern-registro.p3": "Responsabilidades e Governança (GRC/Excel):",
      "experience.intern-registro.p4": "Gestão de Inventário e Dados (Excel Intermediário): Criação e manutenção de planilhas de controle para gestão de ativos tecnológicos em 40 unidades escolares. Uso de fórmulas de busca e tabelas dinâmicas para monitoramento de hardware e status de manutenção.",
      "experience.intern-registro.p5": "Conformidade e Governança de TI: Garantia da padronização e segurança de redes locais e dispositivos móveis, assegurando que o uso de ferramentas digitais estivesse em conformidade com as diretrizes da Secretaria de Educação.",
      "experience.intern-registro.p6": "Gestão de Incidentes (Help Desk): Suporte Nível 1 (Presencial/Remoto) via TeamViewer e WhatsApp Business, com foco em resolução rápida e registro de incidentes para auditoria de suporte.",
      "experience.intern-registro.p7": "Planejamento de Projetos de Inclusão: Apoio na execução de cronogramas e monitoramento de metas para programas de capacitação tecnológica em larga escala.",
      "experience.intern-registro.p8": "Resultados e Competências:",
      "experience.intern-registro.p9": "Formação de Multiplicadores: Treinamento direto e gestão de mais de 200 monitores ao longo de 2 anos, disseminando boas práticas de uso e segurança da informação.",
      "experience.intern-registro.p10": "Escalabilidade de Serviço: Suporte técnico ativo a 40 unidades escolares, garantindo continuidade das operações pedagógicas e administrativas na região.",

      "experience.intern-miracatu.title": "Estagiário em Administração - Unidade Regional de Ensino de Miracatu",
      "experience.intern-miracatu.date_text": "Agosto 2011 -",
      "experience.intern-miracatu.date_tag": "Agosto 2013",
      "experience.intern-miracatu.p1": "Área de Atuação: Suporte Estratégico de TI, GRC (Governança, Ativos e Conformidade) e Implementação de Soluções Educacionais.",
      "experience.intern-miracatu.p2": "Atuação no NIET (Núcleo de Informação e Tecnologia Educacional), com foco em infraestrutura tecnológica e padronização de processos para a rede estadual de ensino.",
      "experience.intern-miracatu.p3": "Responsabilidades e Governança (GRC/Excel):",
      "experience.intern-miracatu.p4": "Gestão de Inventário e Dados (Excel Intermediário): Criação e controle de planilhas para gestão de ativos tecnológicos de 28 unidades escolares. Uso de fórmulas e tabelas dinâmicas para monitorar ciclo de vida do hardware e status de manutenção.",
      "experience.intern-miracatu.p5": "Conformidade e Padronização: Garantia da correta implementação das diretrizes de TI da Secretaria de Educação, assegurando que suporte e infraestrutura estivessem em conformidade com padrões institucionais.",
      "experience.intern-miracatu.p6": "Gestão de Incidentes e Help Desk: Suporte técnico Nível 1 (presencial e remoto), com foco na resolução rápida de problemas críticos e registro de incidentes para garantir continuidade operacional.",
      "experience.intern-miracatu.p7": "Governança em Treinamento: Organização de cronogramas e materiais para capacitação tecnológica, com foco na disseminação de conhecimento técnico nas unidades escolares.",
      "experience.intern-miracatu.p8": "Resultados e Competências:",
      "experience.intern-miracatu.p9": "Formação de Multiplicadores: Gestão direta e treinamento de mais de 120 monitores, garantindo autonomia tecnológica nas escolas da região.",
      "experience.intern-miracatu.p10": "Eficiência Operacional: Suporte técnico ativo e estruturado a 28 unidades escolares, otimizando o uso de recursos tecnológicos e a gestão de incidentes.",

      "experience.cashier-bank.title": "Caixa / Atendente - Banco Bradesco",
      "experience.cashier-bank.date_text": "Abril 2009 -",
      "experience.cashier-bank.date_tag": "Março 2011",
      "experience.cashier-bank.p1": "Área de Atuação: Gestão de Operações Financeiras, GRC (Governança, Risco e Conformidade) e Conformidade Bancária.",
      "experience.cashier-bank.p2": "Atuação estratégica em atendimento ao cliente e gestão de caixa, com foco total em precisão, mitigação de riscos operacionais e conformidade com normas regulatórias.",
      "experience.cashier-bank.p3": "Responsabilidades e Governança (GRC):",
      "experience.cashier-bank.p4": "Controle de Fluxo de Caixa e Gestão de Risco: Responsável pela abertura, fechamento e conciliação diária de fundos, garantindo 100% de precisão nos registros e atuando na prevenção de perdas e fraudes.",
      "experience.cashier-bank.p5": "Conformidade e Processamento de Ativos: Gestão de pagamentos, tributos e acordos, garantindo integridade das transações e conformidade com diretrizes do Banco Central e protocolos internos.",
      "experience.cashier-bank.p6": "Suporte Crítico e Auditoria de Processos: Atendimento a beneficiários do INSS e fornecedores, realizando verificação rigorosa de documentos para garantir segurança institucional.",
      "experience.cashier-bank.p7": "Governança de Dados e Documentação: Controle de malotes e documentos críticos, garantindo rastreabilidade e organização do fluxo administrativo conforme padrões de auditoria.",
      "experience.cashier-bank.p8": "Resultados e Competências:",
      "experience.cashier-bank.p9": "Gestão de Crises e Transições: Papel ativo na migração de sistemas operacionais, garantindo que a transição tecnológica respeitasse pilares de governança e não afetasse a conformidade do serviço.",
      "experience.cashier-bank.p10": "Multiplicador de Conformidade: Responsável pelo treinamento e integração de novos colaboradores, disseminando a cultura de segurança, ética e regras de GRC da instituição.",
      "experience.cashier-bank.p11": "Excelência Operacional: Reconhecimento por resolução de conflitos em ambientes de alta pressão e fidelização de clientes por meio de processos seguros e transparentes.",

      "experience.general-services.title": "Assistente de Operações e Vendas (Varejo) - Supermercados Tio Beba",
      "experience.general-services.date_text": "Janeiro 2009 -",
      "experience.general-services.date_tag": "Março 2011",
      "experience.general-services.p1": "Gestão de Processos Operacionais, Inventário e Fluxo de Caixa",
      "experience.general-services.p2": "Papel multifuncional com foco em organização, controle de ativos e excelência no atendimento ao cliente, garantindo que regras da empresa sejam seguidas com rigor técnico e ético.",
      "experience.general-services.p3": "Responsabilidades e Governança:",
      "experience.general-services.p4": "Gestão de Caixa: Responsável por operações de caixa, garantindo 100% de precisão nos fechamentos e verificação de notas fiscais e malotes.",
      "experience.general-services.p5": "Logística e Inventário: Organização estratégica do estoque e área de vendas, otimizando tempo de reposição e garantindo precisão na verificação de remessas.",
      "experience.general-services.p6": "Versatilidade Administrativa: Apoio direto em rotinas de compras, precificação e controle de arquivos, mantendo a ordem dos documentos institucionais.",
      "experience.general-services.p7": "Atendimento ao Cliente e Suporte: Integração entre áreas administrativas e comerciais, com foco na resolução de problemas do cliente e suporte logístico (entregas).",
      "experience.general-services.p8": "Resultados e Competências:",
      "experience.general-services.p9": "Eficiência Operacional: Garantia de conformidade total em processos internos de auditoria de caixa e inventário.",
      "experience.general-services.p10": "Agilidade e Resiliência: Capacidade de adaptação a diferentes setores (comércio, finanças e logística), mantendo alto padrão de entrega sob pressão.",

      "education.title": "Educação",
      "education.dio.title": "Digital Innovation One (DIO)",
      "education.dio.date": "Outubro 2021 - Presente",
      "education.dio.text": "Maior plataforma aberta de educação em TI da América Latina, com mais de 1 milhão de usuários. A DIO faz parcerias com empresas inovadoras, oferecendo experiências de aprendizagem imersivas focadas na empregabilidade. Principais certificações listadas abaixo.",
      "education.univr.mba": "CENTRO UNIVERSITÁRIO VALE DO RIBEIRA (UNIVR) - MBA",
      "education.univr.mba.date": "2017 - 2018",
      "education.univr.mba.title": "MBA em Gestão e Governança de Tecnologia da Informação",
      "education.univr.mba.text": "Foco em frameworks de governança, conformidade tecnológica e gestão estratégica de ativos de TI. Desenvolvimento de habilidades em auditoria de sistemas, segurança da informação e alinhamento entre tecnologia e objetivos de negócio.",
      "education.univr.bachelor": "CENTRO UNIVERSITÁRIO VALE DO RIBEIRA (UNIVR) - Bacharelado",
      "education.univr.bachelor.date": "2010 - 2017",
      "education.univr.bachelor.title": "Bacharelado em Administração de Empresas",
      "education.univr.bachelor.text": "Formação sólida em gestão organizacional, processos administrativos, direito aplicado e finanças. Foco no desenvolvimento de visão sistêmica e análise de processos para eficiência operacional.",

      "projects.title": "Projetos",
      "projects.github": "GitHub",
      // For brevity: reuse English project titles translated to Portuguese where appropriate
      "projects.github.p1": "Criando um aplicativo do tipo Canvas com a Power Platform",
      "projects.github.p2": "Adicionando Segurança em APIs na AWS com Amazon Cognito",
      "projects.github.p3": "Explorando o Rest Assured para Automação de Testes de API",
      "projects.github.p4": "QA Profissional: Testes Manuais Funcionais",
      "projects.github.p5": "Implementando uma Tela de Login com Validação Usando TypeScript",
      "projects.github.p6": "Desenvolvendo a Tela de Cadastro da Plataforma DIO com React",
      "projects.github.p7": "Criando uma Wiki de Repositório GitHub com React",
      "projects.github.p8": "Identificando suas Habilidades que Podem ser Remuneradas",
      "projects.github.p9": "IA Entrevistador: Seu Simulador Inteligente de Entrevistas",
      "projects.github.p10": "IA Mentor de Carreira: Descubra Seu Futuro em Tech",
      "projects.github.p11": "Criando um App de Organização Financeira Pessoal com Vibe Coding",
      "projects.github.p12": "Criando uma Calculadora com React",
      "projects.github.p13": "Abstraindo Formações da DIO Usando Orientação a Objetos com Kotlin",
      "projects.github.p14": "Criando um Clone do BuzzFeed com Angular",
      "projects.github.p15": "Criando um Blog com Angular",
      "projects.github.p16": "Construindo uma Pokédex com JavaScript",
      "projects.github.p17": "Criando sua Primeira Landing Page com HTML e CSS",
      "projects.github.p18": "Criando seu Primeiro Site Completo com HTML",
      "projects.github.p19": "Criando uma Página Web Utilizando as Tags Aprendidas",
      "projects.github.p20": "Criando Pipeline CI/CD com Cloud Build e Terraform",
      "projects.github.p21": "Utilizando o Cloud Shell",
      "projects.github.p22": "Personalizando Dashboard e Trocando Preferências de Idioma",
      "projects.github.p23": "Exportação de Billing na Google Cloud Platform",
      "projects.github.p24": "Definição de Orçamento de Billing na Google Cloud Platform",
      "projects.github.p25": "Desenhando Organização de Pastas, Projetos e Grupos de Acesso na GCP",
      "projects.github.p26": "Criando Pipeline de Deploy com GitLab e Kubernetes",
      "projects.github.p27": "Criando um Deploy de Aplicação",
      "projects.github.p28": "Definindo um Cluster Swarm Local com Vagrant",
      "projects.github.p29": "Criando um Container para Aplicação WEB",
      "projects.github.p30": "Explorando Dados Demográficos com Serviços de Big Data na AWS",
      "projects.github.p31": "Treinamento de Redes Neurais com Transfer Learning",
      "projects.github.p32": "Boas Práticas com DynamoDB",
      "projects.github.p33": "Criando Modelos com Python e Machine Learning para Prever a Evolução do COVID-19 no Brasil",
      "projects.github.p34": "App Nativo Sobre Futebol Feminino com Android Jetpack e Java",
      "projects.github.p35": "Criando o Front-end com ReactJS",
      "projects.github.p36": "Booking App DIO",
      "projects.github.p37": "Criando a Interface do iFood com React Native",
      "projects.github.p38": "Infraestrutura como Código com Serverless Framework na AWS",
      "projects.github.p39": "Criando um Gerenciador de Espaçonaves do Star Wars com SQL Server + .NET",
      "projects.github.p40": "Criando um Aplicativo de Conversão de Moedas",
      "projects.github.p41": "Desenvolvendo seu Blog com Java e Angular",
      "projects.github.p42": "Criando Aplicação de Notícias ReactJS com PWA",
      "projects.github.p43": "Criando Site para Encontrar Restaurantes Usando Google Maps e API",
      "projects.github.p44": "Criando seu Ecossistema de Big Data na Nuvem",
      "projects.github.p45": "Análise de Dados com Python e Pandas",
      "projects.github.p46": "Criando um Catálogo de Jogos com Boas Práticas de Arquitetura em .NET",
      "projects.github.p47": "Construindo Projeto com Microsserviços usando Spring Cloud",
      "projects.github.p48": "Construindo Sistema de Ponto e Controle de Acesso com Spring Boot",
      "projects.github.p49": "Criando Sistema de Classificados com Ruby on Rails",
      "projects.github.p50": "MindApp - Desenvolvendo Cloud Tags com Ruby",
      "projects.github.p51": "Criando Gerenciador de Esferas Dragon Ball Z com ReactJS, Jest, RTL e Cypress",
      "projects.github.p52": "Desenvolvendo SPA com Angular",
      "projects.github.p53": "Criando Sistema de Orçamento com CQRS, Quarkus, Kafka e Deploy no EKS",
      "projects.github.p54": "Rodando Aplicação Java no Kubernetes: Deploy ao Debug",
      "projects.github.p55": "Criando Solução E-commerce com Microsserviços em Java",
      "projects.github.p56": "Criando Gerenciador de Super-Heróis em API Reativa com Spring Boot",
      "projects.github.p57": "Utilizando Cypress E2E para Testar Blog em Angular",
      "projects.github.p58": "Projeto para Consultar Previsão do Tempo via API",
      "projects.github.p59": "Implementando Stack de Testes Unitários e Integrados em Projeto .NET de Crowdfunding",
      "projects.github.p60": "Construindo Projeto API .NET Integrado com MongoDB",
      "projects.github.p61": "Construindo ChatbotFit no Telegram com JavaScript e NodeJS",
      "projects.github.p62": "Construindo APIs com Arquitetura Serverless",
      "projects.github.p63": "Tarefas em Background com Node.js e Redis",
      "projects.github.p64": "Requisitando Dados de API de Criptomoedas",
      "projects.github.p65": "Introdução Prática ao TypeScript",
      "projects.github.p66": "Conhecendo Spring Data JPA na prática com Java",
      "projects.github.p67": "Desafio Tech Pottencial: Payment API",
      "projects.github.p68": "Construindo Sistema de Agendamento de Tarefas com Entity Framework",
      "projects.github.p69": "Criando Sistema e Abstraindo Smartphone com POO em C#",
      "projects.github.p70": "Construindo Sistema de Hospedagem em C#",
      "projects.github.p71": "Construindo Sistema de Estacionamento com C#",
      "projects.github.p72": "O Papel de Bancos SQL e NoSQL na Engenharia de Dados",
      "projects.github.p73": "Construa Projeto Lógico de Banco de Dados do Zero",
      "projects.github.p74": "Construindo seu Primeiro Projeto Lógico de Banco de Dados",
      "projects.github.p75": "Construindo Esquema Conceitual para Banco de Dados",
      "projects.github.p76": "Refinando Projeto Conceitual de Banco de Dados – E-COMMERCE",
      "projects.github.p77": ".Docker: Utilização Prática em Microsserviços",
      "projects.github.p78": "Infraestrutura como Código - Script de Provisionamento de Servidor Web (Apache)",
      "projects.github.p79": "Infraestrutura como Código: Script de Criação de Usuários, Diretórios e Permissões",
      "projects.github.p80": "Realizando Deploy na Nuvem de Conjunto de APIs em Spring Boot",
      "projects.github.p81": "Integrando Backend Node.js com Frontend React para E-commerce",
      "projects.github.p82": "Desenvolvendo Menu Hamburguer e Morphing Menu com Transições CSS",
      "projects.github.p83": "Construindo App com Sensor de Movimento em React Native",
      "projects.github.p84": "Aprenda a Criar Sistema de Estacionamento com TypeScript",
      "projects.github.p85": "Como Criar Front-end de E-commerce com Angular",
      "projects.github.p86": "Desenvolvendo PWA com React para Mapear Dados do COVID-19",
      "projects.github.p87": "Desenvolvimento de Testes Unitários para API REST de Gestão de Estoque de Cerveja",
      "projects.github.p88": "Crie Gerenciador de Salas de Reunião com Java e Angular",
      "projects.github.p89": "Construindo API REST de Consulta de Cidades do Brasil",
      "projects.github.p90": "Desenvolvendo Sistema de Gestão de Pessoas em API REST com Spring Boot",
      "projects.github.p91": "Criando Jogo Estilo Space Shooter",
      "projects.github.p92": "Criando Jogo da Velha com HTML e Javascript",
      "projects.github.p93": "Desenvolvendo Jogo da Memória",
      "projects.github.p94": "Construindo Primeiro Jogo de Naves",
      "projects.github.p95": "Recriando Jogo do Dinossauro sem Internet",
      "projects.github.p96": "Criando Ecossistema Hadoop Gerenciado com Google Cloud Dataproc",
      "projects.github.p97": "MySql - Como Modelar Banco de Controle de Séries Assistidas",
      "projects.github.p98": "Descomplicando Criação de Pacotes de Processamento de Imagens em Python",
      "projects.github.p99": "Construindo Encurtador de URL",
      "projects.github.p100": "Criando Front-end Totalmente Componentizado com ReactJS",
      "projects.github.p101": "Criando Jogo de Memória Estilo Genius",
      "projects.github.p102": "Criando App para Apresentar Portfólio do GitHub",
      "projects.github.p103": "Criando App de Cartão de Visitas em Kotlin",
      "projects.github.p104": "Criando App de Lembretes e Tarefas com Kotlin",
      "projects.github.p105": "Explorando Padrões de Projeto com Java",
      "projects.github.p106": "Abstraindo Bootcamp com Orientação a Objetos em Java",
      "projects.github.p107": "Criando Banco Digital com Java e Orientação a Objetos",
      "projects.github.p108": "Abstraindo Jogo RPG com Orientação a Objetos em C#",
      "projects.github.p109": "Recriando Jogo da Cobrinha com JavaScript",
      "projects.github.p110": "Recriando Interface do Netflix",
      "projects.github.p111": "Recriando Página Inicial do Instagram",
      "projects.github.p112": "Criando Primeiro Repositório no GitHub para Compartilhar Progresso",
      "projects.github.p113": "Criando App Simples de Cadastro de Séries em .NET",
      "projects.github.p114": "Criando Aplicação de Transferência Bancária com .NET",
      "projects.github.p115": "Criando Currículo Online com HTML e GitHub Pages",
      "projects.github.p116": "Criando Soluções Robustas no Dynamics 365 com Extensão SDK",
      "projects.github.p117": "Documentando e Testando API REST com Kotlin",
      "projects.github.p118": "Contribuindo em Projeto Open Source no GitHub",
      "projects.github.p119": "Simulando Conta Bancária via Terminal/Console",
      "projects.github.p120": "Criando Pequeno Sistema para Validação de Processo Seletivo",
      "projects.github.p121": "Modelando iPhone com UML: Funções de Música, Chamadas e Internet",
      "projects.github.p122": "Publicando API REST na Nuvem com Spring Boot 3, Java 17 e Railway",
      "projects.github.p123": "Recriando Interface da PlayStation Store com Angular",
      "projects.github.p124": "Explorando IA Generativa em Pipeline ETL com Python",
      "projects.github.p125": "Criando Relatório Gerencial de Vendas com Power BI",
      "projects.github.p126": "Criando Dashboard Corporativo com Integração MySQL e Azure",
      "projects.github.p127": "Personalizando Índices e Procedures no Banco de Dados",
      "projects.github.p128": "Personalizando Acessos e Automatizando Ações no MySQL",
      "projects.github.p129": "Criando Transações, Executando Backup e Recovery de Banco de Dados",
      "projects.github.p130": "Analisando Dados de Dashboard de Vendas no Power BI",
      "projects.github.p131": "Dashboard de Vendas com Power BI usando Star Schema",
      "projects.github.p132": "Modelando Dashboard de E-commerce com Power BI usando DAX",
      "projects.github.p133": "Criando Dashboard Gerencial para Tomada de Decisões com Power BI",
      "projects.github.p134": "Criando Relatório de Vendas e Lucros com Data Analytics no Power BI",
      "projects.github.p135": "Criando Relatórios Dinâmicos com Parâmetros no Power BI",
      "projects.github.p136": "Criando e Utilizando Sua Carteira de Criptomoedas",
      "projects.github.p137": "Criando Sua Primeira Criptomoeda na Rede Ethereum",
      "projects.github.p138": "Crie seu NFT de Pokémon com Blockchain",
      "projects.github.p139": "Criando Seu Primeiro Token do Zero nos Padrões Web3",
      "projects.github.p140": "Criando um NFT na Prática",
      "projects.github.p141": "Criando uma DAO nos Padrões Web3",
      "projects.github.p142": "Recriando a Wikipedia com Layout Moderno",
      "projects.github.p143": "Clonando a Página do YouTube com CSS",
      "projects.github.p144": "Reproduzindo Listagem do YouTube com Grid Layout em CSS",
      "projects.github.p145": "Construindo Layout Responsivo para Site do Discord com CSS",
      "projects.github.p146": "Clonando Site HBO Max com Animações HTML/CSS",
      "projects.github.p147": "Publicando Portfólio Profissional no GitHub Pages",
      "projects.github.p148": "Criando Blog Pessoal com Next.js",
      "projects.github.p149": "Criando RG para Creeper do Minecraft com Lua",
      "projects.github.p150": "Construindo Simulador de Batalhas com Lua",
      "projects.github.p151": "Criando um Simulador de Aventuras com Lua",
      "projects.github.p152": "Criando o Jogo da Colheita com Roblox",
      "projects.github.p153": "Crie uma experiência no Roblox",

      "footer.social": "Minhas Redes Sociais",
      "footer.powered": "Powered by w3.css"
    },

    // -------------------------
    // Spanish (es-ES) translations
    // -------------------------
    "es-ES": {
      "meta.title": "Nivaldo Beirão - CV Online",
      "name": "Nivaldo José Tadeu dos Santos Beirão",
      "role": "Analista de Gobierno de TI | GRC (Gobierno, Riesgo y Cumplimiento) | Procesos administrativos | Moodle (LMS) | Soporte de niveles 1 a 3",
      "location": "Remoto / Brasil (GMT-3)",

      "skills.Hard-title": "Habilidades Técnicas",
      "skills.IT_Management": "Gestión de TI",
      "skills.IT_Governance": "Gobernanza de TI",
      "skills.Project-Management": "Gestión de Proyectos",
      "skills.Strategic-Planning": "Planificación Estratégica",
      "skills.Moodle": "Moodle",
      "skills.Standardized_Work": "Trabajo Estandarizado",
      "skills.Process_Optimization": "Optimización de Procesos",
      "skills.Financial_Risk_Management": "Gestión de Riesgo Financiero",
      "skills.Compliance_Management": "Gestión de Cumplimiento",
      "skills.Administrative_Support": "Soporte Administrativo",
      "skills.Technical_Support": "Soporte Técnico",
      "skills.Microsoft_Excel": "Microsoft Excel",
      "skills.Calculation": "Cálculo",
      "skills.JavaScript": "JavaScript",
      "skills.HTML": "HTML",
      "skills.CSS": "CSS",
      "skills.Banking_Operations": "Operaciones Bancarias",
      "skills.Customer_Service": "Atención al Cliente",
      "skills.Internal_Process_Audit": "Auditoría de Procesos Internos",
      "skills.Inventory_and_Asset_Management": "Gestión de Inventario y Activos",

      "skills.Soft-title": "Habilidades Blandas",
      "skills.Analytical_Thinking": "Pensamiento Analítico",
      "skills.Emotional_Intelligence": "Inteligencia Emocional",
      "skills.Teamwork": "Trabajo en Equipo",
      "skills.Organization": "Organización",
      "skills.Resilience": "Resiliencia",
      "skills.Critical_Thinking": "Pensamiento Crítico",
      "skills.Leadership": "Liderazgo",
      "skills.People_Management": "Gestión de Personas",

      "languages.title": "Idiomas",
      "languages.pt": "Portugués",
      "languages.en": "Inglés",
      "languages.es": "Español",

      "about.title": "Acerca de",
      "about.text": "Especialista en Gobernanza y Gestión de TI con sólida formación en Administración de Empresas y enfoque en Eficiencia Operativa y GRC (Gobernanza, Riesgo y Cumplimiento). Experiencia en desarrollar procesos auditables, cumplimiento regulatorio y gestión de activos digitales a gran escala usando Inteligencia Artificial. Perfil analítico y resiliente, con historial de excelencia técnica (Harvard CC50) y enfoque en estabilidad del servicio y mitigación de riesgos. Inteligencia Artificial: IA en la Práctica, Prompt Engineering para productividad administrativa y automatización de procesos. Frameworks: ITIL Fundamentals y Balanced Scorecard (BSC)",

      "experience.title": "Experiencias",
      "experience.multimedia.title": "Editor Multimedia y Gestor de Activos Digitales - Freelance en YouTube",
      "experience.multimedia.date_text": "Abril 2023 -",
      "experience.multimedia.date_tag": "Presente",
      "experience.multimedia.p1": "Gestión de Procesos Digitales y Producción a Escala.",
      "experience.multimedia.p2": "Responsable de estructurar el flujo de trabajo y la entrega técnica de activos digitales, asegurando 100% de cumplimiento con estándares de calidad y plazos. Uso estratégico de IA para optimizar procesos de traducción y edición.",
      "experience.multimedia.p3": "Gobernanza de Datos: Gestión y organización de un repositorio en la nube con más de 8.000 activos digitales, asegurando integridad y versionado.",
      "experience.multimedia.p4": "Estandarización Institucional: Creación de protocolos para subtitulado, traducción y normalización de audio, asegurando identidad visual y sonora coherente.",
      "experience.multimedia.p5": "Cumplimiento Lingüístico: Supervisión y revisión técnica de subtítulos y traducciones asistidas por IA (PT-BR, EN-US, ES-ES), asegurando precisión en la comunicación.",
      "experience.multimedia.p6": "Eficiencia Operativa: Implementación de metodologías de edición dinámicas que resultaron en la entrega de más de 8.000 archivos de audio y 550 videos con alto estándar de acabado.",

      // For brevity, translate project titles similarly to English but in Spanish
      "projects.title": "Proyectos",
      "projects.github": "GitHub",
      "projects.github.p1": "Creando una aplicación tipo Canvas con Power Platform",
      "projects.github.p2": "Agregando seguridad a APIs en AWS con Amazon Cognito",
      "projects.github.p3": "Explorando Rest Assured para automatización de pruebas de API",
      "projects.github.p4": "QA Profesional: Pruebas Funcionales Manuales",
      "projects.github.p5": "Implementando una pantalla de login con validación usando TypeScript",
      "projects.github.p6": "Desarrollando la pantalla de registro de la plataforma DIO con React",
      "projects.github.p7": "Creando una Wiki de repositorio GitHub con React",
      "projects.github.p8": "Identificando tus habilidades que pueden monetizarse",
      "projects.github.p9": "Entrevistador IA: Tu simulador inteligente de entrevistas",
      "projects.github.p10": "Mentor de Carrera IA: Descubre tu futuro en Tech",
      "projects.github.p11": "Creando una app de finanzas personales con Vibe Coding",
      "projects.github.p12": "Creando una calculadora con React",
      "projects.github.p13": "Abstrayendo formaciones DIO usando orientación a objetos con Kotlin",
      "projects.github.p14": "Creando un clon de BuzzFeed con Angular",
      "projects.github.p15": "Creando un blog con Angular",
      "projects.github.p16": "Construyendo una Pokédex con JavaScript",
      "projects.github.p17": "Creando tu primera landing page con HTML y CSS",
      "projects.github.p18": "Creando tu primer sitio completo con HTML",
      "projects.github.p19": "Creando una página web usando las etiquetas aprendidas",
      "projects.github.p20": "Creando pipeline CI/CD con Cloud Build y Terraform",
      "projects.github.p21": "Usando Cloud Shell",
      "projects.github.p22": "Personalizando dashboard y cambiando preferencias de idioma",
      "projects.github.p23": "Exportación de billing en Google Cloud Platform",
      "projects.github.p24": "Definiendo presupuesto de billing en Google Cloud Platform",
      "projects.github.p25": "Diseñando organización de carpetas, proyectos y grupos de acceso en GCP",
      "projects.github.p26": "Creando pipeline de deploy con GitLab y Kubernetes",
      "projects.github.p27": "Creando un deploy de aplicación",
      "projects.github.p28": "Definiendo un cluster Swarm local con Vagrant",
      "projects.github.p29": "Creando un contenedor para una aplicación web",
      "projects.github.p30": "Explorando demografía con servicios Big Data en AWS",
      "projects.github.p31": "Entrenamiento de redes neuronales con transfer learning",
      "projects.github.p32": "Buenas prácticas con DynamoDB",
      "projects.github.p33": "Creando modelos con Python y ML para predecir evolución del COVID-19 en Brasil",
      "projects.github.p34": "App nativa sobre fútbol femenino con Android Jetpack y Java",
      "projects.github.p35": "Creando el front-end con ReactJS",
      "projects.github.p36": "Booking App DIO",
      "projects.github.p37": "Creando la interfaz de iFood con React Native",
      "projects.github.p38": "Infraestructura como código con Serverless Framework en AWS",
      "projects.github.p39": "Creando un gestor de naves de Star Wars con SQL Server + .NET",
      "projects.github.p40": "Creando una app de conversión de divisas",
      "projects.github.p41": "Desarrollando tu blog con Java y Angular",
      "projects.github.p42": "Creando app de noticias ReactJS usando PWA",
      "projects.github.p43": "Creando sitio para encontrar restaurantes usando Google Maps y API",
      "projects.github.p44": "Creando tu ecosistema Big Data en la nube",
      "projects.github.p45": "Análisis de datos con Python y Pandas",
      "projects.github.p46": "Creando catálogo de juegos con buenas prácticas de arquitectura en .NET",
      "projects.github.p47": "Construyendo proyecto con arquitectura de microservicios usando Spring Cloud",
      "projects.github.p48": "Construyendo sistema de control de tiempo y acceso con Spring Boot",
      "projects.github.p49": "Creando sistema de clasificados con Ruby on Rails",
      "projects.github.p50": "MindApp - desarrollando cloud tags con Ruby",
      "projects.github.p51": "Crear gestor de esferas Dragon Ball Z con ReactJS, Jest, RTL y Cypress",
      "projects.github.p52": "Desarrollando SPA con Angular",
      "projects.github.p53": "Creando sistema de presupuesto con CQRS, Quarkus, Kafka y deploy en EKS",
      "projects.github.p54": "Ejecutando tu aplicación Java en Kubernetes: deploy a debug",
      "projects.github.p55": "Creando solución e-commerce con microservicios en Java",
      "projects.github.p56": "Creando gestor de superhéroes en API reactiva con Spring Boot",
      "projects.github.p57": "Usando Cypress E2E para probar un blog en Angular",
      "projects.github.p58": "Proyecto para consultar pronóstico del tiempo vía API",
      "projects.github.p59": "Implementando stack de pruebas unitarias e integradas en proyecto .NET de crowdfunding",
      "projects.github.p60": "Construyendo proyecto API .NET integrado con MongoDB",
      "projects.github.p61": "Construyendo ChatbotFit en Telegram con JavaScript y NodeJS",
      "projects.github.p62": "Construyendo APIs usando arquitectura serverless",
      "projects.github.p63": "Tareas en background usando Node.js y Redis",
      "projects.github.p64": "Solicitando datos de una API de criptomonedas",
      "projects.github.p65": "Introducción práctica a TypeScript",
      "projects.github.p66": "Aprendiendo Spring Data JPA en práctica con Java",
      "projects.github.p67": "Desafío Tech Potential: Payment API",
      "projects.github.p68": "Construyendo sistema de programación de tareas con Entity Framework",
      "projects.github.p69": "Creando sistema y abstrayendo smartphone con POO en C#",
      "projects.github.p70": "Construyendo sistema de hospedaje en C#",
      "projects.github.p71": "Construyendo sistema de estacionamiento con C#",
      "projects.github.p72": "El papel de bases SQL y NoSQL en ingeniería de datos",
      "projects.github.p73": "Construye un proyecto lógico de base de datos desde cero",
      "projects.github.p74": "Construyendo tu primer proyecto lógico de base de datos",
      "projects.github.p75": "Construyendo un esquema conceptual para base de datos",
      "projects.github.p76": "Refinando diseño conceptual de base de datos – E-COMMERCE",
      "projects.github.p77": ".Docker: uso práctico en escenario de microservicios",
      "projects.github.p78": "Infraestructura como código - Script de aprovisionamiento de servidor web (Apache)",
      "projects.github.p79": "Infraestructura como código: script para crear usuarios, directorios y permisos",
      "projects.github.p80": "Realizando deploy en la nube de un conjunto de APIs desarrolladas en Spring Boot",
      "projects.github.p81": "Integrando backend Node.js con frontend React para un e-commerce",
      "projects.github.p82": "Desarrollando menú hamburguesa y morphing menu con transiciones CSS",
      "projects.github.p83": "Construyendo app usando sensor de movimiento con React Native",
      "projects.github.p84": "Aprende a crear un sistema de estacionamiento usando TypeScript",
      "projects.github.p85": "Cómo crear un front-end de e-commerce usando Angular",
      "projects.github.p86": "Desarrollando PWA con React para mapear datos del COVID-19",
      "projects.github.p87": "Desarrollo de pruebas unitarias para validar una API REST de gestión de inventario de cerveza",
      "projects.github.p88": "Crea tu gestor de salas de reuniones con Java y Angular",
      "projects.github.p89": "Construyendo API REST para consulta de ciudades de Brasil",
      "projects.github.p90": "Desarrollando sistema de gestión de personas en API REST con Spring Boot",
      "projects.github.p91": "Creando tu juego estilo Space Shooter",
      "projects.github.p92": "Creando tu propio juego del tres en raya con HTML y Javascript",
      "projects.github.p93": "Desarrollando un juego de memoria",
      "projects.github.p94": "Construyendo tu primer juego de naves",
      "projects.github.p95": "Recreando el famoso juego del dinosaurio sin internet",
      "projects.github.p96": "Creando un ecosistema Hadoop totalmente gestionado con Google Cloud Dataproc",
      "projects.github.p97": "MySql - Cómo modelar una base de datos de control de series vistas",
      "projects.github.p98": "Simplificando la creación de paquetes de procesamiento de imágenes en Python",
      "projects.github.p99": "Construyendo un acortador de URL",
      "projects.github.p100": "Creando un front-end totalmente componentizado con ReactJS",
      "projects.github.p101": "Creando tu juego de memoria estilo Genius",
      "projects.github.p102": "Creando una app para mostrar tu portafolio de GitHub",
      "projects.github.p103": "Creando app de tarjeta de presentación en Kotlin",
      "projects.github.p104": "Creando app de recordatorios y tareas con Kotlin",
      "projects.github.p105": "Explorando patrones de diseño en práctica con Java",
      "projects.github.p106": "Abstrayendo un bootcamp usando orientación a objetos en Java",
      "projects.github.p107": "Creando un banco digital con Java y orientación a objetos",
      "projects.github.p108": "Abstrayendo un juego RPG usando orientación a objetos con C#",
      "projects.github.p109": "Recreando el juego de la serpiente con JavaScript",
      "projects.github.p110": "Recreando la interfaz de Netflix",
      "projects.github.p111": "Recreando la página principal de Instagram",
      "projects.github.p112": "Creando tu primer repositorio en GitHub para compartir tu progreso",
      "projects.github.p113": "Creando una app simple de registro de series en .NET",
      "projects.github.p114": "Creando una aplicación de transferencias bancarias con .NET",
      "projects.github.p115": "Creando tu CV online con HTML y GitHub Pages",
      "projects.github.p116": "Creando soluciones robustas en Dynamics 365 con la extensión SDK",
      "projects.github.p117": "Documentando y probando tu API REST con Kotlin",
      "projects.github.p118": "Contribuyendo a un proyecto open source en GitHub",
      "projects.github.p119": "Simulando una cuenta bancaria a través del terminal/console",
      "projects.github.p120": "Creando un pequeño sistema para validación de proceso selectivo",
      "projects.github.p121": "Modelando el iPhone con UML: funciones de música, llamadas e internet",
      "projects.github.p122": "Publicando tu API REST en la nube usando Spring Boot 3, Java 17 y Railway",
      "projects.github.p123": "Recreando la interfaz de PlayStation Store con Angular",
      "projects.github.p124": "Explorando IA generativa en un pipeline ETL con Python",
      "projects.github.p125": "Creando un informe de gestión de ventas con Power BI",
      "projects.github.p126": "Creando un dashboard corporativo con integración MySQL y Azure",
      "projects.github.p127": "Personalizando índices y procedimientos en la base de datos",
      "projects.github.p128": "Personalizando accesos y automatizando acciones en MySQL",
      "projects.github.p129": "Creando transacciones, ejecutando backup y recovery de base de datos",
      "projects.github.p130": "Analizando datos de un dashboard de ventas en Power BI",
      "projects.github.p131": "Dashboard de ventas con Power BI usando Star Schema",
      "projects.github.p132": "Modelando un dashboard de e-commerce con Power BI usando fórmulas DAX",
      "projects.github.p133": "Creando un dashboard gerencial para la toma de decisiones con Power BI",
      "projects.github.p134": "Creando un informe de ventas y beneficios con Data Analytics en Power BI",
      "projects.github.p135": "Creando informes dinámicos usando parámetros en Power BI",
      "projects.github.p136": "Creando y usando tu billetera de criptomonedas",
      "projects.github.p137": "Creando tu primera criptomoneda en la red Ethereum",
      "projects.github.p138": "Crea tu NFT de Pokémon con Blockchain",
      "projects.github.p139": "Creando tu primer token desde cero con estándares Web3",
      "projects.github.p140": "Creando un NFT en la práctica",
      "projects.github.p141": "Creando una DAO con estándares Web3",
      "projects.github.p142": "Recreando Wikipedia con un diseño moderno",
      "projects.github.p143": "Clonando la página de YouTube con CSS",
      "projects.github.p144": "Reproduciendo la cuadrícula de listados de YouTube con CSS Grid",
      "projects.github.p145": "Construyendo un layout responsivo para el sitio de Discord con CSS",
      "projects.github.p146": "Clonando el sitio HBO Max con animaciones HTML/CSS",
      "projects.github.p147": "Publicando tu portafolio profesional en GitHub Pages",
      "projects.github.p148": "Creando tu blog personal con Next.js",
      "projects.github.p149": "Creando un RG para el Creeper de Minecraft con Lua",
      "projects.github.p150": "Construyendo un simulador de batallas lunares con Lua",
      "projects.github.p151": "Creación de un simulador de aventuras con Lua",
      "projects.github.p152": "Creación del juego Harvest con Roblox",
      "projects.github.p153": "Crea una experiencia en Roblox",

      "footer.social": "Mis Redes Sociales",
      "footer.powered": "Powered by w3.css"
    }
  };

  // -------------------------
  // i18n core logic (robust)
  // -------------------------
  const LANG_KEY = 'preferredLanguage';
  const DEFAULT_LANG = 'pt-BR';

  function safeGet(dict, key) {
    if (!dict) return undefined;
    return dict[key];
  }

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved && translations[saved]) return saved;
    } catch (e) {}
    const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.startsWith('en')) return 'en-US';
    if (nav.startsWith('pt')) return 'pt-BR';
    if (nav.startsWith('es')) return 'es-ES';
    return DEFAULT_LANG;
  }

  function ensureOriginal(node) {
    if (!node.dataset.original) {
      node.dataset.original = node.innerHTML;
    }
  }

  function setNodeText(node, value, useHtml = false) {
    if (useHtml) {
      node.innerHTML = value;
    } else {
      node.textContent = value;
    }
  }

  function applyAttributeTranslations(node, dict, keyBase) {
    const attrSpec = node.getAttribute('data-i18n-attr');
    if (!attrSpec) return;
    const attrs = attrSpec.split(':').map(a => a.trim()).filter(Boolean);
    attrs.forEach(attrName => {
      const attrKey = keyBase + '.' + attrName;
      const translatedAttr = safeGet(dict, attrKey);
      if (typeof translatedAttr !== 'undefined') {
        node.setAttribute(attrName, translatedAttr);
      }
    });
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || {};
    const nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach(node => {
      ensureOriginal(node);
      const key = node.getAttribute('data-i18n');
      if (!key) return;

      applyAttributeTranslations(node, dict, key);

      const htmlKey = node.getAttribute('data-i18n-html');
      const useHtml = !!htmlKey;
      const lookupKey = htmlKey || key;

      const translated = safeGet(dict, lookupKey);
      if (typeof translated !== 'undefined' && translated !== null) {
        if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
          if (node.hasAttribute('placeholder')) {
            node.setAttribute('placeholder', translated);
          } else {
            node.value = translated;
          }
        } else {
          if (node.tagName === 'A') {
            node.textContent = translated;
          } else {
            setNodeText(node, translated, useHtml);
          }
        }
      } else {
        if (node.dataset.original) {
          node.innerHTML = node.dataset.original;
        }
      }
    });

    // Ensure anchor[data-i18n] are updated (if any)
    const linkNodes = document.querySelectorAll('a[data-i18n]');
    linkNodes.forEach(a => {
      const key = a.getAttribute('data-i18n');
      const translated = safeGet(dict, key);
      if (typeof translated !== 'undefined') {
        a.textContent = translated;
      } else if (a.dataset.original) {
        a.innerHTML = a.dataset.original;
      } else {
        ensureOriginal(a);
      }
    });

    // Update document title
    const titleTranslated = safeGet(dict, 'meta.title');
    if (typeof titleTranslated !== 'undefined') {
      document.title = titleTranslated;
    } else if (document.querySelector('title') && document.querySelector('title').dataset.original) {
      document.title = document.querySelector('title').dataset.original;
    }
  }

  function initLanguageSelector() {
    const select = document.getElementById('language-select');
    if (!select) return;

    const saved = getSavedLanguage();
    const optionExists = Array.from(select.options).some(opt => opt.value === saved);
    if (!optionExists) {
      if (saved.startsWith('en')) select.value = 'en-US';
      else if (saved.startsWith('pt')) select.value = 'pt-BR';
      else if (saved.startsWith('es')) select.value = 'es-ES';
      else select.value = saved;
    } else {
      select.value = saved;
    }

    document.querySelectorAll('[data-i18n]').forEach(ensureOriginal);
    const titleEl = document.querySelector('title');
    if (titleEl) ensureOriginal(titleEl);

    applyTranslations(select.value);

    select.addEventListener('change', function () {
      const chosen = select.value || DEFAULT_LANG;
      try {
        localStorage.setItem(LANG_KEY, chosen);
      } catch (e) {}
      applyTranslations(chosen);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSelector);
  } else {
    initLanguageSelector();
  }

  // Expose for debugging
  window.__i18n = {
    translations,
    applyTranslations,
    getSavedLanguage
  };

})();
