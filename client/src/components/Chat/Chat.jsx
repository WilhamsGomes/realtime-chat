import React, { useRef, useState, useEffect } from "react";

import {
    Container,
    HistoricMessage,
    SendMessage,
    MessageSent,
    TitleMessageSent,
    MessageReceived
} from "./style";

export default function Chat({ socket }) {

    const bottomRef = useRef()
    const messageRef = useRef()
    const [messageList, setMessageList] = useState([])

    useEffect(() => {
        socket.on('receive_message', data => {
            setMessageList((current) => [...current, data])
        })

        return () => socket.off('receive_message')
    }, [socket])


    useEffect(() => {
        scrollDown()
    }, [messageList])

    const handleSubmit = () => {
        const message = messageRef.current.value
        if (!message.trim()) return

        socket.emit('message', message)
        clearInput()
        focusInput()
    }

    const clearInput = () => {
        messageRef.current.value = ''
    }

    const focusInput = () => {
        messageRef.current.focus()
    }

    const getEnterKey = (e) => {
        if (e.key === 'Enter')
            handleSubmit()
    }

    const scrollDown = () => {
        bottomRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <Container>
            <h1>Chat</h1>
            <HistoricMessage>
                {
                    messageList.map((message, index) => (
                        <>
                        {message.authorId == socket.id ? 
                            <MessageSent  key={index}>
                                <TitleMessageSent>{message.author}</TitleMessageSent>
                                <p>{message.text}</p>
                            </MessageSent>
                            
                        : 
                            <MessageReceived>
                                <TitleMessageSent>{message.author}</TitleMessageSent>
                                <p>{message.text}</p>
                            </MessageReceived>
                        }     
                        </>
                    ))
                }
            <div ref={bottomRef} />
            </HistoricMessage>
            
            <SendMessage>
                <input type="text" ref={messageRef} placeholder="Mensagem" onKeyDown={(e) => getEnterKey(e)} />
                <button onClick={() => handleSubmit()}>Send</button>
            </SendMessage>
        </Container>
    )
}