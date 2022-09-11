import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();


    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/digital/music/merch/India/2017/Weekly/0912/Download_the_apps_music_india_hero.jpg" alt=""/>   
            
                <div className="checkout__title">
                    <h3>Hello, {user?.email}</h3>
                    <h2>Your Shopping Basket</h2>
                    
                    {basket.map(item => (
                        <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating }/>                    
                    ))}
    

                </div>
            </div>



            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
