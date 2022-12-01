import PropTypes from 'prop-types';
import styled from 'styled-components';
import NLink from './NLink';

const ThumbnailWrapper = styled.div`
    width: 100px;
    min-width: 100px;
    height: 100px;
    border: var(--border-line);
    border-radius: 5px;

    a {
        width: 100%;
        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Thumbnail = ({url, to}) => {
  return (
    <ThumbnailWrapper>
        <NLink to={to}>
            <img src={url} alt="Image" />
        </NLink>
    </ThumbnailWrapper>
  )
};

Thumbnail.propTypes = {
    url: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}

export default Thumbnail;