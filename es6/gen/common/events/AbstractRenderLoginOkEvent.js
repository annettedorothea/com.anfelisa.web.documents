import Event from "../../../gen/ace/Event";

export default class AbstractRenderLoginOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.RenderLoginOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.HeaderView.renderLogin" ];
	}
}


/*       S.D.G.       */
