import React from 'react'
import ProfilePic from "../Assets/kfccolonel.png";
import { AiFillStar } from "react-icons/ai";
export const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
    <div className="work-section-top">
      <p className="primary-subheading">Testimonial</p>
      <h1 className="primary-heading">What They Are Saying</h1>
      <p className="primary-text">
       We love the optimism and belief in people that this reflects.Foodie is a place that believes in people's intentions and is committed to developing their potential.
      </p>
    </div>
    <div className="testimonial-section-bottom">
      <img src={ProfilePic} alt="" />
      <p>
       "There is no Reason To be the richest in the cemetery.
       You can't Do any buisness from there"~colonel Sanders(1930-1980)
      </p>
      <div className="testimonials-stars-container">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
    </div>
  </div>
  );
};
export default Testimonial;
