import AbstractEditCardCommand from "../../../gen/author/commands/AbstractEditCardCommand";

export default class EditCardCommand extends AbstractEditCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.categoryId = this.commandParam.categoryId;
            this.commandData.index = this.commandParam.index;
            this.commandData.given = this.commandParam.given;
            this.commandData.wanted = this.commandParam.wanted;
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */
