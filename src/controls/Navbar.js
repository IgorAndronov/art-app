import Gallery from "./Gallery";

function Navbar(props) {
    return (
        <div>
            <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">

            <nav className="navbar navbar-expand-sm bg-secondary bg-gradient navbar-dark fixed-top" >
                <div className="container-fluid">
                    <ul className="navbar-nav" style={{marginLeft:"auto", marginRight:"auto"}}>
                        <li className="nav-item">
                            <a className="nav-link" href="#section1">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section2">Contacts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br/>
            <br/>

            <div id="section1" className="container-fluid" style={{marginTop:"20px", padding:"100px 20px"}}>
                <Gallery/>
            </div>

            <br/>

            <div id="section2" className="container-fluid bg-secondary bg-gradient" style={{padding:"10px 20px"}}>
                <div style={{marginLeft:"auto", marginRight:"auto", textAlign: "center"}}>
                    <h3>Contacts:</h3>
                    <p>Email: erf@gmail.com</p>
                    <p>Phone: 2342344234</p>
                </div>

            </div>
            </body>
        </div>

    );
}


export default Navbar;