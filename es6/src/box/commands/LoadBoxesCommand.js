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
        this.addOkOutcome();
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
