import AbstractLoadCardsCommand from "../../../gen/card/commands/AbstractLoadCardsCommand";
import {getAppState} from "../../app/App";

export default class LoadCardsCommand extends AbstractLoadCardsCommand {

    initCommandData() {
    }

    handleResponse(resolve, reject) {
        this.commandData.outcome = this.ok;
        const data = getAppState().data;
        this.commandData.naturalInputOrder = data.naturalInputOrder === undefined ? true : data.naturalInputOrder;
        this.commandData.useDictionary = data.useDictionary === undefined ? false : data.useDictionary;
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
