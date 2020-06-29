import AbstractLoadBoxesCommand from "../../../gen/box/commands/AbstractLoadBoxesCommand";

export default class LoadBoxesCommand extends AbstractLoadBoxesCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.data = {
            deleteBox: {
                confirmDelete: false,
                boxId: null
            }
        };
        this.commandData.view = "dashboard";
        this.commandData.outcome = this.ok;
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
