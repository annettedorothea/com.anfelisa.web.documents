'use strict';

class SubmitForgotPasswordRequestCommand extends AbstractSubmitForgotPasswordRequestCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.language = this.commandParam.language;
            if (!this.commandParam.username) {
                this.commandData.messageKey = "dataInvalid";
                this.commandData.outcome = this.dataInvalid;
                resolve();
            } else {
                var queryParams = [];
                queryParams.push({
                    key: "username",
                    value: this.commandParam.username
                });
                queryParams.push({
                    key: "language",
                    value: this.commandParam.language
                });
                this.httpPost("api/users/forgot-password", queryParams).then(() => {
                    this.commandData.outcome = this.ok;
                    this.commandData.messageKey = "forgotPasswordSubmitted";
                    resolve();
                }, (error) => {
                    this.commandData.outcome = this.ok;
                    this.commandData.messageKey = "forgotPasswordSubmitted";
                    resolve();
                });
            }
        });
    }
}

/*       S.D.G.       */
