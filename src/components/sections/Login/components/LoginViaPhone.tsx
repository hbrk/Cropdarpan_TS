import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import './../Login.css'
export default function Login() {
  const phoneRef = useRef<HTMLInputElement>(null)
  const { loginViaPhone } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      if (phoneRef && phoneRef.current) {
        if (loginViaPhone) await loginViaPhone(phoneRef.current.value)
      }
      history.push('/dashboardPhone')
    } catch {
      setError('Failed to log in')
    }
    setLoading(false)
  }
  return (
    <>
      <br/><br/><br/>
      <div className="carddd container">
      <div className="d-flex flex-lg-row flex-column-reverse">
      <div className="carddd carddd11" style={{height:"800px"}}>
      <div className="row justify-content-center my-auto">
      <div className="col-md-12 col-10 my-5">
       <h1 className="mb-5 text-center heading" style={{color: "white"}}><b>Login with Phone</b></h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="Phone Number">
              <Form.Label style={{fontSize:"16px"}}><b>Phone Number</b></Form.Label>
	      <Form.Control type="text" style={{padding:"13px"}} placeholder="Enter Phone Number" ref={phoneRef} required />
            </Form.Group>
            <br/>
             <div id="recaptcha"></div>
            <Button disabled={loading} style={{backgroundColor:"white",color:"green",padding:"11px",borderColor:"green",borderStyle:"solid"}} className="w-100" type="submit">
             <h4><b className="fa fa-phone"> &nbsp;&nbsp;&nbsp; Login</b></h4>
            </Button>
	    <br/><br/><br/>
	    <div className="w-100">
	    <h2 style={{color:"#d8fa82",alignItems:'center'}}><b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ----or Login With----</b> </h2>
	    <br/>
	    </div>
	  <div className="w-100 text-center mt-3">  
          <button className="w-100"  style={{backgroundColor:"white",padding:"10px",borderColor:"green",borderStyle:"solid"}}> <Link to="/loginViaEmail" style={{color:"green"}}><h4><b className="fa fa-envelope"> &nbsp;Login with Email</b></h4></Link></button>&nbsp;&nbsp;
          <button className="w-100"  style={{backgroundColor:"white",padding:"10px",borderColor:"green",borderStyle:"solid"}}> <Link to="/loginViaGoogle" style={{color:"green"}}><h4><b className="fab fa-google">&nbsp; &nbsp;Login with Google</b> </h4></Link></button>
          </div>
          </Form>
	  </div></div></div>
      <div className="carddd carddd1">
        <div className="my-auto mx-md-15 px-md-15 right">
        <p style={{color:"green",fontSize:"18px"}} className="text-center">Don't have an account?</p>
	<Button className="w-100" style={{backgroundColor:"green",borderColor:"green",borderStyle:"solid"}}><Link to="/signup" style={{color:"green"}}><h4 className="text-white"><b>Sign up</b></h4></Link></Button>
     </div>
      </div>
      </div></div>
    </>
  )
}
