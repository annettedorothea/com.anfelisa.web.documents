import AbstractToggleInputOrderCommand from "../../../gen/card/commands/AbstractToggleInputOrderCommand";

export default class ToggleInputOrderCommand extends AbstractToggleInputOrderCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
