import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider' 
import { auth } from '../firebase';

function Header() {

    const [{basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" alt=""/>
            </Link>
            
            <div className="header__search">
                <input className='header__searchInput' type="text"/>
                <SearchIcon className='header__searchIcon'/>
            </div>
            
            <div className="header__nav">

                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="Header__optionLineOne">Hello Guest</span>
                        <span className="Header__optionLineTwo">{user ? `Sign Out` : `Sign In`}</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="Header__optionLineOne">Returns</span>
                    <span className="Header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="Header__optionLineOne">Your</span>
                    <span className="Header__optionLineTwo">Price</span>
                </div>
                
                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="Header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        
        
        </div>
    )
}

export default Header
