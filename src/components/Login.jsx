import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { loginData } from '../services/allApi'
import { toast } from 'react-toastify'

function Login() {
  const navigate =useNavigate()
  const [formData, setFormData] = useState({
    email: '', password: ''
  })
  const getData = (e) => {
    const { name, value } = e.target
    // console.log(name,value)
    if (name === "email") {
      setFormData({ ...formData, email: value })
    }
    if (name === "password") {
      setFormData({ ...formData, password: value })
    }

  }

  const handleUpload = async () => {
    const { email, password } = formData

    if (!email || !password) {
      toast.warning("Enter Valid Details!!")
    }
    else {
      // console.log(formData)
      const res = await loginData(formData)
      console.log(res)
      {
        res.data.map(user => {
          if (user.email === formData.email) {
            if (user.password === formData.password) {
              toast.success("Login Successfully")
              navigate('/dash')
            }
            else {
              toast.error("Login Failed")
            }
          }})}

    }
}
  return (
  <>
   
    <div className="vh-50 bg-img bg-success">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">LOGIN</h2>

                  <form style={{height:'100%'}} >



                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3cg" className="form-control form-control-lg" name='email' onChange={(e) => { getData(e) }} />
                      <label className="form-label" >Your Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4cg" className="form-control form-control-lg" name='password' onChange={(e) => { getData(e) }} />
                      <label className="form-label" >Password</label>
                    </div>



                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                      <label className="form-check-label" >
                        I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={handleUpload} >Login</button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link
                      className="fw-bold text-body" to={'/reg'}><u>Registration</u></Link></p>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login