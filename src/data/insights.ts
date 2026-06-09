const BLOB_BASE = "https://nivqt5h77xnceedz.public.blob.vercel-storage.com/images/AD_";

export interface InsightBlock {
  body: string;
}

export interface InsightContent {
  category: string;
  title: string;
  excerpt: string;
  blocks: InsightBlock[];
}

export interface InsightEntry {
  slug: string;
  publishedAt: string;
  cover: string;
  en: InsightContent;
  fr: InsightContent;
}

export const insights: Record<string, InsightEntry> = {
  "ai-transforming-agriculture": {
    slug: "ai-transforming-agriculture",
    publishedAt: "2025-01-15",
    cover: `${BLOB_BASE}11.png`,
    en: {
      category: "Agriculture",
      title: "Transforming Agriculture Through Artificial Intelligence",
      excerpt: "From precision farming to automated monitoring systems, AI is reshaping how farmers and agricultural organizations operate.",
      blocks: [
        { body: "Agriculture is entering a new era powered by Artificial Intelligence. From precision farming and predictive analytics to automated monitoring systems, AI is reshaping how farmers and agricultural organizations operate." },
        { body: "By leveraging data, intelligent technologies can improve crop yields, reduce operational costs, optimize resource management, and support more sustainable farming practices." },
        { body: "Between 2025 and 2030, Advisuract aims to become a platform for innovation and knowledge-sharing in the field of Agriculture & AI. We aim to contribute to a smarter and more resilient agricultural ecosystem where technology empowers farmers, agribusinesses, researchers, and institutions." },
        { body: "Our mission is to transform agricultural data into intelligent solutions that help build the future of smart farming. Through innovation, analytics, and AI-powered technologies, Advisuract seeks to support a more efficient, sustainable, and resilient agricultural ecosystem." },
      ],
    },
    fr: {
      category: "Agriculture",
      title: "Transformer l'Agriculture par l'Intelligence Artificielle",
      excerpt: "De l'agriculture de précision aux systèmes de surveillance automatisés, l'IA remodèle le fonctionnement des agriculteurs et des organisations agricoles.",
      blocks: [
        { body: "L'agriculture entre dans une nouvelle ère propulsée par l'intelligence artificielle. De l'agriculture de précision et des analyses prédictives aux systèmes de surveillance automatisés, l'IA remodèle le fonctionnement des agriculteurs et des organisations agricoles." },
        { body: "En exploitant les données, les technologies intelligentes peuvent améliorer les rendements des cultures, réduire les coûts opérationnels, optimiser la gestion des ressources et soutenir des pratiques agricoles plus durables." },
        { body: "Entre 2025 et 2030, Advisuract ambitionne de devenir une plateforme d'innovation et de partage de connaissances dans le domaine de l'Agriculture & l'IA. Nous visons à contribuer à un écosystème agricole plus intelligent et plus résilient où la technologie donne du pouvoir aux agriculteurs, aux agro-industries, aux chercheurs et aux institutions." },
        { body: "Notre mission est de transformer les données agricoles en solutions intelligentes qui aident à construire l'avenir de l'agriculture connectée. Grâce à l'innovation, à l'analytique et aux technologies alimentées par l'IA, Advisuract cherche à soutenir un écosystème agricole plus efficace, durable et résilient." },
      ],
    },
  },

  "powering-future-with-ai": {
    slug: "powering-future-with-ai",
    publishedAt: "2025-02-10",
    cover: `${BLOB_BASE}22.png`,
    en: {
      category: "Energy",
      title: "Powering the Future with Artificial Intelligence",
      excerpt: "AI technologies are enabling organizations to improve efficiency and accelerate the transition toward sustainable energy systems.",
      blocks: [
        { body: "The energy sector is undergoing a major transformation driven by Artificial Intelligence. As global demand for energy continues to grow, AI technologies are enabling organizations to improve efficiency, optimize operations, reduce costs, and accelerate the transition toward sustainable and intelligent energy systems." },
        { body: "From predictive maintenance and smart grids to energy forecasting and resource optimization, Artificial Intelligence is reshaping how energy companies produce, distribute, and manage energy." },
        { body: "Between 2025 and 2030, Advisuract will focus on showcasing innovative applications of Artificial Intelligence in the energy sector, exploring technologies that improve operational efficiency, sustainability, and reliability across the energy value chain." },
        { body: "Our mission is to transform energy data into intelligent solutions that empower organizations to innovate, optimize operations, and support sustainable development." },
      ],
    },
    fr: {
      category: "Énergie",
      title: "Propulser l'Avenir avec l'Intelligence Artificielle",
      excerpt: "Les technologies d'IA permettent aux organisations d'améliorer leur efficacité et d'accélérer la transition vers des systèmes énergétiques durables.",
      blocks: [
        { body: "Le secteur de l'énergie traverse une transformation majeure sous l'impulsion de l'intelligence artificielle. Alors que la demande mondiale en énergie continue de croître, les technologies d'IA permettent aux organisations d'améliorer l'efficacité, d'optimiser les opérations, de réduire les coûts et d'accélérer la transition vers des systèmes énergétiques durables et intelligents." },
        { body: "De la maintenance prédictive et des réseaux intelligents (smart grids) aux prévisions énergétiques et à l'optimisation des ressources, l'intelligence artificielle redéfinit la manière dont les entreprises énergétiques produisent, distribuent et gèrent l'énergie." },
        { body: "Entre 2025 et 2030, Advisuract se concentrera sur la présentation d'applications innovantes de l'IA dans le secteur de l'énergie, en explorant les technologies qui améliorent l'efficacité opérationnelle, la durabilité et la fiabilité tout au long de la chaîne de valeur énergétique." },
        { body: "Notre mission est de transformer les données énergétiques en solutions intelligentes qui permettent aux organisations d'innover, d'optimiser leurs opérations et de soutenir le développement durable." },
      ],
    },
  },

  "ai-business-intelligence": {
    slug: "ai-business-intelligence",
    publishedAt: "2025-02-20",
    cover: `${BLOB_BASE}33.png`,
    en: {
      category: "Business Intelligence",
      title: "Transforming Decision-Making with Artificial Intelligence",
      excerpt: "AI technologies enable companies to transform data into meaningful insights that support smarter, faster, and more strategic decision-making.",
      blocks: [
        { body: "Business Intelligence is evolving rapidly through the power of Artificial Intelligence. Organizations today generate massive amounts of data, and AI technologies are enabling companies to transform this data into meaningful insights that support smarter, faster, and more strategic decision-making." },
        { body: "By combining Business Intelligence with Artificial Intelligence, organizations can analyze complex datasets, identify patterns, automate reporting, forecast trends, and optimize business operations." },
        { body: "Between 2025 and 2030, Advisuract will focus on exploring and showcasing innovative AI applications in Business Intelligence, demonstrating how intelligent technologies can help organizations unlock the full potential of their data." },
        { body: "Our mission is to transform business data into actionable intelligence that empowers organizations to make smarter, faster, and more informed decisions." },
      ],
    },
    fr: {
      category: "Business Intelligence",
      title: "Transformer la Prise de Décision par l'IA",
      excerpt: "Les technologies d'IA permettent aux entreprises de transformer les données en insights significatifs pour une prise de décision plus stratégique.",
      blocks: [
        { body: "La Business Intelligence évolue rapidement grâce à la puissance de l'IA. Les organisations génèrent aujourd'hui des volumes massifs de données, et les technologies d'IA permettent de transformer ces données en insights exploitables pour une prise de décision plus intelligente et plus rapide." },
        { body: "En combinant la BI et l'IA, les organisations peuvent analyser des jeux de données complexes, identifier des schémas, automatiser les rapports et prévoir les tendances pour optimiser les opérations commerciales." },
        { body: "Entre 2025 et 2030, Advisuract explorera les applications innovantes de l'IA en BI, démontrant comment les technologies intelligentes aident à libérer tout le potentiel des données." },
        { body: "Notre mission est de transformer les données d'entreprise en intelligence exploitable pour permettre aux organisations de prendre des décisions plus éclairées." },
      ],
    },
  },

  "ai-financial-services": {
    slug: "ai-financial-services",
    publishedAt: "2025-03-05",
    cover: `${BLOB_BASE}44.png`,
    en: {
      category: "Finance",
      title: "Transforming Financial Services with Artificial Intelligence",
      excerpt: "From fraud detection and algorithmic trading to predictive analytics, AI is reshaping how financial institutions operate.",
      blocks: [
        { body: "The financial sector is undergoing a major transformation driven by Artificial Intelligence. Financial institutions today face increasing complexity, growing volumes of data, evolving customer expectations, and rapidly changing markets." },
        { body: "From fraud detection and algorithmic trading to predictive analytics and intelligent customer support, Artificial Intelligence is reshaping how financial institutions operate and create value." },
        { body: "Between 2025 and 2030, Advisuract will focus on exploring and showcasing innovative AI applications in finance, demonstrating how intelligent technologies can improve efficiency, security, performance, and decision-making across financial institutions." },
        { body: "Our mission is to transform complex financial data into actionable intelligence that empowers institutions to innovate, optimize performance, and build more resilient financial systems." },
      ],
    },
    fr: {
      category: "Finance",
      title: "Transformer les Services Financiers par l'IA",
      excerpt: "De la détection de fraude au trading algorithmique, l'IA redéfinit le mode de fonctionnement des institutions financières.",
      blocks: [
        { body: "Le secteur financier traverse une transformation majeure portée par l'intelligence artificielle. Les institutions font face à une complexité croissante et des volumes de données massifs." },
        { body: "De la détection des fraudes au trading algorithmique, l'IA permet d'améliorer la gestion des risques et de personnaliser les services financiers pour les clients." },
        { body: "Entre 2025 et 2030, Advisuract mettra en lumière des applications concrètes de l'IA dans la finance pour améliorer la sécurité et la performance opérationnelle." },
        { body: "Notre mission est de transformer les données financières complexes en intelligence stratégique pour bâtir des systèmes financiers plus résilients." },
      ],
    },
  },

  "ai-healthcare-pharmaceuticals": {
    slug: "ai-healthcare-pharmaceuticals",
    publishedAt: "2025-03-20",
    cover: `${BLOB_BASE}55.png`,
    en: {
      category: "Healthcare",
      title: "Transforming Healthcare Through Artificial Intelligence",
      excerpt: "From drug discovery to personalized medicine, AI is reshaping how healthcare services are delivered and pharmaceutical research is conducted.",
      blocks: [
        { body: "The healthcare and pharmaceutical sectors are undergoing a major transformation powered by Artificial Intelligence. AI technologies are enabling healthcare providers, researchers, and pharmaceutical companies to improve patient outcomes, accelerate innovation, and optimize operational efficiency." },
        { body: "From drug discovery and medical imaging to predictive analytics and personalized medicine, Artificial Intelligence is reshaping how healthcare services are delivered and how pharmaceutical research is conducted." },
        { body: "Between 2025 and 2030, Advisuract will focus on exploring innovative AI applications in healthcare, demonstrating how intelligent technologies can create more efficient, accessible, and data-driven healthcare systems." },
        { body: "Our mission is to transform healthcare and pharmaceutical data into actionable intelligence that empowers organizations to deliver better care, accelerate innovation, and improve medical outcomes." },
      ],
    },
    fr: {
      category: "Santé",
      title: "Transformer la Santé par l'IA",
      excerpt: "De la découverte de médicaments à la médecine personnalisée, l'IA redéfinit la prestation des soins et la recherche pharmaceutique.",
      blocks: [
        { body: "Les secteurs de la santé et de la pharmacie vivent une mutation profonde. L'IA permet d'améliorer les résultats pour les patients et d'optimiser l'efficacité opérationnelle des hôpitaux." },
        { body: "L'imagerie médicale et l'analytique prédictive permettent des diagnostics plus précoces et des traitements beaucoup plus ciblés pour chaque individu." },
        { body: "D'ici 2030, Advisuract s'engage à promouvoir des solutions technologiques pour créer des systèmes de santé plus accessibles et basés sur l'intelligence des données." },
        { body: "Notre mission est d'accélérer l'innovation médicale pour offrir des soins de meilleure qualité partout dans le monde." },
      ],
    },
  },

  "ai-telecommunications": {
    slug: "ai-telecommunications",
    publishedAt: "2025-04-01",
    cover: `${BLOB_BASE}66.png`,
    en: {
      category: "Telecommunications",
      title: "Transforming Connectivity Through Artificial Intelligence",
      excerpt: "AI is driving the next evolution of telecommunications by enabling smarter, faster, and more reliable communication systems.",
      blocks: [
        { body: "The telecommunications industry is at the center of global digital transformation, connecting people, businesses, and technologies across the world. As networks become more complex and data volumes continue to grow, Artificial Intelligence is driving the next evolution of telecommunications." },
        { body: "From network optimization and predictive maintenance to cybersecurity and customer experience, AI technologies are helping telecom operators improve efficiency, reduce operational costs, and deliver intelligent digital services." },
        { body: "Between 2025 and 2030, Advisuract will focus on exploring how AI can improve network performance, strengthen security, and support the evolution of next-generation communication systems." },
        { body: "Our mission is to transform telecommunications data into actionable intelligence that empowers operators to innovate, optimize performance, and deliver seamless communication experiences." },
      ],
    },
    fr: {
      category: "Télécommunications",
      title: "Transformer la Connectivité par l'IA",
      excerpt: "L'IA pilote la prochaine évolution des télécoms en permettant des systèmes de communication plus intelligents et plus fiables.",
      blocks: [
        { body: "L'industrie des télécoms est au cœur de la transformation digitale mondiale. Avec l'augmentation des volumes de données, l'IA devient indispensable pour gérer les réseaux modernes." },
        { body: "De l'optimisation des réseaux à la cybersécurité, les technologies d'IA aident les opérateurs à réduire les coûts tout en améliorant l'expérience client." },
        { body: "Advisuract se concentre sur le soutien à l'évolution des infrastructures de communication de nouvelle génération via l'automatisation intelligente." },
        { body: "Notre mission est de permettre aux opérateurs de délivrer des expériences de connectivité transparentes et ultra-performantes." },
      ],
    },
  },

  "ai-manufacturing": {
    slug: "ai-manufacturing",
    publishedAt: "2025-04-15",
    cover: `${BLOB_BASE}77.png`,
    en: {
      category: "Manufacturing",
      title: "Transforming Manufacturing Through Artificial Intelligence",
      excerpt: "From predictive maintenance to intelligent automation, AI is reshaping how modern manufacturing systems operate.",
      blocks: [
        { body: "The manufacturing industry is undergoing a major transformation powered by Artificial Intelligence. As factories become increasingly connected and data-driven, AI technologies are enabling manufacturers to improve operational efficiency, optimize production processes, reduce costs, and enhance product quality." },
        { body: "From predictive maintenance and intelligent automation to quality control and supply chain optimization, Artificial Intelligence is reshaping how modern manufacturing systems operate." },
        { body: "Between 2025 and 2030, Advisuract will focus on exploring innovative AI applications in manufacturing, demonstrating how intelligent technologies can transform industrial operations and support smarter, more connected factories." },
        { body: "Our mission is to transform industrial data into actionable intelligence that empowers manufacturers to innovate, optimize operations, and build smarter production systems." },
      ],
    },
    fr: {
      category: "Industrie",
      title: "Transformer l'Industrie par l'IA",
      excerpt: "De la maintenance prédictive à l'automatisation intelligente, l'IA redéfinit le fonctionnement des systèmes de fabrication modernes.",
      blocks: [
        { body: "L'industrie manufacturière vit une révolution. Les usines deviennent connectées et pilotées par les données pour améliorer la qualité des produits et réduire les déchets." },
        { body: "La maintenance prédictive permet d'anticiper les pannes avant qu'elles ne surviennent, garantissant ainsi une production continue et efficace." },
        { body: "Advisuract accompagne la transformation vers l'Industrie 4.0 en déployant des systèmes de production plus intelligents et plus durables." },
        { body: "Notre mission est de donner aux fabricants les outils pour innover et rester compétitifs dans un marché globalisé." },
      ],
    },
  },

  "ai-entertainment-gaming-sports": {
    slug: "ai-entertainment-gaming-sports",
    publishedAt: "2025-05-01",
    cover: `${BLOB_BASE}88.png`,
    en: {
      category: "Entertainment",
      title: "Transforming Creativity, Performance, and Experiences Through AI",
      excerpt: "AI is creating more immersive, personalized, and intelligent experiences across entertainment, gaming, and sports.",
      blocks: [
        { body: "Artificial Intelligence is revolutionizing the worlds of entertainment, gaming, and sports by creating more immersive, personalized, and intelligent experiences. AI is enabling organizations, creators, developers, and sports professionals to enhance performance, optimize operations, and deliver innovative experiences worldwide." },
        { body: "From personalized content recommendations and intelligent game design to athlete performance analytics and fan engagement, AI technologies are reshaping how these industries create value and connect with people." },
        { body: "Between 2025 and 2030, Advisuract will focus on exploring innovative AI applications across entertainment, gaming, and sports, highlighting how intelligent technologies can create more engaging experiences and optimize performance." },
        { body: "Our mission is to bridge technology with creativity and performance by transforming data into actionable intelligence that empowers organizations to innovate and engage audiences in new ways." },
      ],
    },
    fr: {
      category: "Divertissement",
      title: "Transformer la Créativité et le Sport par l'IA",
      excerpt: "L'IA crée des expériences plus immersives et personnalisées dans les domaines du divertissement, du jeu vidéo et du sport.",
      blocks: [
        { body: "L'IA révolutionne le monde créatif. Elle permet de générer du contenu personnalisé et de créer des jeux vidéo aux environnements plus vivants et interactifs." },
        { body: "Dans le sport, l'analyse des données de performance aide les athlètes et les entraîneurs à atteindre de nouveaux sommets tout en engageant mieux les fans." },
        { body: "Advisuract explore les frontières de l'intelligence artificielle pour libérer la créativité et améliorer la performance humaine." },
        { body: "Notre mission est de relier la technologie à l'émotion pour transformer la manière dont nous vivons le divertissement." },
      ],
    },
  },
};