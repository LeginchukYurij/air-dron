import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    width: 100%;

    a {
        display: block;
        font-weight: var(--fw-medium);
        font-size: 16px;
        text-decoration: none;
        color: var(--txt-base);

        &:hover {
            color: var(--accent);
        }
    }
`;

const ImageWrapper = styled.div`
    height: 240px;
    margin-bottom: 20px;
    overflow: hidden;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: transform .3s ease;
    }

    &:hover img {
        transform: scale(1.2);
    }

`;

const Price = styled.span`
    display: block;
    font-weight: var(--fw-bold);
    font-size: 15px;
    color: var(--contrast);
    margin-top: 15px;
`;

const ProductCard = ({ product }) => {
    const {name, permalink, image, price} = product;
    const { slug } = useSelector(state => state.categories.selectedCategory);

    return (
        <Card>
            <Link to={`/category/${slug}/${permalink}`}>
                <ImageWrapper>
                    <img src={image?.url} alt="E" />
                </ImageWrapper>
            </Link>

            <Link to={`/category/${slug}/${permalink}`}>{name}</Link>
            <Price>{price?.formatted_with_symbol}</Price>
        </Card>
    )
}

export default ProductCard;