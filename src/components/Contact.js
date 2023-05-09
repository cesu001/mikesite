import React, { Component } from "react";
class Contact extends Component {
    state = {};
    render() {
        return (
            <div
                style={{ width: "90vw", top: "30vh" }}
                className="position-absolute start-50 translate-middle-x"
            >
                <div
                    style={{ width: "75vw" }}
                    className="container bg-secondary bg-opacity-50 p-3 "
                >
                    <h3>Contact</h3>
                    <hr />
                    <div className="text-white">
                        <p className="fs-4 ">
                            For more information, please contact me.
                        </p>
                        <p>E-mail: mikesmusic@mail.com</p>
                        <p>
                            Or contact me through social media. Links are at the
                            bottom of the site.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
