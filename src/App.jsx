import React from 'react'
import Navbar from './components/Navbar'
import * as ic from 'react-bootstrap-icons';
import heroImage from './assets/heroImage.jpg';
import logo from './assets/logo.png';
import logo2 from './assets/logo2.png';
import './App.scss'
import { Details, Courses, PopularVideosCard } from './components/Card';

function App() {
  return (
    <div className='app'>

      {/* Top Links */}
      <div className="top-links bg-primary d-flex justify-content-between p-1 text-white">
        
        <div className='d-flex ps-md-5 ms-md-5'>
          <li className='p-1'>FAQ |</li>
          <li className='p-1'>Help Desk |</li>
          <li className='p-1'>Login</li>
        </div>

        <div className="d-flex me-md-5 pe-md-5">
          <ic.Facebook className='fs-5 my-auto m-1' />
          <ic.Youtube className='fs-5 my-auto m-1' />
          <ic.Instagram className='fs-5 my-auto m-1' />
        </div>

      </div>

      {/* Contact Section */}
      <div className="contact-section row g-0">
        <div className="logo-img p-2 ps-5 col-md-6">
          <img src={logo2} alt="Logo" />
        </div>

        <div className="contact d-flex justify-content-end col-md-6">

          <div className="call p-3 d-flex">
            <ic.TelephoneFill className='fs-1 my-2 mx-1 p-1  text-white bg-dark rounded' />
            <div className="">
              <span className='text-secondary'>CALL US TODAY</span>
              <p>+91 9999988877</p>
            </div>
          </div>

          <div className="available-time p-3 me-5 d-flex">
            <ic.Clock className='fs-1 my-2 p-1' />
            <div className="">
              <span className='text-secondary'>WE ARE OPEN</span>
              <p>Mon-Fri 8:00-16:00</p>
            </div>
          </div>

        </div>

      </div>

      {/* Navbar section */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section position-relative">
        <div className=" w-100">
          <img src={heroImage} alt="" className="start-0 top-0 w-100" />
        </div>
        <div className='hero-detail position-absolute'>
          <p className='d1'>BEST EDUCATION</p>
          <p className='d2'>FOR YOUR BETTER FUTURE</p>
          <p className='d3'>Lorem ipsum dolor Lorem ipsum dolor sit amet</p><br />
          <p className='d4'>Lorem ipsum dolor sit</p>
        </div>
      </div>

      {/* Registration */}
      <div className="register px-5 py-4">
        <div className="container">
          <h2 className='text-white fs-3'>Get a Free <span className="text-primary">Registration</span>!</h2>
          <form className="register-form text-secondary row">
            <input className='col-md-2' type="text" placeholder='Enter Email' />
            <select className='col-md-2' >
              <option value="Courses">Courses</option>
            </select>
            <input className='col-md-2' type="number" placeholder='Phone Number' />
            <input className='col-md-2' type="date" placeholder='Date of Birth' />
            <button className='col-md-2' type="submit">Submit Now</button>
          </form>
        </div>
      </div>

      {/* welcome section */}
      <div className="welcome container row pt-5 mx-auto">
        <div className="detail p-3 col-md-3">
          <p className='fs-3'>WELCOME TO OUR <br />
            <span className='fs-3 text-primary'>UNIVERSITY</span>
          </p>
          <p className=' text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quidem suscipit? Cum earum eius debitis</p>
          <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo provident ut eveniet unde nobis vel voluptatem, ea perferendis! Facilis aliquam laborum</p>
          <button className='details-button text-white p-1 px-2' style={{ backgroundColor: "rgba(7,26,63)" }}>View Details</button>
        </div>
        <div className="cards col-md-9 row">
          <Details />
          <Details />
          <Details />
        </div>
      </div>

      {/* Courses Section */}
      <div className="courses mt-5 pt-2 bg-light">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h1 className='fs-3'><span className='border-bottom border-primary border-2'>OUR</span> <span className='text-primary'>COURSE</span></h1>
            <button className='text-white px-md-4 px-1' style={{ backgroundColor: "rgba(7,26,63)" }}>View All</button>
          </div>
          <div className="row py-5 mx-auto">
            <Courses />
            <Courses />
            <Courses />
            <Courses />
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="statistics p-5 gx-0 text-white row" style={{ backgroundColor: "rgba(7,26,63)" }}>

        <div className="col-md-3 d-flex justify-content-md-center">
          <div className='mt-2'><ic.EmojiSmile className='text-white fs-1' /></div>
          <div className="px-3">
            <h4 className='text-bold'>2450+</h4>
            <p>HAPPY STUDENTS</p>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-md-center">
          <div className='mt-2'><ic.EmojiSmile className='text-white fs-1' /></div>
          <div className="px-3">
            <h4 className='text-bold'>10+</h4>
            <p>TOTAl TEACHERS</p>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-md-center">
          <div className='mt-2'><ic.EmojiSmile className='text-white fs-1' /></div>
          <div className="px-3">
            <h4 className='text-bold'>500+</h4>
            <p>CERTIFICATION</p>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-md-center">
          <div className='mt-2'><ic.EmojiSmile className='text-white fs-1' /></div>
          <div className="px-3">
            <h4 className='text-bold'>2000+</h4>
            <p>EXAMS</p>
          </div>
        </div>

      </div>

      {/* Popular videos section */}
      <div className="videos container py-5 mt-5">
        <div className="d-flex justify-content-between">
          <h1 className='fs-3'><span className='border-bottom border-primary border-2'>POPULAR</span> <span className='text-primary'>VIDEOS</span></h1>
          <button className='text-white px-4 my-1' style={{ backgroundColor: "rgba(7,26,63)" }}>View All</button>
        </div>
        <div className="row py-5">
          <PopularVideosCard />
          <PopularVideosCard />
          <PopularVideosCard />
          <PopularVideosCard />

        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "rgba(7,26,63)", textDecoration: "none" }}>
        <div className="container row text-white p-5 mx-auto">
          <div className="col-md-3 y-3">
            <img src={logo} alt="LOGO" />
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam quisquam beatae sunt reprehenderit delectus ipsam libero tenetur, magni saepe, debitis vero excepturi similique ea. Cumque, ab doloribus! Consequuntur, veritatis.
            </p>
            <div className="d-flex col-md-3 y-3">
              <ic.Facebook className='fs-3 text-primary mx-1' />
              <ic.Instagram className='fs-3 text-primary mx-1' />
              <ic.Youtube className='fs-3 text-primary mx-1' />
            </div>
          </div>
          <div className="courses-footer col-md-3 y-3">
            <h4 className='text-bold'>Courses</h4>
            <a href="">
              <li className='py-1'>HTML & CSS</li>
            </a>
            <a href="">
              <li className='py-1'>Java</li>
            </a>
            <a href="">
              <li className='py-1'>Python</li>
            </a>
            <a href="">
              <li className='py-1'>Power Point</li>
            </a>
            <a href="">
              <li className='py-1'>MS-Office</li>
            </a>
          </div>
          <div className="usefulLinks col-md-3 y-3 col-sm-6">
            <h4 className='text-bold'>Useful Links</h4>

            <div className="d-flex py-1">
              <ic.Check2 className='my-auto mx-2 bg-primary text-' />
              <a href="">About us</a>
            </div>
            <div className="d-flex py-1">
              <ic.Check2 className='my-auto mx-2 bg-primary text-' />
              <a href="">Videos</a>
            </div>
            <div className="d-flex py-1">
              <ic.Check2 className='my-auto mx-2 bg-primary text-' />
              <a href="">Blog</a>
            </div>
            <div className="d-flex py-1">
              <ic.Check2 className='my-auto mx-2 bg-primary text-' />
              <a href="">Students</a>
            </div>
            <div className="d-flex py-1">
              <ic.Check2 className='my-auto mx-2 bg-primary text-' />
              <a href="">Content</a>
            </div>
          </div>
          <div className='bg-primary col-md-3'>
            <div className="call d-flex m-auto my-3">
              <ic.TelephoneFill className='fs-1 my-2 mx-1 p-2 text-primary bg-white rounded rounded-5' />
              <div className="">
                <span className=''>For More Details</span>
                <p>+91 9999988877</p>
              </div>
            </div>
          </div>
        </div>
        <div className='p-2 text-white d-flex justify-content-between'  style={{backgroundColor:"rgb(23, 48, 102)"}}>
        <div className='d-flex ps-5 ms-5'>
          <li className='p-1'>FAQ |</li>
          <li className='p-1'>Help Desk |</li>
          <li className='p-1'>Login</li>
        </div>
        <div className="pe-5">
          <a href="#navbar"><ic.ChevronUp className='bg-primary p-1 fs-4 rounded rounded-5'/></a>
        </div>
        </div>
      </footer>

    </div>
  )
}

export default App