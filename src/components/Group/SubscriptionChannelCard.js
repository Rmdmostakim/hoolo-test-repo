import Button from "react-bootstrap/Button";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import swal from "sweetalert";

export default function SubscriptionChannelCard(props) {

  const alter = () => {
    // swal("Success", "Group function comming soon..", "success");
  };
  
  const { id, name, hashtag, image, description } = props.store;

  return (
    <>
      <div className="subscription-card">
        <div className="subscription-card-image">
          <Link to={`/group-details/${id}/${name}`}>
            <img
              className="img-fluid"
              src={`https://shop.hoolo.live/public/GroupImages/${image}`}
              alt=""
            />
          </Link>
        </div>
        <div className="channels-card-body">
          <div className="channels-title">
            <Link to={`/group-details/${id}/${name}`}>{name}</Link>
            <br />
            <span className="hastag">{hashtag} </span>
          </div>
          <div className="channels-view w-75 m-auto py-2">
            <strong> {description}</strong>
          </div>
          <div className="channels-card-image-btn"></div>
          <div
            className="channels-view"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* <div  >
						 <Link to={`/vendors/${uuid}`} >
							<Button className="visitbtn" size="sm">
						      Visit Store 	 
							</Button>
							</Link>
						 </div> */}

            <div>
              &nbsp;&nbsp;&nbsp;
              <Button className="joinbtn" size="sm" onClick={alter}>
                {/* <FontAwesomeIcon icon={faUserPlus} />	*/} Join Group
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
