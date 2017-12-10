import AbstractSaveResultAction from "../../../gen/common/actions/AbstractSaveResultAction";
import CommonView from "../views/CommonView";

export default class SaveResultAction extends AbstractSaveResultAction {

	captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
		this.actionParam.language = CommonView.getLanguage();
		this.actionParam.hash = window.location.hash.substring(1);
	}

	initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.language = this.actionParam.language;
		this.actionData.hash = this.actionParam.hash;
		let json = {};
		let allCompletionTexts = jQuery(".vocabulary");
		for (let i = 0; i < allCompletionTexts.length; i++) {
			let completionTextId = allCompletionTexts[i].id;
			let strikes = jQuery("#" + completionTextId + "_shots").children();
			let answer = "";
			for (let j = 0; j < strikes.length; j++) {
				let currentStrike = $(strikes[j]);
				if (currentStrike.hasClass("strike")) {
					answer += "1";
				} else {
					answer += "0";
				}
			}
			json["" + completionTextId] = answer;
		}

		if ($("#questionOverviewList i").length > 0) {
			this.actionParam.maxPoints = $("#questionOverviewList i").length;
			let correctAnswers = $("#questionOverviewList i.correct").length;
			let falseAnswers = $("#questionOverviewList i.false").length;
			this.actionParam.points = correctAnswers - falseAnswers;
			if (this.actionParam.points < 0) {
				this.actionParam.points = 0;
			}

			for (let i = 1; i <= this.actionParam.maxPoints; i++) {
				let result = "";
				$("#" + i + " i").each(function() {
					if ($(this).hasClass("correct")) {
						result += "1";
					} else if ($(this).hasClass("false")) {
						result += "2";
					} else {
						result += "0";
					}
				});
				json[i] = result;
			}
		}




		if (allCompletionTexts.length > 0) {
			this.actionData.points = Vocabulary.testState.points;
			this.actionData.maxPoints = Vocabulary.testState.maxPoints;
		} else {
			this.actionData.points = this.actionParam.points;
			this.actionData.maxPoints = this.actionParam.maxPoints;
		}

		this.actionData.json = JSON.stringify(json);
		let hashes = this.actionParam.hash.split("/");
		this.actionData.testId = Number(hashes[hashes.length-1]);
	}

	releaseActionParam() {
		window.location.hash = this.actionParam.hash;
	}
}

/*       S.D.G.       */
