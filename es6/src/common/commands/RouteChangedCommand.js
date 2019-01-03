import AbstractRouteChangedCommand from "../../../gen/common/commands/AbstractRouteChangedCommand";
import {getAppState} from "../../app/App";

export default class RouteChangedCommand extends AbstractRouteChangedCommand {
    execute() {
        const appState = getAppState();
        if (appState.password && appState.username) {
            if (this.commandData.hash === "#dashboard") {
                this.commandData.outcome = this.dashboard;
            } else if (this.commandData.hash === "#profile") {
                this.commandData.outcome = this.profile;
            } else if (this.commandData.hash === "#users") {
                this.commandData.outcome = this.userList;
            } else if (this.commandData.hash.startsWith("#categories")) {
                const hashes = this.commandData.hash.split("/");
                this.commandData.selectedCategoryId = hashes[1] ? hashes[1] : "";
                this.commandData.outcome = this.categories;
            } else if (this.commandData.hash.startsWith("#box/reinforce")) {
                const hashes = this.commandData.hash.split("/");
                this.commandData.boxId = hashes[2] ? hashes[2] : "";
                this.commandData.outcome = this.reinforceCard;
            } else if (this.commandData.hash.startsWith("#box")) {
                const hashes = this.commandData.hash.split("/");
                this.commandData.boxId = hashes[1] ? hashes[1] : "";
                this.commandData.outcome = this.nextCard;
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
                this.commandData.username = hashes[1] ? hashes[1] : "";
                this.commandData.token = hashes[2] ? hashes[2] : "";
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
