import AbstractDisplayWantedCommand from "../../../gen/box/commands/AbstractDisplayWantedCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class DisplayWantedCommand extends AbstractDisplayWantedCommand {
    execute() {
        const data = getState().data;
        this.commandData.index = data.index + 1;
        if (this.commandData.wantedItemsLength <= this.commandData.index) {
            if (data.image && this.commandData.wantedItemsLength + 1 === this.commandData.index) {
                this.commandData.displayImage = true;
                this.commandData.enableScoreButtons = true;
            } else {
                this.commandData.enableScoreButtons = true;
            }
        }
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
