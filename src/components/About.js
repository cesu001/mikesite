import React, { Component } from "react";
import Home from "./images/home.png";
class About extends Component {
    state = {};
    render() {
        return (
            <div
                style={{ width: "90vw", top: "30vh" }}
                className="position-absolute start-50 translate-middle-x"
            >
                <div
                    style={{ width: "75vw" }}
                    className="container bg-secondary bg-opacity-50 p-3"
                >
                    <h3>About</h3>
                    <hr />
                    <div className="d-flex">
                        <img
                            style={{ height: "180px" }}
                            src={Home}
                            alt=""
                            className="mx-5 bg-black rounded-circle"
                        />
                        <div className="text-white py-3">
                            <h4>Mike</h4>
                            <div className="fs-5">Guitarist from Taiwan</div>
                            <div>
                                Genre: Progressive Metal, Djent, Metalcore,
                                Melodic Death Metal
                            </div>
                            <div>
                                I started playing guitar since high school,
                                influenced by bands in different genres such
                                like Dream Theater, Children of Bodom, In
                                Flames, Trivium, Periphery, ...etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
