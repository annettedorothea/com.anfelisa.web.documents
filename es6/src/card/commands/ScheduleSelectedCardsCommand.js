import AbstractScheduleSelectedCardsCommand from "../../../gen/card/commands/AbstractScheduleSelectedCardsCommand";

export default class ScheduleSelectedCardsCommand extends AbstractScheduleSelectedCardsCommand {

    validateCommandData() {
        this.commandData.cardIds = this.commandData.selectedCardIds;
        return true;
    }

    handleResponse(resolve) {
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
