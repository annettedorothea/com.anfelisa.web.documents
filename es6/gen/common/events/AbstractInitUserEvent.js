import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractInitUserEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitUserEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initTexts" ];
	}
}


/*       S.D.G.       */
