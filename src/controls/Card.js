import './Card.css';

function Card(props) {
    if (!props.pictureProps.name){
        return <div></div>
    }
    return (
        <div className="my_card" style={{width: props.width + '%', marginBottom:"10px", marginLeft: "auto", marginRight:"auto"}}>
            <img className="card-img-top card-style img-fluid"
                 src={props.pictureProps.src} alt="Card image"
                 data-bs-toggle="modal"
                 data-bs-target="#pic_overview"
                 onClick={() => props.setActivePicture(props.pictureProps)}

            />
            <div className="card-body card-info">
                <h4 className="card-title">{props.pictureProps.name}</h4>
                <p className="card-text">{props.pictureProps.description}</p>

            </div>
        </div>

    );
}


export default Card;