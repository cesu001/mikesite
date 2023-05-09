import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./images/header.png";
import Home from "./images/home.png";
import ms_bg_jp from "./images/ms_bg_jp.png";
import youtube from "./images/youtube.svg";
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import upArrow from "./images/upArrow.png";

class Main extends Component {
    state = {};
    render() {
        return (
            <div className="bg-dark">
                {/* header */}
                <div
                    style={{ backgroundColor: "black", height: "180px" }}
                    className="d-flex justify-content-center align-items-center"
                >
                    <img
                        style={{ height: "120px" }}
                        src={Header}
                        alt={"logo"}
                    />
                </div>
                {/* nav */}
                <div style={{ height: "67px" }} className="sticky-top">
                    <ul className="nav justify-content-end bg-transparent h-100 align-items-center">
                        <li className="nav-item me-auto">
                            <Link className="nav-link text-light" to="/">
                                <img
                                    style={{ width: "50px" }}
                                    src={Home}
                                    alt="home"
                                />
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-light" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-light" to="/gear">
                                Gears
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-light" to="/lesson">
                                Lesson
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-light" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* index pic */}
                <div
                    style={{ height: "960px" }}
                    className="d-flex justify-content-center"
                >
                    <img src={ms_bg_jp} alt="bgPng" />
                </div>
                {/* footer */}
                <div
                    style={{ height: "128px" }}
                    className="d-flex justify-content-center align-items-center bg-black"
                >
                    <div className="d-inline-block mx-3">
                        <a
                            href="https://www.youtube.com/channel/UC6x0BuaAN7Vc3gZm46NnZrw"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={youtube} alt="youtube" />
                        </a>
                    </div>
                    <span>|</span>
                    <div className="d-inline-block mx-3">
                        <a
                            href="https://instagram.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={instagram} alt="instagram" />
                        </a>
                    </div>
                    <span>|</span>
                    <div className="d-inline-block mx-3">
                        <a
                            href="https://facebook.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={facebook} alt="facebook" />
                        </a>
                    </div>
                    <span>|</span>
                    <div className="d-inline-block mx-3">
                        <a
                            href="https://twitter.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={twitter} alt="twitter" />
                        </a>
                    </div>
                </div>
                {/* gotop */}
                <div className="d-inline-block bg-white position-fixed bottom-0 end-0 z-3 rounded-3">
                    <a href="#top">
                        <img src={upArrow} alt="arrow" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Main;
