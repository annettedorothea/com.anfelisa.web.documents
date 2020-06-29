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
        resolve();
    }
}

/*       S.D.G.       */
