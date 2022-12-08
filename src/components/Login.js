import React, { useContext } from 'react'
import sampleContext from '../context/sampleContext'
import Alert from './Alert';

function Login() {
    const methods = useContext(sampleContext);
    return (
        <>
            {methods.alertMessage && <Alert data={methods.alertMessage} />}
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="img-fluid" alt="Login" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form id='loginForm'>
                                {/* <!-- Person type select --> */}
                                <div className='form-outline mb-4'>
                                    <label className="form-label" htmlFor="type">You are a</label>
                                    <select id='personType' name='type' className="form-select form-select-lg" aria-label="Default select example">
                                        <option defaultValue={'Student'} value="Student">Student</option>
                                        <option value="Staff">Staff</option>
                                    </select>
                                </div>
                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="enroll">Enrollment No.</label>
                                    <input name='enroll' type="text" id="enroll" minLength={11} maxLength={16} className="form-control form-control-lg" />
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" name='password' minLength={8} maxLength={20} id="password" className="form-control form-control-lg" />
                                </div>

                                <div className="d-flex justify-content-around align-items-center mb-4">
                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="showPassword" onChange={() => { methods.showPassword() }} />
                                        <label className="form-check-label" htmlFor="showPassword">Show Password</label>
                                    </div>
                                    <a href='#!' style={{ cursor: 'pointer', textDecoration: 'underline' }} className='text-primary'>Forgot password?</a>
                                </div>

                                {/* <!-- Submit button --> */}
                                <div className='my-center-x'>
                                    <button type="submit" className="btn btn-primary px-5 btn-lg btn-block" onClick={(e) => { methods.checkLogin(e) }}>Sign in</button>
                                </div>

                                <div className="divider my-center-x my-4">
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>
                                <div className="row justify-content-center">
                                    <button type='button' className="btn btn-primary btn-block col-5 my-2 mx-2" style={{ backgroundColor: '#3b5998' }}
                                    >
                                        <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                                    </button>
                                    <button type='button' className="btn btn-primary btn-block col-5 my-2 mx-2" style={{ backgroundColor: '#55acee' }}>
                                        <i className="fab fa-twitter me-2"></i>Continue with Twitter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login