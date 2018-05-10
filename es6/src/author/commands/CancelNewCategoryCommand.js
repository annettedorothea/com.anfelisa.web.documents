import AbstractCancelNewCategoryCommand from "../../../gen/author/commands/AbstractCancelNewCategoryCommand";

export default class CancelNewCategoryCommand extends AbstractCancelNewCategoryCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
