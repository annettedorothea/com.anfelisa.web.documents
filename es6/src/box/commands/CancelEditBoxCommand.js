import AbstractCancelEditBoxCommand from "../../../gen/box/commands/AbstractCancelEditBoxCommand";
import {getState} from "../../../gen/ace/AppState";

export default class CancelEditBoxCommand extends AbstractCancelEditBoxCommand {
    execute() {
        this.commandData.editedMaxInterval = null;
        this.commandData.editMaxInterval = false;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
