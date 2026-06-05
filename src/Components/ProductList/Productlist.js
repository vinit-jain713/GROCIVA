import Strawberry from '../../assets/strawberry.png';
import Butter from '../../assets/butter.webp';
import Eggs from '../../assets/eggs.png';
import Cabbage from '../../assets/cabbage.webp';
import Eggplant from '../../assets/eggplant.png';
import Shrimp from '../../assets/shrimp.webp';
import Kiwi from '../../assets/kiwi.webp';
import Capsicum from '../../assets/capsicum.webp';
import Broccoli from '../../assets/broccoli.webp';
import Yogurt from '../../assets/yogurt.png';
import Beef from '../../assets/beef.png';
import ChickenBreast from '../../assets/chicken-breast.webp';
import Kale from '../../assets/kale.png';
import Cheese from '../../assets/mozzarella-cheese.png';
import CondensedMilk from '../../assets/condensed-milk.png';
import Salmon from '../../assets/salmon.png';
import Banana from '../../assets/banana.png';
import Milk from '../../assets/milk.png';
import Pineapple from '../../assets/pineapple.png';
import Tofu from '../../assets/tofu.png';
import Tilapia from '../../assets/tilapia.png';
import SliceCheese from '../../assets/slice-cheese.png';
import RicottaCheese from '../../assets/ricotta-cheese.webp';
import Grapes from '../../assets/grapes.png';
import Lettuce from '../../assets/lettuce.png';
import Apple from '../../assets/apple.png';
import Orange from '../../assets/orange.png';
import Mango from '../../assets/mango.png';
import Watermelon from '../../assets/watermelon.png';
import Pear from '../../assets/pear.png';
import Avocado from '../../assets/avocado.webp';
import Potato from '../../assets/potato.png';
import Onion from '../../assets/onion.png';
import Tomato from '../../assets/tomato.png';
import Cauliflower from '../../assets/cauliflower.png';
import Corn from '../../assets/corn.webp';
import ChocolateMilk from '../../assets/chocolate-milk.png';
import TurkeyBreast from '../../assets/turkey-breast.png';
import ChickenWings from '../../assets/chicken-wings.png';
import Crab from '../../assets/crab.webp';

const product = [
    {
        id: 1,
        title: "Strawberry",
        price: "3.00",
        category: "Fruits",
        image: Strawberry
    },
    {
        id: 2,
        title: "Butter",
        price: "3.5",
        category: "Dairy",
        image: Butter
    },
    {
        id: 3,
        title: "Eggs",
        price: "2.05",
        category: "Dairy",
        image: Eggs
    },
    {
        id: 4,
        title: "Cabbage",
        price: "3.0",
        category: "Vegetables",
        image: Cabbage
    },
    {
        id: 5,
        title: "Eggplant",
        price: "4.0",
        category: "Vegetables",
        image: Eggplant
    },
    {
        id: 6,
        title: "Shrimp",
        price: "3.5",
        category: "SeaFood",
        image: Shrimp
    },
    {
        id: 7,
        title: "Kiwi",
        price: "2.05",
        category: "Fruits",
        image: Kiwi
    },
    {
        id: 8,
        title: "Green Capsicum",
        price: "4.0",
        category: "Vegetables",
        image: Capsicum
    },
    {
        id: 9,
        title: "Broccoli",
        price: "2.0",
        category: "Vegetables",
        image: Broccoli
    },
    {
        id: 10,
        title: "Yogurt",
        price: "3.0",
        category: "Dairy",
        image: Yogurt
    },
    {
        id: 11,
        title: "Beef",
        price: "8.00",
        category: "Meat",
        image: Beef
    },
    {
        id: 12,
        title: "Chicken Breast",
        price: "7.00",
        category: "Meat",
        image: ChickenBreast
    },
    {
        id: 13,
        title: "Kale Leaves",
        price: "3.00",
        category: "Vegetables",
        image: Kale
    },
    {
        id: 14,
        title: "Mozzarella Cheese",
        price: "7.00",
        category: "Dairy",
        image: Cheese
    },
    {
        id: 15,
        title: "Condensed Milk",
        price: "5.00",
        category: "Dairy",
        image: CondensedMilk
    },
    {
        id: 16,
        title: "Salmon Filet",
        price: "4.00",
        category: "SeaFood",
        image: Salmon
    },
    {
        id: 17,
        title: "Banana",
        price: "2.00",
        category: "Fruits",
        image: Banana
    },
    {
        id: 18,
        title: "Milk Bottel (3)",
        price: "8.00",
        category: "Dairy",
        image: Milk
    },
    {
        id: 19,
        title: "PineApple",
        price: "5.00",
        category: "Fruits",
        image: Pineapple
    },
    {
        id: 20,
        title: "Tofu Cubes",
        price: "4.00",
        category: "Dairy",
        image: Tofu
    },
    {
        id: 21,
        title: "Tilapia Fish",
        price: "3.00",
        category: "SeaFood",
        image: Tilapia
    },
    {
        id: 22,
        title: "Slice Cube",
        price: "5.00",
        category: "Dairy",
        image: SliceCheese
    },
    {
        id: 23,
        title: "Ricotta Cheese",
        price: "7.00",
        category: "Dairy",
        image: RicottaCheese
    },
    {
        id: 24,
        title: "Grapes",
        price: "3.00",
        category: "Fruits",
        image: Grapes
    },
    {
        id: 25,
        title: "Lettuce Leaf",
        price: "3.00",
        category: "Vegetables",
        image: Lettuce
    },
        {
        id: 26,
        title: "Apple",
        price: "3.00",
        category: "Fruits",
        image: Apple
    },
    {
        id: 27,
        title: "Orange",
        price: "2.50",
        category: "Fruits",
        image: Orange
    },
    {
        id: 28,
        title: "Mango",
        price: "4.50",
        category: "Fruits",
        image: Mango
    },
    {
        id: 29,
        title: "Watermelon",
        price: "6.00",
        category: "Fruits",
        image: Watermelon
    },
    {
        id: 30,
        title: "Pear",
        price: "3.50",
        category: "Fruits",
        image: Pear
    },
    {
        id: 31,
        title: "Avocado",
        price: "4.00",
        category: "Fruits",
        image: Avocado
    },
    {
        id: 32,
        title: "Potato",
        price: "2.00",
        category: "Vegetables",
        image: Potato
    },
    {
        id: 33,
        title: "Onion",
        price: "2.50",
        category: "Vegetables",
        image: Onion
    },
    {
        id: 34,
        title: "Tomato",
        price: "2.00",
        category: "Vegetables",
        image: Tomato
    },
    {
        id: 35,
        title: "Cauliflower",
        price: "4.00",
        category: "Vegetables",
        image: Cauliflower
    },
    {
        id: 36,
        title: "Sweet Corn",
        price: "2.50",
        category: "Vegetables",
        image: Corn
    },
    {
        id: 37,
        title: "Chocolate Milk",
        price: "3.50",
        category: "Dairy",
        image: ChocolateMilk
    },
    {
        id: 38,
        title: "Turkey Breast",
        price: "8.00",
        category: "Meat",
        image: TurkeyBreast
    },
    {
        id: 39,
        title: "Chicken Wings",
        price: "6.00",
        category: "Meat",
        image: ChickenWings
    },
    {
        id: 40,
        title: "Crab",
        price: "12.00",
        category: "SeaFood",
        image: Crab
    },
]

export default product