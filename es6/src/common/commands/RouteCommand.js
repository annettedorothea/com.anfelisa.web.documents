import AbstractRouteCommand from "../../../gen/common/commands/AbstractRouteCommand";

export default class RouteCommand extends AbstractRouteCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.hash = this.commandParam.hash;
            this.commandData.password = this.commandParam.password;
            this.commandData.username = this.commandParam.username;
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */
