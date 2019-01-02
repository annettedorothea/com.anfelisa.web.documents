import AbstractScoreCardCommand from "../../../gen/box/commands/AbstractScoreCardCommand";
import * as App from "../../app/App";

export default class ScoreCardCommand extends AbstractScoreCardCommand {

    initCommandData() {
        this.commandData.boxId = App.appState.data === undefined || App.appState.data.boxId === undefined ? undefined : App.appState.data.boxId;
        this.commandData.scoredCardScheduledCardId = App.appState.data === undefined || App.appState.data.scheduledCardId === undefined ? false : App.appState.data.scheduledCardId;
    }

    handleResponse(resolve, reject) {
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
