// main
import React from 'react';
import { Route } from 'react-router-dom';
import Container from './container';
import Home from './home';
import About from './about';
import Contact from './contact';
import Projects from './projects';

class Main extends React.Component{

	render(){
	return (
           <Container>
           <Route exact path='/' component={Home}/>
           <Route path='/about' component={About}/>
           <Route path='/projects' component={Projects}/>
           <Route path='/contact' render={props => <Contact someProp='34' {...props} />} />
           </Container>
       );
}
}

export default Main;