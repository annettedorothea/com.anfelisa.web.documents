/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AbstractCancelInviteUserCommand from "../../../gen/category/commands/AbstractCancelInviteUserCommand";

export default class CancelInviteUserCommand extends AbstractCancelInviteUserCommand {
    execute() {
        this.commandData.inviteUserDialog = {
            display: false,
            usernameSearchString: ""
        };
    	this.addOkOutcome();
    }
}




/******* S.D.G. *******/



