import AbstractLoadNextCardCommand from "../../../gen/box/commands/AbstractLoadNextCardCommand";
import AppUtils from "../../app/AppUtils";
import {Texts} from "../../app/Texts";

export default class LoadNextCardCommand extends AbstractLoadNextCardCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        if (this.commandData.openTodaysCards === 0) {
            this.addFinishedOutcome();
            this.commandData.hash = "#dashboard";
            this.commandData.message = AppUtils.createInfoMessage("finished");
        } else {
            this.addOkOutcome();
            this.commandData.index = 0;
            this.commandData.enableScoreButtons = false;
            this.commandData.displayImage = false;
        }
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.message);
    }
}

/*       S.D.G.       */

