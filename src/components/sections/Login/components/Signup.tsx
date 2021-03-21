import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import '../Login.css'
export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (passwordRef?.current?.value !== passwordConfirmRef?.current?.value) {
      return setError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      if (signup)
        if (emailRef && emailRef.current && passwordRef && passwordRef.current)
          await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/dashboard')
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }
  return (
    <>
      <br />
      <br />
      <br />
      <div className="carddd container">
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="carddd carddd11" style={{ height: '500px' }}>
            <div className="row justify-content-center my-auto">
              <div className="col-md-10 col-10 my-5">
                <p
                  style={{ color: 'white', fontSize: '20px' }}
                  className="text-center"
                >
                  {' '}
                  Already have an account?
                </p>
                <div className="w-100 text-center mt-3">
                  <Button
                    className="w-100 btn-outline-success"
                    style={{
                      backgroundColor: 'white',
                      padding: '11px',
                      borderColor: 'green',
                      borderStyle: 'solid',
                    }}
                  >
                    {' '}
                    <Link to="/loginViaPhone" style={{ color: 'green' }}>
                      <h4>
                        <b className="fa fa-phone">
                          &nbsp;&nbsp;&nbsp;&nbsp;Login with Phone
                        </b>
                      </h4>
                    </Link>
                  </Button>
                </div>
                <div className="w-100 text-center mt-3">
                  <Button
                    className="w-100 btn-outline-success"
                    style={{
                      backgroundColor: 'white',
                      padding: '11px',
                      borderColor: 'green',
                      borderStyle: 'solid',
                    }}
                  >
                    {' '}
                    <Link to="/loginViaEmail" style={{ color: 'green' }}>
                      <h4>
                        <b className="fa fa-envelope">
                          &nbsp;&nbsp;&nbsp;&nbsp;Login with Email
                        </b>{' '}
                      </h4>
                    </Link>
                  </Button>
                </div>
                <div className="w-100 text-center mt-3">
                  <Button
                    className="w-100 btn-outline-success"
                    style={{
                      backgroundColor: 'white',
                      padding: '11px',
                      borderColor: 'green',
                      borderStyle: 'solid',
                    }}
                  >
                    {' '}
                    <Link to="/loginViaGoogle" style={{ color: 'green' }}>
                      <h4>
                        <b className="fab fa-google">
                          &nbsp;&nbsp;&nbsp;&nbsp;Login with Google
                        </b>{' '}
                      </h4>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="carddd carddd1">
            <div className="mx-md-15 px-md-15 right">
              <h1
                className="mb-5 text-center heading"
                style={{ color: 'green' }}
              >
                Sign Up
              </h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label style={{ fontSize: '16px' }}>
                    <b>Email</b>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    style={{ fontSize: '13px' }}
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
                    style={{ fontSize: '13px' }}
                    placeholder="Enter Password"
                    ref={passwordRef}
                    required
                  />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label style={{ fontSize: '16px' }}>
                    <b>Password Confirmation</b>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    style={{ fontSize: '13px' }}
                    placeholder="Confirm Password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Button
                  disabled={loading}
                  style={{
                    backgroundColor: 'green',
                    padding: '11px',
                    borderColor: 'green',
                    borderStyle: 'solid',
                  }}
                  className="w-100"
                  type="submit"
                >
                  <h4>
                    <b> Sign up</b>
                  </h4>
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
