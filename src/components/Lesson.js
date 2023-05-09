import React, { Component } from "react";
import Home from "./Map";
class Lesson extends Component {
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
                    <h3>Lessons</h3>
                    <hr />
                    <div className="d-flex justify-content-evenly fs-4">
                        <div className="text-white">
                            <div>
                                Online 1:1 guitar lesson is provided via skype.
                            </div>
                            <div>
                                If you prefer classes in person, you may choose
                                a site from map on the right.
                            </div>
                            <div>Please send me mail for detail.</div>
                        </div>
                        <Home />
                    </div>
                </div>
            </div>
        );
    }
}

export default Lesson;
