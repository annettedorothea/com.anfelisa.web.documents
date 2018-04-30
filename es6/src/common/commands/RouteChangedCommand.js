import AbstractRouteChangedCommand from "../../../gen/common/commands/AbstractRouteChangedCommand";

export default class RouteChangedCommand extends AbstractRouteChangedCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.outcome = this.login;
            this.commandData.password = this.commandParam.password;
            this.commandData.username = this.commandParam.username;
            if (this.commandParam.hash === "#registration") {
                this.commandData.outcome = this.registration;
            } else if (this.commandParam.hash === "#dashboard") {
                this.commandData.outcome = this.dashboard;
            } else if (this.commandParam.hash === "#profile") {
                this.commandData.outcome = this.profile;
            }
            resolve();
        });
    }
}

/*       S.D.G.       */
