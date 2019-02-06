import AbstractScoreReinforceCardCommand from "../../../gen/box/commands/AbstractScoreReinforceCardCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class ScoreReinforceCardCommand extends AbstractScoreReinforceCardCommand {

    initCommandData() {
        const appState = getState();
        this.commandData.reinforceCardId = appState.data === undefined || appState.data.reinforceCardId === undefined ? undefined : appState.data.reinforceCardId;
        return true;
    }

    handleResponse(resolve, reject) {
        const appState = getState();
        this.commandData.boxId = appState.data === undefined || appState.data.boxId === undefined ? undefined : appState.data.boxId;
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
