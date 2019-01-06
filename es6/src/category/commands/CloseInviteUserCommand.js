import AbstractCloseInviteUserCommand from "../../../gen/category/commands/AbstractCloseInviteUserCommand";

export default class CloseInviteUserCommand extends AbstractCloseInviteUserCommand {
    execute() {
        this.commandData.displayInviteUser = false;
        this.commandData.invitedUsername = undefined;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
