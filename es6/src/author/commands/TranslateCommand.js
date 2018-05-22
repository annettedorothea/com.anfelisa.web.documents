import AbstractTranslateCommand from "../../../gen/author/commands/AbstractTranslateCommand";

export default class TranslateCommand extends AbstractTranslateCommand {
    execute() {
        return new Promise((resolve, reject) => {
            if (this.commandParam.naturalInputOrder === true && (!this.commandParam.given || this.commandParam.given.length === 0)) {
                this.commandData.outcome = this.empty;
                resolve();
            } else if (this.commandParam.naturalInputOrder === false && (!this.commandParam.wanted || this.commandParam.wanted.length === 0)) {
                this.commandData.outcome = this.empty;
                resolve();
            } else if (this.commandParam.naturalInputOrder === true && this.commandParam.wanted && this.commandParam.wanted.length > 0) {
                this.commandData.outcome = this.targetNotEmtpy;
                resolve();
            } else if (this.commandParam.naturalInputOrder === false && this.commandParam.given && this.commandParam.given.length > 0) {
                this.commandData.outcome = this.targetNotEmtpy;
                resolve();
            } else {
                let queryParams = [];
                queryParams.push({
                    key: "sourceValue",
                    value: this.commandParam.naturalInputOrder === true ? this.commandParam.given : this.commandParam.wanted
                });
                queryParams.push({
                    key: "sourceLanguage",
                    value: this.commandParam.naturalInputOrder === true ? this.commandParam.givenLanguage : this.commandParam.wantedLanguage
                });
                queryParams.push({
                    key: "targetLanguage",
                    value: this.commandParam.naturalInputOrder === true ? this.commandParam.wantedLanguage : this.commandParam.givenLanguage
                });
                this.httpGet("api/card/translation", queryParams).then((data) => {
                    if (this.commandParam.naturalInputOrder === true) {
                        this.commandData.wanted = data.targetValue;
                        this.commandData.outcome = this.wantedFetched;
                        this.commandData.given = this.commandParam.given;
                    } else {
                        this.commandData.given = data.targetValue;
                        this.commandData.outcome = this.givenFetched;
                        this.commandData.wanted = this.commandParam.wanted;
                    }
                    this.commandData.categoryId = this.commandParam.categoryId;
                    this.commandData.username = this.commandParam.username;
                    this.commandData.password = this.commandParam.password;
                    resolve();
                }, (error) => {
                    if (error.code === 401) {
                        error.errorKey = "unauthorized";
                        this.commandData.error = error;
                        this.commandData.outcome = this.unauthorized;
                        resolve();
                    } else {
                        reject(error.text);
                    }
                });
            }
        });
    }
}

/*       S.D.G.       */
