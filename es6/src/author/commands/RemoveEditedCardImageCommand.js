import AbstractRemoveEditedCardImageCommand from "../../../gen/author/commands/AbstractRemoveEditedCardImageCommand";

export default class RemoveEditedCardImageCommand extends AbstractRemoveEditedCardImageCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
