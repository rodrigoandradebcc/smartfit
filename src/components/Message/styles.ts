import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    background: #DC0A17;
    padding: 0 228px;

    @media (max-width: 900px) {
        padding: 0 42px;
    }

    align-items: center;
    justify-content: space-between;

    svg{
        color: #fff;
        cursor: pointer;
    }

    p{
        color: #fff;
        font-weight: 500;
        text-transform: uppercase;
    }
`;
