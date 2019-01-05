import AbstractUsernameForgotPasswordChangedAction from "../../../gen/password/actions/AbstractUsernameForgotPasswordChangedAction";

export default class UsernameForgotPasswordChangedAction extends AbstractUsernameForgotPasswordChangedAction {

    initActionData() {
    	//add not replayable data to action data in order to freeze for replay (e.g. time or date)
    }

}

/*       S.D.G.       */
