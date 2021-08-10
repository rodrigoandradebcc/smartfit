import styled from "styled-components";



export const CardContainer = styled.section`
    background: #f5f5f5;
    margin-top: 2.5rem;
    padding: 30px 14px;
    display: flex;
    justify-content: space-between;
`

export const InfoLabel = styled.p`
    margin-bottom: 20px;
    font-weight: 700;
    color: #000;
`

export const MaskInfoContainer = styled.div`
    display: flex;

    > section {
        display: flex;
        align-items: center;
        flex-direction: column;
        > div {
            display: flex;
            div + div {
                margin-left: 12px;
            }

            > div {
                display: flex;
                flex-direction: column;
                align-items: center;

                p{
                    margin-top: 8px;
                    font-weight: 500;

                }
            }
        }
    }    
`

export const TowelInfoContainer = styled.div`
    > section {
        display: flex;
        align-items: center;
        flex-direction: column;
        > div {
            display: flex;
            div + div {
                margin-left: 12px;
            }

            > div {
                display: flex;
                flex-direction: column;
                align-items: center;

                p{
                    margin-top: 8px;
                    font-weight: 500;

                }
            }
        }
    }
`

export const FountainInfoContainer = styled.div`
    > section {
        display: flex;
        align-items: center;
        flex-direction: column;
        > div {
            display: flex;
            div + div {
                margin-left: 12px;
            }

            > div {
                display: flex;
                flex-direction: column;
                align-items: center;

                p{
                    margin-top: 8px;
                    font-weight: 500;
                    
                }
            }
        }
    }
`

export const LockerRoomInfoContainer = styled.div`
    > section {
        display: flex;
        align-items: center;
        flex-direction: column;
        > div {
            display: flex;
            div + div {
                margin-left: 12px;
            }

            > div {
                display: flex;
                flex-direction: column;
                align-items: center;

                p{
                    margin-top: 8px;
                    font-weight: 500;
                }
            }
        }
    }
`






