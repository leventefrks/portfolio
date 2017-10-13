import React from 'react';
import picture from './portfolio_240x240.png';

const Avatar = () => {
		return(
		 <div className="avatar">
		  <img className="avatar__picture" src={picture} alt="levente farkas"/>
		  <h1 className="avatar__name">Levente Farkas</h1>
		  <h3 className="avatar__position">front-end developer</h3>
		  <p className="avatar__text">My name is Levente Farkas currently living in Budpest, Hungary and I have been working as a <strong>freelance frontend 
         developer</strong> for 4+ years.
         <br/><br/>I have a wide range of skills that include frontend development <br/>(HTML5, CSS3, SASS/LESS, CSS Frameworks, Responsive Web design, Javascript, Jquery, ReactJs, Redux)</p>
		 </div>
		);
	}

export default Avatar;

