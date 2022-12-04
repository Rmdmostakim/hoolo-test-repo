import ListChannel from "./ListChannel";

const ChannelSidebarList = () => {
	return (
		<>
			<li className="nav-item channel-sidebar-list">
				<h6>SUBSCRIPTIONS</h6>
				<ul>
					<ListChannel
						href="/subscriptions"
						imgSrc="img/s1.jpg"
						label="Your Life"
					/>

					<ListChannel
						href="/subscriptions"
						imgSrc="img/s1.jpg"
						label="Unboxing"
						labelBadge="warning"
						badgeValue="2"
					/>
					<ListChannel
						href="/subscriptions"
						imgSrc="img/s1.jpg"
						label="Product / Service"
					/>
					<ListChannel
						href="/subscriptions"
						imgSrc="img/s1.jpg"
						label="Gaming"
					/>
				</ul>
			</li>
		</>
	);
};

export default ChannelSidebarList;
