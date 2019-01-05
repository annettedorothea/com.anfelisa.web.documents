import AbstractDeleteMyUserCancelCommand from "../../../gen/profile/commands/AbstractDeleteMyUserCancelCommand";

export default class DeleteMyUserCancelCommand extends AbstractDeleteMyUserCancelCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
