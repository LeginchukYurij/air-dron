import { DefaultLayout } from '../components';
import { Container, PageTitle } from '../styledComponents';

import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';


const Product = () => {
    const { permalink } = useParams();
    const {name} = useProduct(permalink);

    return (
        <DefaultLayout>
            <Container>
                <PageTitle>{name}</PageTitle>

            </Container>
        </DefaultLayout>
    )
};

export default Product;