function Modal(props) {
    return (

        <div className="modal" id="pic_overview">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{props.pictureProps.name}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">
                        <img className="card-img-top img-fluid" src={props.pictureProps.src} alt="Card image"/>
                        <br/>
                        <br/>
                        <span style={{float: 'left'}}>{props.pictureProps.legend}</span>

                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>

    );
};


export default Modal;