import AbstractScoreCardCommand from "../../../gen/box/commands/AbstractScoreCardCommand";
import {getAppState} from "../../app/App";

export default class ScoreCardCommand extends AbstractScoreCardCommand {

    initCommandData() {
        const appState = getAppState();
        this.commandData.boxId = appState.data === undefined || appState.data.boxId === undefined ? undefined : appState.data.boxId;
        this.commandData.scoredCardScheduledCardId = appState.data === undefined || appState.data.scheduledCardId === undefined ? false : appState.data.scheduledCardId;
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
