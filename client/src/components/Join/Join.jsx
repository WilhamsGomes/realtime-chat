import React, {useRef} from "react"
import io from "socket.io-client"

import { 
    ContainerLogin,
    BannerLogin,
    ContentLogin,
    Texts,
    WrapperLogo
} from "./style"

import Chatting from "../../assets/img/chatting.svg"

export default function Join({setChatVisibility, setSocket}){

    const usernameRef = useRef()

    const handleSubmit = async () => {
        const username = usernameRef.current.value
        if(!username.trim()) return
        const socket =  await io.connect("http://localhost:3001")
        socket.emit('set_username', username)
        setSocket(socket)
        setChatVisibility(true)
    }

    return(
        <ContainerLogin>
            <BannerLogin>
                <img src={Chatting} />
            </BannerLogin>
            <ContentLogin>
                <Texts>
                    <WrapperLogo></WrapperLogo>
                    <h1>Log in to your user</h1>
                    <p>Welcome back! Insert your user to join</p>
                </Texts>
                <input type="text" placeholder="Nome de usuário" ref={usernameRef}/>
                <button onClick={() => handleSubmit()}>Entrar</button>
            </ContentLogin>
        </ContainerLogin>
    )
}