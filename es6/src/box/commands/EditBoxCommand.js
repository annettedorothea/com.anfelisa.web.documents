import AbstractEditBoxCommand from "../../../gen/box/commands/AbstractEditBoxCommand";
import * as App from "../../app/App";

export default class EditBoxCommand extends AbstractEditBoxCommand {
    execute() {
        this.commandData.editedMaxInterval = App.appState.data.maxInterval;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
