import React from 'react'
import userHomeBgImg from '../../assets/userHomeBackgroundOne.png'
import TrendingPlaces from '../../components/user/TrendingPlaces'
import MostOrderedDishes from '../../components/user/MostOrderedDishes'
import sectionOne from '../../assets/sectionImages/sectionOneImg.png'
import sectionTwo from '../../assets/sectionImages/sectionTwoImg.png'
import sectionThree from '../../assets/sectionImages/sectionThreeImg.png'

function UserHome() {

  // const containerStyle = {
  //   position: 'relative',
  //   width: '100%',
  //   height: '100vh'
  // }

  // const textContainerStyle = {
  //   position: 'absolute',
  //   top: '20%',
  //   left: '5%',
  //   color: 'white'
  // }

  return (
    <>
    {/* section 1 */}
      <div className="row px-5 py-5" style={{height: '75vh', width: '100%'}}>
        <div className="col-md-6 d-flex justify-content-start align-items-center" style={{background: '#00bf63'}}>
          <div>
            <h2>CHECK OUT OUR <br /> QUICK ROULETTE</h2>
            <p>Helps making decisions easily <br />on picking food/restaurants based on your preferences.</p>
            <button className='btn mt-3' style={{background: 'black', color: 'white'}}>Roulette</button>
          </div>
         
        </div>
        <div className="col-md-6" style={{background: '#00bf63'}}>

        </div>
      </div>

      {/* section 2 */}

      <h2 className='text-center'>TRENDING THIS WEEK</h2>
      <p className='text-center'>according to our data from 1000 users</p>

      <div className="row mt-5">
        <div className="col-md-6">
        <h3 className='text-center'>MOST VISITED RESTAURANTS/CAFES</h3>
          <div>
            <div className="row mt-5">
              <div className="col-md-4">< TrendingPlaces /></div>
              <div className="col-md-4">< TrendingPlaces /></div>
              <div className="col-md-4">< TrendingPlaces /></div>
            </div>
          </div>
          
        </div>
        <div className="col-md-6">
          <h3 className='text-center'>MOST ORDERED DISHES</h3>
          <p className='text-center'>online</p>
          <div>
          <div className="row">
              <div className="col-md-4">< MostOrderedDishes /></div>
              <div className="col-md-4">< MostOrderedDishes /></div>
              <div className="col-md-4">< MostOrderedDishes /></div>
            </div>
          </div>
          
        </div>
      </div>

      {/* section 3 */}
      <div className="row mt-5">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div>
          <h2>HEALTH & HYGIENE</h2>
          <ul>
            <li>Safe & Clean Dining Options: We prioritize restaurants that maintain high hygiene standards to ensure your safety while dining out or ordering in.</li>
            <li>Ethically Sourced Ingredients: We support restaurants that prioritize transparency and responsible sourcing of their ingredients.</li>
            <li>Green Restaurants: Choose from establishments that follow environmentally conscious practices, from reducing carbon footprints to minimizing food waste.</li>
          </ul>
          </div>
          
        </div>
        <div className="col-md-6">
          <img src={sectionOne} alt="" style={{width: '100%', height: '100%'}} />
        </div>
      </div>

      {/* section 4 */}
      <div className="row mt-5">
      <div className="col-md-6">
        <img src={sectionTwo} alt="" style={{width: '100%', height: '100%'}} />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div>
          <h2>SUSTAINABILITY</h2>
          <ul>
            <li>Eco-Conscious Dining: Find restaurants that use eco-friendly packaging, reducing waste and promoting sustainability.</li>
            <li>Healthy Choices for All: From vegetarian to vegan, gluten-free to low-calorie, we help you find restaurants that cater to a variety of dietary needs.</li>
            <li>Trusted Restaurant Partners: Only restaurants with spotless kitchens and verified hygiene practices are featured on our platform.</li>
          </ul>
          </div>
          
        </div>
        
      </div>

      {/* section 5 */}
      <div className="row mt-5">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div>
          <h2>SPEED & CONVENIENCE</h2>
          <ul>
            <li>Quick Restaurant Recommendations: Whether you’re looking for a quick bite or planning a family dinner, we provide fast, personalized restaurant suggestions based on your preferences.</li>
            <li>Real-Time Availability: Get live updates on restaurant availability, wait times, and current offers.</li>
            <li>Seamless Booking & Delivery: Book reservations, place orders, or get live updates on your takeout or delivery, all with a few simple taps.</li>
          </ul>
          </div>
          
        </div>
        <div className="col-md-6">
        <img src={sectionThree} alt="" style={{width: '100%', height: '100%'}} />
        </div>
      </div>

    </>
  )
}

export default UserHome