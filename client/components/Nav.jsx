import React from 'react';
import { HashRouter as NavLink, Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            popUpContent: null,
        }
    }

    togglePopup(id = null) {
        this.setState((state, props) => ({
            popUpContent: id,
        }))
    }

    render() {
        return (
            <div id="navBackground">
                <div className="leftNav fixed">
                <Link to='/'><img src="./img/text.png" alt="Main Logo" className="leftLogos"></img></Link>
                </div>
                <div className="flexBox">
                    <div className="fixed">
                        <Link to='/about'><img src="./img/about.png" alt="About logo" className="navLogos"></img></Link>
                                                <a href="https://form.jotform.com/210036267796864" target="_blank">
                        <img src="./img/contact-1.png" alt="Contact logo" className="navLogos"></img>
                        </a>
                                <Link to='/gallery'><img src="./img/gallery.png" alt="Gallery logo" className="navLogos"></img></Link>
                                <Link to='/testimonials'><img src="./img/testimonials.png" alt="Testimonials logo" className="navLogos"></img></Link>
                    </div>
                </div>
                    </div>
        )
    }

}
export default Nav
