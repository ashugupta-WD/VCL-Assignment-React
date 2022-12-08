import React, { useEffect, useRef, useContext } from 'react'
import sampleContext from '../context/sampleContext'

function Staff() {
    const methods = useContext(sampleContext);
    const didmount = useRef(false);

    useEffect(() => {
        if(!didmount){
            return ()=>{
                didmount.current = true;
            }
        }
        methods.fetchData();
        // eslint-disable-next-line
    }, [])


    return (
        <>
            <div className="px-2 my-3 container-fluid" style={{ maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="rounded-pill bg-primary text-center fw-bold fs-5 text-white py-3 mx-2" style={{ width: '100%' }}>Upload History</div>
                <div className='container-fluid my-table'>
                    <div className='container-fluid fw-bold mt-3 mb-1 my-table-head border-bottom'>
                        <div className='text-center fw-bold py-2'>Name</div>
                        <div className='text-center fw-bold py-2'>Email</div>
                        <div className='text-center fw-bold py-2'>Contact</div>
                        <div className='text-center fw-bold py-2'>TIme</div>
                        <div className='text-center fw-bold py-2'>Action</div>
                    </div>
                    {methods.studentData.length > 0 && methods.studentData.map((item, index) => {
                        return (
                            <div key={index} className='container-fluid my-table-body border-bottom'>
                                <div className='text-center py-2'>{item.name}</div>
                                <div className='text-center py-2'>{item.email}</div>
                                <div className='text-center py-2'>{item.contact}</div>
                                <div className='text-center py-2'>{methods.dateFormatter(item.timestamp)}<br />{methods.timeFormatter(item.timestamp)}</div>
                                <div className='text-center py-2'>
                                    <a target='_blank' rel='noreferrer' href={require(`../`+ item.resume)}><img src="https://cdn-icons-png.flaticon.com/512/4208/4208397.png" alt="Download" title='Donwload' download /></a>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </>
    )
}

export default Staff