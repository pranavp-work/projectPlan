import React, { useState } from 'react'
import logo from '../../assets/plan-Logo.png'
import demo from '../../assets/phone-demo.png'
import loginImg from '../../assets/loginLogo.png'
import registerImg from '../../assets/registerLogo.png'
import ricebowl from '../../assets/ricebowl.png'
import { Link } from 'react-router-dom'

function UserAuth({ register }) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    const inputStyles = {
        borderColor: isFocused? 'grey' : '#00bf63',
        border: '1px solid grey',
        backgroundColor: isFocused? 'lightgreen' : 'white',
        color: 'black'

    }

  return (
    <>
        <div className="container" style={{height: '100vh', width: '100%'}}>
            <div className="row px-5 py-5" style={{height: '100%'}}>

                <div className="col-md-6" style={{height: '100%'}} >
                    <div style={{height: '100%', width: '100%', border: '2px solid #00bf63', borderRadius: '40px'}} className='d-flex flex-column justify-content-center align-items-center py-5 px-5'>

                        { !register ?
                        <>
                        {/* loginImg */}
                        <h6>New here?</h6>
                        <Link to = '/register'><div style={{height: '40px', width: '100px', background: '#00bf63', marginBottom: 'auto'}} className='px-3 py-2 rounded-5 d-flex align-items-center justify-content-center'>
                            <img src={registerImg} alt="" style={{height: 'auto', width: '100%'}} />
                        </div></Link>

                        <div style={{height: '200px', width: '200px', marginBottom: 'auto'}}>
                            <img src={ricebowl} alt="" style={{width: '100%', height: '100%'}} />
                        </div>
                        
                        {/* loginForm */}
                        <input type="email" placeholder='Email' className='w-100 px-3 py-2 rounded-4 my-1' onFocus={handleFocus} onBlur={handleBlur} style={inputStyles} />
                        <input type="password" placeholder='Password' className='w-100 px-3 py-2 rounded-4 my-1' onFocus={handleFocus} 
                        onBlur={handleBlur} style={inputStyles} />
                        <button className='btn w-100 rounded-4 mt-3' style={{background: '#00bf63', color: 'white'}}>Login</button>
                        </>
                        :
                        <>
                        {/* registerImg */}
                        <h6>Already, a user?</h6>
                        <Link to = '/login'><div style={{height: '40px', width: '100px', background: '#00bf63', marginBottom: 'auto'}} className='px-3 py-2 rounded-5 d-flex align-items-center justify-content-center'>
                            <img src={loginImg} alt="" style={{height: 'auto', width: '100%'}} />
                        </div></Link>

                        <div style={{height: '200px', width: '200px', marginBottom: 'auto'}}>
                            <img src={ricebowl} alt="" style={{width: '100%', height: '100%'}} />
                        </div>
                        
                        {/* registerForm */}
                        <input type="text" placeholder='First Name' className='w-100 px-3 py-2 rounded-4 my-1' onFocus={handleFocus} onBlur={handleBlur} style={inputStyles}/>
                        <input type="text" placeholder='Last Name' className='w-100 px-3 py-2 rounded-4 my-1' onFocus={handleFocus} onBlur={handleBlur} style={inputStyles} />
                        <input type="email" placeholder='Email' className='w-100 px-3 py-2 rounded-4 my-1' onFocus={handleFocus} onBlur={handleBlur} style={inputStyles} />
                        <input type="password" placeholder='Password' className='w-100 px-3 py-2 rounded-4 my-1' onFocus={handleFocus} 
                        onBlur={handleBlur} style={inputStyles} />
                         <button className='btn w-100 rounded-4 mt-3' style={{background: '#00bf63', color: 'white'}}>Register</button>
                        </>
                        }

                    </div>
                </div>

                <div className="col-md-6" style={{height: '100%'}}>
                    <div style={{height: '100%', width: '100%', border: '2px solid white', borderRadius: '40px', background: '#00bf63'}} className='d-flex flex-column align-items-between'>
                        <img src={logo} alt="" style={{height: '25%', width: '175px', marginBottom: 'auto'}} />
                        <img src={demo} alt="" style={{marginTop: 'auto', height: '75%'}}/>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default UserAuth