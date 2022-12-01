import React from 'react'
import { useSelector } from 'react-redux'
import { CartItemContainer, DefaultLayout } from '../components';
import { CartTotalContainer } from '../components';
import { Container, ContainerWithSidebar, FrameBox, PageTitle } from '../styledComponents';

const Cart = () => {
    const {cart} = useSelector(state => state.cart);

    return (
        <DefaultLayout>
            <Container>
                <PageTitle>Кошик</PageTitle>
                <ContainerWithSidebar sidebarPos="right">
                    <FrameBox>
                        {cart?.map(item => <CartItemContainer 
                            key={item.id} item={item} />)}
                    </FrameBox>

                    <FrameBox style={{position: 'sticky', top: 20, height: 'fit-content'}}>
                        <CartTotalContainer />
                    </FrameBox>
                </ContainerWithSidebar>
            </Container>
        </DefaultLayout>
        
    )
}

export default Cart