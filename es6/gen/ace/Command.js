import AppUtils from "../../src/app/AppUtils";

export default class Command {
    constructor(commandParam, commandName) {
        this.commandName = commandName;
        this.commandParam = AppUtils.deepCopy(commandParam);
        this.commandData = {};
    }

    execute() {
        throw "no execute method defined for " + this.commandName;
    }

    publishEvents() {
        throw "no publishEvents method defined for " + this.commandName;
    }

}

/*       S.D.G.       */

