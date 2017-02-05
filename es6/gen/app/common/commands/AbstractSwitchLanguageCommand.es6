'use strict';

class AbstractSwitchLanguageCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "SwitchLanguageCommand");
        this.ok = "ok";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.ok:
        	promises.push(new SwitchLanguageEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new InitAction(this.commandData)).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
