import LayoutImage from "../assets/images/layout.png"
import PlainDosaImg from "../assets/images/plain_dosa.jpg"
import MasalaDosaImg from "../assets/images/masala_dosa.jpg"
import DPlainDosa from "../assets/images/d_plain_dosa.jpg"
import IdliiVadeImg from "../assets/images/idli- vade.webp"
import MysorePakImg from "../assets/images/Mysore-Paak.webp"
import PodiMaslaDosa from "../assets/images/Podi-Masala-Dosa.webp"
import MangaloreBunImage from "../assets/images/mangalore-buns.jpg"
import DPodiMasalaDosa from "../assets/images/d_podi_masala_dosa.jpg";
import FilterCoffeeImg from "../assets/images/filter_coffee.jpg";
import BlackCoffeeImg from "../assets/images/black_coffee.jpg";
import FilterCoffeeSoftyServeImg from "../assets/images/filter_coffe_softy_serve.jpg";
import PodiPlainDosaImg from "../assets/images/podi_plain_dosa.jpg";
import DPodiMasalaDosaImg from "../assets/images/d_podi_masala_dosa.jpg";
import DPodiPlainDosaImg from "../assets/images/d_podi_plain_dosa.jpg";
import VadeImg from "../assets/images/vade.jpg";
import GheeIdliImg from "../assets/images/ghee_idli.jpg";
import GheePodiIdliImg from "../assets/images/ghee_podi_idli.jpg";
// import BlackCoffeeImg from "../assets/images/black_coffee.jpg";

const ProductData = [
    {
        id: "product_1",
        title: "Plain Dose",
        imgSrc: PlainDosaImg,
        imgAlt: "",
        rating: "",
        description: "Crispy, golden plain dose that hits different with chutney and sambar.",
        tags: "bengaluru-ghee-dose"
    },
    {
        id: "product_2",
        title: "Masala Dose",
        imgSrc: MasalaDosaImg,
        imgAlt: "",
        rating: "",
        description: "Classic masala dose stuffed heavy, spicy, and straight-up satisfying.",
        tags: "bengaluru-ghee-dose"
    },
    {
        id: "product_3",
        title: "Podi Plain Dose",
        imgSrc: PodiPlainDosaImg,
        imgAlt: "",
        rating: "",
        description: "Plain dose tossed with podi, ghee-loaded and packed with South Indian vibes.",
        tags: "bengaluru-ghee-dose"
    },
    {
        id: "product_4",
        title: "Podi Masala Dose",
        imgSrc: PodiMaslaDosa,
        imgAlt: "",
        rating: "",
        description: "Masala dose with podi punch, spicy, buttery, and totally addictive.",
        tags: "bengaluru-ghee-dose"
    },
    {
        id: "product_5",
        title: "Ghee Roast Plain",
        imgSrc: LayoutImage,
        imgAlt: "",
        rating: "",
        description: "Ultra-crispy ghee roast plain, rich aroma and pure Bengaluru-style indulgence.",
        tags: "bengaluru-ghee-dose"
    },
    {
        id: "product_6",
        title: "Ghee Roast Masala",
        imgSrc: LayoutImage,
        imgAlt: "",
        rating: "",
        description: "Ghee roast masala dose, crunchy outside, spicy inside, full comfort food mode.",
        tags: "bengaluru-ghee-dose"
    },
    {
        id: "product_7",
        title: "Plain Dose",
        imgSrc: DPlainDosa,
        imgAlt: "",
        rating: "",
        description: "Davanagere-style benne dose, soft center, crazy butter, full-on local favorite.",
        tags: "davanagere-benne-dose"
    },
    {
        id: "product_8",
        title: "Masala Dose",
        imgSrc: DPodiMasalaDosaImg,
        imgAlt: "",
        rating: "",
        description: "Benne masala dose loaded with butter and masala, messy but worth it.",
        tags: "davanagere-benne-dose"
    },
    {
        id: "product_9",
        title: "Podi Plain Dose",
        imgSrc: DPodiPlainDosaImg,
        imgAlt: "",
        rating: "",
        description: "Benne dose sprinkled with podi, buttery, spicy, and unapologetically rich.",
        tags: "davanagere-benne-dose"
    },
    {
        id: "product_10",
        title: "Podi Masala Dose",
        imgSrc: DPodiMasalaDosa,
        imgAlt: "",
        rating: "",
        description: "Podi masala benne dose, heavy butter, bold flavors, absolute street-style classic.",
        tags: "davanagere-benne-dose"
    },
    {
        id: "product_11",
        title: "Ghee Idli",
        imgSrc: GheeIdliImg,
        imgAlt: "",
        rating: "",
        description: "Soft idlis soaked in ghee, simple, soulful, and dangerously comforting.",
        tags: "idli-vade"
    },{
        id: "product_12",
        title: "Vade",
        imgSrc: VadeImg,
        imgAlt: "",
        rating: "",
        description: "Crispy vade with fluffy inside, perfect dunk partner for sambar.",
        tags: "idli-vade"
    },{
        id: "product_13",
        title: "Ghee Podi Idli",
        imgSrc: GheePodiIdliImg,
        imgAlt: "",
        rating: "",
        description: "Mini idlis tossed in ghee and podi, small bites, massive flavor.",
        tags: "idli-vade"
    },{
        id: "product_14",
        title: "Idli Vade",
        imgSrc: IdliiVadeImg,
        imgAlt: "",
        rating: "",
        description: "Idli vade combo that never fails, soft, crispy, and pure breakfast nostalgia.",
        tags: "idli-vade"
    },{
        id: "product_15",
        title: "Filter Cofee",
        imgSrc: FilterCoffeeImg,
        imgAlt: "",
        rating: "",
        description: "Strong filter coffee, bold decoction, zero nonsense, South Indian fuel.",
        tags: "beverages"
    },{
        id: "product_16",
        title: "Black Coffee",
        imgSrc: BlackCoffeeImg,
        imgAlt: "",
        rating: "",
        description: "No milk, no drama, just pure black coffee kick.",
        tags: "beverages"
    },
    {
        id: "product_17",
        title: "Filter Coffee Soft Serve",
        imgSrc: FilterCoffeeSoftyServeImg,
        imgAlt: "",
        rating: "",
        description: "Filter coffee meets soft serve, weird combo but surprisingly addictive.",
        tags: "deserts"
    },
    {
        id: "product_18",
        title: "Mysore Pak",
        imgSrc: MysorePakImg,
        imgAlt: "",
        rating: "",
        description: "Soft, crumbly Mysore Pak that melts instantly and ruins all diets.",
        tags: "deserts"
    },
    {
        id: "product_19",
        title: "Manglore Buns",
        imgSrc: MangaloreBunImage,
        imgAlt: "",
        rating: "",
        description: "Fluffy Mangalore buns, mildly sweet, deep-fried, and straight-up comfort food.",
        tags: "karnataka-special"
    },
]

export default ProductData;