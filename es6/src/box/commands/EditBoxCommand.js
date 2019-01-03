import AbstractEditBoxCommand from "../../../gen/box/commands/AbstractEditBoxCommand";
import {getAppState} from "../../app/App";

export default class EditBoxCommand extends AbstractEditBoxCommand {
    execute() {
        this.commandData.editedMaxInterval = getAppState().data.maxInterval;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
