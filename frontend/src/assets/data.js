import holyPandas1 from './holypanda.png';
import holyPandas2 from './holypanda2.png';
import holyPandas3 from './holypanda3.png';
import milky from './milky.png';
import milky2 from './milky2.png';
import milky3 from './milky3.png';
import belt from './belt.png';
import gold from './gold.jpg';
import red from './red.png';
import red2 from './red2.jpg';
import k10 from './k10.jpg';
import k10_2 from './k10_2.jpg';
import koi from './koi.jpg';
import airfryer from './airfryer.jpg'

const data = [
    {
        id: 1,
        name: 'Holy Pandas Switch',
        price: 10,
        image: [
            {
                id: 1,
                url: holyPandas1
            },
            {
                id: 2,
                url: holyPandas2
            },
            {
                id: 3,
                url: holyPandas3
            }
        ],
        desc: "Holy Pandas Switches. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        id: 2,
        name: "Gateron Milky Yellow Switch",
        price: 10,
        image: [
            {
                id: 1,
                url: milky
            },
            {
                id: 2,
                url: milky2
            },
            {
                id: 3,
                url: milky3
            }
        ],
        desc: "Gateron Milky Yellow Switches",
    },
    {
        id: 3,
        name: "Weightlifting Belt",
        price: 200,
        image: [
            {
                id: 1,
                url: belt
            }
        ],
        desc: "Weightlifting Belt",
    },
    {
        id: 4,
        name: "Gold Artisan Keycap",
        price: 543,
        image: [{
            id: 1,
            url: gold
        }],
        desc: "Gold Artisan Keycap",
    },
    {
        id: 5,
        name: "Red Addidas Ultraboost",
        price: 238,
        image: [{
            id: 1,
            url: red,
        },
        {
            id: 2,
            url: red2,
        }
        ],
        desc: "Red Addidas Ultraboost UK 10",
    },
    {
        id: 6,
        name: "Keychron K10 Keyboard",
        price: 320,
        image: [
        {
            id: 1,
            url: k10
        },
        {
            id: 2,
            url: k10_2,
        }],
        desc: "Keychron K10 Keyboard Gateron Red Switches",
    },
    {
        id: 7,
        name:"Koi Artisan Keycap",
        price:53,
        image: [{
            id: 1,
            url: koi
        }],
        desc: "Koi Artisan Keycap",
    },
    {
        id: 8,
        name: "Xiaomi Air Fryer",
        price:812,
        image: [{
            id: 1,
            url: airfryer
        }],
        desc: "Xiaomi Air Fryer",
    }
];
export default data;