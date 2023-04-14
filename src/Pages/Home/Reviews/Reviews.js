import React from 'react';

import Review from './Review';

const Reviews = () => {

    const reviews= [
        {
            id:1,
            name: "Nasim",
            userReview: "This Site providing good facility. Easily and fast way to get appointment from Doctors",
            location: "Sylhet",
            
            

        },
        {
            id:2,
            name: "Koysor",
            userReview: "Services was very good & Easy way get solution for all kind of Patients.",
            location: "Sylhet",
           

        },
        {
            id:3,
            name: "Aminul",
            userReview: "I don't have to Find Doctors in Offline anymore, This Site is a Lifesaver.",
            location: "Dhaka",
            

        }
    ]
    return (
        <section style={{margin:'100px 0px'}}>
            <h5>Reviews</h5>
                    <h3 style={{fontFamily: "serif"}} className="mb-5 mt-2 text-primary"> Listen from Our Patients</h3>
            <div className='row justify-content-center gap-5 mx-0'>
                {
                    reviews.map( (review)=>( 
                        <Review key={review.id} review={review}> </Review>
                    ))
                }
            </div>
        </section>
    );
};

export default Reviews;