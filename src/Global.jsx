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

    /* RESPONSIVE */
    @media only screen and (max-width: 991.9px) {
        .product_area {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media only screen and (max-width: 767.9px) {
        .product_area {
            grid-template-columns: repeat(1, 1fr);
        }

        width: 96%;
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


export const CartPage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 1rem;
`;


export const CartItem = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    /* width: 100%; */
    max-height: 250px;
    background-color: #f8faff;
    padding: 1rem;
    border-radius: .3rem;

    div {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    small {
        color: gray;
    }

    img {
        width: 80px;
        max-width: 80px;
        height: 80px;
    }

    .cart_actions {
        button {
            border: none;
            outline: 0;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: .5rem;
            border-radius: .2rem;
            color: white;
            background-color: red;
            font-size: 1rem;
        }
    }

    /* RESPONSIVE */
    @media only screen and (max-width: 767.9px) {
        max-height: inherit;

        div {
            gap: .85rem;
            flex-direction: column;
        }
    }
`;