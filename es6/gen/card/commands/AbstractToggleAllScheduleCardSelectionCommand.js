/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import AbstractSynchronousCommand from "../../../gen/ace/AbstractSynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import ToggleAllScheduleCardSelectionOkEvent from "../../../gen/card/events/ToggleAllScheduleCardSelectionOkEvent";

export default class AbstractToggleAllScheduleCardSelectionCommand extends AbstractSynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.ToggleAllScheduleCardSelectionCommand");
        this.ok = "ok";
        this.commandData.selectedCardIds = AppState.get_authorView_cardView_selectedCardIds();
        this.commandData.cardList = AppState.get_authorView_cardView_cardList();
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ToggleAllScheduleCardSelectionOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ToggleAllScheduleCardSelectionCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



