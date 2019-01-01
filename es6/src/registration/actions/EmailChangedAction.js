import AbstractEmailChangedAction from "../../../gen/registration/actions/AbstractEmailChangedAction";

export default class EmailChangedAction extends AbstractEmailChangedAction {

    initActionData() {
    	//add not replayable data to action data in order to freeze for replay (e.g. time or date)
    }

}

/*       S.D.G.       */
