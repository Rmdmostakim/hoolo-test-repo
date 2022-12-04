import React from 'react';
export default function ContentWrapper({ children, className = null }) {
	return (
		<>
			<div id="content-wrapper" className={className}>
				{children}
			</div>
		</>
	);
}
  