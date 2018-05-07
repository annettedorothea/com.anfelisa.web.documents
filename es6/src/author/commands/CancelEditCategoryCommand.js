import AbstractCancelEditCategoryCommand from "../../../gen/author/commands/AbstractCancelEditCategoryCommand";

export default class CancelEditCategoryCommand extends AbstractCancelEditCategoryCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
