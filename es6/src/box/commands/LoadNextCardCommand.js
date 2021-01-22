import AbstractLoadNextCardCommand from "../../../gen/box/commands/AbstractLoadNextCardCommand";

export default class LoadNextCardCommand extends AbstractLoadNextCardCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        if (this.commandData.openTodaysCards === 0) {
            this.addFinishedOutcome();
            this.commandData.hash = "#dashboard"
            this.commandData.messageKey = "finished"
        } else {
            this.addOkOutcome();
            this.commandData.index = 0;
            this.commandData.enableScoreButtons = false;
            this.commandData.displayImage = false;
        }
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */

