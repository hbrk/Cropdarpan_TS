import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { GoogleLoginButton } from 'react-social-login-buttons'

import '../Login.css'

export default function Login() {
  // const emailRef = useRef<HTMLInputElement>(null)
  // const passwordRef = useRef<HTMLInputElement>(null)
  const { loginViaGoogle } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (loginViaGoogle) await loginViaGoogle()
    history.push('/dashboard')
  }
  return (
    <>
      <br />
      <br />
      <br />
      <div className="carddd container">
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="carddd carddd11" style={{ height: '600px' }}>
            <div className="row justify-content-center my-auto">
              <div className="col-md-12 col-10 my-5">
                <h1
                  className="mb-5 text-center heading"
                  style={{ color: 'white' }}
                >
                  <b>Login with Google</b>
                </h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  {/* <Button
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
                  > */}
                  <GoogleLoginButton onClick={() => handleSubmit} />
                  {/* </Button> */}
                  <br />
                  <br />
                  <br />
                  <div className="w-100">
                    <h2 style={{ color: '#d8fa82' }}>
                      <b>____________ or ____________</b>{' '}
                    </h2>
                    <br />
                  </div>
                  <div className="w-100 text-center mt-3">
                    <Button
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
                            &nbsp; &nbsp; Login with Phone
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
                        padding: '10px',
                        borderColor: 'green',
                        borderStyle: 'solid',
                      }}
                    >
                      {' '}
                      <Link to="/loginViaEmail" style={{ color: 'green' }}>
                        <h4>
                          <b className="fa fa-envelope">
                            {' '}
                            &nbsp;&nbsp;&nbsp; Login with Email
                          </b>{' '}
                        </h4>
                      </Link>
                    </Button>
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
                Don't an account?
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
