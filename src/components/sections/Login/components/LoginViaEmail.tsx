import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { GoogleLoginButton } from 'react-social-login-buttons'

import '../Login.css'

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      if (login)
        if (emailRef && emailRef.current && passwordRef && passwordRef.current)
          await login(emailRef.current.value, passwordRef.current.value)
      history.push('/dashboard')
    } catch {
      setError('Failed to log in')
    }
    setLoading(false)
  }
  return (
    <>
      <br />
      <br />
      <div className="carddd container">
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="carddd carddd11" style={{ height: '800px' }}>
            <div className="row justify-content-center my-auto">
              <div className="col-md-11 col-10 my-5">
                <h1
                  className="mb-5 text-center heading"
                  style={{ color: 'white' }}
                >
                  <b>Login with Email</b>
                </h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label style={{ fontSize: '16px' }}>
                      <b>Email</b>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      style={{ padding: '13px' }}
                      placeholder="Enter Email"
                      ref={emailRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label style={{ fontSize: '16px' }}>
                      <b>Password</b>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      style={{ padding: '13px' }}
                      placeholder="Enter Password"
                      ref={passwordRef}
                      required
                    />
                  </Form.Group>
                  <div className="w-100 text-center mt-3">
                    <Link to="/forgot-password" style={{ color: 'green' }}>
                      {/* <medium style={{ color: '#b5b7bd', fontSize: '14px' }}> */}
                      Forgot Password?
                      {/* </medium> */}
                    </Link>
                  </div>
                  <br />
                  <div>
                    <Button
                      disabled={loading}
                      className="w-100"
                      style={{
                        backgroundColor: 'white',
                        color: 'green',
                        padding: '11px',
                        borderColor: 'green',
                        borderStyle: 'solid',
                      }}
                      type="submit"
                    >
                      <h4>
                        <b className="fa fa-envelope">
                          {' '}
                          &nbsp;&nbsp;&nbsp; Login
                        </b>
                      </h4>
                    </Button>
                  </div>
                  <br />
                  <br />
                  <div className="w-100">
                    <h2 style={{ color: '#d8fa82' }}>
                      <b>__________or__________</b>{' '}
                    </h2>
                  </div>
                  <br />
                  <div className="w-100 text-center mt-3">
                    <button
                      className="w-100 btn-outline-success"
                      style={{
                        backgroundColor: 'white',
                        padding: '10px',
                        borderColor: 'green',
                        borderStyle: 'solid',
                      }}
                    >
                      {' '}
                      <Link to="/loginViaPhone" style={{ color: 'green' }}>
                        <h4>
                          <b className="fa fa-phone">
                            {' '}
                            &nbsp; Login with Phone
                          </b>{' '}
                        </h4>
                      </Link>
                    </button>
                    <br />
                    <br />
                    {/* <button
                      className="w-100 btn-outline-success"
                      style={{
                        backgroundColor: 'white',
                        padding: '10px',
                        borderColor: 'green',
                        borderStyle: 'solid',
                      }}
                    >
                      {' '}
                      <Link to="/loginViaGoogle" style={{ color: 'green' }}>
                        <h4>
                          <b className="fab fa-google">
                            {' '}
                            &nbsp;&nbsp;Login with Google
                          </b>{' '}
                        </h4>
                      </Link>
                    </button> */}
                    <Link to="/loginViaGoogle">
                      <GoogleLoginButton />
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="carddd carddd1">
            <div className="my-auto mx-md-15 px-md-15 right">
              <p
                style={{ color: 'green', fontSize: '18px' }}
                className="text-center"
              >
                Don't have an account?{' '}
              </p>
              <Button
                className="w-100"
                style={{
                  backgroundColor: 'green',
                  borderColor: 'green',
                  borderStyle: 'solid',
                }}
              >
                <Link to="/signup" style={{ color: 'green' }}>
                  <h4 className="text-white">
                    <b>Sign up</b>
                  </h4>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
