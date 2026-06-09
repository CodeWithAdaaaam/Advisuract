const BLOB_BASE_URL = "https://nivqt5h77xnceedz.public.blob.vercel-storage.com/images/";

export interface SubService {
  title: string;
  description: string;
}

export interface OfferContent {
  title: string;
  heroTitle: string;
  heroDescription: string;
  highlights: string[];
  valuePropTitle: string;
  valuePropText: string;
  deliverTitle: string;
  deliverKeywords: string;
  deliverText: string;
  whoStartups: string[];
  whoCompanies: string[];
  services: SubService[];
  approach: string[];
}

export interface OfferEntry {
  slug: string;
  image: string;
  en: OfferContent;
  fr: OfferContent;
}

export const offers: Record<string, OfferEntry> = {
  "transformation-strategy": {
    slug: "transformation-strategy",
    image: `${BLOB_BASE_URL}transformation-strategy.jpeg`,
    en: {
      title: "Transformation & Strategy",
      heroTitle: "Turn Data & AI ambition into real business results",
      heroDescription: "We help companies define a clear Data & AI vision and transform it into an actionable roadmap that delivers measurable impact.",
      highlights: ["Strategy aligned with business goals", "Clear priorities and ROI-driven use cases", "Scalable and responsible Data & AI foundations"],
      valuePropTitle: "From vision to execution",
      valuePropText: "Many companies invest in Data & AI without a clear direction. We help you make the right strategic choices, focus on what matters, and turn Data & AI into a true growth driver.",
      deliverTitle: "What We Deliver",
      deliverKeywords: "Clarity. Structure. Impact.",
      deliverText: "Our Transformation & Strategy services are designed to move you from ideas to execution with confidence.",
      whoStartups: ["Define roadmap", "Prioritize MVP", "Build core team"],
      whoCompanies: ["Maturity assessment", "Operating model design", "Governance"],
      services: [
        { title: "Data & AI Strategy", description: "Define a clear vision aligned with business objectives. Identify where AI creates most value." },
        { title: "Maturity Assessment & Roadmap", description: "Evaluate current readiness. Receive a step-by-step roadmap with clear priorities." },
        { title: "Operating Model Design", description: "Build high-performing teams. Design roles, processes, and collaboration models." },
        { title: "Data Governance & Responsible AI", description: "Create trust. Establish standards for quality, privacy, and ethics." }
      ],
      approach: ["Assess", "Design", "Prioritize", "Execute"]
    },
    fr: {
      title: "Transformation & Stratégie",
      heroTitle: "Transformer l'ambition Data & IA en résultats commerciaux réels",
      heroDescription: "Nous aidons les entreprises à définir une vision claire de la Data & de l'IA et à la transformer en une feuille de route exploitable qui génère un impact mesurable.",
      highlights: ["Stratégie alignée sur les objectifs commerciaux", "Priorités claires et cas d'usage axés sur le ROI", "Bases Data & IA évolutives et responsables"],
      valuePropTitle: "De la vision à l'exécution",
      valuePropText: "De nombreuses entreprises investissent dans la Data & l'IA sans direction claire. Nous vous aidons à faire les bons choix stratégiques, à vous concentrer sur l'essentiel et à faire de la Data & de l'IA un véritable levier de croissance.",
      deliverTitle: "Ce que nous livrons",
      deliverKeywords: "Clarté. Structure. Impact.",
      deliverText: "Nos services de Transformation & Stratégie sont conçus pour vous faire passer des idées à l'exécution en toute confiance.",
      whoStartups: ["Définir la feuille de route", "Prioriser le MVP", "Recruter l'équipe cœur"],
      whoCompanies: ["Évaluation de la maturité", "Conception du modèle opérationnel", "Gouvernance"],
      services: [
        { title: "Stratégie Data & IA", description: "Définir une vision claire alignée sur les objectifs business. Identifier où l'IA apporte le plus de valeur." },
        { title: "Évaluation de la maturité & Feuille de route", description: "Évaluer l'état de préparation actuel. Obtenir une feuille de route étape par étape avec des priorités claires." },
        { title: "Conception de modèle opérationnel", description: "Bâtir des équipes performantes. Concevoir les rôles, les processus et les modèles de collaboration." },
        { title: "Gouvernance des données & IA responsable", description: "Créer de la confiance. Établir des normes de qualité, de confidentialité et d'éthique." }
      ],
      approach: ["Évaluer", "Concevoir", "Prioriser", "Exécuter"]
    }
  },

  "ai-innovation": {
    slug: "ai-innovation",
    image: `${BLOB_BASE_URL}ai-innovation.jpeg`,
    en: {
      title: "AI & Innovation",
      heroTitle: "Reinvent products, operations, and experiences with AI",
      heroDescription: "We help turn cutting-edge AI technologies into practical solutions that drive growth, efficiency, and differentiation.",
      highlights: ["From idea to production-ready AI", "Business-driven innovation", "Scalable and secure AI solutions"],
      valuePropTitle: "From innovation to impact",
      valuePropText: "AI innovation should deliver real business value — not just demos. We help you identify the right opportunities and scale AI across your organization.",
      deliverTitle: "What We Deliver",
      deliverKeywords: "Innovation. Speed. Measurable Value.",
      deliverText: "Our AI services accelerate adoption and turn AI into a competitive advantage.",
      whoStartups: ["Rapid prototyping", "AI Product design"],
      whoCompanies: ["AI Factory setup", "Generative AI integration"],
      services: [
        { title: "AI Use Case Ideation", description: "Identify high-impact opportunities across your organization." },
        { title: "Generative AI Solutions", description: "Build intelligent assistants, chatbots, and automated content generation." },
        { title: "Machine Learning Models", description: "Predictive and prescriptive models for operations, finance, and marketing." },
        { title: "Rapid Prototyping (AI Factory)", description: "Test and validate AI ideas quickly in weeks before scaling." }
      ],
      approach: ["Ideate", "Prototype", "Build", "Scale"]
    },
    fr: {
      title: "IA & Innovation",
      heroTitle: "Réinventer les produits, les opérations et les expériences grâce à l'IA",
      heroDescription: "Nous aidons à transformer les technologies d'IA de pointe en solutions pratiques qui stimulent la croissance, l'efficacité et la différenciation.",
      highlights: ["De l'idée à l'IA prête pour la production", "Innovation axée sur le business", "Solutions d'IA évolutives et sécurisées"],
      valuePropTitle: "De l'innovation à l'impact",
      valuePropText: "L'innovation en IA doit apporter une valeur commerciale réelle, pas seulement des démonstrations. Nous vous aidons à identifier les bonnes opportunités et à déployer l'IA à l'échelle de votre organisation.",
      deliverTitle: "Ce que nous livrons",
      deliverKeywords: "Innovation. Vitesse. Valeur mesurable.",
      deliverText: "Nos services d'IA accélèrent l'adoption et transforment l'IA en un avantage concurrentiel.",
      whoStartups: ["Prototypage rapide", "Conception de produits IA"],
      whoCompanies: ["Mise en place de l'AI Factory", "Intégration de l'IA générative"],
      services: [
        { title: "Idéation de cas d'usage de l'IA", description: "Identifier les opportunités à fort impact dans l'ensemble de votre organisation." },
        { title: "Solutions d'IA Générative", description: "Concevoir des assistants intelligents, des chatbots et de l'automatisation de génération de contenu." },
        { title: "Modèles de Machine Learning", description: "Modèles prédictifs et prescriptifs pour les opérations, les finances et le marketing." },
        { title: "Prototypage rapide (AI Factory)", description: "Tester et valider rapidement les idées d'IA en quelques semaines avant de les déployer." }
      ],
      approach: ["Imaginer", "Prototyper", "Bâtir", "Déployer"]
    }
  },

  "marketing-data-digital": {
    slug: "marketing-data-digital",
    image: `${BLOB_BASE_URL}marketing-data.jpeg`,
    en: {
      title: "Marketing, Data & Digital",
      heroTitle: "Accelerate digital growth with Data & AI",
      heroDescription: "We help scale acquisition, optimize marketing performance, and deliver personalized customer experiences.",
      highlights: ["Data-driven growth strategies", "AI-powered marketing ROI", "Automation from acquisition to retention"],
      valuePropTitle: "From digital presence to measurable growth",
      valuePropText: "Whether you are a startup looking to scale fast or an established company, we turn marketing data into a sustainable growth engine.",
      deliverTitle: "What We Deliver",
      deliverKeywords: "Growth. Performance. Automation.",
      deliverText: "Our services drive measurable results across the entire customer lifecycle.",
      whoStartups: ["Accelerate acquisition", "Validate channels quickly"],
      whoCompanies: ["Optimize spend & ROI", "Improve personalization at scale"],
      services: [
        { title: "Digital Marketing Strategy", description: "SEO, SEM, social media, and paid campaigns aligned with growth objectives." },
        { title: "Marketing Analytics & Attribution", description: "Understand what drives performance and optimize decisions." },
        { title: "Customer Personalization", description: "Use AI to segment customers and personalize journeys at scale." },
        { title: "Content & Creative Automation", description: "Produce content faster using Generative AI tailored to each audience." }
      ],
      approach: ["Analyze", "Activate", "Optimize", "Scale"]
    },
    fr: {
      title: "Marketing, Data & Digital",
      heroTitle: "Accélérer la croissance digitale avec la Data & l'IA",
      heroDescription: "Nous aidons à développer l'acquisition, à optimiser les performances marketing et à offrir des expériences client personnalisées.",
      highlights: ["Stratégies de croissance basées sur les données", "ROI marketing optimisé par l'IA", "Automatisation de l'acquisition à la fidélisation"],
      valuePropTitle: "De la présence digitale à la croissance mesurable",
      valuePropText: "Que vous soyez une startup cherchant à croître rapidement ou une entreprise établie, nous transformons vos données marketing en un moteur de croissance durable.",
      deliverTitle: "Ce que nous livrons",
      deliverKeywords: "Croissance. Performance. Automatisation.",
      deliverText: "Nos services génèrent des résultats mesurables sur l'ensemble du cycle de vie client.",
      whoStartups: ["Accélérer l'acquisition", "Valider rapidement les canaux"],
      whoCompanies: ["Optimiser les dépenses & le ROI", "Améliorer la personnalisation à l'échelle"],
      services: [
        { title: "Stratégie de marketing digital", description: "SEO, SEM, réseaux sociaux et campagnes payantes alignés sur vos objectifs de croissance." },
        { title: "Analytique marketing & Attribution", description: "Comprendre les leviers de performance et optimiser vos décisions." },
        { title: "Personnalisation client", description: "Utiliser l'IA pour segmenter les clients et personnaliser les parcours à l'échelle." },
        { title: "Automatisation de contenu & création", description: "Produire du contenu plus rapidement grâce à l'IA générative adaptée à chaque public." }
      ],
      approach: ["Analyser", "Activer", "Optimiser", "Développer"]
    }
  },

  "it-platforms": {
    slug: "it-platforms",
    image: `${BLOB_BASE_URL}it-platforms.jpeg`,
    en: {
      title: "IT & Platforms",
      heroTitle: "Build scalable, secure platforms for Data & AI",
      heroDescription: "We design modern IT platforms that enable reliable, high-performance, and secure Data & AI operations.",
      highlights: ["Scalable cloud-native architectures", "Reliable data platforms", "Security and compliance by design"],
      valuePropTitle: "From legacy systems to future-ready platforms",
      valuePropText: "Your Data & AI initiatives are only as strong as the platforms behind them. We modernize infrastructure and build robust foundations.",
      deliverTitle: "What We Deliver",
      deliverKeywords: "Scalability. Reliability. Security.",
      deliverText: "Our IT services create the technical foundation needed to run AI-powered organizations.",
      whoStartups: ["Cloud-native from day one", "Scale without overengineering"],
      whoCompanies: ["Modernize legacy systems", "Enable large-scale operations"],
      services: [
        { title: "Cloud Modernization", description: "Design flexible, cost-efficient cloud environments." },
        { title: "Data Platforms & Architecture", description: "Design and implement data lakes and warehouses." },
        { title: "API & Microservices", description: "Enable modular and scalable applications." },
        { title: "DevOps & MLOps", description: "Automate delivery and lifecycle management for models." }
      ],
      approach: ["Design", "Build", "Secure", "Scale"]
    },
    fr: {
      title: "IT & Plateformes",
      heroTitle: "Bâtir des plateformes évolutives et sécurisées pour la Data & l'IA",
      heroDescription: "Nous concevons des plateformes informatiques modernes qui permettent des opérations Data & IA fiables, performantes et sécurisées.",
      highlights: ["Architectures cloud-natives évolutives", "Plateformes de données fiables", "Sécurité et conformité dès la conception"],
      valuePropTitle: "Des systèmes existants aux plateformes d'avenir",
      valuePropText: "Vos initiatives Data & IA ne sont performantes que si les plateformes sous-jacentes le sont. Nous modernisons vos infrastructures et bâtissons des fondations solides.",
      deliverTitle: "Ce que nous livrons",
      deliverKeywords: "Évolutivité. Fiabilité. Sécurité.",
      deliverText: "Nos services IT créent le socle technique indispensable au fonctionnement des organisations propulsées par l'IA.",
      whoStartups: ["Cloud-native dès le premier jour", "Évoluer sans sur-ingénierie"],
      whoCompanies: ["Moderniser les systèmes existants", "Permettre des opérations à grande échelle"],
      services: [
        { title: "Modernisation du Cloud", description: "Concevoir des environnements cloud flexibles et rentables." },
        { title: "Plateformes de données & Architecture", description: "Concevoir et mettre en œuvre des data lakes et data warehouses." },
        { title: "API & Microservices", description: "Permettre des applications modulaires et évolutives." },
        { title: "DevOps & MLOps", description: "Automatiser la livraison et la gestion du cycle de vie des modèles." }
      ],
      approach: ["Concevoir", "Bâtir", "Sécuriser", "Développer"]
    }
  },

  "data-analytics": {
    slug: "data-analytics",
    image: `${BLOB_BASE_URL}data-analytics.jpeg`,
    en: {
      title: "Data & Analytics",
      heroTitle: "Turn data into trusted insights and better decisions",
      heroDescription: "Unlock the full value of data by building reliable foundations and actionable insights for decision-makers.",
      highlights: ["Trusted, high-quality data", "Actionable insights for teams", "Scalable analytics foundations"],
      valuePropTitle: "From raw data to business insight",
      valuePropText: "Data alone does not create value. We help you structure, govern, and analyze data so teams make faster decisions.",
      deliverTitle: "What We Deliver",
      deliverKeywords: "Trust. Insight. Action.",
      deliverText: "Our services transform data into a strategic asset across the organization.",
      whoStartups: ["Build clean foundations early", "Fast, insight-driven decisions"],
      whoCompanies: ["Centralize and govern at scale", "Enable advanced AI use cases"],
      services: [
        { title: "Data Management & Quality", description: "Clean and standardize data to ensure accuracy." },
        { title: "Business Intelligence & Dashboards", description: "Interactive dashboards and actionable reporting." },
        { title: "Advanced Analytics", description: "Answer complex business questions using statistical models." },
        { title: "Self-Service Analytics", description: "Empower users to explore data independently with governed tools." }
      ],
      approach: ["Collect", "Govern", "Analyze", "Act"]
    },
    fr: {
      title: "Data & Analytics",
      heroTitle: "Transformer les données en insights de confiance et meilleures décisions",
      heroDescription: "Libérez toute la valeur des données en établissant des bases fiables et des insights exploitables pour les décideurs.",
      highlights: ["Données de qualité et de confiance", "Insights exploitables pour les équipes", "Bases analytiques évolutives"],
      valuePropTitle: "Des données brutes aux insights business",
      valuePropText: "Les données seules ne créent pas de valeur. Nous vous aidons à structurer, gouverner et analyser vos données pour que vos équipes prennent des décisions plus rapides.",
      deliverTitle: "Ce que nous livrons",
      deliverKeywords: "Confiance. Insight. Action.",
      deliverText: "Nos services transforment les données en un actif stratégique pour toute l'organisation.",
      whoStartups: ["Bâtir des bases propres dès le début", "Décisions rapides et basées sur les insights"],
      whoCompanies: ["Centraliser et gouverner à l'échelle", "Permettre des cas d'usage d'IA avancés"],
      services: [
        { title: "Gestion & Qualité des données", description: "Nettoyer et standardiser les données pour garantir leur exactitude." },
        { title: "Business Intelligence & Tableaux de bord", description: "Tableaux de bord interactifs et rapports exploitables." },
        { title: "Analytique avancée", description: "Répondre à des questions business complexes à l'aide de modèles statistiques." },
        { title: "Analytique en libre-service", description: "Permettre aux utilisateurs d'explorer les données de manière autonome avec des outils gouvernés." }
      ],
      approach: ["Collecter", "Gouverner", "Analyser", "Agir"]
    }
  }
};