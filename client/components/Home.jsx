import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom';

import Title from './Title'
import Services from './Services'
import ServicesTitle from './ServicesTitle'
import Nav from './Nav'
import Footer from './Footer'

class Home extends React.Component {

    render() {
        return (
            <React.Fragment> 
                    <Nav/>
                <div>
                    <Title />
                    <ServicesTitle />
                    <Services />
                    <Footer />
                </div>  
            </React.Fragment>
        )
    }
}

export default Home
