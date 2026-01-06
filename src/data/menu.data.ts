import BeveragesImage from "../assets/images/beverages.png"
import IdliImg from "../assets/images/idlii.jpg"
import DesertImage from "../assets/images/maysor_pak.jpg"
import BengaluruGheeImg from "../assets/images/bengaluru_ghee_dosa.webp"
import KarnatakaImg from "../assets/images/mangalore-buns.jpg"
import DBenneDosaImg from "../assets/images/d_plain_dosa.jpg"

const MainMenuData = [
  {
    id: "main_menu_1",
    key: "bengaluru-ghee-dose",
    title: "Bengaluru Ghee Dose",
    description: "Crispy ghee-loaded doses with classic Bengaluru street-style flavour.",
    backgroundImg: BengaluruGheeImg,
  },
  {
    id: "main_menu_2",
    key: "davanagere-benne-dose",
    title: "Davanagere Benne Dose",
    description: "Soft inside, crazy butter outside, iconic Davanagere benne goodness.",
    backgroundImg: DBenneDosaImg,
  },
  {
    id: "main_menu_3",
    title: "Idli & Vade",
    key: "idli-vade",
    description: "Soft idlis, crispy vades, pure comfort with chutney and sambar.",
    backgroundImg: IdliImg,
  },
  {
    id: "main_menu_4",
    title: "Beverages",
    key: "beverages",
    description: "Strong filter coffee and refreshing drinks to fuel your cravings.",
    backgroundImg: BeveragesImage,
  },
  {
    id: "main_menu_5",
    title: "Deserts",
    key: "deserts",
    description: "Sweet treats that melt hearts, break diets, and end meals right.",
    backgroundImg: DesertImage,
  },
  {
    id: "main_menu_6",
    title: "Karnataka Special",
    key: "karnataka-special",
    description: "Regional classics bringing authentic Karnataka flavors to your plate.",
    backgroundImg: KarnatakaImg,
  }
];

export default MainMenuData;