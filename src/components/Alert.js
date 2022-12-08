import React from 'react'

export default function Alert(props) {
    const {type, msg} = props.data;
    // console.log(type);
    return (
        <>
            {type === 'Error' && <div className='my-alert text-light fw-bold py-2 px-2 bg-danger' style={{margin: '0'}}>{type + '! ' + msg}</div>}
            {type === 'Success' && <div className='my-alert text-light fw-bold py-2 px-2 bg-primary' style={{margin: '0'}}>{type + '! ' + msg}</div>}
        </>
    )
}
