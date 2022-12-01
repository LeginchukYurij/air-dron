import { useParams } from 'react-router-dom';
import {
    CategoriesBox,
    DefaultLayout,
    ProductCardContainer,
    Sidebar,
    Title
} from '../components';
import { 
    Content,
    FrameBox, 
    Container,
    ContainerWithSidebar, 
    GridContainer,
    PageTitle } from '../styledComponents';

import { useCategory } from '../hooks/useCategory';
import { useProductsByCategory } from '../hooks/useProductsByCategory';
import { useEffect } from 'react';
import { removeSelectedCategory } from '../redux/products/categoriesSlice';
import { useDispatch } from 'react-redux';
import { removeProducts } from '../redux/products/productsSlice';
import { Notification } from '../UI';


const Category = () => {
    const dispatch = useDispatch()
    const { categorySlug } = useParams();
    const {name} = useCategory(categorySlug);
    const products = useProductsByCategory(categorySlug);

    useEffect(() => {
        return () => {
            dispatch(removeSelectedCategory());
            dispatch(removeProducts());
        };
    }, [categorySlug]);

    return (
        <DefaultLayout>
            <Container>
                <ContainerWithSidebar sidebarPos="left">
                    <Sidebar>
                        <Title level={2}>Категорії</Title>
                        <FrameBox>
                            <CategoriesBox />
                        </FrameBox>
                    </Sidebar>

                    <Content>
                        <PageTitle>{ name }</PageTitle>
                        <GridContainer>
                            {products?.map(product =>
                                <ProductCardContainer key={product.id} product={product} />)}
                        </GridContainer>
                    </Content>
                </ContainerWithSidebar>
            </Container>

            <Notification />
        </DefaultLayout>
    )
}

export default Category;