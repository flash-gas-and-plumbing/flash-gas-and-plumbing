import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom';


class Title extends React.Component {
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

  

  render () {
    return (
        <React.Fragment>

      <div className="background">
          <img src="./img/logo.png" alt="Main logo" id="mainLogo" className="centerImg"></img>
          <a href="https://www.jotform.com/form/210036267796864" target="_blank">
                        <img src="./img/contact-1.png" alt="Contact logo" className="navLogoPage"></img>
                     </a>
      </div>
      </React.Fragment>
    )
  }

  contactForm = (
    <div>
      <img src="./img/logo-number.png" className="formImage centerImg" />
      <Form />
    </div>
  )


}



export default Title