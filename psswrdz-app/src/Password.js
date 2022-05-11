import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from './actions'
import "./Password.css"
import zxcvbn from 'zxcvbn'

const styles = {
    button: {
      width: '100%',
      margin:'0.5em 0',
      padding: '0.5em',
      border: '4px solid #4687D3',
      borderRadius: '6px',
      background: '#4A90E2',
      color: '#fff'
    }
}



function Password() {
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')
    const [description, setDescription] = useState('')
    const [name, setName] = useState('')

    function random(n) {
        return Math.floor(Math.random() * n)
      }
    
    function generatePassword() {
      // generate a password here
      const str = 'abcdefghijklmnopqrstuvwxyz'
      let pass = []
      for (let i=0; i<8; i++) {
        let char = str[random(str.length)];
        pass.push(char)
      }
      let newPass = pass.toString().replace(/,/g, '')
      setPassword(newPass)
      
      console.log(zxcvbn(newPass))
      return newPass
      
    }
  
 
  return (
    <div>
      <div><h1>{password}</h1></div>
      <div>
          <label> Enter name: </label>
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
      <label> Enter description: </label>
        <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
        />
      </div> 
      <div>
      <label> Password Generate: </label>
        <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
      </div>
       
      <div>
        <button onClick={(e) => {
          generatePassword()
        }}
          className="button"
        >Generate</button>
      </div>
      <div>
        <button onClick={(e) => {
            dispatch(addPassword(name, password))
          }}
          style={styles.button}
        >Save
        </button>
      </div>
    </div>
  )
}

export default Password