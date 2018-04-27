import Event from "../../../gen/ace/Event";

export default class AbstractInitNoUserEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitNoUserEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initTexts" ];
	}
}


/*       S.D.G.       */
