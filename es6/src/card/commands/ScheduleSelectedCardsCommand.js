import AbstractScheduleSelectedCardsCommand from "../../../gen/card/commands/AbstractScheduleSelectedCardsCommand";

export default class ScheduleSelectedCardsCommand extends AbstractScheduleSelectedCardsCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        if (this.commandData.filterNonScheduled) {
            this.addFilterOutcome();
        } else {
            this.addNoFilterOutcome();
        }
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.message);
    }
}

/*       S.D.G.       */
