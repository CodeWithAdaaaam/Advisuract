const BLOB_BASE = "https://nivqt5h77xnceedz.public.blob.vercel-storage.com/images/AD_";

export interface AIApplication {
    title: string;
    description: string;
    benefits: string[];
    image: string;
}

export interface IndustryContent {
    name: string;
    heroTitle: string;
    heroIntro: string;
    visionText: string;
    visionPoints: string[];
    applications: AIApplication[];
    researchInterests: string[];
    missionText: string;
}

export interface IndustryEntry {
    slug: string;
    heroImage: string;
    en: IndustryContent;
    fr: IndustryContent;
}

export const industries: Record<string, IndustryEntry> = {
    agriculture: {
        slug: "agriculture",
        heroImage: `${BLOB_BASE}11.png`,
        en: {
            name: "Agriculture",
            heroTitle: "Transforming Agriculture Through Artificial Intelligence",
            heroIntro: "Agriculture is entering a new era powered by AI. From precision farming to automated monitoring systems, AI is reshaping how farmers and agricultural organizations operate.",
            visionText: "Between 2025 and 2030, Advisuract aims to become a platform for innovation and knowledge-sharing in the field of Agriculture & AI.",
            visionPoints: [
                "Promoting data-driven agriculture",
                "Supporting sustainable farming initiatives",
                "Highlighting innovative AI solutions",
                "Encouraging smart resource management",
                "Exploring predictive and autonomous systems",
                "Bridging technology and agricultural expertise"
            ],
            applications: [
                {
                    title: "Precision Farming",
                    description: "Monitor crops, soil conditions, and environmental factors with unprecedented accuracy using sensors and drones.",
                    benefits: ["Improved crop productivity", "Reduced water and fertilizer waste", "Better field monitoring", "Higher operational efficiency"],
                    image: `${BLOB_BASE}12.png`
                },
                {
                    title: "Predictive Analytics",
                    description: "Analyze historical and real-time data to forecast yields, weather conditions, and supply chain risks.",
                    benefits: ["Proactive decision making", "Risk reduction", "Yield optimization", "Market trend alignment"],
                    image: `${BLOB_BASE}13.png`
                },
                {
                    title: "Smart Irrigation Systems",
                    description: "Optimize water distribution using real-time environmental data to prevent overconsumption.",
                    benefits: ["Water conservation", "Improved crop health", "Lower operational costs", "Sustainable resource management"],
                    image: `${BLOB_BASE}14.png`
                },
                {
                    title: "Crop Disease Detection",
                    description: "Computer vision and machine learning identify plant diseases at early stages through image analysis.",
                    benefits: ["Faster intervention", "Reduced pesticide usage", "Increased crop protection", "Better outcomes"],
                    image: `${BLOB_BASE}15.png`
                }
            ],
            researchInterests: ["Machine Learning", "Deep Learning", "IoT Sensors", "Climate modeling", "Autonomous systems"],
            missionText: "Our mission is to transform agricultural data into intelligent solutions that help build the future of smart farming."
        },
        fr: {
            name: "Agriculture",
            heroTitle: "Transformer l'Agriculture par l'Intelligence Artificielle",
            heroIntro: "L'agriculture entre dans une nouvelle ère propulsée par l'IA. De l'agriculture de précision aux systèmes de surveillance automatisés, l'IA remodèle le fonctionnement des agriculteurs et des organisations.",
            visionText: "Entre 2025 et 2030, Advisuract ambitionne de devenir une plateforme d'innovation et de partage de connaissances dans le domaine de l'Agriculture & l'IA.",
            visionPoints: [
                "Promouvoir l'agriculture axée sur les données",
                "Soutenir les initiatives d'agriculture durable",
                "Mettre en avant des solutions d'IA innovantes",
                "Encourager la gestion intelligente des ressources",
                "Explorer les systèmes prédictifs et autonomes",
                "Relier la technologie et l'expertise agricole"
            ],
            applications: [
                {
                    title: "Agriculture de Précision",
                    description: "Surveillez les cultures et les conditions du sol avec une précision sans précédent grâce aux capteurs et drones.",
                    benefits: ["Productivité accrue", "Réduction du gaspillage d'eau", "Meilleur suivi des champs", "Efficacité opérationnelle"],
                    image: `${BLOB_BASE}12.png`
                },
                {
                    title: "Analyses Prédictives",
                    description: "Analysez les données historiques et en temps réel pour prévoir les rendements et les risques climatiques.",
                    benefits: ["Prise de décision proactive", "Réduction des risques", "Optimisation des récoltes", "Alignement sur les tendances"],
                    image: `${BLOB_BASE}13.png`
                },
                {
                    title: "Irrigation Intelligente",
                    description: "Optimisez la distribution d'eau en utilisant des données environnementales pour éviter la surconsommation.",
                    benefits: ["Conservation de l'eau", "Santé des cultures améliorée", "Baisse des coûts", "Gestion durable"],
                    image: `${BLOB_BASE}14.png`
                },
                {
                    title: "Détection des Maladies",
                    description: "La vision par ordinateur identifie les maladies des plantes dès les premiers stades via l'analyse d'images.",
                    benefits: ["Intervention plus rapide", "Moins de pesticides", "Protection accrue des cultures", "Meilleurs résultats"],
                    image: `${BLOB_BASE}15.png`
                }
            ],
            researchInterests: ["Machine Learning", "Deep Learning", "Capteurs IoT", "Modélisation climatique", "Systèmes autonomes"],
            missionText: "Notre mission est de transformer les données agricoles en solutions intelligentes pour bâtir l'avenir de l'agriculture connectée."
        }
    },

    energy: {
        slug: "energy",
        heroImage: `${BLOB_BASE}22.png`,
        en: {
            name: "Energy",
            heroTitle: "Powering the Future with Artificial Intelligence",
            heroIntro: "The energy sector is undergoing a major transformation. AI enables organizations to improve efficiency, optimize operations, and accelerate the transition toward sustainable systems.",
            visionText: "Between 2025 and 2030, Advisuract will focus on showcasing innovative applications that improve reliability and decision-making.",
            visionPoints: ["Intelligent energy systems", "Sustainable initiatives", "Operational optimization", "Data-driven decisions", "Innovative technologies"],
            applications: [
                {
                    title: "Smart Energy Management",
                    description: "Monitor and optimize energy consumption in real-time to improve efficiency and balance demand.",
                    benefits: ["Improved efficiency", "Reduced costs", "Real-time monitoring", "Resource allocation"],
                    image: `${BLOB_BASE}23.png`
                },
                {
                    title: "Predictive Maintenance",
                    description: "Detect equipment failures before they occur by analyzing sensor and operational data.",
                    benefits: ["Reduced downtime", "Equipment lifespan", "Lower costs", "Improved reliability"],
                    image: `${BLOB_BASE}24.png`
                }
            ],
            researchInterests: ["Energy forecasting", "Maintenance analytics", "Smart grids", "Renewable optimization", "IoT integration"],
            missionText: "Our mission is to transform energy data into intelligent solutions that support sustainable development."
        },
        fr: {
            name: "Énergie",
            heroTitle: "Propulser l'Avenir avec l'Intelligence Artificielle",
            heroIntro: "Le secteur de l'énergie traverse une transformation majeure. L'IA permet d'améliorer l'efficacité, d'optimiser les opérations et d'accélérer la transition vers des systèmes durables.",
            visionText: "Entre 2025 et 2030, Advisuract se concentrera sur la présentation d'applications innovantes améliorant la fiabilité et la prise de décision.",
            visionPoints: ["Systèmes énergétiques intelligents", "Initiatives durables", "Optimisation opérationnelle", "Décisions basées sur les données", "Technologies innovantes"],
            applications: [
                {
                    title: "Gestion Intelligente",
                    description: "Surveillez et optimisez la consommation d'énergie en temps réel pour équilibrer la demande.",
                    benefits: ["Efficacité améliorée", "Réduction des coûts", "Suivi en temps réel", "Allocation des ressources"],
                    image: `${BLOB_BASE}23.png`
                },
                {
                    title: "Maintenance Prédictive",
                    description: "Détectez les pannes d'équipement avant qu'elles ne surviennent via l'analyse de capteurs.",
                    benefits: ["Moins de temps d'arrêt", "Longévité du matériel", "Coûts réduits", "Fiabilité accrue"],
                    image: `${BLOB_BASE}24.png`
                }
            ],
            researchInterests: ["Prévisions énergétiques", "Analyses de maintenance", "Réseaux intelligents", "Optimisation renouvelable", "IoT"],
            missionText: "Notre mission est de transformer les données énergétiques en solutions intelligentes pour soutenir le développement durable."
        }
    },

    "business-intelligence": {
        slug: "business-intelligence",
        heroImage: `${BLOB_BASE}33.png`,
        en: {
            name: "Business Intelligence",
            heroTitle: "Transforming Decision-Making with Artificial Intelligence",
            heroIntro: "AI-driven BI solutions help companies analyze complex datasets, identify patterns, and automate reporting to remain competitive.",
            visionText: "We focus on demonstrating how intelligent technologies can help organizations unlock the full potential of their data.",
            visionPoints: ["Data-driven decision making", "Intelligent strategies", "Analytics adoption", "Predictive analytics", "Real-world BI use cases"],
            applications: [
                {
                    title: "Data Analytics & Insights",
                    description: "Analyze large datasets faster and more accurately than traditional methods to uncover trends.",
                    benefits: ["Faster analysis", "Strategic insights", "Visibility", "Better decisions"],
                    image: `${BLOB_BASE}34.png`
                }
            ],
            researchInterests: ["Business analytics", "AI dashboards", "Big Data", "Real-time monitoring", "Automation systems"],
            missionText: "Our mission is to transform business data into actionable intelligence that empowers organizations."
        },
        fr: {
            name: "Business Intelligence",
            heroTitle: "Transformer la Prise de Décision par l'Intelligence Artificielle",
            heroIntro: "Les solutions de BI pilotées par l'IA aident les entreprises à analyser des données complexes et à automatiser les rapports pour rester compétitives.",
            visionText: "Nous nous concentrons sur la démonstration de la manière dont les technologies intelligentes aident à libérer le potentiel des données.",
            visionPoints: ["Décisions basées sur les données", "Stratégies intelligentes", "Adoption analytique", "Analyses prédictives", "Cas d'usage réels"],
            applications: [
                {
                    title: "Analyse de Données & Insights",
                    description: "Analysez de grands ensembles de données plus rapidement pour découvrir des tendances cachées.",
                    benefits: ["Analyse rapide", "Insights stratégiques", "Visibilité accrue", "Meilleures décisions"],
                    image: `${BLOB_BASE}34.png`
                }
            ],
            researchInterests: ["Analytique métier", "Tableaux de bord IA", "Big Data", "Suivi en temps réel", "Systèmes automatisés"],
            missionText: "Notre mission est de transformer les données d'entreprise en intelligence exploitable pour les organisations."
        }
    },

    finance: {
        slug: "finance",
        heroImage: `${BLOB_BASE}44.png`,
        en: {
            name: "Finance",
            heroTitle: "Transforming Financial Services with Artificial Intelligence",
            heroIntro: "AI technologies enable financial institutions to improve decision-making, strengthen risk management, and deliver personalized services.",
            visionText: "We aim to highlight practical applications that demonstrate the real impact of AI across the financial industry.",
            visionPoints: ["Intelligent financial systems", "Data-driven decisions", "Risk management", "Service innovation", "Predictive analytics"],
            applications: [
                {
                    title: "Fraud Detection & Prevention",
                    description: "Detect suspicious activities and identify fraud patterns in real-time using machine learning.",
                    benefits: ["Fraud prevention", "Transaction monitoring", "Enhanced security", "Reduced losses"],
                    image: `${BLOB_BASE}45.png`
                }
            ],
            researchInterests: ["Financial analytics", "Fraud detection", "Predictive modeling", "Investment systems", "Compliance analytics"],
            missionText: "Empowering financial institutions to innovate and build more resilient systems through intelligence."
        },
        fr: {
            name: "Finance",
            heroTitle: "Transformer les Services Financiers par l'Intelligence Artificielle",
            heroIntro: "Les technologies d'IA permettent aux institutions financières d'améliorer la prise de décision, de renforcer la gestion des risques et d'offrir des services personnalisés.",
            visionText: "Nous visons à mettre en lumière des applications pratiques démontrant l'impact réel de l'IA dans la finance.",
            visionPoints: ["Systèmes financiers intelligents", "Décisions basées sur les données", "Gestion des risques", "Innovation de services", "Analytique prédictive"],
            applications: [
                {
                    title: "Détection & Prévention de la Fraude",
                    description: "Détectez les activités suspectes et identifiez les schémas de fraude en temps réel via le machine learning.",
                    benefits: ["Prévention améliorée", "Suivi des transactions", "Sécurité renforcée", "Pertes réduites"],
                    image: `${BLOB_BASE}45.png`
                }
            ],
            researchInterests: ["Analytique financière", "Détection de fraude", "Modélisation prédictive", "Systèmes d'investissement", "Analytique de conformité"],
            missionText: "Donner aux institutions financières les moyens d'innover et de bâtir des systèmes plus résilients grâce à l'intelligence."
        }
    },

    "healthcare-pharmaceuticals": {
        slug: "healthcare-pharmaceuticals",
        heroImage: `${BLOB_BASE}55.png`,
        en: {
            name: "Healthcare & Pharmaceuticals",
            heroTitle: "Transforming Healthcare Through Artificial Intelligence",
            heroIntro: "AI technologies enable providers and researchers to improve patient outcomes, accelerate innovation, and optimize efficiency.",
            visionText: "Our goal is to create more efficient, accessible, and data-driven healthcare systems.",
            visionPoints: ["Intelligent systems", "Pharma research innovation", "Patient care via AI", "Personalized medicine", "Advanced medical analytics"],
            applications: [
                {
                    title: "Drug Discovery & Development",
                    description: "Accelerate research by analyzing large biological datasets to identify potential candidates faster.",
                    benefits: ["Research timelines", "Candidate selection", "Development costs", "Research efficiency"],
                    image: `${BLOB_BASE}56.png`
                }
            ],
            researchInterests: ["Healthcare analytics", "Drug discovery", "Medical imaging", "Predictive systems", "Genomics"],
            missionText: "Our mission is to transform healthcare data into intelligence that empowers organizations to deliver better care."
        },
        fr: {
            name: "Santé & Pharmacie",
            heroTitle: "Transformer la Santé par l'Intelligence Artificielle",
            heroIntro: "L'IA permet aux prestataires et aux chercheurs d'améliorer les résultats pour les patients, d'accélérer l'innovation et d'optimiser l'efficacité.",
            visionText: "Notre objectif est de créer des systèmes de santé plus efficaces, accessibles et basés sur les données.",
            visionPoints: ["Systèmes intelligents", "Innovation recherche pharma", "Soins via l'IA", "Médecine personnalisée", "Analyses médicales avancées"],
            applications: [
                {
                    title: "Découverte & Développement de Médicaments",
                    description: "Accélérez la recherche en analysant de grands ensembles de données biologiques pour identifier des candidats.",
                    benefits: ["Délais réduits", "Meilleure sélection", "Coûts optimisés", "Efficacité accrue"],
                    image: `${BLOB_BASE}56.png`
                }
            ],
            researchInterests: ["Analytique santé", "Découverte de médicaments", "Imagerie médicale", "Systèmes prédictifs", "Génomique"],
            missionText: "Notre mission est de transformer les données de santé en intelligence pour offrir de meilleurs soins."
        }
    },

    telecommunications: {
        slug: "telecommunications",
        heroImage: `${BLOB_BASE}66.png`,
        en: {
            name: "Telecommunications",
            heroTitle: "Transforming Connectivity Through Artificial Intelligence",
            heroIntro: "AI is driving the next evolution of telecommunications by enabling smarter, faster, and more reliable communication systems.",
            visionText: "We focus on exploring how AI can improve network performance, strengthen security, and support next-gen systems.",
            visionPoints: ["Intelligent infrastructure", "Digital transformation", "Network reliability", "AI automation", "Communication systems"],
            applications: [
                {
                    title: "Network Optimization",
                    description: "Monitor and optimize performance in real-time to identify congestion and predict failures.",
                    benefits: ["Network efficiency", "Issue detection", "Reduced downtime", "Service quality"],
                    image: `${BLOB_BASE}67.png`
                }
            ],
            researchInterests: ["Network analytics", "Predictive maintenance", "Telecom automation", "Cybersecurity", "IoT infrastructure"],
            missionText: "Our mission is to transform telecom data into intelligence that empowers operators to deliver seamless experiences."
        },
        fr: {
            name: "Télécommunications",
            heroTitle: "Transformer la Connectivité par l'Intelligence Artificielle",
            heroIntro: "L'IA pilote la prochaine évolution des télécoms en permettant des systèmes de communication plus intelligents, rapides et fiables.",
            visionText: "Nous explorons comment l'IA peut améliorer la performance réseau, renforcer la sécurité et soutenir les systèmes futurs.",
            visionPoints: ["Infrastructure intelligente", "Transformation digitale", "Fiabilité réseau", "Automatisation par l'IA", "Systèmes de communication"],
            applications: [
                {
                    title: "Optimisation des Réseaux",
                    description: "Surveillez et optimisez la performance en temps réel pour identifier la congestion et prédire les pannes.",
                    benefits: ["Efficacité réseau", "Détection d'incidents", "Temps d'arrêt réduits", "Qualité de service"],
                    image: `${BLOB_BASE}67.png`
                }
            ],
            researchInterests: ["Analytique réseau", "Maintenance prédictive", "Automatisation télécom", "Cybersécurité", "Infrastructures IoT"],
            missionText: "Notre mission est de transformer les données télécom en intelligence pour des expériences utilisateur fluides."
        }
    },

    manufacturing: {
        slug: "manufacturing",
        heroImage: `${BLOB_BASE}77.png`,
        en: {
            name: "Manufacturing",
            heroTitle: "Transforming Manufacturing Through Artificial Intelligence",
            heroIntro: "As factories become connected and data-driven, AI enables manufacturers to improve efficiency, optimize production, and reduce costs.",
            visionText: "We focus on showcasing applications that improve industrial performance and connected factories.",
            visionPoints: ["Manufacturing systems", "Industrial transformation", "Operational efficiency", "Sustainable practices", "AI automation"],
            applications: [
                {
                    title: "Predictive Maintenance",
                    description: "Predict equipment failures before they occur to reduce downtime and improve reliability.",
                    benefits: ["Machine downtime", "Lower costs", "Improved reliability", "Increased performance"],
                    image: `${BLOB_BASE}78.png`
                }
            ],
            researchInterests: ["Industrial analytics", "Predictive maintenance", "Quality control", "Automation technologies", "IoT Manufacturing"],
            missionText: "Empowering manufacturers to innovate and build smarter systems through industrial data intelligence."
        },
        fr: {
            name: "Manufacturing",
            heroTitle: "Transformer l'Industrie par l'Intelligence Artificielle",
            heroIntro: "À mesure que les usines se connectent, l'IA permet aux fabricants d'améliorer l'efficacité, d'optimiser la production et de réduire les coûts.",
            visionText: "Nous mettons en avant des applications améliorant la performance industrielle et les usines connectées.",
            visionPoints: ["Systèmes de fabrication", "Transformation industrielle", "Efficacité opérationnelle", "Pratiques durables", "Automatisation IA"],
            applications: [
                {
                    title: "Maintenance Prédictive",
                    description: "Prédisez les pannes d'équipement avant qu'elles ne surviennent pour réduire les temps d'arrêt.",
                    benefits: ["Disponibilité machines", "Coûts réduits", "Fiabilité accrue", "Performance globale"],
                    image: `${BLOB_BASE}78.png`
                }
            ],
            researchInterests: ["Analytique industrielle", "Maintenance prédictive", "Contrôle qualité", "Technologies d'automatisation", "IoT Industriel"],
            missionText: "Donner aux fabricants les moyens d'innover et de bâtir des systèmes intelligents via l'intelligence des données."
        }
    },

    "entertainment-gaming-sports": {
        slug: "entertainment-gaming-sports",
        heroImage: `${BLOB_BASE}88.png`,
        en: {
            name: "Entertainment, Gaming & Sports",
            heroTitle: "Transforming Creativity, Performance, and Experiences Through AI",
            heroIntro: "AI is revolutionizing entertainment and sports by creating more immersive, personalized, and intelligent experiences.",
            visionText: "We focus on showcasing how AI can unlock creativity, innovation, and performance.",
            visionPoints: ["Entertainment experiences", "Gaming technologies", "Sports performance", "Data-driven creativity", "Interactive systems"],
            applications: [
                {
                    title: "Personalized Entertainment",
                    description: "Analyze user preferences to deliver highly personalized recommendations for movies and music.",
                    benefits: ["Personalized content", "Improved engagement", "Enhanced experiences", "Smart distribution"],
                    image: `${BLOB_BASE}89.png`
                }
            ],
            researchInterests: ["Recommendation systems", "Gaming technologies", "Sports modeling", "Creative industries", "Digital experiences"],
            missionText: "Our mission is to bridge technology with creativity and performance to empower audiences."
        },
        fr: {
            name: "Divertissement, Jeux & Sport",
            heroTitle: "Transformer la Créativité et les Expériences par l'IA",
            heroIntro: "L'IA révolutionne le divertissement et le sport en créant des expériences plus immersives, personnalisées et intelligentes.",
            visionText: "Nous montrons comment l'IA peut libérer la créativité, l'innovation et la performance.",
            visionPoints: ["Expériences de divertissement", "Technologies de jeu", "Performance sportive", "Créativité par les données", "Systèmes interactifs"],
            applications: [
                {
                    title: "Divertissement Personnalisé",
                    description: "Analysez les préférences des utilisateurs pour offrir des recommandations ultra-personnalisées de films et musique.",
                    benefits: ["Contenu sur mesure", "Engagement accru", "Expériences enrichies", "Distribution intelligente"],
                    image: `${BLOB_BASE}89.png`
                }
            ],
            researchInterests: ["Systèmes de recommandation", "Technologies de jeu", "Modélisation sportive", "Industries créatives", "Expériences digitales"],
            missionText: "Notre mission est de relier la technologie à la créativité et à la performance pour inspirer le public."
        }
    }
};