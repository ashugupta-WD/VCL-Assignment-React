import React from 'react'

export default function Spinner(props) {
    console.log(props);
    return (
        <div className='d-flex justify-content-center my-5'>
            <span className='fs-5 fw-bold me-3'>{props.msg}...</span>
            <div className="spinner-border text-primary" role="status"></div>
        </div>
    )
}
