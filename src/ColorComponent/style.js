import styled from 'styled-components';

export const Wrapper = styled.div`
    input {
        width: 85%;
        padding: 12px 5px;
    }
    button {
        padding: 12px 5px;
        margin-left: 5px;
    }
`;

export const Color = styled.div`
    margin-top: 15px;
    border-radius: 3px;
    width: 100%;
    padding: 15px 0;
    background-color: ${props => props.backgroundColor};
    text-align: center;
    color: ${props => (props.backgroundColor === 'black' && 'white')};
    font-weight: 500;
`;