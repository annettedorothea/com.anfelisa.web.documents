import Action from "../../ace/Action";

export default class AbstractInitAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.InitAction', true);
    }


	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
