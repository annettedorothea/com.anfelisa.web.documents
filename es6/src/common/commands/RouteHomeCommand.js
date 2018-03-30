import AbstractRouteHomeCommand from "../../../gen/common/commands/AbstractRouteHomeCommand";

export default class RouteHomeCommand extends AbstractRouteHomeCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.hash = this.commandParam.hash;
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
