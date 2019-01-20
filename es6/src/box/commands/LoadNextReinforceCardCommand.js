import AbstractLoadNextReinforceCardCommand from "../../../gen/box/commands/AbstractLoadNextReinforceCardCommand";

export default class LoadNextReinforceCardCommand extends AbstractLoadNextReinforceCardCommand {

    initCommandData() {
        return true;
    }

    handleResponse(resolve) {
        if (this.commandData.reinforceCardId) {
            this.commandData.outcome = this.ok;
            this.commandData.data = {};
            this.commandData.view = "card";
            this.commandData.index = 0;
            this.commandData.enableScoreButtons = false;
            this.commandData.displayImage = false;
        } else {
            this.commandData.outcome = this.noCard;
            this.commandData.hash = `#box/${this.commandData.boxId}`;
        }
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
