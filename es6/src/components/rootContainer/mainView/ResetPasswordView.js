/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import { div, h1, label, input, table, tbody, ul, li, tr, td } from "../../../../gen/components/ReactHelper";

export function uiElement(attributes) {
	return div({}, [
		h1({}, ["RESETPASSWORDVIEW"]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "token"
			}, ["TOKEN"]), 
			input({
				id: "token",
				value: attributes.token, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.token])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "passwordMismatch"
			}, ["PASSWORDMISMATCH"]), 
			input({
				id: "passwordMismatch",
				value: attributes.passwordMismatch, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.passwordMismatch])
		])
	]);
}



/******* S.D.G. *******/



