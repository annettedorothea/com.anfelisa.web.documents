import AbstractIndexOfEditedCardChangedCommand from "../../../gen/author/commands/AbstractIndexOfEditedCardChangedCommand";

export default class IndexOfEditedCardChangedCommand extends AbstractIndexOfEditedCardChangedCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.index = this.commandParam.index;
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
