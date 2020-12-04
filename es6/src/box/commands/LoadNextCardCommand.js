import AbstractLoadNextCardCommand from "../../../gen/box/commands/AbstractLoadNextCardCommand";

export default class LoadNextCardCommand extends AbstractLoadNextCardCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.index = 0;
        this.commandData.enableScoreButtons = false;
        this.commandData.displayImage = false;
        this.addOkOutcome();
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */

