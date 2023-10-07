import React from 'react'
import heroImage from '../assets/heroImage.jpg'

const Details = () => {
    return (
        <div className="card card-md-3 mx-auto border-0" style={{ width: "18rem" }}>
            <img src={heroImage} className="card-img-top" alt="..." />
            <div className="card-body ps-1">
                <h5 className="card-title">EXPERIENCE YOURSELF</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam voluptate, magni maiores non eligendi!</p>
            </div>
        </div>
    )
}

const Courses = () => {
    return (
        <div className="card g-0 m-2 card-md-3 mx-auto border-0 position-relative" style={{ width: "18rem" }}>
            <div className="position-absolute end-0 px-3 text-white bg-dark opacity-75 border-start border-5 border-primary rounded">$299</div>
            <img src={heroImage} className="card-img-top" alt="..." />
            <div className="card-body ps-1 pt-4">
                <h5 className="card-title">EXPERIENCE YOURSELF</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam voluptate, magni maiores non eligendi!</p>
            </div>
            <button className='bg-dark text-white w-50 m-2'>View Details</button>
        </div>
    )
}
const PopularVideosCard = () => {
    return (
        <div className="card m-4 g-0 mx-auto border-0" style={{ width: "18rem" }}>
            <img src={heroImage} className="card-img-top" alt="..." />
            <div className="card-body ps-1 pt-4">
                <h5 className="card-title">EXPERIENCE YOURSELF</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam voluptate, magni maiores non eligendi!</p>
            </div>
            <button className='bg-dark text-white w-50'>WATCH NOW</button>
        </div>
    )
}



export {Details, Courses, PopularVideosCard};