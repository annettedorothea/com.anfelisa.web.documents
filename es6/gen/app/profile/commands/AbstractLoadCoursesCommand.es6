'use strict';

class AbstractLoadCoursesCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "LoadCoursesCommand");
        this.loaded = "loaded";
        this.error = "error";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.loaded:
        	promises.push(new RenderCourseToBoxEvent(this.commandData).publish());
        	break;
        case this.error:
        	promises.push(new ServerErrorEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
