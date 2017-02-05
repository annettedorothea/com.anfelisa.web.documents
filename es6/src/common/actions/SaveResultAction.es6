'use strict';

class SaveResultAction extends AbstractSaveResultAction {

	captureActionParam() {
		this.actionParam.username = localStorage.username;
		this.actionParam.password = localStorage.password;
		this.actionParam.schema = localStorage.schema;
		this.actionParam.language = localStorage.language;
		this.actionParam.hash = window.location.hash.substring(1);
	}

	initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.schema = this.actionParam.schema;
		this.actionData.language = this.actionParam.language;
		this.actionData.hash = this.actionParam.hash;
		var json = {};
		var allCompletionTexts = jQuery(".vocabulary");
		for (var i = 0; i < allCompletionTexts.length; i++) {
			var completionTextId = allCompletionTexts[i].id;
			var strikes = jQuery("#" + completionTextId + "_shots").children();
			var answer = "";
			for (var j = 0; j < strikes.length; j++) {
				var currentStrike = $(strikes[j]);
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
			var correctAnswers = $("#questionOverviewList i.correct").length;
			var falseAnswers = $("#questionOverviewList i.false").length;
			this.actionParam.points = correctAnswers - falseAnswers;
			if (this.actionParam.points < 0) {
				this.actionParam.points = 0;
			}

			for (var i = 1; i <= this.actionParam.maxPoints; i++) {
				var result = "";
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
		var hashes = this.actionParam.hash.split("/");
		this.actionData.testId = Number(hashes[hashes.length-1]);
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
