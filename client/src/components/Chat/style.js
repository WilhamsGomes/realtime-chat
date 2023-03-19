import styled from "styled-components";

export const Container = styled.div`
    width: 400px;
    min-height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    padding: 8px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    h1{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        text-transform: uppercase;
    }
`;

export const HistoricMessage = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: auto;
    margin-top: 10px;

    /* width */
    ::-webkit-scrollbar {
        width: 4px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #1E1D26;
        border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #065AD8; 
        border-radius: 10px;
    }

`;

export const MessageSent = styled.div`
    background: #D5DBE2;
    margin-left: 48%;
    color: #000;
    width: 50%;
    border-radius: 8px;
    padding: 4px;
    
    p{
        display: flex;
        flex-wrap: wrap;
        padding-left: 4px;
    }

`;

export const TitleMessageSent = styled.div`
    color: #000;
    border-radius: 8px;
    padding-left: 4px;
    font-weight: 700;
    font-size: 0.7rem;
`;

export const MessageReceived = styled.div`
    background: #5795F7;
    color: #000;
    width: 50%;
    border-radius: 8px;
    padding: 4px;
    
    p{
        display: flex;
        flex-wrap: wrap;
        padding-left: 4px;
    }
`;

export const SendMessage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input{
        width: 80%;
        height: 60px;
        border: none;
        background: #D5DBE2;
        padding-left: 8px;
        outline: none;
        border-radius: 8px;
    }

    button{
        width: 15%;
        height: 60px;
        color: #fff;
        font-weight: 600;
        background: #065AD8;
        border-radius: 8px;

        transition: background 0.2s ease-in;

        &:hover{
            background: #104DA8;
        }

    }

`;