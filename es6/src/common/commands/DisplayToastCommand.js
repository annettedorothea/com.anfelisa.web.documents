/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/


import AbstractDisplayToastCommand from "../../../gen/common/commands/AbstractDisplayToastCommand";
import AppUtils from "../../app/AppUtils";

export default class DisplayToastCommand extends AbstractDisplayToastCommand {
    execute() {
        this.commandData.message.id = this.commandData.messages.length;
        this.commandData.message.visible = true;
        this.commandData.messages.push(this.commandData.message);
        this.commandData.id = this.commandData.message.id;
        this.addOkOutcome();
    }
}


/******* S.D.G. *******/



