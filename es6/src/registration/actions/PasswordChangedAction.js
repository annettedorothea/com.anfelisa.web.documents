import AbstractPasswordChangedAction from "../../../gen/registration/actions/AbstractPasswordChangedAction";

export default class PasswordChangedAction extends AbstractPasswordChangedAction {

    initActionData() {
    	//add not replayable data to action data in order to freeze for replay (e.g. time or date)
    }

}

/*       S.D.G.       */
