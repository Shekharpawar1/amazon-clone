import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
return (
<>

    <div className="home">
        <div className="home__container">
          <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg" alt="home-pic"  />
        </div>
        <div className="home__row">
         
          <Product  id="234546456" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses " price={29.99} image="https://images-eu.ssl-images-amazon.com/images/I/51CTIr1bJxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" rating={4}/>
          <Product id="234546488"  title="Kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Liter Glass Bowl" price={239.0} image="https://m.media-amazon.com/images/I/716kTJI4jtL._SX679_.jpg"rating={4}/>
    
        </div>
        <div className="home__row">
          
             <Product id="234546555" price={238} rating={4} image="https://m.media-amazon.com/images/I/61ZXwnqqOuS._AC_UY327_FMwebp_QL65_.jpg" title="Fitbit Versa 3 Health & Fitness Smartwatch with GPS, 24/7 Heart Rate, Alexa Built-in, 6+ Days Battery, Black/Black, One Size (S & L Bands Included)"/>
             <Product  id="23454566" title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)" price={98.99} rating={4} image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SX679_.jpg"/>
             <Product  id="23453258" title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Space Grey (3rd Generation)" rating={4}image="https://m.media-amazon.com/images/I/815KnP2wjDS._SX679_.jpg"/>
          
        </div>
        <div className="home__row">
        <Product  id="354688456" title='Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)  ' rating={4} price={1094.88} image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX450_.jpg"/>
        
        </div>


    </div>

</>
)
}

export default Home