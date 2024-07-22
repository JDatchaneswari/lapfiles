import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Card from './components/Card.jsx'
import './index.css'
const foodItems = [
  {
    title: "Chicken Tikka",
    imageUrl: "https://source.unsplash.com/1100x600/?tandoori",
    priceInRupees: 280,
    description: "Tender pieces of marinated chicken grilled to perfection, served with mint chutney.",
    type: "nonveg",
    ratings: 4.1,
    votes: 110
  },
  {
    title: "Paneer Tikka",
    imageUrl: "https://source.unsplash.com/1100x600/?paneer",
    priceInRupees: 220,
    description: "Soft cubes of paneer marinated in spices and grilled, served with tangy sauce.",
    type: "veg",
    ratings: 4.8,
    votes: 95
  },
  {
    title: "Spaghetti Carbonara",
    imageUrl: "https://source.unsplash.com/1100x600/?pasta",
    priceInRupees: 320,
    description: "Classic Italian pasta dish with creamy sauce, bacon, eggs, and Parmesan cheese.",
    type: "nonveg",
    ratings: 3.2,
    votes: 130
  },
  {
    title: "Veggie Burger",
    imageUrl: "https://source.unsplash.com/1100x600/?burger",
    priceInRupees: 200,
    description: "A delicious veggie burger made with a patty of mixed vegetables, lettuce, and special sauce.",
    type: "veg",
    ratings: 4.5,
    votes: 85
  },
  {
    title: "Fish and Chips",
    imageUrl: "https://source.unsplash.com/1100x600/?fish",
    priceInRupees: 350,
    description: "Crispy battered fish served with thick-cut fries and tartar sauce, a classic British dish.",
    type: "nonveg",
    ratings: 4.9,
    votes: 105
  },
  {
    title: "Mushroom Risotto",
    imageUrl: "https://source.unsplash.com/1100x600/?risotto",
    priceInRupees: 290,
    description: "Creamy Italian risotto cooked with Arborio rice, mushrooms, and Parmesan cheese.",
    type: "veg",
    ratings: 4.3,
    votes: 120
  },
  {
    title: "Chicken Shawarma",
    imageUrl: "https://source.unsplash.com/1100x600/?shawarma",
    priceInRupees: 270,
    description: "Juicy slices of chicken wrapped in warm pita bread with garlic sauce and fresh veggies.",
    type: "nonveg",
    ratings: 3.4,
    votes: 140
  },
  {
    title: "Veggie Spring Rolls",
    imageUrl: "https://source.unsplash.com/1100x600/?springrolls",
    priceInRupees: 180,
    description: "Crispy fried spring rolls filled with a mix of vegetables and served with sweet chili sauce.",
    type: "veg",
    ratings: 3.0,
    votes: 90
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(
         <>
        {/* <div className="container">
         {
          foodItems.map((item)=>{
            return <Card title={item.title} imageUrl={item.imageUrl}
            ratings={item.ratings} votes={item.votes} type={item.type}
            priceInRupees={item.priceInRupees} description={item.description}/>
          })
         }
        </div>*/}
        <App/>
         </>
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
)
