import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import fakeData from '../../fakeData/RideData';

const Home = () => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        const data =fakeData;
        setCart(data);
    }, [])

    return (
        <div className="cart" style={{display: 'flex', marginLeft: '8%', marginRight: '8%'}} >
            {
                cart.map(cart => <Cart cart={cart}></Cart>)
            }
           
        </div>
    );
};

export default Home;