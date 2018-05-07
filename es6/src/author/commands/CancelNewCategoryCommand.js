import AbstractCancelNewCategoryCommand from "../../../gen/author/commands/AbstractCancelNewCategoryCommand";

export default class CancelNewCategoryCommand extends AbstractCancelNewCategoryCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */
