import AbstractScheduleSelectedCardsCommand from "../../../gen/card/commands/AbstractScheduleSelectedCardsCommand";

export default class ScheduleSelectedCardsCommand extends AbstractScheduleSelectedCardsCommand {

    validateCommandData() {
        this.commandData.cardIds = this.commandData.selectedCardIds;
        return true;
    }

    handleResponse(resolve) {
        if (this.commandData.filterNonScheduled) {
            this.commandData.outcome = this.filter;
        } else {
            this.commandData.outcome = this.noFilter;
        }
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
