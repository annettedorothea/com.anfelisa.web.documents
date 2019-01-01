import AbstractRouteChangedAction from "../../../gen/common/actions/AbstractRouteChangedAction";

export default class RouteChangedAction extends AbstractRouteChangedAction {

    initActionData() {
    	//add not replayable data to action data in order to freeze for replay (e.g. time or date)
    }

}

/*       S.D.G.       */
