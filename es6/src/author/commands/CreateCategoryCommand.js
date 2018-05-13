import AbstractCreateCategoryCommand from "../../../gen/author/commands/AbstractCreateCategoryCommand";

export default class CreateCategoryCommand extends AbstractCreateCategoryCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                categoryName: this.commandParam.categoryName,
                categoryIndex: this.commandParam.categoryIndex,
                parentCategoryId: this.commandParam.parentCategoryId,
                dictionaryLookup: this.commandParam.dictionaryLookup,
                givenLanguage: this.commandParam.givenLanguage,
                wantedLanguage: this.commandParam.wantedLanguage
            };
            this.httpPost("api/category/create", [], data).then((data) => {
                this.commandData.outcome = this.ok;
                this.commandData.username = this.commandParam.username;
                this.commandData.password = this.commandParam.password;
                this.commandData.parentCategoryId = this.commandParam.parentCategoryId;
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
        });
    }
}

/*       S.D.G.       */
