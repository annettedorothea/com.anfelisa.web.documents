import AbstractCancelDeleteCategoryCommand from "../../../gen/author/commands/AbstractCancelDeleteCategoryCommand";

export default class CancelDeleteCategoryCommand extends AbstractCancelDeleteCategoryCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
