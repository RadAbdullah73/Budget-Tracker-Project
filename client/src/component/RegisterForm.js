import React, { useState } from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
import { navigate } from '@reach/router';
import useReg from '../hooks/useReg';
import "./assets/css/styleReg.css"

export default function RegisterForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState('')
    const [salary, setSalary] = useState('')
    const { reg, isLoading, error } = useReg()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password)
        await reg(firstName, lastName, email, password, confirmPassword, salary)

    }

    return (
        <div className='mann' >
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form className='formForReg' onSubmit={handleSubmit}>
                <h2>Registration</h2>

                <div className='Dlapel'>
                <input type="text" placeholder="First Name" id="username" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                <input type="text" placeholder="Last Name" id="username" onChange={(e) => setLastName(e.target.value)} value={lastName} />

                </div>
                <div className='Dlapel'>
               
                <input type="email" placeholder="Email" id="username" onChange={(e) => setEmail(e.target.value)} value={email} />

                <input type="text" placeholder="Salary" id="username" onChange={(e) => setSalary(e.target.value)} value={salary} />

                
                </div>
                <div className='Dlapel'>
                <input type="password" placeholder="Password" id="username" onChange={(e) => setPassword(e.target.value)} value={password} />


                
                <input type="password" placeholder="Confirm Pass" id="username" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />

            
                </div>

                <button className='btnReg'>Register</button>

            </form>
            {error && <p>{error}</p>}
        </div>
    )
}