import React, { Component } from 'react'
import "./SectionHeader.css";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar,faSignal,faTimesCircle,faCaretDown, faBell} from "@fortawesome/free-solid-svg-icons";




export class ShopSectionHeader extends Component {
	
	state={
	icon : null,
	noIconLabel :false,
	dropdownOnly : null,
	}


  render() {

	let dropdownIcon = this.state.icon ? this.state.icon : faCaretDown;
	let dropdownIconLabel = this.state.noIconLabel ? "" : "Sort by";

	let dropdownBodyz;

	if (this.state.dropdownOnly) {
		this.state.dropdownOnly = (
			<ButtonGroup
				dropdownIcon={dropdownIcon}
				dropdownIconLabel={dropdownIconLabel}
				ProductType={this.props.ProductType}
			/>
		);
	} else {
		dropdownBodyz = (
			<HeadingWrapper heading={this.props.heading}>
				<ButtonGroup
					dropdownIcon={dropdownIcon}
					dropdownIconLabel={dropdownIconLabel}
					ProductType={this.props.ProductType}
				/>
			</HeadingWrapper>
		);
	}
	 
	return (
		  <>{dropdownBodyz}</>
	)
  }
}
 



function HeadingWrapper({ children, heading }) {
	return (
		<>
			<div className="main-title">
				{children ? children : ""}
				<h6>{heading}</h6>
			</div>
		</>
	);
}


function ButtonGroup({ dropdownIcon, dropdownIconLabel,ProductType }) {
 
	return (
		<>
			<div className="btn-group float-right right-action">
				<Dropdown>
					<Dropdown.Toggle
						as="a"
						id=""
						className="right-action-link text-gray no-after"
					>
						{dropdownIconLabel}{" "}
						<span>
							<FontAwesomeIcon icon={dropdownIcon} />
						</span>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item onClick={()=>ProductType('New Arrrivals')} >
							<FontAwesomeIcon icon={faBell} fixedWidth />
							&nbsp;New Arrivals
						</Dropdown.Item>
						{/* <Dropdown.Item onClick={()=>ProductType('Top Categories')}  >
							<FontAwesomeIcon icon={faSignal} fixedWidth />
							&nbsp;Top Categories
						</Dropdown.Item> */}
						<Dropdown.Item onClick={()=>ProductType('Featured')} >
							<FontAwesomeIcon icon={faStar} fixedWidth />
							&nbsp;Featured
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</>
	);
}




export default ShopSectionHeader;
export { HeadingWrapper };
