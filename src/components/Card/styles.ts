import styled from 'styled-components';
import Separator from '../Separator';

interface ContainerProps {
    opened: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #f5f5f5;
    height: 100%;
    min-height: 452px;

    padding: 16px 16px 42px 16px;

    > p:nth-child(1){
        color: ${props => props.opened ? '#60BC41' : '#CB2D27'};
        font-weight: 600;
    }

    > p:nth-child(2){
        margin-top: 1rem;
        font-weight: 600;
        font-size: 24px;
    }

    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

`;

export const ImageContainer = styled.section`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;

`

export const Content = styled.div`
    margin-top: 16px;
`

export const SchedulesText = styled.section`
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px 16px;


    > div {
        height: fit-content;
        > p:nth-child(1){
            font-weight: 600;
            font-size: 18px;
        }

    }
    
`;

export const SeparatorCard = styled(Separator)`
    margin-top: 1rem;

`

