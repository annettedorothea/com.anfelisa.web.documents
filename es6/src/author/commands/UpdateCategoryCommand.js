import AbstractUpdateCategoryCommand from "../../../gen/author/commands/AbstractUpdateCategoryCommand";

export default class UpdateCategoryCommand extends AbstractUpdateCategoryCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                categoryId: this.commandData.categoryId,
                categoryName: this.commandData.categoryName,
                categoryIndex: this.commandData.categoryIndex,
                dictionaryLookup: this.commandData.dictionaryLookup,
                givenLanguage: this.commandData.givenLanguage,
                wantedLanguage: this.commandData.wantedLanguage
            };
            this.httpPut("api/category/update", [], data).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            }, error => {
                reject(error)
            });
        });
    }
}

/*       S.D.G.       */
