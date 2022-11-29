import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

const SearchWrapper = styled.div`
    margin-left: auto;
    height: 40px;
    position: relative;
    max-width: 200px;
    width: 100%;

    input {
        display: block;
        width: 100%;
        height: 100%;
        padding: 0 15px 0 40px;
        border: none;
        border-left: 1px solid var(--txt-base);
        outline: none;
        font-size: 16px;
        line-height: 16px;
        font-weight: var(--fw-medium);
        color: var(--txt-base);
        background: none;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        color: var(--txt-base);
    }
`;

const Search = () => {
  return (
    <SearchWrapper>
        <BiSearch
            size="20px" />
        <input type="text" placeholder='Пошук...' />
    </SearchWrapper>
  )
};

export default Search;