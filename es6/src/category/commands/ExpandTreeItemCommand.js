import AbstractExpandTreeItemCommand from "../../../gen/category/commands/AbstractExpandTreeItemCommand";

export default class ExpandTreeItemCommand extends AbstractExpandTreeItemCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
