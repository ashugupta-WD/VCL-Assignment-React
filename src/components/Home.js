import React, { useContext } from 'react'
import sampleContext from '../context/sampleContext'
import Login from './Login';
import Staff from './Staff';
import Student from './Student';
import Thankyou from './Thankyou';

function Home() {
    const methods = useContext(sampleContext);

    return (
        <>
            {(!methods.studentAllowed && !methods.staffAllowed) && <Login />}
            {!methods.uploaded && methods.studentAllowed && <Student />}
            {/* <img className='py-3' src={require(`../` + imgPath)} alt="" style={{width: '100px', height: '100px'}} /> */}
            {methods.uploaded && <Thankyou />}
            {methods.staffAllowed && <Staff />}
        </>
    )
}

export default Home