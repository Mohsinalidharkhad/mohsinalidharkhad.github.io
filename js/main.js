// Portfolio Items
const portfolioItems = [
    {
        "title": "Restaurant AI Agent",
        "description": "An AI-powered dining assistant that provides personalized restaurant recommendations, answers food-related queries, and enhances the dining experience through intelligent conversation.",
        "image": "https://picsum.photos/400/300?random=11",
        "tags": [
            "Conversational AI",
            "Streamlit",
            "Restaurant Tech"
        ],
        "isSpecialProject": true,
        "chatUrl": "https://restaurantai-84r9ewew2yfesnbtdfhvxy.streamlit.app/",
        "docsUrl": "https://www.notion.so/Restaurant-AI-Agent-AI-Powered-Dining-Assistant-239a4cca7b6f80dda724fa8bcd01e410?source=copy_link",
        "details": {
            "overview": "A sophisticated AI dining assistant built on Streamlit that leverages conversational AI to provide personalized restaurant recommendations and enhance the overall dining experience.",
            "problemStatement": "Finding the right restaurant or getting food-related information can be overwhelming with countless options available. Users need a personalized, intelligent assistant that understands their preferences and provides relevant dining recommendations.",
            "persona": "Primary users include:\n• Food enthusiasts seeking personalized dining experiences\n• Busy professionals looking for quick restaurant recommendations\n• Tourists exploring local dining options\n• Anyone seeking intelligent food-related assistance",
            "solution": "Developed an AI-powered conversational agent that uses natural language processing to understand user preferences and provide tailored restaurant recommendations. The system engages users in meaningful conversations about food preferences, dietary restrictions, and dining occasions to deliver personalized suggestions.",
            "challenges": "• Creating natural, engaging conversations about food preferences\n• Integrating comprehensive restaurant data and recommendations\n• Ensuring the AI understands diverse dining preferences and dietary needs\n• Building an intuitive interface that encourages user engagement",
            "impact": "• Provides personalized dining experiences through intelligent recommendations\n• Streamlines the restaurant discovery process for users\n• Demonstrates practical applications of conversational AI in the hospitality sector\n• Creates an engaging, user-friendly interface for food-related queries",
            "learnings": "• The importance of conversational design in creating engaging AI experiences\n• How personalization enhances user satisfaction in recommendation systems\n• The value of intuitive interfaces in making AI technology accessible\n• Best practices for deploying AI applications on cloud platforms like Streamlit"
        }
    },
    {
        "title": "Self-serve AI Products",
        "description": "A scalable, self-serve AI voice bot platform built after in-depth client and prospect interviews, enabling rapid deployment and efficient resource utilization.",
        "image": "https://picsum.photos/400/300?random=2",
        "tags": [
            "Voicebots",
            "Scalability",
            "Self-serve Platform",
        ],
        "details": {
            "overview": "Developed a comprehensive AI product suite with 4 tailored applications, transforming voice bot deployment by abstracting complexity and accelerating client onboarding.",
            "problemStatement": "Traditional voice bot deployment required 4-4 resources for 4 months per client, creating significant scalability challenges. Through extensive client and prospect interviews, we identified current pain points and future needs, leading to a segmented product strategy.",
            "persona": "Primary users included:\n• Enterprise clients across diverse industry segments\n• Product managers overseeing AI deployments\n• Operations teams ensuring platform efficiency\n• Support teams managing post-deployment services",
            "solution": "Segmented the target market into 4 distinct industry segments and developed a dedicated product for each. By abstracting the product complexity through configurable variables in the bot, we built a self-serve platform comprising 4 applications. This innovation enabled client onboarding in as little as 6 hours and drastically reduced resource requirements.",
            "challenges": "• Capturing and integrating diverse client requirements across industries\n• Designing configurable solutions to meet varied business needs\n• Balancing product complexity with ease of use\n• Minimizing resource dependency and manual intervention in deployment",
            "impact": "• Reduced client onboarding time from months to 6 hours\n• Lowered resource allocation from 4 per client to 10 for 50 clients\n• Streamlined support and feature deployment cycles\n• Achieved scalable deployment across multiple industry segments",
            "learnings": "• The importance of comprehensive client interviews to uncover real needs\n• How product segmentation can address diverse market demands\n• Benefits of a self-serve platform in driving scalability\n• The value of configurable solutions in simplifying complex deployments\n• Impact of streamlined processes on resource optimization and support efficiency"
        }
    },
    {
        "title": "LLM-based Conversational  AI Platform",
        "description": "Revolutionized our conversational AI by replacing rigid, NLP-based systems with an end-to-end LLM-driven voice bot, resulting in fluid interactions, enhanced customer satisfaction, and lower resource requirements.",
        "image": "https://picsum.photos/400/300?random=7",
        "tags": [
            "Agentic Voice AI",
            "RAG",
            "Customer Experience"
        ],
        "details": {
            "overview": "Engineered a next-generation conversational platform that integrates ASR and TTS with a central LLM engine. This system interprets user inputs, adheres to client-defined rules, and dynamically generates responses, creating fluid, natural interactions.",
            "problemStatement": "The legacy NLP-based approach relied on scripted intent and entity classification, leading to rigid, keyword-dependent conversations. This not only increased human intervention for mapping conversation paths but also resulted in poor customer experiences and inefficient resource utilization.",
            "persona": "Primary users included:\n• Business clients seeking superior conversational experiences\n• Product managers aiming to streamline voice bot development\n• End consumers desiring natural, engaging interactions\n• Development teams focused on rapid deployment with minimal maintenance",
            "solution": "Transitioned from traditional NLP pipelines to an end-to-end LLM-driven system while retaining essential ASR and TTS components. The LLM interprets live ASR outputs, applies client-specific guardrails, and generates contextually relevant responses, significantly reducing the need for exhaustive scripting.",
            "challenges": "• Migrating from rigid, scripted conversation flows to dynamic, LLM-powered interactions\n• Ensuring the LLM adheres to predefined client rules and guardrails\n• Balancing the need for fluidity with controlled and safe responses\n• Reducing resource requirements without compromising conversational quality",
            "impact": "• Delivered significantly more natural and engaging conversations, boosting customer satisfaction\n• Reduced development and operational resources needed for voice bot creation\n• Enhanced business outcomes through improved user engagement and streamlined deployment\n• Simplified configuration, allowing for rapid adaptation across industries",
            "learnings": "• LLMs can fundamentally transform conversational AI by reducing dependency on extensive scripting\n• Integrating ASR and TTS with a central LLM creates a seamless and efficient user experience\n• Implementing rule-based guardrails is key to maintaining control and quality in dynamic conversations\n• Continuous iteration and client feedback are essential for optimizing next-generation AI solutions"
        }
    },
    {
        "title": "Analytics Transformation",
        "description": "Revamped the legacy analytics system by building a robust data pipeline from production databases to a Redshift-based Data Warehouse, enabling real-time dashboards, advanced analytics, and automated SFTP exports.",
        "image": "https://picsum.photos/400/300?random=8",
        "tags": [
            "Data Warehouse",
            "ETL",
            "Advanced Analytics",
        ],
        "details": {
            "overview": "Transformed the production data flow by implementing a continuous pipeline from the production DB to a modern Data Warehouse powered by Redshift. This enabled faster, real-time analytics with advanced dashboards and automated data exports.",
            "problemStatement": "The previous setup relied on daily cron jobs to transfer data into an analytics DB, leading to significant latencies and poor dashboard performance in Metabase. This impacted decision-making for both internal teams and external clients.",
            "persona": "Primary users included:\n• Data analysts and business intelligence teams requiring real-time insights\n• Operations teams monitoring campaign performance\n• Strategic decision-makers using business dashboards\n• External clients receiving automated data exports via SFTP",
            "solution": "Built a scalable data pipeline to move data continuously from the production DB to a Redshift-based Data Warehouse. Leveraged ETL processes and materialized views to optimize query performance. Developed a suite of advanced analytics dashboards—including churn detection, campaign monitoring, and predictive analytics—and automated data exports to client SFTP servers with custom functions.",
            "challenges": "• Transitioning from a cron-based, batch data transfer to a real-time data flow\n• Optimizing ETL pipelines and materialized views for low latency\n• Designing cross-tenant and advanced analytics dashboards\n• Ensuring secure and reliable automated data exports",
            "impact": "• Significantly reduced dashboard load times and improved real-time performance\n• Enhanced user experience for both internal teams and external clients\n• Enabled proactive monitoring with goal-based ticket creation triggers\n• Accelerated decision-making with accessible, real-time insights",
            "learnings": "• Scalable, real-time data pipelines are key to effective analytics\n• Modern data warehousing solutions like Redshift can dramatically reduce latency\n• Optimized ETL and materialized views are essential for performance improvements\n• Automation of data exports and reporting enhances overall operational efficiency"
        }
    },
    {
        "title": "On-call payment with PCI-DSS Certification",
        "description": "A secure and seamless voice bot solution for capturing and processing payments in real time, ensuring full PCI DSS compliance through robust data masking and parser implementation.",
        "image": "https://picsum.photos/400/300?random=5",
        "tags": [
            "Payment Integration",
            "PCI DSS",
            "Compliance",
            "Data Masking",
        ],
        "details": {
            "overview": "Developed a voice bot solution that captures payment details during a call, processes payments via an external API, and ensures data security by masking sensitive information post-call to meet PCI DSS requirements.",
            "problemStatement": "Clients faced inefficiencies with traditional payment methods where consumers had to be transferred or sent mobile links to complete transactions. This resulted in a suboptimal user experience and increased operational overhead for handling sensitive payment data.",
            "persona": "Primary users included:\n• Financial service providers seeking secure, integrated payment solutions\n• Consumers desiring a seamless payment experience during calls\n• Compliance officers ensuring adherence to PCI DSS standards\n• Development teams focused on secure API integrations",
            "solution": "Conducted in-depth persona interviews to identify pain points and designed a high-level workflow. Developed custom parsers to extract key payment details (credit card number, CV, expiry) in real time during the conversation. Implemented strict data masking and removal procedures post-call to maintain PCI DSS compliance, and integrated with an external API to facilitate immediate payment processing.",
            "challenges": "• Accurately capturing sensitive payment details in a live voice interaction\n• Implementing robust data masking to ensure PCI DSS compliance\n• Seamlessly integrating with external payment APIs without interrupting the call flow\n• Balancing strict security measures with a smooth user experience",
            "impact": "• Enabled direct payment within the voice conversation, eliminating the need for call transfers or mobile links\n• Enhanced consumer experience with a seamless, real-time payment process\n• Achieved full PCI DSS compliance, boosting client trust\n• Improved operational efficiency and reduced processing time for payments",
            "learnings": "• The importance of thorough persona interviews to accurately understand user needs\n• Critical role of robust data security measures in handling financial transactions\n• Benefits of real-time integration with external payment systems for enhanced user experience\n• Best practices in balancing compliance requirements with operational usability"
        }
    },
    {
        "title": "Experimentation Platform",
        "description": "A robust platform leveraging feature flags and metadata to drive rapid, data-driven experiments on conversational bots, enabling significant product improvements.",
        "image": "https://picsum.photos/400/300?random=3",
        "tags": [
            "A/B Testing",
            "Analytics",
            "Feature Flags"
        ],
        "details": {
            "overview": "Developed an experimentation platform using the Growth Book tool, enabling teams to run controlled experiments on various aspects of conversational bots through dynamic feature flags and metadata.",
            "problemStatement": "The product needed rapid experimentation and iterative, data-driven changes to quickly improve conversational bot performance. Traditional methods were too slow, hindering timely product evolution.",
            "persona": "Primary users included:\n• Product managers driving rapid innovation\n• Data scientists analyzing experiment results\n• Engineering teams implementing and managing feature flags\n• UX/UI teams refining user interactions based on experimental feedback",
            "solution": "Implemented a comprehensive platform that integrates Growth Book with feature flags to experiment on any bot aspect using metadata. This setup enabled rapid A/B testing and data collection, streamlining the decision-making process for product enhancements.",
            "challenges": "• Integrating feature flags seamlessly into existing bot architecture\n• Ensuring accurate and reliable data collection for experiments\n• Balancing rapid experimentation with maintaining product stability\n• Coordinating among cross-functional teams for efficient execution",
            "impact": "• Enabled extensive experimentation across various bot functionalities\n• Achieved a 3x improvement in key business metrics through iterative enhancements\n• Accelerated product development and decision-making cycles\n• Fostered a culture of continuous, data-driven improvement",
            "learnings": "• The critical role of rapid experimentation in product innovation\n• Importance of robust data collection and analysis for informed decision-making\n• Benefits of using feature flags to safely test new ideas\n• Necessity of cross-functional collaboration to maximize platform effectiveness"
        }
    },
    {
        "title": "Omni-channel Campaign Manager",
        "description": "An omni-channel campaign manager feature that integrates voice, chat, SMS, and email bots to create customizable outreach workflows, optimizing collections and increasing operational efficiency.",
        "image": "https://picsum.photos/400/300?random=4",
        "tags": [
            'Telephony',
            'System Design',
            'Resource Management'
        ],
        "details": {
            "overview": "Developed an integrated campaign management platform that allows clients to design and execute multi-channel outreach workflows, seamlessly coordinating voice, chat, SMS, and email interactions.",
            "problemStatement": "Disjointed outreach efforts across multiple communication channels were inefficient and costly. The need to maximize campaign outcomes for debt collection prompted the creation of a unified platform to streamline and automate multi-channel campaigns.",
            "persona": "Primary users included:\n• Collections managers looking to optimize outreach efforts\n• Marketing teams designing automated campaign workflows\n• Operations teams tracking campaign performance\n• Client service teams improving customer engagement",
            "solution": "Built a platform feature that aggregates various communication channels—voice (inbound and outbound), chat, SMS, and email—into a single workflow builder. Clients can schedule tailored campaigns (e.g., SMS reminders on day one, emails on day two, AI-based voice calls on day three, etc.) that automatically conclude upon payment, significantly enhancing efficiency.",
            "challenges": "• Integrating diverse communication channels into one cohesive system\n• Designing flexible workflow configurations to meet varied client needs\n• Ensuring synchronized and timely execution of multi-channel campaigns\n• Balancing full automation with opportunities for human intervention when necessary",
            "impact": "• Achieved a substantial increase in collections by unifying multi-channel outreach\n• Reduced collection costs by nearly 50% compared to isolated channel campaigns\n• Enhanced overall campaign effectiveness and client satisfaction",
            "learnings": "• The power of a unified outreach strategy in driving better campaign results\n• Automation can significantly cut operational costs while improving efficiency\n• Flexible workflow designs are critical to accommodate diverse campaign scenarios\n• Continuous monitoring and iterative refinement lead to sustained business improvements"
        }
    },
    {
        "title": "Compliance Filter Service",
        "description": "An automated service that enforces BFSI regulatory requirements for outbound campaigns, ensuring 100% compliance while reducing manual errors and resource overhead.",
        "image": "https://picsum.photos/400/300?random=6",
        "tags": [
            "Compliance",
            "TCPA",
            "System Design",
            "FDCPA",
        ],
        "details": {
            "overview": "Developed a compliance filter service to automatically enforce complex BFSI regulatory rules before outbound campaigns are executed, ensuring that all communication adheres to prescribed call frequency, timing, and dispute handling guidelines.",
            "problemStatement": "Manual compliance processes were error-prone and resource-intensive, with risks of violating rules such as call frequency limits, prohibited call timings, and contact restrictions during disputes. This created potential compliance breaches and increased operational costs.",
            "persona": "Primary users included:\n• Compliance officers ensuring regulatory adherence\n• Campaign managers orchestrating outbound calls\n• Operations teams monitoring call activities\n• Quality assurance teams verifying compliance standards",
            "solution": "Engineered an automated service that integrates with the outbound campaign manager to pre-validate every call against regulatory rules. The system enforces limits like a maximum of 7 call attempts within 7 days, restricts calling during off-hours or weekends, respects opt-out requests, and halts communication in case of unresolved disputes.",
            "challenges": "• Interpreting and integrating multiple overlapping regulatory requirements\n• Ensuring real-time compliance checks without impacting campaign efficiency\n• Addressing varied consumer scenarios and edge cases\n• Balancing strict enforcement with flexible campaign management",
            "impact": "• Achieved 100% compliance in outbound campaign outreach\n• Eliminated manual errors and reduced resource dependency\n• Streamlined operations by automating complex compliance checks\n• Mitigated risks of regulatory breaches and associated penalties",
            "learnings": "• Automation is key to managing complex compliance environments efficiently\n• A deep understanding of regulatory nuances is essential for effective solution design\n• Cross-functional collaboration between compliance, IT, and operations is crucial\n• Continuous monitoring and updates are necessary to keep pace with evolving regulations"
        }
    },
    {
        "title": "Self-Serve IAM",
        "description": "Developed a self-service user management module that streamlines identity and access requests, reducing manual intervention and expediting user onboarding.",
        "image": "https://picsum.photos/400/300?random=9",
        "tags": [
            "Access Management",
            "User Management",
            "System Architecture",
        ],
        "details": {
            "overview": "Created a self-serve identity and access management module that enables users to request and receive access directly via the platform, eliminating the need for manual intervention by devops or super admins.",
            "problemStatement": "User creation was previously a manual, time-consuming process that required raising requests to super admins and having the devops team manually create users and assign roles, causing delays and inefficiencies.",
            "persona": "Primary users included:\n• Internal employees needing access to specific clients or environments\n• Business users and customer success managers (CSMs) acting as admin approvers\n• Operations teams overseeing access control and workflow efficiency",
            "solution": "Integrated an identity and access management module into the self-serve platform where users can request access via the website. Notifications are sent to designated admins or CSMs who can approve requests with a click, triggering automatic user creation and role assignment. Additionally, admins have a manual option to create users from channels like Slack or email when needed.",
            "challenges": "• Transitioning from a manual, devops-reliant process to an automated self-service model\n• Ensuring secure role assignments and reliable notification delivery\n• Integrating the new module with existing systems without disrupting operations",
            "impact": "• Significantly reduced the time required for user onboarding and role assignment\n• Eliminated manual errors and reduced operational overhead\n• Empowered business users and CSMs to manage access, leading to a more agile and responsive system",
            "learnings": "• Automating identity and access workflows can greatly enhance operational efficiency\n• Empowering business users as admins decentralizes control and speeds up approvals\n• Seamless integration and clear notifications are critical to the success of self-service platforms"
        }
    },
    {
        "title": "Unified Platform",
        "description": "Streamlined user experience by unifying authentication across multiple environments and products, enabling seamless navigation between Dev, UAT, Prod, and more.",
        "image": "https://picsum.photos/400/300?random=10",
        "tags": [
            "Unified Interface",
            "Platform Integration",
            "Single Sign-On",
        ],
        "details": {
            "overview": "Integrated diverse authentication systems into a single interface, allowing users to access multiple client environments and products with one set of credentials.",
            "problemStatement": "Each client and product had separate logins across different environments (Dev, UAT, Prod), resulting in a fragmented, cumbersome user experience and increased operational complexity.",
            "persona": "Primary users included:\n• Developers and testers managing various environments\n• Business users navigating through different product interfaces\n• IT administrators ensuring secure access control\n• Clients seeking simplified, centralized platform access",
            "solution": "Built a unified authentication system that consolidates login processes and integrates multiple environments and products into one interface. This allowed users to view and seamlessly navigate between various clients, environments, and product domains using a single set of credentials.",
            "challenges": "• Integrating disparate authentication systems across multiple platforms\n• Ensuring secure single sign-on (SSO) across varied environments\n• Balancing user-friendly navigation with robust security measures\n• Migrating legacy systems without disrupting ongoing operations",
            "impact": "• Simplified user experience by eliminating the need for multiple logins\n• Reduced operational overhead and minimized login-related errors\n• Strengthened security through centralized access control\n• Increased user satisfaction and overall productivity",
            "learnings": "• Centralizing authentication can greatly enhance operational efficiency and user experience\n• Successful integration requires meticulous planning and robust testing\n• Maintaining a balance between security and usability is crucial\n• Continuous user feedback is essential for iterative improvement of the system"
        }
    },
];

// Experience Timeline
const experienceItems = [
    {
        date: 'Sep 2024 - Present',
        title: 'Lead Product Manager',
        subtitle: 'AI Platform and Analytics',
        company: 'Interface.ai',
        logo: './assets/images/companies/interface-ai-logo.png',
        description: 'Leading scalable AI self-serve platform development with voicebots and agentic RAG chatbots. Driving analytics initiatives and partnering with stakeholders to maximize client ROI through proactive support.',
        tech: ['AI Platform', 'Analytics', 'Product Strategy', 'Conversational AI', 'SaaS']
    },
    {
        date: 'May 2021 - Aug 2024',
        title: 'Associate Director of Product Management',
        subtitle: 'AI Applications and Analytics',
        company: 'Skit.ai',
        logo: './assets/images/companies/skit-ai-logo.png',
        description: 'Built four flagship Voice AI products. Proposed and Built self-serve AI platform reducing go-live time by 90% and resource requirement by 80%. Launched voice AI application generating $800K ARR within six months of launch.',
        tech: ['Voice AI', 'Conversational AI', 'Product Management', 'Product Management', 'Product Strategy','GTM','SaaS']
    },
    {
        date: 'Apr 2018 - May 2021',
        title: 'Senior Manager',
        subtitle: 'Product Implementation and Consulting',
        company: 'Realization Technologies',
        logo: './assets/images/companies/realization-logo.png',
        description: 'Led enterprise-scale project management software and consulting implementation. Improved operational efficiency with 20% faster project delivery through strategic roadmaps and stakeholder collaboration.',
        tech: ['Project Management Software', 'Enterprise Solutions', 'Consulting', 'SaaS']
    },
    {
        date: 'Apr 2017 - Mar 2018',
        title: 'MBA - Post Graduate Diploma in Management',
        subtitle: 'Strategy and Finance',
        company: 'IIM Calcutta',
        logo: './assets/images/companies/iim-c-logo.png',
        description: 'Completed full-time on-campus MBA from premier management institution. Active member of photography club, volleyball team, and participated in various case competitions.',
        tech: ['Management', 'Strategy', 'Finance']
    },
    {
        date: 'Aug 2011 - Mar 2017',
        title: 'Senior Executive Engineer',
        subtitle: 'Product Development',
        company: 'Siemens Ltd.',
        logo: './assets/images/companies/siemens-logo.png',
        description: 'Managed and worked on product development, ensuring technical compliance and quality. Led international cross-functional teams and established standard operating procedures.',
        tech: ['Product Development', 'Technical Compliance', 'Team Lead']
    },
    {
        date: 'Jul 2007 - May 2011',
        title: 'Bachelor of Engineering',
        subtitle: 'Mechanical Engineering',
        company: 'North Gujarat University',
        logo: './assets/images/companies/ngu-logo.png',
        description: 'Founded GATE club and organized national technical festival. Active in sports representing college in volleyball tournaments.',
        tech: ['Engineering', 'Leadership', 'Sports']
    }
];

// Hobbies
const hobbyItems = [
    {
        title: 'Photography',
        icon: '📸',
        description: 'Capturing moments and exploring visual storytelling',
        dataHobby: 'photography'
    },
    {
        title: 'Travel',
        icon: '✈️',
        description: 'Exploring new cultures and gathering diverse perspectives',
        dataHobby: 'travel'
    },
    {
        title: 'Reading',
        icon: '📚',
        description: 'Always learning through books on technology and innovation',
        dataHobby: 'reading'
    },
    {
        title: 'Sports',
        icon: '🏃‍♂️',
        description: 'Staying active and connecting with nature',
        dataHobby: 'sports'
    }
];

// Travel Destinations with Unsplash image URLs
const travelDestinations = [
    { city: 'Paris', country: 'France', imageUrl: 'assets/images/travel/Paris.jpg' },
    { city: 'Rome', country: 'Italy', imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80' },
    { city: 'Amsterdam', country: 'Netherlands', imageUrl: 'assets/images/travel/Amsterdam.jpg' },
    { city: 'Brussels', country: 'Belgium', imageUrl: 'https://images.unsplash.com/photo-1559113202-c916b8e44373?w=800&q=80' },
    { city: 'Venice', country: 'Italy', imageUrl: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80' },
    { city: 'Dusseldorf', country: 'Germany', imageUrl: 'assets/images/travel/dusseldorf.jpg' },
    { city: 'Koln', country: 'Germany', imageUrl: 'assets/images/travel/cologne.jpg' },
    { city: 'Berlin', country: 'Germany', imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80' },
    { city: 'Eindhoven', country: 'Netherlands', imageUrl: 'https://images.unsplash.com/photo-1558000143-a78f8299c40b?w=800&q=80' },
    { city: 'Dubai', country: 'UAE', imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80' },
    { city: 'Goa', country: 'India', imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80' },
    { city: 'Munnar', country: 'India', imageUrl: 'assets/images/travel/Munnar.jpg'},
    { city: 'Gokarna', country: 'India', imageUrl: 'https://images.unsplash.com/photo-1587922546307-776227941871?w=800&q=80' },
    { city: 'Ooty', country: 'India', imageUrl: 'https://images.unsplash.com/photo-1599689019338-50deb475f380?w=800&q=80' },
    { city: 'Chikmanglur', country: 'India', imageUrl: 'assets/images/travel/chikmanglur.jpg' },
    { city: 'Udaipur', country: 'India', imageUrl: 'assets/images/travel/udaipur.jpg' },
    { city: 'Jaipur', country: 'India', imageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80' },
    { city: 'Agra', country: 'India', imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80' },
    { city: 'Kolkata', country: 'India', imageUrl: 'https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?w=800&q=80' },
    { city: 'Pune', country: 'India', imageUrl: 'https://images.unsplash.com/photo-1558383331-f520f2888351?w=800&q=80' },
    { city: 'Mumbai', country: 'India', imageUrl: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800&q=80' }
];

// Book Summaries
const bookSummaries = [
    {
        id: 'fooled-by-randomness',
        title: 'Fooled by Randomness',
        author: 'Nassim Nicholas Taleb',
        summary: `Fooled by Randomness explores the hidden role of chance in life and financial markets. Key insights include:

• The Illusion of Control
  - Humans tend to see patterns where none exist
  - Success often has more to do with luck than skill
  - We underestimate the role of randomness in our lives

• Survivorship Bias
  - We focus on visible winners while ignoring countless failures
  - Success stories can mislead us about the actual probability of success
  - The media amplifies this bias by highlighting exceptional cases

• Risk and Probability
  - People are poor at evaluating probabilistic outcomes
  - Short-term randomness can mask long-term realities
  - The difference between "ensemble probability" and time probability

• Practical Applications
  - Be humble about your abilities and knowledge
  - Focus on the process rather than outcomes
  - Build robustness against negative random events
  - Maintain skepticism toward apparent patterns

The book challenges our intuitions about causality and success, showing how randomness influences outcomes more than we'd like to admit. It advocates for a more nuanced understanding of probability and risk in decision-making.`
    },
    {
        id: 'inspired',
        title: 'Inspired',
        author: 'Marty Cagan',
        summary: `Inspired provides a comprehensive framework for creating successful tech products. Key takeaways:

• Product Team Structure
  - Product, design, and engineering form the core team
  - Cross-functional collaboration is essential
  - Empower teams to solve customer problems

• Product Discovery
  - Focus on solving real customer problems
  - Test ideas before building them
  - Use prototypes to validate assumptions
  - Embrace continuous discovery and delivery

• Four Critical Risks
  - Value Risk: Will customers buy it?
  - Usability Risk: Can users figure out how to use it?
  - Feasibility Risk: Can we build it?
  - Business Viability Risk: Does it work for our business?

• Product Culture
  - Hire product managers who are curious and passionate
  - Focus on outcomes rather than output
  - Create a culture of experimentation and learning
  - Balance innovation with execution

The book emphasizes that great products come from strong teams, customer focus, and a culture of continuous learning and iteration. It provides practical techniques for product discovery and delivery that have been proven in top tech companies.`
    },
    {
        id: 'crossing-the-chasm',
        title: 'Crossing the Chasm',
        author: 'Geoffrey A. Moore',
        summary: `Crossing the Chasm addresses the challenges of marketing disruptive tech products. Core concepts:

• Technology Adoption Lifecycle
  - Innovators: Tech enthusiasts who love new products
  - Early Adopters: Visionaries who see strategic advantage
  - Early Majority: Pragmatists who want proven solutions
  - Late Majority: Conservatives who wait for standards
  - Laggards: Skeptics who avoid new technology

• The Chasm
  - Gap between early adopters and early majority
  - Most challenging transition for tech companies
  - Requires different marketing and sales strategies

• Crossing Strategy
  - Choose a specific target market niche
  - Develop a complete solution for that niche
  - Dominate that niche to build references
  - Use that success to expand to adjacent markets

• Practical Steps
  - Focus on one segment at a time
  - Create a compelling whole product solution
  - Position against the market alternative
  - Build strong word-of-mouth references

The book provides a strategic framework for successfully marketing high-tech products to mainstream customers, emphasizing the importance of focus and market segmentation.`
    },
    {
        id: 'zero-to-one',
        title: 'Zero to One',
        author: 'Peter Thiel',
        summary: `Zero to One presents unique insights about innovation and building valuable startups. Key themes:

• Vertical vs Horizontal Progress
  - Horizontal: Copying things that work (1 to n)
  - Vertical: Creating something new (0 to 1)
  - True innovation comes from going from 0 to 1

• Monopoly vs Competition
  - Competition is destructive to profits
  - Aim to create monopolies through innovation
  - Build unique advantages that others can't copy

• Startup Principles
  - Better to be bold than trivial
  - Focus on proprietary technology
  - Every great business is built around a secret
  - Start small and monopolize a niche market

• Building the Future
  - Planning is essential
  - The future won't build itself
  - Small groups of people can achieve great things
  - Focus on doing one thing exceptionally well

The book challenges conventional wisdom about competition and encourages entrepreneurs to pursue unique, innovative ideas that create new markets rather than competing in existing ones.`
    },
    {
        id: 'hooked',
        title: 'Hooked',
        author: 'Nir Eyal',
        summary: `Hooked explains how to build habit-forming products using the Hook Model. Key components:

• The Hook Model
  - Trigger: External or internal cue to action
  - Action: Simple behavior in anticipation of reward
  - Variable Reward: Satisfying need while maintaining engagement
  - Investment: User puts in effort that increases likelihood of returning

• Types of Triggers
  - External: Advertising, emails, notifications
  - Internal: Emotions, routines, situations, places

• Variable Rewards
  - Tribe: Social rewards and acceptance
  - Hunt: Search for resources and information
  - Self: Personal gratification and mastery

• Practical Applications
  - Focus on intrinsic motivators
  - Make the action as simple as possible
  - Create variable rewards that align with user needs
  - Get users to invest time and data

The book provides a framework for building ethical, habit-forming products that solve real user needs while creating sustainable engagement patterns.`
    },
    {
        id: 'lean-startup',
        title: 'The Lean Startup',
        author: 'Eric Ries',
        summary: `The Lean Startup introduces a scientific approach to creating and managing startups. Core principles:

• Build-Measure-Learn
  - Create minimum viable products (MVPs)
  - Test assumptions quickly
  - Learn from customer feedback
  - Iterate based on learnings

• Validated Learning
  - Test every element of your vision
  - Use actionable metrics
  - Run controlled experiments
  - Make data-driven decisions

• Innovation Accounting
  - Define baseline metrics
  - Tune the engine
  - Pivot or persevere based on progress

• Key Concepts
  - Minimum Viable Product (MVP)
  - Continuous Deployment
  - Split Testing
  - Actionable Metrics vs Vanity Metrics
  - Pivot when necessary

The book emphasizes the importance of rapid experimentation, customer feedback, and iterative development in creating successful startups. It provides practical tools for reducing waste and increasing the odds of success.`
    }
];

// Portfolio overlay functionality
const portfolioOverlay = document.getElementById('portfolio-overlay');
const portfolioBackdrop = document.getElementById('portfolio-backdrop');
const portfolioOverlayCloseBtn = portfolioOverlay.querySelector('.overlay-close-btn');
const portfolioContent = portfolioOverlay.querySelector('.gallery-content');

// Close portfolio overlay function
function closePortfolioOverlay() {
    portfolioOverlay.classList.remove('active');
    portfolioBackdrop.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners for closing portfolio overlay
portfolioOverlayCloseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closePortfolioOverlay();
});

// Close when clicking on the backdrop
portfolioBackdrop.addEventListener('click', () => {
    closePortfolioOverlay();
});

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && portfolioOverlay.classList.contains('active')) {
        closePortfolioOverlay();
    }
});

// Portfolio Modal Functions
const openPortfolioModal = (item) => {
    const modal = document.querySelector('.portfolio-modal');
    const modalTitle = modal.querySelector('.project-title');
    const problemStatement = modal.querySelector('.problem-statement');
    const persona = modal.querySelector('.persona');
    const solution = modal.querySelector('.solution');
    const challenges = modal.querySelector('.challenges');
    const impact = modal.querySelector('.impact');
    const tags = modal.querySelector('.tags');
    const learnings = modal.querySelector('.learnings');
    
    // Populate modal content
    modalTitle.textContent = item.title;
    problemStatement.textContent = item.details?.problemStatement || item.description;
    persona.textContent = item.details?.persona || 'Project details coming soon...';
    solution.textContent = item.details?.solution || 'Project details coming soon...';
    challenges.textContent = item.details?.challenges || 'Project details coming soon...';
    impact.textContent = item.details?.impact || 'Project details coming soon...';
    learnings.textContent = item.details?.learnings || 'Project details coming soon...';
    tags.innerHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closePortfolioModal = () => {
    const modal = document.querySelector('.portfolio-modal');
    modal.classList.remove('active');
    // Only restore body scroll if portfolio overlay is not active
    if (!document.getElementById('portfolio-overlay').classList.contains('active')) {
        document.body.style.overflow = '';
    }
};

// Initialize Portfolio Modal
const initPortfolioModal = () => {
    const modal = document.querySelector('.portfolio-modal');
    const closeBtn = modal.querySelector('.modal-close-btn');
    const modalContent = modal.querySelector('.modal-content');
    
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closePortfolioModal();
    });
    
    // Close when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closePortfolioModal();
        }
    });
    
    // Prevent clicks inside modal content from closing the modal
    modalContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal.classList.contains('active')) {
                closePortfolioModal();
            }
        }
    });
};

// Populate Portfolio Section
const populatePortfolio = () => {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const viewMoreBtn = document.querySelector('.view-more-btn');
    
    // Only show first 3 items in main section
    const renderInitialPortfolioItems = () => {
        portfolioGrid.innerHTML = '';
        
        portfolioItems.slice(0, 3).forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            
            // Check if this is a special project with CTA buttons
            const ctaButtons = item.isSpecialProject ? `
                <div class="cta-buttons">
                    <a href="${item.chatUrl}" target="_blank" class="cta-btn chat-btn">
                        <i class="fas fa-comments"></i> Chat
                    </a>
                    <a href="${item.docsUrl}" target="_blank" class="cta-btn docs-btn">
                        <i class="fas fa-book"></i> Docs
                    </a>
                </div>
            ` : '';

            portfolioItem.innerHTML = `
                <div class="portfolio-content">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="portfolio-info">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <div class="tags">
                            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        ${ctaButtons}
                    </div>
                </div>
            `;
            
            // Add click handler for modal, but prevent CTA button clicks from triggering it
            portfolioItem.addEventListener('click', (e) => {
                // Don't open modal if clicking on CTA buttons
                if (!e.target.closest('.cta-btn')) {
                    openPortfolioModal(item);
                }
            });
            
            portfolioGrid.appendChild(portfolioItem);
        });
    };

    // Initial render with first 3 items
    renderInitialPortfolioItems();

    // Handle view more button click - open overlay
    viewMoreBtn.addEventListener('click', () => {
        portfolioOverlay.classList.add('active');
        portfolioBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
        populatePortfolioGridOverlay();
    });
};

// Function to populate the overlay grid with ALL portfolio items
function populatePortfolioGridOverlay() {
    const portfolioGridOverlay = document.querySelector('.portfolio-grid-overlay');
    portfolioGridOverlay.innerHTML = '';
    
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        // Check if this is a special project with CTA buttons
        const ctaButtons = item.isSpecialProject ? `
            <div class="cta-buttons">
                <a href="${item.chatUrl}" target="_blank" class="cta-btn chat-btn">
                    <i class="fas fa-comments"></i> Chat
                </a>
                <a href="${item.docsUrl}" target="_blank" class="cta-btn docs-btn">
                    <i class="fas fa-book"></i> Docs
                </a>
            </div>
        ` : '';

        portfolioItem.innerHTML = `
            <div class="portfolio-content">
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <div class="tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    ${ctaButtons}
                </div>
            </div>
        `;

        // Add click handler for modal, but prevent CTA button clicks from triggering it
        portfolioItem.addEventListener('click', (e) => {
            // Don't open modal if clicking on CTA buttons
            if (!e.target.closest('.cta-btn')) {
                openPortfolioModal(item);
            }
        });

        portfolioGridOverlay.appendChild(portfolioItem);
    });
}

// Populate Experience Timeline
const populateExperience = () => {
    const timeline = document.querySelector('.timeline');
    
    experienceItems.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3 class="timeline-title">${item.title}</h3>
                    <div class="timeline-subtitle">${item.subtitle}</div>
                </div>
                <p class="timeline-description">${item.description}</p>
                <div class="timeline-tech">
                    ${item.tech.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
            <div class="timeline-marker">
                <img src="${item.logo}" alt="${item.company} logo" class="company-logo">
            </div>
            <div class="timeline-marker-info">
                <span class="timeline-marker-date">${item.date}</span>
                <span class="timeline-marker-company">${item.company}</span>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
};

// Populate Hobbies Section
const populateHobbies = () => {
    const hobbiesGrid = document.querySelector('.hobbies-grid');
    if (!hobbiesGrid) return;

    hobbyItems.forEach(item => {
        const hobbyItem = document.createElement('div');
        hobbyItem.className = 'hobby-item';
        
        // Add data-hobby attribute if it exists
        if (item.dataHobby) {
            hobbyItem.setAttribute('data-hobby', item.dataHobby);
        }
        
        hobbyItem.innerHTML = `
            <div class="hobby-content">
                <div class="hobby-icon">${item.icon}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        hobbiesGrid.appendChild(hobbyItem);
    });
};

// Handle Contact Form
const handleContactForm = () => {
    // Removed duplicate handler since it's handled in contact.js
};

// Gallery Overlay Functionality
const initGalleryOverlay = () => {
    const photographyOverlay = document.querySelector('#photography-overlay');
    const travelOverlay = document.querySelector('#travel-overlay');
    const readingOverlay = document.querySelector('#reading-overlay');
    const overlayCloseBtns = document.querySelectorAll('.overlay-close-btn');
    const photographyContainer = photographyOverlay.querySelector('.gallery-container');
    const travelContainer = travelOverlay.querySelector('.gallery-container');
    const modal = document.querySelector('.gallery-modal');
    const modalImg = modal.querySelector('img');
    const modalCloseBtn = modal.querySelector('.modal-close-btn');
    const prevBtn = modal.querySelector('.modal-prev-btn');
    const nextBtn = modal.querySelector('.modal-next-btn');
    let currentIndex = 0;
    let galleryItems = [];

    // Function to load photos
    const loadPhotos = async () => {
        try {
            // Define the list of photos we know exist in the directory
            const photos = [
                { src: './assets/images/photography/IMG_9401.jpg', alt: 'Photography 1' },
                { src: './assets/images/photography/IMG_7214.jpg', alt: 'Photography 2' },
                { src: './assets/images/photography/IMG_5432.jpg', alt: 'Photography 3' },
                { src: './assets/images/photography/IMG_3285.JPG', alt: 'Photography 4' },
                { src: './assets/images/photography/IMG_3286.JPG', alt: 'Photography 5' },
                { src: './assets/images/photography/IMG_2953.JPG', alt: 'Photography 6' },
                { src: './assets/images/photography/IMG_2773.JPG', alt: 'Photography 7' },
                { src: './assets/images/photography/IMG_2770.JPG', alt: 'Photography 8' },
                { src: './assets/images/photography/IMG_2663.JPG', alt: 'Photography 9' },
                { src: './assets/images/photography/IMG_2594.JPG', alt: 'Photography 10' },
                { src: './assets/images/photography/IMG_2593.JPG', alt: 'Photography 11' },
                { src: './assets/images/photography/IMG_2592.JPG', alt: 'Photography 12' },
                { src: './assets/images/photography/IMG_2482.JPG', alt: 'Photography 13' },
                { src: './assets/images/photography/IMG_2172.JPG', alt: 'Photography 14' },
                { src: './assets/images/photography/IMG_1498.JPG', alt: 'Photography 15' },
                { src: './assets/images/photography/FullSizeRender.jpg', alt: 'Photography 16' },
                { src: './assets/images/photography/9.JPG', alt: 'Photography 17' },
                { src: './assets/images/photography/62791AFF-531E-4EF0-AC15-E20862A146BC.jpg', alt: 'Photography 18' }
            ];

            console.log('Loading photos:', photos);
            return photos;

        } catch (error) {
            console.error('Error loading photos:', error);
            return [];
        }
    };

    // Function to load sports images
    const loadSportsImages = async () => {
        try {
            const response = await fetch('assets/images/sports');
            if (!response.ok) {
                throw new Error('Directory listing not available');
            }
            const data = await response.text();
            
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const links = Array.from(doc.querySelectorAll('a'));
            
            const imageFiles = links
                .map(link => link.href)
                .filter(href => /\.(jpg|jpeg|png|gif)$/i.test(href))
                .map(href => {
                    const filename = href.split('/').pop();
                    return {
                        src: `assets/images/sports/${filename}`,
                        alt: filename.split('.')[0].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
                    };
                });

            return imageFiles;
        } catch (error) {
            console.error('Error loading sports images:', error);
            return [];
        }
    };

    // Function to create photography gallery items
    const createPhotographyItems = (photos) => {
        const photographyContainer = document.querySelector('#photography-overlay .gallery-container');
        if (!photographyContainer) {
            console.error('Photography container not found');
            return;
        }

        // Clear existing content
        photographyContainer.innerHTML = '';
        
        if (!photos || photos.length === 0) {
            photographyContainer.innerHTML = '<p>No photos available</p>';
            return;
        }

        // Create and append photo items
        photos.forEach((photo, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            
            // Create image element with loading state
            const img = document.createElement('img');
            img.className = 'loading';
            img.src = photo.src;
            img.alt = photo.alt;
            img.loading = 'lazy';
            
            // Handle image load
            img.onload = () => {
                img.classList.remove('loading');
            };
            
            // Handle image error
            img.onerror = () => {
                console.error('Failed to load image:', photo.src);
                img.classList.remove('loading');
                img.src = 'https://picsum.photos/800/800?random=' + (index + 1);
                img.alt = 'Placeholder Image';
            };
            
            // Add click handler for fullscreen view
            item.addEventListener('click', () => {
                currentIndex = index;
                showFullSizePhoto(photo);
            });
            
            // Append elements
            item.appendChild(img);
            photographyContainer.appendChild(item);
        });
        
        // Store photos for modal navigation
        galleryItems = photos;
    };

    // Function to show full-size photo
    const showFullSizePhoto = (photo) => {
        const modal = document.querySelector('.gallery-modal');
        if (!modal) return;

        const modalImg = modal.querySelector('img');
        if (!modalImg) return;

        modalImg.src = photo.src;
        modalImg.alt = photo.alt;
        modal.style.display = 'flex';
    };

    // Function to create travel gallery items
    const createTravelItems = () => {
        travelContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();
        
        travelDestinations.forEach(destination => {
            const travelItem = document.createElement('div');
            travelItem.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = destination.imageUrl;
            img.alt = `${destination.city}, ${destination.country}`;
            img.loading = 'lazy';
            
            const photoInfo = document.createElement('div');
            photoInfo.className = 'photo-info';
            
            const h3 = document.createElement('h3');
            h3.textContent = destination.city;
            
            const p = document.createElement('p');
            p.textContent = destination.country;
            
            photoInfo.appendChild(h3);
            photoInfo.appendChild(p);
            travelItem.appendChild(img);
            travelItem.appendChild(photoInfo);
            
            fragment.appendChild(travelItem);
        });
        
        travelContainer.appendChild(fragment);
    };

    // Function to create sports gallery items
    const createSportsItems = (sports) => {
        const sportsGrid = document.querySelector('.sports-grid');
        if (!sportsGrid) return;

        sportsGrid.innerHTML = '';
        sports.forEach(sport => {
            const sportItem = document.createElement('div');
            sportItem.className = 'sport-tile';
            sportItem.innerHTML = `
                <div class="sport-icon">
                    <img src="${sport.src}" alt="${sport.alt}">
                </div>
                <div class="sport-info">
                    <h3>${sport.alt}</h3>
                </div>
            `;
            sportsGrid.appendChild(sportItem);
        });
    };

    // Initialize reading overlay
    const initReadingOverlay = () => {
        const readingCloseBtn = readingOverlay.querySelector('.overlay-close-btn');
        const readingContent = readingOverlay.querySelector('.reading-content');
        const bookModal = document.createElement('div');
        bookModal.className = 'book-modal';
        document.body.appendChild(bookModal);

        // Create book modal HTML
        bookModal.innerHTML = `
            <div class="book-modal-content">
                <button class="modal-close-btn">&times;</button>
                <div class="book-summary-content">
                    <h2></h2>
                    <h3></h3>
                    <div class="summary"></div>
                </div>
            </div>
        `;

        // Add click handlers for book tiles
        const bookTiles = document.querySelectorAll('.book-tile');
        bookTiles.forEach(tile => {
            tile.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent click from reaching the reading overlay
                const bookTitle = tile.querySelector('h3').textContent;
                const summary = bookSummaries.find(book => book.title === bookTitle);
                
                if (summary) {
                    const modalTitle = bookModal.querySelector('h2');
                    const modalAuthor = bookModal.querySelector('h3');
                    const modalSummary = bookModal.querySelector('.summary');
                    
                    modalTitle.textContent = summary.title;
                    modalAuthor.textContent = summary.author;
                    modalSummary.innerHTML = summary.summary.replace(/\n/g, '<br>');
                    
                    bookModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Close modal when clicking close button
        const modalCloseBtn = bookModal.querySelector('.modal-close-btn');
        modalCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event from bubbling up
            bookModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close modal when clicking outside
        bookModal.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from reaching the reading overlay
            if (e.target === bookModal) {
                bookModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Prevent clicks inside modal content from closing the modal
        const modalContent = bookModal.querySelector('.book-modal-content');
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from reaching the reading overlay
        });

        // Add keyboard escape support for book modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && bookModal.classList.contains('active')) {
                e.stopPropagation(); // Prevent escape from closing reading overlay
                bookModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Add click event to the Reading hobby item
        const readingHobbyItem = document.querySelector('[data-hobby="reading"]');
        if (readingHobbyItem) {
            readingHobbyItem.addEventListener('click', () => {
                readingOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }

        // Close reading overlay when clicking close button
        if (readingCloseBtn) {
            readingCloseBtn.addEventListener('click', () => {
                readingOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Close reading overlay when clicking outside content
        readingOverlay.addEventListener('click', (e) => {
            // Check if the click is outside the content area
            if (e.target === readingOverlay) {
                readingOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Prevent clicks inside content from closing the overlay
        readingContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    };

    // Initialize all overlays
    initReadingOverlay();

    // Event delegation for opening gallery and handling outside clicks
    document.addEventListener('click', async (e) => {
        const hobbyCard = e.target.closest('[data-hobby]');
        
        if (hobbyCard) {
            e.preventDefault();
            const hobbyType = hobbyCard.getAttribute('data-hobby');
            let overlay;
            
            switch(hobbyType) {
                case 'photography':
                    overlay = photographyOverlay;
                    break;
                case 'travel':
                    overlay = travelOverlay;
                    break;
                case 'reading':
                    overlay = readingOverlay;
                    break;
                case 'sports':
                    overlay = document.querySelector('#sports-overlay');
                    break;
                default:
                    return;
            }
            
            // Get the clicked element's position and dimensions
            const rect = hobbyCard.getBoundingClientRect();
            const startX = rect.left;
            const startY = rect.top;
            const startWidth = rect.width;
            const startHeight = rect.height;
            
            // Set initial transform origin based on click position
            const clickX = e.clientX - startX;
            const clickY = e.clientY - startY;
            const transformOriginX = (clickX / startWidth) * 100;
            const transformOriginY = (clickY / startHeight) * 100;
            
            // Create a clone of the clicked element for the animation
            const clone = hobbyCard.cloneNode(true);
            clone.className = 'gallery-clone';
            clone.style.left = `${startX}px`;
            clone.style.top = `${startY}px`;
            clone.style.width = `${startWidth}px`;
            clone.style.height = `${startHeight}px`;
            clone.style.transformOrigin = `${transformOriginX}% ${transformOriginY}%`;
            document.body.appendChild(clone);
            
            // Load items if not already loaded
            if (hobbyType === 'photography' && photographyContainer.children.length === 0) {
                const photos = await loadPhotos();
                createPhotographyItems(photos);
            } else if (hobbyType === 'travel' && travelContainer.children.length === 0) {
                createTravelItems();
            } else if (hobbyType === 'sports') {
                const sportsGrid = document.querySelector('.sports-grid');
                if (sportsGrid && sportsGrid.children.length === 0) {
                    const sports = await loadSportsImages();
                    createSportsItems(sports);
                }
            }
            
            // Trigger the animation sequence
            requestAnimationFrame(() => {
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                setTimeout(() => {
                    clone.classList.add('animating');
                    setTimeout(() => {
                        clone.remove();
                    }, 800);
                }, 50);
            });
        } else if (photographyOverlay.classList.contains('active') || 
                   travelOverlay.classList.contains('active') || 
                   readingOverlay.classList.contains('active') ||
                   document.querySelector('#sports-overlay').classList.contains('active')) {
            // Check if click is outside the gallery content
            const isOutsideClick = !e.target.closest('.gallery-content') && 
                                 !e.target.closest('.reading-content') &&
                                 !e.target.closest('.sports-content') &&
                                 !e.target.closest('.overlay-close-btn') &&
                                 !e.target.closest('.gallery-modal');
            
            if (isOutsideClick) {
                photographyOverlay.classList.remove('active');
                travelOverlay.classList.remove('active');
                readingOverlay.classList.remove('active');
                document.querySelector('#sports-overlay').classList.remove('active');
                document.body.style.overflow = '';
                modal.style.display = 'none';
            }
        }
    });

    // Add close button functionality
    overlayCloseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            photographyOverlay.classList.remove('active');
            travelOverlay.classList.remove('active');
            readingOverlay.classList.remove('active');
            document.querySelector('#sports-overlay').classList.remove('active');
            document.body.style.overflow = '';
            modal.style.display = 'none';
        });
    });

    // Modal navigation
    modalCloseBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        if (galleryItems.length === 0) return;
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        const item = galleryItems[currentIndex];
        modalImg.src = item.src || item.imageUrl;
    });

    nextBtn.addEventListener('click', () => {
        if (galleryItems.length === 0) return;
        currentIndex = (currentIndex + 1) % galleryItems.length;
        const item = galleryItems[currentIndex];
        modalImg.src = item.src || item.imageUrl;
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (photographyOverlay.classList.contains('active') || 
            travelOverlay.classList.contains('active') ||
            readingOverlay.classList.contains('active')) {
            if (e.key === 'Escape') {
                if (modal.style.display === 'flex') {
                    modal.style.display = 'none';
                } else {
                    photographyOverlay.classList.remove('active');
                    travelOverlay.classList.remove('active');
                    readingOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            } else if (modal.style.display === 'flex') {
                if (e.key === 'ArrowLeft') {
                    prevBtn.click();
                } else if (e.key === 'ArrowRight') {
                    nextBtn.click();
                }
            }
        }
    });
};

// Profile Modal Functions
function openProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.style.display = 'block';
    
    // Trigger reflow before adding opacity
    modal.offsetHeight;
    modal.style.opacity = '1';
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProfileModal();
        }
    });

    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProfileModal();
        }
    });
}

function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.style.opacity = '0';
    
    // Wait for transition to complete before hiding
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Match the transition duration from CSS
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populatePortfolio();
    populateExperience();
    populateHobbies();
    handleContactForm();
    initGalleryOverlay();
    initPortfolioModal();
}); 