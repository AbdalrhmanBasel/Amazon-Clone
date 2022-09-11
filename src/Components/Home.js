import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt=""/>
            </div>

             <div className="home__row">
                 <Product title='Logitech G203 Prodigy RGB Wired Gaming Mouse – Black' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/71BmDZ6u22L._AC_SL1500_.jpg' rating={5} />
                 <Product title='Rich Dad Poor Dad' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg' rating={5} />
                 <Product title='Rich Dad Poor Dad' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg' rating={5} />
             </div>

             <div className="home__row">
                 <Product title='Rich Dad Poor Dad' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg' rating={5} />
                 <Product title='Rich Dad Poor Dad' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg' rating={5} />
             </div>

             <div className="home__row">                 
                 <Product title='Rich Dad Poor Dad' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg' rating={5} />
             </div>

             <div className="home__row">
                 <Product title='Rich Dad Poor Dad' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg' rating={5} />
                 <Product title='Rich Dad Poor Dad' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg' rating={5} />
                 <Product title='Rich Dad Poor Dad' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg' rating={5} />
             </div>

             <div className="checkout">
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/digital/music/merch/India/2017/Weekly/0912/Download_the_apps_music_india_hero.jpg" alt=""/>   
            </div>


        </div>
    )
}

export default Home
