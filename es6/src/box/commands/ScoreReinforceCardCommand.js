import AbstractScoreReinforceCardCommand from "../../../gen/box/commands/AbstractScoreReinforceCardCommand";
import {getAppState} from "../../app/App";

export default class ScoreReinforceCardCommand extends AbstractScoreReinforceCardCommand {

    initCommandData() {
        const appState = getAppState();
        this.commandData.reinforceCardId = appState.data === undefined || appState.data.reinforceCardId === undefined ? undefined : appState.data.reinforceCardId;
    }

    handleResponse(resolve, reject) {
        const appState = getAppState();
        this.commandData.boxId = appState.data === undefined || appState.data.boxId === undefined ? undefined : appState.data.boxId;
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
