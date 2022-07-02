import Gallery from "./Gallery";
import './Navbar.css'
import pic1 from '../pic/lina.jpg'
import pic2 from '../pic/pic2.jpg'
import pic3 from '../pic/pic3.jpg'

import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";



function Navbar(props) {
    const [aboutVisibility, setAboutVisibility] = useState("none");
    const [blogVisibility, setBlogVisibility] = useState("none");
    const [mainVisibility, setMainVisibility] = useState("inherit");

    const dispatch = useDispatch();

    const setVisibility = (about, blog, main, element) => {
        setAboutVisibility(about);
        setBlogVisibility(blog);
        setMainVisibility(main);
        dispatch({ type: 'navbar/menuclicked', payload: element.target.innerText}); //redux can be used for menu item switch (not used now, demo purpose)
    }


    const navbarState = useSelector(state => state.navbar); //redux can be used for menu item switch (not used now, demo purpose)

    return (
        <div>
            <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">

            <nav className="navbar navbar-expand-lg bg-secondary bg-gradient navbar-dark fixed-top">
                <div className="container-fluid">
                    <ul className="navbar-nav" style={{marginLeft: "auto", marginRight: "auto"}}>
                        <li className="nav-item">
                            <a className="nav-link" href="#section1" onClick={(e) => {
                                setVisibility("none", "none", "inherit", e)
                            }}>Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section2" onClick={(e) => {
                                setVisibility("none", "none", "inherit", e)
                            }}>Contacts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={(e) => {
                                setVisibility("inherit", "none", "none", e)
                                setAboutVisibility("inherit");
                            }}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={(e) => {
                                setVisibility("none", "inherit", "none", e)
                            }}>Blog</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br/>
            <br/>

            <div style={{display: mainVisibility}}>
                <div id="section1" className="container-fluid" style={{padding: "100px 20px"}}>
                    <Gallery/>
                </div>
                <br/>
                <div id="section2" className="container-fluid"
                     style={{padding: "10px 20px", backgroundColor: "ghostwhite"}}>
                    <div style={{marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
                         <h5>Contacts</h5>
                        <p>
                            To buy art, please send your order to email below and I will provide you with my Paypal
                            account.
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-mailbox" viewBox="0 0 16 16">
                            <path
                                d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
                            <path
                                d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
                        </svg>
                        <a href="#" onClick={() => window.open('mailto: info@linadonets.art')}
                           style={{color: "rebeccapurple", marginLeft: "10px"}}>info@linadonets.art</a> <br/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-instagram" viewBox="0 0 16 16">
                            <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                        <a href="https://www.instagram.com/linadonets.art/"
                           style={{fontColor: "black", marginLeft: "10px"}}>Instagram</a>

                        <p></p>
                        <h5>Shipment</h5>
                        <p>I will aim to dispatch items within 2 days. Items within Germany should arrive within 5-7
                            days of the date of purchase. Please allow app. 2 weeks for international deliveries.
                            Shipping cost is included in the price. Customs fee if any – not included. All sales are
                            final.
                        </p>

                        <h6 style={{marginTop: "20px"}}>© LINA DONETS ART 2022</h6>
                        <p>All images found on this website are copyrighted material of LINA DONETS. You may not use any
                            image on this site without the express written consent of LINA DONETS.</p>
                    </div>

                </div>
            </div>

            </div>

            <div className="about" id="about" style={{display: aboutVisibility}}>
                <h3>ART BY LINA DONETS</h3>


                <p>Story Behind the Art</p>
                <span>
                    <p>
                        I am largely a self-taught artist with my best teacher being the great outdoors. My sincere wish to become a painter was always blocked by real life commitments but the desire never left me. With the required time now available I am pursuing this ambition, ultimately painting in oils this universe. I’m originally from Ukraine living in Germany. Hope, soon I’ll be back home. Glory to Ukraine!
                    </p>
                    <p>
                        I am an exuberant artist and paint in my own fashion as broadly as my mood allows with spirit and fantasy sense. My favorite color is white and I love when there are a lot of cream oils on my canvas what allows me to create an unusual texture, relief and line by sculpting oil paint with my palette knife.
                    </p>
                    <p>
                        My work always tries to demonstrate the inspiring connection and response to my real  surroundings. I strive to create paintings which celebrate life and excite the soul. My aim is for people to feel good and peaceful when looking at my creations.
                    </p>
                    <p>
                        I hope that my work transports you to another place and time.
                    </p>
                    <p>
                        Enjoy what is created when my palette knife applies paint to canvas!
                    </p>
                </span>
                <br/>

                <img className="img"
                     src={pic1}
                     style={{maxWidth: "90%"}}
                />
                <br/>


            </div>

            <div className="blog" id="blog" style={{display: blogVisibility}}>
                <img className="img" style={{
                    maxWidth: "30%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "20px",
                    float: "left"
                }}
                     src={pic2}
                />
                <img className="img" style={{
                    maxWidth: "34.5%",
                    marginLeft: "20px",
                    marginRight: "auto",
                    marginTop: "20px",
                    float: "left"
                }}
                     src={pic3}
                />

            </div>
        </div>

    );
}


export default Navbar;
