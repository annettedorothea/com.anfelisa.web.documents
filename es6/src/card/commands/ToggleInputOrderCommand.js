import AbstractToggleInputOrderCommand from "../../../gen/card/commands/AbstractToggleInputOrderCommand";

export default class ToggleInputOrderCommand extends AbstractToggleInputOrderCommand {
    execute() {
        this.commandData.naturalInputOrder = !this.commandData.naturalInputOrder;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
