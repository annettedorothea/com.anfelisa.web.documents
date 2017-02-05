'use strict';

class InitAction extends AbstractInitAction {

    captureActionParam() {
		this.actionParam.username = localStorage.username;
		this.actionParam.password = localStorage.password;
    	if (localStorage.schema) {
	        this.actionParam.schema = localStorage.schema;
	    } else {
			this.actionParam.schema = "anfelisa";
		}
    	if (localStorage.language) {
	        this.actionParam.language = localStorage.language;
	    } else {
			this.actionParam.language = "de";
		}
		this.actionParam.hash = window.location.hash.substring(1);
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.schema = this.actionParam.schema;
		this.actionData.language = this.actionParam.language;
		this.actionData.hash = this.actionParam.hash;
    }

    releaseActionParam() {
		localStorage.username = this.actionParam.username;
		localStorage.password = this.actionParam.password;
   		localStorage.schema = this.actionParam.schema;
   		localStorage.language = this.actionParam.language;
		window.location.hash = this.actionParam.hash;
    }
}

/*       S.D.G.       */
