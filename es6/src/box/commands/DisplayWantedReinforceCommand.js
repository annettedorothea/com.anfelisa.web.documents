import AbstractDisplayWantedReinforceCommand from "../../../gen/box/commands/AbstractDisplayWantedReinforceCommand";

export default class DisplayWantedReinforceCommand extends AbstractDisplayWantedReinforceCommand {
    execute() {
        this.commandData.index += 1;
        if (this.commandData.wantedItemsLength > this.commandData.index) {
            this.commandData.outcome = this.notAll;
        } else {
            if (this.commandData.hasImage === true) {
                this.commandData.outcome = this.image;
            } else {
                this.commandData.outcome = this.all;
            }
        }
    }
}

/*       S.D.G.       */
