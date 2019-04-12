import AbstractCloseInviteUserCommand from "../../../gen/category/commands/AbstractCloseInviteUserCommand";
import * as AppState from "../../../gen/ace/ReadAppState";

export default class CloseInviteUserCommand extends AbstractCloseInviteUserCommand {
    execute() {
        this.commandData.selectedCategoryId = AppState.get_state_State_data_AuthorView_categoryTree_CategoryTree_selectedCategory().categoryId;
        this.commandData.displayInviteUser = false;
        this.commandData.invitedUsername = undefined;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
