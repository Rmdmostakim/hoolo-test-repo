import { VerifiedTooltip } from "../CustomCheckTooltips/CustomCheckTooltips";

export default function CategoryCard(props) {
	 
	const {id,title,status,image}=props.category
	return (
		<>
		 
			<div className="category-item mt-0 mb-0">
				<a >
					<img className="img-fluid" src={`https://shop.hoolo.live/images/category/${image}`} alt={JSON.parse(title).en} />
					<h6 >
						{JSON.parse(title).en}   {status==1 && <VerifiedTooltip />}
					</h6>
					<p>views </p>
				</a>
			</div>
		</>
	);
}
