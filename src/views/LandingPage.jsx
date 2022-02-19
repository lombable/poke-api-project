import React from "react";
import '../App.css';
import { isMobile } from 'react-device-detect';
import { Link } from "react-router-dom";



const Home = () => {

    if (!isMobile) {
        return (
            <div className="pt-3 row">
                <div className="header_video">
                    <div className="overlay" />

                    <video autoPlay loop muted id='video'>
                        <source src="../img/pokeball-loop.mp4" type="video/mp4" />
                    </video>
                    <div className="container h-100">
                        <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                                <img src="../img/pokemon-logo.png" alt="pokemon-logo-png" className="display-3" />
                                <p className="lead-home-desktop">Project made for: Pinflag front-end test.</p>

                                <p className="lead-home pt-5 mt-5">
                                    <Link className="btn btn-light" to="/pokegrid">START!</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="pt-3 row">
                <div className="header_video">
                    <div className="overlay" />
                    <div className="video_contain_mobile"><video autoPlay loop muted id='video' className="video_mobile">
                        <source src="../img/pikachu-loop.mp4" type="video/mp4" />
                    </video></div>

                    <div className="container h-100">
                        <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                                <img src="../img/pokemon-logo.png" alt="pokemon-logo-png" className="img-fluid" />
                                <p className="lead-home-mobile">Project made for: Pinflag front-end test.</p>
                                <p className="pt-2">
                                    <Link className="btn btn-light" to="/pokegrid">START!</Link>
                                </p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;