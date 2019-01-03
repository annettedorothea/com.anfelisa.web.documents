import AbstractDeselectTreeItemCommand from "../../../gen/category/commands/AbstractDeselectTreeItemCommand";

export default class DeselectTreeItemCommand extends AbstractDeselectTreeItemCommand {
    execute() {
        this.commandData.selectedCategory = undefined;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
