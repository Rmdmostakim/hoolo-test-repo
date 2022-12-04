export default function MyAccountHero(props) {
  return (
    <>
      {props.userinfo.map((user) => (
        <div className="single-channel-image" key={user.id}>
          <img className="img-fluid" alt="" src="img/banner.png" />
          <div className="channel-profile">
            {/* <img
						className="channel-profile-img"
						alt="hulusthul"
						src={`https://shop.hulusthul.live/images/user/${user.image}`}
					/>
					 <div className="social hidden-xs">
						Social &nbsp;
						<a className="fb mr-1" href="#">
							Facebook
						</a>
						<a className="tw mr-1" href="#">
							Twitter
						</a>
						<a className="gp" href="#">
							Google
						</a>
					</div> */}
          </div>
        </div>
      ))}
    </>
  );
}
