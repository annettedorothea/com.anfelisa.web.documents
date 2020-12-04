import AbstractToggleInputOrderCommand from "../../../gen/card/commands/AbstractToggleInputOrderCommand";

export default class ToggleInputOrderCommand extends AbstractToggleInputOrderCommand {
    execute() {
        this.commandData.naturalInputOrder = !this.commandData.naturalInputOrder;
    	this.addOkOutcome();
    }
}

/*       S.D.G.       */
