import AbstractInvitedUsernameChangedCommand from "../../../gen/category/commands/AbstractInvitedUsernameChangedCommand";

export default class InvitedUsernameChangedCommand extends AbstractInvitedUsernameChangedCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
