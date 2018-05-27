import AbstractEditCategoryCommand from "../../../gen/author/commands/AbstractEditCategoryCommand";

export default class EditCategoryCommand extends AbstractEditCategoryCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
