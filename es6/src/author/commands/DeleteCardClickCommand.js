import AbstractDeleteCardClickCommand from "../../../gen/author/commands/AbstractDeleteCardClickCommand";

export default class DeleteCardClickCommand extends AbstractDeleteCardClickCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.cardId = this.commandParam.cardId;
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
