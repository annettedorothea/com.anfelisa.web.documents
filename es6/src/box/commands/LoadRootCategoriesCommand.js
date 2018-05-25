import AbstractLoadRootCategoriesCommand from "../../../gen/box/commands/AbstractLoadRootCategoriesCommand";

export default class LoadRootCategoriesCommand extends AbstractLoadRootCategoriesCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpGet("api/categories/root").then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
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
