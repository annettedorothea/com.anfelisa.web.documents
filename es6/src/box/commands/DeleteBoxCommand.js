import AbstractDeleteBoxCommand from "../../../gen/box/commands/AbstractDeleteBoxCommand";

export default class DeleteBoxCommand extends AbstractDeleteBoxCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve) {
        this.commandData.outcome = this.error;
        this.commandData.confirmDelete = false;
        this.commandData.boxId = undefined;
        resolve();
    }
}

/*       S.D.G.       */
