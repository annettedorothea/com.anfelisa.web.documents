/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import { div, h1, label, input, table, tbody, ul, li, tr, td } from "../../../../../../gen/components/ReactHelper";

export function uiElement(attributes) {
	return div({}, [
		h1({}, ["NEWCARD"]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "given"
			}, ["GIVEN"]), 
			input({
				id: "given",
				value: attributes.given, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.given])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "wanted"
			}, ["WANTED"]), 
			input({
				id: "wanted",
				value: attributes.wanted, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.wanted])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "index"
			}, ["INDEX"]), 
			input({
				id: "index",
				value: attributes.index, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.index])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "image"
			}, ["IMAGE"]), 
			input({
				id: "image",
				value: attributes.image, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.image])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "file"
			}, ["FILE"]), 
			input({
				id: "file",
				value: attributes.file, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.file])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "displaySpinner"
			}, ["DISPLAYSPINNER"]), 
			input({
				id: "displaySpinner",
				value: attributes.displaySpinner, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.displaySpinner])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "displayTranslateSpinner"
			}, ["DISPLAYTRANSLATESPINNER"]), 
			input({
				id: "displayTranslateSpinner",
				value: attributes.displayTranslateSpinner, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.displayTranslateSpinner])
		])
	]);
}



/******* S.D.G. *******/



