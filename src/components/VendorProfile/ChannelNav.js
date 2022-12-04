import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { VerifiedTooltip } from "../Atomics/CustomCheckTooltips/CustomCheckTooltips";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VendorStore from "./VendorStore.css";
import { faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
export default function ChannelNav(props) {
  const { name, uuid, store_logo } = props.navContent;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="vendor-nav">

        <div className="vendor-brand">

          <div><img className="vendor-profile-img" src={`https://shop.hoolo.live/images/store/${store_logo}`} alt={name} /></div>

          <div className='p-2'> {name} <VerifiedTooltip /> </div>

        </div>

        

        <nav className="channelNav mt-2">

          <Slider {...settings}>


            <div className="item">
              <div className={props.nav === 'video'?"videos-category-item active":"videos-category-item"} onClick={() => props.updateStore("video")} >
                Video
              </div>
            </div>

            <div className="item">
              <div className={props.nav === 'store'?"videos-category-item active":"videos-category-item"} onClick={() => props.updateStore("store")}>
                Product
              </div>
            </div>

            <div className="item">
              <div className={props.nav === 'others'?"videos-category-item active":"videos-category-item"}  onClick={() => props.updateStore("others")}>
                Other
              </div>
            </div>
          </Slider>
        </nav>

      </div>
    </>
  );
}
