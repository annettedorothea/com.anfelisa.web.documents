import AbstractDisplayWantedCommand from "../../../gen/box/commands/AbstractDisplayWantedCommand";

export default class DisplayWantedCommand extends AbstractDisplayWantedCommand {
    execute() {
        this.commandData.index += 1;
        if (this.commandData.wantedItemsLength <= this.commandData.index) {
            if (this.commandData.image && this.commandData.wantedItemsLength + 1 === this.commandData.index) {
                this.commandData.displayImage = true;
                this.commandData.enableScoreButtons = true;
            } else {
                this.commandData.enableScoreButtons = true;
            }
        }
        this.addOkOutcome();
    }
}

/*       S.D.G.       */
