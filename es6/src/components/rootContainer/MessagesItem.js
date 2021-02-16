/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/


import {div} from "../../../gen/components/ReactHelper";
import AppUtils from "../../app/AppUtils";
import {destroyToast} from "../../../gen/common/ActionFunctions";

export function uiElement(attributes) {
    const text = AppUtils.getMessageText(attributes, attributes.language);
    return div({
        class: `toastWrapper ${attributes.visible === false ? "fadeOut" : ""}`,
        onClick: () => destroyToast(attributes.id),
        id: `#toast_${attributes.id}`
    }, [
        div({class: `toast ${attributes.type}`}, [text])
    ])
}


/******* S.D.G. *******/



