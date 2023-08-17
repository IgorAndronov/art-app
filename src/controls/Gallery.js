import pic1 from '../pic/image_50419713.JPG'
import pic2 from '../pic/image_50454273.JPG'
import pic3 from '../pic/image_67515905.JPG'
import pic4 from '../pic/image_50405377.JPG'
import pic5 from '../pic/image_50406657.JPG'
import pic6 from '../pic/image_67185409.JPG'
import pic7 from '../pic/image_67188737.JPG'
import pic8 from '../pic/image_50446593.JPG'
import pic9 from '../pic/little_angel.jpg'
import pic10 from '../pic/love_your-sun.jpg'
import pic11 from '../pic/in_love.jpg'
import pic12 from '../pic/wild_strawberries.jpg'
import pic13 from '../pic/night_roses.jpg'
import pic14 from '../pic/lavender.jpg'
import pic15 from '../pic/prayer-for-ukraine.jpg'
import pic16 from '../pic/your_roots.jpg'

import Card from "./Card";
import './Galary.css';
import PictureProps from "../dto/PictureProps";
import Modal from "./Modal";
import {useState} from "react";

function Gallery() {
    const [activePicture, setActivePicture] = useState(0);

    let pictureProps1 = new PictureProps(pic1, "Beautiful dream", "Price on request");
    let pictureProps2 = new PictureProps(pic2, "Marshmallow roses", "Original SOLD. Prints A4 are open for pre-orders");
    let pictureProps3 = new PictureProps(pic3, "Red Apple", "Price on request");
    let pictureProps4 = new PictureProps(pic4, "For You", "500$");
    let pictureProps5 = new PictureProps(pic5, "Wind", "500$");
    let pictureProps6 = new PictureProps(pic6, "Pineapple pear ", "Prints A4 are open for pre-orders");
    let pictureProps7 = new PictureProps(pic7, "Must have", "500$");
    let pictureProps8 = new PictureProps(pic8, "Find Yourself", "500$");
    let pictureProps9 = new PictureProps(pic9, "Little angel", "500$");
    let pictureProps10 = new PictureProps(pic10, "Love Your Sun", "500$");
    //let pictureProps11 = new PictureProps(pic11, "In Love", "500$");
    //let pictureProps12 = new PictureProps(pic12, "Wild Strawberries", "500$");
   // let pictureProps13 = new PictureProps(pic13, "Night Roses", "500$");
  //  let pictureProps14 = new PictureProps(pic14, "Lavender", "500$");
    let pictureProps15 = new PictureProps(pic15, "Prayer For Ukraine (with AR)", "Price on request",
        "Original Oil Painting, 28x35.6 cm with depth 1.5 cm.\n" +
        "        Surface: High Quality Professional Oil Paint (plus tempera, pasta with glitters) on gallery-grade, deep edge cotton canvas, with the painting wrapping around the sides.\n" +
        "        Finish: Varnished. Dated on the back side. Edges painted and ready to be framed or just to hang without frame.\n" +
        "To experience the AR (augmented reality) feature, view this painting or a photo of the painting through your phone using the free app Artivive.\n"+
        "Available as <a href=https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/53403584273125941610429339004721020342321256115720612160993821845137836212225>NFT<a>");

    let pictureProps16 = new PictureProps(pic16, "Your Roots", "60x100 cm, 3000$",
            "Original Oil Painting, 60x100 cm.\n" +
            "        Surface: High Quality Professional Oil Paint (plus tempera, pasta with glitters) on gallery-grade, deep edge cotton canvas, with the painting wrapping around the sides.\n" +
            "        Finish: Varnished. Dated on the back side. Edges painted and ready to be framed or just to hang without frame.\n"+
            "Your roots are your past, present and future. Take care of them, root them hard and respect them precisely so that your connection with the world becomes stronger and unbreakable, for sure, because you’ll know, you’ll feel you are REAL with a real story. Your connection is the faith in yourself that you are strong with strong roots. You already know that the one who wanted to change history by giving his whole life to spread lies about the past, present and future and he lost. Cherish your roots with LOVE, not with lie. Lina");

    let pictures = [pictureProps1, pictureProps2, pictureProps3, pictureProps4, pictureProps5, pictureProps6, pictureProps8,
        pictureProps9, pictureProps10, pictureProps7, pictureProps15, pictureProps16];
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
            <div key={i}>
                <div className="row" style={{alignItems: "center"}}>
                    <div className="col-lg">
                        <Card width={100} pictureProps={pictureItems1[i]} setActivePicture={setActivePicture}/>
                    </div>
                    <div className="col-lg">
                        <Card width={100} pictureProps={pictureItems2[i] || {}}
                              setActivePicture={setActivePicture}/>
                    </div>
                    <div className="col-lg">
                        <Card width={100} pictureProps={pictureItems3[i] || {}}
                              setActivePicture={setActivePicture}/>
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
