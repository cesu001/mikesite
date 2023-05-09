import React, { Component } from "react";
import Iframe from "react-iframe";
import LearnMore from "./LearnMore";

class Home extends Component {
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
                    <h3>Latest Video</h3>
                    <div className="d-flex justify-content-center">
                        <Iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/5GHA0xpps80"
                            title="YouTube video player"
                            frameborder="0"
                            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></Iframe>
                    </div>
                    <div className="d-flex justify-content-end">
                        <a
                            href="https://www.youtube.com/channel/UC6x0BuaAN7Vc3gZm46NnZrw"
                            className="card-link text-white"
                        >
                            Click here for more!
                        </a>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="opacity-0">Invissible</div>
                    <LearnMore />
                </div>
            </div>
        );
    }
}

export default Home;
