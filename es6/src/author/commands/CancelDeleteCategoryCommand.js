import AbstractCancelDeleteCategoryCommand from "../../../gen/author/commands/AbstractCancelDeleteCategoryCommand";

export default class CancelDeleteCategoryCommand extends AbstractCancelDeleteCategoryCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */
