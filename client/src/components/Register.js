import React ,{useState}from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import {useInfo} from '../hooks/userProvider'
function Register() {
  const userRegisterInfo = useInfo()
  const [email,setEmail] =useState('email')
  
  
  const handleSubmit = (e)=>{
  e.preventDefault();
  axios.post("http://localhost:5050/contact",{userRegisterInfo: userRegisterInfo,email:email}).then(res=>console.log(res)).catch(err=>console.log(err))

  }
  return (
    <div>
    <h1>Register Page</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Account:</Form.Label>
            <Form.Control type="text"onChange={(e)=>{
            userRegisterInfo.setAccount(e.target.value)
            }}></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" onChange={(e)=>{
            userRegisterInfo.setPassword(e.target.value)
            }}></Form.Control>
            
        </Form.Group>
        <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" onChange={(e)=>{
           setEmail(e.target.value)}}></Form.Control>
        </Form.Group>
        <Button type="submit">Enter</Button>  <a href="/">Login</a>
    </Form>
  
    </div>
    
  )
}

export default Register