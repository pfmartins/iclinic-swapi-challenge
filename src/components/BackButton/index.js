
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft  } from "@fortawesome/free-solid-svg-icons";

import './backbutton.css'

const BackButton = (props) => {
	const buttonLabel = props.label || 'back'
	return (
		<div className="backbutton" onClick={props.onClick}>
			<FontAwesomeIcon icon={faArrowLeft}/>
			{buttonLabel}
		</div>
	)
}

export default BackButton;