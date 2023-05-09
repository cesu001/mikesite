import React, { Component } from "react";
import g0101 from "./images/g01_01.jpeg";
import g0102 from "./images/g01_02.jpeg";
import g0103 from "./images/g01_03.jpeg";
import g0201 from "./images/g02_01.jpeg";
import g0202 from "./images/g02_02.jpeg";
import g0203 from "./images/g02_03.jpeg";
import g0301 from "./images/g03_01.jpeg";
import g0302 from "./images/g03_02.jpeg";
import g0303 from "./images/g03_03.jpeg";
class Guitars extends Component {
    state = {
        guitars: [
            {
                id: "g01",
                src01: g0101,
                src02: g0102,
                src03: g0103,
                model: "Kiesel - AM7 Buckeye Burl",
                tunning: "Drop A",
                nMaterial: "Maple & Walnut 5-Piece",
                nFinish: "Tung-oiled",
                fb: "Ebony",
                fm: "Stainless Steel",
                radius: '20"',
                Inlay: "Ebony Dot",
                tuners: "Kiesel Locking Tuners",
                construction: "Bolt-On",
                bMaterial: "Black Limba & Buckeye Burl Top",
                bFinish: "Tung-oiled",
                bridge: "Hipshot",
                nPickup: "K12 Lithium",
                mPickup: "None",
                bPickup: "K12 Lithium",
                electronics: "1 Volume & 1 Tone, 5-way Blade Switch",
            },
            {
                id: "g02",
                src01: g0201,
                src02: g0202,
                src03: g0203,
                model: "ESP - Pink Sawtooth",
                tunning: "Drop C",
                nMaterial: "Hard Maple 3-Piece",
                nFinish: "Satin",
                fb: "Ebony",
                fm: "Copper with Nickel",
                radius: '12"',
                Inlay: "Pink Sawtooth",
                tuners: "Gotoh tuners",
                construction: "Neck-Thru",
                bMaterial: "Alder",
                bFinish: "Highpoly",
                bridge: "Floyd Rose Original",
                nPickup: "None",
                mPickup: "None",
                bPickup: "EMG-Hz",
                electronics: "1 Volume , 1 mini Switch, mm-04 preamp",
            },
            {
                id: "g03",
                src01: g0301,
                src02: g0302,
                src03: g0303,
                model: "Jackson USA - SL1",
                tunning: "Standard E",
                nMaterial: "Quaterswan Hard Maple",
                nFinish: "Highpoly",
                fb: "Ebony",
                fm: "Copper with Nicke",
                radius: '12"~16" compound',
                Inlay: "Sharkfin Pearl",
                tuners: "Jackson tuners",
                construction: "Neck-thru",
                bMaterial: "Alder",
                bFinish: "Highpoly",
                bridge: "Floyd Rose Original",
                nPickup: "Seymour Duncan SSL-1",
                mPickup: "Seymour Duncan SSL-1",
                bPickup: "Seymour Duncan TB-4",
                electronics: "1 Volume & 1 Tone, 5-way Blade Switch",
            },
        ],
    };
    render() {
        return (
            <div>
                <div
                    className="tab-pane fade show active my-5 mx-4 d-grid"
                    id="nav-guitar"
                    role="tabpanel"
                    aria-labelledby="nav-guitar-tab"
                >
                    {this.state.guitars.map((guitar, index) => {
                        return (
                            <div className="my-5">
                                <div
                                    style={{ width: "30vw", height: "65vh" }}
                                    id={guitar.id}
                                    className="carousel slide carousel-left"
                                    data-bs-ride="carousel"
                                >
                                    <div className="carousel-indicators ">
                                        <button
                                            type="button"
                                            data-bs-target={"#" + guitar.id}
                                            data-bs-slide-to="0"
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                        ></button>
                                        <button
                                            type="button"
                                            data-bs-target={"#" + guitar.id}
                                            data-bs-slide-to="1"
                                            aria-label="Slide 2"
                                        ></button>
                                        <button
                                            type="button"
                                            data-bs-target={"#" + guitar.id}
                                            data-bs-slide-to="2"
                                            aria-label="Slide 3"
                                        ></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img
                                                src={guitar.src01}
                                                className="d-block w-100"
                                                alt="01"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src={guitar.src02}
                                                className="d-block w-100"
                                                alt="02"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src={guitar.src03}
                                                className="d-block w-100"
                                                alt="03"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target={"#" + guitar.id}
                                        data-bs-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        ></span>
                                        <span className="visually-hidden">
                                            Previous
                                        </span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target={"#" + guitar.id}
                                        data-bs-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        ></span>
                                        <span className="visually-hidden">
                                            Next
                                        </span>
                                    </button>
                                </div>
                                <div
                                    style={{ width: "30vw" }}
                                    className="some-text ms-5 p-5 text-black"
                                >
                                    <h3>{guitar.model}</h3>
                                    <hr />
                                    <div className="p-1">
                                        <div>Tunning: {guitar.tunning}</div>
                                        <h5>Neck</h5>
                                        <div>
                                            Neck Material: {guitar.nMaterial}
                                        </div>
                                        <div>Neck Finish: {guitar.nFinish}</div>
                                        <div>Fretboard: {guitar.fb}</div>
                                        <div>Fret Material: {guitar.fm}</div>
                                        <div>Radius: {guitar.radius}</div>
                                        <div>Inlay: {guitar.Inlay}</div>
                                        <div>Tuners: {guitar.tuners}</div>
                                        <div>
                                            Construction: {guitar.construction}
                                        </div>
                                        <h5>Body</h5>
                                        <div>
                                            Body Material: {guitar.bMaterial}
                                        </div>
                                        <div>Body Finish: {guitar.bFinish}</div>
                                        <div>Bridge: {guitar.bridge}</div>
                                        <h5>Electronics</h5>
                                        <div>Neck Pickup: {guitar.nPickup}</div>
                                        <div>
                                            Middle Pickup: {guitar.mPickup}
                                        </div>
                                        <div>
                                            Bridge Pickup: {guitar.bPickup}
                                        </div>
                                        <div>
                                            Electronics: {guitar.electronics}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Guitars;
