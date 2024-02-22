import React from 'react'
import './Expl.css'
const Explore = () => {
  return (
    <>
   

   <a href="/Vegetarian"><div className="a1"><button class="custom-btn btn-7"><span>Vegetarian</span></button></div></a>
   <a href="/Nonvegetarian"> <div className="a2"><button class="custom-btn btn-7"><span>Non-Vegetarian</span></button></div></a>
   <a href="/Streetfoods"><div className="a3"> <button class="custom-btn btn-7"><span>Street-Foods</span></button></div></a>
   <a href="/Kfc"><div className="a4"> <button class="custom-btn btn-7"><span>KFC Special</span></button></div></a>

<div className="d0">
    <div class="container-fluid contenedor text-center">
       <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
         <article class="text-left">
            <h2>Vegetarian <br/>Traditionals</h2>
            <h4>Relishing the flavours of south india </h4>
         </article>
         <img src="https://travellersjunction.com/wp-content/uploads/2021/01/128549622_1017616608704848_423215144526136406_n.jpg" alt=""/>
      </div>
   </div>
   </div>

<div className='d1'>
   <div class="container-fluid contenedor text-center">
       <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
         <article class="text-left">
            <h2>Non <br/>Vegetarian</h2>
            <h4>The Food that truly satisfies</h4>
         </article>
         <img src="https://wallpapercave.com/wp/wp8202625.jpg" alt=""/>
      </div>
   </div>
   </div>


<div className="d2">
<div class="container-fluid contenedor text-center">
       <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
         <article class="text-left">
            <h2>Street<br/>Foods</h2>
            <h4>Follow the Aroma of street Food</h4>
         </article>
         <img src="https://th.bing.com/th/id/R.2219d18e293c4babd18d29876cf78c8c?rik=HZjUnqUJLnO3Fg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-SH9cilHKDZo%2fUD7NwLg-u0I%2fAAAAAAAADhE%2fBxQNg2H6yAY%2fs640%2f101120-penangmarathon-053.jpg&ehk=soue7edfik7IZkjgGzH8PrYb%2bSSvnZAiJHpWS2TAmmw%3d&risl=&pid=ImgRaw&r=0" alt=""/>
      </div>
   </div>
</div>

<div className="d3">
<div class="container-fluid contenedor text-center">
       <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
         <article class="text-left">
            <h2>KFC<br/>Special</h2>
            <h4>North America's Hospitality Dish</h4>
         </article>
         <img src="https://th.bing.com/th/id/OIP.CgBZ11cMfW9yTYYHTZHCZQHaKA?w=444&h=600&rs=1&pid=ImgDetMain" alt=""/>
      </div>
   </div>
</div>

    </>
  )
}

export default Explore;