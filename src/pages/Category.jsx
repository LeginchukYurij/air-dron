import { useParams } from 'react-router-dom';
import {
    CategoriesBox,
    DefaultLayout,
    ProductCard,
    Sidebar,
    Title
} from '../components';
import { 
    Content,
    FrameBox, 
    Container,
    ContainerWithAside, 
    GridContainer,
    PageTitle } from '../styledComponents';

import { useCategory } from '../hooks/useCategory';
import { useProductsByCategory } from '../hooks/useProductsByCategory';


const Category = () => {
    const { categorySlug } = useParams();
    const {name} = useCategory(categorySlug);
    const products = useProductsByCategory(categorySlug);

    return (
        <DefaultLayout>
            <Container>
                <ContainerWithAside>
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
                                <ProductCard key={product.id} product={product} />)}
                        </GridContainer>
                    </Content>
                </ContainerWithAside>
            </Container>
        </DefaultLayout>
    )
}

export default Category;