import AbstractDisplayWantedCommand from "../../../gen/box/commands/AbstractDisplayWantedCommand";

export default class DisplayWantedCommand extends AbstractDisplayWantedCommand {
    execute() {
        if (this.commandData.wantedItemsLength > this.commandData.index) {
            this.commandData.outcome = this.notAll;
        } else {
            this.commandData.outcome = this.all;
        }
    }
}

/*       S.D.G.       */
