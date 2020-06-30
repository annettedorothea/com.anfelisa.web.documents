import AbstractLoadBoxesCommand from "../../../gen/box/commands/AbstractLoadBoxesCommand";

export default class LoadBoxesCommand extends AbstractLoadBoxesCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.dashboardView = {
            boxList: this.commandData.boxList,
            deleteBox: {
                confirmDelete: false,
                boxId: undefined
            }
        };
        this.commandData.boxList = undefined;
        this.commandData.outcome = this.ok;
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
