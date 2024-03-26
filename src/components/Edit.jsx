import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';




function Edit() {
    const { id } = useParams();
    const [values, setValues] = useState({
    name: '', DOB:'',classs:'',address:'',email:''
    })

    useEffect(() => {
        axios.get('https://student-server-2.onrender.com/add_student/' + id)
            .then(res => {
               console.log(res)
            setValues({
                ...values, name: res.data.name, DOB: res.data.DOB, classs: res.data.classs,
                address: res.data.address, email: res.data.email
            })
            })

            .catch(err => console.log(err))
    }, [])
                // console.log(values)

      const navigate =useNavigate()

      const handleEdit =(e) =>{
        e.preventDefault();
        axios.put('https://student-server-2.onrender.com/add_student/'+id,values)
        .then(res =>{
          
            navigate('/dash/list');
            
           
        })
        .catch(err => console.log(err))
      }
    return (
        <section className="vh-50 bg-image ">

            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="d-flex justify-content-center align-items-center mt-3">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body ">
                                    <h2 className="text-center mb-5 ">Edit Student Details</h2>

                                    <form >


                                        <div className="form-outline mb-4">
                                            <input type="text" id="inputName" name='name' value={values.name} className="form-control form-control-lg" onChange={e=>setValues({...values,name:e.target.value})} />
                                            <label className="form-label"  >Name</label>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <input type="text" name='DOB'  value={values.DOB} className="form-control form-control-lg" onChange={e=>setValues({...values,DOB:e.target.value})} />
                                            <label className="form-label"  >DOB</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text"  name='classs' value={values.classs} className="form-control form-control-lg" onChange={e=>setValues({...values,classs:e.target.value})} />
                                            <label className="form-label"  >Class</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" name='address' value={values.address} className="form-control form-control-lg" onChange={e=>setValues({...values,address:e.target.value})} />
                                            <label className="form-label" >Address</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="email"  name='email' value={values.email} className="form-control form-control-lg" onChange={e=>setValues({...values,email:e.target.value})} />
                                            <label className="form-label" >Email</label>
                                        </div>

                                        <div className="d-flex justify-content-center"  >
                                            <button type="button"
                                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={handleEdit} >Edit Student</button>
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

export default Edit