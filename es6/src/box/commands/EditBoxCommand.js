import AbstractEditBoxCommand from "../../../gen/box/commands/AbstractEditBoxCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class EditBoxCommand extends AbstractEditBoxCommand {
    execute() {
        const maxInterval = getState().data.maxInterval
        this.commandData.editedMaxInterval = maxInterval ? maxInterval : "";
        this.commandData.editMaxInterval = true;
        this.commandData.editMaxCardsPerDay = false;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
