import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  x: 'x',
  o: 'o'
}


const Square = ({children, updateBoard, index}) => {
  return (
    <div className='square'>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS )

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_,index) => {
            return (
              <Square
              key={index}
              incex={index}
              >
                
              </Square>
            )
          })
        }
      </section>
       
    </main>
  )
}

export default App
