import React, { Component } from "react";
import Guitars from "./Guitars";
import Recording from "./images/Recording.jpeg";
class Gear extends Component {
    state = {};
    render() {
        return (
            <div
                style={{ width: "90vw", top: "30vh" }}
                className="position-absolute start-50 translate-middle-x"
            >
                <div
                    style={{ width: "75vw", height: "75vh" }}
                    className="container bg-secondary bg-opacity-50 p-3 overflow-scroll"
                >
                    <h3>Gear</h3>
                    <nav>
                        {/* tabs */}
                        <div
                            className="nav nav-tabs justify-content-end"
                            id="nav-tab"
                            role="tablist"
                        >
                            <button
                                className="nav-link active text-black"
                                id="nav-guitar-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-guitar"
                                type="button"
                                role="tab"
                                aria-controls="nav-guitar"
                                aria-selected="true"
                            >
                                Guitars
                            </button>
                            <button
                                className="nav-link text-black"
                                id="nav-recording-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-recording"
                                type="button"
                                role="tab"
                                aria-controls="nav-recording"
                                aria-selected="false"
                            >
                                Recording&Accessories
                            </button>
                        </div>
                    </nav>
                    <div
                        className="tab-content position-relative"
                        id="nav-tabContent"
                    >
                        <Guitars />
                        <div
                            className="tab-pane fade position-absolute top-0"
                            id="nav-recording"
                            role="tabpanel"
                            aria-labelledby="nav-recording-tab"
                        >
                            <div
                                style={{ left: "600px" }}
                                className="position-absolute"
                            >
                                <img
                                    style={{ width: "600px" }}
                                    src={Recording}
                                    alt="recording"
                                />
                            </div>
                            <br />
                            <div className="px-5">
                                <span className="mx-2 fs-4 text-white">
                                    Audio Interface: Focusrite Scarlett 2i2
                                </span>
                            </div>
                            <br />
                            <div className="px-5">
                                <span className="mx-2 fs-4 text-white">
                                    Headphones: BeyerDynamic - DT770 PRO 80 ohm
                                </span>
                            </div>
                            <br />
                            <div className="px-5">
                                <span className="mx-2 fs-4 text-white">
                                    Cable: Evidence
                                </span>
                            </div>
                            <br />
                            <div className="px-5">
                                <span className="mx-2 fs-4 text-white">
                                    DAW: Cubase
                                </span>
                            </div>
                            <br />
                            <div className="px-5">
                                <span className="mx-2 fs-4 text-white">
                                    Effect Plugins: Neural DSP
                                </span>
                            </div>
                            <br />
                            <div className="px-5">
                                <span className="mx-2 text-white fs-4">
                                    Guitar Strings: D'Addario
                                </span>
                            </div>
                            <br />
                            <div className="px-5">
                                <span className="mx-2 text-white fs-4">
                                    Pick: Dunlop ULTEX Jazz III
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gear;
