import AbstractDeleteBoxCommand from "../../../gen/box/commands/AbstractDeleteBoxCommand";

export default class DeleteBoxCommand extends AbstractDeleteBoxCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.addOkOutcome();
    	resolve();
    }
    handleError(resolve) {
        this.addErrorOutcome();
        this.commandData.confirmDelete = false;
        this.commandData.boxId = undefined;
        resolve();
    }
}

/*       S.D.G.       */
