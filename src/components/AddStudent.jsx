import React,{useState} from 'react'
import { studentData } from '../services/allApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function AddStudent() {
  const navigate =useNavigate()
  const [formData, setFormData] = useState({
    name: '', DOB: '', classs: '', address:'', email:''
})
const getData = (e) => {
    const { name, value } = e.target
    // console.log(name,value)

    
    if (name === "name") {
        setFormData({ ...formData, name: value })
    }
    if (name === "DOB") {
        setFormData({ ...formData, DOB: value })
    }
    if (name === "classs") {
        setFormData({ ...formData, classs: value })
    }
    if (name === "address") {
      setFormData({ ...formData, address: value })
    }
    if (name === "email") {
      setFormData({ ...formData, email: value })
    }
}
const handleUpload = async () => {
    const {name, DOB, classs, address,email } = formData

    if (!name ||!DOB ||!classs ||!address ||!email) {
        toast.warning("Enter Valid Details!!")
    }
    else {
        // console.log(formData)
        const res = await studentData(formData)
        console.log(res)
        if (res.status >= 200 && res.status < 300) {
            toast.success("Added Details Successfully")
            navigate('/dash/list')
        }
        else {
            toast.error("Failed")
        }
    }

}
  return (
    <section className="vh-50 bg-image ">
           
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
            <div className="d-flex justify-content-center align-items-center mt-3">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style={{ borderRadius: '15px' }}>
                        <div className="card-body ">
                            <h2 className="text-center mb-5 ">Student Details</h2>

                            <form>
                                
                               
                                <div className="form-outline mb-4">
                                    <input type="text" id="form3Example1cg" className="form-control form-control-lg" name='name' onChange={(e) => { getData(e) }}  />
                                    <label className="form-label" >Name</label>
                                </div>

                                
                                <div className="form-outline mb-4">
                                    <input type="text" id="form3Example4cg" className="form-control form-control-lg" name='DOB' onChange={(e) => { getData(e) }}  />
                                    <label className="form-label" >DOB</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="text" id="form3Example4cg" className="form-control form-control-lg" name='classs' onChange={(e) => { getData(e) }}  />
                                    <label className="form-label" >Class</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="text" id="form3Example4cg" className="form-control form-control-lg" name='address' onChange={(e) => { getData(e) }}  />
                                    <label className="form-label" >Address</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3cg" className="form-control form-control-lg" name='email' onChange={(e) => { getData(e) }} />
                                    <label className="form-label" >Email</label>
                                </div>
                                
                                <div className="d-flex justify-content-center">
                                    <button type="button"
                                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={handleUpload}>Add Student</button>
                                </div>

                                

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>
  )
}

export default AddStudent