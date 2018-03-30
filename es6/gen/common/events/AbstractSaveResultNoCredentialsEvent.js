import Event from "../../../gen/ace/Event";

export default class AbstractSaveResultNoCredentialsEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.SaveResultNoCredentialsEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.TestView.renderResult" ];
	}
}


/*       S.D.G.       */
