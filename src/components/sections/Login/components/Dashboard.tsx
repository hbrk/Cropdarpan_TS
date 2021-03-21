import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import '../Login.css'
export default function Dashboard() {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  async function handleLogout() {
    setError('')
    try {
      if (logout) await logout()
      history.push('/login')
    } catch {
      setError('Failed to log out')
    }
  }
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="carddd container">
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="carddd carddd11" style={{ height: '430px' }}>
            <div className="row justify-content-center my-auto">
              <div className="col-md-11 col-10 my-5">
                <h1
                  className="mb-5 text-center heading"
                  style={{ color: 'white' }}
                >
                  <b className="fa fa-user-circle"> &nbsp;Profile</b>
                </h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <p style={{ fontSize: '20px' }}>
                  <b>
                    <u>Email ID:</u>
                  </b>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{' '}
                  {currentUser?.email}
                </p>
                <br />
                <br />
                <Button
                  className="w-100 btn-outline-success"
                  style={{
                    backgroundColor: 'white',
                    borderColor: 'green',
                    borderStyle: 'solid',
                  }}
                >
                  {' '}
                  <Link to="/update-profile" style={{ color: 'white' }}>
                    <h4 style={{ color: 'green' }}>
                      <b>Update Profile</b>{' '}
                    </h4>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="carddd carddd1">
            <div className="my-auto mx-md-15 px-md-15 right">
              <p
                style={{ color: 'green', fontSize: '18px' }}
                className="text-center"
              >
                {' '}
                Want to Logout?
              </p>
              <Button
                className="w-100"
                variant="link"
                onClick={handleLogout}
                style={{
                  backgroundColor: 'green',
                  color: 'green',
                  borderColor: 'green',
                  borderStyle: 'solid',
                }}
              >
                <h4 style={{ color: 'white' }}>
                  <b> Log Out</b>
                </h4>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
