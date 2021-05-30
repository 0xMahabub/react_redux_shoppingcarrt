import styled from 'styled-components';


export const AppContainer = styled.div`
    display: ${props => props.header ? "flex" : "block"};
    ${props => props.header ? `
        align-items: center;
        justify-content: space-between;
    ` : null}
    width: 85%;
    margin: 0 auto;


    /* Product List */
    .product_area {
        display: grid;
        gap: 2rem 1rem;
        place-items: center;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 1rem;
        margin-bottom: 5rem;
    }

    .btn-add {
        display: inline-flex;
        align-items: center;
        padding: .8rem 1.6rem;
        background-color: #3fc979;
        color: white;
        border: none;
        outline: 0;
        border-radius: .25rem;
        text-transform: capitalize;
    }
`;


export const ProductItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0;
    background-color: #f5faff;
    box-shadow: 0 0 1rem 0 rgba(0,0,0,0.075);
    border-radius: .25rem;
    overflow: hidden;
    cursor: pointer;

    .product_top {
        width: 100%;

        img {
            width: 100%;
        }
    }

    .pd_data {
        padding: 1.5rem;
    }
`;