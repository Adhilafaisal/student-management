import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { setData,deleteStudent} from '../services/allApi'
import { toast } from 'react-toastify'


function List() {
  const [delStudent,setDelStudent]=useState({})
  const [student,setStudent]=useState([])
  
  useEffect(() => {
    getData()
  }, [delStudent])

  const getData = async () => {
    const res = await setData()
    console.log(res.data)
    setStudent(res.data)
 }

 const handleDelete=async(id)=>{
  console.log(id)
  const res=await deleteStudent(id)
  console.log(res)
  if(res.status>=200 && res.status<300){
      setDelStudent(res)
      toast.success("Deleted successfully!!")
  }
  else{
      toast.error("Deleted Failed")
  }
}

 
  
 
  return (
    <>
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3>Student List</h3>
      </div>
      <Link to={'/dash/add'} className='btn btn-success'>Add Student</Link>
    </div>
    <div className='mt-2'>
        
      <table className='table border border-dark' >
      <thead className='table-dark'>
        <tr className='bg-dark'>
          <th>ID</th>
          <th>Name</th>
          <th>DOB</th>
          <th>Class</th>
          <th>Address</th>
          <th>Email</th>
          <th>Action</th>



        </tr>
      </thead>
      {
      student.map(item=>(
        
      <tbody className='table-dark'>
      <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.DOB}</td>
          <td>{item.classs} </td>
          <td>{item.address} </td>
          <td>{item.email} </td>
          <td>
            <Link to={`/dash/edit/${item.id}`} className='btn btn-info btn-sm me-2'  >Edit</Link>
            <button className='btn btn-danger btn-sm' onClick={()=>{handleDelete(item.id)}}>Delete</button>

          </td>

          

          {/* <td>
          <i className="fa-solid fa-trash float-end" onClick={()=>{handleDelete(item.id)}} style={{color:'#fd0000'}}></i>

          </td> */}
        </tr>
      </tbody>
      ))}
    </table>
    </div>
    
    </>
  )
}

export default List