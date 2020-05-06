import React from 'react';
import './cards.css';
function Cards() {
    return(
        <div className="Cards">
         <div className="card">
           <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
              become a well-oiled collaboration machine.</p>
           <div className="board">
             <img src={require('../../assets/images/profile-1.jpg')} alt="" className="image"/>
             <p>Satish Patel</p>
             <p>Founder & CEO, Huddle</p>
           </div>
         </div>
         <div className="card">
           <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
              become a well-oiled collaboration machine.</p>
           <div className="board">
             <img src={require('../../assets/images/profile-2.jpg')} alt="" className="image"/>
             <p>Bruce McKenzie</p>
             <p>Founder & CEO, Huddle</p>
           </div>
         </div>
         <div className="card">
           <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
              become a well-oiled collaboration machine.</p>
           <div className="board">
             <img src={require('../../assets/images/profile-3.jpg')} alt="" className="image"/>
             <p>Iva Boyd</p>
             <p>Founder & CEO, Huddle</p>
           </div>
         </div>
       </div>
    )
}

export default Cards