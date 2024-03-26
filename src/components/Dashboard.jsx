import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Dashboard() {
  return (
    <div className='container-fluid bg-info'>
      <div className='row flex-nowrap'>
        <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark'>
          <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
            <Link style={{ textDecoration: 'none' }} to='/dash' className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white'>
              <span className='fs-5 fw-bolder d-none d-sm-inline'>DASHBOARD</span></Link>

            <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start' id='menu' >
              <li className='w-100'>
                <Link style={{ textDecoration: 'none' }} to={'/dash/list'} className='nav-link text-white px-0 align-middle'>
                  <i className="fa-solid fa-gauge" style={{ color: '#332754' }}></i> <span className='ms-2 d-none d-sm-inline'>Student List</span></Link>
              </li>
              <li className='w-100'>
                <Link style={{ textDecoration: 'none' }} to={'/dash/add'} className='nav-link px-0 align-middle text-white'>
                  <i className="fa-solid fa-table-columns" style={{ color: '#332754' }}></i> <span className='ms-2 d-none d-sm-inline'>Add Student</span></Link>
              </li>
              <li className='w-100'>
                <Link style={{ textDecoration: 'none' }} to={'/dash/edit/1'} className='nav-link px-0 align-middle text-white' >
                  <i className="fa-solid fa-square-pen" style={{ color: '#332754' }}></i> <span className='ms-2 d-none d-sm-inline'>Update</span></Link>
              </li>
              <li className='w-100'>
                <Link style={{ textDecoration: 'none' }} to={'/'} className='nav-link px-0 align-middle text-white' >
                  <i className="fa-solid fa-right-from-bracket" style={{ color: '#332754' }}></i> <span className='ms-2 d-none d-sm-inline'>Logout</span></Link>
              </li>
            </ul>

          </div>
        </div>
        <div className='col p-0 m-0'>
          <div className='p-2 d-flex justify-content-center shadow'>
            <h4>Student Management System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard