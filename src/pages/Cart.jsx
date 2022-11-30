import React from 'react'
import { DefaultContext } from 'react-icons';
import { useSelector } from 'react-redux'
import { DefaultLayout } from '../components';
import { Container } from '../styledComponents';

const Cart = () => {
    const {cart} = useSelector(state => state.cart);

    console.log(cart)

    return (
        <DefaultLayout>
            <Container>
                <div>Cart</div>
            </Container>
        </DefaultLayout>
        
    )
}

export default Cart