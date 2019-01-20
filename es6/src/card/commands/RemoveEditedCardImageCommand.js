import AbstractRemoveEditedCardImageCommand from "../../../gen/card/commands/AbstractRemoveEditedCardImageCommand";

export default class RemoveEditedCardImageCommand extends AbstractRemoveEditedCardImageCommand {
    execute() {
        this.commandData.image = "";
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
