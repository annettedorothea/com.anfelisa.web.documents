import AbstractEditCardCommand from "../../../gen/author/commands/AbstractEditCardCommand";

export default class EditCardCommand extends AbstractEditCardCommand {
    execute() {
        this.commandData.cardId = this.commandParam.cardId;
        this.commandData.index = this.commandParam.index;
        this.commandData.given = this.commandParam.given;
        this.commandData.wanted = this.commandParam.wanted;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
