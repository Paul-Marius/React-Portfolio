import React from "react";

//import typed react
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Engineer", "HandyMAN"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact</a>
            </div>
        </div>
    )
}

export default Header
