const state = () => ({
  header: {
    title: "Bureau\ndu Fun",
    subtitle:
      "Collection de jeux en ligne | pour passer un bon confinement | avec tes amis",
    value: 1,
  },
  lists: [
    {
      title: "Jeux sur navigateur",
      subtitle: "pour jouer en ligne avec tes amis | sans prise de tête",
      id: "browser-games",
      games: [
        {
          title: "Gartic Phone",
          url: "https://garticphone.com/fr",
          description: "Téléphone arabe + Pictionary en ligne",
        },
        {
          title: "Skribbl.io",
          url: "https://skribbl.io/",
          description: "Pictionary en ligne",
        },
        {
          title: "Limite<wbr>_l'IMAC",
          url: "https://limitelimac.ludchieng.fr",
          imac: true,
          description: "Jeu de cartes en ligne un peu limite",
        },
        {
          title: "Limite Limite",
          url: "https://limitelimiteenligne.com/",
          description: "La version pas IMAC du Limite l'IMAC",
        },
        {
          title: "PMU Race",
          url: "https://omeyer973.github.io/PMU-race/",
          imac: true,
          description: "Pariez sur des course de chevaux et buvez des coups",
        },
        {
          title: "Curve fever",
          url: "https://curvefever.pro/noflash",
          description: "Snake multijoueur jusqu'à 6 personnes",
        },
        {
          title: "Dix<wbr>IMAC",
          url: "http://diximac.herokuapp.com/",
          imac: true,
          description: "Le jeu Dixit mais en ligne",
        },
        {
          title: "Geo<wbr>Guessr",
          url: "https://www.geoguessr.com/",
          description:
            "Perdu dans google street view, trouve où est ce que tu te situe dans le monde",
        },
        {
          title: "Wolfy",
          url: "https://wolfy.fr/",
          description: "Le jeu des loup-garous de tiercelieu mais en beau",
        },
        {
          title: "Agar<wbr>.io",
          url: "https://agar.io/#ffa",
          description:
            "Tu es une petite bouboule. Manges des bouboules plus petites que toi et deviens la plus grande des bouboules",
        },
        {
          title: "Narwhale<wbr>.io",
          url: "http://narwhale.io/",
          description: "genre agar.io mais avec des narvals qui s'empalent",
        },
        {
          title: "Bomb<wbr>Party",
          url: "https://jklm.fun/?fromOldGames",
          description:
            "Chacun leur tour, les joueurs sont désignés par la flèche et doivent, avant la fin du temps imparti, trouver un mot contenant la syllabe qui leur est imposée. Si on ne trouve pas, on perd une vie.",
        },
        {
          title: "Epuzzle",
          url: "http://www.epuzzle.info/kat.php?wg=temat&m=1",
          description:
            "Vous êtes face à une grande mosaïque à mettre dans le bon ordre en un minimum de coups",
        },
        {
          title: "Puissance 4",
          url: "https://papergames.io/fr/puissance4",
          description:
            "aligne 4 pions de ta couleur et c'est gagné ! On peut même faire des tournois",
        },
        {
          title: "Le petit Bac",
          url: "https://petitbacenligne.net/",
          description: "comme au collège",
        },
        {
          title: "Le jeu de wikipedia",
          url: "https://en.wikipedia.org/wiki/Special:Random",
          description:
            "on donne une page de départ et une page de destination au hazard, le premier qui trouve un chemin entre les 2 pages passant uniquement par des liens interne gagne !",
        },
        {
          title: "Imposteur",
          url: "http://imposteur.kgames.fr/",
          description: "qui est l'imposteur parmis nous ?",
        },
        {
          title: "codenames",
          url: "http://pink-cell.com/codenames/",
          description: "faites deviner des mots sans les dire",
        },
        {
          title: "Blindz - blind tests",
          url: "https://blindz.fr/",
          description: "la la la",
          buttonText: "écouter",
        },
        {
          title: "blinest - blind tests",
          url: "https://blinest.com",
          description: "la la la",
          buttonText: "écouter",
        },
      ],
    },
    {
      title: "Jeux sans matériel",
      subtitle: "Tu peux même y jouer au téléphone | si ça te chante",
      id: "free-games",
      games: [
        {
          title: "C'est un film où...",
          description: "la la la",
        },
      ],
    },
    {
      title: "Jeux à télécharger",
      subtitle: "Pour les jours de grande déter",
      id: "download-games",
      games: [
        {
          title: "Minecraft",
          url: "",
          description: "s188562.nitroserv.eu",
        },
        {
          title: "Among us",
          url: "",
          description: "oui",
        },
      ],
    },
    {
      title: "Médiathèque",
      subtitle: "pour  tuer le temps | quand personne n'est en ligne",
      id: "medias",
      games: [
        {
          title: "IMAC du Sale",
          url: "https://soundcloud.com/kearox/imac-du-sale/s-Yi7Zd",
          imac: true,
          buttonText: "écouter",
          description: "L'originale, le sang",
        },
        {
          title: "IMAC du Sel",
          url: "https://soundcloud.com/draelnir/imac-du-sel/s-nRKwE",
          imac: true,
          buttonText: "écouter",
          description: "le banger qui fait sauter tes potes",
        },
        {
          title: "Citat'IMAC",
          url: "http://citatimac.alwaysdata.net/",
          imac: true,
          buttonText: "voir",
          description: "Les meilleures disquettes de nos amis les imacs",
        },
        {
          title: "Vie de merde",
          url: "https://www.viedemerde.fr/",
          buttonText: "voir",
          description: "Ma vie c'est de la merde et je vous emmerde",
        },
      ],
    },
  ],
});

export { state };
