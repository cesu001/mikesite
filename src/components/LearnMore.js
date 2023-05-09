import React, { Component } from "react";
import { Link } from "react-router-dom";
class LearnMore extends Component {
    state = {};
    render() {
        return (
            <div className="d-flex justify-content-around mt-5">
                {/* about */}
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">About Me</h5>
                        <hr />
                        <p className="card-text">
                            Some self-introduction here if you're interested.
                        </p>
                        <br />
                        <div className="d-flex justify-content-end">
                            <Link
                                to="/about"
                                className="card-link text-decoration-none"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
                {/* gear */}
                <div className="card mx-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">My Gears</h5>
                        <hr />
                        <p className="card-text">
                            Every gear I use is listed. Not only for youtube
                            channel, but also for live shows!{" "}
                        </p>
                        <div className="d-flex justify-content-end">
                            <Link
                                to="/gear"
                                className="card-link text-decoration-none"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
                {/* lesson */}
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Private Lessons</h5>
                        <hr />
                        <p className="card-text">
                            My teaching experience for years can help you
                            improve your guitar playing performance.
                        </p>
                        <div className="d-flex justify-content-end">
                            <Link
                                to="/lesson"
                                className="card-link text-decoration-none"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LearnMore;
