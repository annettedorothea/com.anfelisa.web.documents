'use strict';

class ReadStatisticsAction extends AbstractReadStatisticsAction {

    captureActionParam() {
		this.actionParam.username = localStorage.username;
		this.actionParam.password = localStorage.password;
		this.actionParam.schema = localStorage.schema;
		this.actionParam.language = localStorage.language;
		this.actionParam.year = $(".year").val();
		this.actionParam.month = $(".month").val();
		if (this.actionParam.year  === undefined || this.actionParam.month === undefined) {
			var now = new Date();
			this.actionParam.year = now.getFullYear();
			this.actionParam.month = now.getMonth() + 1;
		}
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.schema = this.actionParam.schema;
		this.actionData.language = this.actionParam.language;
		this.actionData.token = localStorage.token;
		this.actionData.year = this.actionParam.year ;
		this.actionData.month = this.actionParam.month ;
    }

    releaseActionParam() {
		localStorage.username = this.actionParam.username;
		localStorage.password = this.actionParam.password;
		localStorage.schema = this.actionParam.schema;
		localStorage.language = this.actionParam.language;
		$(".year").val(this.actionParam.year);
		$(".month").val(this.actionParam.month);
    }
}

/*       S.D.G.       */
