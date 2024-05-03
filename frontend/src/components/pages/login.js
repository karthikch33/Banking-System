import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomInput from '../CustomInput';

const Login = () => {
  const validateForm = yup.object().shape({
    username: yup.string().required("Username Required"),
    password: yup.string().required("Password Required")
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: validateForm,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div className='row justify-content-center align-items-center' style={{height:"100%"}}>
      <Container className="py-5">
        <div className='row justify-content-center'>
          <div className='col-lg-6 col-md-8 col-sm-10'>
            <div className='login-card border rounded p-4'>
              <h3 className='text-center mb-4'>Welcome to Cite</h3>
              <form onSubmit={formik.handleSubmit}>

                <CustomInput type={"text"} placeholder={"Username"} className={"form-control mt-4 glowing-input"} name={"username"} value={formik.values.username} onChange={formik.handleChange('username')} onBlur={formik.handleBlur('username')} />

                {formik.touched.username && formik.errors.username && (
                  <div className='text-danger'>{formik.errors.username}</div>
                )}

                <CustomInput type={"password"} placeholder={"Password"} className={"form-control mt-4 glowing-input"} name={"password"} value={formik.values.password} onChange={formik.handleChange('password')} onBlur={formik.handleBlur('password')} />

                {formik.touched.password && formik.errors.password && (
                  <div className='text-danger'>{formik.errors.password}</div>
                )}

                <div className='mt-3 d-flex justify-content-between'>
                  <Link to={'/forgot-password'} className='text-decoration-none hyperlink'>Forgot Password?</Link>
                  <Link to={'/signup'} className='text-decoration-none hyperlink'>Register With Cite</Link>
                </div>

                <div className='mt-4'>
                  <button type='submit' className='btn btn-primary w-100'>Login</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
