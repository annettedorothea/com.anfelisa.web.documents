import Action from "../../ace/SynchronousAction";
import RouteChangedCommand from "../../../src/common/commands/RouteChangedCommand";

export default class AbstractRouteChangedAction extends Action {

    constructor( hash) {
        super({hash}, 'common.RouteChangedAction');
    }
    
	getCommand() {
		return new RouteChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
