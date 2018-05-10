import AbstractCancelEditCategoryCommand from "../../../gen/author/commands/AbstractCancelEditCategoryCommand";

export default class CancelEditCategoryCommand extends AbstractCancelEditCategoryCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
