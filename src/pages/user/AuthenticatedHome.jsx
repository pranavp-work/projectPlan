import React from 'react'
import AuthenticatedHeader from '../../components/user/AuthenticatedHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import DropdownButton from '../../components/user/DropdownButton'


function AuthenticatedHome() {

    const homeBackgroundLG = {
        background: 'rgb(0,0,0)',
        background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,93,8,1) 100%, rgba(225,211,255,1) 100%, rgba(0,0,0,1) 100%) '
    }

    const spinBtnLG = {
        background: 'rgb(22,247,0)',
        background: 'linear-gradient(90deg, rgba(22,247,0,1) 13%, rgba(15,178,191,1) 100%)'
    }

  return (
    <>
        < AuthenticatedHeader />

        <div className="py-5" style={homeBackgroundLG}>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="row" style={{color: 'white'}}>
                        <div className="col-md-8">
                            <h4>Foodie Roulette: Where Should I Eat/What Should I Order?</h4>
                            <p className='mt-4'>Don't know where to eat or which dishes to try next? Take a chance on something new with this random restaurant and cafe generator, and let the roulette pick a spot or dish from your preferred cuisine!</p>
                        </div>
                        <div className="col-md-4">
                            <button className='btn' style={{color: 'white'}}><FontAwesomeIcon icon={faShareNodes} /> Share</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="row d-flex justify-content-center" style={{color: 'white'}}>
                                <div className="col-md-5">
                                    <p>PREFERENCE</p>
                                    <p>CUISINE</p>
                                    <p>NEAR</p>
                                    <p>RATING</p>
                                </div>
                                <div className="col-md-7">
                                    < DropdownButton />
                                    < DropdownButton />
                                    < DropdownButton />
                                    < DropdownButton />
                                </div>
                                <button className='btn w-50 rounded-4' style={spinBtnLG}>SPIN</button>
                            </div>
                        </div>
                        <div className="col-md-8"></div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    </>
  )
}

export default AuthenticatedHome