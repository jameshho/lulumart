import React from 'react'

const SignIn = () => {
    return (
        <div className='signin-main'>
            <form className='form'>
            <h1>LOGIN</h1>
                <input className="form--input" type="email" name="email" placeholder='User Name' required />


                <input className="form--input" type="password" name="password" placeholder='Password' required />

                <button type="submit" className='form--button'>LOGIN</button>
            </form>
        </div>
    )
}

export default SignIn