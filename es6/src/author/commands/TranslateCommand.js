import AbstractTranslateCommand from "../../../gen/author/commands/AbstractTranslateCommand";

export default class TranslateCommand extends AbstractTranslateCommand {
    execute() {
        return new Promise((resolve, reject) => {
            if (this.commandData.naturalInputOrder === true && (!this.commandData.given || this.commandData.given.length === 0)) {
                this.commandData.outcome = this.empty;
                resolve();
            } else if (this.commandData.naturalInputOrder === false && (!this.commandData.wanted || this.commandData.wanted.length === 0)) {
                this.commandData.outcome = this.empty;
                resolve();
            } else if (this.commandData.naturalInputOrder === true && this.commandData.wanted && this.commandData.wanted.length > 0) {
                this.commandData.outcome = this.targetNotEmtpy;
                resolve();
            } else if (this.commandData.naturalInputOrder === false && this.commandData.given && this.commandData.given.length > 0) {
                this.commandData.outcome = this.targetNotEmtpy;
                resolve();
            } else {
                let queryParams = [];
                queryParams.push({
                    key: "sourceValue",
                    value: this.commandData.naturalInputOrder === true ? this.commandData.given : this.commandData.wanted
                });
                queryParams.push({
                    key: "sourceLanguage",
                    value: this.commandData.naturalInputOrder === true ? this.commandData.givenLanguage : this.commandData.wantedLanguage
                });
                queryParams.push({
                    key: "targetLanguage",
                    value: this.commandData.naturalInputOrder === true ? this.commandData.wantedLanguage : this.commandData.givenLanguage
                });
                this.httpGet("api/card/translation", queryParams).then((data) => {
                    console.log("TranslateCommand", data);
                    if (this.commandData.naturalInputOrder === true) {
                        this.commandData.wanted = data.targetValue;
                        this.commandData.outcome = this.wantedFetched;
                    } else {
                        this.commandData.given = data.targetValue;
                        this.commandData.outcome = this.givenFetched;
                    }
                    resolve();
                }, error => {
                    reject(error)
                });
            }
        });
    }
}

/*       S.D.G.       */
