import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'bootstrap'
import { useState } from 'react'
import s from "./style.module.css"

const Login = () => {
    const [userName,setUserName]=useState('')
    const [password,setPass]=useState('')
  return (
    <div className={s.Container}>
        <h1>Login</h1>
        <form>
            <label htmlFor="UserName">Enter user name :</label>
            <input type="text" name="UserName" onChange={(e)=>{setUserName(e.target.value)}} value={userName}></input>
       
            <label htmlFor="password">Enter password:</label>
            <input type="password" name="Password" onChange={(e)=>{setPass(e.target.value)}} value={password} ></input>
        
            <input type="submit" value="Login" ></input>
        </form>
    </div>
  )
}

export default Login