import AbstractIndexOfNewCardChangedCommand from "../../../gen/author/commands/AbstractIndexOfNewCardChangedCommand";

export default class IndexOfNewCardChangedCommand extends AbstractIndexOfNewCardChangedCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.index = this.commandParam.index;
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */
