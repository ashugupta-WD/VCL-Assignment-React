import { useState } from 'react'
import sampleContext from './sampleContext'

const LoginState = (props) => {
    //eslint-disable-next-line
    const [alertMessage, setalertMessage] = useState(null);
    const [studentAllowed, setstudentAllowed] = useState(false);
    const [staffAllowed, setstaffAllowed] = useState(false);
    const [uploaded, setuploaded] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [studentData, setstudentData] = useState([])

    function showPassword() {
        const pass = document.getElementById('password');
        if (pass.type === 'password') { pass.type = 'text' } else { pass.type = 'password'; }
    }

    async function checkLogin(e) {
        e.preventDefault();
        const form = document.getElementById('loginForm');
        const formData = new FormData(form);
        const obj = Object.fromEntries(formData.entries());
        if ((obj.enroll !== undefined && obj.enroll.length >= 11) && (obj.password !== undefined && obj.password.length >= 8)) {
            let response;
            try {
                await fetch(`http://localhost:5000/login`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj)
                }).then(res => res.json()).then(data => response = data);
                if (response.type === 'Student') {
                    setstudentAllowed(response.isAllowed);
                    setstaffAllowed(false);
                }
                else if (response.type === 'Staff') {
                    setstaffAllowed(response.isAllowed)
                    setstudentAllowed(false);
                }
                else if (response.type === 'Error')
                    setalertMessage({ type: 'Error', msg: 'Enter Correct Credentials!' })
                else
                    setalertMessage({ type: 'Error', msg: 'Internal Server Error!' })

                setTimeout(() => {
                    setalertMessage(null)
                }, 3000);
            } catch (error) {
                console.log(error);
            }
        }
        else {
            setalertMessage({ type: 'Error', msg: 'Enter Correct Credentials!' })
            setTimeout(() => {
                setalertMessage(null);
            }, 3000);
        }
    }

    function checkExtension(name) {
        let arr = name.split('.');
        let ext = arr[arr.length - 1];
        if (ext !== 'pdf') {
            return false;
        }
        return true;
    }

    async function uploadData(e) {
        e.preventDefault();
        setisLoading(true);
        let phoneRegex = /^[0-9]{10}$/g;
        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const form = document.getElementById('studentForm');
        const formData = new FormData(form);
        const obj = Object.fromEntries(formData.entries());
        const { name, email, contact, resume } = obj
        let response;
        if (phoneRegex.test(contact) && emailRegex.test(email) && name.length >= 3 && checkExtension(resume.name)) {
            await fetch('http://localhost:5000/uploadtext', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify({ name: name, email: email, contact: contact })
            }).then(res => res.json()).then((json) => response = json);
            if (response.process) {
                //eslint-disable-next-line
                let nextResponse;
                await fetch('http://localhost:5000/uploadfile', {
                    method: "POST",
                    credentials: "include"
                    ,
                    body: formData
                }).then(res => res.json()).then((json) => nextResponse = json);
                setisLoading(false);
                setuploaded(true);
            }
        }
        else {
            setalertMessage({ type: 'Error', msg: 'Enter Correct Credentials!' })
            setTimeout(() => {
                setalertMessage(null)
            }, 3000);
        }
    }

    function logOut() {
        setstaffAllowed(false);
        setstudentAllowed(false);
        setuploaded(false);
    }

    function dateFormatter(d) {
        let newDate = (new Date(d).getUTCDate()) + '/' + (new Date(d).getUTCMonth() + 1) + '/' + (new Date(d).getUTCFullYear());
        return newDate
    }

    function timeFormatter(d) {
        let newTime = '';
        let hr = (new Date(d).getUTCHours() + 5) % 12;
        let md = '';
        if (new Date(d).getUTCHours() + 5 > 11) { md = "PM" } else { md = "AM" }
        let mn = (new Date(d).getUTCMinutes() + 30)
        let sc = new Date(d).getUTCSeconds();
        if (mn > 59) {
            hr += 1;
            mn = mn % 60;
        }
        if (hr < 10) { hr = '0' + hr; }
        if (mn < 10) { mn = '0' + mn; }
        if (sc < 10) { sc = '0' + sc; }
        newTime += hr + ':' + mn + ':' + sc + " " + md
        return newTime;
    }

    async function fetchData() {
        let response;
        try {
            await fetch('http://localhost:5000/fetchdata').then(res => res.json()).then(data => response = data);
            setstudentData(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <sampleContext.Provider value={{ showPassword, checkLogin, alertMessage, studentAllowed, staffAllowed, setalertMessage, uploaded, uploadData, isLoading, logOut, studentData, fetchData, timeFormatter, dateFormatter}}>
            {props.children}
        </sampleContext.Provider>
    )
}

export default LoginState