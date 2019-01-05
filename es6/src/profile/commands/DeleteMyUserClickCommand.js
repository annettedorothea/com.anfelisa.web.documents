import AbstractDeleteMyUserClickCommand from "../../../gen/profile/commands/AbstractDeleteMyUserClickCommand";

export default class DeleteMyUserClickCommand extends AbstractDeleteMyUserClickCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
