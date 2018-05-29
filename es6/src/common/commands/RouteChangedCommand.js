import AbstractRouteChangedCommand from "../../../gen/common/commands/AbstractRouteChangedCommand";

export default class RouteChangedCommand extends AbstractRouteChangedCommand {
    execute() {
        if (this.commandData.password && this.commandData.username) {
            if (this.commandData.hash === "#dashboard") {
                this.commandData.outcome = this.dashboard;
            } else if (this.commandData.hash === "#profile") {
                this.commandData.outcome = this.profile;
            } else if (this.commandData.hash === "#users") {
                this.commandData.outcome = this.userList;
            } else if (this.commandData.hash.startsWith("#categories")) {
                const hashes = this.commandData.hash.split("/");
                this.commandData.parentCategoryId = hashes[1] ? hashes[1] : "";
                this.commandData.outcome = this.categories;
            } else if (this.commandData.hash.startsWith("#createbox")) {
                const hashes = this.commandData.hash.split("/");
                this.commandData.outcome = this.createBox;
            } else {
                this.commandData.outcome = this.invalid;
                this.commandData.hash = "#dashboard";
            }
        } else {
            if (this.commandData.hash === "") {
                this.commandData.outcome = this.login;
            } else if (this.commandData.hash === "#registration") {
                this.commandData.outcome = this.registration;
            } else if (this.commandData.hash === "#forgotpassword") {
                this.commandData.outcome = this.forgotPassword;
            } else if (this.commandData.hash.startsWith("#confirmemail")) {
                const hashes = this.commandData.hash.split("/");
                this.commandData.token = hashes[1] ? hashes[1] : "";
                this.commandData.outcome = this.confirmEmail;
            } else if (this.commandData.hash.startsWith("#resetpassword")) {
                const hashes = this.commandData.hash.split("/");
                this.commandData.token = hashes[1] ? hashes[1] : "";
                this.commandData.outcome = this.resetPassword;
            } else {
                this.commandData.outcome = this.invalid;
                this.commandData.hash = "#";
            }
        }
    }
}

/*       S.D.G.       */
