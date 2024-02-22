import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
          image: PickMeals,
          title: "Pick Meals",
          text: " Customer near by can see what are the menu on pickmeals from the each delivery contractor and how much time it will take to reach to them real-time. (Exactly like Uber Cab)",
        },
        {
          image: ChooseMeals,
          title: "Choose How Often",
          text: "We are very Much Excited About Customer Feedback and Satisfaction.New Dishes will be included Often.Please Do suggest The needfull.",
        },
        {
          image: DeliveryMeals,
          title: "Fast Deliveries",
          text: "Pickmeals deliver ready to eat meals to customer within 15 min with free home delivery. We have all Indian cuisine dish in our menu.",
        },
      ];

  return (
    <div className="work-section-wrapper">
    <div className="work-section-top">
      <p className="primary-subheading">Work</p>
      <h1 className="primary-heading">How It Works</h1>
      <p className="primary-text">
      It all started with Colonel Harland Sanders creating a finger lickin’ good recipe more than 75 years ago. A list of secret herbs and spices scratched out on the back of his kitchen door, that continues to be followed across 145 countries, with more than 800,000 team members breading and freshly preparing bucket after bucket of our signature Hot & Crispy chicken.
      </p>
    </div>
    <div className="work-section-bottom">
      {workInfoData.map((data) => (
        <div className="work-section-info" key={data.title}>
          <div className="info-boxes-img-container">
            <img src={data.image} alt="" />
          </div>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Work