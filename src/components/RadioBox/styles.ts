import styled from "styled-components";

export const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    section{
        display: flex;
        align-items: center;
        
        margin: 12px;

        &:first-child{
            margin-top: 34px;
        }

        display: flex;
    }
`

export const Text = styled.div`
    display: flex;
    width: 100%;

    margin-left: 8px;

    justify-content: space-between;
    color: #808080;

    p{
        font-size: 1rem;
    }
`
