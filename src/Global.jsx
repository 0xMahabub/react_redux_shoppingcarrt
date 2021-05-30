import styled from 'styled-components';


export const AppContainer = styled.div`
    display: ${props => props.header ? "flex" : "block"};
    ${props => props.header ? `
        align-items: center;
        justify-content: space-between;
    ` : null}
    width: 85%;
    margin: 0 auto;
`;