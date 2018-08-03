import AbstractCreateCategoryCommand from "../../../gen/author/commands/AbstractCreateCategoryCommand";

export default class CreateCategoryCommand extends AbstractCreateCategoryCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                categoryName: this.commandData.categoryName,
                categoryIndex: this.commandData.categoryIndex,
                parentCategoryId: this.commandData.parentCategoryId,
                dictionaryLookup: this.commandData.dictionaryLookup,
                givenLanguage: this.commandData.givenLanguage,
                wantedLanguage: this.commandData.wantedLanguage
            };
            this.httpPost("api/category/create", [], data).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            }, error => {
                reject(error)
            });
        });
    }
}

/*       S.D.G.       */
