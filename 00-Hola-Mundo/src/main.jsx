import React from 'react'
import ReactDOM from 'react-dom/client'


const root = ReactDOM.createRoot(document.getElementById('root'))

const Button = ({text}) => {
  return <button>{text}</button>
}

root.render(
  <React.Fragment>
    
    <Button text='me gusta' />
    <Button text='me gusta 1' />
    <Button text='me gusta 2' />

  </React.Fragment> 

)
