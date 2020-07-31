
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner  } from "@fortawesome/free-solid-svg-icons";

import './fetchbutton.css'

class FetchButton extends React.Component {
	render() {
		return (
			<div className={`actions__container actions__container--${this.props.position}`}>
				<button type="button" className={`fetchbutton fetchbutton--${this.props.type}`} disabled={this.props.loading} onClick={this.props.onClick}>
					{this.props.loading && <FontAwesomeIcon icon={faSpinner} spin />}
					{!this.props.loading && this.props.label}
				</button>
			</div>
		)
	}
}

export default FetchButton;