import AbstractRemoveNewCardImageCommand from "../../../gen/author/commands/AbstractRemoveNewCardImageCommand";

export default class RemoveNewCardImageCommand extends AbstractRemoveNewCardImageCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
