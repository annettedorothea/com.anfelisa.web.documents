'use strict';

class AbstractLogoutCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "LogoutCommand");
        this.ok = "ok";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.ok:
        	promises.push(new UserLoggedOutEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
