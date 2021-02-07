/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import { div, h1, label, input, table, tbody, ul, li, tr, td, loggedInUser, spinner, message, mainView } from "../../gen/components/ReactHelper";

export function uiElement(attributes) {
	return div({}, [
		h1({}, ["ROOTCONTAINER"]),
		loggedInUser(),
		// hash hash, 
		// storage username, 
		// storage password, 
		spinner(),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "language"
			}, ["LANGUAGE"]), 
			input({
				id: "language",
				value: attributes.language, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.language])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "texts"
			}, ["TEXTS"]), 
			input({
				id: "texts",
				value: attributes.texts, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.texts])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "displaySaveBugDialog"
			}, ["DISPLAYSAVEBUGDIALOG"]), 
			input({
				id: "displaySaveBugDialog",
				value: attributes.displaySaveBugDialog, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.displaySaveBugDialog])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "displayVersionMismatchDialog"
			}, ["DISPLAYVERSIONMISMATCHDIALOG"]), 
			input({
				id: "displayVersionMismatchDialog",
				value: attributes.displayVersionMismatchDialog, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.displayVersionMismatchDialog])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "displayVersionMismatchErrorDialog"
			}, ["DISPLAYVERSIONMISMATCHERRORDIALOG"]), 
			input({
				id: "displayVersionMismatchErrorDialog",
				value: attributes.displayVersionMismatchErrorDialog, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.displayVersionMismatchErrorDialog])
		]),
		message(),
		mainView()
	]);
}



/******* S.D.G. *******/



