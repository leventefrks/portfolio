// contact 

import React from 'react';

const Contact = props => { 
 
   console.log(props.page);

	return (
		<div className="contact" onClick={props.onClick}>
	       <h1>Contact</h1>
	     </div>
	     );
}

export default Contact;