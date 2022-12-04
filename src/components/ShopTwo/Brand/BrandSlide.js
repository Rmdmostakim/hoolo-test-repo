import "./BrandSlide.css";

export default function BrandSlide(props) {
  return (
    <>
       
        <div className="brand-item">
          <img
            className=""
            alt="image"
            src={`https://shop.hoolo.live/images/brands/${props.img}`}
          />
        </div>
    </>
  );
}
