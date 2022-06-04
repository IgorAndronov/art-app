import Gallery from "./Gallery";
import './Navbar.css'
import pic1 from '../pic/lina.jpg'
import pic2 from '../pic/pic2.jpg'
import pic3 from '../pic/pic3.jpg'

import {useState} from "react";

function Navbar(props) {
    const [aboutVisibility, setAboutVisibility] = useState("none");

    return (
        <div>
            <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">

            <nav className="navbar navbar-expand-sm bg-secondary bg-gradient navbar-dark fixed-top">
                <div className="container-fluid">
                    <ul className="navbar-nav" style={{marginLeft: "auto", marginRight: "auto"}}>
                        <li className="nav-item">
                            <a className="nav-link" href="#section1" onClick={() => setAboutVisibility("none")}>Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section2" onClick={() => setAboutVisibility("none")}>Contacts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => setAboutVisibility("inherit")}>About</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br/>
            <br/>

            <div style={{display: aboutVisibility=="none"? "inherit":"none"}}>
                <div id="section1" className="container-fluid" style={{marginTop: "20px", padding: "100px 20px"}}>
                    <Gallery/>
                </div>
                <br/>
                <div id="section2" className="container-fluid bg-secondary bg-gradient" style={{padding: "10px 20px"}}>
                    <div style={{marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
                        <h3>Contacts:</h3>
                        <p>Email: erf@gmail.com</p>
                        <p>Phone: 2342344234</p>
                    </div>

                </div>
            </div>

            </body>

            <div className="about" id="about" style={{display: aboutVisibility}}>
                <h3>ART BY LINA DONETS</h3>
                <img className="img"
                     src={pic1}
                     style={{maxWidth:"90%"}}
                />

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
                <img className="img" style={{maxWidth:"30%", marginLeft:"auto", marginRight:"auto", marginTop:"20px", float:"left"}}
                     src={pic2}
                />
                <img className="img" style={{maxWidth:"34.5%", marginLeft:"20px", marginRight:"auto", marginTop:"20px", float:"left"}}
                     src={pic3}
                />

            </div>
        </div>

    );
}


export default Navbar;