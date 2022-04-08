import { useState } from 'react'
import { Link } from 'react-router-dom'
//import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import './Signin.css'
import { URL } from '../config'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const signinUser = () => {
    if (email.length == 0) {
      toast.warning('please enter email')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else {
      const body = {
        email,
        password,
      }

      // url to make signin api call
      const url = `${URL}/user/signin`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Welcome to the application')

          // get the data sent by server
          const { userid, firstname, lastname } = result['data']

          // persist the logged in user's information for future use
          sessionStorage['userid'] = userid
          sessionStorage['firstname'] = firstname
          sessionStorage['lastname'] = lastname
          sessionStorage['loginStatus'] = 1
          console.log(userid)
          // navigate to home component
          navigate('/Home')
        } else {
          toast.error('Invalid user name or password')
        }
      })
    }
  }

  return (
    <div className="sign-in-container">
      <h1 className="title">Sign in</h1>
      

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div>
                No account yet? <Link to="/signup">Signup here</Link>
              </div>
              <button onClick={signinUser} className="btn btn-primary">
                Sign in
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default Signin