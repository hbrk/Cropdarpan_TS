import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import '../Login.css'
export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  function handleSubmitViaEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    history.push('/loginViaEmail')
    setLoading(false)
  }
  function handleSubmitViaPhone(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    history.push('/loginViaPhone')
    setLoading(false)
  }
  function handleSubmitViaGoogle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    history.push('/loginViaGoogle')
    setLoading(false)
  }
  return (
    <>
      <div className="d2 container">
        <div className="d1 container">
          <h4 className="text-center mb-4">Login Methods </h4>
          <Form onSubmit={handleSubmitViaEmail}>
            <Button disabled={loading} className="w-100" type="submit">
              <b>Email</b>
            </Button>
          </Form>
          <Form onSubmit={handleSubmitViaPhone}>
            <Button
              disabled={loading}
              style={{ backgroundColor: '#66CDAA' }}
              className="w-100 mt-3"
              type="submit"
            >
              <b>Phone</b>
            </Button>
          </Form>
          <Form onSubmit={handleSubmitViaGoogle}>
            <Button
              disabled={loading}
              style={{ backgroundColor: '#9ACD32' }}
              className="w-100 mt-3"
              type="submit"
            >
              <b> Google </b>
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}
