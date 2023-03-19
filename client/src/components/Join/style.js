import styled from "styled-components"

export const ContainerLogin = styled.div`
    width: 80%;
    min-height: 450px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    @media screen and (max-width: 870px){
        flex-direction: column-reverse;
    }
`;

export const BannerLogin = styled.div`
    width: 50%;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #065AD8;
    border-radius: 8px;

    @media screen and (max-width: 870px){
        width: 100%;
    }

    img{
        max-width: 80%;
        max-height: 80%;
    }

`;

export const ContentLogin = styled.div`
    width: 50%;
    height: 450px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    border-radius: 8px;

    @media screen and (max-width: 870px){
        width: 100%;
    }

    button{
        width: 50%;
        height: 60px;
        border-radius: 8px;
        background: #065AD8;
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        transition: background 0.2s ease-in;

        &:hover{
            background: #4E48B9;
        }

    }

    input{
        width: 49%;
        height: 60px;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 8px;
        border: none;
        background: #D5DBE2;
        padding-left: 8px;
        outline: none;
    }

`;

export const WrapperLogo = styled.div`
    width: 32px;
    height: 32px;
    background: #065AD8;
    border-radius: 8px;
`;

export const Texts = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h1{
        color: #292828;
        margin-top: 16px;
    }

    p{
        font-size: 0.8rem;
        color: #95969A;
    }
`;