import AbstractDeleteCardClickCommand from "../../../gen/author/commands/AbstractDeleteCardClickCommand";

export default class DeleteCardClickCommand extends AbstractDeleteCardClickCommand {
    execute() {
        this.commandData.cardId = this.commandParam.cardId;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
