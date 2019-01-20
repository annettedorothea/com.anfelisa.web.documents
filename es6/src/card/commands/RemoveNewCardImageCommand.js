import AbstractRemoveNewCardImageCommand from "../../../gen/card/commands/AbstractRemoveNewCardImageCommand";

export default class RemoveNewCardImageCommand extends AbstractRemoveNewCardImageCommand {
    execute() {
        this.commandData.image = "";
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
