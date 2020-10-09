import AbstractClearToastCommand from "../../../gen/common/commands/AbstractClearToastCommand";

export default class ClearToastCommand extends AbstractClearToastCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    	this.commandData.message = null;
    }
}

/*       S.D.G.       */
