import AbstractDeleteBoxCommand from "../../../gen/box/commands/AbstractDeleteBoxCommand";

export default class DeleteBoxCommand extends AbstractDeleteBoxCommand {

    initCommandData() {
        return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
        this.commandData.outcome = this.error;
        resolve();
    }
}

/*       S.D.G.       */
