import pic1 from '../pic/image_50419713.JPG'
import pic2 from '../pic/image_50454273.JPG'
import pic3 from '../pic/image_67515905.JPG'
import pic4 from '../pic/image_50419713.JPG'
import pic5 from '../pic/image_50419713.JPG'

import Card from "./Card";
import './Galary.css';
import PictureProps from "../dto/PictureProps";
import Modal from "./Modal";
import {useState} from "react";

function Gallery() {
    const [activePicture, setActivePicture] = useState(0);

    let pictureProps1 = new PictureProps(pic1, "Beautiful dream", "500$", "This concert had place in New York 2021");
    let pictureProps2 = new PictureProps(pic2, "Marshmallow roses", "500$");
    let pictureProps3 = new PictureProps(pic3, "Red Apple", "500$");
    let pictureProps4 = new PictureProps(pic4, "concert", "500$");
    let pictureProps5 = new PictureProps(pic5, "concert", "500$");

    let pictures = [pictureProps1, pictureProps2, pictureProps3, pictureProps4, pictureProps5];
    let pictureItems1 = [];
    let pictureItems2 = [];
    let pictureItems3 = [];


    for (let i = 0; i < pictures.length; i++) {
        if ((i + 1) % 3 == 1) {
            pictureItems1.push(pictures[i])
        }
        if ((i + 1) % 3 == 2) {
            let picture = pictures[i]
            pictureItems2.push(pictures[i])
        }

        if ((i + 1) % 3 == 0) {
            let picture = pictures[i]
            pictureItems3.push(pictures[i])
        }
    }

    let rows = [];

    for (let i = 0; i < pictureItems1.length; i++) {
        let row =
            <div>
                <div className="row" style={{alignItems: "center"}}>
                    <div className="col-lg">
                        <div key={pictureItems1[i].name}>
                            <Card width={100} pictureProps={pictureItems1[i]} setActivePicture={setActivePicture}/>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div key={pictureItems1[i].name}>
                            <Card width={100} pictureProps={pictureItems2[i] || {}}
                                  setActivePicture={setActivePicture}/>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div key={pictureItems1[i].name}>
                            <Card width={100} pictureProps={pictureItems3[i] || {}}
                                  setActivePicture={setActivePicture}/>
                        </div>
                    </div>
                </div>
                <div className="row row-info" style={{alignItems: "baseline"}}>
                    <div className="col-lg" style={{textAlign: "center", marginBottom: "20px"}}>
                        {pictureItems1[i].name}<br/>
                        {pictureItems1[i].description}
                    </div>
                    <div className="col-lg" style={{textAlign: "center", marginBottom: "20px"}}>
                        {pictureItems2[i] ? pictureItems2[i].name : ""}<br/>
                        {pictureItems2[i] ? pictureItems2[i].description : ""}
                    </div>
                    <div className="col-lg" style={{textAlign: "center", marginBottom: "20px"}}>
                        {pictureItems3[i] ? pictureItems3[i].name : ""}<br/>
                        {pictureItems3[i] ? pictureItems3[i].description : ""}
                    </div>
                </div>
            </div>


        rows.push(row);
    }

    return (
        <div>
            <div>{rows}</div>
            <Modal pictureProps={activePicture}/>
        </div>

    );


}


export default Gallery;