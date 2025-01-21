export const postsRhums = [
  {
      id: 1,
      title: "Famille Ricci",
      content: "Découvre la cuvée Complices. En bouche, une belle claque gourmande !",
      longDescription: `
        <strong>Caractéristiques :</strong>
        Un nez très séducteur, qui oscille entre des notes de plantes médicinales et des notes gourmandes chocolatées. Un équilibre maîtrisé entre fraîcheur et des notes plus chaleureuses.
        Sève de pin, camphre, acacia, eucalyptus et fleurs blanches sont accompagnés par des notes de crème brûlée, gousse de vanille, chocolat au lait et praliné.
        <br><br/>
        40% d'alcool, 70cl, rhum ambré 
      `,
      image: process.env.PUBLIC_URL+"/images/Ricci.webp",
      date: "2024-01-20",
      category: "Rhum",
      price: 45
    },
  {
    id: 2,
    title: "Eminente ",
    content: "Découvrez le Rhum hors d'âge - Reserva - 7 ans.",
    longDescription: `
        <strong>Caractéristiques :</strong>
         Elle s’inscrit dans la lignée des grandes eaux-de-vie de canne élaborées au XIXème siècle à Cuba : une tradition qui s’est perdue par la suite, à laquelle la marque souhaite redonner toutes ses lettres de noblesse.
        <br><br/>
        41.3% d'alcool, 70cl
      `,
    image: process.env.PUBLIC_URL+"/images/Eminente.webp",
    date: "2024-01-18",
    category: "Rhum vieux",
    price: 65
  },
  {
      id: 3,
      title: "Rhum TiCed",
      content: "Vivez une expérience gustative unique et laissez-vous séduire par les saveurs harmonieuses du Ti Arrangé Fraise Menthe Citron Vert.",
      longDescription: `
        <strong>Caractéristiques :</strong>
         Le Ti Arrangé Fraise Menthe Citron Vert est une délicieuse création fruitée et rafraîchissante. Ce rhum arrangé allie avec subtilité les saveurs gourmandes de la fraise, la fraîcheur vivifiante de la menthe et l’acidité pétillante du citron vert. Chaque gorgée de cette boisson vous transporte dans un univers estival et exaltant.
        <br><br/>
        32% d'alcool, 70cl
      `,
      image: process.env.PUBLIC_URL+"/images/TiCed.webp",
      date: "2024-01-18",
      category: "Rhum Arrangé",
      price:28
    },
{
    id: 4,
    title: "MIYAGIKYO Single Malt",
    content: "Découvrez le whisky japonnais NIKKA du 90eme anniversaire de la marque.",
    longDescription: `
        <strong>Caractéristiques :</strong>
         A l’occasion des 90 ans de Nikka Whisky, Miyagikyo Single Malt est présenté dans un étui en édition limitée. Située dans la vallée de Miyagi, une région au nord de l’île de Honshu reconnue pour son air pur et la qualité de ses eaux de source, la distillerie Miyagikyo de Nikka Whisky produit un malt raffiné avec une fraîcheur fruitée et florale immédiatement reconnaissable.
        <br><br/>
        45% d'alcool, 70cl
      `,
    image: process.env.PUBLIC_URL+"/images/Nikka.webp",
    date: "2024-01-18",
    category: "Whisky",
    price: 70
  },
  // Ajoutez d'autres produits...
];