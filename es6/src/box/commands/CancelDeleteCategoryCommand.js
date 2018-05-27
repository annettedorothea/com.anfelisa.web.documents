import AbstractCancelDeleteCategoryCommand from "../../../gen/box/commands/AbstractCancelDeleteCategoryCommand";

export default class CancelDeleteCategoryCommand extends AbstractCancelDeleteCategoryCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
