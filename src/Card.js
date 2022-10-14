import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faCheck } from '@fortawesome/free-solid-svg-icons';

function Card(props) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.card.planName}</h5>
                    <h6 className="card-price text-center">${props.card.price}<span className="period">/month</span></h6>
                    <hr />


                    {
                        props.card.features.map((item) => {
                            return <div className="font-card"><FontAwesomeIcon icon={faCheck} className="icon" /> {item.name}</div>
                        })
                    }
                    <div className="d-grid">
                        <a href="https://www.skylink.net.in" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;


