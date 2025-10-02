const ServicesCards = document.getElementById("ServicesCards");

// tableau des info de cards

let tabServices = [
  {
    icone: "./assets/iconeDesing.svg",
    title: "Design Web",
    Description:
      "Création d'interfaces utilisateur modernes et intuitives qui captivent vos visiteurs et renforcent votre marque.",
  },
  {
    icone: "./assets/iconeDeveloppement.svg",
    title: "Développement",
    Description:
      "Développement de sites web performants et responsives utilisant les dernières technologies du marché.",
  },
  {
    icone: "./assets/iconeGestionReseaux.svg",
    title: "Gestion Réseaux sociaux",
    Description:
      "Solutions publicitaires complètes pour votre visibilité en ligne avec des posts récurrents",
  },
  {
    icone: "./assets/iconeDeploiment.svg",
    title: "Déploiement",
    Description:
      "Déploiement de votre site sur serveur avec configuration de domaine, hébergement et certificats de sécurité.",
  },
  {
    icone: "./assets/iconeMaintenance.svg",
    title: "Maintenance",
    Description:
      "Support technique continu et mises à jour régulières pour garantir la performance de votre site.",
  },
  {
    icone: "./assets/iconeConseil.svg",
    title: "Conseil",
    Description:
      "Accompagnement stratégique pour définir la meilleure approche digitale selon vos objectifs business.",
  },
];

// creation des cards de service

function CreatCardsServices() {
  for (let i = 0; i < tabServices.length; i++) {
    const cardsServicesSolo = document.createElement("div");
    cardsServicesSolo.className = "cardsServicesSolo";
    const icone = document.createElement("img");
    icone.className = "icone";
    icone.src = tabServices[i].icone;
    const TitleCard = document.createElement("h3");
    TitleCard.className = "TitleCard";
    const descriptionCard = document.createElement("P");
    descriptionCard.className = "descriptionCard";

    TitleCard.textContent =tabServices[i].title;
    descriptionCard.textContent = tabServices[i].Description;

    cardsServicesSolo.appendChild(icone);
    cardsServicesSolo.appendChild(TitleCard);
    cardsServicesSolo.appendChild(descriptionCard);
    ServicesCards.appendChild(cardsServicesSolo);
  }
}

CreatCardsServices();
