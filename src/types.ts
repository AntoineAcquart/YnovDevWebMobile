export type TopItem = {
  name: string;
  order: number;
  description?: string;
  img?: string;
  link?: string;
};

export type Top = {
  title: string;
  items: TopItem[];
  id?: string;
};

export type List = Top[];

export const defaultList: List = [
  {
    title: "Meilleurs mangas",
    items: [
      {
        order: 1,
        name: "One piece",
        description:
          "One Piece (ワンピース, Wan Pīsu?) est une série de mangas shōnen créée par Eiichirō Oda. Elle est prépubliée depuis le 22 juillet 1997 dans le magazine hebdomadaire Weekly Shōnen Jump.... ",
        img: "https://image.animedigitalnetwork.fr/license/onepiece/tv/web/affiche_370x0.jpg",
        link: "https://fr.wikipedia.org/wiki/One_Piece",
      },
      {
        order: 2,
        name: "Hunter × Hunter",
        description:
          "Hunter × Hunter est un shōnen manga écrit et dessiné par Yoshihiro Togashi. Il est pré-publié depuis mars 1998 dans l'hebdomadaire Weekly Shōnen Jump de l'éditeur Shūeisha, et a été compilé en trente-six tomes au 4 octobre 2018...",
        img: "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
        link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiD87zRibnzAhXvBmMBHTY4DM0QmhN6BAhDEAI&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FHunter_%25C3%2597_Hunter&usg=AOvVaw3T0sTBH9dQQJniRHVPWDlG",
      },
      {
        order: 3,
        name: "Fullmetal Alchemist",
        description:
          "Fullmetal Alchemist, est un manga d'Hiromu Arakawa. Il a été prépublié entre 2001 et 2010 dans le magazine mensuel Shōnen Gangan de la société Square Enix et a été compilé en 27 volumes reliés. La version française est publiée par Kurokawa depuis 2005...",
        img: "https://fr.web.img6.acsta.net/pictures/19/07/29/15/50/2364027.jpg",
        link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjwxdeTirnzAhVT8uAKHaB0D0MQmhN6BAg7EAI&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FFullmetal_Alchemist&usg=AOvVaw3zkIYNjHSncaMnemB-WIqH",
      },
      {
        order: 4,
        name: "L'Attaque des Titans",
        description:
          "L’Attaque des Titans est un shōnen manga écrit et dessiné par Hajime Isayama. Il est prépublié entre septembre 2009 et avril 2021 dans le magazine Bessatsu Shōnen Magazine puis compilé en trente-quatre volumes reliés par l’éditeur Kōdansha...",
        img: "https://fr.web.img6.acsta.net/pictures/20/12/28/10/24/5603983.jpg",
        link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjmwozJirnzAhWTmhQKHROyDS0QmhN6BAg_EAI&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FL%2527Attaque_des_Titans&usg=AOvVaw2-X5Uu_7ImQJfHheCtCEpw",
      },
      {
        order: 5,
        name: "Fate/stay night : Unlimited Blade Works",
        description:
          "Un groupe de sept mages est choisi pour devenir les maîtres de sept classes d'esprits héroïques, afin de combattre et de gagner le Saint Graal...",
        img: "https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/media/library-400/206_636966619139733981FSN_UBW_Small_hq.jpg",
        link: "https://en.wikipedia.org/wiki/Fate/stay_night:_Unlimited_Blade_Works_(TV_series)",
      },
    ],
  },
  {
    title: "Meilleurs films Tarantino",
    items: [
      {
        order: 1,
        name: "Once Upon a Time… in Hollywood",
        description:
          "Rick Dalton, un acteur de télévision qui a déjà vécu de meilleures années, et son cascadeur de longue date Cliff Booth s'efforcent d'atteindre la gloire et le succès dans l'industrie cinématographique au cours de l'âge d'or d'Hollywood en 1969.",
        img: "https://media.services.cinergy.ch/media/box1600/a3378998b6e42c1f2712229459b1ac78b4a24776.jpg",
        link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjmt7-gtcXzAhWPx4UKHVGPBqsQFnoECF4QAQ&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FOnce_Upon_a_Time%25E2%2580%25A6_in_Hollywood&usg=AOvVaw2KaE38kpCsEcGoXeIQWu0q",
      },
      {
        order: 2,
        name: "Pulp Fiction",
        description:
          "L'odyssée sanglante et burlesque de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s'entremêlent. Dans un restaurant, un couple de jeunes braqueurs, Pumpkin et Yolanda, discutent des risques que comporte leur activité.",
        img: "https://fr.web.img4.acsta.net/medias/nmedia/18/36/02/52/18846059.jpg",
        link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi3qOPMtcXzAhVROBoKHbawB4MQFnoECFYQAQ&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FPulp_Fiction&usg=AOvVaw2x8-YSkUCTcHYegvdGFiTG",
      },
      {
        order: 3,
        name: "Les Huit Salopards",
        description:
          "Quelques années après la guerre de Sécession, le chasseur de primes John Ruth, dit Le Bourreau, fait route vers Red Rock, où il conduit sa prisonnière Daisy Domergue.",
        img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStGehUdakroK3qzcDONsrO1xkO8T__dHTP43PWVFnRFJf5_eop",
        link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj-zuXwtcXzAhUH6RoKHWmNBAwQFnoECCwQAQ&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FLes_Huit_Salopards&usg=AOvVaw3oxqtHN_sxLlBoj2XUvD1Z",
      },
      {
        order: 4,
        name: "Inglourious Basterds",
        description:
          "Dans la France occupée de 1940, Shosanna Dreyfus assiste à l'exécution de sa famille tombée entre les mains du colonel nazi Hans Landa. Shosanna s'échappe de justesse et s'enfuit à Paris où elle se construit une nouvelle identité en devenant exploitante d'une salle de cinéma.",
        img: "https://www.reforme.net/wp-content/uploads/2020/11/7736093674_2e8414a35_OK_WEB.jpg",
        link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjQ-NmGtsXzAhXPxYUKHe4WAkkQFnoECDkQAQ&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FInglourious_Basterds&usg=AOvVaw0GnjvmVDtgLHjkYha7kwG_",
      },
      {
        order: 5,
        name: "Une nuit en enfer",
        description:
          "Une nuit en enfer, ou La Nuit la plus longue au Québec, est un film d'horreur fantastique américano-mexicain réalisé par Robert Rodríguez, sorti en 1996.",
        img: "https://fr.web.img2.acsta.net/medias/nmedia/18/62/83/60/19076744.jpg",
        link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi3j6qztsXzAhWtzoUKHfHkA9kQFnoECAcQAQ&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FUne_nuit_en_enfer&usg=AOvVaw3gp_KT8I5huEsMk82aDw3i",
      },
    ],
  },
];
