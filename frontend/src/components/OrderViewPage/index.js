import {Component} from 'react'
import axios from 'axios'

import "react-credit-cards/es/styles-compiled.css";

import CreditCardInput from 'react-credit-card-input';
import ClipLoader from "react-spinners/ClipLoader";


import {v4} from 'uuid'
import { Switch,message } from "antd";
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup'
import { Model } from 'react-model'
import {
  BsPersonCircle,
  BsHeart,BsFillHeartFill,
  BsInstagram,
  BsFacebook,
  BsFillHandbagFill,BsClock,BsFillPersonFill, BsHeartFill,BsChevronDown
} from 'react-icons/bs'
import {IoIosArrowDown,IoIosArrowUp} from "react-icons/io"
import { AiFillApple,AiFillFacebook,AiOutlineLogout,AiFillFile,AiFillClockCircle} from "react-icons/ai";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdCancel,MdLocationPin,MdOutlineKeyboardArrowRight
} from 'react-icons/md'
import {BiMinus,BiPlus,BiErrorCircle,BiSolidChevronLeftCircle,BiSolidShoppingBag} from "react-icons/bi"
import {HiMiniShoppingBag} from "react-icons/hi2"
import {RiEBike2Fill} from "react-icons/ri"
import {FaHandPointDown} from "react-icons/fa"
import './index.css'
import { devUseWarning } from 'antd/es/_util/warning';


const TabItem=props=>{
   const {item,changeTab,isActive}=props 
   const className=isActive?'active-tab':'normal-tab'
   const buttonClass=isActive?'tab-button-active':'tab-button-normal'
   const tempId=item.hrefId.slice(1,-1)
   
   return(
    <li className={className} id={tempId}>
      <a href={item.hrefId} className='tab-anchor-element'>
        <button className={buttonClass} onClick={()=>changeTab(item.tabId)}>{item.display}</button>
      </a>
    </li>
   )
}

const SingleItem=props=>{
  const {dessert, modelTrigger}=props
  return(
    <li className='single-item-list' data-target={modelTrigger} data-toggle="modal">
      <div className='item-decription-container'>
         <h1 className='item'>{dessert.item}</h1>
         <p className='item-description'>{dessert.description}</p>
      </div>
      <button className='item-price-container'><p className='price'>${dessert.price}</p></button>
    </li>
  )
}

const SingleItemService=props=>{
  const {dessert}=props
  return(
    <li className='single-item-list'>
      <div className='item-decription-container'>
         <h1 className='item'>{dessert.item}</h1>
         <p className='item-description'>{dessert.description}</p>
      </div>
      <button className='item-price-container'><p className='price'>${dessert.price}</p></button>
    </li>
  )
}

const tabsList = [
  {tabId: 'SPECIALS', display: 'Specials',hrefId:'#sectionSpecials'},
  {tabId: 'CLASSICRANGE', display: 'Classic Range',hrefId:'#sectionClassicRnange'},
  {tabId: 'VEGETARUAN', display: 'Vegetarian',hrefId:'#sectionVegetarian'},
  {tabId: 'CHICKEN', display: 'Chicken',hrefId:'#sectionChicken'},
  {tabId: 'MEAT', display: 'Meat',hrefId:'#sectionMeat'},
  {tabId: 'SEAFOOD', display: 'Seafood',hrefId:'#sectionSeafood'},
  {tabId: 'STANDARDSIDES', display: 'Standard Sides',hrefId:'#sectionStandard'},
  {tabId: 'CLASSICSIDES', display: 'Classic Sides',hrefId:'#sectionClassicSides'},
  {tabId: 'FAVORITESIDES', display: 'Favorite Sides',hrefId:'#sectionFavorities'},
  {tabId: 'PASTAS', display: 'Pastas',hrefId:'#sectionPastas'},
  {tabId: 'DRINKS', display: 'Drinks',hrefId:'#sectionDrinks'},
  {tabId: 'DESSERTS', display: 'Desserts',hrefId:'#sectionDesserts'},
]

const desserts=[
  {
    id:v4(),
    category:"BEN & JEERY'S ICE CREAM",
    item:'BEN &JERRYS Chocolate Fudge Brownie',
    description:'Chocolate ice cream with fudge brownies .',
    price:4.99
  },
  {
    id:v4(),
    category:"BEN & JEERY'S ICE CREAM",
    item:'Ben & Jerry Chocolate Chip Cookie Dough',
    description:'Vanilla ice cream with chunks of chocolate chip cookie dough.',
    price:4.99
  },
  {
    id:v4(),
    item:'BEN & JERRYS Fudge Brownie.',
    category:"BEN & JEERY'S ICE CREAM",
    description:'Chocolate ice cream with fudge brownies.',
    price:12.99
  },
  {
    id:v4(),
    category:"BEN & JEERY'S ICE CREAM",
    item:'BEN & JERRYS Mint Chocolate Cookie',
    description:'Peppermint ice cream with chocolate sandwich cookies .',
    price:12.99
  },
  {
    id:v4(),
    category:"BEN & JEERY'S ICE CREAM",
    item:'BEN & JERRYS Chocolate Chip Cookie Dough',
    description:'Vanilla ice cream with chunks of chocolate chip cookie dough.',
    price:12.99
  },
  {
    id:v4(),
    category:"BEN & JEERY'S ICE CREAM",
    item:'MAGNUM Gold Caramelised Chocolate',
    description:'Biscuit flavoured ice cream, Toffee cinnamon sauce and shortbread biscuit pieces in cracking caramelised chocolate shell.',
    price:12.99
  },
  {
    id:v4(),
    category:"BEN & JEERY'S ICE CREAM",
    item:'MAGNUM Luxe salted Caramel',
    description:'vanilla flavoured ice cream,Rich salted caramel sauce and chocolate shards in a cracking milk chocolate shell.',
    price:12.99
  },
  {
    id:v4(),
    category:"BEN & JEERY'S ICE CREAM",
    item:'MAGNUM Classic',
    description:'Vanilla flavoured dairy ice cream with chocolate shards in a cracking chocolate shell.',
    price:12.99
  }
]

const drinks = [
  {
    id: v4(),
    category:"Drinks",
    item: 'Coke Can',
    description: '330ml',
    price: 2.50,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'Coke Zero Can',
    description: '330ml',
    price: 2.50,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'Sprite Can',
    description: '330ml',
    price: 2.50,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'Fanta Can',
    description: '330ml',
    price: 2.50,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'L&P Can',
    description: '330ml',
    price: 2.50,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'Lift Can',
    description: '330ml',
    price: 2.50,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'Coke 1.5L',
    description: 'Bottle',
    price: 4.50,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'Coke Zero 1.5L',
    description: 'Bottle',
    price: 4.50,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'Sprite 1.5L',
    description: 'Bottle',
    price: 4.50,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'Fanta 1.5L',
    description: 'Bottle',
    price: 4.50,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'L&P 1.5L',
    description: 'Bottle',
    price: 4.50,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'Lift 1.5L',
    description: 'Bottle',
    price: 4.50,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'Classic Ginger beer (Schweppes)',
    description: '',
    price: 4.00,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'Orange & Mango Sparkling',
    description: '440ml',
    price: 4.00,
  },
  {
    id: v4(),
    category:"Drinks",
   item: 'Apple Orange & Mango',
    description: 'Organic Juice 275Ml',
    price: 4.00,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'Apple & Blackcurrant',
    description: 'Organic Juice 275Ml',
    price: 4.00,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'Schweppes Lemonade',
    description: '330ml',
    price: 4.00,
  },
  {
    id: v4(),
    category:"Drinks",
    item: 'Pump Water',
    description: '750Ml',
    price: 3.50,
  },
]

const pastas = [
  {
    id: v4(),
    category:"Pastas",
    item: 'Beef Lasagne',
    price: 13.00,
  },
  {
    id: v4(),
    category:"Pastas",
    item: 'Chicken and Bacon Fettuccine',
    price: 13.00,
  },
]


const FavoriteSides = [
  {
    id: v4(),
    category:"Favorite Sides",
    item: 'Spicy Chicken Wings',
    price: 12.00,
  },
  {
    id: v4(),
    category:"Favorite Sides",
    item: 'Spicy Tandoori Bites',
    price: 12.00,
  },
  {
    id: v4(),
    category:"Favorite Sides",
    item: 'BBQ Chicken Wings',
    price: 12.00,
  },
  {
    id: v4(),
    category:"Favorite Sides",
    item: 'BBQ Pork Ribs',
    price: 12.00,
  },
  {
    id: v4(),
    category:"Favorite Sides",
    item: 'Cheesy Jalapeno Bites',
    price: 12.00,
  },
  {
    id: v4(),
    category:"Favorite Sides",
    item: 'Mac and Cheese Bites',
    price: 12.00,
  },
  {
    id: v4(),
    category:"Favorite Sides",
    item: 'Buffalo Wings',
    price: 12.00,
  },
]

const ClassicSides= [
  {
    id: v4(),
    category:"Classic Sides",
    item: 'Desi Fries',
    price: 7.00,
  },
  {
    id: v4(),
    category:"Classic Sides",
    item: 'Cheesy Garlic Bread',
    price: 7.00,
  },
  {
    id: v4(),
    category:"Classic Sides",
    item: 'Spicy Garlic Bread',
    price: 7.00,
  },
  {
    id: v4(),
    category:"Classic Sides",
    item: 'Cheesy Wedges',
    price: 7.00,
  },
  {
    id: v4(),
    category:"Classic Sides",
    item: 'Cheesy Bacon Chips',
    price: 7.00,
  },
  {
    id: v4(),
    category:"Classic Sides",
    item: 'Kumara Fries',
    price: 7.00,
  }
]

const StandardSides = [
  {
    id: v4(),
    category:"Standard Sides",
    item: 'Garlic Bread',
    price: 5.00,
  },
  {
    id: v4(),
    category:"Standard Sides",
    item: 'Chips',
    price: 5.00,
  },
  {
    id: v4(),
    category:"Standard Sides",
    item: 'Wedges',
    price: 5.00,
  },
  {
    id: v4(),
    category:"Standard Sides",
    item: 'Potato Hash Bites',
    price: 5.00,
  },
  {
    id: v4(),
    category:"Standard Sides",
    item: 'Curly Fries',
    price: 5.00,
  },
  
]

const Seafood=[
  {
    id:v4(),
    category:"Seafood",
    item:'Jamaican Jerk Prawns Pizza',
    description:'tomato base, pineapple, spinach, capsicum, onion, garlic, coriander, black pepper, Mozzarella, spiced prawns',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:3,
        name:'Spinach',
        isSelected:true
      },
      {
        id:4,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:5,
        name:'Onion',
        isSelected:true
      },
      {
        id:6,
        name:'Garlic',
        isSelected:true
      },
      {
        id:7,
        name:'Coriander',
        isSelected:true
      },
      {
        id:8,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:9,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:10,
        name:'Spiced Prawns',
        isSelected:true
      },
    
    ]
  },
  {
    id:v4(),
    category:"Seafood",
    item:'Creamy Prawns and Bacon Pizza',
    description:'creamy sauce, garlic, spinach, Mozzarella, prawns, black pepper, bacon',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Creamy Sauce',
        isSelected:true
      },
      {
        id:2,
        name:'Garlic',
        isSelected:true
      },
      {
        id:3,
        name:'Spinach',
        isSelected:true
      },
      {
        id:4,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:5,
        name:'Prawns',
        isSelected:true
      },
      {
        id:6,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:7,
        name:'Bacon',
        isSelected:true
      },
     
    ]
  },
  {
    id:v4(),
    category:"Seafood",
    item:'Garlic Prawns Pizza',
    description:'garlic salt, onion, capsicum, prawns, black pepper, oregano',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Garlic Salt',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:4,
        name:'Prawns',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Oregano',
        isSelected:true
      },
     
    ]

  },
  {
    id:v4(),
    category:"Seafood",
    item:'Prawn and Bacon Pizza',
    description:'tomato base, Mozzarella, prawns, bacon, spinach, tomatoes, black pepper, hollandaise sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Prawns',
        isSelected:true
      },
      {
        id:4,
        name:'Bacon',
        isSelected:true
      },
      {
        id:5,
        name:'Spinach',
        isSelected:true
      },
      {
        id:6,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:7,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:8,
        name:'Hollandaise Sauce',
        isSelected:true
      },
      
    ]
  },
  {
    id:v4(),
    category:"Seafood",
    item:'Salmon and Feta Pizza',
    description:'tomato base, black pepper, Mozzarella, tomatoes, spinach, Feta, salmon, hollandaise sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:3,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:4,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:5,
        name:'Spinach',
        isSelected:true
      },
      {
        id:6,
        name:'Feta',
        isSelected:true
      },
      {
        id:7,
        name:'Salmon',
        isSelected:true
      },
      {
        id:8,
        name:'Hollandaise Sauce',
        isSelected:true
      },
      
    ]
  },
  {
    id:v4(),
    category:"Seafood",
    item:'Chipotle Prawns Pizza',
    description:'Chipotle Sauce, Seasoned Prawns , Onion , Garlic , Black Pepper, Mozzarella , Capsicum, Chilli Flakes',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Chipotle Sauce',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Seasoned Prawns',
        isSelected:true
      },
      {
        id:4,
        name:'Garlic',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'Chilli Flakes',
        isSelected:true
      },
     
    ]
  },
  {
    id:v4(),
    category:"Seafood",
    item:'Pesto Prawns Pizza',
    description:'Pesto Sauce ,Seasoned Prawns, Spinach , Mayonnaise , Mozzarella ,Tomatoes, Black Pepper, Capsicum.',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Mayonnaise',
        isSelected:true
      },
      {
        id:2,
        name:'Pesto sauce',
        isSelected:true
      },
      {
        id:3,
        name:'Seasoned Prawns',
        isSelected:true
      },
      {
        id:4,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:5,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:6,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:7,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:8,
        name:'Spinach',
        isSelected:true
      },
       
    ]
  },
  {
    id:v4(),
    category:"Seafood",
    item:'Seafood Supreme',
    description:'Tomato Base, Onion, Garlic , Tuna , Black Olives , Anchovies , Mozzarella, Garlic Aioli Sauce, Seasoned Prawns.',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Tuna',
        isSelected:true
      },
      {
        id:5,
        name:'Black Olives',
        isSelected:true
      },{
        id:6,
        name:'Anchovies',
        isSelected:true
      },
       
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'Garlic Aioli Sauce',
        isSelected:true
      },
      {
        id:9,
        name:'Seasoned Prawns',
        isSelected:true
      },
       
    ]
  },
]

const Meat=[
  {
    id:v4(),
    category:"Meat",
    item:'Melting Hot Pizza',
    description:'cheese sauce base, onion, garlic, pepperoni, jalapenos, Mozzarella, capsicum, cabanossi',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Cheese Sauce Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Pepperoni',
        isSelected:true
      },
      {
        id:5,
        name:'Jalapenos',
        isSelected:true
      },
      {
        id:6,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Cabanossi',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Moroccans Lamb Pizza',
    description:'tomato base, onion, garlic, black pepper, chilli flakes, coriander, Mozzarella, capsicum, spiced lamb balls',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:5,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:6,
        name:'Coriander',
        isSelected:true
      },
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:9,
        name:'Spiced Lamb Balls',
        isSelected:true
      },
    
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Bacon and Mushroom Pizza',
    description:'tomato base, mushrooms, garlic, creamy sauce, tomatoes, black pepper, bacon, streaky bacon',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Creamy sauce',
        isSelected:true
      },
      {
        id:5,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:6,
        name:'Black pepper',
        isSelected:true
      },
      {
        id:7,
        name:'Bacon',
        isSelected:true
      },
      {
        id:8,
        name:'Streaky bacon',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'BBQ Beef and Bacon Pizza',
    description:'tomato base, onion, beef cubes, bacon, BBQ sauce, Mozzarella',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Beef Cubes',
        isSelected:true
      },
      {
        id:4,
        name:'Bacon',
        isSelected:true
      },
      {
        id:5,
        name:'BBQ Sauce',
        isSelected:true
      },
      {
        id:6,
        name:'Mozzarella',
        isSelected:true
      },    
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Hawaiian Pizza',
    description:'tomato base, ham slices, pineapple, Mozzarella, bacon',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Ham Slices',
        isSelected:true
      },
      {
        id:3,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:4,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:5,
        name:'Bacon',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Italian Pizza',
    description:'tomato base, garlic, ham slices, mushrooms, salami, capsicum, black olives, Mozzarella, oregano',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Garlic',
        isSelected:true
      },
      {
        id:3,
        name:'Ham Slices',
        isSelected:true
      },
      {
        id:4,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:5,
        name:'Salami',
        isSelected:true
      },
      {
        id:6,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:7,
        name:'Black Olives',
        isSelected:true
      },
      {
        id:8,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:9,
        name:'Oregano',
        isSelected:true
      },

    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Spicy Roasted Beef Pizza',
    description:'tomato base, garlic, black pepper, chilli flakes, beef cubes, jalapenos, tomatoes, Mozzarella, capsicum, onion',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Garlic',
        isSelected:true
      },
      {
        id:3,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:4,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:5,
        name:'Beef Cubes',
        isSelected:true
      },
      {
        id:6,
        name:'Jalapenos',
        isSelected:true
      },
      {
        id:7,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:8,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:9,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:10,
        name:'Onion',
        isSelected:true
      },
    
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Meat Supreme Pizza',
    description:'tomato base, Mozzarella, salami, capsicum, onion, mushrooms, black olives, ham slices, meat balls',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Salami',
        isSelected:true
      },
      {
        id:4,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:5,
        name:'Onion',
        isSelected:true
      },
      {
        id:6,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:7,
        name:'Black Olives',
        isSelected:true
      },
      {
        id:8,
        name:'Ham Slices',
        isSelected:true
      },
      {
        id:9,
        name:'Meat Balls',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Meat Lovers Pizza',
    description:'tomato base, Mozzarella, salami, meat balls, bacon, ham, BBQ sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Salami',
        isSelected:true
      },
      {
        id:4,
        name:'Meat Balls',
        isSelected:true
      },
      {
        id:5,
        name:'Bacon',
        isSelected:true
      },
      {
        id:6,
        name:'Ham',
        isSelected:true
      },
      {
        id:7,
        name:'BBQ Sauce',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Meaty Boyz Pizza',
    description:'tomato base, garlic, onion, ham slices, salami, pineapple, Mozzarella, BBQ sauce, capsicum, tomatoes, bacon, meat balls',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Garlic',
        isSelected:true
      },
      {
        id:3,
        name:'Onion',
        isSelected:true
      },
      {
        id:4,
        name:'Ham Slices',
        isSelected:true
      },
      {
        id:5,
        name:'Salami',
        isSelected:true
      },
      {
        id:6,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'BBQ Sauce',
        isSelected:true
      },
      {
        id:9,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:10,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:11,
        name:'Bacon',
        isSelected:true
      },
      {
        id:12,
        name:'Meat Balls',
        isSelected:true
      },
     
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'The Meat Platter Pizza',
    description:'tomato base, Camembert, spinach, onion, Mozzarella, prawns, chicken sausage, chilli flakes, black olives, capsicum, chipotle sauce, cabanossi',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Camembert',
        isSelected:true
      },
      {
        id:3,
        name:'Spinach',
        isSelected:true
      },
      {
        id:4,
        name:'Onion',
        isSelected:true
      },
      {
        id:5,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:6,
        name:'Prawns',
        isSelected:true
      },
      {
        id:7,
        name:'Chicken Sausage',
        isSelected:true
      },
      {
        id:8,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:9,
        name:'Black Olives',
        isSelected:true
      },
      {
        id:10,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:11,
        name:'Chipotle Sauce',
        isSelected:true
      },
      {
        id:12,
        name:'',
        isSelected:true
      },
      {
        id:13,
        name:'Kransky',
        isSelected:true
      },
    
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Mexican Pizza',
    description:'',
    price:16.50,
    ingredients:[]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Peri Peri Lamb',
    description:'Tomato Base, Mayonnaise ,Peri Peri Sauce,Onion, Garlic , Black Pepper , Mozzarella , Lamb Cubes , Capsicum.',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mayonnaise',
        isSelected:true
      },
      {
        id:3,
        name:'Peri Peri Sauce',
        isSelected:true
      },
      {
        id:4,
        name:'Onion',
        isSelected:true
      },
      {
        id:5,
        name:'Garlic',
        isSelected:true
      },
      {
        id:6,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'Lamb Cubes',
        isSelected:true
      },
      {
        id:9,
        name:'Capsicum',
        isSelected:true
      },
      
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Beef & kransky Pizza',
    description:'Beef, Capsicum , Mozzarella, Cabanossi , Onion & Garlic Aioli Sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Beef',
        isSelected:true
      },
      {
        id:2,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:3,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:4,
        name:'Cabanossi',
        isSelected:true
      },
      {
        id:5,
        name:'Onion',
        isSelected:true
      },
      {
        id:6,
        name:'Garlic Aioli',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Siciliano Pizza',
    description:'Tomato base, Garlic, Mozzarella, Ham, Salami, Jalapeños, Black Olives , Oregano, Capsicum, Anchovies.',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato base',
        isSelected:true
      },
      {
        id:2,
        name:'Garlic',
        isSelected:true
      },
      {
        id:3,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:4,
        name:'Ham',
        isSelected:true
      },
      {
        id:5,
        name:'Salami',
        isSelected:true
      },
      {
        id:6,
        name:'Jalapeños',
        isSelected:true
      },
      {
        id:7,
        name:'Oregano',
        isSelected:true
      },
      {
        id:8,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:9,
        name:'Anchovies',
        isSelected:true
      },
    
    ]
  },
]

const Chicken=[
  {
    id:v4(),
    category:"Chicken",
    item:'Apricot Chicken Pizza',
    description:'tomato base, onion, garlic, chicken, capsicum, pineapple, Mozzarella, spiced apricot sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Chicken',
        isSelected:true
      },
      {
        id:5,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:6,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'Spiced Apricot Sauce',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Butter Chicken Pizza',
    description:'tomato base, Mozzarella, chicken, butter chicken sauce (contains nuts)',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Chicken',
        isSelected:true
      },
      {
        id:4,
        name:'Butter Chicken Sauce',
        isSelected:true
      },
      
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Cajun Chicken Pizza',
    description:'tomato base, onion, garlic, black pepper, Mozzarella, tomatoes, capsicum, chilli flakes, spinach, cajun spice, chicken, Garlic Aioli',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:5,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:6,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:9,
        name:'Spinach',
        isSelected:true
      },
      {
        id:10,
        name:'Cajun Spice',
        isSelected:true
      },
      {
        id:11,
        name:'Chicken',
        isSelected:true
      },
      {
        id:12,
        name:'Garlic Aioli',
        isSelected:true
      },
  
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Chicken Triple Sauce Pizza',
    description:'tomato base, onion, garlic, pineapple, mayonnaise, chicken, capsicum, black pepper, peri-peri sauce, butter chicken sauce, Mozzarella, oregano (contains nuts)',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:5,
        name:'Mayonnaise',
        isSelected:true
      },
      {
        id:6,
        name:'Chicken',
        isSelected:true
      },
      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:9,
        name:'Peri-Peri Sauce',
        isSelected:true
      },
      {
        id:10,
        name:'Butter Chicken Sauce',
        isSelected:true
      },
      {
        id:11,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:12,
        name:'Oregano',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Chipotle Chicken Pizza',
    description:'chilli flakes, capsicum, onion, garlic, black pepper, Mozzarella, chicken, chipotle sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:2,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:3,
        name:'Onion',
        isSelected:true
      },
      {
        id:4,
        name:'Garlic',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:7,
        name:'Chicken',
        isSelected:true
      },
      {
        id:8,
        name:'Chipotle Sauce',
        isSelected:true
      },

    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Cranberry Chicken & Camembert Pizza',
    description:'tomato base, spinach, Mozzarella, cranberry sauce, chicken, Camembert',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Spinach',
        isSelected:true
      },
      {
        id:3,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:4,
        name:'Cranberry Sauce',
        isSelected:true
      },
      {
        id:5,
        name:'Chicken',
        isSelected:true
      },
      {
        id:6,
        name:'Camembert',
        isSelected:true
      },    
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Chilli Chicken Pizza',
    description:'chilli sauce base, onion, garlic, coriander, black pepper, Mozzarella, capsicum, chicken',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Chilli Sauce Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Coriander',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Chicken',
        isSelected:true
      },    
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Peri Peri Chicken Pizza',
    description:'tomato base, onion, garlic, black pepper, peri-peri sauce, mayonnaise, Mozzarella, capsicum, chicken oregano',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:5,
        name:'Peri-Peri Sauce',
        isSelected:true
      },
      {
        id:6,
        name:'Mayonnaise',
        isSelected:true
      },
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:9,
        name:'Chicken Oregano',
        isSelected:true
      },
 
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Pesto Chicken Pizza',
    description:'spinach, chicken, pesto sauce, mayonnaise, black pepper,Mozzarella, capsicum, tomatoes',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Spinach',
        isSelected:true
      },
      {
        id:2,
        name:'Spinach',
        isSelected:true
      },
      {
        id:3,
        name:'Pesto Sauce',
        isSelected:true
      },
      {
        id:4,
        name:'Mayonnaise',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Mozzarella',
        isSelected:true
      },      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Tomatoes',
        isSelected:true
      },    
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Bacon and Alfredo Chicken Pizza',
    description:'creamy sauce, onion, garlic, mushrooms, chicken, black pepper, capsicum, Mozzarella, bacon',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Creamy Sauce',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:5,
        name:'Chicken',
        isSelected:true
      },
      {
        id:6,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:9,
        name:'Bacon',
        isSelected:true
      },   
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Satay Chicken Pizza',
    description:'satay sauce, Mozzarella, onion, garlic, chilli flakes, capsicum, black pepper, chicken (contains nuts)',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Satay Sauce',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Onion',
        isSelected:true
      },
      {
        id:4,
        name:'Garlic',
        isSelected:true
      },
      {
        id:5,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:6,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:7,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:8,
        name:'Chicken',
        isSelected:true
      },   
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Tandoori Chicken Pizza',
    description:'tomato base, onion, mushrooms, tandoori chicken, Mozzarella, capsicum, coriander',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:4,
        name:'Tandoori Chicken',
        isSelected:true
      },
      {
        id:5,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:6,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:7,
        name:'Coriander',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'BBQ Chicken & Bacon',
    description:'BBQ Base , Onion , Mozzarella, Chicken , Bacon , Capsicum and Mayonnaise',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'BBQ Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:4,
        name:'Chicken',
        isSelected:true
      },
      {
        id:5,
        name:'Bacon',
        isSelected:true
      },
      {
        id:6,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:7,
        name:'Mayonnaise',
        isSelected:true
      },   
    ]
  },
 
 
]

const Vegetarian=[
  {
    id:v4(),
    category:"Vegetarian",
    item:'Veg Delight Pizza',
    description:'tomato base, Mozzarella, mushrooms, garlic, black pepper, onion, capsicum, pineapple, oregano',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:4,
        name:'Garlic',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Onion',
        isSelected:true
      },
      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:9,
        name:'Oregano',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Veg Triple Sauce Pizza',
    description:'tomato base, garlic, onion, pineapple, mayonnaise, peri-peri sauce, makhani sauce,ginger, black pepper, capsicum, Mozzarella, coriander',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Garlic',
        isSelected:true
      },
      {
        id:3,
        name:'Onion',
        isSelected:true
      },
      {
        id:4,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:5,
        name:'Mayonnaise',
        isSelected:true
      },
      {
        id:6,
        name:'Peri-Peri Sauce',
        isSelected:true
      },
      {
        id:7,
        name:'Makhani Sauce',
        isSelected:true
      },
      {
        id:8,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:9,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:10,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:11,
        name:'Coriander',
        isSelected:true
      },
      {
        id:12,
        name:'Ginger',
        isSelected:true
      },   
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Pesto Corn Pizza',
    description:'Mozzarella , black pepper, spinach, sweet corn, mayonnaise, tomatoes, capsicum, pesto sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Pesto Sauce Base',
        isSelected:true
      },
      {
        id:2,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:3,
        name:'Spinach',
        isSelected:true
      },
      {
        id:4,
        name:'Sweet Corn',
        isSelected:true
      },
      {
        id:5,
        name:'Mayonnaise',
        isSelected:true
      },
      {
        id:6,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:7,
        name:'Coriander',
        isSelected:true
      },
      {
        id:8,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:9,
        name:'Capsicum',
        isSelected:true
      },   
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Veg Supreme Pizza',
    description:'tomato base, garlic, black pepper, onion, mushrooms, ginger, pineapple, jalapenos, coriander, Mozzarella, capsicum, black olives',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Garlic',
        isSelected:true
      },
      {
        id:3,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:4,
        name:'Onion',
        isSelected:true
      },
      {
        id:5,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:6,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:7,
        name:'Jalapenos',
        isSelected:true
      },
      {
        id:8,
        name:'Coriander',
        isSelected:true
      },
      {
        id:9,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:10,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:11,
        name:'Black Olives',
        isSelected:true
      },
      {
        id:12,
        name:'Ginger',
        isSelected:true
      },
   
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Butter Paneer Pizza',
    description:'tomato base, onion, garlic, coriander, Mozzarella, paneer, Makhani sauce (contains nuts)',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Coriander',
        isSelected:true
      },
      {
        id:5,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:6,
        name:'Paneer',
        isSelected:true
      },
      {
        id:7,
        name:'Makhani Sauce',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Peri Peri Paneer Pizza',
    description:'tomato base, onion, garlic, paneer, capsicum, coriander, peri peri sauce, black pepper, Mozzarella',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Paneer',
        isSelected:true
      },
      {
        id:5,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:6,
        name:'Coriander',
        isSelected:true
      },
      {
        id:7,
        name:'Peri Peri Sauce',
        isSelected:true
      },
      {
        id:8,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:9,
        name:'Mozzarella',
        isSelected:true
      },    
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Chilli Paneer Pizza',
    description:'chilli sauce base, onion, garlic, coriander, black pepper, Mozzarella, capsicum, paneer, chilli sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Chilli Sauce Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Coriander',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Paneer',
        isSelected:true
      },
      {
        id:9,
        name:'Chilli Sauce',
        isSelected:true
      },   
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Spicy Paneer Pasand Pizza',
    description:'Tomato Base, Capsicum, Tomatoes ,Garlic, Onion, Garlic salt ,Chilli Flakes , Paneer, Coriander , Mozzarella .',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:3,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:4,
        name:'Garlic',
        isSelected:true
      },
      {
        id:5,
        name:'Onion',
        isSelected:true
      },
      {
        id:6,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:7,
        name:'Paneer',
        isSelected:true
      },
      {
        id:8,
        name:'Coriander',
        isSelected:true
      },
      {
        id:9,
        name:'Mozzarella',
        isSelected:true
      },
 
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Spicy Corn Deluxe Pizza',
    description:'Tomato base, Mozzarella ,Onion,Garlic, Black pepper, Corn, Black Olives ,Chilli Flakes, Capsicum, Jalapeños',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Onion',
        isSelected:true
      },
      {
        id:4,
        name:'Garlic',
        isSelected:true
      },
      {
        id:5,
        name:'Black pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Corn',
        isSelected:true
      },
      {
        id:7,
        name:'Black Olives',
        isSelected:true
      },
      {
        id:8,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:9,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:10,
        name:'Jalapeños',
        isSelected:true
      },
    
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Creamy Mushroom Pizza',
    description:'Creamy Sauce, Mushrooms, Onion, Garlic & Herb, Black Pepper, Oregano, Mozzarella and Capsicum.',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Creamy Sauce',
        isSelected:true
      },
      {
        id:2,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:3,
        name:'Onion',
        isSelected:true
      },
      {
        id:4,
        name:'Garlic & Herb',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Oregano',
        isSelected:true
      },
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'Capsicum',
        isSelected:true
      },
    
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Paneer Tadka',
    description:'Tomato Base , Mozzarella, Capsicum, Jalapeños, Onion , Garlic, Black Pepper, Tandoori Paneer , Coriander.',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:4,
        name:'Jalapeños',
        isSelected:true
      },
      {
        id:5,
        name:'Onion',
        isSelected:true
      },
      {
        id:6,
        name:'Garlic',
        isSelected:true
      },
      {
        id:7,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:8,
        name:'Tandoori Paneer',
        isSelected:true
      },
      {
        id:9,
        name:'Coriander',
        isSelected:true
      },
    ]
  },
 
 
]

const ClassicRange=[
  {
    id:v4(),
    category:"ClassicRange",
    item:'Cheese Lovers Pizza',
    description:'tomato base, Mozzarella',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },   
    ]
  },
  {
    id:v4(),
    category:"ClassicRange",
    item:'Margherita Pizza',
    description:'tomato base, Mozzarella, tomatoes, basil',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:4,
        name:'Basil',
        isSelected:true
      },
      
    
    ]
  },
  {
    id:v4(),
    category:"ClassicRange",
    item:'Crunchy Veg Pizza',
    description:'tomato base, onion, garlic, black pepper, jalapenos, tomatoes, coriander, Mozzarella, capsicum, black olives',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:5,
        name:'Jalapenos',
        isSelected:true
      },
      {
        id:6,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:7,
        name:'Coriander',
        isSelected:true
      },
      {
        id:8,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:9,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:10,
        name:'Black Olives',
        isSelected:true
      },
    
    ]
  },
  {
    id:v4(),
    category:"ClassicRange",
    item:'Pepperoni Pizza',
    description:'tomato base, pepperoni, Mozzarella',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato base',
        isSelected:true
      },
      {
        id:2,
        name:'Pepperoni',
        isSelected:true
      },
      {
        id:3,
        name:'Mozzarella',
        isSelected:true
      }
    ]
  },
  {
    id:v4(),
    category:"ClassicRange",
    item:'Ham and Cheese Pizza',
    description:'omato base, ham, Mozzarella',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Omato base',
        isSelected:true
      },
      {
        id:2,
        name:'Ham',
        isSelected:true
      },
      {
        id:3,
        name:'Mozzarella',
        isSelected:true
      },
      
    
    ]
  },
  {
    id:v4(),
    category:"ClassicRange",
    item:'Tuna and Pineapple Pizza',
    description:'tomato base, onion, garlic, tuna, pineapple, mayonnaise',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Tuna',
        isSelected:true
      },
      {
        id:5,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:6,
        name:'Mayonnaise',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"ClassicRange",
    item:'Chicken BBQ Pizza',
    description:'Tomato Base , Onion , Mozzarella,Chicken , BBQ Sauce , Capsicum.',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:4,
        name:'Chicken',
        isSelected:true
      },
      {
        id:5,
        name:'BBQ Sauce',
        isSelected:true
      },
      {
        id:6,
        name:'Capsicum',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"ClassicRange",
    item:'Chicken & Cheese Pizza',
    description:'Tomato Base ,Chicken , Mozzarella',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Chicken',
        isSelected:true
      },
      {
        id:3,
        name:'Mozzarella',
        isSelected:true
      },
    ]
  },
]

const Specials=[
  {
    id: v4(),
    category:"Specials",
    item: 'Just Sides',
    description:'Any 2 Standard Sides',
    price: 9.00,
  },
  {
    id: v4(),
    category:"Specials",
    item: 'Single Meal',
    description:'1 x Signature Range Pizza plus 2 x Standard Sides',
    price: 24.00,
  },
  {
    id: v4(),
    category:"Specials",
    item: 'Mixed Meal',
    description:'1 x Signature Range Pizza, 1 x Classic Range Pizza plus 2 x Standard Sides',
    price: 37.00,
  },
  {
    id: v4(),
    category:"Specials",
    item: 'Twin Meal',
    description:'2 x Signature Range Pizza plus 2 x Standard Sides',
    price: 40.00,
  },
  {
    id: v4(),
    category:"Specials",
    item: 'Signature Trio',
    description:'3 x Signature Range Pizzas',
    price: 47.00,
  },
  {
    id: v4(),
    category:"Specials",
    item: 'Classic Trio',
    description:'3 x Classic Range Pizzas',
    price: 38.00,
  },
  
]

const initialJustSidesSpecialData={
  side1:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    swirlsSauces:[
      {
       id:1,
       text:"Butter Sauce",
       price:1.00,
       isSelected:false
      },
      {
        id:2,
        text:"Peri Peri Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:3,
        text:"Hot Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:4,
        text:"Chipotle Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:5,
        text:"Garlic Aioli",
        price:1.00,
        isSelected:false
       },
       {
        id:6,
        text:"Mayonnaise",
        price:1.00,
        isSelected:false
       },
       {
        id:7,
        text:"BBQ Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:8,
        text:"Hollandaise Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:9,
        text:"Sweet Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:10,
        text:"Tomato Sauce",
        price:1.00,
        isSelected:false
       }
    ],
  },
  side2:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    swirlsSauces:[
      {
       id:1,
       text:"Butter Sauce",
       price:1.00,
       isSelected:false
      },
      {
        id:2,
        text:"Peri Peri Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:3,
        text:"Hot Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:4,
        text:"Chipotle Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:5,
        text:"Garlic Aioli",
        price:1.00,
        isSelected:false
       },
       {
        id:6,
        text:"Mayonnaise",
        price:1.00,
        isSelected:false
       },
       {
        id:7,
        text:"BBQ Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:8,
        text:"Hollandaise Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:9,
        text:"Sweet Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:10,
        text:"Tomato Sauce",
        price:1.00,
        isSelected:false
       }
    ],
  }
 , secialInstructions:'',itemCategory:'Specials',type:'',itemName:'',itemPrice:0,itemDescription:'',itemsCount:1,
    toggleJustSidesModel:false,actualPrice:0,
    dishes:[
      {
        id:1,
        name:'Garlic Bread',
        isSauseThere:true,
        isSelected:false
      }
      ,{
        id:2,
        name:'Chips',
        isSauseThere:true,
         isSelected:false
      },
      {
        id:3,
        name:'Wedges',
        isSauseThere:true,
         isSelected:false
      },
      {
        id:4,
        name:'Potato Hash Bites',
        isSauseThere:true,
         isSelected:false
      },
      {
        id:5,
        name:'Curly Fries',
        isSauseThere:true,
         isSelected:false
      },
      {
        id:6,
        name:'Coke 1.5L',
        isSauseThere:false,
         isSelected:false
      },
      {
        id:7,
        name:'Coke Zero 1.5L',
        isSauseThere:false,
         isSelected:false
      },
      {
        id:8,
        name:'Sprite 1.5L',
        isSauseThere:false,
         isSelected:false
      },
      {
        id:9,
        name:'Fanta 1.5L',
        isSauseThere:false,
         isSelected:false
      },
      {
        id:10,
        name:'L&P 1.5L',
        isSauseThere:false,
         isSelected:false
      },
      {
        id:11,
        name:'Lift 1.5L',
        isSauseThere:false,
         isSelected:false
      },
    
    ],
    showDishPopupForSide1:false,
    showError:false,showSoucesForSide1:false,showErrorForSoucesSide1:false,showSoucesForSide2:false,showErrorForSoucesSide2:false,showDishPopupForSide2:false,
    showErrorForEmptySide1:false, showErrorForEmptySide2:false,
}



const initialClassicTrioData={
  trio1:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    baseOptionsList:[
    {
      id:1,
      text:"Regular Base",
      price:0,
      isSelected:false
     },{
      id:2,
      text:"Thin Crust",
      price:1.00,
      isSelected:false
     },{
      id:3,
      text:"Gluten Free Base",
      price:3.00,
      isSelected:false
     },
],
extraToppingsList:[
  {
    id:1,
    text:"Mozzarella",
    price:3.00,
    isSelected:false
   },
   {
    id:2,
    text:"Paneer",
    price:3.00,
    isSelected:false
   },
   {
    id:3,
    text:"Chicken",
    price:3.00,
    isSelected:false
   },
   {
    id:4,
    text:"Ham",
    price:3.00,
    isSelected:false
   },
   {
    id:5,
    text:"Bacon",
    price:3.00,
    isSelected:false
   },
   {
    id:6,
    text:"Pepperoni",
    price:3.00,
    isSelected:false
   },
   {
    id:7,
    text:"Prawns",
    price:3.00,
    isSelected:false
   },
   {
    id:8,
    text:"Salmon",
    price:3.00,
    isSelected:false
   },
   {
    id:9,
    text:"Black Olives",
    price:2.00,
    isSelected:false
   },
   {
    id:10,
    text:"Jalapeños",
    price:2.00,
    isSelected:false
   },
   {
    id:11,
    text:"Pineapple",
    price:2.00,
    isSelected:false
   },
   {
    id:12,
    text:"Coriander",
    price:2.00,
    isSelected:false
   },
   {
    id:13,
    text:"Capsicum",
    price:2.00,
    isSelected:false
   },
   {
    id:14,
    text:"Onion",
    price:2.00,
    isSelected:false
   },
   {
    id:15,
    text:"Sweet corn",
    price:2.00,
    isSelected:false
   },
   {
    id:16,
    text:"Anchovies",
    price:3.00,
    isSelected:false
   },
   {
    id:17,
    text:"Mushrooms",
    price:2.00,
    isSelected:false
   },
],
swirlsSauces:[
  {
   id:1,
   text:"Butter Sauce",
   price:1.00,
   isSelected:false
  },
  {
    id:2,
    text:"Peri Peri Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:3,
    text:"Hot Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:4,
    text:"Chipotle Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:5,
    text:"Garlic Aioli",
    price:1.00,
    isSelected:false
   },
   {
    id:6,
    text:"Mayonnaise",
    price:1.00,
    isSelected:false
   },
   {
    id:7,
    text:"BBQ Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:8,
    text:"Hollandaise Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:9,
    text:"Sweet Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:10,
    text:"Tomato Sauce",
    price:1.00,
    isSelected:false
   }
],
showSouces:false,showIngredients:false,showBaseOptions:false,showExtraToppings:false,
  showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false,

},
  trio2:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    baseOptionsList:[
    {
      id:1,
      text:"Regular Base",
      price:0,
      isSelected:false
     },{
      id:2,
      text:"Thin Crust",
      price:1.00,
      isSelected:false
     },{
      id:3,
      text:"Gluten Free Base",
      price:3.00,
      isSelected:false
     },
],
extraToppingsList:[
  {
    id:1,
    text:"Mozzarella",
    price:3.00,
    isSelected:false
   },
   {
    id:2,
    text:"Paneer",
    price:3.00,
    isSelected:false
   },
   {
    id:3,
    text:"Chicken",
    price:3.00,
    isSelected:false
   },
   {
    id:4,
    text:"Ham",
    price:3.00,
    isSelected:false
   },
   {
    id:5,
    text:"Bacon",
    price:3.00,
    isSelected:false
   },
   {
    id:6,
    text:"Pepperoni",
    price:3.00,
    isSelected:false
   },
   {
    id:7,
    text:"Prawns",
    price:3.00,
    isSelected:false
   },
   {
    id:8,
    text:"Salmon",
    price:3.00,
    isSelected:false
   },
   {
    id:9,
    text:"Black Olives",
    price:2.00,
    isSelected:false
   },
   {
    id:10,
    text:"Jalapeños",
    price:2.00,
    isSelected:false
   },
   {
    id:11,
    text:"Pineapple",
    price:2.00,
    isSelected:false
   },
   {
    id:12,
    text:"Coriander",
    price:2.00,
    isSelected:false
   },
   {
    id:13,
    text:"Capsicum",
    price:2.00,
    isSelected:false
   },
   {
    id:14,
    text:"Onion",
    price:2.00,
    isSelected:false
   },
   {
    id:15,
    text:"Sweet corn",
    price:2.00,
    isSelected:false
   },
   {
    id:16,
    text:"Anchovies",
    price:3.00,
    isSelected:false
   },
   {
    id:17,
    text:"Mushrooms",
    price:2.00,
    isSelected:false
   },
],
swirlsSauces:[
  {
   id:1,
   text:"Butter Sauce",
   price:1.00,
   isSelected:false
  },
  {
    id:2,
    text:"Peri Peri Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:3,
    text:"Hot Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:4,
    text:"Chipotle Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:5,
    text:"Garlic Aioli",
    price:1.00,
    isSelected:false
   },
   {
    id:6,
    text:"Mayonnaise",
    price:1.00,
    isSelected:false
   },
   {
    id:7,
    text:"BBQ Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:8,
    text:"Hollandaise Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:9,
    text:"Sweet Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:10,
    text:"Tomato Sauce",
    price:1.00,
    isSelected:false
   }
]
,
showSouces:false,showIngredients:false,showBaseOptions:false,showExtraToppings:false,
  showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false,

},
  trio3:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    baseOptionsList:[
    {
      id:1,
      text:"Regular Base",
      price:0,
      isSelected:false
     },{
      id:2,
      text:"Thin Crust",
      price:1.00,
      isSelected:false
     },{
      id:3,
      text:"Gluten Free Base",
      price:3.00,
      isSelected:false
     },
],
extraToppingsList:[
  {
    id:1,
    text:"Mozzarella",
    price:3.00,
    isSelected:false
   },
   {
    id:2,
    text:"Paneer",
    price:3.00,
    isSelected:false
   },
   {
    id:3,
    text:"Chicken",
    price:3.00,
    isSelected:false
   },
   {
    id:4,
    text:"Ham",
    price:3.00,
    isSelected:false
   },
   {
    id:5,
    text:"Bacon",
    price:3.00,
    isSelected:false
   },
   {
    id:6,
    text:"Pepperoni",
    price:3.00,
    isSelected:false
   },
   {
    id:7,
    text:"Prawns",
    price:3.00,
    isSelected:false
   },
   {
    id:8,
    text:"Salmon",
    price:3.00,
    isSelected:false
   },
   {
    id:9,
    text:"Black Olives",
    price:2.00,
    isSelected:false
   },
   {
    id:10,
    text:"Jalapeños",
    price:2.00,
    isSelected:false
   },
   {
    id:11,
    text:"Pineapple",
    price:2.00,
    isSelected:false
   },
   {
    id:12,
    text:"Coriander",
    price:2.00,
    isSelected:false
   },
   {
    id:13,
    text:"Capsicum",
    price:2.00,
    isSelected:false
   },
   {
    id:14,
    text:"Onion",
    price:2.00,
    isSelected:false
   },
   {
    id:15,
    text:"Sweet corn",
    price:2.00,
    isSelected:false
   },
   {
    id:16,
    text:"Anchovies",
    price:3.00,
    isSelected:false
   },
   {
    id:17,
    text:"Mushrooms",
    price:2.00,
    isSelected:false
   },
],
swirlsSauces:[
  {
   id:1,
   text:"Butter Sauce",
   price:1.00,
   isSelected:false
  },
  {
    id:2,
    text:"Peri Peri Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:3,
    text:"Hot Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:4,
    text:"Chipotle Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:5,
    text:"Garlic Aioli",
    price:1.00,
    isSelected:false
   },
   {
    id:6,
    text:"Mayonnaise",
    price:1.00,
    isSelected:false
   },
   {
    id:7,
    text:"BBQ Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:8,
    text:"Hollandaise Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:9,
    text:"Sweet Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:10,
    text:"Tomato Sauce",
    price:1.00,
    isSelected:false
   }
],
showSouces:false,showIngredients:false,showBaseOptions:false,showExtraToppings:false,
  showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false,

},

secialInstructions:'',itemCategory:'Specials',type:'',itemName:'',itemPrice:0,itemDescription:'',itemsCount:1,
    toggleClassicTrioModel:false,actualPrice:0,
    showPopupTrio1:false ,showPopupTrio2:false ,showPopupTrio3:false ,
    showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:false,showErrorForEmtyTrio2:false,

ClassicRange:[
      {
        id:v4(),
        category:"ClassicRange",
        item:'Cheese Lovers Pizza',
        description:'tomato base, Mozzarella',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"ClassicRange",
        item:'Margherita Pizza',
        description:'tomato base, Mozzarella, tomatoes, basil',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:4,
            name:'Basil',
            isSelected:true
          },
          
        
        ]
      },
      {
        id:v4(),
        category:"ClassicRange",
        item:'Crunchy Veg Pizza',
        description:'tomato base, onion, garlic, black pepper, jalapenos, tomatoes, coriander, Mozzarella, capsicum, black olives',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:5,
            name:'Jalapenos',
            isSelected:true
          },
          {
            id:6,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:7,
            name:'Coriander',
            isSelected:true
          },
          {
            id:8,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:10,
            name:'Black Olives',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"ClassicRange",
        item:'Pepperoni Pizza',
        description:'tomato base, pepperoni, Mozzarella',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato base',
            isSelected:true
          },
          {
            id:2,
            name:'Pepperoni',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          }
        ]
      },
      {
        id:v4(),
        category:"ClassicRange",
        item:'Ham and Cheese Pizza',
        description:'omato base, ham, Mozzarella',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Omato base',
            isSelected:true
          },
          {
            id:2,
            name:'Ham',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          
        
        ]
      },
      {
        id:v4(),
        category:"ClassicRange",
        item:'Tuna and Pineapple Pizza',
        description:'tomato base, onion, garlic, tuna, pineapple, mayonnaise',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Tuna',
            isSelected:true
          },
          {
            id:5,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:6,
            name:'Mayonnaise',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"ClassicRange",
        item:'Chicken BBQ Pizza',
        description:'Tomato Base , Onion , Mozzarella,Chicken , BBQ Sauce , Capsicum.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Chicken',
            isSelected:true
          },
          {
            id:5,
            name:'BBQ Sauce',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"ClassicRange",
        item:'Chicken & Cheese Pizza',
        description:'Tomato Base ,Chicken , Mozzarella',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Chicken',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
        ]
      },
    ]
}

const initialSignatureTrioData={
  trio1:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    baseOptionsList:[
    {
      id:1,
      text:"Regular Base",
      price:0,
      isSelected:false
     },{
      id:2,
      text:"Thin Crust",
      price:1.00,
      isSelected:false
     },{
      id:3,
      text:"Gluten Free Base",
      price:3.00,
      isSelected:false
     },
],
extraToppingsList:[
  {
    id:1,
    text:"Mozzarella",
    price:3.00,
    isSelected:false
   },
   {
    id:2,
    text:"Paneer",
    price:3.00,
    isSelected:false
   },
   {
    id:3,
    text:"Chicken",
    price:3.00,
    isSelected:false
   },
   {
    id:4,
    text:"Ham",
    price:3.00,
    isSelected:false
   },
   {
    id:5,
    text:"Bacon",
    price:3.00,
    isSelected:false
   },
   {
    id:6,
    text:"Pepperoni",
    price:3.00,
    isSelected:false
   },
   {
    id:7,
    text:"Prawns",
    price:3.00,
    isSelected:false
   },
   {
    id:8,
    text:"Salmon",
    price:3.00,
    isSelected:false
   },
   {
    id:9,
    text:"Black Olives",
    price:2.00,
    isSelected:false
   },
   {
    id:10,
    text:"Jalapeños",
    price:2.00,
    isSelected:false
   },
   {
    id:11,
    text:"Pineapple",
    price:2.00,
    isSelected:false
   },
   {
    id:12,
    text:"Coriander",
    price:2.00,
    isSelected:false
   },
   {
    id:13,
    text:"Capsicum",
    price:2.00,
    isSelected:false
   },
   {
    id:14,
    text:"Onion",
    price:2.00,
    isSelected:false
   },
   {
    id:15,
    text:"Sweet corn",
    price:2.00,
    isSelected:false
   },
   {
    id:16,
    text:"Anchovies",
    price:3.00,
    isSelected:false
   },
   {
    id:17,
    text:"Mushrooms",
    price:2.00,
    isSelected:false
   },
],
swirlsSauces:[
  {
   id:1,
   text:"Butter Sauce",
   price:1.00,
   isSelected:false
  },
  {
    id:2,
    text:"Peri Peri Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:3,
    text:"Hot Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:4,
    text:"Chipotle Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:5,
    text:"Garlic Aioli",
    price:1.00,
    isSelected:false
   },
   {
    id:6,
    text:"Mayonnaise",
    price:1.00,
    isSelected:false
   },
   {
    id:7,
    text:"BBQ Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:8,
    text:"Hollandaise Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:9,
    text:"Sweet Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:10,
    text:"Tomato Sauce",
    price:1.00,
    isSelected:false
   }
],
showSouces:false,showIngredients:false,showBaseOptions:false,showExtraToppings:false,
  showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false,

},
  trio2:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    baseOptionsList:[
    {
      id:1,
      text:"Regular Base",
      price:0,
      isSelected:false
     },{
      id:2,
      text:"Thin Crust",
      price:1.00,
      isSelected:false
     },{
      id:3,
      text:"Gluten Free Base",
      price:3.00,
      isSelected:false
     },
],
extraToppingsList:[
  {
    id:1,
    text:"Mozzarella",
    price:3.00,
    isSelected:false
   },
   {
    id:2,
    text:"Paneer",
    price:3.00,
    isSelected:false
   },
   {
    id:3,
    text:"Chicken",
    price:3.00,
    isSelected:false
   },
   {
    id:4,
    text:"Ham",
    price:3.00,
    isSelected:false
   },
   {
    id:5,
    text:"Bacon",
    price:3.00,
    isSelected:false
   },
   {
    id:6,
    text:"Pepperoni",
    price:3.00,
    isSelected:false
   },
   {
    id:7,
    text:"Prawns",
    price:3.00,
    isSelected:false
   },
   {
    id:8,
    text:"Salmon",
    price:3.00,
    isSelected:false
   },
   {
    id:9,
    text:"Black Olives",
    price:2.00,
    isSelected:false
   },
   {
    id:10,
    text:"Jalapeños",
    price:2.00,
    isSelected:false
   },
   {
    id:11,
    text:"Pineapple",
    price:2.00,
    isSelected:false
   },
   {
    id:12,
    text:"Coriander",
    price:2.00,
    isSelected:false
   },
   {
    id:13,
    text:"Capsicum",
    price:2.00,
    isSelected:false
   },
   {
    id:14,
    text:"Onion",
    price:2.00,
    isSelected:false
   },
   {
    id:15,
    text:"Sweet corn",
    price:2.00,
    isSelected:false
   },
   {
    id:16,
    text:"Anchovies",
    price:3.00,
    isSelected:false
   },
   {
    id:17,
    text:"Mushrooms",
    price:2.00,
    isSelected:false
   },
],
swirlsSauces:[
  {
   id:1,
   text:"Butter Sauce",
   price:1.00,
   isSelected:false
  },
  {
    id:2,
    text:"Peri Peri Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:3,
    text:"Hot Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:4,
    text:"Chipotle Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:5,
    text:"Garlic Aioli",
    price:1.00,
    isSelected:false
   },
   {
    id:6,
    text:"Mayonnaise",
    price:1.00,
    isSelected:false
   },
   {
    id:7,
    text:"BBQ Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:8,
    text:"Hollandaise Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:9,
    text:"Sweet Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:10,
    text:"Tomato Sauce",
    price:1.00,
    isSelected:false
   }
]
,
showSouces:false,showIngredients:false,showBaseOptions:false,showExtraToppings:false,
  showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false,

},
  trio3:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    baseOptionsList:[
    {
      id:1,
      text:"Regular Base",
      price:0,
      isSelected:false
     },{
      id:2,
      text:"Thin Crust",
      price:1.00,
      isSelected:false
     },{
      id:3,
      text:"Gluten Free Base",
      price:3.00,
      isSelected:false
     },
],
extraToppingsList:[
  {
    id:1,
    text:"Mozzarella",
    price:3.00,
    isSelected:false
   },
   {
    id:2,
    text:"Paneer",
    price:3.00,
    isSelected:false
   },
   {
    id:3,
    text:"Chicken",
    price:3.00,
    isSelected:false
   },
   {
    id:4,
    text:"Ham",
    price:3.00,
    isSelected:false
   },
   {
    id:5,
    text:"Bacon",
    price:3.00,
    isSelected:false
   },
   {
    id:6,
    text:"Pepperoni",
    price:3.00,
    isSelected:false
   },
   {
    id:7,
    text:"Prawns",
    price:3.00,
    isSelected:false
   },
   {
    id:8,
    text:"Salmon",
    price:3.00,
    isSelected:false
   },
   {
    id:9,
    text:"Black Olives",
    price:2.00,
    isSelected:false
   },
   {
    id:10,
    text:"Jalapeños",
    price:2.00,
    isSelected:false
   },
   {
    id:11,
    text:"Pineapple",
    price:2.00,
    isSelected:false
   },
   {
    id:12,
    text:"Coriander",
    price:2.00,
    isSelected:false
   },
   {
    id:13,
    text:"Capsicum",
    price:2.00,
    isSelected:false
   },
   {
    id:14,
    text:"Onion",
    price:2.00,
    isSelected:false
   },
   {
    id:15,
    text:"Sweet corn",
    price:2.00,
    isSelected:false
   },
   {
    id:16,
    text:"Anchovies",
    price:3.00,
    isSelected:false
   },
   {
    id:17,
    text:"Mushrooms",
    price:2.00,
    isSelected:false
   },
],
swirlsSauces:[
  {
   id:1,
   text:"Butter Sauce",
   price:1.00,
   isSelected:false
  },
  {
    id:2,
    text:"Peri Peri Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:3,
    text:"Hot Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:4,
    text:"Chipotle Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:5,
    text:"Garlic Aioli",
    price:1.00,
    isSelected:false
   },
   {
    id:6,
    text:"Mayonnaise",
    price:1.00,
    isSelected:false
   },
   {
    id:7,
    text:"BBQ Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:8,
    text:"Hollandaise Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:9,
    text:"Sweet Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:10,
    text:"Tomato Sauce",
    price:1.00,
    isSelected:false
   }
],
showSouces:false,showIngredients:false,showBaseOptions:false,showExtraToppings:false,
  showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false,

},

secialInstructions:'',itemCategory:'Specials',type:'',itemName:'',itemPrice:0,itemDescription:'',itemsCount:1,
    toggleClassicTrioModel:false,actualPrice:0,
    showPopupTrio1:false ,showPopupTrio2:false ,showPopupTrio3:false ,
    showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:false,showErrorForEmtyTrio2:false,
    SignatureRange:[
      {
        id:v4(),
        category:"Vegetarian",
        item:'Veg Delight Pizza',
        description:'tomato base, Mozzarella, mushrooms, garlic, black pepper, onion, capsicum, pineapple, oregano',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Onion',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:9,
            name:'Oregano',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Veg Triple Sauce Pizza',
        description:'tomato base, garlic, onion, pineapple, mayonnaise, peri-peri sauce, makhani sauce,ginger, black pepper, capsicum, Mozzarella, coriander',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:5,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:6,
            name:'Peri-Peri Sauce',
            isSelected:true
          },
          {
            id:7,
            name:'Makhani Sauce',
            isSelected:true
          },
          {
            id:8,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:10,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:11,
            name:'Coriander',
            isSelected:true
          },
          {
            id:12,
            name:'Ginger',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Pesto Corn Pizza',
        description:'Mozzarella , black pepper, spinach, sweet corn, mayonnaise, tomatoes, capsicum, pesto sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Pesto Sauce Base',
            isSelected:true
          },
          {
            id:2,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:3,
            name:'Spinach',
            isSelected:true
          },
          {
            id:4,
            name:'Sweet Corn',
            isSelected:true
          },
          {
            id:5,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:6,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:7,
            name:'Coriander',
            isSelected:true
          },
          {
            id:8,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Veg Supreme Pizza',
        description:'tomato base, garlic, black pepper, onion, mushrooms, ginger, pineapple, jalapenos, coriander, Mozzarella, capsicum, black olives',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:4,
            name:'Onion',
            isSelected:true
          },
          {
            id:5,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:6,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:7,
            name:'Jalapenos',
            isSelected:true
          },
          {
            id:8,
            name:'Coriander',
            isSelected:true
          },
          {
            id:9,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:10,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:11,
            name:'Black Olives',
            isSelected:true
          },
          {
            id:12,
            name:'Ginger',
            isSelected:true
          },
       
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Butter Paneer Pizza',
        description:'tomato base, onion, garlic, coriander, Mozzarella, paneer, Makhani sauce (contains nuts)',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Coriander',
            isSelected:true
          },
          {
            id:5,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:6,
            name:'Paneer',
            isSelected:true
          },
          {
            id:7,
            name:'Makhani Sauce',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Peri Peri Paneer Pizza',
        description:'tomato base, onion, garlic, paneer, capsicum, coriander, peri peri sauce, black pepper, Mozzarella',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Paneer',
            isSelected:true
          },
          {
            id:5,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:6,
            name:'Coriander',
            isSelected:true
          },
          {
            id:7,
            name:'Peri Peri Sauce',
            isSelected:true
          },
          {
            id:8,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:9,
            name:'Mozzarella',
            isSelected:true
          },    
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Chilli Paneer Pizza',
        description:'chilli sauce base, onion, garlic, coriander, black pepper, Mozzarella, capsicum, paneer, chilli sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Chilli Sauce Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Coriander',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Paneer',
            isSelected:true
          },
          {
            id:9,
            name:'Chilli Sauce',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Spicy Paneer Pasand Pizza',
        description:'Tomato Base, Capsicum, Tomatoes ,Garlic, Onion, Garlic salt ,Chilli Flakes , Paneer, Coriander , Mozzarella .',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:3,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Onion',
            isSelected:true
          },
          {
            id:6,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:7,
            name:'Paneer',
            isSelected:true
          },
          {
            id:8,
            name:'Coriander',
            isSelected:true
          },
          {
            id:9,
            name:'Mozzarella',
            isSelected:true
          },
     
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Spicy Corn Deluxe Pizza',
        description:'Tomato base, Mozzarella ,Onion,Garlic, Black pepper, Corn, Black Olives ,Chilli Flakes, Capsicum, Jalapeños',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Black pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Corn',
            isSelected:true
          },
          {
            id:7,
            name:'Black Olives',
            isSelected:true
          },
          {
            id:8,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:10,
            name:'Jalapeños',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Creamy Mushroom Pizza',
        description:'Creamy Sauce, Mushrooms, Onion, Garlic & Herb, Black Pepper, Oregano, Mozzarella and Capsicum.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Creamy Sauce',
            isSelected:true
          },
          {
            id:2,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic & Herb',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Oregano',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Capsicum',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Paneer Tadka',
        description:'Tomato Base , Mozzarella, Capsicum, Jalapeños, Onion , Garlic, Black Pepper, Tandoori Paneer , Coriander.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:4,
            name:'Jalapeños',
            isSelected:true
          },
          {
            id:5,
            name:'Onion',
            isSelected:true
          },
          {
            id:6,
            name:'Garlic',
            isSelected:true
          },
          {
            id:7,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:8,
            name:'Tandoori Paneer',
            isSelected:true
          },
          {
            id:9,
            name:'Coriander',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Apricot Chicken Pizza',
        description:'tomato base, onion, garlic, chicken, capsicum, pineapple, Mozzarella, spiced apricot sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Chicken',
            isSelected:true
          },
          {
            id:5,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:6,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Spiced Apricot Sauce',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Butter Chicken Pizza',
        description:'tomato base, Mozzarella, chicken, butter chicken sauce (contains nuts)',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Chicken',
            isSelected:true
          },
          {
            id:4,
            name:'Butter Chicken Sauce',
            isSelected:true
          },
          
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Cajun Chicken Pizza',
        description:'tomato base, onion, garlic, black pepper, Mozzarella, tomatoes, capsicum, chilli flakes, spinach, cajun spice, chicken, Garlic Aioli',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:5,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:6,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:9,
            name:'Spinach',
            isSelected:true
          },
          {
            id:10,
            name:'Cajun Spice',
            isSelected:true
          },
          {
            id:11,
            name:'Chicken',
            isSelected:true
          },
          {
            id:12,
            name:'Garlic Aioli',
            isSelected:true
          },
      
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Chicken Triple Sauce Pizza',
        description:'tomato base, onion, garlic, pineapple, mayonnaise, chicken, capsicum, black pepper, peri-peri sauce, butter chicken sauce, Mozzarella, oregano (contains nuts)',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:5,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:6,
            name:'Chicken',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:9,
            name:'Peri-Peri Sauce',
            isSelected:true
          },
          {
            id:10,
            name:'Butter Chicken Sauce',
            isSelected:true
          },
          {
            id:11,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:12,
            name:'Oregano',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Chipotle Chicken Pizza',
        description:'chilli flakes, capsicum, onion, garlic, black pepper, Mozzarella, chicken, chipotle sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:2,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:7,
            name:'Chicken',
            isSelected:true
          },
          {
            id:8,
            name:'Chipotle Sauce',
            isSelected:true
          },
    
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Cranberry Chicken & Camembert Pizza',
        description:'tomato base, spinach, Mozzarella, cranberry sauce, chicken, Camembert',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Spinach',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Cranberry Sauce',
            isSelected:true
          },
          {
            id:5,
            name:'Chicken',
            isSelected:true
          },
          {
            id:6,
            name:'Camembert',
            isSelected:true
          },    
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Chilli Chicken Pizza',
        description:'chilli sauce base, onion, garlic, coriander, black pepper, Mozzarella, capsicum, chicken',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Chilli Sauce Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Coriander',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Chicken',
            isSelected:true
          },    
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Peri Peri Chicken Pizza',
        description:'tomato base, onion, garlic, black pepper, peri-peri sauce, mayonnaise, Mozzarella, capsicum, chicken oregano',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:5,
            name:'Peri-Peri Sauce',
            isSelected:true
          },
          {
            id:6,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:9,
            name:'Chicken Oregano',
            isSelected:true
          },
     
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Pesto Chicken Pizza',
        description:'spinach, chicken, pesto sauce, mayonnaise, black pepper,Mozzarella, capsicum, tomatoes',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Spinach',
            isSelected:true
          },
          {
            id:2,
            name:'Spinach',
            isSelected:true
          },
          {
            id:3,
            name:'Pesto Sauce',
            isSelected:true
          },
          {
            id:4,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },      {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Tomatoes',
            isSelected:true
          },    
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Bacon and Alfredo Chicken Pizza',
        description:'creamy sauce, onion, garlic, mushrooms, chicken, black pepper, capsicum, Mozzarella, bacon',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Creamy Sauce',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:5,
            name:'Chicken',
            isSelected:true
          },
          {
            id:6,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:9,
            name:'Bacon',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Satay Chicken Pizza',
        description:'satay sauce, Mozzarella, onion, garlic, chilli flakes, capsicum, black pepper, chicken (contains nuts)',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Satay Sauce',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:7,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:8,
            name:'Chicken',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Tandoori Chicken Pizza',
        description:'tomato base, onion, mushrooms, tandoori chicken, Mozzarella, capsicum, coriander',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:4,
            name:'Tandoori Chicken',
            isSelected:true
          },
          {
            id:5,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:7,
            name:'Coriander',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'BBQ Chicken & Bacon',
        description:'BBQ Base , Onion , Mozzarella, Chicken , Bacon , Capsicum and Mayonnaise',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'BBQ Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Chicken',
            isSelected:true
          },
          {
            id:5,
            name:'Bacon',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:7,
            name:'Mayonnaise',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Melting Hot Pizza',
        description:'cheese sauce base, onion, garlic, pepperoni, jalapenos, Mozzarella, capsicum, cabanossi',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Cheese Sauce Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Pepperoni',
            isSelected:true
          },
          {
            id:5,
            name:'Jalapenos',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Cabanossi',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Moroccans Lamb Pizza',
        description:'tomato base, onion, garlic, black pepper, chilli flakes, coriander, Mozzarella, capsicum, spiced lamb balls',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:5,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:6,
            name:'Coriander',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:9,
            name:'Spiced Lamb Balls',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Bacon and Mushroom Pizza',
        description:'tomato base, mushrooms, garlic, creamy sauce, tomatoes, black pepper, bacon, streaky bacon',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Creamy sauce',
            isSelected:true
          },
          {
            id:5,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:6,
            name:'Black pepper',
            isSelected:true
          },
          {
            id:7,
            name:'Bacon',
            isSelected:true
          },
          {
            id:8,
            name:'Streaky bacon',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'BBQ Beef and Bacon Pizza',
        description:'tomato base, onion, beef cubes, bacon, BBQ sauce, Mozzarella',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Beef Cubes',
            isSelected:true
          },
          {
            id:4,
            name:'Bacon',
            isSelected:true
          },
          {
            id:5,
            name:'BBQ Sauce',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },    
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Hawaiian Pizza',
        description:'tomato base, ham slices, pineapple, Mozzarella, bacon',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Ham Slices',
            isSelected:true
          },
          {
            id:3,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:4,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:5,
            name:'Bacon',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Italian Pizza',
        description:'tomato base, garlic, ham slices, mushrooms, salami, capsicum, black olives, Mozzarella, oregano',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Ham Slices',
            isSelected:true
          },
          {
            id:4,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:5,
            name:'Salami',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:7,
            name:'Black Olives',
            isSelected:true
          },
          {
            id:8,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:9,
            name:'Oregano',
            isSelected:true
          },
    
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Spicy Roasted Beef Pizza',
        description:'tomato base, garlic, black pepper, chilli flakes, beef cubes, jalapenos, tomatoes, Mozzarella, capsicum, onion',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:4,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:5,
            name:'Beef Cubes',
            isSelected:true
          },
          {
            id:6,
            name:'Jalapenos',
            isSelected:true
          },
          {
            id:7,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:8,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:10,
            name:'Onion',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Meat Supreme Pizza',
        description:'tomato base, Mozzarella, salami, capsicum, onion, mushrooms, black olives, ham slices, meat balls',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Salami',
            isSelected:true
          },
          {
            id:4,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:5,
            name:'Onion',
            isSelected:true
          },
          {
            id:6,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:7,
            name:'Black Olives',
            isSelected:true
          },
          {
            id:8,
            name:'Ham Slices',
            isSelected:true
          },
          {
            id:9,
            name:'Meat Balls',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Meat Lovers Pizza',
        description:'tomato base, Mozzarella, salami, meat balls, bacon, ham, BBQ sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Salami',
            isSelected:true
          },
          {
            id:4,
            name:'Meat Balls',
            isSelected:true
          },
          {
            id:5,
            name:'Bacon',
            isSelected:true
          },
          {
            id:6,
            name:'Ham',
            isSelected:true
          },
          {
            id:7,
            name:'BBQ Sauce',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Meaty Boyz Pizza',
        description:'tomato base, garlic, onion, ham slices, salami, pineapple, Mozzarella, BBQ sauce, capsicum, tomatoes, bacon, meat balls',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Ham Slices',
            isSelected:true
          },
          {
            id:5,
            name:'Salami',
            isSelected:true
          },
          {
            id:6,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'BBQ Sauce',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:10,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:11,
            name:'Bacon',
            isSelected:true
          },
          {
            id:12,
            name:'Meat Balls',
            isSelected:true
          },
         
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'The Meat Platter Pizza',
        description:'tomato base, Camembert, spinach, onion, Mozzarella, prawns, chicken sausage, chilli flakes, black olives, capsicum, chipotle sauce, cabanossi',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Camembert',
            isSelected:true
          },
          {
            id:3,
            name:'Spinach',
            isSelected:true
          },
          {
            id:4,
            name:'Onion',
            isSelected:true
          },
          {
            id:5,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:6,
            name:'Prawns',
            isSelected:true
          },
          {
            id:7,
            name:'Chicken Sausage',
            isSelected:true
          },
          {
            id:8,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:9,
            name:'Black Olives',
            isSelected:true
          },
          {
            id:10,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:11,
            name:'Chipotle Sauce',
            isSelected:true
          },
          {
            id:12,
            name:'',
            isSelected:true
          },
          {
            id:13,
            name:'Kransky',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Mexican Pizza',
        description:'',
        price:16.50,
        ingredients:[]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Peri Peri Lamb',
        description:'Tomato Base, Mayonnaise ,Peri Peri Sauce,Onion, Garlic , Black Pepper , Mozzarella , Lamb Cubes , Capsicum.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:3,
            name:'Peri Peri Sauce',
            isSelected:true
          },
          {
            id:4,
            name:'Onion',
            isSelected:true
          },
          {
            id:5,
            name:'Garlic',
            isSelected:true
          },
          {
            id:6,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Lamb Cubes',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Beef & kransky Pizza',
        description:'Beef, Capsicum , Mozzarella, Cabanossi , Onion & Garlic Aioli Sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Beef',
            isSelected:true
          },
          {
            id:2,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Cabanossi',
            isSelected:true
          },
          {
            id:5,
            name:'Onion',
            isSelected:true
          },
          {
            id:6,
            name:'Garlic Aioli',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Siciliano Pizza',
        description:'Tomato base, Garlic, Mozzarella, Ham, Salami, Jalapeños, Black Olives , Oregano, Capsicum, Anchovies.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Ham',
            isSelected:true
          },
          {
            id:5,
            name:'Salami',
            isSelected:true
          },
          {
            id:6,
            name:'Jalapeños',
            isSelected:true
          },
          {
            id:7,
            name:'Oregano',
            isSelected:true
          },
          {
            id:8,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:9,
            name:'Anchovies',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Jamaican Jerk Prawns Pizza',
        description:'tomato base, pineapple, spinach, capsicum, onion, garlic, coriander, black pepper, Mozzarella, spiced prawns',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:3,
            name:'Spinach',
            isSelected:true
          },
          {
            id:4,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:5,
            name:'Onion',
            isSelected:true
          },
          {
            id:6,
            name:'Garlic',
            isSelected:true
          },
          {
            id:7,
            name:'Coriander',
            isSelected:true
          },
          {
            id:8,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:9,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:10,
            name:'Spiced Prawns',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Creamy Prawns and Bacon Pizza',
        description:'creamy sauce, garlic, spinach, Mozzarella, prawns, black pepper, bacon',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Creamy Sauce',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Spinach',
            isSelected:true
          },
          {
            id:4,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:5,
            name:'Prawns',
            isSelected:true
          },
          {
            id:6,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:7,
            name:'Bacon',
            isSelected:true
          },
         
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Garlic Prawns Pizza',
        description:'garlic salt, onion, capsicum, prawns, black pepper, oregano',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Garlic Salt',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:4,
            name:'Prawns',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Oregano',
            isSelected:true
          },
         
        ]
    
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Prawn and Bacon Pizza',
        description:'tomato base, Mozzarella, prawns, bacon, spinach, tomatoes, black pepper, hollandaise sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Prawns',
            isSelected:true
          },
          {
            id:4,
            name:'Bacon',
            isSelected:true
          },
          {
            id:5,
            name:'Spinach',
            isSelected:true
          },
          {
            id:6,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:7,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:8,
            name:'Hollandaise Sauce',
            isSelected:true
          },
          
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Salmon and Feta Pizza',
        description:'tomato base, black pepper, Mozzarella, tomatoes, spinach, Feta, salmon, hollandaise sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:5,
            name:'Spinach',
            isSelected:true
          },
          {
            id:6,
            name:'Feta',
            isSelected:true
          },
          {
            id:7,
            name:'Salmon',
            isSelected:true
          },
          {
            id:8,
            name:'Hollandaise Sauce',
            isSelected:true
          },
          
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Chipotle Prawns Pizza',
        description:'Chipotle Sauce, Seasoned Prawns , Onion , Garlic , Black Pepper, Mozzarella , Capsicum, Chilli Flakes',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Chipotle Sauce',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Seasoned Prawns',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Chilli Flakes',
            isSelected:true
          },
         
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Pesto Prawns Pizza',
        description:'Pesto Sauce ,Seasoned Prawns, Spinach , Mayonnaise , Mozzarella ,Tomatoes, Black Pepper, Capsicum.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:2,
            name:'Pesto sauce',
            isSelected:true
          },
          {
            id:3,
            name:'Seasoned Prawns',
            isSelected:true
          },
          {
            id:4,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:5,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:6,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:7,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:8,
            name:'Spinach',
            isSelected:true
          },
           
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Seafood Supreme',
        description:'Tomato Base, Onion, Garlic , Tuna , Black Olives , Anchovies , Mozzarella, Garlic Aioli Sauce, Seasoned Prawns.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Tuna',
            isSelected:true
          },
          {
            id:5,
            name:'Black Olives',
            isSelected:true
          },{
            id:6,
            name:'Anchovies',
            isSelected:true
          },
           
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Garlic Aioli Sauce',
            isSelected:true
          },
          {
            id:9,
            name:'Seasoned Prawns',
            isSelected:true
          },
           
        ]
      },
    ]
}

const initialTwinMealData={
  side1:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    swirlsSauces:[
      {
       id:1,
       text:"Butter Sauce",
       price:1.00,
       isSelected:false
      },
      {
        id:2,
        text:"Peri Peri Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:3,
        text:"Hot Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:4,
        text:"Chipotle Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:5,
        text:"Garlic Aioli",
        price:1.00,
        isSelected:false
       },
       {
        id:6,
        text:"Mayonnaise",
        price:1.00,
        isSelected:false
       },
       {
        id:7,
        text:"BBQ Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:8,
        text:"Hollandaise Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:9,
        text:"Sweet Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:10,
        text:"Tomato Sauce",
        price:1.00,
        isSelected:false
       }
    ],
  },
  side2:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    swirlsSauces:[
      {
       id:1,
       text:"Butter Sauce",
       price:1.00,
       isSelected:false
      },
      {
        id:2,
        text:"Peri Peri Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:3,
        text:"Hot Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:4,
        text:"Chipotle Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:5,
        text:"Garlic Aioli",
        price:1.00,
        isSelected:false
       },
       {
        id:6,
        text:"Mayonnaise",
        price:1.00,
        isSelected:false
       },
       {
        id:7,
        text:"BBQ Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:8,
        text:"Hollandaise Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:9,
        text:"Sweet Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:10,
        text:"Tomato Sauce",
        price:1.00,
        isSelected:false
       }
    ],
  },
  trio1:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    baseOptionsList:[
    {
      id:1,
      text:"Regular Base",
      price:0,
      isSelected:false
     },{
      id:2,
      text:"Thin Crust",
      price:1.00,
      isSelected:false
     },{
      id:3,
      text:"Gluten Free Base",
      price:3.00,
      isSelected:false
     },
],
extraToppingsList:[
  {
    id:1,
    text:"Mozzarella",
    price:3.00,
    isSelected:false
   },
   {
    id:2,
    text:"Paneer",
    price:3.00,
    isSelected:false
   },
   {
    id:3,
    text:"Chicken",
    price:3.00,
    isSelected:false
   },
   {
    id:4,
    text:"Ham",
    price:3.00,
    isSelected:false
   },
   {
    id:5,
    text:"Bacon",
    price:3.00,
    isSelected:false
   },
   {
    id:6,
    text:"Pepperoni",
    price:3.00,
    isSelected:false
   },
   {
    id:7,
    text:"Prawns",
    price:3.00,
    isSelected:false
   },
   {
    id:8,
    text:"Salmon",
    price:3.00,
    isSelected:false
   },
   {
    id:9,
    text:"Black Olives",
    price:2.00,
    isSelected:false
   },
   {
    id:10,
    text:"Jalapeños",
    price:2.00,
    isSelected:false
   },
   {
    id:11,
    text:"Pineapple",
    price:2.00,
    isSelected:false
   },
   {
    id:12,
    text:"Coriander",
    price:2.00,
    isSelected:false
   },
   {
    id:13,
    text:"Capsicum",
    price:2.00,
    isSelected:false
   },
   {
    id:14,
    text:"Onion",
    price:2.00,
    isSelected:false
   },
   {
    id:15,
    text:"Sweet corn",
    price:2.00,
    isSelected:false
   },
   {
    id:16,
    text:"Anchovies",
    price:3.00,
    isSelected:false
   },
   {
    id:17,
    text:"Mushrooms",
    price:2.00,
    isSelected:false
   },
],
swirlsSauces:[
  {
   id:1,
   text:"Butter Sauce",
   price:1.00,
   isSelected:false
  },
  {
    id:2,
    text:"Peri Peri Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:3,
    text:"Hot Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:4,
    text:"Chipotle Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:5,
    text:"Garlic Aioli",
    price:1.00,
    isSelected:false
   },
   {
    id:6,
    text:"Mayonnaise",
    price:1.00,
    isSelected:false
   },
   {
    id:7,
    text:"BBQ Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:8,
    text:"Hollandaise Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:9,
    text:"Sweet Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:10,
    text:"Tomato Sauce",
    price:1.00,
    isSelected:false
   }
],
showSouces:false,showIngredients:false,showBaseOptions:false,showExtraToppings:false,
  showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false,

},
  trio2:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    baseOptionsList:[
    {
      id:1,
      text:"Regular Base",
      price:0,
      isSelected:false
     },{
      id:2,
      text:"Thin Crust",
      price:1.00,
      isSelected:false
     },{
      id:3,
      text:"Gluten Free Base",
      price:3.00,
      isSelected:false
     },
],
extraToppingsList:[
  {
    id:1,
    text:"Mozzarella",
    price:3.00,
    isSelected:false
   },
   {
    id:2,
    text:"Paneer",
    price:3.00,
    isSelected:false
   },
   {
    id:3,
    text:"Chicken",
    price:3.00,
    isSelected:false
   },
   {
    id:4,
    text:"Ham",
    price:3.00,
    isSelected:false
   },
   {
    id:5,
    text:"Bacon",
    price:3.00,
    isSelected:false
   },
   {
    id:6,
    text:"Pepperoni",
    price:3.00,
    isSelected:false
   },
   {
    id:7,
    text:"Prawns",
    price:3.00,
    isSelected:false
   },
   {
    id:8,
    text:"Salmon",
    price:3.00,
    isSelected:false
   },
   {
    id:9,
    text:"Black Olives",
    price:2.00,
    isSelected:false
   },
   {
    id:10,
    text:"Jalapeños",
    price:2.00,
    isSelected:false
   },
   {
    id:11,
    text:"Pineapple",
    price:2.00,
    isSelected:false
   },
   {
    id:12,
    text:"Coriander",
    price:2.00,
    isSelected:false
   },
   {
    id:13,
    text:"Capsicum",
    price:2.00,
    isSelected:false
   },
   {
    id:14,
    text:"Onion",
    price:2.00,
    isSelected:false
   },
   {
    id:15,
    text:"Sweet corn",
    price:2.00,
    isSelected:false
   },
   {
    id:16,
    text:"Anchovies",
    price:3.00,
    isSelected:false
   },
   {
    id:17,
    text:"Mushrooms",
    price:2.00,
    isSelected:false
   },
],
swirlsSauces:[
  {
   id:1,
   text:"Butter Sauce",
   price:1.00,
   isSelected:false
  },
  {
    id:2,
    text:"Peri Peri Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:3,
    text:"Hot Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:4,
    text:"Chipotle Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:5,
    text:"Garlic Aioli",
    price:1.00,
    isSelected:false
   },
   {
    id:6,
    text:"Mayonnaise",
    price:1.00,
    isSelected:false
   },
   {
    id:7,
    text:"BBQ Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:8,
    text:"Hollandaise Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:9,
    text:"Sweet Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:10,
    text:"Tomato Sauce",
    price:1.00,
    isSelected:false
   }
]
,
showSouces:false,showIngredients:false,showBaseOptions:false,showExtraToppings:false,
  showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false,

}
 , 
    dishes:[
      {
        id:1,
        name:'Garlic Bread',
        isSauseThere:true,
        isSelected:false
      }
      ,{
        id:2,
        name:'Chips',
        isSauseThere:true,
         isSelected:false
      },
      {
        id:3,
        name:'Wedges',
        isSauseThere:true,
         isSelected:false
      },
      {
        id:4,
        name:'Potato Hash Bites',
        isSauseThere:true,
         isSelected:false
      },
      {
        id:5,
        name:'Curly Fries',
        isSauseThere:true,
         isSelected:false
      },
      {
        id:6,
        name:'Coke 1.5L',
        isSauseThere:false,
         isSelected:false
      },
      {
        id:7,
        name:'Coke Zero 1.5L',
        isSauseThere:false,
         isSelected:false
      },
      {
        id:8,
        name:'Sprite 1.5L',
        isSauseThere:false,
         isSelected:false
      },
      {
        id:9,
        name:'Fanta 1.5L',
        isSauseThere:false,
         isSelected:false
      },
      {
        id:10,
        name:'L&P 1.5L',
        isSauseThere:false,
         isSelected:false
      },
      {
        id:11,
        name:'Lift 1.5L',
        isSauseThere:false,
         isSelected:false
      },
    
    ],
    SignatureRange:[
      {
        id:v4(),
        category:"Vegetarian",
        item:'Veg Delight Pizza',
        description:'tomato base, Mozzarella, mushrooms, garlic, black pepper, onion, capsicum, pineapple, oregano',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Onion',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:9,
            name:'Oregano',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Veg Triple Sauce Pizza',
        description:'tomato base, garlic, onion, pineapple, mayonnaise, peri-peri sauce, makhani sauce,ginger, black pepper, capsicum, Mozzarella, coriander',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:5,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:6,
            name:'Peri-Peri Sauce',
            isSelected:true
          },
          {
            id:7,
            name:'Makhani Sauce',
            isSelected:true
          },
          {
            id:8,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:10,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:11,
            name:'Coriander',
            isSelected:true
          },
          {
            id:12,
            name:'Ginger',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Pesto Corn Pizza',
        description:'Mozzarella , black pepper, spinach, sweet corn, mayonnaise, tomatoes, capsicum, pesto sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Pesto Sauce Base',
            isSelected:true
          },
          {
            id:2,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:3,
            name:'Spinach',
            isSelected:true
          },
          {
            id:4,
            name:'Sweet Corn',
            isSelected:true
          },
          {
            id:5,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:6,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:7,
            name:'Coriander',
            isSelected:true
          },
          {
            id:8,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Veg Supreme Pizza',
        description:'tomato base, garlic, black pepper, onion, mushrooms, ginger, pineapple, jalapenos, coriander, Mozzarella, capsicum, black olives',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:4,
            name:'Onion',
            isSelected:true
          },
          {
            id:5,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:6,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:7,
            name:'Jalapenos',
            isSelected:true
          },
          {
            id:8,
            name:'Coriander',
            isSelected:true
          },
          {
            id:9,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:10,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:11,
            name:'Black Olives',
            isSelected:true
          },
          {
            id:12,
            name:'Ginger',
            isSelected:true
          },
       
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Butter Paneer Pizza',
        description:'tomato base, onion, garlic, coriander, Mozzarella, paneer, Makhani sauce (contains nuts)',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Coriander',
            isSelected:true
          },
          {
            id:5,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:6,
            name:'Paneer',
            isSelected:true
          },
          {
            id:7,
            name:'Makhani Sauce',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Peri Peri Paneer Pizza',
        description:'tomato base, onion, garlic, paneer, capsicum, coriander, peri peri sauce, black pepper, Mozzarella',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Paneer',
            isSelected:true
          },
          {
            id:5,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:6,
            name:'Coriander',
            isSelected:true
          },
          {
            id:7,
            name:'Peri Peri Sauce',
            isSelected:true
          },
          {
            id:8,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:9,
            name:'Mozzarella',
            isSelected:true
          },    
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Chilli Paneer Pizza',
        description:'chilli sauce base, onion, garlic, coriander, black pepper, Mozzarella, capsicum, paneer, chilli sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Chilli Sauce Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Coriander',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Paneer',
            isSelected:true
          },
          {
            id:9,
            name:'Chilli Sauce',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Spicy Paneer Pasand Pizza',
        description:'Tomato Base, Capsicum, Tomatoes ,Garlic, Onion, Garlic salt ,Chilli Flakes , Paneer, Coriander , Mozzarella .',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:3,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Onion',
            isSelected:true
          },
          {
            id:6,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:7,
            name:'Paneer',
            isSelected:true
          },
          {
            id:8,
            name:'Coriander',
            isSelected:true
          },
          {
            id:9,
            name:'Mozzarella',
            isSelected:true
          },
     
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Spicy Corn Deluxe Pizza',
        description:'Tomato base, Mozzarella ,Onion,Garlic, Black pepper, Corn, Black Olives ,Chilli Flakes, Capsicum, Jalapeños',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Black pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Corn',
            isSelected:true
          },
          {
            id:7,
            name:'Black Olives',
            isSelected:true
          },
          {
            id:8,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:10,
            name:'Jalapeños',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Creamy Mushroom Pizza',
        description:'Creamy Sauce, Mushrooms, Onion, Garlic & Herb, Black Pepper, Oregano, Mozzarella and Capsicum.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Creamy Sauce',
            isSelected:true
          },
          {
            id:2,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic & Herb',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Oregano',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Capsicum',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Paneer Tadka',
        description:'Tomato Base , Mozzarella, Capsicum, Jalapeños, Onion , Garlic, Black Pepper, Tandoori Paneer , Coriander.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:4,
            name:'Jalapeños',
            isSelected:true
          },
          {
            id:5,
            name:'Onion',
            isSelected:true
          },
          {
            id:6,
            name:'Garlic',
            isSelected:true
          },
          {
            id:7,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:8,
            name:'Tandoori Paneer',
            isSelected:true
          },
          {
            id:9,
            name:'Coriander',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Apricot Chicken Pizza',
        description:'tomato base, onion, garlic, chicken, capsicum, pineapple, Mozzarella, spiced apricot sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Chicken',
            isSelected:true
          },
          {
            id:5,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:6,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Spiced Apricot Sauce',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Butter Chicken Pizza',
        description:'tomato base, Mozzarella, chicken, butter chicken sauce (contains nuts)',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Chicken',
            isSelected:true
          },
          {
            id:4,
            name:'Butter Chicken Sauce',
            isSelected:true
          },
          
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Cajun Chicken Pizza',
        description:'tomato base, onion, garlic, black pepper, Mozzarella, tomatoes, capsicum, chilli flakes, spinach, cajun spice, chicken, Garlic Aioli',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:5,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:6,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:9,
            name:'Spinach',
            isSelected:true
          },
          {
            id:10,
            name:'Cajun Spice',
            isSelected:true
          },
          {
            id:11,
            name:'Chicken',
            isSelected:true
          },
          {
            id:12,
            name:'Garlic Aioli',
            isSelected:true
          },
      
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Chicken Triple Sauce Pizza',
        description:'tomato base, onion, garlic, pineapple, mayonnaise, chicken, capsicum, black pepper, peri-peri sauce, butter chicken sauce, Mozzarella, oregano (contains nuts)',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:5,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:6,
            name:'Chicken',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:9,
            name:'Peri-Peri Sauce',
            isSelected:true
          },
          {
            id:10,
            name:'Butter Chicken Sauce',
            isSelected:true
          },
          {
            id:11,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:12,
            name:'Oregano',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Chipotle Chicken Pizza',
        description:'chilli flakes, capsicum, onion, garlic, black pepper, Mozzarella, chicken, chipotle sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:2,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:7,
            name:'Chicken',
            isSelected:true
          },
          {
            id:8,
            name:'Chipotle Sauce',
            isSelected:true
          },
    
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Cranberry Chicken & Camembert Pizza',
        description:'tomato base, spinach, Mozzarella, cranberry sauce, chicken, Camembert',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Spinach',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Cranberry Sauce',
            isSelected:true
          },
          {
            id:5,
            name:'Chicken',
            isSelected:true
          },
          {
            id:6,
            name:'Camembert',
            isSelected:true
          },    
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Chilli Chicken Pizza',
        description:'chilli sauce base, onion, garlic, coriander, black pepper, Mozzarella, capsicum, chicken',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Chilli Sauce Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Coriander',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Chicken',
            isSelected:true
          },    
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Peri Peri Chicken Pizza',
        description:'tomato base, onion, garlic, black pepper, peri-peri sauce, mayonnaise, Mozzarella, capsicum, chicken oregano',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:5,
            name:'Peri-Peri Sauce',
            isSelected:true
          },
          {
            id:6,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:9,
            name:'Chicken Oregano',
            isSelected:true
          },
     
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Pesto Chicken Pizza',
        description:'spinach, chicken, pesto sauce, mayonnaise, black pepper,Mozzarella, capsicum, tomatoes',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Spinach',
            isSelected:true
          },
          {
            id:2,
            name:'Spinach',
            isSelected:true
          },
          {
            id:3,
            name:'Pesto Sauce',
            isSelected:true
          },
          {
            id:4,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },      {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Tomatoes',
            isSelected:true
          },    
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Bacon and Alfredo Chicken Pizza',
        description:'creamy sauce, onion, garlic, mushrooms, chicken, black pepper, capsicum, Mozzarella, bacon',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Creamy Sauce',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:5,
            name:'Chicken',
            isSelected:true
          },
          {
            id:6,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:9,
            name:'Bacon',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Satay Chicken Pizza',
        description:'satay sauce, Mozzarella, onion, garlic, chilli flakes, capsicum, black pepper, chicken (contains nuts)',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Satay Sauce',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:7,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:8,
            name:'Chicken',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Tandoori Chicken Pizza',
        description:'tomato base, onion, mushrooms, tandoori chicken, Mozzarella, capsicum, coriander',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:4,
            name:'Tandoori Chicken',
            isSelected:true
          },
          {
            id:5,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:7,
            name:'Coriander',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'BBQ Chicken & Bacon',
        description:'BBQ Base , Onion , Mozzarella, Chicken , Bacon , Capsicum and Mayonnaise',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'BBQ Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Chicken',
            isSelected:true
          },
          {
            id:5,
            name:'Bacon',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:7,
            name:'Mayonnaise',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Melting Hot Pizza',
        description:'cheese sauce base, onion, garlic, pepperoni, jalapenos, Mozzarella, capsicum, cabanossi',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Cheese Sauce Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Pepperoni',
            isSelected:true
          },
          {
            id:5,
            name:'Jalapenos',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Cabanossi',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Moroccans Lamb Pizza',
        description:'tomato base, onion, garlic, black pepper, chilli flakes, coriander, Mozzarella, capsicum, spiced lamb balls',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:5,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:6,
            name:'Coriander',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:9,
            name:'Spiced Lamb Balls',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Bacon and Mushroom Pizza',
        description:'tomato base, mushrooms, garlic, creamy sauce, tomatoes, black pepper, bacon, streaky bacon',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Creamy sauce',
            isSelected:true
          },
          {
            id:5,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:6,
            name:'Black pepper',
            isSelected:true
          },
          {
            id:7,
            name:'Bacon',
            isSelected:true
          },
          {
            id:8,
            name:'Streaky bacon',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'BBQ Beef and Bacon Pizza',
        description:'tomato base, onion, beef cubes, bacon, BBQ sauce, Mozzarella',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Beef Cubes',
            isSelected:true
          },
          {
            id:4,
            name:'Bacon',
            isSelected:true
          },
          {
            id:5,
            name:'BBQ Sauce',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },    
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Hawaiian Pizza',
        description:'tomato base, ham slices, pineapple, Mozzarella, bacon',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Ham Slices',
            isSelected:true
          },
          {
            id:3,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:4,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:5,
            name:'Bacon',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Italian Pizza',
        description:'tomato base, garlic, ham slices, mushrooms, salami, capsicum, black olives, Mozzarella, oregano',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Ham Slices',
            isSelected:true
          },
          {
            id:4,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:5,
            name:'Salami',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:7,
            name:'Black Olives',
            isSelected:true
          },
          {
            id:8,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:9,
            name:'Oregano',
            isSelected:true
          },
    
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Spicy Roasted Beef Pizza',
        description:'tomato base, garlic, black pepper, chilli flakes, beef cubes, jalapenos, tomatoes, Mozzarella, capsicum, onion',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:4,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:5,
            name:'Beef Cubes',
            isSelected:true
          },
          {
            id:6,
            name:'Jalapenos',
            isSelected:true
          },
          {
            id:7,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:8,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:10,
            name:'Onion',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Meat Supreme Pizza',
        description:'tomato base, Mozzarella, salami, capsicum, onion, mushrooms, black olives, ham slices, meat balls',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Salami',
            isSelected:true
          },
          {
            id:4,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:5,
            name:'Onion',
            isSelected:true
          },
          {
            id:6,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:7,
            name:'Black Olives',
            isSelected:true
          },
          {
            id:8,
            name:'Ham Slices',
            isSelected:true
          },
          {
            id:9,
            name:'Meat Balls',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Meat Lovers Pizza',
        description:'tomato base, Mozzarella, salami, meat balls, bacon, ham, BBQ sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Salami',
            isSelected:true
          },
          {
            id:4,
            name:'Meat Balls',
            isSelected:true
          },
          {
            id:5,
            name:'Bacon',
            isSelected:true
          },
          {
            id:6,
            name:'Ham',
            isSelected:true
          },
          {
            id:7,
            name:'BBQ Sauce',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Meaty Boyz Pizza',
        description:'tomato base, garlic, onion, ham slices, salami, pineapple, Mozzarella, BBQ sauce, capsicum, tomatoes, bacon, meat balls',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Ham Slices',
            isSelected:true
          },
          {
            id:5,
            name:'Salami',
            isSelected:true
          },
          {
            id:6,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'BBQ Sauce',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:10,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:11,
            name:'Bacon',
            isSelected:true
          },
          {
            id:12,
            name:'Meat Balls',
            isSelected:true
          },
         
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'The Meat Platter Pizza',
        description:'tomato base, Camembert, spinach, onion, Mozzarella, prawns, chicken sausage, chilli flakes, black olives, capsicum, chipotle sauce, cabanossi',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Camembert',
            isSelected:true
          },
          {
            id:3,
            name:'Spinach',
            isSelected:true
          },
          {
            id:4,
            name:'Onion',
            isSelected:true
          },
          {
            id:5,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:6,
            name:'Prawns',
            isSelected:true
          },
          {
            id:7,
            name:'Chicken Sausage',
            isSelected:true
          },
          {
            id:8,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:9,
            name:'Black Olives',
            isSelected:true
          },
          {
            id:10,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:11,
            name:'Chipotle Sauce',
            isSelected:true
          },
          {
            id:12,
            name:'',
            isSelected:true
          },
          {
            id:13,
            name:'Kransky',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Mexican Pizza',
        description:'',
        price:16.50,
        ingredients:[]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Peri Peri Lamb',
        description:'Tomato Base, Mayonnaise ,Peri Peri Sauce,Onion, Garlic , Black Pepper , Mozzarella , Lamb Cubes , Capsicum.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:3,
            name:'Peri Peri Sauce',
            isSelected:true
          },
          {
            id:4,
            name:'Onion',
            isSelected:true
          },
          {
            id:5,
            name:'Garlic',
            isSelected:true
          },
          {
            id:6,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Lamb Cubes',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Beef & kransky Pizza',
        description:'Beef, Capsicum , Mozzarella, Cabanossi , Onion & Garlic Aioli Sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Beef',
            isSelected:true
          },
          {
            id:2,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Cabanossi',
            isSelected:true
          },
          {
            id:5,
            name:'Onion',
            isSelected:true
          },
          {
            id:6,
            name:'Garlic Aioli',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Siciliano Pizza',
        description:'Tomato base, Garlic, Mozzarella, Ham, Salami, Jalapeños, Black Olives , Oregano, Capsicum, Anchovies.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Ham',
            isSelected:true
          },
          {
            id:5,
            name:'Salami',
            isSelected:true
          },
          {
            id:6,
            name:'Jalapeños',
            isSelected:true
          },
          {
            id:7,
            name:'Oregano',
            isSelected:true
          },
          {
            id:8,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:9,
            name:'Anchovies',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Jamaican Jerk Prawns Pizza',
        description:'tomato base, pineapple, spinach, capsicum, onion, garlic, coriander, black pepper, Mozzarella, spiced prawns',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:3,
            name:'Spinach',
            isSelected:true
          },
          {
            id:4,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:5,
            name:'Onion',
            isSelected:true
          },
          {
            id:6,
            name:'Garlic',
            isSelected:true
          },
          {
            id:7,
            name:'Coriander',
            isSelected:true
          },
          {
            id:8,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:9,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:10,
            name:'Spiced Prawns',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Creamy Prawns and Bacon Pizza',
        description:'creamy sauce, garlic, spinach, Mozzarella, prawns, black pepper, bacon',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Creamy Sauce',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Spinach',
            isSelected:true
          },
          {
            id:4,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:5,
            name:'Prawns',
            isSelected:true
          },
          {
            id:6,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:7,
            name:'Bacon',
            isSelected:true
          },
         
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Garlic Prawns Pizza',
        description:'garlic salt, onion, capsicum, prawns, black pepper, oregano',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Garlic Salt',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:4,
            name:'Prawns',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Oregano',
            isSelected:true
          },
         
        ]
    
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Prawn and Bacon Pizza',
        description:'tomato base, Mozzarella, prawns, bacon, spinach, tomatoes, black pepper, hollandaise sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Prawns',
            isSelected:true
          },
          {
            id:4,
            name:'Bacon',
            isSelected:true
          },
          {
            id:5,
            name:'Spinach',
            isSelected:true
          },
          {
            id:6,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:7,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:8,
            name:'Hollandaise Sauce',
            isSelected:true
          },
          
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Salmon and Feta Pizza',
        description:'tomato base, black pepper, Mozzarella, tomatoes, spinach, Feta, salmon, hollandaise sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:5,
            name:'Spinach',
            isSelected:true
          },
          {
            id:6,
            name:'Feta',
            isSelected:true
          },
          {
            id:7,
            name:'Salmon',
            isSelected:true
          },
          {
            id:8,
            name:'Hollandaise Sauce',
            isSelected:true
          },
          
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Chipotle Prawns Pizza',
        description:'Chipotle Sauce, Seasoned Prawns , Onion , Garlic , Black Pepper, Mozzarella , Capsicum, Chilli Flakes',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Chipotle Sauce',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Seasoned Prawns',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Chilli Flakes',
            isSelected:true
          },
         
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Pesto Prawns Pizza',
        description:'Pesto Sauce ,Seasoned Prawns, Spinach , Mayonnaise , Mozzarella ,Tomatoes, Black Pepper, Capsicum.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:2,
            name:'Pesto sauce',
            isSelected:true
          },
          {
            id:3,
            name:'Seasoned Prawns',
            isSelected:true
          },
          {
            id:4,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:5,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:6,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:7,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:8,
            name:'Spinach',
            isSelected:true
          },
           
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Seafood Supreme',
        description:'Tomato Base, Onion, Garlic , Tuna , Black Olives , Anchovies , Mozzarella, Garlic Aioli Sauce, Seasoned Prawns.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Tuna',
            isSelected:true
          },
          {
            id:5,
            name:'Black Olives',
            isSelected:true
          },{
            id:6,
            name:'Anchovies',
            isSelected:true
          },
           
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Garlic Aioli Sauce',
            isSelected:true
          },
          {
            id:9,
            name:'Seasoned Prawns',
            isSelected:true
          },
           
        ]
      },
    ],
    secialInstructions:'',itemCategory:'Specials',type:'',itemName:'',itemPrice:0,itemDescription:'',itemsCount:1,
    actualPrice:0,
    showDishPopupForSide1:false,showPopupTrio1:false ,showPopupTrio2:false ,
    showError:false,showSoucesForSide1:false,showErrorForSoucesSide1:false,showSoucesForSide2:false,showErrorForSoucesSide2:false,showDishPopupForSide2:false,
    showErrorForEmptySide1:false, showErrorForEmptySide2:false,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:false,
    toggleTwinMeanModel:false


}

const initialSingleMealData={
  side1:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    swirlsSauces:[
      {
       id:1,
       text:"Butter Sauce",
       price:1.00,
       isSelected:false
      },
      {
        id:2,
        text:"Peri Peri Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:3,
        text:"Hot Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:4,
        text:"Chipotle Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:5,
        text:"Garlic Aioli",
        price:1.00,
        isSelected:false
       },
       {
        id:6,
        text:"Mayonnaise",
        price:1.00,
        isSelected:false
       },
       {
        id:7,
        text:"BBQ Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:8,
        text:"Hollandaise Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:9,
        text:"Sweet Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:10,
        text:"Tomato Sauce",
        price:1.00,
        isSelected:false
       }
    ],
  },
  side2:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    swirlsSauces:[
      {
       id:1,
       text:"Butter Sauce",
       price:1.00,
       isSelected:false
      },
      {
        id:2,
        text:"Peri Peri Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:3,
        text:"Hot Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:4,
        text:"Chipotle Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:5,
        text:"Garlic Aioli",
        price:1.00,
        isSelected:false
       },
       {
        id:6,
        text:"Mayonnaise",
        price:1.00,
        isSelected:false
       },
       {
        id:7,
        text:"BBQ Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:8,
        text:"Hollandaise Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:9,
        text:"Sweet Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:10,
        text:"Tomato Sauce",
        price:1.00,
        isSelected:false
       }
    ],
  },
  trio1:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    baseOptionsList:[
    {
      id:1,
      text:"Regular Base",
      price:0,
      isSelected:false
     },{
      id:2,
      text:"Thin Crust",
      price:1.00,
      isSelected:false
     },{
      id:3,
      text:"Gluten Free Base",
      price:3.00,
      isSelected:false
     },
],
extraToppingsList:[
  {
    id:1,
    text:"Mozzarella",
    price:3.00,
    isSelected:false
   },
   {
    id:2,
    text:"Paneer",
    price:3.00,
    isSelected:false
   },
   {
    id:3,
    text:"Chicken",
    price:3.00,
    isSelected:false
   },
   {
    id:4,
    text:"Ham",
    price:3.00,
    isSelected:false
   },
   {
    id:5,
    text:"Bacon",
    price:3.00,
    isSelected:false
   },
   {
    id:6,
    text:"Pepperoni",
    price:3.00,
    isSelected:false
   },
   {
    id:7,
    text:"Prawns",
    price:3.00,
    isSelected:false
   },
   {
    id:8,
    text:"Salmon",
    price:3.00,
    isSelected:false
   },
   {
    id:9,
    text:"Black Olives",
    price:2.00,
    isSelected:false
   },
   {
    id:10,
    text:"Jalapeños",
    price:2.00,
    isSelected:false
   },
   {
    id:11,
    text:"Pineapple",
    price:2.00,
    isSelected:false
   },
   {
    id:12,
    text:"Coriander",
    price:2.00,
    isSelected:false
   },
   {
    id:13,
    text:"Capsicum",
    price:2.00,
    isSelected:false
   },
   {
    id:14,
    text:"Onion",
    price:2.00,
    isSelected:false
   },
   {
    id:15,
    text:"Sweet corn",
    price:2.00,
    isSelected:false
   },
   {
    id:16,
    text:"Anchovies",
    price:3.00,
    isSelected:false
   },
   {
    id:17,
    text:"Mushrooms",
    price:2.00,
    isSelected:false
   },
],
swirlsSauces:[
  {
   id:1,
   text:"Butter Sauce",
   price:1.00,
   isSelected:false
  },
  {
    id:2,
    text:"Peri Peri Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:3,
    text:"Hot Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:4,
    text:"Chipotle Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:5,
    text:"Garlic Aioli",
    price:1.00,
    isSelected:false
   },
   {
    id:6,
    text:"Mayonnaise",
    price:1.00,
    isSelected:false
   },
   {
    id:7,
    text:"BBQ Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:8,
    text:"Hollandaise Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:9,
    text:"Sweet Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:10,
    text:"Tomato Sauce",
    price:1.00,
    isSelected:false
   }
],
showSouces:false,showIngredients:false,showBaseOptions:false,showExtraToppings:false,
  showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false,

},
dishes:[
  {
    id:1,
    name:'Garlic Bread',
    isSauseThere:true,
    isSelected:false
  }
  ,{
    id:2,
    name:'Chips',
    isSauseThere:true,
     isSelected:false
  },
  {
    id:3,
    name:'Wedges',
    isSauseThere:true,
     isSelected:false
  },
  {
    id:4,
    name:'Potato Hash Bites',
    isSauseThere:true,
     isSelected:false
  },
  {
    id:5,
    name:'Curly Fries',
    isSauseThere:true,
     isSelected:false
  },
  {
    id:6,
    name:'Coke 1.5L',
    isSauseThere:false,
     isSelected:false
  },
  {
    id:7,
    name:'Coke Zero 1.5L',
    isSauseThere:false,
     isSelected:false
  },
  {
    id:8,
    name:'Sprite 1.5L',
    isSauseThere:false,
     isSelected:false
  },
  {
    id:9,
    name:'Fanta 1.5L',
    isSauseThere:false,
     isSelected:false
  },
  {
    id:10,
    name:'L&P 1.5L',
    isSauseThere:false,
     isSelected:false
  },
  {
    id:11,
    name:'Lift 1.5L',
    isSauseThere:false,
     isSelected:false
  },

],
SignatureRange:[
  {
    id:v4(),
    category:"Vegetarian",
    item:'Veg Delight Pizza',
    description:'tomato base, Mozzarella, mushrooms, garlic, black pepper, onion, capsicum, pineapple, oregano',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:4,
        name:'Garlic',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Onion',
        isSelected:true
      },
      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:9,
        name:'Oregano',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Veg Triple Sauce Pizza',
    description:'tomato base, garlic, onion, pineapple, mayonnaise, peri-peri sauce, makhani sauce,ginger, black pepper, capsicum, Mozzarella, coriander',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Garlic',
        isSelected:true
      },
      {
        id:3,
        name:'Onion',
        isSelected:true
      },
      {
        id:4,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:5,
        name:'Mayonnaise',
        isSelected:true
      },
      {
        id:6,
        name:'Peri-Peri Sauce',
        isSelected:true
      },
      {
        id:7,
        name:'Makhani Sauce',
        isSelected:true
      },
      {
        id:8,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:9,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:10,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:11,
        name:'Coriander',
        isSelected:true
      },
      {
        id:12,
        name:'Ginger',
        isSelected:true
      },   
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Pesto Corn Pizza',
    description:'Mozzarella , black pepper, spinach, sweet corn, mayonnaise, tomatoes, capsicum, pesto sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Pesto Sauce Base',
        isSelected:true
      },
      {
        id:2,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:3,
        name:'Spinach',
        isSelected:true
      },
      {
        id:4,
        name:'Sweet Corn',
        isSelected:true
      },
      {
        id:5,
        name:'Mayonnaise',
        isSelected:true
      },
      {
        id:6,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:7,
        name:'Coriander',
        isSelected:true
      },
      {
        id:8,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:9,
        name:'Capsicum',
        isSelected:true
      },   
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Veg Supreme Pizza',
    description:'tomato base, garlic, black pepper, onion, mushrooms, ginger, pineapple, jalapenos, coriander, Mozzarella, capsicum, black olives',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Garlic',
        isSelected:true
      },
      {
        id:3,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:4,
        name:'Onion',
        isSelected:true
      },
      {
        id:5,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:6,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:7,
        name:'Jalapenos',
        isSelected:true
      },
      {
        id:8,
        name:'Coriander',
        isSelected:true
      },
      {
        id:9,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:10,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:11,
        name:'Black Olives',
        isSelected:true
      },
      {
        id:12,
        name:'Ginger',
        isSelected:true
      },
   
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Butter Paneer Pizza',
    description:'tomato base, onion, garlic, coriander, Mozzarella, paneer, Makhani sauce (contains nuts)',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Coriander',
        isSelected:true
      },
      {
        id:5,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:6,
        name:'Paneer',
        isSelected:true
      },
      {
        id:7,
        name:'Makhani Sauce',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Peri Peri Paneer Pizza',
    description:'tomato base, onion, garlic, paneer, capsicum, coriander, peri peri sauce, black pepper, Mozzarella',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Paneer',
        isSelected:true
      },
      {
        id:5,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:6,
        name:'Coriander',
        isSelected:true
      },
      {
        id:7,
        name:'Peri Peri Sauce',
        isSelected:true
      },
      {
        id:8,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:9,
        name:'Mozzarella',
        isSelected:true
      },    
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Chilli Paneer Pizza',
    description:'chilli sauce base, onion, garlic, coriander, black pepper, Mozzarella, capsicum, paneer, chilli sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Chilli Sauce Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Coriander',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Paneer',
        isSelected:true
      },
      {
        id:9,
        name:'Chilli Sauce',
        isSelected:true
      },   
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Spicy Paneer Pasand Pizza',
    description:'Tomato Base, Capsicum, Tomatoes ,Garlic, Onion, Garlic salt ,Chilli Flakes , Paneer, Coriander , Mozzarella .',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:3,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:4,
        name:'Garlic',
        isSelected:true
      },
      {
        id:5,
        name:'Onion',
        isSelected:true
      },
      {
        id:6,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:7,
        name:'Paneer',
        isSelected:true
      },
      {
        id:8,
        name:'Coriander',
        isSelected:true
      },
      {
        id:9,
        name:'Mozzarella',
        isSelected:true
      },
 
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Spicy Corn Deluxe Pizza',
    description:'Tomato base, Mozzarella ,Onion,Garlic, Black pepper, Corn, Black Olives ,Chilli Flakes, Capsicum, Jalapeños',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Onion',
        isSelected:true
      },
      {
        id:4,
        name:'Garlic',
        isSelected:true
      },
      {
        id:5,
        name:'Black pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Corn',
        isSelected:true
      },
      {
        id:7,
        name:'Black Olives',
        isSelected:true
      },
      {
        id:8,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:9,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:10,
        name:'Jalapeños',
        isSelected:true
      },
    
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Creamy Mushroom Pizza',
    description:'Creamy Sauce, Mushrooms, Onion, Garlic & Herb, Black Pepper, Oregano, Mozzarella and Capsicum.',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Creamy Sauce',
        isSelected:true
      },
      {
        id:2,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:3,
        name:'Onion',
        isSelected:true
      },
      {
        id:4,
        name:'Garlic & Herb',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Oregano',
        isSelected:true
      },
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'Capsicum',
        isSelected:true
      },
    
    ]
  },
  {
    id:v4(),
    category:"Vegetarian",
    item:'Paneer Tadka',
    description:'Tomato Base , Mozzarella, Capsicum, Jalapeños, Onion , Garlic, Black Pepper, Tandoori Paneer , Coriander.',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:4,
        name:'Jalapeños',
        isSelected:true
      },
      {
        id:5,
        name:'Onion',
        isSelected:true
      },
      {
        id:6,
        name:'Garlic',
        isSelected:true
      },
      {
        id:7,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:8,
        name:'Tandoori Paneer',
        isSelected:true
      },
      {
        id:9,
        name:'Coriander',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Apricot Chicken Pizza',
    description:'tomato base, onion, garlic, chicken, capsicum, pineapple, Mozzarella, spiced apricot sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Chicken',
        isSelected:true
      },
      {
        id:5,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:6,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'Spiced Apricot Sauce',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Butter Chicken Pizza',
    description:'tomato base, Mozzarella, chicken, butter chicken sauce (contains nuts)',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Chicken',
        isSelected:true
      },
      {
        id:4,
        name:'Butter Chicken Sauce',
        isSelected:true
      },
      
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Cajun Chicken Pizza',
    description:'tomato base, onion, garlic, black pepper, Mozzarella, tomatoes, capsicum, chilli flakes, spinach, cajun spice, chicken, Garlic Aioli',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:5,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:6,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:9,
        name:'Spinach',
        isSelected:true
      },
      {
        id:10,
        name:'Cajun Spice',
        isSelected:true
      },
      {
        id:11,
        name:'Chicken',
        isSelected:true
      },
      {
        id:12,
        name:'Garlic Aioli',
        isSelected:true
      },
  
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Chicken Triple Sauce Pizza',
    description:'tomato base, onion, garlic, pineapple, mayonnaise, chicken, capsicum, black pepper, peri-peri sauce, butter chicken sauce, Mozzarella, oregano (contains nuts)',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:5,
        name:'Mayonnaise',
        isSelected:true
      },
      {
        id:6,
        name:'Chicken',
        isSelected:true
      },
      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:9,
        name:'Peri-Peri Sauce',
        isSelected:true
      },
      {
        id:10,
        name:'Butter Chicken Sauce',
        isSelected:true
      },
      {
        id:11,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:12,
        name:'Oregano',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Chipotle Chicken Pizza',
    description:'chilli flakes, capsicum, onion, garlic, black pepper, Mozzarella, chicken, chipotle sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:2,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:3,
        name:'Onion',
        isSelected:true
      },
      {
        id:4,
        name:'Garlic',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:7,
        name:'Chicken',
        isSelected:true
      },
      {
        id:8,
        name:'Chipotle Sauce',
        isSelected:true
      },

    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Cranberry Chicken & Camembert Pizza',
    description:'tomato base, spinach, Mozzarella, cranberry sauce, chicken, Camembert',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Spinach',
        isSelected:true
      },
      {
        id:3,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:4,
        name:'Cranberry Sauce',
        isSelected:true
      },
      {
        id:5,
        name:'Chicken',
        isSelected:true
      },
      {
        id:6,
        name:'Camembert',
        isSelected:true
      },    
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Chilli Chicken Pizza',
    description:'chilli sauce base, onion, garlic, coriander, black pepper, Mozzarella, capsicum, chicken',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Chilli Sauce Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Coriander',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Chicken',
        isSelected:true
      },    
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Peri Peri Chicken Pizza',
    description:'tomato base, onion, garlic, black pepper, peri-peri sauce, mayonnaise, Mozzarella, capsicum, chicken oregano',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:5,
        name:'Peri-Peri Sauce',
        isSelected:true
      },
      {
        id:6,
        name:'Mayonnaise',
        isSelected:true
      },
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:9,
        name:'Chicken Oregano',
        isSelected:true
      },
 
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Pesto Chicken Pizza',
    description:'spinach, chicken, pesto sauce, mayonnaise, black pepper,Mozzarella, capsicum, tomatoes',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Spinach',
        isSelected:true
      },
      {
        id:2,
        name:'Spinach',
        isSelected:true
      },
      {
        id:3,
        name:'Pesto Sauce',
        isSelected:true
      },
      {
        id:4,
        name:'Mayonnaise',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Mozzarella',
        isSelected:true
      },      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Tomatoes',
        isSelected:true
      },    
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Bacon and Alfredo Chicken Pizza',
    description:'creamy sauce, onion, garlic, mushrooms, chicken, black pepper, capsicum, Mozzarella, bacon',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Creamy Sauce',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:5,
        name:'Chicken',
        isSelected:true
      },
      {
        id:6,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:9,
        name:'Bacon',
        isSelected:true
      },   
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Satay Chicken Pizza',
    description:'satay sauce, Mozzarella, onion, garlic, chilli flakes, capsicum, black pepper, chicken (contains nuts)',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Satay Sauce',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Onion',
        isSelected:true
      },
      {
        id:4,
        name:'Garlic',
        isSelected:true
      },
      {
        id:5,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:6,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:7,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:8,
        name:'Chicken',
        isSelected:true
      },   
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'Tandoori Chicken Pizza',
    description:'tomato base, onion, mushrooms, tandoori chicken, Mozzarella, capsicum, coriander',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:4,
        name:'Tandoori Chicken',
        isSelected:true
      },
      {
        id:5,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:6,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:7,
        name:'Coriander',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Chicken",
    item:'BBQ Chicken & Bacon',
    description:'BBQ Base , Onion , Mozzarella, Chicken , Bacon , Capsicum and Mayonnaise',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'BBQ Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:4,
        name:'Chicken',
        isSelected:true
      },
      {
        id:5,
        name:'Bacon',
        isSelected:true
      },
      {
        id:6,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:7,
        name:'Mayonnaise',
        isSelected:true
      },   
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Melting Hot Pizza',
    description:'cheese sauce base, onion, garlic, pepperoni, jalapenos, Mozzarella, capsicum, cabanossi',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Cheese Sauce Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Pepperoni',
        isSelected:true
      },
      {
        id:5,
        name:'Jalapenos',
        isSelected:true
      },
      {
        id:6,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:7,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:8,
        name:'Cabanossi',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Moroccans Lamb Pizza',
    description:'tomato base, onion, garlic, black pepper, chilli flakes, coriander, Mozzarella, capsicum, spiced lamb balls',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:5,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:6,
        name:'Coriander',
        isSelected:true
      },
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:9,
        name:'Spiced Lamb Balls',
        isSelected:true
      },
    
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Bacon and Mushroom Pizza',
    description:'tomato base, mushrooms, garlic, creamy sauce, tomatoes, black pepper, bacon, streaky bacon',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Creamy sauce',
        isSelected:true
      },
      {
        id:5,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:6,
        name:'Black pepper',
        isSelected:true
      },
      {
        id:7,
        name:'Bacon',
        isSelected:true
      },
      {
        id:8,
        name:'Streaky bacon',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'BBQ Beef and Bacon Pizza',
    description:'tomato base, onion, beef cubes, bacon, BBQ sauce, Mozzarella',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Beef Cubes',
        isSelected:true
      },
      {
        id:4,
        name:'Bacon',
        isSelected:true
      },
      {
        id:5,
        name:'BBQ Sauce',
        isSelected:true
      },
      {
        id:6,
        name:'Mozzarella',
        isSelected:true
      },    
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Hawaiian Pizza',
    description:'tomato base, ham slices, pineapple, Mozzarella, bacon',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Ham Slices',
        isSelected:true
      },
      {
        id:3,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:4,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:5,
        name:'Bacon',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Italian Pizza',
    description:'tomato base, garlic, ham slices, mushrooms, salami, capsicum, black olives, Mozzarella, oregano',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Garlic',
        isSelected:true
      },
      {
        id:3,
        name:'Ham Slices',
        isSelected:true
      },
      {
        id:4,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:5,
        name:'Salami',
        isSelected:true
      },
      {
        id:6,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:7,
        name:'Black Olives',
        isSelected:true
      },
      {
        id:8,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:9,
        name:'Oregano',
        isSelected:true
      },

    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Spicy Roasted Beef Pizza',
    description:'tomato base, garlic, black pepper, chilli flakes, beef cubes, jalapenos, tomatoes, Mozzarella, capsicum, onion',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Garlic',
        isSelected:true
      },
      {
        id:3,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:4,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:5,
        name:'Beef Cubes',
        isSelected:true
      },
      {
        id:6,
        name:'Jalapenos',
        isSelected:true
      },
      {
        id:7,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:8,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:9,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:10,
        name:'Onion',
        isSelected:true
      },
    
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Meat Supreme Pizza',
    description:'tomato base, Mozzarella, salami, capsicum, onion, mushrooms, black olives, ham slices, meat balls',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Salami',
        isSelected:true
      },
      {
        id:4,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:5,
        name:'Onion',
        isSelected:true
      },
      {
        id:6,
        name:'Mushrooms',
        isSelected:true
      },
      {
        id:7,
        name:'Black Olives',
        isSelected:true
      },
      {
        id:8,
        name:'Ham Slices',
        isSelected:true
      },
      {
        id:9,
        name:'Meat Balls',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Meat Lovers Pizza',
    description:'tomato base, Mozzarella, salami, meat balls, bacon, ham, BBQ sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Salami',
        isSelected:true
      },
      {
        id:4,
        name:'Meat Balls',
        isSelected:true
      },
      {
        id:5,
        name:'Bacon',
        isSelected:true
      },
      {
        id:6,
        name:'Ham',
        isSelected:true
      },
      {
        id:7,
        name:'BBQ Sauce',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Meaty Boyz Pizza',
    description:'tomato base, garlic, onion, ham slices, salami, pineapple, Mozzarella, BBQ sauce, capsicum, tomatoes, bacon, meat balls',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Garlic',
        isSelected:true
      },
      {
        id:3,
        name:'Onion',
        isSelected:true
      },
      {
        id:4,
        name:'Ham Slices',
        isSelected:true
      },
      {
        id:5,
        name:'Salami',
        isSelected:true
      },
      {
        id:6,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'BBQ Sauce',
        isSelected:true
      },
      {
        id:9,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:10,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:11,
        name:'Bacon',
        isSelected:true
      },
      {
        id:12,
        name:'Meat Balls',
        isSelected:true
      },
     
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'The Meat Platter Pizza',
    description:'tomato base, Camembert, spinach, onion, Mozzarella, prawns, chicken sausage, chilli flakes, black olives, capsicum, chipotle sauce, cabanossi',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Camembert',
        isSelected:true
      },
      {
        id:3,
        name:'Spinach',
        isSelected:true
      },
      {
        id:4,
        name:'Onion',
        isSelected:true
      },
      {
        id:5,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:6,
        name:'Prawns',
        isSelected:true
      },
      {
        id:7,
        name:'Chicken Sausage',
        isSelected:true
      },
      {
        id:8,
        name:'Chilli Flakes',
        isSelected:true
      },
      {
        id:9,
        name:'Black Olives',
        isSelected:true
      },
      {
        id:10,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:11,
        name:'Chipotle Sauce',
        isSelected:true
      },
      {
        id:12,
        name:'',
        isSelected:true
      },
      {
        id:13,
        name:'Kransky',
        isSelected:true
      },
    
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Mexican Pizza',
    description:'',
    price:16.50,
    ingredients:[]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Peri Peri Lamb',
    description:'Tomato Base, Mayonnaise ,Peri Peri Sauce,Onion, Garlic , Black Pepper , Mozzarella , Lamb Cubes , Capsicum.',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mayonnaise',
        isSelected:true
      },
      {
        id:3,
        name:'Peri Peri Sauce',
        isSelected:true
      },
      {
        id:4,
        name:'Onion',
        isSelected:true
      },
      {
        id:5,
        name:'Garlic',
        isSelected:true
      },
      {
        id:6,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'Lamb Cubes',
        isSelected:true
      },
      {
        id:9,
        name:'Capsicum',
        isSelected:true
      },
      
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Beef & kransky Pizza',
    description:'Beef, Capsicum , Mozzarella, Cabanossi , Onion & Garlic Aioli Sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Beef',
        isSelected:true
      },
      {
        id:2,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:3,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:4,
        name:'Cabanossi',
        isSelected:true
      },
      {
        id:5,
        name:'Onion',
        isSelected:true
      },
      {
        id:6,
        name:'Garlic Aioli',
        isSelected:true
      },
    ]
  },
  {
    id:v4(),
    category:"Meat",
    item:'Siciliano Pizza',
    description:'Tomato base, Garlic, Mozzarella, Ham, Salami, Jalapeños, Black Olives , Oregano, Capsicum, Anchovies.',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato base',
        isSelected:true
      },
      {
        id:2,
        name:'Garlic',
        isSelected:true
      },
      {
        id:3,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:4,
        name:'Ham',
        isSelected:true
      },
      {
        id:5,
        name:'Salami',
        isSelected:true
      },
      {
        id:6,
        name:'Jalapeños',
        isSelected:true
      },
      {
        id:7,
        name:'Oregano',
        isSelected:true
      },
      {
        id:8,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:9,
        name:'Anchovies',
        isSelected:true
      },
    
    ]
  },
  {
    id:v4(),
    category:"Seafood",
    item:'Jamaican Jerk Prawns Pizza',
    description:'tomato base, pineapple, spinach, capsicum, onion, garlic, coriander, black pepper, Mozzarella, spiced prawns',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Pineapple',
        isSelected:true
      },
      {
        id:3,
        name:'Spinach',
        isSelected:true
      },
      {
        id:4,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:5,
        name:'Onion',
        isSelected:true
      },
      {
        id:6,
        name:'Garlic',
        isSelected:true
      },
      {
        id:7,
        name:'Coriander',
        isSelected:true
      },
      {
        id:8,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:9,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:10,
        name:'Spiced Prawns',
        isSelected:true
      },
    
    ]
  },
  {
    id:v4(),
    category:"Seafood",
    item:'Creamy Prawns and Bacon Pizza',
    description:'creamy sauce, garlic, spinach, Mozzarella, prawns, black pepper, bacon',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Creamy Sauce',
        isSelected:true
      },
      {
        id:2,
        name:'Garlic',
        isSelected:true
      },
      {
        id:3,
        name:'Spinach',
        isSelected:true
      },
      {
        id:4,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:5,
        name:'Prawns',
        isSelected:true
      },
      {
        id:6,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:7,
        name:'Bacon',
        isSelected:true
      },
     
    ]
  },
  {
    id:v4(),
    category:"Seafood",
    item:'Garlic Prawns Pizza',
    description:'garlic salt, onion, capsicum, prawns, black pepper, oregano',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Garlic Salt',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:4,
        name:'Prawns',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Oregano',
        isSelected:true
      },
     
    ]

  },
  {
    id:v4(),
    category:"Seafood",
    item:'Prawn and Bacon Pizza',
    description:'tomato base, Mozzarella, prawns, bacon, spinach, tomatoes, black pepper, hollandaise sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:3,
        name:'Prawns',
        isSelected:true
      },
      {
        id:4,
        name:'Bacon',
        isSelected:true
      },
      {
        id:5,
        name:'Spinach',
        isSelected:true
      },
      {
        id:6,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:7,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:8,
        name:'Hollandaise Sauce',
        isSelected:true
      },
      
    ]
  },
  {
    id:v4(),
    category:"Seafood",
    item:'Salmon and Feta Pizza',
    description:'tomato base, black pepper, Mozzarella, tomatoes, spinach, Feta, salmon, hollandaise sauce',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:3,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:4,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:5,
        name:'Spinach',
        isSelected:true
      },
      {
        id:6,
        name:'Feta',
        isSelected:true
      },
      {
        id:7,
        name:'Salmon',
        isSelected:true
      },
      {
        id:8,
        name:'Hollandaise Sauce',
        isSelected:true
      },
      
    ]
  },
  {
    id:v4(),
    category:"Seafood",
    item:'Chipotle Prawns Pizza',
    description:'Chipotle Sauce, Seasoned Prawns , Onion , Garlic , Black Pepper, Mozzarella , Capsicum, Chilli Flakes',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Chipotle Sauce',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Seasoned Prawns',
        isSelected:true
      },
      {
        id:4,
        name:'Garlic',
        isSelected:true
      },
      {
        id:5,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:6,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'Chilli Flakes',
        isSelected:true
      },
     
    ]
  },
  {
    id:v4(),
    category:"Seafood",
    item:'Pesto Prawns Pizza',
    description:'Pesto Sauce ,Seasoned Prawns, Spinach , Mayonnaise , Mozzarella ,Tomatoes, Black Pepper, Capsicum.',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Mayonnaise',
        isSelected:true
      },
      {
        id:2,
        name:'Pesto sauce',
        isSelected:true
      },
      {
        id:3,
        name:'Seasoned Prawns',
        isSelected:true
      },
      {
        id:4,
        name:'Capsicum',
        isSelected:true
      },
      {
        id:5,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:6,
        name:'Tomatoes',
        isSelected:true
      },
      {
        id:7,
        name:'Black Pepper',
        isSelected:true
      },
      {
        id:8,
        name:'Spinach',
        isSelected:true
      },
       
    ]
  },
  {
    id:v4(),
    category:"Seafood",
    item:'Seafood Supreme',
    description:'Tomato Base, Onion, Garlic , Tuna , Black Olives , Anchovies , Mozzarella, Garlic Aioli Sauce, Seasoned Prawns.',
    price:16.50,
    ingredients:[
      {
        id:1,
        name:'Tomato Base',
        isSelected:true
      },
      {
        id:2,
        name:'Onion',
        isSelected:true
      },
      {
        id:3,
        name:'Garlic',
        isSelected:true
      },
      {
        id:4,
        name:'Tuna',
        isSelected:true
      },
      {
        id:5,
        name:'Black Olives',
        isSelected:true
      },{
        id:6,
        name:'Anchovies',
        isSelected:true
      },
       
      {
        id:7,
        name:'Mozzarella',
        isSelected:true
      },
      {
        id:8,
        name:'Garlic Aioli Sauce',
        isSelected:true
      },
      {
        id:9,
        name:'Seasoned Prawns',
        isSelected:true
      },
       
    ]
  },
],
secialInstructions:'',itemCategory:'Specials',type:'',itemName:'',itemPrice:0,itemDescription:'',itemsCount:1,
actualPrice:0,
showDishPopupForSide1:false,showPopupTrio1:false,
showError:false,showSoucesForSide1:false,showErrorForSoucesSide1:false,showSoucesForSide2:false,showErrorForSoucesSide2:false,showDishPopupForSide2:false,
showErrorForEmptySide1:false, showErrorForEmptySide2:false,showErrorForEmtyTrio1:false,
toggleSingleMealModel:false

}

const initialMixedMeal={
  side1:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    swirlsSauces:[
      {
       id:1,
       text:"Butter Sauce",
       price:1.00,
       isSelected:false
      },
      {
        id:2,
        text:"Peri Peri Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:3,
        text:"Hot Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:4,
        text:"Chipotle Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:5,
        text:"Garlic Aioli",
        price:1.00,
        isSelected:false
       },
       {
        id:6,
        text:"Mayonnaise",
        price:1.00,
        isSelected:false
       },
       {
        id:7,
        text:"BBQ Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:8,
        text:"Hollandaise Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:9,
        text:"Sweet Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:10,
        text:"Tomato Sauce",
        price:1.00,
        isSelected:false
       }
    ],
  },
  side2:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    swirlsSauces:[
      {
       id:1,
       text:"Butter Sauce",
       price:1.00,
       isSelected:false
      },
      {
        id:2,
        text:"Peri Peri Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:3,
        text:"Hot Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:4,
        text:"Chipotle Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:5,
        text:"Garlic Aioli",
        price:1.00,
        isSelected:false
       },
       {
        id:6,
        text:"Mayonnaise",
        price:1.00,
        isSelected:false
       },
       {
        id:7,
        text:"BBQ Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:8,
        text:"Hollandaise Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:9,
        text:"Sweet Chilli Sauce",
        price:1.00,
        isSelected:false
       },
       {
        id:10,
        text:"Tomato Sauce",
        price:1.00,
        isSelected:false
       }
    ],
  },
  trio1:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    baseOptionsList:[
    {
      id:1,
      text:"Regular Base",
      price:0,
      isSelected:false
     },{
      id:2,
      text:"Thin Crust",
      price:1.00,
      isSelected:false
     },{
      id:3,
      text:"Gluten Free Base",
      price:3.00,
      isSelected:false
     },
],
extraToppingsList:[
  {
    id:1,
    text:"Mozzarella",
    price:3.00,
    isSelected:false
   },
   {
    id:2,
    text:"Paneer",
    price:3.00,
    isSelected:false
   },
   {
    id:3,
    text:"Chicken",
    price:3.00,
    isSelected:false
   },
   {
    id:4,
    text:"Ham",
    price:3.00,
    isSelected:false
   },
   {
    id:5,
    text:"Bacon",
    price:3.00,
    isSelected:false
   },
   {
    id:6,
    text:"Pepperoni",
    price:3.00,
    isSelected:false
   },
   {
    id:7,
    text:"Prawns",
    price:3.00,
    isSelected:false
   },
   {
    id:8,
    text:"Salmon",
    price:3.00,
    isSelected:false
   },
   {
    id:9,
    text:"Black Olives",
    price:2.00,
    isSelected:false
   },
   {
    id:10,
    text:"Jalapeños",
    price:2.00,
    isSelected:false
   },
   {
    id:11,
    text:"Pineapple",
    price:2.00,
    isSelected:false
   },
   {
    id:12,
    text:"Coriander",
    price:2.00,
    isSelected:false
   },
   {
    id:13,
    text:"Capsicum",
    price:2.00,
    isSelected:false
   },
   {
    id:14,
    text:"Onion",
    price:2.00,
    isSelected:false
   },
   {
    id:15,
    text:"Sweet corn",
    price:2.00,
    isSelected:false
   },
   {
    id:16,
    text:"Anchovies",
    price:3.00,
    isSelected:false
   },
   {
    id:17,
    text:"Mushrooms",
    price:2.00,
    isSelected:false
   },
],
swirlsSauces:[
  {
   id:1,
   text:"Butter Sauce",
   price:1.00,
   isSelected:false
  },
  {
    id:2,
    text:"Peri Peri Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:3,
    text:"Hot Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:4,
    text:"Chipotle Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:5,
    text:"Garlic Aioli",
    price:1.00,
    isSelected:false
   },
   {
    id:6,
    text:"Mayonnaise",
    price:1.00,
    isSelected:false
   },
   {
    id:7,
    text:"BBQ Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:8,
    text:"Hollandaise Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:9,
    text:"Sweet Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:10,
    text:"Tomato Sauce",
    price:1.00,
    isSelected:false
   }
],
showSouces:false,showIngredients:false,showBaseOptions:false,showExtraToppings:false,
  showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false,

},
  trio2:{
    itemName:'',
    isDisheSelected:false,
    dishSelected:{},
    baseOptionsList:[
    {
      id:1,
      text:"Regular Base",
      price:0,
      isSelected:false
     },{
      id:2,
      text:"Thin Crust",
      price:1.00,
      isSelected:false
     },{
      id:3,
      text:"Gluten Free Base",
      price:3.00,
      isSelected:false
     },
],
extraToppingsList:[
  {
    id:1,
    text:"Mozzarella",
    price:3.00,
    isSelected:false
   },
   {
    id:2,
    text:"Paneer",
    price:3.00,
    isSelected:false
   },
   {
    id:3,
    text:"Chicken",
    price:3.00,
    isSelected:false
   },
   {
    id:4,
    text:"Ham",
    price:3.00,
    isSelected:false
   },
   {
    id:5,
    text:"Bacon",
    price:3.00,
    isSelected:false
   },
   {
    id:6,
    text:"Pepperoni",
    price:3.00,
    isSelected:false
   },
   {
    id:7,
    text:"Prawns",
    price:3.00,
    isSelected:false
   },
   {
    id:8,
    text:"Salmon",
    price:3.00,
    isSelected:false
   },
   {
    id:9,
    text:"Black Olives",
    price:2.00,
    isSelected:false
   },
   {
    id:10,
    text:"Jalapeños",
    price:2.00,
    isSelected:false
   },
   {
    id:11,
    text:"Pineapple",
    price:2.00,
    isSelected:false
   },
   {
    id:12,
    text:"Coriander",
    price:2.00,
    isSelected:false
   },
   {
    id:13,
    text:"Capsicum",
    price:2.00,
    isSelected:false
   },
   {
    id:14,
    text:"Onion",
    price:2.00,
    isSelected:false
   },
   {
    id:15,
    text:"Sweet corn",
    price:2.00,
    isSelected:false
   },
   {
    id:16,
    text:"Anchovies",
    price:3.00,
    isSelected:false
   },
   {
    id:17,
    text:"Mushrooms",
    price:2.00,
    isSelected:false
   },
],
swirlsSauces:[
  {
   id:1,
   text:"Butter Sauce",
   price:1.00,
   isSelected:false
  },
  {
    id:2,
    text:"Peri Peri Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:3,
    text:"Hot Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:4,
    text:"Chipotle Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:5,
    text:"Garlic Aioli",
    price:1.00,
    isSelected:false
   },
   {
    id:6,
    text:"Mayonnaise",
    price:1.00,
    isSelected:false
   },
   {
    id:7,
    text:"BBQ Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:8,
    text:"Hollandaise Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:9,
    text:"Sweet Chilli Sauce",
    price:1.00,
    isSelected:false
   },
   {
    id:10,
    text:"Tomato Sauce",
    price:1.00,
    isSelected:false
   }
]
,
showSouces:false,showIngredients:false,showBaseOptions:false,showExtraToppings:false,
  showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false,

}
 , 
    dishes:[
      {
        id:1,
        name:'Garlic Bread',
        isSauseThere:true,
        isSelected:false
      }
      ,{
        id:2,
        name:'Chips',
        isSauseThere:true,
         isSelected:false
      },
      {
        id:3,
        name:'Wedges',
        isSauseThere:true,
         isSelected:false
      },
      {
        id:4,
        name:'Potato Hash Bites',
        isSauseThere:true,
         isSelected:false
      },
      {
        id:5,
        name:'Curly Fries',
        isSauseThere:true,
         isSelected:false
      },
      {
        id:6,
        name:'Coke 1.5L',
        isSauseThere:false,
         isSelected:false
      },
      {
        id:7,
        name:'Coke Zero 1.5L',
        isSauseThere:false,
         isSelected:false
      },
      {
        id:8,
        name:'Sprite 1.5L',
        isSauseThere:false,
         isSelected:false
      },
      {
        id:9,
        name:'Fanta 1.5L',
        isSauseThere:false,
         isSelected:false
      },
      {
        id:10,
        name:'L&P 1.5L',
        isSauseThere:false,
         isSelected:false
      },
      {
        id:11,
        name:'Lift 1.5L',
        isSauseThere:false,
         isSelected:false
      },
    
    ],
    SignatureRange:[
      {
        id:v4(),
        category:"Vegetarian",
        item:'Veg Delight Pizza',
        description:'tomato base, Mozzarella, mushrooms, garlic, black pepper, onion, capsicum, pineapple, oregano',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Onion',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:9,
            name:'Oregano',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Veg Triple Sauce Pizza',
        description:'tomato base, garlic, onion, pineapple, mayonnaise, peri-peri sauce, makhani sauce,ginger, black pepper, capsicum, Mozzarella, coriander',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:5,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:6,
            name:'Peri-Peri Sauce',
            isSelected:true
          },
          {
            id:7,
            name:'Makhani Sauce',
            isSelected:true
          },
          {
            id:8,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:10,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:11,
            name:'Coriander',
            isSelected:true
          },
          {
            id:12,
            name:'Ginger',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Pesto Corn Pizza',
        description:'Mozzarella , black pepper, spinach, sweet corn, mayonnaise, tomatoes, capsicum, pesto sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Pesto Sauce Base',
            isSelected:true
          },
          {
            id:2,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:3,
            name:'Spinach',
            isSelected:true
          },
          {
            id:4,
            name:'Sweet Corn',
            isSelected:true
          },
          {
            id:5,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:6,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:7,
            name:'Coriander',
            isSelected:true
          },
          {
            id:8,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Veg Supreme Pizza',
        description:'tomato base, garlic, black pepper, onion, mushrooms, ginger, pineapple, jalapenos, coriander, Mozzarella, capsicum, black olives',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:4,
            name:'Onion',
            isSelected:true
          },
          {
            id:5,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:6,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:7,
            name:'Jalapenos',
            isSelected:true
          },
          {
            id:8,
            name:'Coriander',
            isSelected:true
          },
          {
            id:9,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:10,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:11,
            name:'Black Olives',
            isSelected:true
          },
          {
            id:12,
            name:'Ginger',
            isSelected:true
          },
       
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Butter Paneer Pizza',
        description:'tomato base, onion, garlic, coriander, Mozzarella, paneer, Makhani sauce (contains nuts)',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Coriander',
            isSelected:true
          },
          {
            id:5,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:6,
            name:'Paneer',
            isSelected:true
          },
          {
            id:7,
            name:'Makhani Sauce',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Peri Peri Paneer Pizza',
        description:'tomato base, onion, garlic, paneer, capsicum, coriander, peri peri sauce, black pepper, Mozzarella',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Paneer',
            isSelected:true
          },
          {
            id:5,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:6,
            name:'Coriander',
            isSelected:true
          },
          {
            id:7,
            name:'Peri Peri Sauce',
            isSelected:true
          },
          {
            id:8,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:9,
            name:'Mozzarella',
            isSelected:true
          },    
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Chilli Paneer Pizza',
        description:'chilli sauce base, onion, garlic, coriander, black pepper, Mozzarella, capsicum, paneer, chilli sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Chilli Sauce Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Coriander',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Paneer',
            isSelected:true
          },
          {
            id:9,
            name:'Chilli Sauce',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Spicy Paneer Pasand Pizza',
        description:'Tomato Base, Capsicum, Tomatoes ,Garlic, Onion, Garlic salt ,Chilli Flakes , Paneer, Coriander , Mozzarella .',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:3,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Onion',
            isSelected:true
          },
          {
            id:6,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:7,
            name:'Paneer',
            isSelected:true
          },
          {
            id:8,
            name:'Coriander',
            isSelected:true
          },
          {
            id:9,
            name:'Mozzarella',
            isSelected:true
          },
     
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Spicy Corn Deluxe Pizza',
        description:'Tomato base, Mozzarella ,Onion,Garlic, Black pepper, Corn, Black Olives ,Chilli Flakes, Capsicum, Jalapeños',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Black pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Corn',
            isSelected:true
          },
          {
            id:7,
            name:'Black Olives',
            isSelected:true
          },
          {
            id:8,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:10,
            name:'Jalapeños',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Creamy Mushroom Pizza',
        description:'Creamy Sauce, Mushrooms, Onion, Garlic & Herb, Black Pepper, Oregano, Mozzarella and Capsicum.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Creamy Sauce',
            isSelected:true
          },
          {
            id:2,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic & Herb',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Oregano',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Capsicum',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Vegetarian",
        item:'Paneer Tadka',
        description:'Tomato Base , Mozzarella, Capsicum, Jalapeños, Onion , Garlic, Black Pepper, Tandoori Paneer , Coriander.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:4,
            name:'Jalapeños',
            isSelected:true
          },
          {
            id:5,
            name:'Onion',
            isSelected:true
          },
          {
            id:6,
            name:'Garlic',
            isSelected:true
          },
          {
            id:7,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:8,
            name:'Tandoori Paneer',
            isSelected:true
          },
          {
            id:9,
            name:'Coriander',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Apricot Chicken Pizza',
        description:'tomato base, onion, garlic, chicken, capsicum, pineapple, Mozzarella, spiced apricot sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Chicken',
            isSelected:true
          },
          {
            id:5,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:6,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Spiced Apricot Sauce',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Butter Chicken Pizza',
        description:'tomato base, Mozzarella, chicken, butter chicken sauce (contains nuts)',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Chicken',
            isSelected:true
          },
          {
            id:4,
            name:'Butter Chicken Sauce',
            isSelected:true
          },
          
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Cajun Chicken Pizza',
        description:'tomato base, onion, garlic, black pepper, Mozzarella, tomatoes, capsicum, chilli flakes, spinach, cajun spice, chicken, Garlic Aioli',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:5,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:6,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:9,
            name:'Spinach',
            isSelected:true
          },
          {
            id:10,
            name:'Cajun Spice',
            isSelected:true
          },
          {
            id:11,
            name:'Chicken',
            isSelected:true
          },
          {
            id:12,
            name:'Garlic Aioli',
            isSelected:true
          },
      
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Chicken Triple Sauce Pizza',
        description:'tomato base, onion, garlic, pineapple, mayonnaise, chicken, capsicum, black pepper, peri-peri sauce, butter chicken sauce, Mozzarella, oregano (contains nuts)',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:5,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:6,
            name:'Chicken',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:9,
            name:'Peri-Peri Sauce',
            isSelected:true
          },
          {
            id:10,
            name:'Butter Chicken Sauce',
            isSelected:true
          },
          {
            id:11,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:12,
            name:'Oregano',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Chipotle Chicken Pizza',
        description:'chilli flakes, capsicum, onion, garlic, black pepper, Mozzarella, chicken, chipotle sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:2,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:7,
            name:'Chicken',
            isSelected:true
          },
          {
            id:8,
            name:'Chipotle Sauce',
            isSelected:true
          },
    
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Cranberry Chicken & Camembert Pizza',
        description:'tomato base, spinach, Mozzarella, cranberry sauce, chicken, Camembert',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Spinach',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Cranberry Sauce',
            isSelected:true
          },
          {
            id:5,
            name:'Chicken',
            isSelected:true
          },
          {
            id:6,
            name:'Camembert',
            isSelected:true
          },    
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Chilli Chicken Pizza',
        description:'chilli sauce base, onion, garlic, coriander, black pepper, Mozzarella, capsicum, chicken',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Chilli Sauce Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Coriander',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Chicken',
            isSelected:true
          },    
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Peri Peri Chicken Pizza',
        description:'tomato base, onion, garlic, black pepper, peri-peri sauce, mayonnaise, Mozzarella, capsicum, chicken oregano',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:5,
            name:'Peri-Peri Sauce',
            isSelected:true
          },
          {
            id:6,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:9,
            name:'Chicken Oregano',
            isSelected:true
          },
     
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Pesto Chicken Pizza',
        description:'spinach, chicken, pesto sauce, mayonnaise, black pepper,Mozzarella, capsicum, tomatoes',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Spinach',
            isSelected:true
          },
          {
            id:2,
            name:'Spinach',
            isSelected:true
          },
          {
            id:3,
            name:'Pesto Sauce',
            isSelected:true
          },
          {
            id:4,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },      {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Tomatoes',
            isSelected:true
          },    
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Bacon and Alfredo Chicken Pizza',
        description:'creamy sauce, onion, garlic, mushrooms, chicken, black pepper, capsicum, Mozzarella, bacon',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Creamy Sauce',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:5,
            name:'Chicken',
            isSelected:true
          },
          {
            id:6,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:9,
            name:'Bacon',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Satay Chicken Pizza',
        description:'satay sauce, Mozzarella, onion, garlic, chilli flakes, capsicum, black pepper, chicken (contains nuts)',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Satay Sauce',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:7,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:8,
            name:'Chicken',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'Tandoori Chicken Pizza',
        description:'tomato base, onion, mushrooms, tandoori chicken, Mozzarella, capsicum, coriander',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:4,
            name:'Tandoori Chicken',
            isSelected:true
          },
          {
            id:5,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:7,
            name:'Coriander',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Chicken",
        item:'BBQ Chicken & Bacon',
        description:'BBQ Base , Onion , Mozzarella, Chicken , Bacon , Capsicum and Mayonnaise',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'BBQ Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Chicken',
            isSelected:true
          },
          {
            id:5,
            name:'Bacon',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:7,
            name:'Mayonnaise',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Melting Hot Pizza',
        description:'cheese sauce base, onion, garlic, pepperoni, jalapenos, Mozzarella, capsicum, cabanossi',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Cheese Sauce Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Pepperoni',
            isSelected:true
          },
          {
            id:5,
            name:'Jalapenos',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:7,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:8,
            name:'Cabanossi',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Moroccans Lamb Pizza',
        description:'tomato base, onion, garlic, black pepper, chilli flakes, coriander, Mozzarella, capsicum, spiced lamb balls',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:5,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:6,
            name:'Coriander',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:9,
            name:'Spiced Lamb Balls',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Bacon and Mushroom Pizza',
        description:'tomato base, mushrooms, garlic, creamy sauce, tomatoes, black pepper, bacon, streaky bacon',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Creamy sauce',
            isSelected:true
          },
          {
            id:5,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:6,
            name:'Black pepper',
            isSelected:true
          },
          {
            id:7,
            name:'Bacon',
            isSelected:true
          },
          {
            id:8,
            name:'Streaky bacon',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'BBQ Beef and Bacon Pizza',
        description:'tomato base, onion, beef cubes, bacon, BBQ sauce, Mozzarella',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Beef Cubes',
            isSelected:true
          },
          {
            id:4,
            name:'Bacon',
            isSelected:true
          },
          {
            id:5,
            name:'BBQ Sauce',
            isSelected:true
          },
          {
            id:6,
            name:'Mozzarella',
            isSelected:true
          },    
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Hawaiian Pizza',
        description:'tomato base, ham slices, pineapple, Mozzarella, bacon',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Ham Slices',
            isSelected:true
          },
          {
            id:3,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:4,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:5,
            name:'Bacon',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Italian Pizza',
        description:'tomato base, garlic, ham slices, mushrooms, salami, capsicum, black olives, Mozzarella, oregano',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Ham Slices',
            isSelected:true
          },
          {
            id:4,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:5,
            name:'Salami',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:7,
            name:'Black Olives',
            isSelected:true
          },
          {
            id:8,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:9,
            name:'Oregano',
            isSelected:true
          },
    
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Spicy Roasted Beef Pizza',
        description:'tomato base, garlic, black pepper, chilli flakes, beef cubes, jalapenos, tomatoes, Mozzarella, capsicum, onion',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:4,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:5,
            name:'Beef Cubes',
            isSelected:true
          },
          {
            id:6,
            name:'Jalapenos',
            isSelected:true
          },
          {
            id:7,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:8,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:10,
            name:'Onion',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Meat Supreme Pizza',
        description:'tomato base, Mozzarella, salami, capsicum, onion, mushrooms, black olives, ham slices, meat balls',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Salami',
            isSelected:true
          },
          {
            id:4,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:5,
            name:'Onion',
            isSelected:true
          },
          {
            id:6,
            name:'Mushrooms',
            isSelected:true
          },
          {
            id:7,
            name:'Black Olives',
            isSelected:true
          },
          {
            id:8,
            name:'Ham Slices',
            isSelected:true
          },
          {
            id:9,
            name:'Meat Balls',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Meat Lovers Pizza',
        description:'tomato base, Mozzarella, salami, meat balls, bacon, ham, BBQ sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Salami',
            isSelected:true
          },
          {
            id:4,
            name:'Meat Balls',
            isSelected:true
          },
          {
            id:5,
            name:'Bacon',
            isSelected:true
          },
          {
            id:6,
            name:'Ham',
            isSelected:true
          },
          {
            id:7,
            name:'BBQ Sauce',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Meaty Boyz Pizza',
        description:'tomato base, garlic, onion, ham slices, salami, pineapple, Mozzarella, BBQ sauce, capsicum, tomatoes, bacon, meat balls',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Onion',
            isSelected:true
          },
          {
            id:4,
            name:'Ham Slices',
            isSelected:true
          },
          {
            id:5,
            name:'Salami',
            isSelected:true
          },
          {
            id:6,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'BBQ Sauce',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:10,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:11,
            name:'Bacon',
            isSelected:true
          },
          {
            id:12,
            name:'Meat Balls',
            isSelected:true
          },
         
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'The Meat Platter Pizza',
        description:'tomato base, Camembert, spinach, onion, Mozzarella, prawns, chicken sausage, chilli flakes, black olives, capsicum, chipotle sauce, cabanossi',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Camembert',
            isSelected:true
          },
          {
            id:3,
            name:'Spinach',
            isSelected:true
          },
          {
            id:4,
            name:'Onion',
            isSelected:true
          },
          {
            id:5,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:6,
            name:'Prawns',
            isSelected:true
          },
          {
            id:7,
            name:'Chicken Sausage',
            isSelected:true
          },
          {
            id:8,
            name:'Chilli Flakes',
            isSelected:true
          },
          {
            id:9,
            name:'Black Olives',
            isSelected:true
          },
          {
            id:10,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:11,
            name:'Chipotle Sauce',
            isSelected:true
          },
          {
            id:12,
            name:'',
            isSelected:true
          },
          {
            id:13,
            name:'Kransky',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Mexican Pizza',
        description:'',
        price:16.50,
        ingredients:[]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Peri Peri Lamb',
        description:'Tomato Base, Mayonnaise ,Peri Peri Sauce,Onion, Garlic , Black Pepper , Mozzarella , Lamb Cubes , Capsicum.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:3,
            name:'Peri Peri Sauce',
            isSelected:true
          },
          {
            id:4,
            name:'Onion',
            isSelected:true
          },
          {
            id:5,
            name:'Garlic',
            isSelected:true
          },
          {
            id:6,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Lamb Cubes',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Beef & kransky Pizza',
        description:'Beef, Capsicum , Mozzarella, Cabanossi , Onion & Garlic Aioli Sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Beef',
            isSelected:true
          },
          {
            id:2,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Cabanossi',
            isSelected:true
          },
          {
            id:5,
            name:'Onion',
            isSelected:true
          },
          {
            id:6,
            name:'Garlic Aioli',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"Meat",
        item:'Siciliano Pizza',
        description:'Tomato base, Garlic, Mozzarella, Ham, Salami, Jalapeños, Black Olives , Oregano, Capsicum, Anchovies.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato base',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Ham',
            isSelected:true
          },
          {
            id:5,
            name:'Salami',
            isSelected:true
          },
          {
            id:6,
            name:'Jalapeños',
            isSelected:true
          },
          {
            id:7,
            name:'Oregano',
            isSelected:true
          },
          {
            id:8,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:9,
            name:'Anchovies',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Jamaican Jerk Prawns Pizza',
        description:'tomato base, pineapple, spinach, capsicum, onion, garlic, coriander, black pepper, Mozzarella, spiced prawns',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:3,
            name:'Spinach',
            isSelected:true
          },
          {
            id:4,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:5,
            name:'Onion',
            isSelected:true
          },
          {
            id:6,
            name:'Garlic',
            isSelected:true
          },
          {
            id:7,
            name:'Coriander',
            isSelected:true
          },
          {
            id:8,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:9,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:10,
            name:'Spiced Prawns',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Creamy Prawns and Bacon Pizza',
        description:'creamy sauce, garlic, spinach, Mozzarella, prawns, black pepper, bacon',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Creamy Sauce',
            isSelected:true
          },
          {
            id:2,
            name:'Garlic',
            isSelected:true
          },
          {
            id:3,
            name:'Spinach',
            isSelected:true
          },
          {
            id:4,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:5,
            name:'Prawns',
            isSelected:true
          },
          {
            id:6,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:7,
            name:'Bacon',
            isSelected:true
          },
         
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Garlic Prawns Pizza',
        description:'garlic salt, onion, capsicum, prawns, black pepper, oregano',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Garlic Salt',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:4,
            name:'Prawns',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Oregano',
            isSelected:true
          },
         
        ]
    
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Prawn and Bacon Pizza',
        description:'tomato base, Mozzarella, prawns, bacon, spinach, tomatoes, black pepper, hollandaise sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Prawns',
            isSelected:true
          },
          {
            id:4,
            name:'Bacon',
            isSelected:true
          },
          {
            id:5,
            name:'Spinach',
            isSelected:true
          },
          {
            id:6,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:7,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:8,
            name:'Hollandaise Sauce',
            isSelected:true
          },
          
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Salmon and Feta Pizza',
        description:'tomato base, black pepper, Mozzarella, tomatoes, spinach, Feta, salmon, hollandaise sauce',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:5,
            name:'Spinach',
            isSelected:true
          },
          {
            id:6,
            name:'Feta',
            isSelected:true
          },
          {
            id:7,
            name:'Salmon',
            isSelected:true
          },
          {
            id:8,
            name:'Hollandaise Sauce',
            isSelected:true
          },
          
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Chipotle Prawns Pizza',
        description:'Chipotle Sauce, Seasoned Prawns , Onion , Garlic , Black Pepper, Mozzarella , Capsicum, Chilli Flakes',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Chipotle Sauce',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Seasoned Prawns',
            isSelected:true
          },
          {
            id:4,
            name:'Garlic',
            isSelected:true
          },
          {
            id:5,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Chilli Flakes',
            isSelected:true
          },
         
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Pesto Prawns Pizza',
        description:'Pesto Sauce ,Seasoned Prawns, Spinach , Mayonnaise , Mozzarella ,Tomatoes, Black Pepper, Capsicum.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Mayonnaise',
            isSelected:true
          },
          {
            id:2,
            name:'Pesto sauce',
            isSelected:true
          },
          {
            id:3,
            name:'Seasoned Prawns',
            isSelected:true
          },
          {
            id:4,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:5,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:6,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:7,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:8,
            name:'Spinach',
            isSelected:true
          },
           
        ]
      },
      {
        id:v4(),
        category:"Seafood",
        item:'Seafood Supreme',
        description:'Tomato Base, Onion, Garlic , Tuna , Black Olives , Anchovies , Mozzarella, Garlic Aioli Sauce, Seasoned Prawns.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Tuna',
            isSelected:true
          },
          {
            id:5,
            name:'Black Olives',
            isSelected:true
          },{
            id:6,
            name:'Anchovies',
            isSelected:true
          },
           
          {
            id:7,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:8,
            name:'Garlic Aioli Sauce',
            isSelected:true
          },
          {
            id:9,
            name:'Seasoned Prawns',
            isSelected:true
          },
           
        ]
      },
    ],
    ClassicRange:[
      {
        id:v4(),
        category:"ClassicRange",
        item:'Cheese Lovers Pizza',
        description:'tomato base, Mozzarella',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },   
        ]
      },
      {
        id:v4(),
        category:"ClassicRange",
        item:'Margherita Pizza',
        description:'tomato base, Mozzarella, tomatoes, basil',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato base',
            isSelected:true
          },
          {
            id:2,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:3,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:4,
            name:'Basil',
            isSelected:true
          },
          
        
        ]
      },
      {
        id:v4(),
        category:"ClassicRange",
        item:'Crunchy Veg Pizza',
        description:'tomato base, onion, garlic, black pepper, jalapenos, tomatoes, coriander, Mozzarella, capsicum, black olives',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Black Pepper',
            isSelected:true
          },
          {
            id:5,
            name:'Jalapenos',
            isSelected:true
          },
          {
            id:6,
            name:'Tomatoes',
            isSelected:true
          },
          {
            id:7,
            name:'Coriander',
            isSelected:true
          },
          {
            id:8,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:9,
            name:'Capsicum',
            isSelected:true
          },
          {
            id:10,
            name:'Black Olives',
            isSelected:true
          },
        
        ]
      },
      {
        id:v4(),
        category:"ClassicRange",
        item:'Pepperoni Pizza',
        description:'tomato base, pepperoni, Mozzarella',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato base',
            isSelected:true
          },
          {
            id:2,
            name:'Pepperoni',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          }
        ]
      },
      {
        id:v4(),
        category:"ClassicRange",
        item:'Ham and Cheese Pizza',
        description:'omato base, ham, Mozzarella',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Omato base',
            isSelected:true
          },
          {
            id:2,
            name:'Ham',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          
        
        ]
      },
      {
        id:v4(),
        category:"ClassicRange",
        item:'Tuna and Pineapple Pizza',
        description:'tomato base, onion, garlic, tuna, pineapple, mayonnaise',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Garlic',
            isSelected:true
          },
          {
            id:4,
            name:'Tuna',
            isSelected:true
          },
          {
            id:5,
            name:'Pineapple',
            isSelected:true
          },
          {
            id:6,
            name:'Mayonnaise',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"ClassicRange",
        item:'Chicken BBQ Pizza',
        description:'Tomato Base , Onion , Mozzarella,Chicken , BBQ Sauce , Capsicum.',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Onion',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
          {
            id:4,
            name:'Chicken',
            isSelected:true
          },
          {
            id:5,
            name:'BBQ Sauce',
            isSelected:true
          },
          {
            id:6,
            name:'Capsicum',
            isSelected:true
          },
        ]
      },
      {
        id:v4(),
        category:"ClassicRange",
        item:'Chicken & Cheese Pizza',
        description:'Tomato Base ,Chicken , Mozzarella',
        price:16.50,
        ingredients:[
          {
            id:1,
            name:'Tomato Base',
            isSelected:true
          },
          {
            id:2,
            name:'Chicken',
            isSelected:true
          },
          {
            id:3,
            name:'Mozzarella',
            isSelected:true
          },
        ]
      },
    ],
    secialInstructions:'',itemCategory:'Specials',type:'',itemName:'',itemPrice:0,itemDescription:'',itemsCount:1,
    actualPrice:0,
    showDishPopupForSide1:false,showPopupTrio1:false ,showPopupTrio2:false ,
    showError:false,showSoucesForSide1:false,showErrorForSoucesSide1:false,showSoucesForSide2:false,showErrorForSoucesSide2:false,showDishPopupForSide2:false,
    showErrorForEmptySide1:false, showErrorForEmptySide2:false,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:false,
    toggleMixedMeanModel:false

}

const initialSingleItemData={
  itemName:'',itemPrice:0,itemDescription:'',itemsCount:1,secialInstructions:'',actualPrice:0,itemCategory:'',type:''
}

const initialSidesItemData={
  itemName:'',itemPrice:0,itemsCount:1,secialInstructions:'',actualPrice:0,itemCategory:'',showSouces:false,showError:false,type:'add',
  swirlsSauces:[
    {
     id:1,
     text:"Butter Sauce",
     price:1.00,
     isSelected:false
    },
    {
      id:2,
      text:"Peri Peri Sauce",
      price:1.00,
      isSelected:false
     },
     {
      id:3,
      text:"Hot Chilli Sauce",
      price:1.00,
      isSelected:false
     },
     {
      id:4,
      text:"Chipotle Sauce",
      price:1.00,
      isSelected:false
     },
     {
      id:5,
      text:"Garlic Aioli",
      price:1.00,
      isSelected:false
     },
     {
      id:6,
      text:"Mayonnaise",
      price:1.00,
      isSelected:false
     },
     {
      id:7,
      text:"BBQ Sauce",
      price:1.00,
      isSelected:false
     },
     {
      id:8,
      text:"Hollandaise Sauce",
      price:1.00,
      isSelected:false
     },
     {
      id:9,
      text:"Sweet Chilli Sauce",
      price:1.00,
      isSelected:false
     },
     {
      id:10,
      text:"Tomato Sauce",
      price:1.00,
      isSelected:false
     }
  ]
}

const initialNonVegItemData={
  itemName:'',itemPrice:0,itemsCount:1,secialInstructions:'',actualPrice:0,itemCategory:'',showSouces:false,showIngredients:false,showBaseOptions:false,showExtraToppings:false,
  showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false,
  ingredientsList:[],
  baseOptionsList:[
      {
        id:1,
        text:"Regular Base",
        price:0,
        isSelected:false
       },{
        id:2,
        text:"Thin Crust",
        price:1.00,
        isSelected:false
       },{
        id:3,
        text:"Gluten Free Base",
        price:3.00,
        isSelected:false
       },
  ],
  extraToppingsList:[
    {
      id:1,
      text:"Mozzarella",
      price:3.00,
      isSelected:false
     },
     {
      id:2,
      text:"Paneer",
      price:3.00,
      isSelected:false
     },
     {
      id:3,
      text:"Chicken",
      price:3.00,
      isSelected:false
     },
     {
      id:4,
      text:"Ham",
      price:3.00,
      isSelected:false
     },
     {
      id:5,
      text:"Bacon",
      price:3.00,
      isSelected:false
     },
     {
      id:6,
      text:"Pepperoni",
      price:3.00,
      isSelected:false
     },
     {
      id:7,
      text:"Prawns",
      price:3.00,
      isSelected:false
     },
     {
      id:8,
      text:"Salmon",
      price:3.00,
      isSelected:false
     },
     {
      id:9,
      text:"Black Olives",
      price:2.00,
      isSelected:false
     },
     {
      id:10,
      text:"Jalapeños",
      price:2.00,
      isSelected:false
     },
     {
      id:11,
      text:"Pineapple",
      price:2.00,
      isSelected:false
     },
     {
      id:12,
      text:"Coriander",
      price:2.00,
      isSelected:false
     },
     {
      id:13,
      text:"Capsicum",
      price:2.00,
      isSelected:false
     },
     {
      id:14,
      text:"Onion",
      price:2.00,
      isSelected:false
     },
     {
      id:15,
      text:"Sweet corn",
      price:2.00,
      isSelected:false
     },
     {
      id:16,
      text:"Anchovies",
      price:3.00,
      isSelected:false
     },
     {
      id:17,
      text:"Mushrooms",
      price:2.00,
      isSelected:false
     },
  ],
  swirlsSauces:[
    {
     id:1,
     text:"Butter Sauce",
     price:1.00,
     isSelected:false
    },
    {
      id:2,
      text:"Peri Peri Sauce",
      price:1.00,
      isSelected:false
     },
     {
      id:3,
      text:"Hot Chilli Sauce",
      price:1.00,
      isSelected:false
     },
     {
      id:4,
      text:"Chipotle Sauce",
      price:1.00,
      isSelected:false
     },
     {
      id:5,
      text:"Garlic Aioli",
      price:1.00,
      isSelected:false
     },
     {
      id:6,
      text:"Mayonnaise",
      price:1.00,
      isSelected:false
     },
     {
      id:7,
      text:"BBQ Sauce",
      price:1.00,
      isSelected:false
     },
     {
      id:8,
      text:"Hollandaise Sauce",
      price:1.00,
      isSelected:false
     },
     {
      id:9,
      text:"Sweet Chilli Sauce",
      price:1.00,
      isSelected:false
     },
     {
      id:10,
      text:"Tomato Sauce",
      price:1.00,
      isSelected:false
     }
  ],itemDescription:'',showError:false,type:''
}

const initialPlaceOrderDetails={
 service:"Pickup",due:'Now / ASAP',storeAddress:'5/182 West Coast Road, Glen Eden, Auckland 0602',total:'',name:'',email:'',phoneNumber:'',orderNote:'',paymentMethod:'',
 paymentMethodError:'',cardNumber:'',cvc:'',expireDate:'',ErrorMsg:'',isAcceptConditions:false
}

const initialOrderDetails={
  serviceTypes:[
    {
      id:v4(),
      name:'Pickup'
    }
    ,
    {
      id:v4(),
      name:'Delivery'
    }
  ]
  ,
  activeDeliveryTypeId:'',
   showErrorForNotChoosingOrderType:false,
   text:false
}

const initiaCardDetails={
  number:'',name:'',expiry:'',
  cvc:'',
  focus:''
}

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class OrderViewPage extends Component{
  state={activeTab:tabsList[0].tabId,emailInput:'',isLogin:false,isFavourite:false,
  isServiceChoosed:false,
  toggleDessertModel:false,singleItemData:initialSingleItemData,
  finalOrderedProducts:[],sidesItemsData:initialSidesItemData,
  toggleDishesSauseModel:false,
  nonVegItemData:initialNonVegItemData,toggleNonVegModel:false,
  placeOrderData:initialPlaceOrderDetails,
  showPlaceOrderModel:false,
  showCartModel:false,
  showServiceModel:false,
  orderDetails:initialOrderDetails,
  toggleSingleItemModel:false,
  justSidesSpecialData:initialJustSidesSpecialData,
  classicTrioData:initialClassicTrioData,
  SignatureTrioData:initialSignatureTrioData,
  twinMealData:initialTwinMealData,
  singleMealData:initialSingleMealData,
  mixedMealData:initialMixedMeal,
  CardDetails:initiaCardDetails,
  toggleOtpVerificationBox:false,
  otpNumber:'',
  showInvalidOtpError:false,
  toggleLoginBox:false,
  showTermaAndConditionsModel:false,
  toggleLogoutAlertCart:false,
  buttonLoader:apiStatusConstants.initial,
  showWrongMailError:false
  
}

  // checkOutTheItem=()=>{
  //   const {filterProducts,email}=this.state 
  //   console.log(finalOrderedProducts)
  // }

  changeTab=id=>{
    this.setState({activeTab:id})
  }

  getEmail=e=>{
    this.setState({emailInput:e.target.value})
  }

  placeOrderDetailsVerify=()=>{
    const {placeOrderData,emailInput,CardDetails,finalOrderedProducts}=this.state 
    

    if (placeOrderData.isAcceptConditions === false){
       let error='Please accept the terms & conditions'
       this.setState((prevState)=>({placeOrderData:{...prevState.placeOrderData,ErrorMsg:error}}))
    }
    else if(placeOrderData.phoneNumber==='' || placeOrderData.phoneNumber.length!==10){
      let error='Please enter your phone number' 
      this.setState((prevState)=>({placeOrderData:{...prevState.placeOrderData,ErrorMsg:error}}))
    }
    else if(emailInput===''){
      let error='Please enter your Email'
      this.setState((prevState)=>({placeOrderData:{...prevState.placeOrderData,ErrorMsg:error}}))
    }
    else if (placeOrderData.name===''){
      let error='Please enter your name'
      this.setState((prevState)=>({placeOrderData:{...prevState.placeOrderData,ErrorMsg:error}}))
    }
    else if(placeOrderData.paymentMethod===''){
      let error='Please select a payment method'
      this.setState((prevState)=>({placeOrderData:{...prevState.placeOrderData,ErrorMsg:error}}))
    }
    
   

    else if (placeOrderData.paymentMethod==='Online' && (CardDetails.number.length !==19 || CardDetails.cvc.length !==3 || CardDetails.expiry.length !==7)){
    let error='Please Fill Card Details Correctly'
    this.setState((prevState)=>({placeOrderData:{...prevState.placeOrderData,ErrorMsg:error}}))
  }
    else {
      let total=0
    let cartAmount=0
    let gst=0 
    let debitCartChargers=0
    for (let i of finalOrderedProducts){
      cartAmount+=i.itemPrice
      debitCartChargers+=0.22
    }

    let orderedItems=[]
    for (let i of finalOrderedProducts){
      if(i.itemCategory==="Drinks" || i.itemCategory==="Pastas" || i.itemCategory==="BEN & JEERY'S ICE CREAM"){
       let item={
          itemName:i.itemName,
          itemDescription:i.itemDescription,
          itemCategory:i.itemCategory,
          itemsCount:i.itemsCount,
          secialInstructions:i.secialInstructions,
          itemPrice:i.itemPrice,
          actualPrice:i.actualPrice,
      }
      orderedItems.push(item)
      }
      else if (i.itemCategory==="Standard Sides" || i.itemCategory==="Classic Sides" || i.itemCategory==="Favorite Sides" ){
        const sauses= i.swirlsSauces.filter((sause)=>sause.isSelected===true)
        let item={
          itemName:i.itemName,
          itemCategory:i.itemCategory,
          itemsCount:i.itemsCount,
          secialInstructions:i.secialInstructions,
          itemPrice:i.itemPrice,
          actualPrice:i.actualPrice,
          swirlsSauces:sauses
      }
      orderedItems.push(item)
      }
      else if (i.itemCategory=== "Meat" || i.itemCategory==="Vegetarian" || i.itemCategory==="Chicken" || i.itemCategory==="ClassicRange" || i.itemCategory==="Seafood"  ){
        const sauses= i.swirlsSauces.filter((sause)=>sause.isSelected===true)
        const baseoption=i.baseOptionsList.filter((option)=>option.isSelected===true)
        const extraToppings=i.extraToppingsList.filter((option)=>option.isSelected===true)
        const removedIngredients=i.ingredientsList.filter((option)=>option.isSelected===false)
        let item={
          itemName:i.itemName,
          itemCategory:i.itemCategory,
          itemsCount:i.itemsCount,
          itemDescription:i.itemDescription,
          secialInstructions:i.secialInstructions,
          itemPrice:i.itemPrice,
          actualPrice:i.actualPrice,
          baseOption:baseoption[0],
          extraToppings:extraToppings,
          removedIngredients:removedIngredients,
          swirlsSauces:sauses,

      }
      orderedItems.push(item)
      }
      else if (i.itemCategory==="Specials" && i.itemName==="Just Sides"){
        const {side1,side2}=i
        let itemSide1={}
        if (side1.dishSelected.isSauseThere){
          let side1Sause=side1.swirlsSauces.filter((item)=>item.isSelected)
          itemSide1={
            swirlsSauces:side1Sause,name:side1.dishSelected.name
          }
        }
        else {
          itemSide1={name:side1.dishSelected.name}
        }

        let itemSide2={}
        if (side2.dishSelected.isSauseThere){
          let side2Sause=side2.swirlsSauces.filter((item)=>item.isSelected)
          itemSide2={
            swirlsSauces:side2Sause,name:side2.dishSelected.name
          }
        }
        else {
          itemSide2={name:side2.dishSelected.name}
        }

        let item={
          itemName:i.itemName,
          itemCategory:i.itemCategory,
          itemsCount:i.itemsCount,
          itemDescription:i.itemDescription,
          secialInstructions:i.secialInstructions,
          itemPrice:i.itemPrice,
          actualPrice:i.actualPrice,
          side1:itemSide1,
          side2:itemSide2
      }
      orderedItems.push(item)
      }
      else if (i.itemCategory==="Specials" && i.itemName==="Single Meal"){

        const {side1,side2,trio1}=i
        let itemSide1={}
        if (side1.dishSelected.isSauseThere){
          let side1Sause=side1.swirlsSauces.filter((item)=>item.isSelected)
          itemSide1={
            swirlsSauces:side1Sause,name:side1.dishSelected.name
          }
        }
        else {
          itemSide1={name:side1.dishSelected.name}
        }

        let itemSide2={}
        if (side2.dishSelected.isSauseThere){
          let side2Sause=side2.swirlsSauces.filter((item)=>item.isSelected)
          itemSide2={
            swirlsSauces:side2Sause,name:side2.dishSelected.name
          }
        }
        else {
          itemSide2={name:side2.dishSelected.name}
        }

        let signatureRange={}
        const sauses= trio1.swirlsSauces.filter((sause)=>sause.isSelected===true)
        const baseoption=trio1.baseOptionsList.filter((option)=>option.isSelected===true)
        const extraToppings=trio1.extraToppingsList.filter((option)=>option.isSelected===true)
        const removedIngredients=trio1.dishSelected.ingredients.filter((option)=>option.isSelected===false)

        signatureRange={
          sauses:sauses,baseoption:baseoption,extraToppings:extraToppings,removedIngredients:removedIngredients,
          itemName:trio1.dishSelected.item,
          price:trio1.dishSelected.price,
          category:trio1.dishSelected.category,
          description:trio1.dishSelected.description
        }

        


        let item={
          itemName:i.itemName,
          itemCategory:i.itemCategory,
          itemsCount:i.itemsCount,
          itemDescription:i.itemDescription,
          secialInstructions:i.secialInstructions,
          itemPrice:i.itemPrice,
          actualPrice:i.actualPrice,
          side1:itemSide1,
          side2:itemSide2,
          signatureRange:signatureRange,
         
      }
      orderedItems.push(item)
      }
      else if (i.itemCategory==="Specials" && i.itemName==="Mixed Meal"){
        const {side1,side2,trio1,trio2}=i
        let itemSide1={}
        if (side1.dishSelected.isSauseThere){
          let side1Sause=side1.swirlsSauces.filter((item)=>item.isSelected)
          itemSide1={
            swirlsSauces:side1Sause,name:side1.dishSelected.name
          }
        }
        else {
          itemSide1={name:side1.dishSelected.name}
        }

        let itemSide2={}
        if (side2.dishSelected.isSauseThere){
          let side2Sause=side2.swirlsSauces.filter((item)=>item.isSelected)
          itemSide2={
            swirlsSauces:side2Sause,name:side2.dishSelected.name
          }
        }
        else {
          itemSide2={name:side2.dishSelected.name}
        }

        let signatureRange={}
        const sauses= trio1.swirlsSauces.filter((sause)=>sause.isSelected===true)
        const baseoption=trio1.baseOptionsList.filter((option)=>option.isSelected===true)
        const extraToppings=trio1.extraToppingsList.filter((option)=>option.isSelected===true)
        const removedIngredients=trio1.dishSelected.ingredients.filter((option)=>option.isSelected===false)

        signatureRange={
          sauses:sauses,baseoption:baseoption,extraToppings:extraToppings,removedIngredients:removedIngredients,
          itemName:trio1.dishSelected.item,
          price:trio1.dishSelected.price,
          category:trio1.dishSelected.category,
          description:trio1.dishSelected.description
        }

        let signatureRange2={}
        const sauses2= trio2.swirlsSauces.filter((sause)=>sause.isSelected===true)
        const baseoption2=trio2.baseOptionsList.filter((option)=>option.isSelected===true)
        const extraToppings2=trio2.extraToppingsList.filter((option)=>option.isSelected===true)
        const removedIngredients2=trio2.dishSelected.ingredients.filter((option)=>option.isSelected===false)

        signatureRange2={
          sauses:sauses2,baseoption:baseoption2,extraToppings:extraToppings2,removedIngredients:removedIngredients2,
          itemName:trio2.dishSelected.item,
          price:trio2.dishSelected.price,
          category:trio2.dishSelected.category,
          description:trio2.dishSelected.description
        }


        let item={
          itemName:i.itemName,
          itemCategory:i.itemCategory,
          itemsCount:i.itemsCount,
          itemDescription:i.itemDescription,
          secialInstructions:i.secialInstructions,
          itemPrice:i.itemPrice,
          actualPrice:i.actualPrice,
          side1:itemSide1,
          side2:itemSide2,
          signatureRange1:signatureRange,
          signatureRange2:signatureRange2
      }
      orderedItems.push(item)
      }
      else if (i.itemCategory==="Specials" && i.itemName==="Twin Meal"){
        const {side1,side2,trio1,trio2}=i
        let itemSide1={}
        if (side1.dishSelected.isSauseThere){
          let side1Sause=side1.swirlsSauces.filter((item)=>item.isSelected)
          itemSide1={
            swirlsSauces:side1Sause,name:side1.dishSelected.name
          }
        }
        else {
          itemSide1={name:side1.dishSelected.name}
        }

        let itemSide2={}
        if (side2.dishSelected.isSauseThere){
          let side2Sause=side2.swirlsSauces.filter((item)=>item.isSelected)
          itemSide2={
            swirlsSauces:side2Sause,name:side2.dishSelected.name
          }
        }
        else {
          itemSide2={name:side2.dishSelected.name}
        }

        let signatureRange={}
        const sauses= trio1.swirlsSauces.filter((sause)=>sause.isSelected===true)
        const baseoption=trio1.baseOptionsList.filter((option)=>option.isSelected===true)
        const extraToppings=trio1.extraToppingsList.filter((option)=>option.isSelected===true)
        const removedIngredients=trio1.dishSelected.ingredients.filter((option)=>option.isSelected===false)

        signatureRange={
          sauses:sauses,baseoption:baseoption,extraToppings:extraToppings,removedIngredients:removedIngredients,
          itemName:trio1.dishSelected.item,
          price:trio1.dishSelected.price,
          category:trio1.dishSelected.category,
          description:trio1.dishSelected.description
        }

        let signatureRange2={}
        const sauses2= trio2.swirlsSauces.filter((sause)=>sause.isSelected===true)
        const baseoption2=trio2.baseOptionsList.filter((option)=>option.isSelected===true)
        const extraToppings2=trio2.extraToppingsList.filter((option)=>option.isSelected===true)
        const removedIngredients2=trio2.dishSelected.ingredients.filter((option)=>option.isSelected===false)

        signatureRange2={
          sauses:sauses2,baseoption:baseoption2,extraToppings:extraToppings2,removedIngredients:removedIngredients2,
          itemName:trio2.dishSelected.item,
          price:trio2.dishSelected.price,
          category:trio2.dishSelected.category,
          description:trio2.dishSelected.description
        }


        let item={
          itemName:i.itemName,
          itemCategory:i.itemCategory,
          itemsCount:i.itemsCount,
          itemDescription:i.itemDescription,
          secialInstructions:i.secialInstructions,
          itemPrice:i.itemPrice,
          actualPrice:i.actualPrice,
          side1:itemSide1,
          side2:itemSide2,
          signatureRange1:signatureRange,
          signatureRange2:signatureRange2
      }
      orderedItems.push(item)
      }
      else if (i.itemCategory==="Specials" && i.itemName==="Signature Trio"){
        const {trio1,trio2,trio3}=i
        let signatureRange={}
        const sauses= trio1.swirlsSauces.filter((sause)=>sause.isSelected===true)
        const baseoption=trio1.baseOptionsList.filter((option)=>option.isSelected===true)
        const extraToppings=trio1.extraToppingsList.filter((option)=>option.isSelected===true)
        const removedIngredients=trio1.dishSelected.ingredients.filter((option)=>option.isSelected===false)

        signatureRange={
          sauses:sauses,baseoption:baseoption,extraToppings:extraToppings,removedIngredients:removedIngredients,
          itemName:trio1.dishSelected.item,
          price:trio1.dishSelected.price,
          category:trio1.dishSelected.category,
          description:trio1.dishSelected.description
        }

        let signatureRange2={}
        const sauses2= trio2.swirlsSauces.filter((sause)=>sause.isSelected===true)
        const baseoption2=trio2.baseOptionsList.filter((option)=>option.isSelected===true)
        const extraToppings2=trio2.extraToppingsList.filter((option)=>option.isSelected===true)
        const removedIngredients2=trio2.dishSelected.ingredients.filter((option)=>option.isSelected===false)

        signatureRange2={
          sauses:sauses2,baseoption:baseoption2,extraToppings:extraToppings2,removedIngredients:removedIngredients2,
          itemName:trio2.dishSelected.item,
          price:trio2.dishSelected.price,
          category:trio2.dishSelected.category,
          description:trio2.dishSelected.description
        }

        let signatureRange3={}
        const sauses3= trio3.swirlsSauces.filter((sause)=>sause.isSelected===true)
        const baseoption3=trio3.baseOptionsList.filter((option)=>option.isSelected===true)
        const extraToppings3=trio3.extraToppingsList.filter((option)=>option.isSelected===true)
        const removedIngredients3=trio3.dishSelected.ingredients.filter((option)=>option.isSelected===false)

        signatureRange3={
          sauses:sauses3,baseoption:baseoption3,extraToppings:extraToppings3,removedIngredients:removedIngredients3,
          itemName:trio3.dishSelected.item,
          price:trio3.dishSelected.price,
          category:trio3.dishSelected.category,
          description:trio3.dishSelected.description
        }


        let item={
          itemName:i.itemName,
          itemCategory:i.itemCategory,
          itemsCount:i.itemsCount,
          itemDescription:i.itemDescription,
          secialInstructions:i.secialInstructions,
          itemPrice:i.itemPrice,
          actualPrice:i.actualPrice,
        
          signatureRange1:signatureRange,
          signatureRange2:signatureRange2,
          signatureRange3:signatureRange3
      }
      orderedItems.push(item)
    }
      else if (i.itemCategory==="Specials" && i.itemName==="Classic Trio"){
        const {trio1,trio2,trio3}=i
        let signatureRange={}
        const sauses= trio1.swirlsSauces.filter((sause)=>sause.isSelected===true)
        const baseoption=trio1.baseOptionsList.filter((option)=>option.isSelected===true)
        const extraToppings=trio1.extraToppingsList.filter((option)=>option.isSelected===true)
        const removedIngredients=trio1.dishSelected.ingredients.filter((option)=>option.isSelected===false)

        signatureRange={
          sauses:sauses,baseoption:baseoption,extraToppings:extraToppings,removedIngredients:removedIngredients,
          itemName:trio1.dishSelected.item,
          price:trio1.dishSelected.price,
          category:trio1.dishSelected.category,
          description:trio1.dishSelected.description
        }

        let signatureRange2={}
        const sauses2= trio2.swirlsSauces.filter((sause)=>sause.isSelected===true)
        const baseoption2=trio2.baseOptionsList.filter((option)=>option.isSelected===true)
        const extraToppings2=trio2.extraToppingsList.filter((option)=>option.isSelected===true)
        const removedIngredients2=trio2.dishSelected.ingredients.filter((option)=>option.isSelected===false)

        signatureRange2={
          sauses:sauses2,baseoption:baseoption2,extraToppings:extraToppings2,removedIngredients:removedIngredients2,
          itemName:trio2.dishSelected.item,
          price:trio2.dishSelected.price,
          category:trio2.dishSelected.category,
          description:trio2.dishSelected.description
        }

        let signatureRange3={}
        const sauses3= trio3.swirlsSauces.filter((sause)=>sause.isSelected===true)
        const baseoption3=trio3.baseOptionsList.filter((option)=>option.isSelected===true)
        const extraToppings3=trio3.extraToppingsList.filter((option)=>option.isSelected===true)
        const removedIngredients3=trio3.dishSelected.ingredients.filter((option)=>option.isSelected===false)

        signatureRange3={
          sauses:sauses3,baseoption:baseoption3,extraToppings:extraToppings3,removedIngredients:removedIngredients3,
          itemName:trio3.dishSelected.item,
          price:trio3.dishSelected.price,
          category:trio3.dishSelected.category,
          description:trio3.dishSelected.description
        }


        let item={
          itemName:i.itemName,
          itemCategory:i.itemCategory,
          itemsCount:i.itemsCount,
          itemDescription:i.itemDescription,
          secialInstructions:i.secialInstructions,
          itemPrice:i.itemPrice,
          actualPrice:i.actualPrice,
        
          signatureRange1:signatureRange,
          signatureRange2:signatureRange2,
          signatureRange3:signatureRange3
      }
      orderedItems.push(item) 
      }
    }
    
    gst=cartAmount*(0.15)
    total=gst+debitCartChargers+cartAmount
      const senddata={
        email:emailInput,
        totalAmount:total,
        orderedItems:orderedItems
      }

      console.log(senddata)

    //   axios.post("https://pizzafood.pabbas.net/api/checkout",senddata)
    //  .then(response => {
    //    console.log(response)
    //    this.setState({placeOrderData:initialPlaceOrderDetails,showPlaceOrderModel:false,CardDetails:initiaCardDetails})
    // })
    // .catch(error => {
    //   console.log(error);
    // });

    this.setState({placeOrderData:initialPlaceOrderDetails,showPlaceOrderModel:false,CardDetails:initiaCardDetails,finalOrderedProducts:[]})
    }


  }

  doVerification=()=>{
    const {emailInput}=this.state

    const otp=Math.floor(Math.round()*10000)
  }

 

  Login=()=>{   
  const {emailInput}=this.state
  let regex = new RegExp('[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}');

  this.setState({buttonLoader:apiStatusConstants.inProgress})

  if (regex.test(emailInput)) {
    fetch('http://localhost:4005/sendotp', {
        method: "POST",
        body: JSON.stringify({
            "email": `${emailInput}`
        }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(
            (res) => {
                if (res.status == 200) {
                  console.log(res)
                   this.setState({toggleLoginBox:false,toggleOtpVerificationBox:true,buttonLoader:apiStatusConstants.initial,showWrongMailError:false})
                }
                else {
                  this.setState({showWrongMailError:true,buttonLoader:apiStatusConstants.initial})
              }
            }
        )
  
}
else{
  this.setState({showWrongMailError:true,buttonLoader:apiStatusConstants.initial})
}
  }

  verifyEmail=()=>{
    const {emailInput,otpNumber}=this.state
    fetch('http://localhost:4005/verify',
                {
                    method: "POST",
                    body: JSON.stringify({
                        "email": `${emailInput}`,
                        "otp": `${otpNumber}`
                    }),
                    headers: { 'Content-Type': 'application/json' }


                }
            )
                .then(
                    (res) => {
                        
                        if (res.status == 200) {
                          setTimeout(()=>{
                            message.success("Login Successfully")
                        },2000);
                           this.setState({isLogin:true,showInvalidOtpError:false,toggleLoginBox:false,toggleOtpVerificationBox:false,showInvalidOtpError:false})
                        }
                        else {
                           this.setState({showInvalidOtpError:true,isLogin:false})

                        }
                    }
                )
    
  }

  toggleFavourite=()=>{
    const {isFavourite}=this.state 
    
    if(isFavourite===false){
      const config={
        className:"pop-messages",
        content:"Added to favourites"
      }
      setTimeout(()=>{
          message.success(config)
      },2000);
     
      this.setState({isFavourite:true})
    }
    else{
      const config={
        className:"pop-messages",
        content:"Removed from favourites"
      }
      setTimeout(()=>{
        message.success(config)
    },2000);
   
      this.setState({isFavourite:false})
    }
    
  }



  SingleItem=props=>{
    const {dessert, modelTrigger}=props
    return(
      <li className='single-item-list'   data-target={modelTrigger} data-toggle="modal" 
      >
      <button onClick={this.setItemNameDescriptionPrice}>
      <div className='item-decription-container'>
           <h1 className='item'>{dessert.item}</h1>
           <p className='item-description'>{dessert.description}</p>
        </div>
        <button className='item-price-container'><p className='price'>${dessert.price}</p></button>
      
      </button>
        </li>

    )
  }
  
  changeInstructions=e=>{
    this.setState((prevState)=>({singleItemData:{...prevState.singleItemData,secialInstructions:e.target.value}}))
  }

  changeSingleItemDetails=itemDetails=>{
    const {singleItemData,isServiceChoosed}=this.state
    if(isServiceChoosed === false){
      this.setState({showServiceModel:true})
    }
    else{
    const data={
      itemName:itemDetails.item,
      itemPrice:itemDetails.price,
      itemDescription:itemDetails.description,
      itemsCount:singleItemData.itemsCount,
      secialInstructions:singleItemData.secialInstructions,
      actualPrice:itemDetails.price,
      itemCategory:itemDetails.category,
      type:'add'
    }
    this.setState((prevState)=>({singleItemData:data,toggleSingleItemModel:true}))
  }
}

  changeSidesDetails=side=>{
    const {sidesItemsData,isServiceChoosed}=this.state
    if(isServiceChoosed === false){
      this.setState({showServiceModel:true})
    }
    else{
    const data={
      itemName:side.item,
      itemPrice:side.price,
      itemsCount:sidesItemsData.itemsCount,
      secialInstructions:sidesItemsData.secialInstructions,
      actualPrice:side.price,
      itemCategory:side.category,
      showSouces:sidesItemsData.showSouces,
      swirlsSauces:sidesItemsData.swirlsSauces,
      showError:sidesItemsData.showError,
      type:'add'
    }
    this.setState((prevState)=>({sidesItemsData:data,toggleDishesSauseModel:true}))
  }
  }

  changingNonVegItemsData=side=>{
    const {nonVegItemData,isServiceChoosed}=this.state
    if(isServiceChoosed === false){
      this.setState({showServiceModel:true})
    }
    else{
    const data={
      itemName:side.item,
      itemPrice:side.price,
      actualPrice:side.price,
      itemCategory:side.category,
      itemsCount:nonVegItemData.itemsCount,
      secialInstructions:nonVegItemData.secialInstructions,
      ingredientsList:side.ingredients,swirlsSauces:nonVegItemData.swirlsSauces,extraToppingsList:nonVegItemData.extraToppingsList,baseOptionsList:nonVegItemData.baseOptionsList,
      showSouces:nonVegItemData.showSouces,showIngredients:nonVegItemData.showIngredients,showBaseOptions:nonVegItemData.showBaseOptions,showExtraToppings:nonVegItemData.showExtraToppings,
      showErrorForBaseOption:nonVegItemData.showErrorForBaseOption,showErrorForExtraToppings:nonVegItemData.showErrorForExtraToppings,showErrorForSouces:nonVegItemData.showErrorForSouces,
      itemDescription:side.description,
      type:'add'
    }
    this.setState((prevState)=>({nonVegItemData:data,toggleNonVegModel:true}))
  }
  }

  changeJustSidesData=side=>{
    const {justSidesSpecialData,isServiceChoosed}=this.state
    
    if(isServiceChoosed === false){
      this.setState({showServiceModel:true})
    }
    else{
      const data ={
        ...justSidesSpecialData,
        itemName:side.item,
        itemPrice:side.price,
        actualPrice:side.price,
        itemCategory:side.category,
        itemDescription:side.description,
      type:'add',
      toggleJustSidesModel:true,
      itemsCount:justSidesSpecialData.itemsCount,
          }
      this.setState((prevState)=>({justSidesSpecialData:data}))
    }
  }

  changeClassicTriosData=side=>{
    const {classicTrioData,isServiceChoosed}=this.state
    if(isServiceChoosed === false){
      this.setState({showServiceModel:true})
    }
    else{
      const data={
        ...classicTrioData,
        toggleClassicTrioModel:true,
        type:'add',
        itemName:side.item,
        itemPrice:side.price,
        actualPrice:side.price,
        itemCategory:side.category,
        itemDescription:side.description,
      }
      this.setState({classicTrioData:data})
    }
  }
  
  changeSignatureTriosData=side=>{
    const {SignatureTrioData,isServiceChoosed}=this.state
    if(isServiceChoosed === false){
      this.setState({showServiceModel:true})
    }
    else{
      const data={
        ...SignatureTrioData,
        toggleClassicTrioModel:true,
        type:'add',
        itemName:side.item,
        itemPrice:side.price,
        actualPrice:side.price,
        itemCategory:side.category,
        itemDescription:side.description,
      }
      this.setState({SignatureTrioData:data})
    }
  }

  changingTwinMealData=side=>{
    const {twinMealData,isServiceChoosed}=this.state
    if(isServiceChoosed === false){
      this.setState({showServiceModel:true})
    }
    else{
      const data={
        ...twinMealData,
        toggleTwinMeanModel:true,
        type:'add',
        itemName:side.item,
        itemPrice:side.price,
        actualPrice:side.price,
        itemCategory:side.category,
        itemDescription:side.description,
      }
      this.setState({twinMealData:data})
    }
  }

 changingSingleMealData=side=>{
    const {singleMealData,isServiceChoosed}=this.state
    if(isServiceChoosed === false){
      this.setState({showServiceModel:true})
    }
    else{
      const data={
        ...singleMealData,
        toggleSingleMealModel:true,
        type:'add',
        itemName:side.item,
        itemPrice:side.price,
        actualPrice:side.price,
        itemCategory:side.category,
        itemDescription:side.description,
      }
      this.setState({singleMealData:data})
    }
  }

  changingMixedMealData=side=>{
    const {mixedMealData,isServiceChoosed}=this.state
    if(isServiceChoosed === false){
      this.setState({showServiceModel:true})
    }
    else{
      const data={
        ...mixedMealData,
        type:'add',
        itemName:side.item,
        itemPrice:side.price,
        actualPrice:side.price,
        itemCategory:side.category,
        itemDescription:side.description,
        toggleMixedMeanModel:true
      }
      this.setState({mixedMealData:data})
    }
  }



  addToOrders=()=>{
    const {singleItemData}=this.state 
    const data={
      id:v4(),
      ...singleItemData
    }
    const config={
      className:"pop-messages",
      content:"Item added to added"
    }
    setTimeout(()=>{
      message.success(config)
  },2000);
    this.setState((prevState)=>({finalOrderedProducts:[...prevState.finalOrderedProducts,data],singleItemData:initialSingleItemData,toggleSingleItemModel:false}))
  }

  addSidesToModel=()=>{
    const {sidesItemsData}=this.state 
    const {swirlsSauces,itemName,itemCategory,itemPrice,itemsCount,actualPrice,showError,secialInstructions,showSouces}=sidesItemsData
    let c=0 
    for (let i of swirlsSauces){
      if(i.isSelected){
        c+=1
      }
    }
    if(c>3){
      this.setState((prevState)=>({sidesItemsData:{...prevState.sidesItemsData,showError:true}}))
    }
    else {
      const data={
        id:v4(),swirlsSauces,
        itemName,itemCategory,itemPrice,itemsCount,actualPrice,showError:false,secialInstructions,showSouces:false
      }
      const config={
        className:"pop-messages",
        content:"Item added to added"
      }
      setTimeout(()=>{
        message.success(config)
    },2000);
      this.setState((prevState)=>({finalOrderedProducts:[...prevState.finalOrderedProducts,data],sidesItemsData:initialSidesItemData,toggleDishesSauseModel:false}))
    }
  }

  addVegItemsModel=()=>{
    const {nonVegItemData}=this.state
    const {itemName,itemPrice,itemsCount,secialInstructions,actualPrice,itemCategory,showSouces,showIngredients,showBaseOptions,showExtraToppings,
    showErrorForBaseOption,showErrorForExtraToppings,showErrorForSouces,ingredientsList,baseOptionsList,extraToppingsList,itemDescription,swirlsSauces}=nonVegItemData
    let cSauses=0
    let cTopping=0
    let CbaseOption=0
    for (let i of swirlsSauces){
      if(i.isSelected){
        cSauses+=1
      }
    }
    for (let i of extraToppingsList){
      if(i.isSelected){
        cTopping+=1
      }
    }

    for (let i of baseOptionsList){
      if(i.isSelected){
        CbaseOption+=1
      }
    }
    
    if(CbaseOption ===0 ){
      this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,showError:true,showErrorForBaseOption:true}}))
    }
    if(cTopping>5){
      this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,showError:true,showErrorForExtraToppings:true}}))
    }
    if(cSauses>3){
      this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,showError:true,showErrorForSouces:true}}))
    }

    if(CbaseOption !==0 && cTopping<=5 && cSauses<=3){
      const data=
       {id:v4(),itemName,itemPrice,itemsCount,secialInstructions,actualPrice,itemCategory,showSouces:false,showIngredients:false,showBaseOptions:false,showExtraToppings:false,
        showErrorForBaseOption:false,showError:false,showErrorForExtraToppings:false,showErrorForSouces:false,ingredientsList,baseOptionsList,extraToppingsList,itemDescription,swirlsSauces}
        const config={
          className:"pop-messages",
          content:"Item added to added"
        }
        setTimeout(()=>{
          message.success(config)
      },2000);
         this.setState((prevState)=>({finalOrderedProducts:[...prevState.finalOrderedProducts,data],nonVegItemData:initialNonVegItemData,toggleNonVegModel:false}))
   
    }
    
  }

  addJustSidesToFinal=()=>{
    const {justSidesSpecialData}=this.state 
    const {side1,side2}=justSidesSpecialData 
    let s1c=0
    let s2c=0 
    for(let i of side1.swirlsSauces){
      if(i.isSelected){
        s1c+=1
      }
    }
    for(let i of side2.swirlsSauces){
      if(i.isSelected){
        s2c+=1
      }
    }

    if(side1.isDisheSelected === false){
       this.setState((prevState)=>({justSidesSpecialData:{...prevState.justSidesSpecialData,showError:true,showErrorForEmptySide1:true}}))
    }

    else if(side2.isDisheSelected === false){
      this.setState((prevState)=>({justSidesSpecialData:{...prevState.justSidesSpecialData,showError:true,showErrorForEmptySide2:true,showErrorForEmptySide1:false}}))
    }

    else if(s1c> 3){
      this.setState((prevState)=>({justSidesSpecialData:{...prevState.justSidesSpecialData,showError:true,showErrorForSoucesSide1:true,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
    }
    else if(s2c > 3){
      this.setState((prevState)=>({justSidesSpecialData:{...prevState.justSidesSpecialData,showError:true,showErrorForSoucesSide2:true,showErrorForSoucesSide1:false,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
    }

    else if((s1c < 4) && (s2c < 4)){
       const data={id:v4(),showDishPopupForSide1:false,showDishPopupForSide2:false,showErrorForSoucesSide1:false,showErrorForSoucesSide2:false,showError:false,showSoucesForSide1:false,showSoucesForSide2:false 
      ,...justSidesSpecialData,toggleJustSidesModel:false}
      const config={
        className:"pop-messages",
        content:"Item added to added"
      }
      setTimeout(()=>{
        message.success(config)
    },2000);
      this.setState((prevState)=>({finalOrderedProducts:[...prevState.finalOrderedProducts,data],justSidesSpecialData:initialJustSidesSpecialData}))
    }

  }
  
   addClassicSidePizzasToFinals =()=>{
    const {classicTrioData}=this.state 
    const {trio1,trio2,trio3}=classicTrioData
    let t1Sauces=0
    let t1Toppings=0
    let t1baseOption=0

    let t2Sauces=0
    let t2Toppings=0
    let t2baseOption=0

    let t3Sauces=0
    let t3Toppings=0
    let t3baseOption=0
    
    for(let i of trio1.extraToppingsList){
      if(i.isSelected){
        t1Toppings+=1
      }
    }
    for(let i of trio1.swirlsSauces){
      if(i.isSelected){
        t1Sauces+=1
      }
    }
    for(let i of trio1.baseOptionsList){
      if(i.isSelected){
        t1baseOption+=1
      }
    }

    for(let i of trio2.extraToppingsList){
      if(i.isSelected){
        t2Toppings+=1
      }
    }
    for(let i of trio2.swirlsSauces){
      if(i.isSelected){
        t2Sauces+=1
      }
    }
    for(let i of trio2.baseOptionsList){
      if(i.isSelected){
        t2baseOption+=1
      }
    }

    for(let i of trio3.extraToppingsList){
      if(i.isSelected){
        t3Toppings+=1
      }
    }
    for(let i of trio3.swirlsSauces){
      if(i.isSelected){
        t3Sauces+=1
      }
    }
    for(let i of trio3.baseOptionsList){
      if(i.isSelected){
        t3baseOption+=1
      }
    }


    if(!trio1.isDisheSelected){
       this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio1:true,showError:true}}))
    }

    else if(t1baseOption===0){
      const trio1Data={...trio1,showErrorForBaseOption:true}
      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
    }
    else if(t1Toppings>5){
      const trio1Data={...trio1,showErrorForExtraToppings:true,showErrorForBaseOption:false}
      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
    }
    else if(t1Sauces>3){
      const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:true}
      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
    }


    else if(!trio2.isDisheSelected){
      const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio1:trio1data,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:true,showError:true}}))
  }
 else  if(t2baseOption===0){
    const trio2Data={...trio2,showErrorForBaseOption:true}
    const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
    this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio2:false,trio2:trio2Data,showError:true}}))
  }
 else  if(t2Toppings>5){
    const trio2Data={...trio2,showErrorForExtraToppings:true,showErrorForBaseOption:false}
    const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
    this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio2:false,trio1:trio1data,trio2:trio2Data,showError:true}}))
  }
 else  if(t2Sauces>3){
    const trio2Data={...trio2,showErrorForSouces:true,showErrorForExtraToppings:false,showErrorForBaseOption:false}
    const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
    this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio2:false,trio2:trio2Data,trio1:trio1data,showError:true}}))
  }

 else  if(!trio3.isDisheSelected){
  const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
    this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio2:trio2Data,trio1:trio1data,showErrorForEmtyTrio3:true,showError:true}}))
}
 else if(t3baseOption===0){
  const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  const trio3Data={...trio3,showErrorForBaseOption:true}
  this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio3:false,trio2:trio2Data,trio1:trio1data,trio3:trio3Data,showError:true}}))
}
 else if(t3Toppings>5){
  const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  const trio3Data={...trio3,showErrorForExtraToppings:true,showErrorForBaseOption:false}
  this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio3:false,trio2:trio2Data,trio1:trio1data,trio3:trio3Data,showError:true}}))
}
else if(t3Sauces>3){
  const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  const trio3Data={...trio3,showErrorForSouces:true,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio3:false,trio2:trio2Data,trio1:trio1data,trio3:trio3Data,showError:true}}))
}

else if( trio1.isDisheSelected && trio2.isDisheSelected && trio3.isDisheSelected && t1Sauces < 4 && t1Toppings < 6 && t1baseOption===1 && t2Sauces < 4 && t2Toppings < 6 && t2baseOption===1 &&  t3Sauces < 4 && t3Toppings < 6 && t3baseOption===1)
{
 const trio1data={...trio1,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 
 const trio2data={...trio2,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 
 const trio3data={...trio3,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 


 const data={id:v4(),...classicTrioData,toggleClassicTrioModel:false,showError:false,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:false,showErrorForEmtyTrio3:false,
 trio1:trio1data,trio2:trio2data,trio3:trio3data}
 const config={
  className:"pop-messages",
  content:"Item added to added"
}
setTimeout(()=>{
  message.success(config)
},2000);
  this.setState((prevState)=>({finalOrderedProducts:[...prevState.finalOrderedProducts,data],classicTrioData:initialClassicTrioData}))

}

 
}

addSignatureSidePizzasToFinals=()=>{
  const {SignatureTrioData}=this.state 
  const {trio1,trio2,trio3}=SignatureTrioData
  let t1Sauces=0
  let t1Toppings=0
  let t1baseOption=0

  let t2Sauces=0
  let t2Toppings=0
  let t2baseOption=0

  let t3Sauces=0
  let t3Toppings=0
  let t3baseOption=0
  
  for(let i of trio1.extraToppingsList){
    if(i.isSelected){
      t1Toppings+=1
    }
  }
  for(let i of trio1.swirlsSauces){
    if(i.isSelected){
      t1Sauces+=1
    }
  }
  for(let i of trio1.baseOptionsList){
    if(i.isSelected){
      t1baseOption+=1
    }
  }

  for(let i of trio2.extraToppingsList){
    if(i.isSelected){
      t2Toppings+=1
    }
  }
  for(let i of trio2.swirlsSauces){
    if(i.isSelected){
      t2Sauces+=1
    }
  }
  for(let i of trio2.baseOptionsList){
    if(i.isSelected){
      t2baseOption+=1
    }
  }

  for(let i of trio3.extraToppingsList){
    if(i.isSelected){
      t3Toppings+=1
    }
  }
  for(let i of trio3.swirlsSauces){
    if(i.isSelected){
      t3Sauces+=1
    }
  }
  for(let i of trio3.baseOptionsList){
    if(i.isSelected){
      t3baseOption+=1
    }
  }


  if(!trio1.isDisheSelected){
     this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio1:true,showError:true}}))
  }

  else if(t1baseOption===0){
    const trio1Data={...trio1,showErrorForBaseOption:true}
    this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
  }
  else if(t1Toppings>5){
    const trio1Data={...trio1,showErrorForExtraToppings:true,showErrorForBaseOption:false}
    this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
  }
  else if(t1Sauces>3){
    const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:true}
    this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
  }


  else if(!trio2.isDisheSelected){
    const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
    this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio1:trio1data,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:true,showError:true}}))
}
else  if(t2baseOption===0){
  const trio2Data={...trio2,showErrorForBaseOption:true}
  const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio2:false,trio2:trio2Data,showError:true}}))
}
else  if(t2Toppings>5){
  const trio2Data={...trio2,showErrorForExtraToppings:true,showErrorForBaseOption:false}
  const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio2:false,trio1:trio1data,trio2:trio2Data,showError:true}}))
}
else  if(t2Sauces>3){
  const trio2Data={...trio2,showErrorForSouces:true,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio2:false,trio2:trio2Data,trio1:trio1data,showError:true}}))
}

else  if(!trio3.isDisheSelected){
const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio2:trio2Data,trio1:trio1data,showErrorForEmtyTrio3:true,showError:true}}))
}
else if(t3baseOption===0){
const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
const trio3Data={...trio3,showErrorForBaseOption:true}
this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio3:false,trio2:trio2Data,trio1:trio1data,trio3:trio3Data,showError:true}}))
}
else if(t3Toppings>5){
const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
const trio3Data={...trio3,showErrorForExtraToppings:true,showErrorForBaseOption:false}
this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio3:false,trio2:trio2Data,trio1:trio1data,trio3:trio3Data,showError:true}}))
}
else if(t3Sauces>3){
const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
const trio3Data={...trio3,showErrorForSouces:true,showErrorForExtraToppings:false,showErrorForBaseOption:false}
this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio3:false,trio2:trio2Data,trio1:trio1data,trio3:trio3Data,showError:true}}))
}

else if( trio1.isDisheSelected && trio2.isDisheSelected && trio3.isDisheSelected && t1Sauces < 4 && t1Toppings < 6 && t1baseOption===1 && t2Sauces < 4 && t2Toppings < 6 && t2baseOption===1 &&  t3Sauces < 4 && t3Toppings < 6 && t3baseOption===1)
{
const trio1data={...trio1,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 
const trio2data={...trio2,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 
const trio3data={...trio3,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 


const data={id:v4(),...SignatureTrioData,toggleClassicTrioModel:false,showError:false,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:false,showErrorForEmtyTrio3:false,
trio1:trio1data,trio2:trio2data,trio3:trio3data}
const config={
  className:"pop-messages",
  content:"Item added to added"
}
setTimeout(()=>{
  message.success(config)
},2000);

this.setState((prevState)=>({finalOrderedProducts:[...prevState.finalOrderedProducts,data],SignatureTrioData:initialSignatureTrioData}))

}
}
addTwinMealPizzasToFinals=()=>{
  const {twinMealData}=this.state
  const {side1,side2,trio1,trio2}=twinMealData
  let t1Sauces=0
  let t1Toppings=0
  let t1baseOption=0

  let t2Sauces=0
  let t2Toppings=0
  let t2baseOption=0
  for(let i of trio1.extraToppingsList){
    if(i.isSelected){
      t1Toppings+=1
    }
  }
  for(let i of trio1.swirlsSauces){
    if(i.isSelected){
      t1Sauces+=1
    }
  }
  for(let i of trio1.baseOptionsList){
    if(i.isSelected){
      t1baseOption+=1
    }
  }

  for(let i of trio2.extraToppingsList){
    if(i.isSelected){
      t2Toppings+=1
    }
  }
  for(let i of trio2.swirlsSauces){
    if(i.isSelected){
      t2Sauces+=1
    }
  }
  for(let i of trio2.baseOptionsList){
    if(i.isSelected){
      t2baseOption+=1
    }
  }
  let s1c=0
let s2c=0 
for(let i of side1.swirlsSauces){
  if(i.isSelected){
    s1c+=1
  }
}
for(let i of side2.swirlsSauces){
  if(i.isSelected){
    s2c+=1
  }
}

  
  if(!trio1.isDisheSelected){
    this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showErrorForEmtyTrio1:true,showError:true}}))
 }

 else if(t1baseOption===0){
   const trio1Data={...trio1,showErrorForBaseOption:true}
   this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }
 else if(t1Toppings>5){
   const trio1Data={...trio1,showErrorForExtraToppings:true,showErrorForBaseOption:false}
   this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }
 else if(t1Sauces>3){
   const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:true}
   this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }


 else if(!trio2.isDisheSelected){
   const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
   this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio1:trio1data,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:true,showError:true}}))
}
else  if(t2baseOption===0){
 const trio2Data={...trio2,showErrorForBaseOption:true}
 const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
 this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showErrorForEmtyTrio2:false,trio2:trio2Data,showError:true}}))
}
else  if(t2Toppings>5){
 const trio2Data={...trio2,showErrorForExtraToppings:true,showErrorForBaseOption:false}
 const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
 this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showErrorForEmtyTrio2:false,trio1:trio1data,trio2:trio2Data,showError:true}}))
}
else  if(t2Sauces>3){
 const trio2Data={...trio2,showErrorForSouces:true,showErrorForExtraToppings:false,showErrorForBaseOption:false}
 const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
 this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showErrorForEmtyTrio2:false,trio2:trio2Data,trio1:trio1data,showError:true}}))
}


else if(side1.isDisheSelected === false){
   this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showError:true,showErrorForEmptySide1:true}}))
}

else if(side2.isDisheSelected === false){
  this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showError:true,showErrorForEmptySide2:true,showErrorForEmptySide1:false}}))
}

else if(s1c> 3){
  this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showError:true,showErrorForSoucesSide1:true,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
}
else if(s2c > 3){
  this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showError:true,showErrorForSoucesSide2:true,showErrorForSoucesSide1:false,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
}

else if( s1c < 4 && s2c < 4 &&  trio1.isDisheSelected && trio2.isDisheSelected  && t1Sauces < 4 && t1Toppings < 6 && t1baseOption===1 && t2Sauces < 4 && t2Toppings < 6 && t2baseOption===1 )
{
const trio1data={...trio1,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 
const trio2data={...trio2,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 


const data={id:v4(),...twinMealData,toggleClassicTrioModel:false,showError:false,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:false,
trio1:trio1data,trio2:trio2data,showDishPopupForSide1:false,showDishPopupForSide2:false,showErrorForSoucesSide1:false,showErrorForSoucesSide2:false,showSoucesForSide1:false,showSoucesForSide2:false 
}
const config={
  className:"pop-messages",
  content:"Item added to added"
}
setTimeout(()=>{
  message.success(config)
},2000);

this.setState((prevState)=>({finalOrderedProducts:[...prevState.finalOrderedProducts,data],twinMealData:initialTwinMealData}))

}

}
addSingleMealPizzasToFinals=()=>{
  const {singleMealData}=this.state
  const {side1,side2,trio1,trio2}=singleMealData
  let t1Sauces=0
  let t1Toppings=0
  let t1baseOption=0

  console.log(singleMealData)
  for(let i of trio1.extraToppingsList){
    if(i.isSelected){
      t1Toppings+=1
    }
  }
  for(let i of trio1.swirlsSauces){
    if(i.isSelected){
      t1Sauces+=1
    }
  }
  for(let i of trio1.baseOptionsList){
    if(i.isSelected){
      t1baseOption+=1
    }
  }

  
  let s1c=0
let s2c=0 
for(let i of side1.swirlsSauces){
  if(i.isSelected){
    s1c+=1
  }
}
for(let i of side2.swirlsSauces){
  if(i.isSelected){
    s2c+=1
  }
}

  
  if(!trio1.isDisheSelected){
    this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showErrorForEmtyTrio1:true,showError:true}}))
 }

 else if(t1baseOption===0){
   const trio1Data={...trio1,showErrorForBaseOption:true}
   this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }
 else if(t1Toppings>5){
   const trio1Data={...trio1,showErrorForExtraToppings:true,showErrorForBaseOption:false}
   this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }
 else if(t1Sauces>3){
   const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:true}
   this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }

else if(side1.isDisheSelected === false){
  const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
   this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showError:true,trio1:trio1Data,showErrorForEmptySide1:true}}))
}

else if(side2.isDisheSelected === false){
  const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showError:true,trio1:trio1Data,showErrorForEmptySide2:true,showErrorForEmptySide1:false}}))
}

else if(s1c> 3){
  const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showError:true,trio1:trio1Data,showErrorForSoucesSide1:true,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
}
else if(s2c > 3){
  const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showError:true,trio1:trio1Data,showErrorForSoucesSide2:true,showErrorForSoucesSide1:false,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
}

else if( s1c < 4 && s2c < 4 &&  trio1.isDisheSelected   && t1Sauces < 4 && t1Toppings < 6 && t1baseOption===1 )
{
const trio1data={...trio1,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 


const data={id:v4(),...singleMealData,showError:false,showErrorForEmtyTrio1:false,
trio1:trio1data,showDishPopupForSide1:false,showDishPopupForSide2:false,showErrorForSoucesSide1:false,showErrorForSoucesSide2:false,showSoucesForSide1:false,showSoucesForSide2:false, 
toggleSingleMealModel:false,
}
const config={
  className:"pop-messages",
  content:"Item added to added"
}
setTimeout(()=>{
  message.success(config)
},2000);
this.setState((prevState)=>({finalOrderedProducts:[...prevState.finalOrderedProducts,data],singleMealData:initialSingleMealData,twinMealData:initialTwinMealData}))

}

}

addMixedMealPizzasToFinals=()=>{
  const {mixedMealData}=this.state
  const {side1,side2,trio1,trio2}=mixedMealData
  let t1Sauces=0
  let t1Toppings=0
  let t1baseOption=0

  let t2Sauces=0
  let t2Toppings=0
  let t2baseOption=0
  for(let i of trio1.extraToppingsList){
    if(i.isSelected){
      t1Toppings+=1
    }
  }
  for(let i of trio1.swirlsSauces){
    if(i.isSelected){
      t1Sauces+=1
    }
  }
  for(let i of trio1.baseOptionsList){
    if(i.isSelected){
      t1baseOption+=1
    }
  }

  for(let i of trio2.extraToppingsList){
    if(i.isSelected){
      t2Toppings+=1
    }
  }
  for(let i of trio2.swirlsSauces){
    if(i.isSelected){
      t2Sauces+=1
    }
  }
  for(let i of trio2.baseOptionsList){
    if(i.isSelected){
      t2baseOption+=1
    }
  }
  let s1c=0
let s2c=0 
for(let i of side1.swirlsSauces){
  if(i.isSelected){
    s1c+=1
  }
}
for(let i of side2.swirlsSauces){
  if(i.isSelected){
    s2c+=1
  }
}

  
  if(!trio1.isDisheSelected){
    this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showErrorForEmtyTrio1:true,showError:true}}))
 }

 else if(t1baseOption===0){
   const trio1Data={...trio1,showErrorForBaseOption:true}
   this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }
 else if(t1Toppings>5){
   const trio1Data={...trio1,showErrorForExtraToppings:true,showErrorForBaseOption:false}
   this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }
 else if(t1Sauces>3){
   const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:true}
   this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }


 else if(!trio2.isDisheSelected){
   const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
   this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio1:trio1data,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:true,showError:true}}))
}
else  if(t2baseOption===0){
 const trio2Data={...trio2,showErrorForBaseOption:true}
 const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
 this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showErrorForEmtyTrio2:false,trio2:trio2Data,showError:true}}))
}
else  if(t2Toppings>5){
 const trio2Data={...trio2,showErrorForExtraToppings:true,showErrorForBaseOption:false}
 const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
 this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showErrorForEmtyTrio2:false,trio1:trio1data,trio2:trio2Data,showError:true}}))
}
else  if(t2Sauces>3){
 const trio2Data={...trio2,showErrorForSouces:true,showErrorForExtraToppings:false,showErrorForBaseOption:false}
 const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
 this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showErrorForEmtyTrio2:false,trio2:trio2Data,trio1:trio1data,showError:true}}))
}


else if(side1.isDisheSelected === false){
   this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showError:true,showErrorForEmptySide1:true}}))
}

else if(side2.isDisheSelected === false){
  this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showError:true,showErrorForEmptySide2:true,showErrorForEmptySide1:false}}))
}

else if(s1c> 3){
  this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showError:true,showErrorForSoucesSide1:true,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
}
else if(s2c > 3){
  this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showError:true,showErrorForSoucesSide2:true,showErrorForSoucesSide1:false,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
}

else if( s1c < 4 && s2c < 4 &&  trio1.isDisheSelected && trio2.isDisheSelected  && t1Sauces < 4 && t1Toppings < 6 && t1baseOption===1 && t2Sauces < 4 && t2Toppings < 6 && t2baseOption===1 )
{
const trio1data={...trio1,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 
const trio2data={...trio2,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 


const data={id:v4(),...mixedMealData,toggleClassicTrioModel:false,showError:false,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:false,
trio1:trio1data,trio2:trio2data,showDishPopupForSide1:false,showDishPopupForSide2:false,showErrorForSoucesSide1:false,showErrorForSoucesSide2:false,showSoucesForSide1:false,showSoucesForSide2:false 
}
const config={
  className:"pop-messages",
  content:"Item added to added"
}
setTimeout(()=>{
  message.success(config)
},2000);

this.setState((prevState)=>({finalOrderedProducts:[...prevState.finalOrderedProducts,data],mixedMealData:initialMixedMeal}))

}

}

  updateItemDissertsfinals=updateInfo=>{
    const {finalOrderedProducts}=this.state 
    
    const updateData=finalOrderedProducts.map((item)=>{
      if(item.id===updateInfo.type){
        return updateInfo
      }
      else{
        return item
      }
    })
    const config={
      className:"pop-messages",
      content:"Item edited"
    }
    setTimeout(()=>{
      message.success(config)
  },2000);
    this.setState({finalOrderedProducts:updateData,singleItemData:initialSingleItemData,sidesItemsData:initialSidesItemData,toggleDishesSauseModel:false,toggleSingleItemModel:false})
  }

  updateSidesInfinals=()=>{
    const {sidesItemsData,finalOrderedProducts}=this.state 
    const {swirlsSauces,itemName,itemCategory,itemPrice,itemsCount,actualPrice,showError,secialInstructions,showSouces}=sidesItemsData
    let c=0 
    for (let i of swirlsSauces){
      if(i.isSelected){
        c+=1
      }
    }
    if(c>3){
      this.setState((prevState)=>({sidesItemsData:{...prevState.sidesItemsData,showError:true}}))
    }
    else{
      const data={
       ...sidesItemsData,showError:false,showSouces:false,
      }
      const updateData=finalOrderedProducts.map((item)=>{
        if(item.id===data.type){
          return data
        }
        else{
          return item
        }
      })
      const config={
        className:"pop-messages",
        content:"Item edited"
      }
      setTimeout(()=>{
        message.success(config)
    },2000);
      this.setState({finalOrderedProducts:updateData,singleItemData:initialSingleItemData,sidesItemsData:initialSidesItemData,toggleDishesSauseModel:false})
  
    }
  }

  updateItemSidesInfinals=()=>{
    const {nonVegItemData,finalOrderedProducts}=this.state
    const {itemName,itemPrice,itemsCount,secialInstructions,actualPrice,itemCategory,showSouces,showIngredients,showBaseOptions,showExtraToppings,
    showErrorForBaseOption,showErrorForExtraToppings,showErrorForSouces,ingredientsList,baseOptionsList,extraToppingsList,itemDescription,swirlsSauces}=nonVegItemData
    let cSauses=0
    let cTopping=0
    let CbaseOption=0
    for (let i of swirlsSauces){
      if(i.isSelected){
        cSauses+=1
      }
    }
    for (let i of extraToppingsList){
      if(i.isSelected){
        cTopping+=1
      }
    }

    for (let i of baseOptionsList){
      if(i.isSelected){
        CbaseOption+=1
      }
    }
    
    if(CbaseOption ===0 ){
      this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,showError:true,showErrorForBaseOption:true}}))
    }
    if(cTopping>5){
      this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,showError:true,showErrorForExtraToppings:true}}))
    }
    if(cSauses>3){
      this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,showError:true,showErrorForSouces:true}}))
    }

    if(CbaseOption !==0 && cTopping<=5 && cSauses<=3){
      const data=
       {...nonVegItemData,showIngredients:false,showBaseOptions:false,showSouces:false,showExtraToppings:false,
        showErrorForBaseOption:false,showError:false,showErrorForExtraToppings:false,showErrorForSouces:false}
       
        const updateData=finalOrderedProducts.map((item)=>{
          if(item.id===data.type){
            return data
          }
          else{
            return item
          }
        })
        const config={
          className:"pop-messages",
          content:"Item edited"
        }
        setTimeout(()=>{
          message.success(config)
      },2000);
        this.setState({finalOrderedProducts:updateData,singleItemData:initialSingleItemData,sidesItemsData:initialSidesItemData,toggleDishesSauseModel:false,nonVegItemData:initialNonVegItemData,toggleNonVegModel:false})
    
    }
  }

  updateItemOfJustSidesInFinals=()=>{
    const {justSidesSpecialData,finalOrderedProducts}=this.state
   const {side1,side2}=justSidesSpecialData 
    let s1c=0
    let s2c=0 
    for(let i of side1.swirlsSauces){
      if(i.isSelected){
        s1c+=1
      }
    }
    for(let i of side2.swirlsSauces){
      if(i.isSelected){
        s2c+=1
      }
    }

    if(side1.isDisheSelected === false){
       this.setState((prevState)=>({justSidesSpecialData:{...prevState.justSidesSpecialData,showError:true,showErrorForEmptySide1:true}}))
    }

    else if(side2.isDisheSelected === false){
      this.setState((prevState)=>({justSidesSpecialData:{...prevState.justSidesSpecialData,showError:true,showErrorForEmptySide2:true,showErrorForEmptySide1:false}}))
    }

    else if(s1c> 3){
      this.setState((prevState)=>({justSidesSpecialData:{...prevState.justSidesSpecialData,showError:true,showErrorForSoucesSide1:true,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
    }
    else if(s2c > 3){
      this.setState((prevState)=>({justSidesSpecialData:{...prevState.justSidesSpecialData,showError:true,showErrorForSoucesSide2:true,showErrorForSoucesSide1:false,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
    }

    else if((s1c < 4) && (s2c < 4)){   
      const data=
       {showDishPopupForSide1:false,showDishPopupForSide2:false,showErrorForSoucesSide1:false,showErrorForSoucesSide2:false,showError:false,showSoucesForSide1:false,showSoucesForSide2:false 
        ,...justSidesSpecialData,toggleJustSidesModel:false}
       
        const updateData=finalOrderedProducts.map((item)=>{
          if(item.id===data.type){
            return data
          }
          else{
            return item
          }
        })
        const config={
          className:"pop-messages",
          content:"Item edited"
        }
        setTimeout(()=>{
          message.success(config)
      },2000);
        this.setState({finalOrderedProducts:updateData,justSidesSpecialData:initialJustSidesSpecialData,singleItemData:initialSingleItemData,sidesItemsData:initialSidesItemData,toggleDishesSauseModel:false,nonVegItemData:initialNonVegItemData,toggleNonVegModel:false})
    
    }

  }

  updateSpecialClassicTrioToFinal=()=>{
    const {classicTrioData,finalOrderedProducts}=this.state 
    const {trio1,trio2,trio3}=classicTrioData
    let t1Sauces=0
    let t1Toppings=0
    let t1baseOption=0

    let t2Sauces=0
    let t2Toppings=0
    let t2baseOption=0

    let t3Sauces=0
    let t3Toppings=0
    let t3baseOption=0
    
    for(let i of trio1.extraToppingsList){
      if(i.isSelected){
        t1Toppings+=1
      }
    }
    for(let i of trio1.swirlsSauces){
      if(i.isSelected){
        t1Sauces+=1
      }
    }
    for(let i of trio1.baseOptionsList){
      if(i.isSelected){
        t1baseOption+=1
      }
    }

    for(let i of trio2.extraToppingsList){
      if(i.isSelected){
        t2Toppings+=1
      }
    }
    for(let i of trio2.swirlsSauces){
      if(i.isSelected){
        t2Sauces+=1
      }
    }
    for(let i of trio2.baseOptionsList){
      if(i.isSelected){
        t2baseOption+=1
      }
    }

    for(let i of trio3.extraToppingsList){
      if(i.isSelected){
        t3Toppings+=1
      }
    }
    for(let i of trio3.swirlsSauces){
      if(i.isSelected){
        t3Sauces+=1
      }
    }
    for(let i of trio3.baseOptionsList){
      if(i.isSelected){
        t3baseOption+=1
      }
    }


    if(!trio1.isDisheSelected){
       this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio1:true,showError:true}}))
    }

    else if(t1baseOption===0){
      const trio1Data={...trio1,showErrorForBaseOption:true}
      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
    }
    else if(t1Toppings>5){
      const trio1Data={...trio1,showErrorForExtraToppings:true,showErrorForBaseOption:false}
      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
    }
    else if(t1Sauces>3){
      const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:true}
      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
    }


    else if(!trio2.isDisheSelected){
      const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio1:trio1data,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:true,showError:true}}))
  }
 else  if(t2baseOption===0){
    const trio2Data={...trio2,showErrorForBaseOption:true}
    const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
    this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio2:false,trio2:trio2Data,showError:true}}))
  }
 else  if(t2Toppings>5){
    const trio2Data={...trio2,showErrorForExtraToppings:true,showErrorForBaseOption:false}
    const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
    this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio2:false,trio1:trio1data,trio2:trio2Data,showError:true}}))
  }
 else  if(t2Sauces>3){
    const trio2Data={...trio2,showErrorForSouces:true,showErrorForExtraToppings:false,showErrorForBaseOption:false}
    const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
    this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio2:false,trio2:trio2Data,trio1:trio1data,showError:true}}))
  }

 else  if(!trio3.isDisheSelected){
  const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
    this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio2:trio2Data,trio1:trio1data,showErrorForEmtyTrio3:true,showError:true}}))
}
 else if(t3baseOption===0){
  const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  const trio3Data={...trio3,showErrorForBaseOption:true}
  this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio3:false,trio2:trio2Data,trio1:trio1data,trio3:trio3Data,showError:true}}))
}
 else if(t3Toppings>5){
  const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  const trio3Data={...trio3,showErrorForExtraToppings:true,showErrorForBaseOption:false}
  this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio3:false,trio2:trio2Data,trio1:trio1data,trio3:trio3Data,showError:true}}))
}
else if(t3Sauces>3){
  const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  const trio3Data={...trio3,showErrorForSouces:true,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showErrorForEmtyTrio3:false,trio2:trio2Data,trio1:trio1data,trio3:trio3Data,showError:true}}))
}

else if( trio1.isDisheSelected && trio2.isDisheSelected && trio3.isDisheSelected && t1Sauces < 4 && t1Toppings < 6 && t1baseOption===1 && t2Sauces < 4 && t2Toppings < 6 && t2baseOption===1 &&  t3Sauces < 4 && t3Toppings < 6 && t3baseOption===1)
{
 const trio1data={...trio1,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 
 const trio2data={...trio2,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 
 const trio3data={...trio3,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 


 const data={...classicTrioData,toggleClassicTrioModel:false,showError:false,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:false,showErrorForEmtyTrio3:false,
 trio1:trio1data,trio2:trio2data,trio3:trio3data}
   const updateData=finalOrderedProducts.map((item)=>{
     if(item.id===data.type){
       return data
     }
     else{
       return item
     }
   })
   const config={
    className:"pop-messages",
    content:"Item edited"
  }
  setTimeout(()=>{
    message.success(config)
},2000);
   this.setState({finalOrderedProducts:updateData,classicTrioData:initialClassicTrioData,justSidesSpecialData:initialJustSidesSpecialData,singleItemData:initialSingleItemData,sidesItemsData:initialSidesItemData,toggleDishesSauseModel:false,nonVegItemData:initialNonVegItemData,toggleNonVegModel:false})

}
  }
  updateSpecialSignatureTrioToFinal =()=>{
const {SignatureTrioData,finalOrderedProducts}=this.state 
    const {trio1,trio2,trio3}=SignatureTrioData
    let t1Sauces=0
    let t1Toppings=0
    let t1baseOption=0

    let t2Sauces=0
    let t2Toppings=0
    let t2baseOption=0

    let t3Sauces=0
    let t3Toppings=0
    let t3baseOption=0
    
    for(let i of trio1.extraToppingsList){
      if(i.isSelected){
        t1Toppings+=1
      }
    }
    for(let i of trio1.swirlsSauces){
      if(i.isSelected){
        t1Sauces+=1
      }
    }
    for(let i of trio1.baseOptionsList){
      if(i.isSelected){
        t1baseOption+=1
      }
    }

    for(let i of trio2.extraToppingsList){
      if(i.isSelected){
        t2Toppings+=1
      }
    }
    for(let i of trio2.swirlsSauces){
      if(i.isSelected){
        t2Sauces+=1
      }
    }
    for(let i of trio2.baseOptionsList){
      if(i.isSelected){
        t2baseOption+=1
      }
    }

    for(let i of trio3.extraToppingsList){
      if(i.isSelected){
        t3Toppings+=1
      }
    }
    for(let i of trio3.swirlsSauces){
      if(i.isSelected){
        t3Sauces+=1
      }
    }
    for(let i of trio3.baseOptionsList){
      if(i.isSelected){
        t3baseOption+=1
      }
    }


    if(!trio1.isDisheSelected){
       this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio1:true,showError:true}}))
    }

    else if(t1baseOption===0){
      const trio1Data={...trio1,showErrorForBaseOption:true}
      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
    }
    else if(t1Toppings>5){
      const trio1Data={...trio1,showErrorForExtraToppings:true,showErrorForBaseOption:false}
      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
    }
    else if(t1Sauces>3){
      const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:true}
      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
    }


    else if(!trio2.isDisheSelected){
      const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio1:trio1data,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:true,showError:true}}))
  }
 else  if(t2baseOption===0){
    const trio2Data={...trio2,showErrorForBaseOption:true}
    const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
    this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio2:false,trio2:trio2Data,showError:true}}))
  }
 else  if(t2Toppings>5){
    const trio2Data={...trio2,showErrorForExtraToppings:true,showErrorForBaseOption:false}
    const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
    this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio2:false,trio1:trio1data,trio2:trio2Data,showError:true}}))
  }
 else  if(t2Sauces>3){
    const trio2Data={...trio2,showErrorForSouces:true,showErrorForExtraToppings:false,showErrorForBaseOption:false}
    const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
    this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio2:false,trio2:trio2Data,trio1:trio1data,showError:true}}))
  }

 else  if(!trio3.isDisheSelected){
  const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
    this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio2:trio2Data,trio1:trio1data,showErrorForEmtyTrio3:true,showError:true}}))
}
 else if(t3baseOption===0){
  const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  const trio3Data={...trio3,showErrorForBaseOption:true}
  this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio3:false,trio2:trio2Data,trio1:trio1data,trio3:trio3Data,showError:true}}))
}
 else if(t3Toppings>5){
  const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  const trio3Data={...trio3,showErrorForExtraToppings:true,showErrorForBaseOption:false}
  this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio3:false,trio2:trio2Data,trio1:trio1data,trio3:trio3Data,showError:true}}))
}
else if(t3Sauces>3){
  const trio2Data={...trio2,showErrorForSouces:false,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  const trio3Data={...trio3,showErrorForSouces:true,showErrorForExtraToppings:false,showErrorForBaseOption:false}
  this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showErrorForEmtyTrio3:false,trio2:trio2Data,trio1:trio1data,trio3:trio3Data,showError:true}}))
}

else if( trio1.isDisheSelected && trio2.isDisheSelected  &&trio3.isDisheSelected && t1Sauces < 4 && t1Toppings < 6 && t1baseOption===1 && t2Sauces < 4 && t2Toppings < 6 && t2baseOption===1 &&  t3Sauces < 4 && t3Toppings < 6 && t3baseOption===1)
{
 const trio1data={...trio1,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 
 const trio2data={...trio2,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 
 const trio3data={...trio3,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 


 const data={...SignatureTrioData,toggleClassicTrioModel:false,showError:false,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:false,showErrorForEmtyTrio3:false,
 trio1:trio1data,trio2:trio2data,trio3:trio3data}
   const updateData=finalOrderedProducts.map((item)=>{
     if(item.id===data.type){
       return data
     }
     else{
       return item
     }
   })
   const config={
    className:"pop-messages",
    content:"Item edited"
  }
  setTimeout(()=>{
    message.success(config)
},2000);
   this.setState({finalOrderedProducts:updateData,SignatureTrioData:initialSignatureTrioData,classicTrioData:initialClassicTrioData,justSidesSpecialData:initialJustSidesSpecialData,singleItemData:initialSingleItemData,sidesItemsData:initialSidesItemData,toggleDishesSauseModel:false,nonVegItemData:initialNonVegItemData,toggleNonVegModel:false})

  }

}


updateTwinMealPizzasToFinals=()=>{
  const {twinMealData,finalOrderedProducts}=this.state
  const {side1,side2,trio1,trio2}=twinMealData
  let t1Sauces=0
  let t1Toppings=0
  let t1baseOption=0

  let t2Sauces=0
  let t2Toppings=0
  let t2baseOption=0
  for(let i of trio1.extraToppingsList){
    if(i.isSelected){
      t1Toppings+=1
    }
  }
  for(let i of trio1.swirlsSauces){
    if(i.isSelected){
      t1Sauces+=1
    }
  }
  for(let i of trio1.baseOptionsList){
    if(i.isSelected){
      t1baseOption+=1
    }
  }

  for(let i of trio2.extraToppingsList){
    if(i.isSelected){
      t2Toppings+=1
    }
  }
  for(let i of trio2.swirlsSauces){
    if(i.isSelected){
      t2Sauces+=1
    }
  }
  for(let i of trio2.baseOptionsList){
    if(i.isSelected){
      t2baseOption+=1
    }
  }
  let s1c=0
let s2c=0 
for(let i of side1.swirlsSauces){
  if(i.isSelected){
    s1c+=1
  }
}
for(let i of side2.swirlsSauces){
  if(i.isSelected){
    s2c+=1
  }
}

  
  if(!trio1.isDisheSelected){
    this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showErrorForEmtyTrio1:true,showError:true}}))
 }

 else if(t1baseOption===0){
   const trio1Data={...trio1,showErrorForBaseOption:true}
   this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }
 else if(t1Toppings>5){
   const trio1Data={...trio1,showErrorForExtraToppings:true,showErrorForBaseOption:false}
   this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }
 else if(t1Sauces>3){
   const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:true}
   this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }


 else if(!trio2.isDisheSelected){
   const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
   this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio1:trio1data,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:true,showError:true}}))
}
else  if(t2baseOption===0){
 const trio2Data={...trio2,showErrorForBaseOption:true}
 const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
 this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showErrorForEmtyTrio2:false,trio2:trio2Data,showError:true}}))
}
else  if(t2Toppings>5){
 const trio2Data={...trio2,showErrorForExtraToppings:true,showErrorForBaseOption:false}
 const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
 this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showErrorForEmtyTrio2:false,trio1:trio1data,trio2:trio2Data,showError:true}}))
}
else  if(t2Sauces>3){
 const trio2Data={...trio2,showErrorForSouces:true,showErrorForExtraToppings:false,showErrorForBaseOption:false}
 const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
 this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showErrorForEmtyTrio2:false,trio2:trio2Data,trio1:trio1data,showError:true}}))
}


else if(side1.isDisheSelected === false){
   this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showError:true,showErrorForEmptySide1:true}}))
}

else if(side2.isDisheSelected === false){
  this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showError:true,showErrorForEmptySide2:true,showErrorForEmptySide1:false}}))
}

else if(s1c> 3){
  this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showError:true,showErrorForSoucesSide1:true,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
}
else if(s2c > 3){
  this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showError:true,showErrorForSoucesSide2:true,showErrorForSoucesSide1:false,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
}

else if( s1c < 4 && s2c < 4 &&  trio1.isDisheSelected && trio2.isDisheSelected  && t1Sauces < 4 && t1Toppings < 6 && t1baseOption===1 && t2Sauces < 4 && t2Toppings < 6 && t2baseOption===1 )
{
const trio1data={...trio1,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 
const trio2data={...trio2,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 


const data={...twinMealData,toggleClassicTrioModel:false,showError:false,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:false,
trio1:trio1data,trio2:trio2data,showDishPopupForSide1:false,showDishPopupForSide2:false,showErrorForSoucesSide1:false,showErrorForSoucesSide2:false,showSoucesForSide1:false,showSoucesForSide2:false 
}

const updateData=finalOrderedProducts.map((item)=>{
  if(item.id===data.type){
    return data
  }
  else{
    return item
  }
})
const config={
  className:"pop-messages",
  content:"Item edited"
}
setTimeout(()=>{
  message.success(config)
},2000);
this.setState({finalOrderedProducts:updateData,twinMealData:initialTwinMealData,SignatureTrioData:initialSignatureTrioData,classicTrioData:initialClassicTrioData,justSidesSpecialData:initialJustSidesSpecialData,singleItemData:initialSingleItemData,sidesItemsData:initialSidesItemData,toggleDishesSauseModel:false,nonVegItemData:initialNonVegItemData,toggleNonVegModel:false})

}

}

updateMixedMealPizzasToFinals=()=>{
  const {mixedMealData,finalOrderedProducts}=this.state
  const {side1,side2,trio1,trio2}=mixedMealData
  let t1Sauces=0
  let t1Toppings=0
  let t1baseOption=0

  let t2Sauces=0
  let t2Toppings=0
  let t2baseOption=0
  for(let i of trio1.extraToppingsList){
    if(i.isSelected){
      t1Toppings+=1
    }
  }
  for(let i of trio1.swirlsSauces){
    if(i.isSelected){
      t1Sauces+=1
    }
  }
  for(let i of trio1.baseOptionsList){
    if(i.isSelected){
      t1baseOption+=1
    }
  }

  for(let i of trio2.extraToppingsList){
    if(i.isSelected){
      t2Toppings+=1
    }
  }
  for(let i of trio2.swirlsSauces){
    if(i.isSelected){
      t2Sauces+=1
    }
  }
  for(let i of trio2.baseOptionsList){
    if(i.isSelected){
      t2baseOption+=1
    }
  }
  let s1c=0
let s2c=0 
for(let i of side1.swirlsSauces){
  if(i.isSelected){
    s1c+=1
  }
}
for(let i of side2.swirlsSauces){
  if(i.isSelected){
    s2c+=1
  }
}

  
  if(!trio1.isDisheSelected){
    this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showErrorForEmtyTrio1:true,showError:true}}))
 }

 else if(t1baseOption===0){
   const trio1Data={...trio1,showErrorForBaseOption:true}
   this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }
 else if(t1Toppings>5){
   const trio1Data={...trio1,showErrorForExtraToppings:true,showErrorForBaseOption:false}
   this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }
 else if(t1Sauces>3){
   const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:true}
   this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }


 else if(!trio2.isDisheSelected){
   const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
   this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio1:trio1data,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:true,showError:true}}))
}
else  if(t2baseOption===0){
 const trio2Data={...trio2,showErrorForBaseOption:true}
 const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
 this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showErrorForEmtyTrio2:false,trio2:trio2Data,showError:true}}))
}
else  if(t2Toppings>5){
 const trio2Data={...trio2,showErrorForExtraToppings:true,showErrorForBaseOption:false}
 const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
 this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showErrorForEmtyTrio2:false,trio1:trio1data,trio2:trio2Data,showError:true}}))
}
else  if(t2Sauces>3){
 const trio2Data={...trio2,showErrorForSouces:true,showErrorForExtraToppings:false,showErrorForBaseOption:false}
 const trio1data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
 this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showErrorForEmtyTrio2:false,trio2:trio2Data,trio1:trio1data,showError:true}}))
}


else if(side1.isDisheSelected === false){
   this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showError:true,showErrorForEmptySide1:true}}))
}

else if(side2.isDisheSelected === false){
  this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showError:true,showErrorForEmptySide2:true,showErrorForEmptySide1:false}}))
}

else if(s1c> 3){
  this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showError:true,showErrorForSoucesSide1:true,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
}
else if(s2c > 3){
  this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showError:true,showErrorForSoucesSide2:true,showErrorForSoucesSide1:false,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
}

else if( s1c < 4 && s2c < 4 &&  trio1.isDisheSelected && trio2.isDisheSelected  && t1Sauces < 4 && t1Toppings < 6 && t1baseOption===1 && t2Sauces < 4 && t2Toppings < 6 && t2baseOption===1 )
{
const trio1data={...trio1,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 
const trio2data={...trio2,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 


const data={...mixedMealData,toggleClassicTrioModel:false,showError:false,showErrorForEmtyTrio1:false,showErrorForEmtyTrio2:false,
trio1:trio1data,trio2:trio2data,showDishPopupForSide1:false,showDishPopupForSide2:false,showErrorForSoucesSide1:false,showErrorForSoucesSide2:false,showSoucesForSide1:false,showSoucesForSide2:false 
}
const updateData=finalOrderedProducts.map((item)=>{
  if(item.id===data.type){
    return data
  }
  else{
    return item
  }
})


const config={
  className:"pop-messages",
  content:"Item edited"
}
setTimeout(()=>{
  message.success(config)
},2000);
this.setState({finalOrderedProducts:updateData,mixedMealData:initialMixedMeal,singleMealData:initialSingleMealData,twinMealData:initialTwinMealData,SignatureTrioData:initialSignatureTrioData,classicTrioData:initialClassicTrioData,justSidesSpecialData:initialJustSidesSpecialData,singleItemData:initialSingleItemData,sidesItemsData:initialSidesItemData,toggleDishesSauseModel:false,nonVegItemData:initialNonVegItemData,toggleNonVegModel:false})

}

}
updateSingleMealPizzasToFinals=()=>{
  const {singleMealData,finalOrderedProducts}=this.state
  const {side1,side2,trio1,trio2}=singleMealData
  let t1Sauces=0
  let t1Toppings=0
  let t1baseOption=0

  
  for(let i of trio1.extraToppingsList){
    if(i.isSelected){
      t1Toppings+=1
    }
  }
  for(let i of trio1.swirlsSauces){
    if(i.isSelected){
      t1Sauces+=1
    }
  }
  for(let i of trio1.baseOptionsList){
    if(i.isSelected){
      t1baseOption+=1
    }
  }

  
  let s1c=0
let s2c=0 
for(let i of side1.swirlsSauces){
  if(i.isSelected){
    s1c+=1
  }
}
for(let i of side2.swirlsSauces){
  if(i.isSelected){
    s2c+=1
  }
}

  
  if(!trio1.isDisheSelected){
    this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showErrorForEmtyTrio1:true,showError:true}}))
 }

 else if(t1baseOption===0){
   const trio1Data={...trio1,showErrorForBaseOption:true}
   this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }
 else if(t1Toppings>5){
   const trio1Data={...trio1,showErrorForExtraToppings:true,showErrorForBaseOption:false}
   this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }
 else if(t1Sauces>3){
   const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:true}
   this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showErrorForEmtyTrio1:false,trio1:trio1Data,showError:true}}))
 }

else if(side1.isDisheSelected === false){
  const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
   this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,trio1:trio1Data,showError:true,showErrorForEmptySide1:true}}))
}

else if(side2.isDisheSelected === false){
  const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showError:true,trio1:trio1Data,showErrorForEmptySide2:true,showErrorForEmptySide1:false}}))
}

else if(s1c> 3){
  const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showError:true,trio1:trio1Data,showErrorForSoucesSide1:true,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
}
else if(s2c > 3){
  const trio1Data={...trio1,showErrorForExtraToppings:false,showErrorForBaseOption:false,showErrorForSouces:false}
  this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showError:true,trio1:trio1Data,showErrorForSoucesSide2:true,showErrorForSoucesSide1:false,showErrorForEmptySide2:false,showErrorForEmptySide1:false}}))
}

else if( s1c < 4 && s2c < 4 &&  trio1.isDisheSelected   && t1Sauces < 4 && t1Toppings < 6 && t1baseOption===1 )
{
const trio1data={...trio1,showBaseOptions:false,showExtraToppings:false,showSouces:false,showErrorForBaseOption:false,showErrorForExtraToppings:false,showErrorForSouces:false} 


const data={...singleMealData,showError:false,showErrorForEmtyTrio1:false,
trio1:trio1data,showDishPopupForSide1:false,showDishPopupForSide2:false,showErrorForSoucesSide1:false,showErrorForSoucesSide2:false,showSoucesForSide1:false,showSoucesForSide2:false, 
toggleSingleMealModel:false,
}
const updateData=finalOrderedProducts.map((item)=>{
  if(item.id===data.type){
    return data
  }
  else{
    return item
  }
})
const config={
  className:"pop-messages",
  content:"Item edited"
}
setTimeout(()=>{
  message.success(config)
},2000);
this.setState({finalOrderedProducts:updateData,singleMealData:initialSingleMealData,twinMealData:initialTwinMealData,SignatureTrioData:initialSignatureTrioData,classicTrioData:initialClassicTrioData,justSidesSpecialData:initialJustSidesSpecialData,singleItemData:initialSingleItemData,sidesItemsData:initialSidesItemData,toggleDishesSauseModel:false,nonVegItemData:initialNonVegItemData,toggleNonVegModel:false})



}

}



  

  render(){
    const {activeTab,emailInput,isLogin,isFavourite,isServiceChoosed,toggleDishesSauseModel ,singleItemData,finalOrderedProducts,sidesItemsData
    ,toggleNonVegModel,nonVegItemData,showPlaceOrderModel,placeOrderData,showCartModel,showServiceModel,orderDetails,toggleSingleItemModel ,
    justSidesSpecialData,classicTrioData,SignatureTrioData,twinMealData,singleMealData,mixedMealData,CardDetails,toggleOtpVerificationBox,toggleLoginBox
   ,showTermaAndConditionsModel,toggleLogoutAlertCart,buttonLoader,showInvalidOtpError,showWrongMailError }=this.state
    let total=0
    let cartAmount=0
    let gst=0 
    let debitCartChargers=0
    for (let i of finalOrderedProducts){
      cartAmount+=i.itemPrice
      debitCartChargers+=0.22
    }
    
    gst=cartAmount*(0.15)
    total=gst+debitCartChargers+cartAmount

    const pickupClass=orderDetails.activeDeliveryTypeId === orderDetails.serviceTypes[0].id? 'active-pickup-class':'normal-pickup-class' 
    const deliveryClass=orderDetails.activeDeliveryTypeId === orderDetails.serviceTypes[1].id? 'active-pickup-class':'normal-pickup-class' 
    
    return(
      <div>
      <div className='bg-white fixed-top navbar-tabs-bg-container'>
        <div className='navbar-container'>
          <img
                src="https://bno-restaurant-images.imgix.net/b00011ff-eae3-4a02-b764-f659125891f6.png?lossless=1"
                alt="logo"
                class="order-profile-image"
          />
          <div className="navbar-data-item  ml-auto pt-1">   
              {!isLogin &&  <p className='favourite-para mr-2' onClick={()=>this.setState((prevState)=>({toggleLoginBox:!prevState.toggleLoginBox}))}>Favourite <BsHeart size={20}/></p>}
              {isLogin && (<p className='favourite-para mr-2' onClick={this.toggleFavourite}>Favourite {isFavourite ? (<BsHeartFill size={20} className='fill-heart'/>):(<BsHeart size={20}/>)}</p>)}
              {!isLogin && <p className='favourite-para' onClick={()=>this.setState((prevState)=>({toggleLoginBox:!prevState.toggleLoginBox}))}>Login / Sign Up <BsPersonCircle size={20}/></p>}
              {isLogin && <p className='favourite-para' data-toggle="modal" data-target="#profileModel">{emailInput} <BsPersonCircle size={20}/></p>}
              {isLogin && <p className='favourite-para ml-2' onClick={()=>this.setState((prevState)=>({toggleLogoutAlertCart:!prevState.toggleLogoutAlertCart}))} 
              >Logout <AiOutlineLogout  size={20}/></p>}
          </div>
          <div className='small-devices-navbaritems ml-auto pt-1'>
            {!isLogin &&  <p className='favourite-para mr-2' onClick={()=>this.setState((prevState)=>({toggleLoginBox:!prevState.toggleLoginBox}))}><BsHeart size={20}/></p>}
           {isLogin && (<p className='favourite-para mr-2' onClick={this.toggleFavourite}>{isFavourite ? (<BsHeartFill size={20} className='fill-heart'/>):(<BsHeart size={20}/>)}</p>)}
            {!isLogin&& <p className='favourite-para' onClick={()=>this.setState((prevState)=>({toggleLoginBox:!prevState.toggleLoginBox}))}><BsPersonCircle size={20}/></p>}
            {isLogin && <p className='favourite-para' data-toggle="modal" data-target="#profileModel"><BsPersonCircle size={20}/></p>}
            {isLogin&& <p className='favourite-para ml-2' onClick={()=>this.setState((prevState)=>({toggleLogoutAlertCart:!prevState.toggleLogoutAlertCart}))} 
            ><AiOutlineLogout size={20}/></p>}
          </div>
        </div>
       
       <div className='tabs-bg-small-devices-container'>
        <div className='tabs-small-devices-container'>
          {tabsList.map((item)=>{
            const className=(item.tabId===activeTab)?'active-small-tab-item':'noraml-small-tab-item'
             return(
              <div className={className} key={item.tabId} onClick={()=>this.changeTab(item.tabId)}>
            <a  href={item.hrefId} className='tab-anchor-element'><button className='tab-small-button'>{item.display}</button></a>
            </div>
             )
          }
          )}
        </div>
       </div>
      </div>
    
    {isServiceChoosed && 
      (<div className='cart-flow-bg-container lg:hidden p-2' onClick={()=>this.setState((prevState)=>({showCartModel:!prevState.showCartModel}))}>
          <div className='cart-flow-container'>
              <div className='items-data-container'>${total.toFixed(2)} | {finalOrderedProducts.length} <span className='items-count-in-cart'>Items</span></div>
              <div className='cart-flow-view'>View Cart</div>
          </div>
      </div>
      )
    }
    
    {
      !isServiceChoosed && (
        <div className='cart-flow-bg-container lg:hidden p-2' onClick={()=>this.setState({showServiceModel:true})}>
          <div className='cart-flow-container'>
            <BiSolidShoppingBag  size={25} className='order-online-bag'/>
            <div className='cart-flow-order-online'>Order Online</div>
          </div>
      </div>
      )
    }

    
   

      {showCartModel && (
        <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button' onClick={()=>this.setState({showCartModel :false})}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
                <div className='cart-data-flow-container'>
                  <div className='orders-flow-cart'>
                   <div className='cart-flow-state-container'>
                    <HiMiniShoppingBag size={20} className='cart-bag-icon'/>
                    <p className='cart-state-para'>{finalOrderedProducts.length ===0? 'Cart Empty' : 'Your Cart'}</p>
                   </div>
                   {finalOrderedProducts.length===0 && (
                  <p className='cart-empty-para'>Your cart is currently empty. Go ahead and add some items to it</p>
                  )}
                  {
                   finalOrderedProducts.length>0 && (
                  <div className='orders-table-container'>
                    <div className='headings-row-container'>
                     <div className='qty-item-heading-container'>
                      <h1 className='row-heading'>Qty</h1>
                      <h1 className='row-heading-item'>Item</h1>
                     </div>
                     <h1 className='row-heading'>Price</h1>     
                    </div>
                    {finalOrderedProducts.map((product)=>{
                      if(product.itemCategory === 'Pastas' || product.itemCategory === "BEN & JEERY'S ICE CREAM" ){
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>
                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {singleItemData}=this.state
                                    const data={...product,type:product.id}
                                    this.setState({singleItemData:data,toggleSingleItemModel:true})
                                  }}
                                  
                                  >Edit</button>
                                  <button className='edit-product-button' onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}>Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory=== 'Drinks' ){
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>
                                <p className='product-instructions-para'>{product.itemDescription}</p>
                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button'
                                  onClick={()=>{
                                    const {singleItemData}=this.state
                                    const data={...product,type:product.id}
                                    
                                    this.setState({singleItemData:data,toggleSingleItemModel:true})
                                  }}
                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory==="Favorite Sides" || product.itemCategory==="Classic Sides" || product.itemCategory==="Standard Sides"){
                        let sauseCount=0 
                        for (let i of product.swirlsSauces){
                          if(i.isSelected){
                            sauseCount+=1
                          }
                        }
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>
                                {sauseCount >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {sauseCount >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}
                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {sidesItemsData}=this.state
                                    const data={...product,type:product.id}
                                    
                                    this.setState({sidesItemsData:data,toggleDishesSauseModel:true})
                                  }}
                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory==="Seafood" || product.itemCategory==="Meat" || product.itemCategory==="Chicken" || product.itemCategory==="Vegetarian" || product.itemCategory==="ClassicRange"){
                        let sauseCount=0 
                        let toggpingsCount=0
                        let ingredientsCount=0
                        for (let i of product.swirlsSauces){
                          if(i.isSelected){
                            sauseCount+=1
                          }
                        }
                        for (let i of product.extraToppingsList){
                          if(i.isSelected){
                            toggpingsCount+=1
                          }
                        }
                        for (let i of product.ingredientsList){
                          if(!i.isSelected){
                            ingredientsCount+=1
                          }
                        }
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>
                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                {toggpingsCount >0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {toggpingsCount >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}
                                {sauseCount >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {sauseCount >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}
                                {ingredientsCount >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {ingredientsCount >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.ingredientsList.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}

                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {nonVegItemData}=this.state
                                    const data={...product,type:product.id}
                                    
                                    this.setState({nonVegItemData:data,toggleNonVegModel:true})
                                  }}
                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory==='Specials' && product.itemName==='Just Sides'){
                        
                        let s1sc=0
                        let s2sc=0 
                        for (let i of product.side1.swirlsSauces){
                          if(i.isSelected){
                            s1sc+=1
                          }
                        }

                        for (let i of product.side2.swirlsSauces){
                          if(i.isSelected){
                            s2sc+=1
                          }
                        }
          
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>
                               
                                <h1 className='side-sauses-heading'>{product.side1.dishSelected.name}</h1>
                                {(s1sc>0 && product.side1.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                {(s1sc>0 && product.side1.dishSelected.isSauseThere)  && (
                                  <ul className='sauses-ul-container'>
                                  {product.side1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.side2.dishSelected.name}</h1>
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (
                                  <ul className='sauses-ul-container'>
                                  {product.side2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}
                                
                           
                              

                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}

                                  <button className='edit-product-button' 
                                  onClick={()=>{
         
                                    const data={...product,type:product.id,toggleJustSidesModel:true}
                                    
                                    this.setState({justSidesSpecialData:data})
                                  }}
                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory==='Specials' && product.itemName==='Classic Trio'){
                        const {trio1,trio2,trio3}=product
                        let t1Sauces=0
                        let t1Toppings=0
                       let t1baseOption=0
                       let t1IngredientsC=0

                       let t2Sauces=0
                       let t2Toppings=0
                       let t2baseOption=0
                       let t2IngredientsC=0

                      let t3Sauces=0
                      let t3Toppings=0
                      let t3baseOption=0
                      let t3IngredientsC=0

                      for(let i of trio1.dishSelected.ingredients){
                        if(!i.isSelected){
                          t1IngredientsC+=1
                         }
                        }
                        for(let i of trio2.dishSelected.ingredients){
                        if(!i.isSelected){
                          t2IngredientsC+=1
                         }
                        }
                        for(let i of trio3.dishSelected.ingredients){
                        if(!i.isSelected){
                          t3IngredientsC+=1
                         }
                        }
    
                      for(let i of trio1.extraToppingsList){
                        if(i.isSelected){
                          t1Toppings+=1
                         }
                        }
                       for(let i of trio1.swirlsSauces){
                          if(i.isSelected){
                           t1Sauces+=1
                           }
                       }
                       for(let i of trio1.baseOptionsList){
                        if(i.isSelected){
                        t1baseOption+=1
                         }
                         }

                       for(let i of trio2.extraToppingsList){
                         if(i.isSelected){
                           t2Toppings+=1
                           }
                         }
                        for(let i of trio2.swirlsSauces){
                            if(i.isSelected){
                             t2Sauces+=1
                           }
                        }
                        for(let i of trio2.baseOptionsList){
                         if(i.isSelected){
                          t2baseOption+=1
                             }
                          }

                        for(let i of trio3.extraToppingsList){
                           if(i.isSelected){
                            t3Toppings+=1
                           }
                           }
                            for(let i of trio3.swirlsSauces){
                          if(i.isSelected){
                              t3Sauces+=1
                                 }
                             }
                           for(let i of trio3.baseOptionsList){
                         if(i.isSelected){
                            t3baseOption+=1
                         }
                           }
      
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>

                                <h1 className='side-sauses-heading'>{product.trio1.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio1.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t1Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t1Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t1Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t1IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.trio2.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio2.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t2Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t2Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t2Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t2IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}


                                <h1 className='side-sauses-heading'>{product.trio3.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio3.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t3Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t3Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio3.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t3Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t3Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio3.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t3IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t3IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio3.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}


                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {classicTrioData}=this.state
                                    const data={...product,type:product.id,toggleClassicTrioModel:true}
                                    
                                    this.setState({classicTrioData:data})
                                  }}

                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory==='Specials' && product.itemName==='Signature Trio'){
                        const {trio1,trio2,trio3}=product
                        let t1Sauces=0
                        let t1Toppings=0
                       let t1baseOption=0
                       let t1IngredientsC=0

                       let t2Sauces=0
                       let t2Toppings=0
                       let t2baseOption=0
                       let t2IngredientsC=0

                      let t3Sauces=0
                      let t3Toppings=0
                      let t3baseOption=0
                      let t3IngredientsC=0

                      for(let i of trio1.dishSelected.ingredients){
                        if(!i.isSelected){
                          t1IngredientsC+=1
                         }
                        }
                        for(let i of trio2.dishSelected.ingredients){
                        if(!i.isSelected){
                          t2IngredientsC+=1
                         }
                        }
                        for(let i of trio3.dishSelected.ingredients){
                        if(!i.isSelected){
                          t3IngredientsC+=1
                         }
                        }
    
                      for(let i of trio1.extraToppingsList){
                        if(i.isSelected){
                          t1Toppings+=1
                         }
                        }
                       for(let i of trio1.swirlsSauces){
                          if(i.isSelected){
                           t1Sauces+=1
                           }
                       }
                       for(let i of trio1.baseOptionsList){
                        if(i.isSelected){
                        t1baseOption+=1
                         }
                         }

                       for(let i of trio2.extraToppingsList){
                         if(i.isSelected){
                           t2Toppings+=1
                           }
                         }
                        for(let i of trio2.swirlsSauces){
                            if(i.isSelected){
                             t2Sauces+=1
                           }
                        }
                        for(let i of trio2.baseOptionsList){
                         if(i.isSelected){
                          t2baseOption+=1
                             }
                          }

                        for(let i of trio3.extraToppingsList){
                           if(i.isSelected){
                            t3Toppings+=1
                           }
                           }
                            for(let i of trio3.swirlsSauces){
                          if(i.isSelected){
                              t3Sauces+=1
                                 }
                             }
                           for(let i of trio3.baseOptionsList){
                         if(i.isSelected){
                            t3baseOption+=1
                         }
                           }
      
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>

                                <h1 className='side-sauses-heading'>{product.trio1.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio1.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t1Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t1Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t1Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t1IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.trio2.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio2.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t2Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t2Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t2Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t2IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}


                                <h1 className='side-sauses-heading'>{product.trio3.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio3.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t3Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t3Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio3.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t3Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t3Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio3.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t3IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t3IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio3.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}


                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {classicTrioData}=this.state
                                    const data={...product,type:product.id,toggleClassicTrioModel:true}
                                    
                                    this.setState({classicTrioData:data})
                                  }}

                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory==='Specials' && product.itemName==='Twin Meal'){
                        const {trio1,trio2}=product
                        let t1Sauces=0
                        let t1Toppings=0
                       let t1baseOption=0
                       let t1IngredientsC=0

                       let t2Sauces=0
                       let t2Toppings=0
                       let t2baseOption=0
                       let t2IngredientsC=0
                       let s1sc=0
                        let s2sc=0 
                        for (let i of product.side1.swirlsSauces){
                          if(i.isSelected){
                            s1sc+=1
                          }
                        }

                        for (let i of product.side2.swirlsSauces){
                          if(i.isSelected){
                            s2sc+=1
                          }
                        }


                      for(let i of trio1.dishSelected.ingredients){
                        if(!i.isSelected){
                          t1IngredientsC+=1
                         }
                        }
                        for(let i of trio2.dishSelected.ingredients){
                        if(!i.isSelected){
                          t2IngredientsC+=1
                         }
                        }
                      
    
                      for(let i of trio1.extraToppingsList){
                        if(i.isSelected){
                          t1Toppings+=1
                         }
                        }
                       for(let i of trio1.swirlsSauces){
                          if(i.isSelected){
                           t1Sauces+=1
                           }
                       }
                       for(let i of trio1.baseOptionsList){
                        if(i.isSelected){
                        t1baseOption+=1
                         }
                         }

                       for(let i of trio2.extraToppingsList){
                         if(i.isSelected){
                           t2Toppings+=1
                           }
                         }
                        for(let i of trio2.swirlsSauces){
                            if(i.isSelected){
                             t2Sauces+=1
                           }
                        }
                        for(let i of trio2.baseOptionsList){
                         if(i.isSelected){
                          t2baseOption+=1
                             }
                          }

                     
      
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>

                                <h1 className='side-sauses-heading'>{product.trio1.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio1.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t1Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t1Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t1Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t1IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.trio2.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio2.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t2Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t2Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t2Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t2IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}
                                 
                                <h1 className='side-sauses-heading'>{product.side1.dishSelected.name}</h1>
                                { (s1sc>0 && product.side1.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                { (s1sc>0 && product.side1.dishSelected.isSauseThere) && (
                                  <ul className='sauses-ul-container'>
                                  {product.side1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.side2.dishSelected.name}</h1>
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (
                                  <ul className='sauses-ul-container'>
                                  {product.side2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}
                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}

                                  <button className='edit-product-button' 
                                  onClick={()=>{
         
                                    const data={...product,type:product.id,toggleJustSidesModel:true}
                                    
                                    this.setState({justSidesSpecialData:data})
                                  }}
                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              
                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    
                                    const data={...product,type:product.id,toggleTwinMeanModel:true}
                                    
                                    this.setState({twinMealData:data})
                                  }}

                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory==='Specials' && product.itemName==='Single Meal'){
                        const {trio1,trio2}=product
                        let t1Sauces=0
                        let t1Toppings=0
                       let t1baseOption=0
                       let t1IngredientsC=0

                       let s1sc=0
                        let s2sc=0 
                        for (let i of product.side1.swirlsSauces){
                          if(i.isSelected){
                            s1sc+=1
                          }
                        }

                        for (let i of product.side2.swirlsSauces){
                          if(i.isSelected){
                            s2sc+=1
                          }
                        }


                      for(let i of trio1.dishSelected.ingredients){
                        if(!i.isSelected){
                          t1IngredientsC+=1
                         }
                        }
                     
                      
    
                      for(let i of trio1.extraToppingsList){
                        if(i.isSelected){
                          t1Toppings+=1
                         }
                        }
                       for(let i of trio1.swirlsSauces){
                          if(i.isSelected){
                           t1Sauces+=1
                           }
                       }
                       for(let i of trio1.baseOptionsList){
                        if(i.isSelected){
                        t1baseOption+=1
                         }
                         }

                     

                     
      
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>

                                <h1 className='side-sauses-heading'>{product.trio1.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio1.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t1Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t1Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t1Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t1IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}


                                 
                                <h1 className='side-sauses-heading'>{product.side1.dishSelected.name}</h1>
                                { (s1sc>0 && product.side1.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                { (s1sc>0 && product.side1.dishSelected.isSauseThere) && (
                                  <ul className='sauses-ul-container'>
                                  {product.side1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.side2.dishSelected.name}</h1>
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (
                                  <ul className='sauses-ul-container'>
                                  {product.side2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}

                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    
                                    const data={...product,type:product.id,toggleSingleMealModel:true}
                                    
                                    this.setState({singleMealData:data})
                                  }
                                }
                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                            
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory==='Specials' && product.itemName==='Mixed Meal'){
                        const {trio1,trio2}=product
                        let t1Sauces=0
                        let t1Toppings=0
                       let t1baseOption=0
                       let t1IngredientsC=0

                       let t2Sauces=0
                       let t2Toppings=0
                       let t2baseOption=0
                       let t2IngredientsC=0
                       let s1sc=0
                        let s2sc=0 
                        for (let i of product.side1.swirlsSauces){
                          if(i.isSelected){
                            s1sc+=1
                          }
                        }

                        for (let i of product.side2.swirlsSauces){
                          if(i.isSelected){
                            s2sc+=1
                          }
                        }


                      for(let i of trio1.dishSelected.ingredients){
                        if(!i.isSelected){
                          t1IngredientsC+=1
                         }
                        }
                        for(let i of trio2.dishSelected.ingredients){
                        if(!i.isSelected){
                          t2IngredientsC+=1
                         }
                        }
                      
    
                      for(let i of trio1.extraToppingsList){
                        if(i.isSelected){
                          t1Toppings+=1
                         }
                        }
                       for(let i of trio1.swirlsSauces){
                          if(i.isSelected){
                           t1Sauces+=1
                           }
                       }
                       for(let i of trio1.baseOptionsList){
                        if(i.isSelected){
                        t1baseOption+=1
                         }
                         }

                       for(let i of trio2.extraToppingsList){
                         if(i.isSelected){
                           t2Toppings+=1
                           }
                         }
                        for(let i of trio2.swirlsSauces){
                            if(i.isSelected){
                             t2Sauces+=1
                           }
                        }
                        for(let i of trio2.baseOptionsList){
                         if(i.isSelected){
                          t2baseOption+=1
                             }
                          }

                     
      
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>

                                <h1 className='side-sauses-heading'>{product.trio1.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio1.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t1Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t1Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t1Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t1IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.trio2.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio2.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t2Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t2Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t2Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t2IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}
                                 
                                <h1 className='side-sauses-heading'>{product.side1.dishSelected.name}</h1>
                                { (s1sc>0 && product.side1.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                { (s1sc>0 && product.side1.dishSelected.isSauseThere) && (
                                  <ul className='sauses-ul-container'>
                                  {product.side1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.side2.dishSelected.name}</h1>
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (
                                  <ul className='sauses-ul-container'>
                                  {product.side2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}
                                
                              
                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    
                                    const data={...product,type:product.id,toggleMixedMeanModel:true}
                                    
                                    this.setState({mixedMealData:data})
                                  }}

                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                    })}
                  </div>
                  )
                  }

                  {finalOrderedProducts.length>0 &&  (
                  
                  <div className='charges-container'>
                    <div className='charge-type-amount-container'>
                      <p className='charge-type-para'>Cart</p>
                      <p className='charge-amount'>{cartAmount.toFixed(2)}</p>
                    </div>
                    <div className='charge-type-amount-container'>
                      <p className='charge-type-para'>Credit / Debit Card Fee</p>
                      <p className='charge-amount'>{debitCartChargers.toFixed(2)}</p>
                    </div>
                    <div className='charge-type-amount-container'>
                      <p className='charge-type-para'>GST (15%) inc. in price</p>
                      <p className='charge-amount'>{gst.toFixed(2)}</p>
                    </div>
                    <div className='charge-type-amount-container'>
                      <p className='total-amount-para'>Total</p>
                      <p className='total-amount'>{total.toFixed(2)}</p>
                    </div>
                    <button className='check-out-button' onClick={()=>this.setState({showPlaceOrderModel:true})}>Proceed To Checkout</button>
                    
                  </div>
        )}

             <div className='change-service-container' onClick={()=>this.setState({showServiceModel:true})}>
                  <button className='change-service-button'><BiSolidChevronLeftCircle size={15} className='change-service-icon'/></button>
                  <p className='change-service-para'>Change order details</p>
             </div>




                </div>
                </div>
            </div>
        </div>
      )}

      {toggleLogoutAlertCart && (
        <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button' onClick={()=>this.setState((prevState)=>({toggleLogoutAlertCart:!prevState.toggleLogoutAlertCart}))}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
              <div className='logout-alerts-bg-container'>
                <div className='logout-warining-container'>
                  <h1 className='warning-para'>Warining</h1>
                  <h1 className='logout-text-para'>Logout</h1>
                </div>
                <p className='logging-out-para'>Logging out will remove any items that have benn added to your cart</p>
                <div className='cancel-procced-buttons-container'>
                  <button type='button' className='cancel-button'
                  onClick={()=>this.setState((prevState)=>({toggleLogoutAlertCart:!prevState.toggleLogoutAlertCart}))} 
                  >Cancel</button>
                  <button type='button' 
                  onClick={()=>{
                    const config={
                      className:"pop-messages",
                      content:"Logout Successfully"
                       }
                      setTimeout(()=>{
                      message.success(config)
                     },2000);
                    this.setState((prevState)=>({isLogin:!prevState.isLogin,finalOrderedProducts:[],toggleLogoutAlertCart:!prevState.toggleLogoutAlertCart,emailInput:''}))
                  }}
                  className='proceed-to-logout-button'
                  >Proceed</button>
                </div>
              </div>
          </div>
        </div>
      )}


    
        
        <div class="modal fade" id="favouriteModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="view-close-cancel-button">
                <span aria-hidden="true">&times;</span>
                </button>
              </div>
            <div class="modal-body">
            <div className='login-sign-types'>
                      <div className='icon-profile-container'>
                        <BsFillPersonFill  size={30}/>
                      </div>
                      <h1 className='login-sign-hedaing'>Login / Signup</h1>
                      <p className='save-details-para'>Save your orders & details</p>
                      <input  className='email-input' type='email' placeholder='Your E-Mail' value={emailInput}
                        onChange={this.getEmail}
                      />
                      <button type='button' className='continue-button' onClick={this.Login}  >Continue</button>
                      <button className='facebook-container'>
                        <BsFacebook size={20} className='sign-facebook-icon'/>
                        Login With Facebook
                      </button>
                      <p className='accepting-para'>By proceeding, you are accepting our</p>
                      <p className='terms-conditions-para' data-toggle="modal" data-target="#showTermsConditionsModel" >
                         terms & conditions
                      </p>
                  </div>
            </div>              
          </div>
        </div>
      </div>

      <div class="modal fade" id="profileModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="view-close-cancel-button">
                <span aria-hidden="true">&times;</span>
                </button>
              </div>
            <div class="modal-body">
              <div className='profile-model-container'>
                <div className='icon-profile-container'>
                  <BsFillPersonFill  size={30}/>
                </div>
                <p className='profile-email'>{emailInput}</p>
                <div className='history-icon-container'>
                  <p className='our-history-para'>Order History</p>
                  <button className='down-arrow-icon-button'><BsChevronDown  size={20}/></button>
                </div>
              </div>
            </div>              
          </div>
        </div>
      </div>

      {toggleLoginBox && (
        <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button' onClick={()=>this.setState((prevState)=>({toggleLoginBox:!prevState.toggleLoginBox}))}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
                <div className='login-sign-types'>
                      <div className='icon-profile-container'>
                        <BsFillPersonFill  size={30}/>
                      </div>
                      <h1 className='login-sign-hedaing'>Login / Signup</h1>
                      <p className='save-details-para'>Save your orders & details</p>
                      <input  className='email-input' type='email' placeholder='Your E-Mail' value={emailInput}
                        onChange={this.getEmail}
                      />
                     
                      {showWrongMailError && <p className='error-otp-para'>Please Enter E-mail Correctly</p>}
                      {buttonLoader === apiStatusConstants.initial ? <button type='button' className='continue-button' onClick={this.Login}>Continue</button> :
                      <button type='button' className='continue-button'> <ClipLoader aria-label="Loading Spinner" onClick={this.Login}
        data-testid="loader" color="#ffffff" size={25}/> </button>
                      }
                      <button className='facebook-container'>
                        <BsFacebook size={20} className='sign-facebook-icon'/>
                        Login With Facebook
                      </button>
                      <p className='accepting-para'>By proceeding, you are accepting our</p>
                      <p className='terms-conditions-para' onClick={()=>this.setState((prevState)=>({showTermaAndConditionsModel:!prevState.showTermaAndConditionsModel}))}>
                         terms & conditions
                      </p>
                  </div>
            </div>
        </div>
      )}


      {toggleOtpVerificationBox && (
        <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button' onClick={()=>this.setState((prevState)=>({toggleOtpVerificationBox:!prevState.toggleOtpVerificationBox}))}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
                <div className='login-sign-types'>
                    <div className='icon-profile-container'>
                        <BsFillPersonFill  size={30}/>
                    </div>
                    <h1 className='login-sign-hedaing'>Login / Signup</h1>
                    <input  className='email-input' type='text' onChange={(e)=>this.setState({otpNumber:e.target.value})} placeholder='Login OTP'/>
                    <p className='save-details-para'>Check your e-mail ({emailInput}) for your 6 digit OTP.<span className='terms-conditions-para'
                    onClick={()=>this.setState((prevState)=>({showWrongMailError:false,buttonLoader:apiStatusConstants.initial,toggleOtpVerificationBox:!prevState.toggleOtpVerificationBox,toggleLoginBox:!prevState.toggleLoginBox,emailInput:''}))}
                     > Start over</span></p>
                     {showInvalidOtpError && <p className='error-otp-para'>Invalid OTP code</p>}
                    <button type='button' className='continue-button' onClick={this.verifyEmail}>Complete Login</button>
                    <p className='accepting-para'>By proceeding, you are accepting our</p>
                    <p className='terms-conditions-para' onClick={()=>this.setState((prevState)=>({showTermaAndConditionsModel:!prevState.showTermaAndConditionsModel}))} >
                         terms & conditions
                    </p>
                </div>
            </div>
        </div>
      )}


      
      {justSidesSpecialData.toggleJustSidesModel && (
        <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button' onClick={()=>this.setState((prevState)=>({justSidesSpecialData:initialJustSidesSpecialData}))}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
                <div>
                  <div className='item-model-container-div'>
                    <div className='item-price-description-container'>
                      <div>
                        <h1 className='item-model-heading'>{justSidesSpecialData.itemName}</h1>
                        <p className="item-model-category">{justSidesSpecialData.itemCategory}</p>  
                      </div>
                      <p className='item-model-price'>${justSidesSpecialData.itemPrice.toFixed(2)}</p>
                    </div>    
                    <p className='item-non-model-description'>{justSidesSpecialData.itemDescription}</p> 
                  </div>

                 { (justSidesSpecialData.showErrorForEmptySide1 && !justSidesSpecialData.side1.isDisheSelected) ? ( <div className='select-sauces-container-active' onClick={()=>{
                      const {justSidesSpecialData}=this.state 
                      const data ={
                        ...justSidesSpecialData,showDishPopupForSide1:true
                      }
                     
                      this.setState({justSidesSpecialData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Side #1</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    justSidesSpecialData.side1.isDisheSelected ? (
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {justSidesSpecialData}=this.state 
                      const data ={
                        ...justSidesSpecialData,showDishPopupForSide1:true
                      }
                     
                      this.setState({justSidesSpecialData:data})
                    }}>

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{justSidesSpecialData.side1.dishSelected.name}</h1>
                      <p className='select-up-to-para'>Side #1</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {justSidesSpecialData}=this.state 
                      const data ={
                        ...justSidesSpecialData,showDishPopupForSide1:true
                      }
                     
                      this.setState({justSidesSpecialData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Side #1</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}



                  {justSidesSpecialData.side1.dishSelected.isSauseThere && (
                    <div className='select-sauces-container'>
                    {justSidesSpecialData.showErrorForSoucesSide1&& (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                    {!justSidesSpecialData.showErrorForSoucesSide1 && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                   {justSidesSpecialData.showSoucesForSide1 ? (<button className='select-up-to-button-container' 
                    onClick={()=>this.setState((prevState)=>({justSidesSpecialData:{...prevState.justSidesSpecialData,showSoucesForSide1:!justSidesSpecialData.showSoucesForSide1}}))}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>this.setState((prevState)=>({justSidesSpecialData:{...prevState.justSidesSpecialData,showSoucesForSide1:!justSidesSpecialData.showSoucesForSide1}}))}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                </div>  
                  )}

                  
                  {(justSidesSpecialData.showSoucesForSide1 && justSidesSpecialData.side1.dishSelected.isSauseThere) && (
                 <ul className='sauces-swirls-items-bg-container'>
                {justSidesSpecialData.side1.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list' 
                     onClick={()=>{
                      const {justSidesSpecialData}=this.state 
                      const {side1,itemPrice}=justSidesSpecialData 
                      const duplicates=side1.swirlsSauces.map((thing)=>{
                             if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                                console.log({...thing, isSelected:!thing.isSelected})
                              }
                              return thing 
                         })

                         
                         let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }    

                          const side1Data={...side1,swirlsSauces:duplicates}
                         
                          const finalData={side1:side1Data,itemPrice:IP,...justSidesSpecialData}
                          
                          this.setState((prevState)=>({justSidesSpecialData:{...prevState.justSidesSpecialData,side1:side1Data,itemPrice:IP}}))
                         
                     }}
                    >
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  
                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   


 

                  
                 { (justSidesSpecialData.showErrorForEmptySide2 && !justSidesSpecialData.side2.isDisheSelected) ? ( <div className='select-sauces-container-active' onClick={()=>{
                      const {justSidesSpecialData}=this.state 
                      const data ={
                        ...justSidesSpecialData,showDishPopupForSide2:true
                      }
                     
                      this.setState({justSidesSpecialData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Side #2</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    justSidesSpecialData.side2.isDisheSelected ? (
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {justSidesSpecialData}=this.state 
                      const data ={
                        ...justSidesSpecialData,showDishPopupForSide2:true
                      }
                     
                      this.setState({justSidesSpecialData:data})
                    }}>

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{justSidesSpecialData.side2.dishSelected.name}</h1>
                      <p className='select-up-to-para'>Side #2</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {justSidesSpecialData}=this.state 
                      const data ={
                        ...justSidesSpecialData,showDishPopupForSide2:true
                      }
                     
                      this.setState({justSidesSpecialData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Side #2</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}

                  {justSidesSpecialData.side2.dishSelected.isSauseThere && (
                    <div className='select-sauces-container'>
                    {justSidesSpecialData.showErrorForSoucesSide2&& (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                    {!justSidesSpecialData.showErrorForSoucesSide2 && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                   {justSidesSpecialData.showSoucesForSide2 ? (<button className='select-up-to-button-container' 
                    onClick={()=>this.setState((prevState)=>({justSidesSpecialData:{...prevState.justSidesSpecialData,showSoucesForSide2:!justSidesSpecialData.showSoucesForSide2}}))}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>this.setState((prevState)=>({justSidesSpecialData:{...prevState.justSidesSpecialData,showSoucesForSide2:!justSidesSpecialData.showSoucesForSide2}}))}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                </div>  
                  )}

                  
                  {(justSidesSpecialData.showSoucesForSide2 && justSidesSpecialData.side2.dishSelected.isSauseThere)&& (
                 <ul className='sauces-swirls-items-bg-container'>
                {justSidesSpecialData.side2.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list' 
                     onClick={()=>{
                      const {justSidesSpecialData}=this.state 
                      const {side2,itemPrice}=justSidesSpecialData 
                      const duplicates=side2.swirlsSauces.map((thing)=>{
                             if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                                console.log({...thing, isSelected:!thing.isSelected})
                              }
                              return thing 
                         })

                         
                         let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }    

                          const side1Data={...side2,swirlsSauces:duplicates}
                         
                         
                          this.setState((prevState)=>({justSidesSpecialData:{...prevState.justSidesSpecialData,side2:side1Data,itemPrice:IP}}))
                         
                     }}
                    >
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  
                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   

            

            <div className='instructions-icon-container'>
              <AiFillFile size={20} className='model-file-icon'/>
              <input placeholder='Special instructions...' type='text' className='special-instructions-input'
              onChange={e=> this.setState((prevState)=>({justSidesSpecialData:{...prevState.justSidesSpecialData,secialInstructions:e.target.value}}))
              } value={justSidesSpecialData.secialInstructions}
              />
            </div>


            {justSidesSpecialData.showError && (
              <div className='error-model-container'>
                <BiErrorCircle size={20} className='model-error-icon'/>
                <p className='model-error-msg'>Please correct any options marked in red</p>
              </div>
            )}





            <div className='model-count-add-to-card-container'>
              <div className='increase-descrese-count-container'>
                <button className='increse-descrease-icon' 
                onClick={()=>{
                  const {justSidesSpecialData}=this.state 
             
                  let i = justSidesSpecialData.itemsCount
                  let iPrice=justSidesSpecialData.itemPrice
                  if(justSidesSpecialData.itemsCount >1 ){
                      i-=1
                      iPrice =justSidesSpecialData.itemPrice-justSidesSpecialData.actualPrice
                  }
                 
                  
                  this.setState((prevState)=>({ justSidesSpecialData:{...prevState.justSidesSpecialData, itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiMinus size={20}/></button>
                <button className='increse-descrease-icon'>{justSidesSpecialData.itemsCount}</button>
                <button className='increse-descrease-icon'
                onClick={()=>{
                  const { justSidesSpecialData}=this.state 
                  let i=1;
                  i+= justSidesSpecialData.itemsCount
                  const iPrice = justSidesSpecialData.actualPrice+ justSidesSpecialData.itemPrice
                  this.setState((prevState)=>({ justSidesSpecialData:{...prevState.justSidesSpecialData, itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiPlus size={20}/></button>
              </div>  
             
              {justSidesSpecialData.type==='add' ? (<buttton className='add-to-card-model-button'  onClick={this.addJustSidesToFinal}>Add To Cart</buttton>):(
                <buttton className='add-to-card-model-button' onClick={this.updateItemOfJustSidesInFinals}>Upadte Item</buttton>
              ) }
            </div>




            </div>
              </div>
        </div>
      )}
        
        {justSidesSpecialData.showDishPopupForSide1 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='dish_pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {justSidesSpecialData}=this.state 
                      const data ={
                        ...justSidesSpecialData,showDishPopupForSide1:false
                      }
                      
                      this.setState({justSidesSpecialData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {justSidesSpecialData.dishes.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {justSidesSpecialData}=this.state 
                       

                        let data={}
                        if(dish.isSauseThere){
                          data={
                           ...justSidesSpecialData.side1,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide1:true
                        }
                        }
                        else{
                           data={
                           ...justSidesSpecialData.side1,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide1:false
                        }

                        }
                        const finalData={
                          ...justSidesSpecialData,side1:data,showDishPopupForSide1:false
                        }
                        console.log( finalData)
                        this.setState({justSidesSpecialData:finalData})
                      }}
                      >{dish.name}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {justSidesSpecialData.showDishPopupForSide2 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='dish_pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {justSidesSpecialData}=this.state 
                      const data ={
                        ...justSidesSpecialData,showDishPopupForSide2:false
                      }
                      
                      this.setState({justSidesSpecialData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {justSidesSpecialData.dishes.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {justSidesSpecialData}=this.state 
                        let data={}
                        if(dish.isSauseThere){
                          data={
                           ...justSidesSpecialData.side2,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide2:true
                        }
                        }
                        else{
                           data={
                           ...justSidesSpecialData.side2,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide2:false
                        }
                        }
                        

                        const finalData={
                          ...justSidesSpecialData,side2:data,showDishPopupForSide2:false
                        }
                       
                        this.setState({justSidesSpecialData:finalData})
                      }}
                      >{dish.name}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

      
        {classicTrioData.toggleClassicTrioModel && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button' onClick={()=>this.setState((prevState)=>({classicTrioData:initialClassicTrioData}))}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
                <div>
                  <div className='item-model-container-div'>
                    <div className='item-price-description-container'>
                      <div>
                        <h1 className='item-model-heading'>{classicTrioData.itemName}</h1>
                        <p className="item-model-category">{classicTrioData.itemCategory}</p>  
                      </div>
                      <p className='item-model-price'>${classicTrioData.itemPrice.toFixed(2)}</p>
                    </div>    
                    <p className='item-non-model-description'>{classicTrioData.itemDescription}</p> 
                  </div>  


              
                


                   { classicTrioData.showErrorForEmtyTrio1 ? ( <div className='select-sauces-container-active' 
                  onClick={()=>{
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showPopupTrio1:true}}))
                    }}
                  >
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Classic Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    classicTrioData.trio1.isDisheSelected ? (
                      <div className='select-sauces-container-active'
                      onClick={()=>{
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showPopupTrio1:true}}))
                    }}
                      >

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{classicTrioData.trio1.dishSelected.item}</h1>
                      <p className='select-up-to-para'>Classic Range Pizza</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' 
                      onClick={()=>{
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showPopupTrio1:true}}))
                    }}
                      >
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Classic Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}



                  {classicTrioData.trio1.isDisheSelected && (
                  <div>

                    <div className='select-sauces-container'>
                    {classicTrioData.trio1.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Base Option</h1>
                      <p className='error-select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                    {!classicTrioData.trio1.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Base Option</h1>
                      <p className='select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                   {classicTrioData.trio1.showBaseOptions? (<button className='select-up-to-button-container' 
                   onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio1}=classicTrioData 
                      const trioData={...trio1,showBaseOptions:!trio1.showBaseOptions}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio1}=classicTrioData 
                      const trioData={...trio1,showBaseOptions:!trio1.showBaseOptions}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio1:trioData}}))
                   }}
                 className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {classicTrioData.trio1.showBaseOptions && (
                 <ul className='sauces-swirls-items-bg-container'>
                {classicTrioData.trio1.baseOptionsList.map((sause)=>{
                  
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {classicTrioData}=this.state 
                            const {trio1,itemPrice}=classicTrioData
                            let IP=itemPrice 
                            let duplicates=trio1.baseOptionsList.map((thing)=>{
                              if(thing.id===sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else if (thing.id===sause.id && thing.isSelected===false){
                                IP=IP+thing.price
                                return {...thing,isSelected:true}
                              }
                              else if(thing.id!==sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else {
                                return thing
                              }
                            })

                            const trioData={...trio1,baseOptionsList:duplicates}
                            this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio1:trioData,itemPrice:IP}}))
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  


                  <div className='select-sauces-container'>
                    {classicTrioData.trio1.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Toppings</h1>
                      <p className='error-select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                    {!classicTrioData.trio1.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Toppings</h1>
                      <p className='select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                   {classicTrioData.trio1.showExtraToppings? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio1}=classicTrioData 
                      const trioData={...trio1,showExtraToppings:!trio1.showExtraToppings}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                     onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio1}=classicTrioData 
                      const trioData={...trio1,showExtraToppings:!trio1.showExtraToppings}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio1:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {classicTrioData.trio1.showExtraToppings && (
                 <ul className='sauces-swirls-items-bg-container'>
                {classicTrioData.trio1.extraToppingsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                         
                          onClick={()=>{
                            const {classicTrioData}=this.state 
                            const {trio1,itemPrice}=classicTrioData
                            let duplicates = trio1.extraToppingsList.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio1,extraToppingsList:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio1:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  

                  <div className='select-sauces-container'>
                    {classicTrioData.trio1.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                    {!classicTrioData.trio1.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                   {classicTrioData.trio1.showSouces ? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio1}=classicTrioData 
                      const trioData={...trio1,showSouces:!trio1.showSouces}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                      onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio1}=classicTrioData 
                      const trioData={...trio1,showSouces:!trio1.showSouces}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio1:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div>   
                  {classicTrioData.trio1.showSouces && (
                 <ul className='sauces-swirls-items-bg-container'>
                {classicTrioData.trio1.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                   
                          onClick={()=>{
                            const {classicTrioData}=this.state 
                            const {trio1,itemPrice}=classicTrioData
                            let duplicates = trio1.swirlsSauces.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio1,swirlsSauces:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio1:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   
                {classicTrioData.trio1.dishSelected.ingredients.length>0 && (
                  <div className='select-sauces-container'>
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Ingredients</h1>
                      <p className='select-up-to-para'>Un-check to remove</p>
                     </div>
                    
                   {classicTrioData.trio1.showIngredients? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio1}=classicTrioData 
                      const trioData={...trio1,showIngredients:!trio1.showIngredients}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio1}=classicTrioData 
                      const trioData={...trio1,showIngredients:!trio1.showIngredients}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio1:trioData}}))
                   }}
                   className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 
                )}

                {classicTrioData.trio1.showIngredients && (
                 <ul className='sauces-swirls-items-bg-container'>
                {classicTrioData.trio1.dishSelected.ingredients.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.name}</p>
                      <div className='sause-price-switch-container'>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {classicTrioData}=this.state 
                            const {trio1}=classicTrioData
                            let duplicates = trio1.dishSelected.ingredients.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })    
                            const dish={...trio1.dishSelected,ingredients:duplicates}  
                            const trioData={...trio1, dishSelected:dish}    
                            this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio1:trioData}}))    
                          }}

                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}  
          </div>
           )}

           { (classicTrioData.showErrorForEmtyTrio2 && !classicTrioData.trio2.isDisheSelected) ? ( <div className='select-sauces-container-active' 
                  onClick={()=>{
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showPopupTrio2:true}}))
                    }}
                  >
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Classic Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    classicTrioData.trio2.isDisheSelected ? (
                      <div className='select-sauces-container-active'
                      onClick={()=>{
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showPopupTrio2:true}}))
                    }}
                      >

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{classicTrioData.trio2.dishSelected.item}</h1>
                      <p className='select-up-to-para'>Classic Range Pizza</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' 
                      onClick={()=>{
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showPopupTrio2:true}}))
                    }}
                      >
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Classic Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}



                  {classicTrioData.trio2.isDisheSelected && (
                  <div>

                    <div className='select-sauces-container'>
                    {classicTrioData.trio2.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Base Option</h1>
                      <p className='error-select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                    {!classicTrioData.trio2.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Base Option</h1>
                      <p className='select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                   {classicTrioData.trio2.showBaseOptions? (<button className='select-up-to-button-container' 
                   onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio2}=classicTrioData 
                      const trioData={...trio2,showBaseOptions:!trio2.showBaseOptions}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                   onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio2}=classicTrioData 
                      const trioData={...trio2,showBaseOptions:!trio2.showBaseOptions}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio2:trioData}}))
                   }}
                 className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {classicTrioData.trio2.showBaseOptions && (
                 <ul className='sauces-swirls-items-bg-container'>
                {classicTrioData.trio2.baseOptionsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {classicTrioData}=this.state 
                            const {trio2,itemPrice}=classicTrioData
                            let IP=itemPrice 
                            let duplicates=trio2.baseOptionsList.map((thing)=>{
                              if(thing.id===sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else if (thing.id===sause.id && thing.isSelected===false){
                                IP=IP+thing.price
                                return {...thing,isSelected:true}
                              }
                              else if(thing.id!==sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else {
                                return thing
                              }
                            })

                            const trioData={...trio2,baseOptionsList:duplicates}
                            this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio2:trioData,itemPrice:IP}}))
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  


                  <div className='select-sauces-container'>
                    {classicTrioData.trio2.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Toppings</h1>
                      <p className='error-select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                    {!classicTrioData.trio2.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Toppings</h1>
                      <p className='select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                   {classicTrioData.trio2.showExtraToppings? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio2}=classicTrioData 
                      const trioData={...trio2,showExtraToppings:!trio2.showExtraToppings}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                     onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio2}=classicTrioData 
                      const trioData={...trio2,showExtraToppings:!trio2.showExtraToppings}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio2:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {classicTrioData.trio2.showExtraToppings && (
                 <ul className='sauces-swirls-items-bg-container'>
                {classicTrioData.trio2.extraToppingsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                         
                          onClick={()=>{
                            const {classicTrioData}=this.state 
                            const {trio2,itemPrice}=classicTrioData
                            let duplicates = trio2.extraToppingsList.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio2,extraToppingsList:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio2:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  

                  <div className='select-sauces-container'>
                    {classicTrioData.trio2.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                    {!classicTrioData.trio2.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                   {classicTrioData.trio2.showSouces ? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio2}=classicTrioData 
                      const trioData={...trio2,showSouces:!trio2.showSouces}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                      onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio2}=classicTrioData 
                      const trioData={...trio2,showSouces:!trio2.showSouces}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio2:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div>   
                  {classicTrioData.trio2.showSouces && (
                 <ul className='sauces-swirls-items-bg-container'>
                {classicTrioData.trio2.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                   
                          onClick={()=>{
                            const {classicTrioData}=this.state 
                            const {trio2,itemPrice}=classicTrioData
                            let duplicates = trio2.swirlsSauces.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio2,swirlsSauces:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio2:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   
                {classicTrioData.trio2.dishSelected.ingredients.length>0 && (
                  <div className='select-sauces-container'>
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Ingredients</h1>
                      <p className='select-up-to-para'>Un-check to remove</p>
                     </div>
                    
                   {classicTrioData.trio2.showIngredients? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio2}=classicTrioData 
                      const trioData={...trio2,showIngredients:!trio2.showIngredients}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio2}=classicTrioData 
                      const trioData={...trio2,showIngredients:!trio2.showIngredients}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio2:trioData}}))
                   }}
                   className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 
                )}

                {classicTrioData.trio2.showIngredients && (
                 <ul className='sauces-swirls-items-bg-container'>
                {classicTrioData.trio2.dishSelected.ingredients.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.name}</p>
                      <div className='sause-price-switch-container'>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {classicTrioData}=this.state 
                            const {trio2}=classicTrioData
                            let duplicates = trio2.dishSelected.ingredients.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })    
                            const dish={...trio2.dishSelected,ingredients:duplicates}  
                            const trioData={...trio2, dishSelected:dish}    
                            this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio2:trioData}}))    
                          }}

                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}  
          </div>
           )}

           { (classicTrioData.showErrorForEmtyTrio3 && !classicTrioData.trio3.isDisheSelected) ? ( <div className='select-sauces-container-active' 
                  onClick={()=>{
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showPopupTrio3:true}}))
                    }}
                  >
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Classic Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    classicTrioData.trio1.isDisheSelected ? (
                      <div className='select-sauces-container-active'
                      onClick={()=>{
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showPopupTrio3:true}}))
                    }}
                      >

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{classicTrioData.trio3.dishSelected.item}</h1>
                      <p className='select-up-to-para'>Classic Range Pizza</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' 
                      onClick={()=>{
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,showPopupTrio3:true}}))
                    }}
                      >
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Classic Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}



                  {classicTrioData.trio3.isDisheSelected && (
                  <div>
                    <div className='select-sauces-container'>
                    {classicTrioData.trio3.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Base Option</h1>
                      <p className='error-select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                    {!classicTrioData.trio3.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Base Option</h1>
                      <p className='select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                   {classicTrioData.trio3.showBaseOptions? (<button className='select-up-to-button-container' 
                   onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio3}=classicTrioData 
                      const trioData={...trio3,showBaseOptions:!trio3.showBaseOptions}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio3:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio3}=classicTrioData 
                      const trioData={...trio3,showBaseOptions:!trio3.showBaseOptions}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio3:trioData}}))
                   }}
                 className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {classicTrioData.trio3.showBaseOptions && (
                 <ul className='sauces-swirls-items-bg-container'>
                {classicTrioData.trio3.baseOptionsList.map((sause)=>{
             
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {classicTrioData}=this.state 
                            const {trio3,itemPrice}=classicTrioData
                            let IP=itemPrice 
                            let duplicates=trio3.baseOptionsList.map((thing)=>{
                              if(thing.id===sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else if (thing.id===sause.id && thing.isSelected===false){
                                IP=IP+thing.price
                                return {...thing,isSelected:true}
                              }
                              else if(thing.id!==sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else {
                                return thing
                              }
                            })

                            const trioData={...trio3,baseOptionsList:duplicates}
                            this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio3:trioData,itemPrice:IP}}))
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  


                  <div className='select-sauces-container'>
                    {classicTrioData.trio3.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Toppings</h1>
                      <p className='error-select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                    {!classicTrioData.trio3.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Toppings</h1>
                      <p className='select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                   {classicTrioData.trio3.showExtraToppings? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio3}=classicTrioData 
                      const trioData={...trio3,showExtraToppings:!trio3.showExtraToppings}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio3:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                     onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio3}=classicTrioData 
                      const trioData={...trio3,showExtraToppings:!trio3.showExtraToppings}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio3:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {classicTrioData.trio3.showExtraToppings && (
                 <ul className='sauces-swirls-items-bg-container'>
                {classicTrioData.trio3.extraToppingsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                         
                          onClick={()=>{
                            const {classicTrioData}=this.state 
                            const {trio3,itemPrice}=classicTrioData
                            let duplicates = trio3.extraToppingsList.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio3,extraToppingsList:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio3:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  

                  <div className='select-sauces-container'>
                    {classicTrioData.trio3.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                    {!classicTrioData.trio3.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                   {classicTrioData.trio3.showSouces ? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio3}=classicTrioData 
                      const trioData={...trio3,showSouces:!trio3.showSouces}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio3:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                      onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio3}=classicTrioData 
                      const trioData={...trio3,showSouces:!trio3.showSouces}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio3:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div>   
                  {classicTrioData.trio3.showSouces && (
                 <ul className='sauces-swirls-items-bg-container'>
                {classicTrioData.trio3.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                   
                          onClick={()=>{
                            const {classicTrioData}=this.state 
                            const {trio3,itemPrice}=classicTrioData
                            let duplicates = trio3.swirlsSauces.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio3,swirlsSauces:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio3:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   
                {classicTrioData.trio3.dishSelected.ingredients.length>0 && (
                  <div className='select-sauces-container'>
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Ingredients</h1>
                      <p className='select-up-to-para'>Un-check to remove</p>
                     </div>
                    
                   {classicTrioData.trio3.showIngredients? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio3}=classicTrioData 
                      const trioData={...trio3,showIngredients:!trio3.showIngredients}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio3:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {classicTrioData}=this.state 
                      const {trio3}=classicTrioData 
                      const trioData={...trio3,showIngredients:!trio3.showIngredients}
                      this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio3:trioData}}))
                   }}
                   className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 
                )}

                {classicTrioData.trio3.showIngredients && (
                 <ul className='sauces-swirls-items-bg-container'>
                {classicTrioData.trio3.dishSelected.ingredients.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.name}</p>
                      <div className='sause-price-switch-container'>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {classicTrioData}=this.state 
                            const {trio3}=classicTrioData
                            let duplicates = trio3.dishSelected.ingredients.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })    
                            const dish={...trio3.dishSelected,ingredients:duplicates}  
                            const trioData={...trio3, dishSelected:dish}    
                            this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,trio3:trioData}}))    
                          }}

                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}  
          </div>
           )}









           <div className='instructions-icon-container'>
              <AiFillFile size={20} className='model-file-icon'/>
              <input placeholder='Special instructions...' type='text' className='special-instructions-input'
              onChange={e=> this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData,secialInstructions:e.target.value}}))
              } value={classicTrioData.secialInstructions}
              />
            </div>


            {classicTrioData.showError && (
              <div className='error-model-container'>
                <BiErrorCircle size={20} className='model-error-icon'/>
                <p className='model-error-msg'>Please correct any options marked in red</p>
              </div>
            )}


            <div className='model-count-add-to-card-container'>
              <div className='increase-descrese-count-container'>
                <button className='increse-descrease-icon' 
                onClick={()=>{
                  const {classicTrioData}=this.state 
             
                  let i = classicTrioData.itemsCount
                  let iPrice=classicTrioData.itemPrice
                  if(classicTrioData.itemsCount >1 ){
                      i-=1
                      iPrice =classicTrioData.itemPrice-classicTrioData.actualPrice
                  }
                 
                  
                  this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData, itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiMinus size={20}/></button>
                <button className='increse-descrease-icon'>{classicTrioData.itemsCount}</button>
                <button className='increse-descrease-icon'
                onClick={()=>{
                  const {classicTrioData}=this.state 
                  let i=1;
                  i+= classicTrioData.itemsCount
                  const iPrice = classicTrioData.actualPrice+ classicTrioData.itemPrice
                  this.setState((prevState)=>({classicTrioData:{...prevState.classicTrioData, itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiPlus size={20}/></button>
              </div>  
             
              {classicTrioData.type==='add' ? (<buttton className='add-to-card-model-button' onClick={this.addClassicSidePizzasToFinals}>Add To Cart</buttton>):(
                <buttton className='add-to-card-model-button' onClick={this.updateSpecialClassicTrioToFinal}>Upadte Item</buttton>
              ) }
            </div>

              </div>
          </div>
        </div>
       )}
      


      {classicTrioData.showPopupTrio1 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {classicTrioData}=this.state 
                      const data={
                        ...classicTrioData,showPopupTrio1:false
                      }      
                      this.setState({classicTrioData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {classicTrioData.ClassicRange.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {classicTrioData}=this.state 
                        const data ={...classicTrioData.trio1,isDisheSelected:true,dishSelected:dish}
                        const finalData={...classicTrioData,trio1:data,showPopupTrio1:false,showErrorForEmtyTrio1:false}
                        this.setState({classicTrioData:finalData})
                      }}
                      >{dish.item}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {classicTrioData.showPopupTrio2 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {classicTrioData}=this.state 
                      const data={
                        ...classicTrioData,showPopupTrio2:false
                      }      
                      this.setState({classicTrioData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {classicTrioData.ClassicRange.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {classicTrioData}=this.state 
                        const data ={...classicTrioData.trio2,isDisheSelected:true,dishSelected:dish}
                        const finalData={...classicTrioData,trio2:data,showPopupTrio2:false,showErrorForEmtyTrio2:false}
                        this.setState({classicTrioData:finalData})
                      }}
                      >{dish.item}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {classicTrioData.showPopupTrio3 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {classicTrioData}=this.state 
                      const data={
                        ...classicTrioData,showPopupTrio3:false
                      }      
                      this.setState({classicTrioData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {classicTrioData.ClassicRange.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {classicTrioData}=this.state 
                        const data ={...classicTrioData.trio3,isDisheSelected:true,dishSelected:dish}
                        const finalData={...classicTrioData,trio3:data,showPopupTrio3:false,showErrorForEmtyTrio3:false}
                        this.setState({classicTrioData:finalData})
                      }}
                      >{dish.item}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

       
        {SignatureTrioData.toggleClassicTrioModel && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button' onClick={()=>this.setState((prevState)=>({SignatureTrioData:initialSignatureTrioData}))}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
                <div>
                  <div className='item-model-container-div'>
                    <div className='item-price-description-container'>
                      <div>
                        <h1 className='item-model-heading'>{SignatureTrioData.itemName}</h1>
                        <p className="item-model-category">{SignatureTrioData.itemCategory}</p>  
                      </div>
                      <p className='item-model-price'>${SignatureTrioData.itemPrice.toFixed(2)}</p>
                    </div>    
                    <p className='item-non-model-description'>{SignatureTrioData.itemDescription}</p> 
                  </div>  


              
                


                   { SignatureTrioData.showErrorForEmtyTrio1 ? ( <div className='select-sauces-container-active' 
                  onClick={()=>{
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showPopupTrio1:true}}))
                    }}
                  >
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Signature Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    SignatureTrioData.trio1.isDisheSelected ? (
                      <div className='select-sauces-container-active'
                      onClick={()=>{
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showPopupTrio1:true}}))
                    }}
                      >

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{SignatureTrioData.trio1.dishSelected.item}</h1>
                      <p className='select-up-to-para'>Signature Range Pizza</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' 
                      onClick={()=>{
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showPopupTrio1:true}}))
                    }}
                      >
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Signature Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}



                  {SignatureTrioData.trio1.isDisheSelected && (
                  <div>

                    <div className='select-sauces-container'>
                    {SignatureTrioData.trio1.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Base Option</h1>
                      <p className='error-select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                    {!SignatureTrioData.trio1.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Base Option</h1>
                      <p className='select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                   {SignatureTrioData.trio1.showBaseOptions? (<button className='select-up-to-button-container' 
                   onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio1}=SignatureTrioData
                      const trioData={...trio1,showBaseOptions:!trio1.showBaseOptions}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio1}=SignatureTrioData
                      const trioData={...trio1,showBaseOptions:!trio1.showBaseOptions}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio1:trioData}}))
                   }}
                 className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {SignatureTrioData.trio1.showBaseOptions && (
                 <ul className='sauces-swirls-items-bg-container'>
                {SignatureTrioData.trio1.baseOptionsList.map((sause)=>{
                  
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {SignatureTrioData}=this.state 
                            const {trio1,itemPrice}=SignatureTrioData
                            let IP=itemPrice 
                            let duplicates=trio1.baseOptionsList.map((thing)=>{
                              if(thing.id===sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else if (thing.id===sause.id && thing.isSelected===false){
                                IP=IP+thing.price
                                return {...thing,isSelected:true}
                              }
                              else if(thing.id!==sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else {
                                return thing
                              }
                            })

                            const trioData={...trio1,baseOptionsList:duplicates}
                            this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio1:trioData,itemPrice:IP}}))
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  


                  <div className='select-sauces-container'>
                    {SignatureTrioData.trio1.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Toppings</h1>
                      <p className='error-select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                    {!SignatureTrioData.trio1.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Toppings</h1>
                      <p className='select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                   {SignatureTrioData.trio1.showExtraToppings? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio1}=SignatureTrioData
                      const trioData={...trio1,showExtraToppings:!trio1.showExtraToppings}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                     onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio1}=SignatureTrioData 
                      const trioData={...trio1,showExtraToppings:!trio1.showExtraToppings}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio1:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {SignatureTrioData.trio1.showExtraToppings && (
                 <ul className='sauces-swirls-items-bg-container'>
                {SignatureTrioData.trio1.extraToppingsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                         
                          onClick={()=>{
                            const {SignatureTrioData}=this.state 
                            const {trio1,itemPrice}=SignatureTrioData
                            let duplicates = trio1.extraToppingsList.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio1,extraToppingsList:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio1:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  

                  <div className='select-sauces-container'>
                    {SignatureTrioData.trio1.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                    {!SignatureTrioData.trio1.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                   {SignatureTrioData.trio1.showSouces ? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio1}=SignatureTrioData 
                      const trioData={...trio1,showSouces:!trio1.showSouces}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                      onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio1}=SignatureTrioData 
                      const trioData={...trio1,showSouces:!trio1.showSouces}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio1:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div>   
                  {SignatureTrioData.trio1.showSouces && (
                 <ul className='sauces-swirls-items-bg-container'>
                {SignatureTrioData.trio1.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                   
                          onClick={()=>{
                            const {SignatureTrioData}=this.state 
                            const {trio1,itemPrice}=SignatureTrioData
                            let duplicates = trio1.swirlsSauces.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio1,swirlsSauces:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio1:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   
                {SignatureTrioData.trio1.dishSelected.ingredients.length>0 && (
                  <div className='select-sauces-container'>
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Ingredients</h1>
                      <p className='select-up-to-para'>Un-check to remove</p>
                     </div>
                    
                   {SignatureTrioData.trio1.showIngredients? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio1}=SignatureTrioData 
                      const trioData={...trio1,showIngredients:!trio1.showIngredients}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio1}=SignatureTrioData 
                      const trioData={...trio1,showIngredients:!trio1.showIngredients}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio1:trioData}}))
                   }}
                   className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 
                )}

                {SignatureTrioData.trio1.showIngredients && (
                 <ul className='sauces-swirls-items-bg-container'>
                {SignatureTrioData.trio1.dishSelected.ingredients.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.name}</p>
                      <div className='sause-price-switch-container'>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {SignatureTrioData}=this.state 
                            const {trio1}=SignatureTrioData
                            let duplicates = trio1.dishSelected.ingredients.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })    
                            const dish={...trio1.dishSelected,ingredients:duplicates}  
                            const trioData={...trio1, dishSelected:dish}    
                            this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio1:trioData}}))    
                          }}

                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}  
          </div>
           )}

           { (SignatureTrioData.showErrorForEmtyTrio2 && !SignatureTrioData.trio2.isDisheSelected) ? ( <div className='select-sauces-container-active' 
                  onClick={()=>{
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showPopupTrio2:true}}))
                    }}
                  >
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Signature Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    SignatureTrioData.trio2.isDisheSelected ? (
                      <div className='select-sauces-container-active'
                      onClick={()=>{
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showPopupTrio2:true}}))
                    }}
                      >

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{SignatureTrioData.trio2.dishSelected.item}</h1>
                      <p className='select-up-to-para'>Signature Range Pizza</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' 
                      onClick={()=>{
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showPopupTrio2:true}}))
                    }}
                      >
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Signature Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}



                  {SignatureTrioData.trio2.isDisheSelected && (
                  <div>

                    <div className='select-sauces-container'>
                    {SignatureTrioData.trio2.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Base Option</h1>
                      <p className='error-select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                    {!SignatureTrioData.trio2.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Base Option</h1>
                      <p className='select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                   {SignatureTrioData.trio2.showBaseOptions? (<button className='select-up-to-button-container' 
                   onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio2}=SignatureTrioData 
                      const trioData={...trio2,showBaseOptions:!trio2.showBaseOptions}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                   onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio2}=SignatureTrioData
                      const trioData={...trio2,showBaseOptions:!trio2.showBaseOptions}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio2:trioData}}))
                   }}
                 className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {SignatureTrioData.trio2.showBaseOptions && (
                 <ul className='sauces-swirls-items-bg-container'>
                {SignatureTrioData.trio2.baseOptionsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {SignatureTrioData}=this.state 
                            const {trio2,itemPrice}=SignatureTrioData
                            let IP=itemPrice 
                            let duplicates=trio2.baseOptionsList.map((thing)=>{
                              if(thing.id===sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else if (thing.id===sause.id && thing.isSelected===false){
                                IP=IP+thing.price
                                return {...thing,isSelected:true}
                              }
                              else if(thing.id!==sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else {
                                return thing
                              }
                            })

                            const trioData={...trio2,baseOptionsList:duplicates}
                            this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio2:trioData,itemPrice:IP}}))
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  


                  <div className='select-sauces-container'>
                    {SignatureTrioData.trio2.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Toppings</h1>
                      <p className='error-select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                    {!SignatureTrioData.trio2.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Toppings</h1>
                      <p className='select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                   {SignatureTrioData.trio2.showExtraToppings? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio2}=SignatureTrioData 
                      const trioData={...trio2,showExtraToppings:!trio2.showExtraToppings}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                     onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio2}=SignatureTrioData 
                      const trioData={...trio2,showExtraToppings:!trio2.showExtraToppings}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio2:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {SignatureTrioData.trio2.showExtraToppings && (
                 <ul className='sauces-swirls-items-bg-container'>
                {SignatureTrioData.trio2.extraToppingsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                         
                          onClick={()=>{
                            const {SignatureTrioData}=this.state 
                            const {trio2,itemPrice}=SignatureTrioData
                            let duplicates = trio2.extraToppingsList.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio2,extraToppingsList:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio2:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  

                  <div className='select-sauces-container'>
                    {SignatureTrioData.trio2.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                    {!SignatureTrioData.trio2.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                   {SignatureTrioData.trio2.showSouces ? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio2}=SignatureTrioData 
                      const trioData={...trio2,showSouces:!trio2.showSouces}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                      onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio2}=SignatureTrioData 
                      const trioData={...trio2,showSouces:!trio2.showSouces}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio2:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div>   
                  {SignatureTrioData.trio2.showSouces && (
                 <ul className='sauces-swirls-items-bg-container'>
                {SignatureTrioData.trio2.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                   
                          onClick={()=>{
                            const {SignatureTrioData}=this.state 
                            const {trio2,itemPrice}=SignatureTrioData
                            let duplicates = trio2.swirlsSauces.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio2,swirlsSauces:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio2:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   
                {SignatureTrioData.trio2.dishSelected.ingredients.length>0 && (
                  <div className='select-sauces-container'>
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Ingredients</h1>
                      <p className='select-up-to-para'>Un-check to remove</p>
                     </div>
                    
                   {SignatureTrioData.trio2.showIngredients? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio2}=SignatureTrioData 
                      const trioData={...trio2,showIngredients:!trio2.showIngredients}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio2}=SignatureTrioData
                      const trioData={...trio2,showIngredients:!trio2.showIngredients}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio2:trioData}}))
                   }}
                   className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 
                )}

                {SignatureTrioData.trio2.showIngredients && (
                 <ul className='sauces-swirls-items-bg-container'>
                {SignatureTrioData.trio2.dishSelected.ingredients.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.name}</p>
                      <div className='sause-price-switch-container'>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {SignatureTrioData}=this.state 
                            const {trio2}=SignatureTrioData
                            let duplicates = trio2.dishSelected.ingredients.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })    
                            const dish={...trio2.dishSelected,ingredients:duplicates}  
                            const trioData={...trio2, dishSelected:dish}    
                            this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio2:trioData}}))    
                          }}

                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}  
          </div>
           )}

           { (SignatureTrioData.showErrorForEmtyTrio3 && !SignatureTrioData.trio3.isDisheSelected) ? ( <div className='select-sauces-container-active' 
                  onClick={()=>{
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showPopupTrio3:true}}))
                    }}
                  >
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Signature Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    SignatureTrioData.trio1.isDisheSelected ? (
                      <div className='select-sauces-container-active'
                      onClick={()=>{
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showPopupTrio3:true}}))
                    }}
                      >

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{SignatureTrioData.trio3.dishSelected.item}</h1>
                      <p className='select-up-to-para'>Signature Range Pizza</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' 
                      onClick={()=>{
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,showPopupTrio3:true}}))
                    }}
                      >
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Signature Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}



                  {SignatureTrioData.trio3.isDisheSelected && (
                  <div>
                    <div className='select-sauces-container'>
                    {SignatureTrioData.trio3.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Base Option</h1>
                      <p className='error-select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                    {!SignatureTrioData.trio3.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Base Option</h1>
                      <p className='select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                   {SignatureTrioData.trio3.showBaseOptions? (<button className='select-up-to-button-container' 
                   onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio3}=SignatureTrioData 
                      const trioData={...trio3,showBaseOptions:!trio3.showBaseOptions}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio3:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio3}=SignatureTrioData 
                      const trioData={...trio3,showBaseOptions:!trio3.showBaseOptions}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio3:trioData}}))
                   }}
                 className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {SignatureTrioData.trio3.showBaseOptions && (
                 <ul className='sauces-swirls-items-bg-container'>
                {SignatureTrioData.trio3.baseOptionsList.map((sause)=>{
             
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {SignatureTrioData}=this.state 
                            const {trio3,itemPrice}=SignatureTrioData
                            let IP=itemPrice 
                            let duplicates=trio3.baseOptionsList.map((thing)=>{
                              if(thing.id===sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else if (thing.id===sause.id && thing.isSelected===false){
                                IP=IP+thing.price
                                return {...thing,isSelected:true}
                              }
                              else if(thing.id!==sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else {
                                return thing
                              }
                            })

                            const trioData={...trio3,baseOptionsList:duplicates}
                            this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio3:trioData,itemPrice:IP}}))
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  


                  <div className='select-sauces-container'>
                    {SignatureTrioData.trio3.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Toppings</h1>
                      <p className='error-select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                    {!SignatureTrioData.trio3.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Toppings</h1>
                      <p className='select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                   {SignatureTrioData.trio3.showExtraToppings? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio3}=SignatureTrioData 
                      const trioData={...trio3,showExtraToppings:!trio3.showExtraToppings}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio3:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                     onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio3}=SignatureTrioData 
                      const trioData={...trio3,showExtraToppings:!trio3.showExtraToppings}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio3:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {SignatureTrioData.trio3.showExtraToppings && (
                 <ul className='sauces-swirls-items-bg-container'>
                {SignatureTrioData.trio3.extraToppingsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                         
                          onClick={()=>{
                            const {SignatureTrioData}=this.state 
                            const {trio3,itemPrice}=SignatureTrioData
                            let duplicates = trio3.extraToppingsList.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio3,extraToppingsList:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio3:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  

                  <div className='select-sauces-container'>
                    {SignatureTrioData.trio3.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                    {!SignatureTrioData.trio3.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                   {SignatureTrioData.trio3.showSouces ? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio3}=SignatureTrioData 
                      const trioData={...trio3,showSouces:!trio3.showSouces}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio3:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                      onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio3}=SignatureTrioData
                      const trioData={...trio3,showSouces:!trio3.showSouces}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio3:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div>   
                  {SignatureTrioData.trio3.showSouces && (
                 <ul className='sauces-swirls-items-bg-container'>
                {SignatureTrioData.trio3.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                   
                          onClick={()=>{
                            const {SignatureTrioData}=this.state 
                            const {trio3,itemPrice}=SignatureTrioData
                            let duplicates = trio3.swirlsSauces.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio3,swirlsSauces:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio3:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   
                {SignatureTrioData.trio3.dishSelected.ingredients.length>0 && (
                  <div className='select-sauces-container'>
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Ingredients</h1>
                      <p className='select-up-to-para'>Un-check to remove</p>
                     </div>
                    
                   {SignatureTrioData.trio3.showIngredients? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio3}=SignatureTrioData 
                      const trioData={...trio3,showIngredients:!trio3.showIngredients}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio3:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const {trio3}=SignatureTrioData 
                      const trioData={...trio3,showIngredients:!trio3.showIngredients}
                      this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio3:trioData}}))
                   }}
                   className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 
                )}

                {SignatureTrioData.trio3.showIngredients && (
                 <ul className='sauces-swirls-items-bg-container'>
                {SignatureTrioData.trio3.dishSelected.ingredients.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.name}</p>
                      <div className='sause-price-switch-container'>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {SignatureTrioData}=this.state 
                            const {trio3}=SignatureTrioData
                            let duplicates = trio3.dishSelected.ingredients.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })    
                            const dish={...trio3.dishSelected,ingredients:duplicates}  
                            const trioData={...trio3, dishSelected:dish}    
                            this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,trio3:trioData}}))    
                          }}

                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}  
          </div>
           )}









           <div className='instructions-icon-container'>
              <AiFillFile size={20} className='model-file-icon'/>
              <input placeholder='Special instructions...' type='text' className='special-instructions-input'
              onChange={e=> this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData,secialInstructions:e.target.value}}))
              } value={SignatureTrioData.secialInstructions}
              />
            </div>


            {SignatureTrioData.showError && (
              <div className='error-model-container'>
                <BiErrorCircle size={20} className='model-error-icon'/>
                <p className='model-error-msg'>Please correct any options marked in red</p>
              </div>
            )}


            <div className='model-count-add-to-card-container'>
              <div className='increase-descrese-count-container'>
                <button className='increse-descrease-icon' 
                onClick={()=>{
                  const {SignatureTrioData}=this.state 
             
                  let i = SignatureTrioData.itemsCount
                  let iPrice=SignatureTrioData.itemPrice
                  if(SignatureTrioData.itemsCount >1 ){
                      i-=1
                      iPrice =SignatureTrioData.itemPrice-SignatureTrioData.actualPrice
                  }
                 
                  
                  this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData, itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiMinus size={20}/></button>
                <button className='increse-descrease-icon'>{SignatureTrioData.itemsCount}</button>
                <button className='increse-descrease-icon'
                onClick={()=>{
                  const {SignatureTrioData}=this.state 
                  let i=1;
                  i+= SignatureTrioData.itemsCount
                  const iPrice = SignatureTrioData.actualPrice+ SignatureTrioData.itemPrice
                  this.setState((prevState)=>({SignatureTrioData:{...prevState.SignatureTrioData, itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiPlus size={20}/></button>
              </div>  
             
              {SignatureTrioData.type==='add' ? (<buttton className='add-to-card-model-button' onClick={this.addSignatureSidePizzasToFinals}>Add To Cart</buttton>):(
                <buttton className='add-to-card-model-button' onClick={this.updateSpecialSignatureTrioToFinal}>Upadte Item</buttton>
              ) }
            </div>

              </div>
          </div>
        </div>
       )}
      
      

        {SignatureTrioData.showPopupTrio1 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const data={
                        ...SignatureTrioData,showPopupTrio1:false
                      }      
                      this.setState({SignatureTrioData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {SignatureTrioData.SignatureRange.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {SignatureTrioData}=this.state 
                        const data ={...SignatureTrioData.trio1,isDisheSelected:true,dishSelected:dish}
                        const finalData={...SignatureTrioData,trio1:data,showPopupTrio1:false,showErrorForEmtyTrio1:false}
                        this.setState({SignatureTrioData:finalData})
                      }}
                      >{dish.item}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {SignatureTrioData.showPopupTrio2 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const data={
                        ...SignatureTrioData,showPopupTrio2:false
                      }      
                      this.setState({SignatureTrioData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {SignatureTrioData.SignatureRange.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {SignatureTrioData}=this.state 
                        const data ={...SignatureTrioData.trio2,isDisheSelected:true,dishSelected:dish}
                        const finalData={...SignatureTrioData,trio2:data,showPopupTrio2:false,showErrorForEmtyTrio2:false}
                        this.setState({SignatureTrioData:finalData})
                      }}
                      >{dish.item}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {SignatureTrioData.showPopupTrio3 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {SignatureTrioData}=this.state 
                      const data={
                        ...SignatureTrioData,showPopupTrio3:false
                      }      
                      this.setState({SignatureTrioData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {SignatureTrioData.SignatureRange.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {SignatureTrioData}=this.state 
                        const data ={...SignatureTrioData.trio3,isDisheSelected:true,dishSelected:dish}
                        const finalData={...SignatureTrioData,trio3:data,showPopupTrio3:false,showErrorForEmtyTrio3:false}
                        this.setState({SignatureTrioData:finalData})
                      }}
                      >{dish.item}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}


        {twinMealData.toggleTwinMeanModel && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button' onClick={()=>this.setState({twinMealData:initialTwinMealData})}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
                <div>
                  <div className='item-model-container-div'>
                    <div className='item-price-description-container'>
                      <div>
                        <h1 className='item-model-heading'>{twinMealData.itemName}</h1>
                        <p className="item-model-category">{twinMealData.itemCategory}</p>  
                      </div>
                      <p className='item-model-price'>${twinMealData.itemPrice.toFixed(2)}</p>
                    </div>    
                    <p className='item-non-model-description'>{twinMealData.itemDescription}</p> 
                  </div>  


                   {twinMealData.showErrorForEmtyTrio1 ? ( <div className='select-sauces-container-active' 
                  onClick={()=>{
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showPopupTrio1:true}}))
                    }}
                  >
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Signature Range Pizza #1</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    twinMealData.trio1.isDisheSelected ? (
                      <div className='select-sauces-container-active'
                      onClick={()=>{
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showPopupTrio1:true}}))
                    }}
                      >

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{twinMealData.trio1.dishSelected.item}</h1>
                      <p className='select-up-to-para'>Signature Range Pizza #1</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' 
                      onClick={()=>{
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showPopupTrio1:true}}))
                    }}
                      >
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Signature Range Pizza #1</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}



                  {twinMealData.trio1.isDisheSelected && (
                  <div>

                    <div className='select-sauces-container'>
                    {twinMealData.trio1.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Base Option</h1>
                      <p className='error-select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                    {!twinMealData.trio1.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Base Option</h1>
                      <p className='select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                   {twinMealData.trio1.showBaseOptions? (<button className='select-up-to-button-container' 
                   onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio1}=twinMealData
                      const trioData={...trio1,showBaseOptions:!trio1.showBaseOptions}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio1}=twinMealData
                      const trioData={...trio1,showBaseOptions:!trio1.showBaseOptions}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio1:trioData}}))
                   }}
                 className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {twinMealData.trio1.showBaseOptions && (
                 <ul className='sauces-swirls-items-bg-container'>
                {twinMealData.trio1.baseOptionsList.map((sause)=>{
                  
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {twinMealData}=this.state 
                            const {trio1,itemPrice}=twinMealData
                            let IP=itemPrice 
                            let duplicates=trio1.baseOptionsList.map((thing)=>{
                              if(thing.id===sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else if (thing.id===sause.id && thing.isSelected===false){
                                IP=IP+thing.price
                                return {...thing,isSelected:true}
                              }
                              else if(thing.id!==sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else {
                                return thing
                              }
                            })

                            const trioData={...trio1,baseOptionsList:duplicates}
                            this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio1:trioData,itemPrice:IP}}))
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  


                  <div className='select-sauces-container'>
                    {twinMealData.trio1.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Toppings</h1>
                      <p className='error-select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                    {!twinMealData.trio1.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Toppings</h1>
                      <p className='select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                   {twinMealData.trio1.showExtraToppings? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio1}=twinMealData
                      const trioData={...trio1,showExtraToppings:!trio1.showExtraToppings}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                     onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio1}=twinMealData 
                      const trioData={...trio1,showExtraToppings:!trio1.showExtraToppings}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio1:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {twinMealData.trio1.showExtraToppings && (
                 <ul className='sauces-swirls-items-bg-container'>
                {twinMealData.trio1.extraToppingsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                         
                          onClick={()=>{
                            const {twinMealData}=this.state 
                            const {trio1,itemPrice}=twinMealData
                            let duplicates = trio1.extraToppingsList.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio1,extraToppingsList:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio1:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  

                  <div className='select-sauces-container'>
                    {twinMealData.trio1.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                    {!twinMealData.trio1.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                   {twinMealData.trio1.showSouces ? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio1}=twinMealData 
                      const trioData={...trio1,showSouces:!trio1.showSouces}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                      onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio1}=twinMealData 
                      const trioData={...trio1,showSouces:!trio1.showSouces}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio1:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div>   
                  {twinMealData.trio1.showSouces && (
                 <ul className='sauces-swirls-items-bg-container'>
                {twinMealData.trio1.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                   
                          onClick={()=>{
                            const {twinMealData}=this.state 
                            const {trio1,itemPrice}=twinMealData
                            let duplicates = trio1.swirlsSauces.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio1,swirlsSauces:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio1:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   
                {twinMealData.trio1.dishSelected.ingredients.length>0 && (
                  <div className='select-sauces-container'>
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Ingredients</h1>
                      <p className='select-up-to-para'>Un-check to remove</p>
                     </div>
                    
                   {twinMealData.trio1.showIngredients? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio1}=twinMealData 
                      const trioData={...trio1,showIngredients:!trio1.showIngredients}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio1}=twinMealData 
                      const trioData={...trio1,showIngredients:!trio1.showIngredients}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio1:trioData}}))
                   }}
                   className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 
                )}

                {twinMealData.trio1.showIngredients && (
                 <ul className='sauces-swirls-items-bg-container'>
                {twinMealData.trio1.dishSelected.ingredients.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.name}</p>
                      <div className='sause-price-switch-container'>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {twinMealData}=this.state 
                            const {trio1}=twinMealData
                            let duplicates = trio1.dishSelected.ingredients.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })    
                            const dish={...trio1.dishSelected,ingredients:duplicates}  
                            const trioData={...trio1, dishSelected:dish}    
                            this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio1:trioData}}))    
                          }}

                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}  
          </div>
           )}

           { (twinMealData.showErrorForEmtyTrio2 && !twinMealData.trio2.isDisheSelected) ? ( <div className='select-sauces-container-active' 
                  onClick={()=>{
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showPopupTrio2:true}}))
                    }}
                  >
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Signature Range Pizza #2</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    twinMealData.trio2.isDisheSelected ? (
                      <div className='select-sauces-container-active'
                      onClick={()=>{
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showPopupTrio2:true}}))
                    }}
                      >

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{twinMealData.trio2.dishSelected.item}</h1>
                      <p className='select-up-to-para'>Signature Range Pizza #2</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' 
                      onClick={()=>{
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showPopupTrio2:true}}))
                    }}
                      >
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Signature Range Pizza #2</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}



                  {twinMealData.trio2.isDisheSelected && (
                  <div>

                    <div className='select-sauces-container'>
                    {twinMealData.trio2.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Base Option</h1>
                      <p className='error-select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                    {!twinMealData.trio2.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Base Option</h1>
                      <p className='select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                   {twinMealData.trio2.showBaseOptions? (<button className='select-up-to-button-container' 
                   onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio2}=twinMealData 
                      const trioData={...trio2,showBaseOptions:!trio2.showBaseOptions}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                   onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio2}=twinMealData
                      const trioData={...trio2,showBaseOptions:!trio2.showBaseOptions}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio2:trioData}}))
                   }}
                 className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {twinMealData.trio2.showBaseOptions && (
                 <ul className='sauces-swirls-items-bg-container'>
                {twinMealData.trio2.baseOptionsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {twinMealData}=this.state 
                            const {trio2,itemPrice}=twinMealData
                            let IP=itemPrice 
                            let duplicates=trio2.baseOptionsList.map((thing)=>{
                              if(thing.id===sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else if (thing.id===sause.id && thing.isSelected===false){
                                IP=IP+thing.price
                                return {...thing,isSelected:true}
                              }
                              else if(thing.id!==sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else {
                                return thing
                              }
                            })

                            const trioData={...trio2,baseOptionsList:duplicates}
                            this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio2:trioData,itemPrice:IP}}))
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  


                  <div className='select-sauces-container'>
                    {twinMealData.trio2.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Toppings</h1>
                      <p className='error-select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                    {!twinMealData.trio2.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Toppings</h1>
                      <p className='select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                   {twinMealData.trio2.showExtraToppings? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio2}=twinMealData 
                      const trioData={...trio2,showExtraToppings:!trio2.showExtraToppings}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                     onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio2}=twinMealData 
                      const trioData={...trio2,showExtraToppings:!trio2.showExtraToppings}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio2:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {twinMealData.trio2.showExtraToppings && (
                 <ul className='sauces-swirls-items-bg-container'>
                {twinMealData.trio2.extraToppingsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                         
                          onClick={()=>{
                            const {twinMealData}=this.state 
                            const {trio2,itemPrice}=twinMealData
                            let duplicates = trio2.extraToppingsList.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio2,extraToppingsList:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio2:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  

                  <div className='select-sauces-container'>
                    {twinMealData.trio2.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                    {!twinMealData.trio2.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                   {twinMealData.trio2.showSouces ? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio2}=twinMealData 
                      const trioData={...trio2,showSouces:!trio2.showSouces}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                      onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio2}=twinMealData 
                      const trioData={...trio2,showSouces:!trio2.showSouces}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio2:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div>   
                  {twinMealData.trio2.showSouces && (
                 <ul className='sauces-swirls-items-bg-container'>
                {twinMealData.trio2.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                   
                          onClick={()=>{
                            const {twinMealData}=this.state 
                            const {trio2,itemPrice}=twinMealData
                            let duplicates = trio2.swirlsSauces.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio2,swirlsSauces:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio2:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   
                {twinMealData.trio2.dishSelected.ingredients.length>0 && (
                  <div className='select-sauces-container'>
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Ingredients</h1>
                      <p className='select-up-to-para'>Un-check to remove</p>
                     </div>
                    
                   {twinMealData.trio2.showIngredients? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio2}=twinMealData 
                      const trioData={...trio2,showIngredients:!trio2.showIngredients}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {twinMealData}=this.state 
                      const {trio2}=twinMealData
                      const trioData={...trio2,showIngredients:!trio2.showIngredients}
                      this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio2:trioData}}))
                   }}
                   className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 
                )}

                {twinMealData.trio2.showIngredients && (
                 <ul className='sauces-swirls-items-bg-container'>
                {twinMealData.trio2.dishSelected.ingredients.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.name}</p>
                      <div className='sause-price-switch-container'>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {twinMealData}=this.state 
                            const {trio2}=twinMealData
                            let duplicates = trio2.dishSelected.ingredients.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })    
                            const dish={...trio2.dishSelected,ingredients:duplicates}  
                            const trioData={...trio2, dishSelected:dish}    
                            this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,trio2:trioData}}))    
                          }}

                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}  
          </div>
           )}


           { (twinMealData.showErrorForEmptySide1 && !twinMealData.side1.isDisheSelected) ? ( <div className='select-sauces-container-active' onClick={()=>{
                      const {twinMealData}=this.state 
                      const data ={
                        ...twinMealData,showDishPopupForSide1:true
                      }
                     
                      this.setState({twinMealData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Standard Sides #1</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    twinMealData.side1.isDisheSelected ? (
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {twinMealData}=this.state 
                      const data ={
                        ...twinMealData,showDishPopupForSide1:true
                      }
                     
                      this.setState({twinMealData:data})
                    }}>

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{twinMealData.side1.dishSelected.name}</h1>
                      <p className='select-up-to-para'>Standard Sides #1</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {twinMealData}=this.state 
                      const data ={
                        ...twinMealData,showDishPopupForSide1:true
                      }
                     
                      this.setState({twinMealData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Standard Sides #1</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}



                  {twinMealData.side1.dishSelected.isSauseThere && (
                    <div className='select-sauces-container'>
                    {twinMealData.showErrorForSoucesSide1&& (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                    {!twinMealData.showErrorForSoucesSide1 && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                   {twinMealData.showSoucesForSide1 ? (<button className='select-up-to-button-container' 
                    onClick={()=>this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showSoucesForSide1:!twinMealData.showSoucesForSide1}}))}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showSoucesForSide1:!twinMealData.showSoucesForSide1}}))}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                </div>  
                  )}

                  
                  {(twinMealData.showSoucesForSide1 && twinMealData.side1.dishSelected.isSauseThere) && (
                 <ul className='sauces-swirls-items-bg-container'>
                {twinMealData.side1.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list' 
                     onClick={()=>{
                      const {twinMealData}=this.state 
                      const {side1,itemPrice}=twinMealData 
                      const duplicates=side1.swirlsSauces.map((thing)=>{
                             if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                                
                              }
                              return thing 
                         })

                         
                         let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }    

                          const side1Data={...side1,swirlsSauces:duplicates}
                         
                          const finalData={side1:side1Data,itemPrice:IP,...twinMealData}
                          
                          this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,side1:side1Data,itemPrice:IP}}))
                         
                     }}
                    >
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  
                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   


 

                  
                 { (twinMealData.showErrorForEmptySide2 && !twinMealData.side2.isDisheSelected) ? ( <div className='select-sauces-container-active' onClick={()=>{
                      const {twinMealData}=this.state 
                      const data ={
                        ...twinMealData,showDishPopupForSide2:true
                      }
                     
                      this.setState({twinMealData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Standard Sides #2</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    twinMealData.side2.isDisheSelected ? (
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {twinMealData}=this.state 
                      const data ={
                        ...twinMealData,showDishPopupForSide2:true
                      }
                     
                      this.setState({twinMealData:data})
                    }}>

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{twinMealData.side2.dishSelected.name}</h1>
                      <p className='select-up-to-para'>Standard Sides #2</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {twinMealData}=this.state 
                      const data ={
                        ...twinMealData,showDishPopupForSide2:true
                      }
                     
                      this.setState({twinMealData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Standard Sides #2</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}

                  {twinMealData.side2.dishSelected.isSauseThere && (
                    <div className='select-sauces-container'>
                    {twinMealData.showErrorForSoucesSide2&& (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                    {!twinMealData.showErrorForSoucesSide2 && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                   {twinMealData.showSoucesForSide2 ? (<button className='select-up-to-button-container' 
                    onClick={()=>this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showSoucesForSide2:!twinMealData.showSoucesForSide2}}))}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,showSoucesForSide2:!twinMealData.showSoucesForSide2}}))}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                </div>  
                  )}

                  
                  {(twinMealData.showSoucesForSide2 && twinMealData.side2.dishSelected.isSauseThere)&& (
                 <ul className='sauces-swirls-items-bg-container'>
                {twinMealData.side2.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list' 
                     onClick={()=>{
                      const {twinMealData}=this.state 
                      const {side2,itemPrice}=twinMealData 
                      const duplicates=side2.swirlsSauces.map((thing)=>{
                             if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                         })

                         
                         let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }    

                          const side1Data={...side2,swirlsSauces:duplicates}
                         
                         
                          this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,side2:side1Data,itemPrice:IP}}))
                         
                     }}
                    >
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  
                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   


           





           <div className='instructions-icon-container'>
              <AiFillFile size={20} className='model-file-icon'/>
              <input placeholder='Special instructions...' type='text' className='special-instructions-input'
              onChange={e=> this.setState((prevState)=>({twinMealData:{...prevState.twinMealData,secialInstructions:e.target.value}}))
              } value={twinMealData.secialInstructions}
              />
            </div>


            {twinMealData.showError && (
              <div className='error-model-container'>
                <BiErrorCircle size={20} className='model-error-icon'/>
                <p className='model-error-msg'>Please correct any options marked in red</p>
              </div>
            )}


            <div className='model-count-add-to-card-container'>
              <div className='increase-descrese-count-container'>
                <button className='increse-descrease-icon' 
                onClick={()=>{
                  const {twinMealData}=this.state 
             
                  let i = twinMealData.itemsCount
                  let iPrice=twinMealData.itemPrice
                  if(twinMealData.itemsCount >1 ){
                      i-=1
                      iPrice =twinMealData.itemPrice-twinMealData.actualPrice
                  }
                 
                  
                  this.setState((prevState)=>({twinMealData:{...prevState.twinMealData, itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiMinus size={20}/></button>
                <button className='increse-descrease-icon'>{twinMealData.itemsCount}</button>
                <button className='increse-descrease-icon'
                onClick={()=>{
                  const {twinMealData}=this.state 
                  let i=1;
                  i+= twinMealData.itemsCount
                  const iPrice = twinMealData.actualPrice+ twinMealData.itemPrice
                  this.setState((prevState)=>({twinMealData:{...prevState.twinMealData, itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiPlus size={20}/></button>
              </div>  
             
              {twinMealData.type==='add' ? (<buttton className='add-to-card-model-button' onClick={this.addTwinMealPizzasToFinals}>Add To Cart</buttton>):(
                <buttton className='add-to-card-model-button' onClick={this.updateTwinMealPizzasToFinals}>Upadte Item</buttton>
              ) }
            </div>

              </div>
          </div>
        </div>
       )}

       {twinMealData.showPopupTrio1 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {twinMealData}=this.state 
                      const data={
                        ...twinMealData,showPopupTrio1:false
                      }      
                      this.setState({twinMealData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {twinMealData.SignatureRange.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {twinMealData}=this.state 
                        const data ={...twinMealData.trio1,isDisheSelected:true,dishSelected:dish}
                        const finalData={...twinMealData,trio1:data,showPopupTrio1:false,showErrorForEmtyTrio1:false}
                        this.setState({twinMealData:finalData})
                      }}
                      >{dish.item}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {twinMealData.showPopupTrio2 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {twinMealData}=this.state 
                      const data={
                        ...twinMealData,showPopupTrio2:false
                      }      
                      this.setState({twinMealData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {twinMealData.SignatureRange.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {twinMealData}=this.state 
                        const data ={...twinMealData.trio2,isDisheSelected:true,dishSelected:dish}
                        const finalData={...twinMealData,trio2:data,showPopupTrio2:false,showErrorForEmtyTrio2:false}
                        this.setState({twinMealData:finalData})
                      }}
                      >{dish.item}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {twinMealData.showDishPopupForSide1 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='dish_pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {twinMealData}=this.state 
                      const data ={
                        ...twinMealData,showDishPopupForSide1:false
                      }
                      
                      this.setState({twinMealData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {twinMealData.dishes.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {twinMealData}=this.state 
                       

                        let data={}
                        if(dish.isSauseThere){
                          data={
                           ...twinMealData.side1,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide1:true
                        }
                        }
                        else{
                           data={
                           ...twinMealData.side1,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide1:false
                        }

                        }
                        const finalData={
                          ...twinMealData,side1:data,showDishPopupForSide1:false
                        }
                       
                        this.setState({twinMealData:finalData})
                      }}
                      >{dish.name}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {twinMealData.showDishPopupForSide2 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='dish_pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {twinMealData}=this.state 
                      const data ={
                        ...twinMealData,showDishPopupForSide2:false
                      }
                      
                      this.setState({twinMealData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {twinMealData.dishes.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {twinMealData}=this.state 
                        let data={}
                        if(dish.isSauseThere){
                          data={
                           ...twinMealData.side2,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide2:true
                        }
                        }
                        else{
                           data={
                           ...twinMealData.side2,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide2:false
                        }
                        }
                        

                        const finalData={
                          ...twinMealData,side2:data,showDishPopupForSide2:false
                        }
                       
                        this.setState({twinMealData:finalData})
                      }}
                      >{dish.name}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}
      


        {singleMealData.toggleSingleMealModel && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button' onClick={()=>this.setState({singleMealData:initialSingleMealData})}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
                <div>
                  <div className='item-model-container-div'>
                    <div className='item-price-description-container'>
                      <div>
                        <h1 className='item-model-heading'>{singleMealData.itemName}</h1>
                        <p className="item-model-category">{singleMealData.itemCategory}</p>  
                      </div>
                      <p className='item-model-price'>${singleMealData.itemPrice.toFixed(2)}</p>
                    </div>    
                    <p className='item-non-model-description'>{singleMealData.itemDescription}</p> 
                  </div>  


                   {singleMealData.showErrorForEmtyTrio1 ? ( <div className='select-sauces-container-active' 
                  onClick={()=>{
                      this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showPopupTrio1:true}}))
                    }}
                  >
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Signature Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    singleMealData.trio1.isDisheSelected ? (
                      <div className='select-sauces-container-active'
                      onClick={()=>{
                      this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showPopupTrio1:true}}))
                    }}
                      >

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{singleMealData.trio1.dishSelected.item}</h1>
                      <p className='select-up-to-para'>Signature Range Pizza</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' 
                      onClick={()=>{
                      this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showPopupTrio1:true}}))
                    }}
                      >
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Signature Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}



                  {singleMealData.trio1.isDisheSelected && (
                  <div>

                    <div className='select-sauces-container'>
                    {singleMealData.trio1.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Base Option</h1>
                      <p className='error-select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                    {!singleMealData.trio1.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Base Option</h1>
                      <p className='select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                   {singleMealData.trio1.showBaseOptions? (<button className='select-up-to-button-container' 
                   onClick={()=>{
                      const {singleMealData}=this.state 
                      const {trio1}=singleMealData
                      const trioData={...trio1,showBaseOptions:!trio1.showBaseOptions}
                      this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {singleMealData}=this.state 
                      const {trio1}=singleMealData
                      const trioData={...trio1,showBaseOptions:!trio1.showBaseOptions}
                      this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,trio1:trioData}}))
                   }}
                 className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {singleMealData.trio1.showBaseOptions && (
                 <ul className='sauces-swirls-items-bg-container'>
                {singleMealData.trio1.baseOptionsList.map((sause)=>{
                  
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {singleMealData}=this.state 
                            const {trio1,itemPrice}=singleMealData
                            let IP=itemPrice 
                            let duplicates=trio1.baseOptionsList.map((thing)=>{
                              if(thing.id===sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else if (thing.id===sause.id && thing.isSelected===false){
                                IP=IP+thing.price
                                return {...thing,isSelected:true}
                              }
                              else if(thing.id!==sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else {
                                return thing
                              }
                            })

                            const trioData={...trio1,baseOptionsList:duplicates}
                            this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,trio1:trioData,itemPrice:IP}}))
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  


                  <div className='select-sauces-container'>
                    {singleMealData.trio1.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Toppings</h1>
                      <p className='error-select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                    {!singleMealData.trio1.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Toppings</h1>
                      <p className='select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                   {singleMealData.trio1.showExtraToppings? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {singleMealData}=this.state 
                      const {trio1}=singleMealData
                      const trioData={...trio1,showExtraToppings:!trio1.showExtraToppings}
                      this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                     onClick={()=>{
                      const {singleMealData}=this.state 
                      const {trio1}=singleMealData 
                      const trioData={...trio1,showExtraToppings:!trio1.showExtraToppings}
                      this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,trio1:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {singleMealData.trio1.showExtraToppings && (
                 <ul className='sauces-swirls-items-bg-container'>
                {singleMealData.trio1.extraToppingsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                         
                          onClick={()=>{
                            const {singleMealData}=this.state 
                            const {trio1,itemPrice}=singleMealData
                            let duplicates = trio1.extraToppingsList.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio1,extraToppingsList:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,trio1:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  

                  <div className='select-sauces-container'>
                    {singleMealData.trio1.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                    {!singleMealData.trio1.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                   {singleMealData.trio1.showSouces ? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {singleMealData}=this.state 
                      const {trio1}=singleMealData
                      const trioData={...trio1,showSouces:!trio1.showSouces}
                      this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                      onClick={()=>{
                      const {singleMealData}=this.state 
                      const {trio1}=singleMealData 
                      const trioData={...trio1,showSouces:!trio1.showSouces}
                      this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,trio1:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div>   
                  {singleMealData.trio1.showSouces && (
                 <ul className='sauces-swirls-items-bg-container'>
                {singleMealData.trio1.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                   
                          onClick={()=>{
                            const {singleMealData}=this.state 
                            const {trio1,itemPrice}=singleMealData
                            let duplicates = trio1.swirlsSauces.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio1,swirlsSauces:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,trio1:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   
                {singleMealData.trio1.dishSelected.ingredients.length>0 && (
                  <div className='select-sauces-container'>
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Ingredients</h1>
                      <p className='select-up-to-para'>Un-check to remove</p>
                     </div>
                    
                   {singleMealData.trio1.showIngredients? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {singleMealData}=this.state 
                      const {trio1}=singleMealData 
                      const trioData={...trio1,showIngredients:!trio1.showIngredients}
                      this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {singleMealData}=this.state 
                      const {trio1}=singleMealData 
                      const trioData={...trio1,showIngredients:!trio1.showIngredients}
                      this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,trio1:trioData}}))
                   }}
                   className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 
                )}

                {singleMealData.trio1.showIngredients && (
                 <ul className='sauces-swirls-items-bg-container'>
                {singleMealData.trio1.dishSelected.ingredients.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.name}</p>
                      <div className='sause-price-switch-container'>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {singleMealData}=this.state 
                            const {trio1}=singleMealData
                            let duplicates = trio1.dishSelected.ingredients.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })    
                            const dish={...trio1.dishSelected,ingredients:duplicates}  
                            const trioData={...trio1, dishSelected:dish}    
                            this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,trio1:trioData}}))    
                          }}

                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}  
          </div>
           )}




           { (singleMealData.showErrorForEmptySide1 && !singleMealData.side1.isDisheSelected) ? ( <div className='select-sauces-container-active' onClick={()=>{
                      const {singleMealData}=this.state 
                      const data ={
                        ...singleMealData,showDishPopupForSide1:true
                      }
                     
                      this.setState({singleMealData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Standard Sides #1</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    singleMealData.side1.isDisheSelected ? (
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {singleMealData}=this.state 
                      const data ={
                        ...singleMealData,showDishPopupForSide1:true
                      }
                     
                      this.setState({singleMealData:data})
                    }}>

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{singleMealData.side1.dishSelected.name}</h1>
                      <p className='select-up-to-para'>Standard Sides #1</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {singleMealData}=this.state 
                      const data ={
                        ...singleMealData,showDishPopupForSide1:true
                      }
                     
                      this.setState({singleMealData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Standard Sides #1</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}



                  {singleMealData.side1.dishSelected.isSauseThere && (
                    <div className='select-sauces-container'>
                    {singleMealData.showErrorForSoucesSide1&& (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                    {!singleMealData.showErrorForSoucesSide1 && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                   {singleMealData.showSoucesForSide1 ? (<button className='select-up-to-button-container' 
                    onClick={()=>this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showSoucesForSide1:!singleMealData.showSoucesForSide1}}))}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showSoucesForSide1:!singleMealData.showSoucesForSide1}}))}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                </div>  
                  )}

                  
                  {(singleMealData.showSoucesForSide1 && singleMealData.side1.dishSelected.isSauseThere) && (
                 <ul className='sauces-swirls-items-bg-container'>
                {singleMealData.side1.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list' 
                     onClick={()=>{
                      const {singleMealData}=this.state 
                      const {side1,itemPrice}=singleMealData 
                      const duplicates=side1.swirlsSauces.map((thing)=>{
                             if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                                
                              }
                              return thing 
                         })

                         
                         let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }    

                          const side1Data={...side1,swirlsSauces:duplicates}
                         
                          const finalData={side1:side1Data,itemPrice:IP,...singleMealData}
                          
                          this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,side1:side1Data,itemPrice:IP}}))
                         
                     }}
                    >
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  
                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   


 

                  
                 { (singleMealData.showErrorForEmptySide2 && !singleMealData.side2.isDisheSelected) ? ( <div className='select-sauces-container-active' onClick={()=>{
                      const {singleMealData}=this.state 
                      const data ={
                        ...singleMealData,showDishPopupForSide2:true
                      }
                     
                      this.setState({singleMealData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Standard Sides #2</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    singleMealData.side2.isDisheSelected ? (
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {singleMealData}=this.state 
                      const data ={
                        ...singleMealData,showDishPopupForSide2:true
                      }
                     
                      this.setState({singleMealData:data})
                    }}>

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{singleMealData.side2.dishSelected.name}</h1>
                      <p className='select-up-to-para'>Standard Sides #2</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {singleMealData}=this.state 
                      const data ={
                        ...singleMealData,showDishPopupForSide2:true
                      }
                     
                      this.setState({singleMealData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Standard Sides #2</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}

                  {singleMealData.side2.dishSelected.isSauseThere && (
                    <div className='select-sauces-container'>
                    {singleMealData.showErrorForSoucesSide2&& (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                    {!singleMealData.showErrorForSoucesSide2 && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                   {singleMealData.showSoucesForSide2 ? (<button className='select-up-to-button-container' 
                    onClick={()=>this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showSoucesForSide2:!singleMealData.showSoucesForSide2}}))}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,showSoucesForSide2:!singleMealData.showSoucesForSide2}}))}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                </div>  
                  )}

                  
                  {(singleMealData.showSoucesForSide2 && singleMealData.side2.dishSelected.isSauseThere)&& (
                 <ul className='sauces-swirls-items-bg-container'>
                {singleMealData.side2.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list' 
                     onClick={()=>{
                      const {singleMealData}=this.state 
                      const {side2,itemPrice}=singleMealData 
                      const duplicates=side2.swirlsSauces.map((thing)=>{
                             if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                         })

                         
                         let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }    

                          const side1Data={...side2,swirlsSauces:duplicates}
                         
                         
                          this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,side2:side1Data,itemPrice:IP}}))
                         
                     }}
                    >
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  
                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   


           





           <div className='instructions-icon-container'>
              <AiFillFile size={20} className='model-file-icon'/>
              <input placeholder='Special instructions...' type='text' className='special-instructions-input'
              onChange={e=> this.setState((prevState)=>({singleMealData:{...prevState.singleMealData,secialInstructions:e.target.value}}))
              } value={singleMealData.secialInstructions}
              />
            </div>


            {singleMealData.showError && (
              <div className='error-model-container'>
                <BiErrorCircle size={20} className='model-error-icon'/>
                <p className='model-error-msg'>Please correct any options marked in red</p>
              </div>
            )}


            <div className='model-count-add-to-card-container'>
              <div className='increase-descrese-count-container'>
                <button className='increse-descrease-icon' 
                onClick={()=>{
                  const {singleMealData}=this.state 
             
                  let i = singleMealData.itemsCount
                  let iPrice=singleMealData.itemPrice
                  if(singleMealData.itemsCount >1 ){
                      i-=1
                      iPrice =singleMealData.itemPrice-singleMealData.actualPrice
                  }
                 
                  
                  this.setState((prevState)=>({singleMealData:{...prevState.singleMealData, itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiMinus size={20}/></button>
                <button className='increse-descrease-icon'>{singleMealData.itemsCount}</button>
                <button className='increse-descrease-icon'
                onClick={()=>{
                  const {singleMealData}=this.state 
                  let i=1;
                  i+= singleMealData.itemsCount
                  const iPrice = singleMealData.actualPrice+ singleMealData.itemPrice
                  this.setState((prevState)=>({singleMealData:{...prevState.singleMealData, itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiPlus size={20}/></button>
              </div>  
             
              {singleMealData.type==='add' ? (<buttton className='add-to-card-model-button' onClick={this.addSingleMealPizzasToFinals}>Add To Cart</buttton>):(
                <buttton className='add-to-card-model-button' onClick={this.updateSingleMealPizzasToFinals}>Upadte Item</buttton>
              ) }
            </div>

              </div>
          </div>
        </div>
       )}




        {singleMealData.showPopupTrio1 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {singleMealData}=this.state 
                      const data={
                        ...singleMealData,showPopupTrio1:false
                      }      
                      this.setState({singleMealData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {singleMealData.SignatureRange.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {singleMealData}=this.state 
                        const data ={...singleMealData.trio1,isDisheSelected:true,dishSelected:dish}
                        const finalData={...singleMealData,trio1:data,showPopupTrio1:false,showErrorForEmtyTrio1:false}
                        this.setState({singleMealData:finalData})
                      }}
                      >{dish.item}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {singleMealData.showDishPopupForSide1 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='dish_pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {singleMealData}=this.state 
                      const data ={
                        ...singleMealData,showDishPopupForSide1:false
                      }
                      
                      this.setState({singleMealData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {singleMealData.dishes.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {singleMealData}=this.state 
                       

                        let data={}
                        if(dish.isSauseThere){
                          data={
                           ...singleMealData.side1,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide1:true
                        }
                        }
                        else{
                           data={
                           ...singleMealData.side1,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide1:false
                        }

                        }
                        const finalData={
                          ...singleMealData,side1:data,showDishPopupForSide1:false
                        }
                       
                        this.setState({singleMealData:finalData})
                      }}
                      >{dish.name}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {singleMealData.showDishPopupForSide2 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='dish_pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {singleMealData}=this.state 
                      const data ={
                        ...singleMealData,showDishPopupForSide2:false
                      }
                      
                      this.setState({singleMealData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {singleMealData.dishes.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {singleMealData}=this.state 
                        let data={}
                        if(dish.isSauseThere){
                          data={
                           ...singleMealData.side2,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide2:true
                        }
                        }
                        else{
                           data={
                           ...singleMealData.side2,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide2:false
                        }
                        }
                        

                        const finalData={
                          ...singleMealData,side2:data,showDishPopupForSide2:false
                        }
                       
                        this.setState({singleMealData:finalData})
                      }}
                      >{dish.name}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}


        
        {mixedMealData.toggleMixedMeanModel && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button' onClick={()=>this.setState({mixedMealData:initialMixedMeal})}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
                <div>
                  <div className='item-model-container-div'>
                    <div className='item-price-description-container'>
                      <div>
                        <h1 className='item-model-heading'>{mixedMealData.itemName}</h1>
                        <p className="item-model-category">{mixedMealData.itemCategory}</p>  
                      </div>
                      <p className='item-model-price'>${mixedMealData.itemPrice.toFixed(2)}</p>
                    </div>    
                    <p className='item-non-model-description'>{mixedMealData.itemDescription}</p> 
                  </div>  


                   {mixedMealData.showErrorForEmtyTrio1 ? ( <div className='select-sauces-container-active' 
                  onClick={()=>{
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showPopupTrio1:true}}))
                    }}
                  >
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Signature Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    mixedMealData.trio1.isDisheSelected ? (
                      <div className='select-sauces-container-active'
                      onClick={()=>{
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showPopupTrio1:true}}))
                    }}
                      >

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{mixedMealData.trio1.dishSelected.item}</h1>
                      <p className='select-up-to-para'>Signature Range Pizza</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' 
                      onClick={()=>{
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showPopupTrio1:true}}))
                    }}
                      >
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Signature Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}



                  {mixedMealData.trio1.isDisheSelected && (
                  <div>

                    <div className='select-sauces-container'>
                    {mixedMealData.trio1.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Base Option</h1>
                      <p className='error-select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                    {!mixedMealData.trio1.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Base Option</h1>
                      <p className='select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                   {mixedMealData.trio1.showBaseOptions? (<button className='select-up-to-button-container' 
                   onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio1}=mixedMealData
                      const trioData={...trio1,showBaseOptions:!trio1.showBaseOptions}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio1}=mixedMealData
                      const trioData={...trio1,showBaseOptions:!trio1.showBaseOptions}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio1:trioData}}))
                   }}
                 className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {mixedMealData.trio1.showBaseOptions && (
                 <ul className='sauces-swirls-items-bg-container'>
                {mixedMealData.trio1.baseOptionsList.map((sause)=>{
                  
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {mixedMealData}=this.state 
                            const {trio1,itemPrice}=mixedMealData
                            let IP=itemPrice 
                            let duplicates=trio1.baseOptionsList.map((thing)=>{
                              if(thing.id===sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else if (thing.id===sause.id && thing.isSelected===false){
                                IP=IP+thing.price
                                return {...thing,isSelected:true}
                              }
                              else if(thing.id!==sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else {
                                return thing
                              }
                            })

                            const trioData={...trio1,baseOptionsList:duplicates}
                            this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio1:trioData,itemPrice:IP}}))
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  


                  <div className='select-sauces-container'>
                    {mixedMealData.trio1.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Toppings</h1>
                      <p className='error-select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                    {!mixedMealData.trio1.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Toppings</h1>
                      <p className='select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                   {mixedMealData.trio1.showExtraToppings? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio1}=mixedMealData
                      const trioData={...trio1,showExtraToppings:!trio1.showExtraToppings}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                     onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio1}=mixedMealData 
                      const trioData={...trio1,showExtraToppings:!trio1.showExtraToppings}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio1:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {mixedMealData.trio1.showExtraToppings && (
                 <ul className='sauces-swirls-items-bg-container'>
                {mixedMealData.trio1.extraToppingsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                         
                          onClick={()=>{
                            const {mixedMealData}=this.state 
                            const {trio1,itemPrice}=mixedMealData
                            let duplicates = trio1.extraToppingsList.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio1,extraToppingsList:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio1:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  

                  <div className='select-sauces-container'>
                    {mixedMealData.trio1.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                    {!mixedMealData.trio1.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                   {mixedMealData.trio1.showSouces ? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio1}=mixedMealData
                      const trioData={...trio1,showSouces:!trio1.showSouces}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                      onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio1}=mixedMealData 
                      const trioData={...trio1,showSouces:!trio1.showSouces}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio1:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div>   
                  {mixedMealData.trio1.showSouces && (
                 <ul className='sauces-swirls-items-bg-container'>
                {mixedMealData.trio1.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                   
                          onClick={()=>{
                            const {mixedMealData}=this.state 
                            const {trio1,itemPrice}=mixedMealData
                            let duplicates = trio1.swirlsSauces.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio1,swirlsSauces:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio1:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   
                {mixedMealData.trio1.dishSelected.ingredients.length>0 && (
                  <div className='select-sauces-container'>
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Ingredients</h1>
                      <p className='select-up-to-para'>Un-check to remove</p>
                     </div>
                    
                   {mixedMealData.trio1.showIngredients? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio1}=mixedMealData 
                      const trioData={...trio1,showIngredients:!trio1.showIngredients}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio1:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio1}=mixedMealData
                      const trioData={...trio1,showIngredients:!trio1.showIngredients}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio1:trioData}}))
                   }}
                   className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 
                )}

                {mixedMealData.trio1.showIngredients && (
                 <ul className='sauces-swirls-items-bg-container'>
                {mixedMealData.trio1.dishSelected.ingredients.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.name}</p>
                      <div className='sause-price-switch-container'>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {mixedMealData}=this.state 
                            const {trio1}=mixedMealData
                            let duplicates = trio1.dishSelected.ingredients.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })    
                            const dish={...trio1.dishSelected,ingredients:duplicates}  
                            const trioData={...trio1, dishSelected:dish}    
                            this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio1:trioData}}))    
                          }}

                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}  
          </div>
           )}

           { (mixedMealData.showErrorForEmtyTrio2 && !mixedMealData.trio2.isDisheSelected) ? ( <div className='select-sauces-container-active' 
                  onClick={()=>{
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showPopupTrio2:true}}))
                    }}
                  >
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Classic Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    mixedMealData.trio2.isDisheSelected ? (
                      <div className='select-sauces-container-active'
                      onClick={()=>{
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showPopupTrio2:true}}))
                    }}
                      >

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{mixedMealData.trio2.dishSelected.item}</h1>
                      <p className='select-up-to-para'>Classic Range Pizza</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' 
                      onClick={()=>{
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showPopupTrio2:true}}))
                    }}
                      >
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Classic Range Pizza</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}



                  {mixedMealData.trio2.isDisheSelected && (
                  <div>

                    <div className='select-sauces-container'>
                    {mixedMealData.trio2.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Base Option</h1>
                      <p className='error-select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                    {!mixedMealData.trio2.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Base Option</h1>
                      <p className='select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                   {mixedMealData.trio2.showBaseOptions? (<button className='select-up-to-button-container' 
                   onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio2}=mixedMealData 
                      const trioData={...trio2,showBaseOptions:!trio2.showBaseOptions}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                   onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio2}=mixedMealData
                      const trioData={...trio2,showBaseOptions:!trio2.showBaseOptions}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio2:trioData}}))
                   }}
                 className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {mixedMealData.trio2.showBaseOptions && (
                 <ul className='sauces-swirls-items-bg-container'>
                {mixedMealData.trio2.baseOptionsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {mixedMealData}=this.state 
                            const {trio2,itemPrice}=mixedMealData
                            let IP=itemPrice 
                            let duplicates=trio2.baseOptionsList.map((thing)=>{
                              if(thing.id===sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else if (thing.id===sause.id && thing.isSelected===false){
                                IP=IP+thing.price
                                return {...thing,isSelected:true}
                              }
                              else if(thing.id!==sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else {
                                return thing
                              }
                            })

                            const trioData={...trio2,baseOptionsList:duplicates}
                            this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio2:trioData,itemPrice:IP}}))
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  


                  <div className='select-sauces-container'>
                    {mixedMealData.trio2.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Toppings</h1>
                      <p className='error-select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                    {!mixedMealData.trio2.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Toppings</h1>
                      <p className='select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                   {mixedMealData.trio2.showExtraToppings? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio2}=mixedMealData
                      const trioData={...trio2,showExtraToppings:!trio2.showExtraToppings}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                     onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio2}=mixedMealData 
                      const trioData={...trio2,showExtraToppings:!trio2.showExtraToppings}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio2:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {mixedMealData.trio2.showExtraToppings && (
                 <ul className='sauces-swirls-items-bg-container'>
                {mixedMealData.trio2.extraToppingsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                         
                          onClick={()=>{
                            const {mixedMealData}=this.state 
                            const {trio2,itemPrice}=mixedMealData
                            let duplicates = trio2.extraToppingsList.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio2,extraToppingsList:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio2:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  

                  <div className='select-sauces-container'>
                    {mixedMealData.trio2.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                    {!mixedMealData.trio2.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                   {mixedMealData.trio2.showSouces ? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio2}=mixedMealData 
                      const trioData={...trio2,showSouces:!trio2.showSouces}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                      onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio2}=mixedMealData 
                      const trioData={...trio2,showSouces:!trio2.showSouces}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio2:trioData}}))
                   }}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div>   
                  {mixedMealData.trio2.showSouces && (
                 <ul className='sauces-swirls-items-bg-container'>
                {mixedMealData.trio2.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                   
                          onClick={()=>{
                            const {mixedMealData}=this.state 
                            const {trio2,itemPrice}=mixedMealData
                            let duplicates = trio2.swirlsSauces.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            const trioData={...trio2,swirlsSauces:duplicates}
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }       
                            this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio2:trioData,itemPrice:IP}}))
                         
                          }}
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   
                {mixedMealData.trio2.dishSelected.ingredients.length>0 && (
                  <div className='select-sauces-container'>
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Ingredients</h1>
                      <p className='select-up-to-para'>Un-check to remove</p>
                     </div>
                    
                   {mixedMealData.trio2.showIngredients? (<button className='select-up-to-button-container' 
                    onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio2}=mixedMealData 
                      const trioData={...trio2,showIngredients:!trio2.showIngredients}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio2:trioData}}))
                   }}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {trio2}=mixedMealData
                      const trioData={...trio2,showIngredients:!trio2.showIngredients}
                      this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio2:trioData}}))
                   }}
                   className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 
                )}

                {mixedMealData.trio2.showIngredients && (
                 <ul className='sauces-swirls-items-bg-container'>
                {mixedMealData.trio2.dishSelected.ingredients.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.name}</p>
                      <div className='sause-price-switch-container'>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {mixedMealData}=this.state 
                            const {trio2}=mixedMealData
                            let duplicates = trio2.dishSelected.ingredients.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })    
                            const dish={...trio2.dishSelected,ingredients:duplicates}  
                            const trioData={...trio2, dishSelected:dish}    
                            this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,trio2:trioData}}))    
                          }}

                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}  
          </div>
           )}


           { (mixedMealData.showErrorForEmptySide1 && !mixedMealData.side1.isDisheSelected) ? ( <div className='select-sauces-container-active' onClick={()=>{
                      const {mixedMealData}=this.state 
                      const data ={
                        ...mixedMealData,showDishPopupForSide1:true
                      }
                     
                      this.setState({mixedMealData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Standard Sides #1</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    mixedMealData.side1.isDisheSelected ? (
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {mixedMealData}=this.state 
                      const data ={
                        ...mixedMealData,showDishPopupForSide1:true
                      }
                     
                      this.setState({mixedMealData:data})
                    }}>

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{mixedMealData.side1.dishSelected.name}</h1>
                      <p className='select-up-to-para'>Standard Sides #1</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {mixedMealData}=this.state 
                      const data ={
                        ...mixedMealData,showDishPopupForSide1:true
                      }
                     
                      this.setState({mixedMealData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Standard Sides #1</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}



                  {mixedMealData.side1.dishSelected.isSauseThere && (
                    <div className='select-sauces-container'>
                    {mixedMealData.showErrorForSoucesSide1&& (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                    {!mixedMealData.showErrorForSoucesSide1 && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                   {mixedMealData.showSoucesForSide1 ? (<button className='select-up-to-button-container' 
                    onClick={()=>this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showSoucesForSide1:!mixedMealData.showSoucesForSide1}}))}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showSoucesForSide1:!mixedMealData.showSoucesForSide1}}))}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                </div>  
                  )}

                  
                  {(mixedMealData.showSoucesForSide1 && mixedMealData.side1.dishSelected.isSauseThere) && (
                 <ul className='sauces-swirls-items-bg-container'>
                {mixedMealData.side1.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list' 
                     onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {side1,itemPrice}=mixedMealData 
                      const duplicates=side1.swirlsSauces.map((thing)=>{
                             if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                                
                              }
                              return thing 
                         })

                         
                         let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }    

                          const side1Data={...side1,swirlsSauces:duplicates}
                         
                          const finalData={side1:side1Data,itemPrice:IP,...mixedMealData}
                          
                          this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,side1:side1Data,itemPrice:IP}}))
                         
                     }}
                    >
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  
                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   


 

                  
                 { (mixedMealData.showErrorForEmptySide2 && !mixedMealData.side2.isDisheSelected) ? ( <div className='select-sauces-container-active' onClick={()=>{
                      const {mixedMealData}=this.state 
                      const data ={
                        ...mixedMealData,showDishPopupForSide2:true
                      }
                     
                      this.setState({mixedMealData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Standard Sides #2</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div> ):(
                    mixedMealData.side2.isDisheSelected ? (
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {mixedMealData}=this.state 
                      const data ={
                        ...mixedMealData,showDishPopupForSide2:true
                      }
                     
                      this.setState({mixedMealData:data})
                    }}>

                   
                    <div className='souces-select-up-container'>
                    <h1 className='extra-sauces-heading'>{mixedMealData.side2.dishSelected.name}</h1>
                      <p className='select-up-to-para'>Standard Sides #2</p>
                      
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    ):(
                      <div className='select-sauces-container-active' onClick={()=>{
                      const {mixedMealData}=this.state 
                      const data ={
                        ...mixedMealData,showDishPopupForSide2:true
                      }
                     
                      this.setState({mixedMealData:data})
                    }}>
                    <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Standard Sides #2</h1>
                     </div>
                     <button className='select-up-to-button-container'><MdOutlineKeyboardArrowRight size={25}/></button>
                   </div>
                    )
                   )}

                  {mixedMealData.side2.dishSelected.isSauseThere && (
                    <div className='select-sauces-container'>
                    {mixedMealData.showErrorForSoucesSide2&& (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                    {!mixedMealData.showErrorForSoucesSide2 && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}

                   {mixedMealData.showSoucesForSide2 ? (<button className='select-up-to-button-container' 
                    onClick={()=>this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showSoucesForSide2:!mixedMealData.showSoucesForSide2}}))}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,showSoucesForSide2:!mixedMealData.showSoucesForSide2}}))}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                </div>  
                  )}

                  
                  {(mixedMealData.showSoucesForSide2 && mixedMealData.side2.dishSelected.isSauseThere)&& (
                 <ul className='sauces-swirls-items-bg-container'>
                {mixedMealData.side2.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list' 
                     onClick={()=>{
                      const {mixedMealData}=this.state 
                      const {side2,itemPrice}=mixedMealData 
                      const duplicates=side2.swirlsSauces.map((thing)=>{
                             if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                         })

                         
                         let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }    

                          const side1Data={...side2,swirlsSauces:duplicates}
                         
                         
                          this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,side2:side1Data,itemPrice:IP}}))
                         
                     }}
                    >
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  
                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   


           





           <div className='instructions-icon-container'>
              <AiFillFile size={20} className='model-file-icon'/>
              <input placeholder='Special instructions...' type='text' className='special-instructions-input'
              onChange={e=> this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData,secialInstructions:e.target.value}}))
              } value={mixedMealData.secialInstructions}
              />
            </div>


            {mixedMealData.showError && (
              <div className='error-model-container'>
                <BiErrorCircle size={20} className='model-error-icon'/>
                <p className='model-error-msg'>Please correct any options marked in red</p>
              </div>
            )}


            <div className='model-count-add-to-card-container'>
              <div className='increase-descrese-count-container'>
                <button className='increse-descrease-icon' 
                onClick={()=>{
                  const {mixedMealData}=this.state 
             
                  let i = mixedMealData.itemsCount
                  let iPrice=mixedMealData.itemPrice
                  if(mixedMealData.itemsCount >1 ){
                      i-=1
                      iPrice =mixedMealData.itemPrice-mixedMealData.actualPrice
                  }
                 
                  
                  this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData, itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiMinus size={20}/></button>
                <button className='increse-descrease-icon'>{mixedMealData.itemsCount}</button>
                <button className='increse-descrease-icon'
                onClick={()=>{
                  const {mixedMealData}=this.state 
                  let i=1;
                  i+= mixedMealData.itemsCount
                  const iPrice = mixedMealData.actualPrice+ mixedMealData.itemPrice
                  this.setState((prevState)=>({mixedMealData:{...prevState.mixedMealData, itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiPlus size={20}/></button>
              </div>  
             
              {mixedMealData.type==='add' ? (<buttton className='add-to-card-model-button' onClick={this.addMixedMealPizzasToFinals}>Add To Cart</buttton>):(
                <buttton className='add-to-card-model-button' onClick={this.updateMixedMealPizzasToFinals}>Upadte Item</buttton>
              ) }
            </div>

              </div>
          </div>
        </div>
       )}

       {mixedMealData.showPopupTrio1 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {mixedMealData}=this.state 
                      const data={
                        ...mixedMealData,showPopupTrio1:false
                      }      
                      this.setState({mixedMealData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {mixedMealData.SignatureRange.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {mixedMealData}=this.state 
                        const data ={...mixedMealData.trio1,isDisheSelected:true,dishSelected:dish}
                        const finalData={...mixedMealData,trio1:data,showPopupTrio1:false,showErrorForEmtyTrio1:false}
                        this.setState({mixedMealData:finalData})
                      }}
                      >{dish.item}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {mixedMealData.showPopupTrio2 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {mixedMealData}=this.state 
                      const data={
                        ...mixedMealData,showPopupTrio2:false
                      }      
                      this.setState({mixedMealData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {mixedMealData.SignatureRange.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {mixedMealData}=this.state 
                        const data ={...mixedMealData.trio2,isDisheSelected:true,dishSelected:dish}
                        const finalData={...mixedMealData,trio2:data,showPopupTrio2:false,showErrorForEmtyTrio2:false}
                        this.setState({mixedMealData:finalData})
                      }}
                      >{dish.item}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {mixedMealData.showDishPopupForSide1 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='dish_pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {mixedMealData}=this.state 
                      const data ={
                        ...mixedMealData,showDishPopupForSide1:false
                      }
                      
                      this.setState({mixedMealData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {mixedMealData.dishes.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {mixedMealData}=this.state 
                       

                        let data={}
                        if(dish.isSauseThere){
                          data={
                           ...mixedMealData.side1,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide1:true
                        }
                        }
                        else{
                           data={
                           ...mixedMealData.side1,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide1:false
                        }

                        }
                        const finalData={
                          ...mixedMealData,side1:data,showDishPopupForSide1:false
                        }
                       
                        this.setState({mixedMealData:finalData})
                      }}
                      >{dish.name}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {mixedMealData.showDishPopupForSide2 && (
          <div className='pop_up_container'>
            <div className='popup_dishner'></div>
              <div className='dish_pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button'  onClick={()=>{
                      const {mixedMealData}=this.state 
                      const data ={
                        ...mixedMealData,showDishPopupForSide2:false
                      }
                      
                      this.setState({mixedMealData:data})
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                     </svg>
                    </button>
                </div>
               <div className='chooses-dishes-container'>
                  <div className='choose-dishes-heading-container'>
                    <h1 className='choose-dish-heading'>Choose A Dish</h1>
                  </div>
                  <div className='dishes-container'>
                    {mixedMealData.dishes.map((dish)=>(
                      <div className='dish-name' 
                      onClick={()=>{
                        const {mixedMealData}=this.state 
                        let data={}
                        if(dish.isSauseThere){
                          data={
                           ...mixedMealData.side2,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide2:true
                        }
                        }
                        else{
                           data={
                           ...mixedMealData.side2,
                           dishSelected:dish ,isDisheSelected:true,showSoucesForSide2:false
                        }
                        }
                        

                        const finalData={
                          ...mixedMealData,side2:data,showDishPopupForSide2:false
                        }
                       
                        this.setState({mixedMealData:finalData})
                      }}
                      >{dish.name}</div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}
      






        <div className='order-banner-container'>
          <img src='https://bno-restaurant-images.imgix.net/b00011ff-eae3-4a02-b764-f659125891f6.png?lossless=1' alt='logo' className='banner-logo-image'/>
          <p className='order-banner-heading'>GLEN EDEN</p>
        </div>

        <div className='tabs-items-orders-container'>

        

          <ul className='tabs-bg-container'>
            {tabsList.map((item)=>(
              <TabItem key={item.tabId} item={item} changeTab={this.changeTab} isActive={this.state.activeTab===item.tabId}/>
            ))}
          </ul>

          <div className='category-types-container'>

          <div id="sectionSpecials" className='ben-jerrys-icecreams-bg-container'>
              <h1 className='category-type-heading'>Specials</h1>
              <ul className='ben-jerrys-icecreams-container'>
                 <li  className='single-item-list' onClick={()=>this.changeJustSidesData(Specials[0])}
                    key={Specials[0].id}
                    >
                      <div className='item-decription-container'>
                        <h1 className='item'>{Specials[0].item}</h1>
                        <p className='item-description'>{Specials[0].description}</p>
                      </div>
                      <button className='item-price-container'><p className='price'>${Specials[0].price.toFixed(2)}</p></button>
                </li>
                <li  className='single-item-list'
                    key={Specials[1].id}
                    onClick={()=>this.changingSingleMealData(Specials[1])}
                    >
                      <div className='item-decription-container'>
                        <h1 className='item'>{Specials[1].item}</h1>
                        <p className='item-description'>{Specials[1].description}</p>
                      </div>
                      <button className='item-price-container'><p className='price'>${Specials[1].price.toFixed(2)}</p></button>
                </li>
                <li  className='single-item-list'
                    key={Specials[2].id}
                    onClick={()=>this.changingMixedMealData(Specials[2])}
                    >
                      <div className='item-decription-container'>
                        <h1 className='item'>{Specials[2].item}</h1>
                        <p className='item-description'>{Specials[2].description}</p>
                      </div>
                      <button className='item-price-container'><p className='price'>${Specials[2].price.toFixed(2)}</p></button>
                </li>
                <li  className='single-item-list'
                    key={Specials[3].id}
                    onClick={()=>this.changingTwinMealData(Specials[3])}
                    >
                      <div className='item-decription-container'>
                        <h1 className='item'>{Specials[3].item}</h1>
                        <p className='item-description'>{Specials[3].description}</p>
                      </div>
                      <button className='item-price-container'><p className='price'>${Specials[3].price.toFixed(2)}</p></button>
                </li>
                <li  className='single-item-list'
                    key={Specials[4].id}
                    onClick={()=>this.changeSignatureTriosData(Specials[4])}
                    >
                      <div className='item-decription-container'>
                        <h1 className='item'>{Specials[4].item}</h1>
                        <p className='item-description'>{Specials[4].description}</p>
                      </div>
                      <button className='item-price-container'><p className='price'>${Specials[4].price.toFixed(2)}</p></button>
                </li>
                <li  className='single-item-list'
                    key={Specials[5].id}
                    onClick={()=>this.changeClassicTriosData(Specials[5])}
                    >
                      <div className='item-decription-container'>
                        <h1 className='item'>{Specials[5].item}</h1>
                        <p className='item-description'>{Specials[5].description}</p>
                      </div>
                      <button className='item-price-container'><p className='price'>${Specials[5].price.toFixed(2)}</p></button>
                </li>
              </ul>
            </div>

          <div id="sectionClassicRnange" className='ben-jerrys-icecreams-bg-container'>
              <h1 className='category-type-heading'>Classic Range</h1>
              <ul className='ben-jerrys-icecreams-container'>
                 {ClassicRange.map((dessert)=>{
                  return(
                    <li  className='single-item-list' onClick={()=>this.changingNonVegItemsData(dessert)}
                    key={dessert.id}
                    >
                      <div className='item-decription-container'>
                        <h1 className='item'>{dessert.item}</h1>
                        <p className='item-description'>{dessert.description}</p>
                      </div>
                      <button className='item-price-container'><p className='price'>${dessert.price}</p></button>
                    </li>
                  )
                 })}     
              </ul>
            </div>

          <div id="sectionVegetarian" className='ben-jerrys-icecreams-bg-container'>
              <h1 className='category-type-heading'>Vegetarian</h1>
              <p className='signature-range-para'>Signature Range</p>
              <ul className='ben-jerrys-icecreams-container'>
                 {Vegetarian.map((dessert)=>{
                  return(
                    <li  className='single-item-list' onClick={()=>this.changingNonVegItemsData(dessert)}
                    key={dessert.id}
                    >
                      <div className='item-decription-container'>
                        <h1 className='item'>{dessert.item}</h1>
                        <p className='item-description'>{dessert.description}</p>
                      </div>
                      <button className='item-price-container'><p className='price'>${dessert.price.toFixed(2)}</p></button>
                    </li>
                  )
                 })}     
              </ul>
            </div>

          <div id="sectionChicken" className='ben-jerrys-icecreams-bg-container'>
              <h1 className='category-type-heading'>Chicken</h1>
              <p className='signature-range-para'>Signature Range</p>
              <ul className='ben-jerrys-icecreams-container'>
                 {Chicken.map((dessert)=>{
                  return(
                    <li  className='single-item-list' onClick={()=>this.changingNonVegItemsData(dessert)}
                    key={dessert.id}
                    >
                      <div className='item-decription-container'>
                        <h1 className='item'>{dessert.item}</h1>
                        <p className='item-description'>{dessert.description}</p>
                      </div>
                      <button className='item-price-container'><p className='price'>${dessert.price.toFixed(2)}</p></button>
                    </li>
                  )
                 })}     
              </ul>
            </div>

          <div id="sectionMeat" className='ben-jerrys-icecreams-bg-container'>
              <h1 className='category-type-heading'>Meat</h1>
              <p className='signature-range-para'>Signature Range</p>
              <ul className='ben-jerrys-icecreams-container'>
                 {Meat.map((dessert)=>{
                  return(
                    <li  className='single-item-list' onClick={()=>this.changingNonVegItemsData(dessert)}
                    key={dessert.id}
                    >
                      <div className='item-decription-container'>
                        <h1 className='item'>{dessert.item}</h1>
                        <p className='item-description'>{dessert.description}</p>
                      </div>
                      <button className='item-price-container'><p className='price'>${dessert.price.toFixed(2)}</p></button>
                    </li>
                  )
                 })}     
              </ul>
            </div>


          <div id="sectionSeafood" className='ben-jerrys-icecreams-bg-container'>
              <h1 className='category-type-heading'>Seafood</h1>
              <p className='signature-range-para'>Signature Range</p>
              <ul className='ben-jerrys-icecreams-container'>
                 {Seafood.map((dessert)=>{
                  return(
                    <li  className='single-item-list' onClick={()=>this.changingNonVegItemsData(dessert)}
                    key={dessert.id}
                    >
                      <div className='item-decription-container'>
                        <h1 className='item'>{dessert.item}</h1>
                        <p className='item-description'>{dessert.description}</p>
                      </div>
                      <button className='item-price-container'><p className='price'>${dessert.price}</p></button>
                    </li>
                  )
                 })}     
              </ul>
            </div>

          <div id="sectionStandard" className='ben-jerrys-icecreams-bg-container'>
              <h1 className='category-type-heading'>Standard Sides</h1>
              <ul className='pasta-container'>
                 {StandardSides.map((dessert)=>{
                  return(
                    <li  className='pasta-single-item-list' onClick={()=>this.changeSidesDetails(dessert)}         
                    key={dessert.id}
                    >
                      <h1 className='item'>{dessert.item}</h1>
                      <p className='pasta-price'>${dessert.price.toFixed(2)}</p>
                    </li>
                  )
                 })}     
              </ul>
            </div>

          <div id="sectionClassicSides" className='ben-jerrys-icecreams-bg-container'>
              <h1 className='category-type-heading'>Classic Sides</h1>
              <ul className='pasta-container'>
                 {ClassicSides.map((dessert)=>{
                  return(
                    <li  className='pasta-single-item-list' onClick={()=>this.changeSidesDetails(dessert)}         
                    key={dessert.id}
                    >
                      <h1 className='item'>{dessert.item}</h1>
                      <p className='pasta-price'>${dessert.price.toFixed(2)}</p>
                    </li>
                  )
                 })}     
              </ul>
            </div>

          <div id="sectionFavorities" className='ben-jerrys-icecreams-bg-container'>
              <h1 className='category-type-heading'>Favorite Sides</h1>
              <ul className='pasta-container'>
                 {FavoriteSides.map((dessert)=>{
                  return(
                    <li  className='pasta-single-item-list' onClick={()=>this.changeSidesDetails(dessert)}         
                    key={dessert.id}
                    >
                      <h1 className='item'>{dessert.item}</h1>
                      <p className='pasta-price'>${dessert.price.toFixed(2)}</p>
                    </li>
                  )
                 })}     
              </ul>
            </div>
           
            <div id="sectionPastas" className='ben-jerrys-icecreams-bg-container'>
              <h1 className='category-type-heading'>Pastas</h1>
              <ul className='pasta-container'>
                 {pastas.map((dessert)=>{
                  return(
                    <li  className='pasta-single-item-list' onClick={()=>this.changeSingleItemDetails(dessert)}
                    
                    key={dessert.id}
                    >
                      <h1 className='item'>{dessert.item}</h1>
                      <p className='pasta-price'>${dessert.price.toFixed(2)}</p>
                    </li>
                  )
                 })}     
              </ul>
            </div>

            <div id="sectionDrinks" className='ben-jerrys-icecreams-bg-container'>
              <h1 className='category-type-heading'>Drinks</h1>
              <ul className='ben-jerrys-icecreams-container'>
                 {drinks.map((dessert)=>{
                  return(
                    <li  className='single-item-list' onClick={()=>this.changeSingleItemDetails(dessert)}
                   
                    >
                      <div className='item-decription-container'>
                        <h1 className='item'>{dessert.item}</h1>
                        <p className='item-description'>{dessert.description}</p>
                      </div>
                      <button className='item-price-container'><p className='price'>${dessert.price.toFixed(2)}</p></button>
                    </li>
                  )
                 })}     
              </ul>
            </div>

            <div id="sectionDesserts" className='ben-jerrys-icecreams-bg-container'>
              <h1 className='category-type-heading'>BEN & JEERY'S ICE CREAM</h1>
              <ul className='ben-jerrys-icecreams-container'>
                 {desserts.map((dessert)=>{
                  return(
                    <li  className='single-item-list' onClick={()=>this.changeSingleItemDetails(dessert)}
                    key={dessert.id}
                   
                    >
                      <div className='item-decription-container'>
                        <h1 className='item'>{dessert.item}</h1>
                        <p className='item-description'>{dessert.description}</p>
                      </div>
                      <button className='item-price-container'><p className='price'>${dessert.price}</p></button>
                    </li>
                  )
                 })}     
              </ul>
            </div>
            
          </div>
          
          {!isServiceChoosed ? (
            <div className='card-bg-empy-service-container'>
              <div className='no-cart-container'>
                <svg  className='spoon-icon' stroke="currentColor" fill="#313131" stroke-width="0" viewBox="0 0 24 24" class="mb-2 text-5xl mx-auto" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"></path></svg>
                <h1 className='ready-to-eat-heading'>Ready To Eat?</h1>
                <button type='button' className='cart-order-online-button' onClick={()=>this.setState({showServiceModel:true})}>Order Online</button>
                <p className='no-contact-para'>No contact delivery available</p>
              </div> 
            </div>
          ):
          (
            <div className='card-bg-container'>
              <div className='orders-cart'>
                <div className='cart-state-container'>
                  <HiMiniShoppingBag size={20} className='cart-bag-icon'/>
                  <p className='cart-state-para'>{finalOrderedProducts.length ===0? 'Cart Empty' : 'Your Cart'}</p>
                </div>
                {finalOrderedProducts.length===0 && (
                  <p className='cart-empty-para'>Your cart is currently empty. Go ahead and add some items to it</p>
                )}


                {
                 finalOrderedProducts.length>0 && (
                  <div className='orders-table-container'>
                    <div className='headings-row-container'>
                     <div className='qty-item-heading-container'>
                      <h1 className='row-heading'>Qty</h1>
                      <h1 className='row-heading-item'>Item</h1>
                     </div>
                     <h1 className='row-heading'>Price</h1>     
                    </div>
                    {finalOrderedProducts.map((product)=>{
                      if(product.itemCategory === 'Pastas' || product.itemCategory === "BEN & JEERY'S ICE CREAM" ){
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>
                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {singleItemData}=this.state
                                    const data={...product,type:product.id}
                                    this.setState({singleItemData:data,toggleSingleItemModel:true})
                                  }}
                                  
                                  >Edit</button>
                                  <button className='edit-product-button' onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}>Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory=== 'Drinks' ){
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>
                                <p className='product-instructions-para'>{product.itemDescription}</p>
                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {singleItemData}=this.state
                                    const data={...product,type:product.id}
                                    
                                    this.setState({singleItemData:data,toggleSingleItemModel:true})
                                  }}
                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory==="Favorite Sides" || product.itemCategory==="Classic Sides" || product.itemCategory==="Standard Sides"){
                        let sauseCount=0 
                        for (let i of product.swirlsSauces){
                          if(i.isSelected){
                            sauseCount+=1
                          }
                        }
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>
                                {sauseCount >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {sauseCount >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}
                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {sidesItemsData}=this.state
                                    const data={...product,type:product.id}
                                    
                                    this.setState({sidesItemsData:data,toggleDishesSauseModel:true})
                                  }}
                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory==="Seafood" || product.itemCategory==="Meat" || product.itemCategory==="Chicken" || product.itemCategory==="Vegetarian" || product.itemCategory==="ClassicRange"){
                        let sauseCount=0 
                        let toggpingsCount=0
                        let ingredientsCount=0
                        for (let i of product.swirlsSauces){
                          if(i.isSelected){
                            sauseCount+=1
                          }
                        }
                        for (let i of product.extraToppingsList){
                          if(i.isSelected){
                            toggpingsCount+=1
                          }
                        }
                        for (let i of product.ingredientsList){
                          if(!i.isSelected){
                            ingredientsCount+=1
                          }
                        }
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>
                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                {toggpingsCount >0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {toggpingsCount >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}
                                {sauseCount >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {sauseCount >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}
                                {ingredientsCount >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {ingredientsCount >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.ingredientsList.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}

                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {nonVegItemData}=this.state
                                    const data={...product,type:product.id}
                                    
                                    this.setState({nonVegItemData:data,toggleNonVegModel:true})
                                  }}
                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory==='Specials' && product.itemName==='Just Sides'){
                        let s1sc=0
                        let s2sc=0 
                        for (let i of product.side1.swirlsSauces){
                          if(i.isSelected){
                            s1sc+=1
                          }
                        }

                        for (let i of product.side2.swirlsSauces){
                          if(i.isSelected){
                            s2sc+=1
                          }
                        }
          
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>
                               
                                <h1 className='side-sauses-heading'>{product.side1.dishSelected.name}</h1>
                                { (s1sc>0 && product.side1.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                { (s1sc>0 && product.side1.dishSelected.isSauseThere) && (
                                  <ul className='sauses-ul-container'>
                                  {product.side1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.side2.dishSelected.name}</h1>
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (
                                  <ul className='sauses-ul-container'>
                                  {product.side2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}
                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}

                                  <button className='edit-product-button' 
                                  onClick={()=>{
         
                                    const data={...product,type:product.id,toggleJustSidesModel:true}
                                    
                                    this.setState({justSidesSpecialData:data})
                                  }}
                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      
                      else if (product.itemCategory==='Specials' && product.itemName==='Classic Trio'){
                        const {trio1,trio2,trio3}=product
                        let t1Sauces=0
                        let t1Toppings=0
                       let t1baseOption=0
                       let t1IngredientsC=0

                       let t2Sauces=0
                       let t2Toppings=0
                       let t2baseOption=0
                       let t2IngredientsC=0

                      let t3Sauces=0
                      let t3Toppings=0
                      let t3baseOption=0
                      let t3IngredientsC=0

                      for(let i of trio1.dishSelected.ingredients){
                        if(!i.isSelected){
                          t1IngredientsC+=1
                         }
                        }
                        for(let i of trio2.dishSelected.ingredients){
                        if(!i.isSelected){
                          t2IngredientsC+=1
                         }
                        }
                        for(let i of trio3.dishSelected.ingredients){
                        if(!i.isSelected){
                          t3IngredientsC+=1
                         }
                        }
    
                      for(let i of trio1.extraToppingsList){
                        if(i.isSelected){
                          t1Toppings+=1
                         }
                        }
                       for(let i of trio1.swirlsSauces){
                          if(i.isSelected){
                           t1Sauces+=1
                           }
                       }
                       for(let i of trio1.baseOptionsList){
                        if(i.isSelected){
                        t1baseOption+=1
                         }
                         }

                       for(let i of trio2.extraToppingsList){
                         if(i.isSelected){
                           t2Toppings+=1
                           }
                         }
                        for(let i of trio2.swirlsSauces){
                            if(i.isSelected){
                             t2Sauces+=1
                           }
                        }
                        for(let i of trio2.baseOptionsList){
                         if(i.isSelected){
                          t2baseOption+=1
                             }
                          }

                        for(let i of trio3.extraToppingsList){
                           if(i.isSelected){
                            t3Toppings+=1
                           }
                           }
                            for(let i of trio3.swirlsSauces){
                          if(i.isSelected){
                              t3Sauces+=1
                                 }
                             }
                           for(let i of trio3.baseOptionsList){
                         if(i.isSelected){
                            t3baseOption+=1
                         }
                           }
      
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>

                                <h1 className='side-sauses-heading'>{product.trio1.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio1.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t1Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t1Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t1Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t1IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.trio2.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio2.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t2Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t2Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t2Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t2IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}


                                <h1 className='side-sauses-heading'>{product.trio3.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio3.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t3Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t3Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio3.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t3Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t3Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio3.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t3IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t3IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio3.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}


                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {classicTrioData}=this.state
                                    const data={...product,type:product.id,toggleClassicTrioModel:true}
                                    
                                    this.setState({classicTrioData:data})
                                  }}

                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory==='Specials' && product.itemName==='Signature Trio'){
                        const {trio1,trio2,trio3}=product
                        let t1Sauces=0
                        let t1Toppings=0
                       let t1baseOption=0
                       let t1IngredientsC=0

                       let t2Sauces=0
                       let t2Toppings=0
                       let t2baseOption=0
                       let t2IngredientsC=0

                      let t3Sauces=0
                      let t3Toppings=0
                      let t3baseOption=0
                      let t3IngredientsC=0

                      for(let i of trio1.dishSelected.ingredients){
                        if(!i.isSelected){
                          t1IngredientsC+=1
                         }
                        }
                        for(let i of trio2.dishSelected.ingredients){
                        if(!i.isSelected){
                          t2IngredientsC+=1
                         }
                        }
                        for(let i of trio3.dishSelected.ingredients){
                        if(!i.isSelected){
                          t3IngredientsC+=1
                         }
                        }
    
                      for(let i of trio1.extraToppingsList){
                        if(i.isSelected){
                          t1Toppings+=1
                         }
                        }
                       for(let i of trio1.swirlsSauces){
                          if(i.isSelected){
                           t1Sauces+=1
                           }
                       }
                       for(let i of trio1.baseOptionsList){
                        if(i.isSelected){
                        t1baseOption+=1
                         }
                         }

                       for(let i of trio2.extraToppingsList){
                         if(i.isSelected){
                           t2Toppings+=1
                           }
                         }
                        for(let i of trio2.swirlsSauces){
                            if(i.isSelected){
                             t2Sauces+=1
                           }
                        }
                        for(let i of trio2.baseOptionsList){
                         if(i.isSelected){
                          t2baseOption+=1
                             }
                          }

                        for(let i of trio3.extraToppingsList){
                           if(i.isSelected){
                            t3Toppings+=1
                           }
                           }
                            for(let i of trio3.swirlsSauces){
                          if(i.isSelected){
                              t3Sauces+=1
                                 }
                             }
                           for(let i of trio3.baseOptionsList){
                         if(i.isSelected){
                            t3baseOption+=1
                         }
                           }
      
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>

                                <h1 className='side-sauses-heading'>{product.trio1.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio1.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t1Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t1Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t1Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t1IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.trio2.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio2.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t2Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t2Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t2Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t2IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}


                                <h1 className='side-sauses-heading'>{product.trio3.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio3.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t3Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t3Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio3.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t3Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t3Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio3.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t3IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t3IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio3.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}


                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {classicTrioData}=this.state
                                    const data={...product,type:product.id,toggleClassicTrioModel:true}
                                    
                                    this.setState({classicTrioData:data})
                                  }}

                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory==='Specials' && product.itemName==='Twin Meal'){
                        const {trio1,trio2}=product
                        let t1Sauces=0
                        let t1Toppings=0
                       let t1baseOption=0
                       let t1IngredientsC=0

                       let t2Sauces=0
                       let t2Toppings=0
                       let t2baseOption=0
                       let t2IngredientsC=0
                       let s1sc=0
                        let s2sc=0 
                        for (let i of product.side1.swirlsSauces){
                          if(i.isSelected){
                            s1sc+=1
                          }
                        }

                        for (let i of product.side2.swirlsSauces){
                          if(i.isSelected){
                            s2sc+=1
                          }
                        }


                      for(let i of trio1.dishSelected.ingredients){
                        if(!i.isSelected){
                          t1IngredientsC+=1
                         }
                        }
                        for(let i of trio2.dishSelected.ingredients){
                        if(!i.isSelected){
                          t2IngredientsC+=1
                         }
                        }
                      
    
                      for(let i of trio1.extraToppingsList){
                        if(i.isSelected){
                          t1Toppings+=1
                         }
                        }
                       for(let i of trio1.swirlsSauces){
                          if(i.isSelected){
                           t1Sauces+=1
                           }
                       }
                       for(let i of trio1.baseOptionsList){
                        if(i.isSelected){
                        t1baseOption+=1
                         }
                         }

                       for(let i of trio2.extraToppingsList){
                         if(i.isSelected){
                           t2Toppings+=1
                           }
                         }
                        for(let i of trio2.swirlsSauces){
                            if(i.isSelected){
                             t2Sauces+=1
                           }
                        }
                        for(let i of trio2.baseOptionsList){
                         if(i.isSelected){
                          t2baseOption+=1
                             }
                          }

                     
      
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>

                                <h1 className='side-sauses-heading'>{product.trio1.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio1.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t1Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t1Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t1Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t1IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.trio2.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio2.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t2Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t2Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t2Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t2IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}
                                 
                                <h1 className='side-sauses-heading'>{product.side1.dishSelected.name}</h1>
                                { (s1sc>0 && product.side1.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                { (s1sc>0 && product.side1.dishSelected.isSauseThere) && (
                                  <ul className='sauses-ul-container'>
                                  {product.side1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.side2.dishSelected.name}</h1>
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (
                                  <ul className='sauses-ul-container'>
                                  {product.side2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}
                                
                              
                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    
                                    const data={...product,type:product.id,toggleTwinMeanModel:true}
                                    
                                    this.setState({twinMealData:data})
                                  }}

                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory==='Specials' && product.itemName==='Single Meal'){
                        const {trio1,trio2}=product
                        let t1Sauces=0
                        let t1Toppings=0
                       let t1baseOption=0
                       let t1IngredientsC=0

                       let s1sc=0
                        let s2sc=0 
                        for (let i of product.side1.swirlsSauces){
                          if(i.isSelected){
                            s1sc+=1
                          }
                        }

                        for (let i of product.side2.swirlsSauces){
                          if(i.isSelected){
                            s2sc+=1
                          }
                        }


                      for(let i of trio1.dishSelected.ingredients){
                        if(!i.isSelected){
                          t1IngredientsC+=1
                         }
                        }
                     
                      
    
                      for(let i of trio1.extraToppingsList){
                        if(i.isSelected){
                          t1Toppings+=1
                         }
                        }
                       for(let i of trio1.swirlsSauces){
                          if(i.isSelected){
                           t1Sauces+=1
                           }
                       }
                       for(let i of trio1.baseOptionsList){
                        if(i.isSelected){
                        t1baseOption+=1
                         }
                         }

                     

                     
      
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>

                                <h1 className='side-sauses-heading'>{product.trio1.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio1.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t1Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t1Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t1Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t1IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}


                                 
                                <h1 className='side-sauses-heading'>{product.side1.dishSelected.name}</h1>
                                { (s1sc>0 && product.side1.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                { (s1sc>0 && product.side1.dishSelected.isSauseThere) && (
                                  <ul className='sauses-ul-container'>
                                  {product.side1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.side2.dishSelected.name}</h1>
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (
                                  <ul className='sauses-ul-container'>
                                  {product.side2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}

                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    
                                    const data={...product,type:product.id,toggleSingleMealModel:true}
                                    
                                    this.setState({singleMealData:data})
                                  }
                                }
                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                            
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }
                      else if (product.itemCategory==='Specials' && product.itemName==='Mixed Meal'){
                        const {trio1,trio2}=product
                        let t1Sauces=0
                        let t1Toppings=0
                       let t1baseOption=0
                       let t1IngredientsC=0

                       let t2Sauces=0
                       let t2Toppings=0
                       let t2baseOption=0
                       let t2IngredientsC=0
                       let s1sc=0
                        let s2sc=0 
                        for (let i of product.side1.swirlsSauces){
                          if(i.isSelected){
                            s1sc+=1
                          }
                        }

                        for (let i of product.side2.swirlsSauces){
                          if(i.isSelected){
                            s2sc+=1
                          }
                        }


                      for(let i of trio1.dishSelected.ingredients){
                        if(!i.isSelected){
                          t1IngredientsC+=1
                         }
                        }
                        for(let i of trio2.dishSelected.ingredients){
                        if(!i.isSelected){
                          t2IngredientsC+=1
                         }
                        }
                      
    
                      for(let i of trio1.extraToppingsList){
                        if(i.isSelected){
                          t1Toppings+=1
                         }
                        }
                       for(let i of trio1.swirlsSauces){
                          if(i.isSelected){
                           t1Sauces+=1
                           }
                       }
                       for(let i of trio1.baseOptionsList){
                        if(i.isSelected){
                        t1baseOption+=1
                         }
                         }

                       for(let i of trio2.extraToppingsList){
                         if(i.isSelected){
                           t2Toppings+=1
                           }
                         }
                        for(let i of trio2.swirlsSauces){
                            if(i.isSelected){
                             t2Sauces+=1
                           }
                        }
                        for(let i of trio2.baseOptionsList){
                         if(i.isSelected){
                          t2baseOption+=1
                             }
                          }

                     
      
                        return (
                          <div className='headings-row-container'>
                            <div className='qty-item-heading-container'>
                              <div className='qty-container'><h1 className='product-quantity'>{product.itemsCount}</h1></div>
                              
                              <div className='items-deatils-container'>
                                <h1 className='product-name'>{product.itemName}</h1>

                                <h1 className='side-sauses-heading'>{product.trio1.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio1.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t1Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t1Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t1Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t1IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t1IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio1.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.trio2.dishSelected.item}</h1>
                                

                                <h1 className='sauses-heading'>Base Option</h1>
                                <ul className='sauses-ul-container'>
                                  {product.trio2.baseOptionsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>


                                {t2Toppings>0  && (
                                <h1 className='sauses-heading'>Extra Toppings</h1>
                                )}
                              {t2Toppings >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.extraToppingsList.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2Sauces >0  && (
                                <h1 className='sauses-heading'>Extra Swirls / Sauces</h1>
                                )}
                              {t2Sauces >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                {t2IngredientsC >0  && (
                                <h1 className='sauses-heading'>Remove Ingredients</h1>
                                )}
                              {t2IngredientsC >0  && (
                                <ul className='sauses-ul-container'>
                                  {product.trio2.dishSelected.ingredients.map((sauseItem)=>{
                                    if(!sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.name}</li>
                                    }
                                  })}
                                </ul>
                                )}
                                 
                                <h1 className='side-sauses-heading'>{product.side1.dishSelected.name}</h1>
                                { (s1sc>0 && product.side1.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                { (s1sc>0 && product.side1.dishSelected.isSauseThere) && (
                                  <ul className='sauses-ul-container'>
                                  {product.side1.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}

                                <h1 className='side-sauses-heading'>{product.side2.dishSelected.name}</h1>
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (<h1 className='sauses-heading'>Extra Swirls / Sauces</h1>)}
                                {(s2sc>0 && product.side2.dishSelected.isSauseThere) && (
                                  <ul className='sauses-ul-container'>
                                  {product.side2.swirlsSauces.map((sauseItem)=>{
                                    if(sauseItem.isSelected){
                                      return <li className='sause-list-name'>{sauseItem.text} <span className='sause-price'>${sauseItem.price.toFixed(2)}</span></li>
                                    }
                                  })}
                                </ul>
                                )}
                                
                              
                                {product.secialInstructions!=='' && <p className='product-instructions-para'>Notes: {product.secialInstructions}</p>}
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    
                                    const data={...product,type:product.id,toggleMixedMeanModel:true}
                                    
                                    this.setState({mixedMealData:data})
                                  }}

                                  >Edit</button>
                                  <button className='edit-product-button' 
                                  onClick={()=>{
                                    const {finalOrderedProducts}=this.state 
                                    const filterProducts=finalOrderedProducts.filter((item)=>item.id !== product.id)
                                    this.setState({finalOrderedProducts:filterProducts})
                                  }}
                                  >Remove</button>
                              </div>
                            </div>
                            <h1 className='product-price'>${product.itemPrice.toFixed(2)}</h1>     
                          </div>
                        )
                      }

                      
                    })}
                  </div>
                 )
                }
                {finalOrderedProducts.length>0 &&  (
                  
                    <div className='charges-container'>
                      <div className='charge-type-amount-container'>
                        <p className='charge-type-para'>Cart</p>
                        <p className='charge-amount'>{cartAmount.toFixed(2)}</p>
                      </div>
                      <div className='charge-type-amount-container'>
                        <p className='charge-type-para'>Credit / Debit Card Fee</p>
                        <p className='charge-amount'>{debitCartChargers.toFixed(2)}</p>
                      </div>
                      <div className='charge-type-amount-container'>
                        <p className='charge-type-para'>GST (15%) inc. in price</p>
                        <p className='charge-amount'>{gst.toFixed(2)}</p>
                      </div>
                      <div className='charge-type-amount-container'>
                        <p className='total-amount-para'>Total</p>
                        <p className='total-amount'>{total.toFixed(2)}</p>
                      </div>
                      <button className='check-out-button' onClick={()=>this.setState({showPlaceOrderModel:true})}>Proceed To Checkout</button>
                      
                    </div>
          )}
                
          <div className='change-service-container' onClick={()=>this.setState({showServiceModel:true})}>
                  <button className='change-service-button'><BiSolidChevronLeftCircle size={15} className='change-service-icon'/></button>
                  <p className='change-service-para'>Change order details</p>
             </div>
              </div>
            </div>
          )}

        
        </div>

        <div class="modal fade" id="dessertsModelItem1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
        <div>
        <div className='pop_up_header'>
                    <button data-dismiss="modal" className='cancel-button' onClick={()=>this.setState({toggleDishesSauseModel:false,singleItemData:initialSingleItemData})}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                   </svg>
                    </button>
                  </div>
        
         <div className='item-model-container'>
            <div className='item-price-description-container'>
                <div>
                  <h1 className='item-model-heading'>{singleItemData.itemName}</h1>
                  <p className="item-model-category">{singleItemData.itemCategory}</p>
                </div>
                <p className='item-model-price'>${singleItemData.itemPrice.toFixed(2)}</p>
            </div>
              <p className='item-model-description'>{singleItemData.itemDescription}</p>            
            <div className='instructions-icon-container'>
              <AiFillFile size={20} className='model-file-icon'/>
              <input placeholder='Special instructions...' type='text' className='special-instructions-input'
              onChange={this.changeInstructions} value={singleItemData.secialInstructions}
              />
            </div>
            <div className='model-count-add-to-card-container'>
              <div className='increase-descrese-count-container'>
                <button className='increse-descrease-icon' 
                onClick={()=>{
                  const {singleItemData}=this.state 
                  let i=1;
                  if(singleItemData.itemsCount > 2 ){
                     i-=singleItemData.itemsCount
                  }
                  if(i<0){
                    i=i*(-1)
                  }
                  const iPrice = i *(singleItemData.actualPrice)
                  this.setState((prevState)=>({singleItemData:{...prevState.singleItemData , itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiMinus size={20}/></button>
                <button className='increse-descrease-icon'>{singleItemData.itemsCount}</button>
                <button className='increse-descrease-icon'
                onClick={()=>{
                  const {singleItemData}=this.state 
                  let i=1;
                  i+=singleItemData.itemsCount
                  const iPrice = i *(singleItemData.actualPrice)
                  this.setState((prevState)=>({singleItemData:{...prevState.singleItemData , itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiPlus size={20}/></button>
              </div>
              
              {singleItemData.type==='add' ? (<buttton className='add-to-card-model-button' onClick={this.addToOrders}>Add To Cart</buttton>):(
                <buttton className='add-to-card-model-button'  onClick={()=>this.updateItemDissertsfinals(singleItemData)}>Upadte Item</buttton>
              ) }
            </div>
         </div>  
        </div>
        </div>
        </div>
        </div>
        
        {toggleSingleItemModel && (
          <div className='pop_up_container'>
              <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                  <div className='pop_up_header'>
                    <button className='cancel-button' onClick={()=>this.setState({toggleSingleItemModel:false,sidesItemsData:initialSidesItemData})}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                   </svg>
                    </button>
                  </div>
                  <div className='item-model-container'>
            <div className='item-price-description-container'>
                <div>
                  <h1 className='item-model-heading'>{singleItemData.itemName}</h1>
                  <p className="item-model-category">{singleItemData.itemCategory}</p>
                </div>
                <p className='item-model-price'>${singleItemData.itemPrice.toFixed(2)}</p>
            </div>
              <p className='item-model-description'>{singleItemData.itemDescription}</p>            
            <div className='instructions-icon-container'>
              <AiFillFile size={20} className='model-file-icon'/>
              <input placeholder='Special instructions...' type='text' className='special-instructions-input'
              onChange={this.changeInstructions} value={singleItemData.secialInstructions}
              />
            </div>
            <div className='model-count-add-to-card-container'>
              <div className='increase-descrese-count-container'>
                <button className='increse-descrease-icon' 
                onClick={()=>{
                  const {singleItemData}=this.state 
                 
                  let i = singleItemData.itemsCount
                  let iPrice=singleItemData.itemPrice
                  if(singleItemData.itemsCount >1 ){
                      i-=1
                      iPrice =singleItemData.itemPrice-singleItemData.actualPrice
                  }
                  this.setState((prevState)=>({singleItemData:{...prevState.singleItemData , itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiMinus size={20}/></button>
                <button className='increse-descrease-icon'>{singleItemData.itemsCount}</button>
                <button className='increse-descrease-icon'
                onClick={()=>{
                  const {singleItemData}=this.state 
                  let i=1;
                  i+=singleItemData.itemsCount
                  const iPrice = singleItemData.itemPrice+singleItemData.actualPrice
                  this.setState((prevState)=>({singleItemData:{...prevState.singleItemData , itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiPlus size={20}/></button>
              </div>
              
              {singleItemData.type==='add' ? (<buttton className='add-to-card-model-button' onClick={this.addToOrders} data-dismiss="modal">Add To Cart</buttton>):(
                <buttton className='add-to-card-model-button' data-dismiss="modal" onClick={()=>this.updateItemDissertsfinals(singleItemData)}>Upadte Item</buttton>
              ) }
            </div>
         </div>  
              </div>
          </div>
        )}
  
     
        
          
          {toggleDishesSauseModel && (
            <div className='pop_up_container'>
              <div className='popup_dishner'></div>
                <div className='pop_up_body'>
                  <div className='pop_up_header'>
                    <button className='cancel-button' onClick={()=>this.setState({toggleDishesSauseModel:false,sidesItemsData:initialSidesItemData})}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                   </svg>
                    </button>
                  </div>
                  <div>
         <div className='item-model-container-div'>
            <div className='item-price-description-container'>
              <div>
                <h1 className='item-model-heading'>{sidesItemsData.itemName}</h1>
                <p className="item-model-category">{sidesItemsData.itemCategory}</p>  
              </div>
              <p className='item-model-price'>${sidesItemsData.itemPrice.toFixed(2)}</p>
            </div>    
            <div className='select-sauces-container'>
              {sidesItemsData.showError && (
                <div className='souces-select-up-container'>
                  <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                  <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                </div>
              )}
              {!sidesItemsData.showError && (
                <div className='souces-select-up-container'>
                  <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                  <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                </div>
              )}
              {sidesItemsData.showSouces ? (<button className='select-up-to-button-container' 
               onClick={()=>this.setState((prevState)=>({sidesItemsData:{...prevState.sidesItemsData,showSouces:!sidesItemsData.showSouces}}))}
              ><IoIosArrowUp size={20}/></button>):
              (<button 
               onClick={()=>this.setState((prevState)=>({sidesItemsData:{...prevState.sidesItemsData,showSouces:!sidesItemsData.showSouces}}))}
              className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
            </div>   
            {sidesItemsData.showSouces && (
              <ul className='sauces-swirls-items-bg-container'>
                {sidesItemsData.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {sidesItemsData}=this.state 
                            const {swirlsSauces,itemPrice}=sidesItemsData 
                            let duplicates = swirlsSauces.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }                       
                            this.setState((prevState)=>({sidesItemsData:{...prevState.sidesItemsData,swirlsSauces:duplicates,itemPrice:IP}}))
                          }}
                          ><Switch size={15} checked={sause.isSelected}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  
            <div className='instructions-icon-container'>
              <AiFillFile size={20} className='model-file-icon'/>
              <input placeholder='Special instructions...' type='text' className='special-instructions-input'
              onChange={e=> this.setState((prevState)=>({sidesItemsData:{...prevState.sidesItemsData,secialInstructions:e.target.value}}))
              } value={sidesItemsData.secialInstructions}
              />
            </div>

            {sidesItemsData.showError && (
              <div className='error-model-container'>
                <BiErrorCircle size={20} className='model-error-icon'/>
                <p className='model-error-msg'>Please correct any options marked in red</p>
              </div>
            )}
            
            <div className='model-count-add-to-card-container'>
              <div className='increase-descrese-count-container'>
                <button className='increse-descrease-icon' 
                onClick={()=>{
                  const {sidesItemsData}=this.state 
                  let i = sidesItemsData.itemsCount
                  let iPrice=sidesItemsData.itemPrice
                  if(sidesItemsData.itemsCount >1 ){
                      i-=1
                      iPrice =sidesItemsData.itemPrice-sidesItemsData.actualPrice
                  }
                  
                  this.setState((prevState)=>({sidesItemsData:{...prevState.sidesItemsData , itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiMinus size={20}/></button>
                <button className='increse-descrease-icon'>{sidesItemsData.itemsCount}</button>
                <button className='increse-descrease-icon'
                onClick={()=>{
                  const {sidesItemsData}=this.state 
                  let i=1;
                  i+=sidesItemsData.itemsCount
                  const iPrice =sidesItemsData.itemPrice+sidesItemsData.actualPrice
                  this.setState((prevState)=>({sidesItemsData:{...prevState.sidesItemsData , itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiPlus size={20}/></button>
              </div>  
             
              {sidesItemsData.type==='add' ? (<buttton className='add-to-card-model-button' onClick={this.addSidesToModel} >Add To Cart</buttton>):(
                <buttton className='add-to-card-model-button' onClick={this.updateSidesInfinals}>Upadte Item</buttton>
              ) }
            </div>
         </div>  
        </div>
                </div>
              </div>
              
           
          )}

          {toggleNonVegModel && (
            <div className='pop_up_container'>
              <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button' onClick={()=>this.setState({toggleNonVegModel:false,nonVegItemData:initialNonVegItemData})}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                   </svg>
                    </button>
                </div>
                <div>
                  <div className='item-model-container-div'>
                    <div className='item-price-description-container'>
                      <div>
                        <h1 className='item-model-heading'>{nonVegItemData.itemName}</h1>
                        <p className="item-model-category">{nonVegItemData.itemCategory}</p>  
                      </div>
                      <p className='item-model-price'>${nonVegItemData.itemPrice.toFixed(2)}</p>
                    </div>    
                    <p className='item-non-model-description'>{nonVegItemData.itemDescription}</p> 
                  </div>
                  <div className='select-sauces-container'>
                    {nonVegItemData.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Base Option</h1>
                      <p className='error-select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                    {!nonVegItemData.showErrorForBaseOption && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Base Option</h1>
                      <p className='select-up-to-para'>Select one (Required)</p>
                     </div>
                    )}
                   {nonVegItemData.showBaseOptions? (<button className='select-up-to-button-container' 
                    onClick={()=>this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,showBaseOptions:!nonVegItemData.showBaseOptions}}))}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,showBaseOptions:!nonVegItemData.showBaseOptions}}))}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 
                  {nonVegItemData.showBaseOptions && (
                 <ul className='sauces-swirls-items-bg-container'>
                {nonVegItemData.baseOptionsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {nonVegItemData}=this.state 
                            const {baseOptionsList,itemPrice}=nonVegItemData
                            
                            let IP=itemPrice;
                            let duplicates=baseOptionsList.map((thing)=>{
                              if(thing.id===sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else if (thing.id===sause.id && thing.isSelected===false){
                                IP=IP+thing.price
                                return {...thing,isSelected:true}
                              }
                              else if(thing.id!==sause.id && thing.isSelected===true){
                                IP=IP-thing.price
                                return {...thing,isSelected:false}
                              }
                              else {
                                return thing
                              }
                            })
                           
                                           
                            this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,baseOptionsList:duplicates,itemPrice:IP}}))
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  


                  <div className='select-sauces-container'>
                    {nonVegItemData.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Toppings</h1>
                      <p className='error-select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                    {!nonVegItemData.showErrorForExtraToppings && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Toppings</h1>
                      <p className='select-up-to-para'>Select up to 5 (Optional)</p>
                     </div>
                    )}
                   {nonVegItemData.showExtraToppings? (<button className='select-up-to-button-container' 
                    onClick={()=>this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,showExtraToppings:!nonVegItemData.showExtraToppings}}))}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,showExtraToppings:!nonVegItemData.showExtraToppings}}))}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 

                  {nonVegItemData.showExtraToppings && (
                 <ul className='sauces-swirls-items-bg-container'>
                {nonVegItemData.extraToppingsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {nonVegItemData}=this.state 
                            const {extraToppingsList,itemPrice}=nonVegItemData
                            let duplicates = extraToppingsList.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }                       
                            this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,extraToppingsList:duplicates,itemPrice:IP}}))
                          }}
                          ><Switch checked={sause.isSelected} size={15}/></p>                     
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}  

                  <div className='select-sauces-container'>
                    {nonVegItemData.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='error-extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='error-select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                    {!nonVegItemData.showErrorForSouces && (
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Extra Swirls / Sauces</h1>
                      <p className='select-up-to-para'>Select up to 3 (Optional)</p>
                     </div>
                    )}
                   {nonVegItemData.showSouces ? (<button className='select-up-to-button-container' 
                    onClick={()=>this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,showSouces:!nonVegItemData.showSouces}}))}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,showSouces:!nonVegItemData.showSouces}}))}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div>   
                  {nonVegItemData.showSouces && (
                 <ul className='sauces-swirls-items-bg-container'>
                {nonVegItemData.swirlsSauces.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.text}</p>
                      <div className='sause-price-switch-container'>
                        <p className='sause-price'>+${sause.price.toFixed(2)}</p>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {nonVegItemData}=this.state 
                            const {swirlsSauces,itemPrice}=nonVegItemData
                            let duplicates = swirlsSauces.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })
                            let IP=0;
                            if(sause.isSelected===false){
                               IP=itemPrice+sause.price
                            }
                            else{
                               IP=itemPrice-sause.price
                            }                       
                            this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,swirlsSauces:duplicates,itemPrice:IP}}))
                          }}
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}   
                {nonVegItemData.ingredientsList.length>0 && (
                  <div className='select-sauces-container'>
                     <div className='souces-select-up-container'>
                      <h1 className='extra-sauces-heading'>Ingredients</h1>
                      <p className='select-up-to-para'>Un-check to remove</p>
                     </div>
                    
                   {nonVegItemData.showIngredients? (<button className='select-up-to-button-container' 
                    onClick={()=>this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,showIngredients:!nonVegItemData.showIngredients}}))}
                    ><IoIosArrowUp size={20}/></button>):
                   (<button 
                    onClick={()=>this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,showIngredients:!nonVegItemData.showIngredients}}))}
                    className='select-up-to-button-container'><IoIosArrowDown size={20}/></button>)}
                  </div> 
                )}

                {nonVegItemData.showIngredients && (
                 <ul className='sauces-swirls-items-bg-container'>
                {nonVegItemData.ingredientsList.map((sause)=>{
                  return(
                    <li className='sause-list'>
                      <p className='sause-name'>{sause.name}</p>
                      <div className='sause-price-switch-container'>
                          <p className='switch-button' 
                          onClick={()=>{
                            const {nonVegItemData}=this.state 
                            const {ingredientsList}=nonVegItemData
                            let duplicates = ingredientsList.map((thing)=>{
                              if(thing.id===sause.id){
                                return {...thing, isSelected:!thing.isSelected}
                              }
                              return thing 
                            })                
                            this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,ingredientsList:duplicates}}))
                          }}
                          ><Switch size={15} checked={sause.isSelected} className='toggle-Switch-icon'/></p>  

                       </div>
                    </li>
                  )
                })}
              </ul>
            )}  
                  
                  


                
                   

            

            <div className='instructions-icon-container'>
              <AiFillFile size={20} className='model-file-icon'/>
              <input placeholder='Special instructions...' type='text' className='special-instructions-input'
              onChange={e=> this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData,secialInstructions:e.target.value}}))
              } value={nonVegItemData.secialInstructions}
              />
            </div>

            {nonVegItemData.showError && (
              <div className='error-model-container'>
                <BiErrorCircle size={20} className='model-error-icon'/>
                <p className='model-error-msg'>Please correct any options marked in red</p>
              </div>
            )}





            <div className='model-count-add-to-card-container'>
              <div className='increase-descrese-count-container'>
                <button className='increse-descrease-icon' 
                onClick={()=>{
                  const {nonVegItemData}=this.state 
                  
                  let i = nonVegItemData.itemsCount
                  let iPrice=nonVegItemData.itemPrice
                  if(nonVegItemData.itemsCount >1 ){
                      i-=1
                      iPrice =nonVegItemData.itemPrice-nonVegItemData.actualPrice
                  }
                  
                 
                  
                  
                  this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData , itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiMinus size={20}/></button>
                <button className='increse-descrease-icon'>{nonVegItemData.itemsCount}</button>
                <button className='increse-descrease-icon'
                onClick={()=>{
                  const {nonVegItemData}=this.state 
                  let i=1;
                  i+=nonVegItemData.itemsCount
                  const iPrice =nonVegItemData.actualPrice+nonVegItemData.itemPrice
                  this.setState((prevState)=>({nonVegItemData:{...prevState.nonVegItemData, itemPrice:iPrice,itemsCount:i}}))
                }}
                ><BiPlus size={20}/></button>
              </div>  
             
              {nonVegItemData.type==='add' ? (<buttton className='add-to-card-model-button' onClick={this.addVegItemsModel}  >Add To Cart</buttton>):(
                <buttton className='add-to-card-model-button' onClick={this.updateItemSidesInfinals}>Upadte Item</buttton>
              ) }
            </div>




            </div>
            
                       
           
              
              </div>
              </div>
         
          )}
          
          {showPlaceOrderModel && (
            <div className='pop_up_container'>
              <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button' onClick={()=>this.setState({showPlaceOrderModel :false,placeOrderData:initialPlaceOrderDetails})}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                   </svg>
                    </button>
                </div>
                <div>
                  <div className='proceed-to-check-model-body-container'>
                     <div className='confirm-container'>
                       <h1 className='check-out-heading'>Checkout</h1>
                       <p className='confirm-order-para'>Confirm your order details</p>
                     </div>
                     <div className='question-answer-container'>
                      <p className='question'>Service</p>
                      <p className='answer'>{placeOrderData.service}</p>
                     </div>
                     <div className='question-answer-container'>
                      <p className='question'>Due</p>
                      <p className='answer'>{placeOrderData.due}</p>
                     </div>
                     <div className='question-answer-container'>
                      <p className='question'>Store Address</p>
                      <p className='answer'>{placeOrderData.storeAddress}</p>
                     </div>
                     <div className='question-answer-container'>
                      <p className='question'>Total</p>
                      <p className='answer'>{total.toFixed(2)}</p>
                     </div>
                     {!isLogin && (
                      <div className='login-order-container'>
                        <div>
                          <h1 className='check-out-heading'>Customer</h1>
                          <p className='confirm-order-para'>Login to save your order & details</p>
                        </div>
                        <button className='login-order-button' data-toggle="modal" data-target="#favouriteModel">Login</button>
                      </div>
                     ) }
                     {isLogin && (
                      <div className='login-order-container'>
                      <h1 className='check-out-heading'>Customer</h1>
                      </div>
                     )}
                     <input className='data-enter-order-input' placeholder='Full Name' type='text' value={placeOrderData.name}
                      onChange={e=>this.setState((prevState)=>({placeOrderData:{...prevState.placeOrderData,name:e.target.value}}))}
                     />
                     <input className='data-enter-order-input' placeholder='E-mail Address' type='email' value={emailInput} 
                      onChange={e=>this.setState({emailInput:e.target.value})}
                     />
                     <input className='data-enter-order-input' placeholder='Phone Number' type='text' value={placeOrderData.phoneNumber}
                      onChange={e=>this.setState((prevState)=>({placeOrderData:{...prevState.placeOrderData,phoneNumber:e.target.value}}))}
                     />
                     <input className='data-enter-order-input' placeholder='Order Notes' type='text' value={placeOrderData.orderNote}
                      onChange={e=>this.setState((prevState)=>({placeOrderData:{...prevState.placeOrderData,orderNote:e.target.value}}))}
                     />
                     <div className='login-order-container'>
                       <h1 className='check-out-heading'>Payment Method</h1>
                     </div>
                     <div className='paymnet-method-container'>
                       <input className='checkbox-method' type='radio' name='method'
                        onChange={e=>this.setState((prevState)=>({placeOrderData:{...prevState.placeOrderData,paymentMethod:'Online'}}))}
                       />
                       <h1 className='payment-type-heading'>Card Online</h1>
                     </div>
                     <div className='paymnet-method-container-bank'>
                       <input className='checkbox-method' type='radio'  name='method'
                        onChange={e=>this.setState((prevState)=>({placeOrderData:{...prevState.placeOrderData,paymentMethod:'Bank'}}))}
                       />
                       <h1 className='payment-type-heading'>Bank Transfer</h1>
                     </div>
                     <div className='types-container'>
                      <img src='https://pizzaboyz.booknorder.co.nz/payment-logos/mastercard.png' alt='mastercard' className='card-image'/>
                      <img src='https://pizzaboyz.booknorder.co.nz/payment-logos/visa.png' alt='visa' className='card-image'/>
                      <img src='https://pizzaboyz.booknorder.co.nz/payment-logos/american-express.png' alt='american' className='card-image'/>
                     </div>
                    {placeOrderData.paymentMethod==='Online' && (
                      <div className='cards-amounts-online-container'>
                       <div className='credit-card-container'>

                          <CreditCardInput
  cardCVCInputRenderer={({ handleCardCVCChange, props }) => (
    <input
      {...props}
      onChange={handleCardCVCChange(e =>this.setState((prevState)=>({CardDetails:{...prevState.CardDetails,cvc:e.target.value}})))}
    />
  )}
  cardExpiryInputRenderer={({ handleCardExpiryChange, props }) => (
    <input
      {...props}
      onChange={handleCardExpiryChange(e =>
        this.setState((prevState)=>({CardDetails:{...prevState.CardDetails,expiry:e.target.value}}))
      )}
    />
  )}
  cardNumberInputRenderer={({ handleCardNumberChange, props }) => (
    <input
      {...props}
      onChange={handleCardNumberChange(e =>
        this.setState((prevState)=>({CardDetails:{...prevState.CardDetails,number:e.target.value}}))
      )}
    />
  )}
/>

</div>              
                         
                   
                        <div className='credit-debit-fee-container'>Credit / Debit Card Fee - 
                        <span className='fee-amount'>$0.78</span></div>
                     </div>
                    )}

                     <div className='place-order-conditions-container'>
                       <input className='accept-conditions-input' type='checkbox' checked={placeOrderData.isAcceptConditions}
                         onChange={e=>this.setState((prevState)=>({placeOrderData:{...prevState.placeOrderData,isAcceptConditions:!placeOrderData.isAcceptConditions}}))}
                       />
                       <p className='answer' >I accept the terms & conditions - <span onClick={()=>this.setState((prevState)=>({showTermaAndConditionsModel:!prevState.showTermaAndConditionsModel}))} className='view-conditions'>View</span></p>
                     </div>
                     
                     {placeOrderData.ErrorMsg !== '' && (
              <div className='error-model-container'>
                <BiErrorCircle size={20} className='model-error-icon'/>
                <p className='model-error-msg'>{placeOrderData.ErrorMsg}</p>
              </div>
            )}
             
                 <div className='place-order-button-container'>
                  <button className='place-order-submit-button' 
                  onClick={this.placeOrderDetailsVerify}
                  >
                     Place Order
                  </button>
                 </div>

                  </div>
                </div>
              </div>
            </div>
          )}
        

         <div class="modal fade" id="showTermsConditionsModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div class="modal-dialog">
            <div class="modal-content model-conditions-body" >
             <div>
             <div className='pop_up_header'>
                    <button data-dismiss="modal" className='cancel-button' onClick={()=>this.setState({toggleDishesSauseModel:false})}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                   </svg>
                    </button>
              </div>
              <div className='condition-terms-bg-container'>
                 <div className='terms-conditions-hedaing-container'>
                   <h1 className='terms-conditions-heading'>Terms & Conditions</h1>
                  </div>
                 <div className='heading-condition-data-container'>
                   <h1 className='condition-heading'>Disclaimer</h1>
                   <p className='condition-matter'>The terms 'we' or 'our' makes reference to Book N Order Ltd and/or Pizza Boyz. Our terms and conditions are subject to change without notice.</p>
                   <p className='condition-matter'>By using our site or placing on order, you are agreeing to the terms below. To the extent permitted by law, we disclaim liability from any issues caused from usage of our site and system.</p>
                 </div>
                 <div className='heading-condition-data-container'>
                   <h1 className='condition-heading'>Order Changes</h1>
                   <p className='condition-matter'>Orders that are already made can no longer be modified or changed. If an order is not made or it has been place at a later date, we will allow changes. Please contact us immediately to make any changes.</p>
                 </div>
                 <div className='heading-condition-data-container'>
                   <h1 className='condition-heading'>Order Cancellation</h1>
                   <p className='condition-matter'>We reserve the right to cancel an order without providing reason but may be due to unavailability or an error in the pricing with our products.</p>
                   <p className='condition-matter'>We will always inform you of any changes to your order and provide a refund if an order is cancelled by us. We will not be held liable for any damages by exercising this right.</p>
                   <p className='condition-matter'>If you wish to cancel your order, please notify us immediately. Order cancellation is at our sole discretion. If your food has not been made yet, we will generally allow you to cancel and provide a refund. Once your order is made, you will no longer be able to cancel your order.</p>
                 </div>
                <h1 className='deliveries-heading'>Deliveries</h1>
                <div className='deriveries-container'>
                  <h1 className='condition-heading'>Address</h1>
                  <p className='condition-matter'>You are responsible for ensuring that the delivery address for their order is correct and unambiguous. We cannot guarantee a successful delivery if this condition is not met. If further explanation is needed, it should be provided in the 'notes' section</p>
                </div>
                <div className='deriveries-container'>
                  <h1 className='condition-heading'>Delivery Time</h1>
                  <p className='condition-matter'>Our drivers will strive to deliver your order in the appointed time. However, unexpected delays may occur. Please be aware that restaurants can occasionally be delayed in their preparation, which we are not liable for. Additionally, drivers may get delayed due to bad weather or traffic conditions. We will do our best to notify you of any delays.</p>
                </div>
                <div className='deriveries-container'>
                  <h1 className='condition-heading'>Service Availability</h1>
                  <p className='condition-matter'>We reserve the right to disable our delivery service due to factors out of our control, like weather conditions, driver availability and other</p>
                </div>
                <div className='deriveries-container'>
                  <h1 className='condition-heading'>Receiving your order</h1>
                  <p className='condition-matter'>Upon arrival, the driver will attempt to make contact with you by ringing the doorbell or calling the provided phone number. If the call is not answered or the provided number is not available, and if contact cannot be made within 5 minutes, the driver will place the order in a safe place. For verification purposes, you may be asked in person to confirm details about your order.</p>
                </div>
                <div className='deriveries-container'>
                  <h1 className='condition-heading'>Delivery Food Quality</h1>
                  <p className='condition-matter'>We are not liable for the quality, quantity or packaging of the food you ordered. If something is missing or the restaurant got your order wrong, kindly contact them to rectify it</p>
                </div>

                <div className='heading-condition-data-container'>
                  <h1 className='condition-heading'>Refunds</h1>
                  <p className='condition-matter'>Book n Order is committed to customer satisfaction. If something about your order was wrong, you may be issued a complete or partial refund depending on the circumstances. If you believe that your order was not as 
                  described on the ordering page, contact us to help resolve the issue. All refund requests will be confirmed with the respective restaurants and delivery drivers before proceeding. Providing false information to our staff in order to sway the outcome of a refund request may result in being banned from our platform.</p>
                  <p className='condition-matter'>Refunds will not be given for making the wrong order or choice. If you believe your order was not as advertised, please contact
                   us and we will help resolve the issue. If a refund is issued, we will do it via the method you made payment.</p>
                  <p className='condition-matter'>If payment is made via credit-card or EFTPOS, refunds can take up to 2 weeks to process but will generally take 3-5 business days.</p>
                </div>
                
                <div className='heading-condition-data-container'>
                  <h1 className='condition-heading'>Copyright</h1>
                  <p className='condition-matter'>All images and content on our site is either copyright to Pizza Boyz or our 3rd party lincesors and must not be distributed, modified, reproduced or used for any purpose without our prior consent which can be refused at our discretion. This site may be printed but cannot be modified or used in any way for any commercial purpose.</p>
                </div>
                
                <div className='heading-condition-data-container'>
                  <h1 className='condition-heading'>Privacy</h1>
                  <p className='condition-matter'>Your privacy is critical to us. We will never ask for information unless we need it, we will never share your information with anyone except to comply with the law or further develop our product or business and protect our rights.</p>
                  <p className='condition-matter'>Usage of this site does require that you accept usage of third party tracking libraries such as Google Analytics to enable site improvements. This data will never be correlated to any personal information of any kind.</p>
                </div>
                <div className='heading-condition-data-container'>
                  <h1 className='condition-heading'>Misc.</h1>
                  <p className='condition-matter'>Please advise of any dietary requirements or allergies.</p>
                  <p className='condition-matter'>All prices are subject to change without notice.</p>
                </div>
                <div className='heading-condition-data-container'>
                  <h1 className='condition-heading'>Website</h1>
                  <p className='condition-matter'>By using this website, you are agreeing to our terms and conditions. We will do our best to ensure that all information on our website is accurate. We will not be liable for any damages that arise from incorrect or missing information and performance issues. Our site makes use of third party content, we do not give any representation or endorsement of these brands or products.</p>
                  
                </div>
                 
              </div>
            </div>
           </div>
          </div>
          </div>


          {showTermaAndConditionsModel && (
            <div className='pop_up_container'>
              <div className='popup_dishner'></div>
              <div className='pop_up_body'>
                <div className='pop_up_header'>
                    <button className='cancel-button' onClick={()=>this.setState((prevState)=>({showTermaAndConditionsModel:!prevState.showTermaAndConditionsModel}))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                   </svg>
                    </button>
                </div>
                <div className='condition-terms-bg-container'>
                 <div className='terms-conditions-hedaing-container'>
                   <h1 className='terms-conditions-heading'>Terms & Conditions</h1>
                  </div>
                 <div className='heading-condition-data-container'>
                   <h1 className='condition-heading'>Disclaimer</h1>
                   <p className='condition-matter'>The terms 'we' or 'our' makes reference to Book N Order Ltd and/or Pizza Boyz. Our terms and conditions are subject to change without notice.</p>
                   <p className='condition-matter'>By using our site or placing on order, you are agreeing to the terms below. To the extent permitted by law, we disclaim liability from any issues caused from usage of our site and system.</p>
                 </div>
                 <div className='heading-condition-data-container'>
                   <h1 className='condition-heading'>Order Changes</h1>
                   <p className='condition-matter'>Orders that are already made can no longer be modified or changed. If an order is not made or it has been place at a later date, we will allow changes. Please contact us immediately to make any changes.</p>
                 </div>
                 <div className='heading-condition-data-container'>
                   <h1 className='condition-heading'>Order Cancellation</h1>
                   <p className='condition-matter'>We reserve the right to cancel an order without providing reason but may be due to unavailability or an error in the pricing with our products.</p>
                   <p className='condition-matter'>We will always inform you of any changes to your order and provide a refund if an order is cancelled by us. We will not be held liable for any damages by exercising this right.</p>
                   <p className='condition-matter'>If you wish to cancel your order, please notify us immediately. Order cancellation is at our sole discretion. If your food has not been made yet, we will generally allow you to cancel and provide a refund. Once your order is made, you will no longer be able to cancel your order.</p>
                 </div>
                <h1 className='deliveries-heading'>Deliveries</h1>
                <div className='deriveries-container'>
                  <h1 className='condition-heading'>Address</h1>
                  <p className='condition-matter'>You are responsible for ensuring that the delivery address for their order is correct and unambiguous. We cannot guarantee a successful delivery if this condition is not met. If further explanation is needed, it should be provided in the 'notes' section</p>
                </div>
                <div className='deriveries-container'>
                  <h1 className='condition-heading'>Delivery Time</h1>
                  <p className='condition-matter'>Our drivers will strive to deliver your order in the appointed time. However, unexpected delays may occur. Please be aware that restaurants can occasionally be delayed in their preparation, which we are not liable for. Additionally, drivers may get delayed due to bad weather or traffic conditions. We will do our best to notify you of any delays.</p>
                </div>
                <div className='deriveries-container'>
                  <h1 className='condition-heading'>Service Availability</h1>
                  <p className='condition-matter'>We reserve the right to disable our delivery service due to factors out of our control, like weather conditions, driver availability and other</p>
                </div>
                <div className='deriveries-container'>
                  <h1 className='condition-heading'>Receiving your order</h1>
                  <p className='condition-matter'>Upon arrival, the driver will attempt to make contact with you by ringing the doorbell or calling the provided phone number. If the call is not answered or the provided number is not available, and if contact cannot be made within 5 minutes, the driver will place the order in a safe place. For verification purposes, you may be asked in person to confirm details about your order.</p>
                </div>
                <div className='deriveries-container'>
                  <h1 className='condition-heading'>Delivery Food Quality</h1>
                  <p className='condition-matter'>We are not liable for the quality, quantity or packaging of the food you ordered. If something is missing or the restaurant got your order wrong, kindly contact them to rectify it</p>
                </div>

                <div className='heading-condition-data-container'>
                  <h1 className='condition-heading'>Refunds</h1>
                  <p className='condition-matter'>Book n Order is committed to customer satisfaction. If something about your order was wrong, you may be issued a complete or partial refund depending on the circumstances. If you believe that your order was not as 
                  described on the ordering page, contact us to help resolve the issue. All refund requests will be confirmed with the respective restaurants and delivery drivers before proceeding. Providing false information to our staff in order to sway the outcome of a refund request may result in being banned from our platform.</p>
                  <p className='condition-matter'>Refunds will not be given for making the wrong order or choice. If you believe your order was not as advertised, please contact
                   us and we will help resolve the issue. If a refund is issued, we will do it via the method you made payment.</p>
                  <p className='condition-matter'>If payment is made via credit-card or EFTPOS, refunds can take up to 2 weeks to process but will generally take 3-5 business days.</p>
                </div>
                
                <div className='heading-condition-data-container'>
                  <h1 className='condition-heading'>Copyright</h1>
                  <p className='condition-matter'>All images and content on our site is either copyright to Pizza Boyz or our 3rd party lincesors and must not be distributed, modified, reproduced or used for any purpose without our prior consent which can be refused at our discretion. This site may be printed but cannot be modified or used in any way for any commercial purpose.</p>
                </div>
                
                <div className='heading-condition-data-container'>
                  <h1 className='condition-heading'>Privacy</h1>
                  <p className='condition-matter'>Your privacy is critical to us. We will never ask for information unless we need it, we will never share your information with anyone except to comply with the law or further develop our product or business and protect our rights.</p>
                  <p className='condition-matter'>Usage of this site does require that you accept usage of third party tracking libraries such as Google Analytics to enable site improvements. This data will never be correlated to any personal information of any kind.</p>
                </div>
                <div className='heading-condition-data-container'>
                  <h1 className='condition-heading'>Misc.</h1>
                  <p className='condition-matter'>Please advise of any dietary requirements or allergies.</p>
                  <p className='condition-matter'>All prices are subject to change without notice.</p>
                </div>
                <div className='heading-condition-data-container'>
                  <h1 className='condition-heading'>Website</h1>
                  <p className='condition-matter'>By using this website, you are agreeing to our terms and conditions. We will do our best to ensure that all information on our website is accurate. We will not be liable for any damages that arise from incorrect or missing information and performance issues. Our site makes use of third party content, we do not give any representation or endorsement of these brands or products.</p>
                  
                </div>
                 
              </div>
              </div>
            </div>
          )}
          
        

       

       


        <div className='services-timings-location-container'>
          <div className='services-container'>
             <div className='services-profile-name-container'>
                <div className='icon-bg-container'>
                  <BsFillHandbagFill size={20} className='service-icon'/>
                </div>
                 <h1 className='services-heading'>Services</h1>
             </div>
             <div className='pickup-container'>
                 <p className='pickup-para'>Pickup</p>
             </div>
          </div>

          <div className='services-container'>
            <div className='services-profile-name-container'>
                <div className='icon-bg-container'>
                  <BsClock size={20} className='service-icon'/>
                </div>
                 <h1 className='services-heading'>Opening Hours</h1>
             </div>
             <div className='time-day-container'>
                <p className='service-day'>Monday</p>
                <p className='service-time'>03:00 pm - 11:00 pm</p>
             </div>
             <div className='time-day-container'>
                <p className='service-day'>Tuesday</p>
                <p className='service-time'>11:00 am - 11:00 pm</p>
             </div>
             <div className='time-day-container'>
                <p className='service-day'>Wednesday</p>
                <p className='service-time'>11:00 am - 11:00 pm</p>
             </div>
             <div className='time-day-container'>
                <p className='service-day'>Thursday</p>
                <p className='service-time'>11:00 am - 11:00 pm</p>
             </div>
             <div className='time-day-container'>
                <p className='service-day'>Friday</p>
                <p className='service-time'>11:00 am - 11:00 pm</p>
             </div>
             <div className='time-day-container'>
                <p className='service-day'>Saturday</p>
                <p className='service-time'>11:00 am - 11:00 pm</p>
             </div>
             <div className='time-day-container'>
                <p className='service-day'>Sunday</p>
                <p className='service-time'>11:00 am - 11:00 pm</p>
             </div>
          </div>

          <div className='services-container'>
            <div className='services-profile-name-container'>
                <div className='icon-bg-container'>
                  <MdLocationPin size={20} className='service-icon'/>
                </div>
            </div>
            <div className='location-contact-container'>
                <h1 className='services-heading'>Location</h1>
                 <p className='location-para'>
                  5/182 West Coast Road, Glen Eden, Auckland 0602, New Zealand
                 </p>
                 
                 <button className='view-map-button'
                 data-toggle="modal" data-target="#viewMapModel"
                 >View Map</button>
                 <p className='phone'>Phone</p>
                 <p className='number'>09 600 1116</p>
            </div>
            
          </div>
        </div>

        <div class="modal fade" id="viewMapModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="view-close-cancel-button">
                <span aria-hidden="true">&times;</span>
                </button>
              </div>
            <div class="modal-body">
              <iframe title="description" className='view-map-image' height="200" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=300&amp;hl=en&amp;q=5/182%20West%20Coast%20Road,%20Glen%20Eden,%20Auckland%200602,%20New%20Zealand+(Glen%20Eden)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.maps.ie/population/">Find Population on Map</a>
              </iframe> 
              <p className='model-location-para'>5/182 West Coast Road, Glen Eden, Auckland 0602, New Zealand</p>
            <a href='https://www.google.com/maps/search/?api=1&query=-36.9107932,174.6533042' target='__blank'
             >
              <p className='model-view-in-mapa-para' >View In Google Maps</p>
             </a>
            </div>
          </div>
        </div>
      </div>

      {showServiceModel && (
      <div className='pop_up_container'>
        <div className='popup_dishner'></div>
          <div className='pop_up_body'>
            <div className='pop_up_header'>
              <button className='cancel-button' onClick={()=>this.setState({showServiceModel :false})}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='cancel-button-icon'>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
              </button>
            </div>
            <div className='service-bg-body-container'>
               <h1 className='choose-service-heading'>Choose A Service</h1>
               <div className='pickup-delivery-container'>
                  <div className={pickupClass} onClick={()=>{
                    const {orderDetails}=this.state 
                    const {serviceTypes}=orderDetails
                    this.setState((prevState)=>({orderDetails:{...prevState.orderDetails,activeDeliveryTypeId:serviceTypes[0].id,text:true,showErrorForNotChoosingOrderType:false}}))
                  }}>
                    <BiSolidShoppingBag size={30}/>
                    <p className='pickup-heading'>Pickup</p>
                  </div>
                  <div className={deliveryClass} onClick={()=>{
                    const {orderDetails}=this.state 
                    const {serviceTypes}=orderDetails
                    this.setState((prevState)=>({orderDetails:{...prevState.orderDetails,activeDeliveryTypeId:serviceTypes[1].id,showErrorForNotChoosingOrderType:false,text:false}}))
                  }}>
                    <RiEBike2Fill size={30}/>
                    <p className='pickup-heading'>Delivery</p>
                  </div>
               </div>
               
               {orderDetails.showErrorForNotChoosingOrderType && <p className='no-service-choosen-error'>Please Choose Service!</p>}
               {orderDetails.text && <p className='pickup-select-text'>Order Will be ready in 10 minutes after you place the order</p>}
               <button className='start-order-button' onClick={()=>{
                const {activeDeliveryTypeId}=orderDetails;
                if(activeDeliveryTypeId===''){
                  console.log("error");
                   this.setState((prevState)=>({orderDetails:{...prevState.orderDetails,showErrorForNotChoosingOrderType:true}}))
                 
                }
                else{
                 this.setState((prevState)=>({showServiceModel:false,isServiceChoosed:true,orderDetails:{...prevState.orderDetails,showErrorForNotChoosingOrderType:false}}))
                }
                }}>
                Start Order
               </button>
            </div>
        </div>

      </div>
    )
    } 

       


        <div className='order-footer-bg-container'>
          <div className='order-footer-container'>
            <div className='social-media-icons-container'>
              <a href='https://www.facebook.com/pizzaboyz.gleneden/' target='__blank'>
                <AiFillFacebook size={30} className='order-insta-icon'/>
              </a>
              <a href='https://www.instagram.com/pizzaboyz.gleneden/' target='__blank'>
                <BsInstagram size={30} className='insta-icon'/>
                </a>
                </div>
                <hr className='footer-line'/>
                <p className='order-footer-para'>Powered by <a href='https://www.booknorder.co.nz/' target='__blank' className='order-footer-link'> Book N Order</a></p>                       
            </div>
        </div>


    </div>


    )
  }
}

export default OrderViewPage