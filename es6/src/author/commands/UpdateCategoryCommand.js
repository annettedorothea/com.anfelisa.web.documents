import AbstractUpdateCategoryCommand from "../../../gen/author/commands/AbstractUpdateCategoryCommand";

export default class UpdateCategoryCommand extends AbstractUpdateCategoryCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                categoryId: this.commandParam.categoryId,
                categoryName: this.commandParam.categoryName,
                categoryIndex: this.commandParam.categoryIndex,
                dictionaryLookup: this.commandParam.dictionaryLookup,
                givenLanguage: this.commandParam.givenLanguage,
                wantedLanguage: this.commandParam.wantedLanguage
            };
            this.httpPut("api/category/update", [], data).then((data) => {
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
