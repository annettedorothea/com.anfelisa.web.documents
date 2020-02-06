import AbstractDeleteUserAction from "../../../gen/admin/actions/AbstractDeleteUserAction";

export default class DeleteUserAction extends AbstractDeleteUserAction {

	initActionData() {
		//add not replayable data to action data in order to freeze for replay (e.g. time or date)
	}

}

/*       S.D.G.       */
