import { useState } from 'react'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

import { Conteiner } from './stylesGlobal'

function App() {
  const [chatVisibility, setChatVisibility] = useState(false)
  const [socket, setSocket] = useState(null)

  return (
    <Conteiner>
        {
            chatVisibility ? 
            <Chat socket={socket}/> : 
            <Join setSocket={setSocket} setChatVisibility={setChatVisibility}/>
        }
    </Conteiner>
  )
}

export default App
