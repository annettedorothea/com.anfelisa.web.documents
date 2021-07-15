/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/


import {Texts} from "../../../../../app/Texts";
import {cancelDeleteCard, deleteCard} from "../../../../../../gen/card/ActionFunctions";
import React from "react";

export function uiElement(props) {
	if (props.confirmDelete === true) {
		return <div className="modal">
			<div className="modalContent">
				<h2>{Texts.cardList.confirmDelete.title[props.language]}</h2>
				<div className="message">{Texts.cardList.confirmDelete.message[props.language]}</div>
				<button
					className="yes danger"
					onClick={deleteCard}
				>
					{Texts.cardList.confirmDelete.ok[props.language]}
				</button>
				<button
					onClick={cancelDeleteCard}
				>
					{Texts.cardList.confirmDelete.cancel[props.language]}
				</button>
			</div>
		</div>
	}
	return null;
}


/******* S.D.G. *******/


