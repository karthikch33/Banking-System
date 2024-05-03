import React from 'react'
import Container from '../Container'
import CustomInput from '../CustomInput'
import { GiFastBackwardButton } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='row justify-content-center align-items-center' style={{height:"100%"}}>
    <Container className="py-5">
        <div className='row justify-content-center'>
        <div className='col-lg-8 col-md-10 col-sm-10'>
        <div className='login-card border rounded p-4'>
       <Link to="/"> <h3 className='mb-1 hyperlink text-primary'><GiFastBackwardButton style={{cursor:"pointer",textDecoration:"None"}}/>Login</h3></Link>
        <h3 className='text-center mb-4'>Be Our Family With Cite(Account Opening)</h3>
        <form style={{height:"470px",overflowY:"scroll"}} className='scroll'>
          <div className="row">
            <div className="col-6  justify-content-center align-items-center" >
              <CustomInput type="text" placeholder="FirstName" className="form-control-sm mt-4" />
              <CustomInput type="text" placeholder="Username" className="form-control-sm mt-4" />
              <CustomInput type="text" placeholder="Email" className="form-control-sm mt-4" />
              <CustomInput type="text" placeholder="Pan No" className="form-control-sm mt-4" />
              <h6 className='mt-3 '>AccountNo(Auto-Generated)</h6>
              <CustomInput type="text" placeholder="Account No" className="form-control-sm mt-4" disabled="true"/>
              <h6 className='mt-3'>Address 1(Home)</h6>
              <CustomInput type="text" placeholder="Country" className="form-control-sm mt-4" />
              <CustomInput type="text" placeholder="State" className="form-control-sm mt-4" />
              <CustomInput type="text" placeholder="City" className="form-control-sm mt-4" />
              <CustomInput type="text" placeholder="Street" className="form-control-sm mt-4" />
              <CustomInput type="text" placeholder="House-No" className="form-control-sm mt-4" />
            </div>
            <div className="col-6 justify-content-center align-items-center">
              <CustomInput type="text" placeholder="LastName" className="form-control-sm mt-4" />
              <CustomInput type="text" placeholder="Phone" className="form-control-sm mt-4" />
              <CustomInput type="text" placeholder="Aadhar No" className="form-control-sm mt-4" />
              <select className='form-select mt-4 p-3'>
                <option value="#" className='form-'>Select Branch</option>
                <option value="Nandivelugu">Nandivelugu</option>
                <option value="Tenali">Tenali</option>
                <option value="Vijayawad">Vijayawada</option>
              </select>
              <h6 className='mt-3'>BranchIFSC Code</h6>
              <CustomInput type="text" placeholder="Branch IFSC Code" className="form-control-sm mt-4" disabled="true"/>
              <h6 className='mt-3'>Address 2(Office)</h6>
              <CustomInput type="text" placeholder="Country" className="form-control-sm mt-4" />
              <CustomInput type="text" placeholder="State" className="form-control-sm mt-4" />
              <CustomInput type="text" placeholder="City" className="form-control-sm mt-4" />
              <CustomInput type="text" placeholder="Street" className="form-control-sm mt-4" />
              <CustomInput type="text" placeholder="House-No" className="form-control-sm mt-4" />
            </div>
          </div>
          <div className='row justify-content-center'>
          <button type='submit' className='mt-4 btn btn-primary justify-content-center'>Register</button>
          </div>
        </form>

        </div>
            </div>
        </div>
    </Container>
    </div>
  )
}

export default Register