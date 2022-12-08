import React, { useContext } from 'react'
import sampleContext from '../context/sampleContext'
import Alert from './Alert';
import Spinner from './Spinner';

function Student() {
    const methods = useContext(sampleContext);

    return (
        <>
            {methods.alertMessage && <Alert data={methods.alertMessage} />}
            <section className="py-3" style={{ backgroundColor: '#2779e2' }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">
                            <h1 className="text-center text-white mb-4">Apply for a job</h1>
                            <form id='studentForm' className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body">
                                    <div className="row align-items-center justify-content-center pt-4 pb-2">
                                        <div className="col-md-9">
                                            <label className='form-label mb-1 fw-bold ms-1' htmlFor="name">Full name</label>
                                            <input id='name' minLength={3} maxLength={20} name='name' type="text" className="form-control" required />
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="row align-items-center justify-content-center py-2">
                                        <div className="col-md-9">
                                            <label className='form-label mb-1 fw-bold ms-1' htmlFor="email">Email</label>
                                            <input id='email' type="email" name='email' className="form-control" placeholder="example@example.com" required />
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="row align-items-center justify-content-center py-2">
                                        <div className="col-md-9">
                                            <label className='forn-label mb-1 fw-bold ms-1' htmlFor="contact">Contact Number</label>
                                            <input id='contact' type='tel' name='contact' minLength={10} maxLength={10} className="form-control" placeholder="Contact Info" required></input>
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="row align-items-center justify-content-center py-2">
                                        <div className="col-md-9">
                                            <label className='forn-label mb-1 fw-bold ms-1' htmlFor="resume">Upload Resume</label>
                                            <input className="form-control" name='resume' id="resume" type="file" />
                                            <div className="small text-muted mt-2">Upload your CV/Resume in pdf format. Max file
                                                size 10 MB</div>
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    { !methods.isLoading && <div className="my-center-x px-5 py-4">
                                        <button type="submit" className="btn btn-primary" onClick={(e) => { methods.uploadData(e) }}>Send Application</button>
                                    </div> }
                                    {methods.isLoading && <Spinner msg = {'Uploading'} />}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Student