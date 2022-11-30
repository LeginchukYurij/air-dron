import PropTypes from 'prop-types';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PrimeryButton, PrimeryLink } from "../../UI";

const Card = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    & > a {
        display: block;
        font-weight: var(--fw-medium);
        font-size: 16px;
        text-decoration: none;
        color: var(--txt-base);

        &:hover {
            color: var(--accent);
        }
    }

    .btn {
        margin-top: auto;
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
    margin-bottom: 15px;
`;

const ProductCard = ({ product, categorySlug, addToCartHandler, inCart }) => {
    const {name, permalink, image, price} = product;
    
    return (
        <Card>
            <Link to={`/category/${categorySlug}/${permalink}`}>
                <ImageWrapper>
                    <img src={image?.url} alt="E" />
                </ImageWrapper>
            </Link>

            <Link to={`/category/${categorySlug}/${permalink}`}>{name}</Link>
            <Price>{price?.formatted_with_symbol}</Price>

            {!inCart ?
                (<PrimeryButton clickHandler={addToCartHandler}>
                    В кошик
                </PrimeryButton>)
                : (<PrimeryLink to='/cart'>
                    В кошику
                </PrimeryLink>)
            }
            
        </Card>
    )   
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    categorySlug: PropTypes.string.isRequired,
    addToCartHandler: PropTypes.func.isRequired,
    inCart: PropTypes.object,
};

export default ProductCard;