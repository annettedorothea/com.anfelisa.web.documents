import AbstractRouteCommand from "../../../gen/common/commands/AbstractRouteCommand";

export default class RouteCommand extends AbstractRouteCommand {
    execute() {
        this.commandData.hash = this.commandParam.hash;
        this.commandData.password = this.commandParam.password;
        this.commandData.username = this.commandParam.username;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
