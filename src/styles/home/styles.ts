import styled, {css} from "styled-components";
import Separator from '../../../src/components/Separator'

export const Navbar = styled.div`
    background: var(--black);
    height: 130px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 88px 228px 100px;

    > h1{
        font-size: 2.75rem;
        width: 300px;
        font-weight: 700;
    }

    @media (max-width: 900px) {
        padding: 32px 42px;
        
        > h1{
            width: fit-content;
        }
    }

    @media (max-width: 400px) {
        > h1{
            word-break: break-all;
        }
    }

    
`

export const Line = styled.hr`
    width: 100px;
    height: 10px;
    margin-top: 32px;
    background: #333;
`
export const InfoText = styled.p`
    margin-top: 42px;
    font-weight: 500;
`

export const SeparatorLine = styled(Separator)``

export const ConfigurationCard = styled.section`
    margin-top: 50px;


    width: 100%;
    border: 4px solid #ededed;
    border-radius: 5px;

    padding: 18px 20px 20px;

    h2 {
        margin-top: 34px;
        font-weight: 400;
        color: #929292;
    }

    ${SeparatorLine}{
        margin-top: 12px;
    }
`

interface RadioBoxProps {
    isActive: boolean;
}

export const TurnTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;


export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const TitleConfigurationCard = styled.div`
    display: flex;
    align-items: center;

    > p {
        margin-left: 12px;
        font-size: 14px;
    }
`

export const CheckArea = styled.div`
    display: flex;
    align-items: center;

    input {
        width: 18px;
        height: 18px;
    }

    > p {
        margin-left: 0.5rem;
        color: #363636;
        font-weight: 500;
    }

    @media (max-width: 620px) {
        p{
            font-size: 1rem;
        }
    }

`

export const Footer = styled.footer`
    height: 214px;
    background: var(--dark-grey);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > p {
        margin-top: 20px;
        color: #fff;
    }
`

export const ResultsFound = styled.div`
    display: flex;
    
    > p:nth-child(2){
        margin-left: 0.5rem;
        color: #363636;
    }

    p{
        font-weight: 500;
    }

    @media (max-width: 620px) {
        p{
            font-size: 1rem;
        }
    }

    > p em{
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        margin-top: 16px;
    }
`


export const CheckAndResultContainer = styled.div`
    margin: 12px;
    display: flex;
    margin-top: 54px;

    justify-content: space-between;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;

        > div + div {
            margin-top: 40px;
        }
    }
`

interface ButtonProps {
    outlined?: boolean;
}

export const Button = styled.button<ButtonProps>`
    width: 330px;

    background: var(--yellow);
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;

    ${props => props.outlined && css`
        background: transparent;
        border: 2px solid #ccc;
    `}
`

export const ActionArea = styled.div`
    width: 100%;
    align-items: center;
    justify-content:center;
    display: flex;
    margin-top: 40px;

    > button {
        padding: 24px 0;
        align-items: center;
        justify-content: center;
        display: flex;
    } 

    > button + button {
        margin-left: 1rem;
    }

    @media (max-width: 620px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > button + button {
            margin-left: 0;
            margin-top: 30px;
        }

        > button {
            width: 100%;
        }
    }


    
`

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19.25rem, auto));
    grid-auto-rows: minmax(150px, auto);
    gap: 18px;
`

