import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from './actions'




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
      
      return newPass
      
    }
  
 
  return (
    <div>
      <div>{password}</div>
      <div>
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
        />
      </div> 
      <div>
        <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
      </div>
       
      <div>
        <button onClick={(e) => {
          generatePassword()
        }}>Generate</button>
      </div>
      <div>
        <button onClick={(e) => {
            dispatch(addPassword(name, password))
          }}>Save
        </button>
      </div>
    </div>
  )
}

export default Password