import AbstractScoreCardCommand from "../../../gen/box/commands/AbstractScoreCardCommand";
import {getState} from "../../../gen/ace/AppState";

export default class ScoreCardCommand extends AbstractScoreCardCommand {

    initCommandData() {
        const appState = getState();
        this.commandData.boxId = appState.data === undefined || appState.data.boxId === undefined ? undefined : appState.data.boxId;
        this.commandData.scoredCardScheduledCardId = appState.data === undefined || appState.data.scheduledCardId === undefined ? false : appState.data.scheduledCardId;
        return true;
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
