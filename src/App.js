import { useState } from 'react'
import Button from '@mui/material/Button'

import './App.css'
import { Message } from './components/message/Message'
import { TextField } from '@mui/material'

function App() {
  const [messages, setMessages] = useState([])

  const [input, setInput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const addMessage = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages((oldMessages) => [input, ...oldMessages])
    setInput('')
  }

  return (
    <div className="App">
      <div className="Header">
        <h1>ANONYMOUS DESK</h1>
        <hr></hr>
        <h2>Write your anonymous message here!</h2>
      </div>

      <div className="MainBox">
        <form onSubmit={addMessage}>
          <TextField
            variant="outlined"
            onChange={handleInputChange}
            value={input}
            className="Input"
            // inputProps={{ maxLength: 75 }}
          />

          <Button onClick={addMessage} className="Button" variant="contained">
            Publish
          </Button>
        </form>

        <div className="MessageBox">
          {messages.length !== 0
            ? messages.map((i) => <Message text={i} />)
            : 'No messages yet :('}
        </div>
      </div>
    </div>
  )
}

export default App
