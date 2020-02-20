import AbstractRouteChangedCommand from "../../../gen/common/commands/AbstractRouteChangedCommand";
import {get_state_State_hash, get_state_State_loggedInUser} from "../../../gen/ace/ReadAppState"

export default class RouteChangedCommand extends AbstractRouteChangedCommand {
    execute() {
        const loggedInUser = get_state_State_loggedInUser();
        const hash = get_state_State_hash();
        console.log("hash " +  hash);
        if (loggedInUser && loggedInUser.password && loggedInUser.username) {
            console.log("logged in as " + loggedInUser.username);
            if (hash === "#dashboard") {
                this.commandData.outcome = this.dashboard;
            } else if (hash === "#profile") {
                this.commandData.outcome = this.profile;
            } else if (hash === "#users") {
                this.commandData.outcome = this.userList;
            } else if (hash.startsWith("#categories")) {
                const hashes = hash.split("/");
                this.commandData.selectedCategoryId = hashes[1] ? hashes[1] : "";
                this.commandData.outcome = this.categories;
            } else if (hash.startsWith("#box/settings")) {
                const hashes = hash.split("/");
                this.commandData.boxId = hashes[2] ? hashes[2] : "";
                this.commandData.outcome = this.boxSettings;
            } else if (hash.startsWith("#box")) {
                const hashes = hash.split("/");
                this.commandData.boxId = hashes[1] ? hashes[1] : "";
                this.commandData.outcome = this.nextCard;
            } else {
                this.commandData.outcome = this.invalid;
                this.commandData.hash = "#dashboard";
            }
        } else {
            if (hash === "") {
                this.commandData.data = {
                    username: "",
                    password: "",
                    saveInLocalStorage: false
                };
                this.commandData.view = "login";
                this.commandData.outcome = this.login;
            } else if (hash === "#registration") {
                this.commandData.view = "registration";
                this.commandData.data = {
                    displayUsernameSpinner: false,
                    usernameAvailable: undefined,
                    username: "",
                    email: "",
                    emailInvalid: false,
                    passwordMismatch: false
                };
                this.commandData.outcome = this.registration;
            } else if (hash === "#forgotpassword") {
                this.commandData.view = "forgot-password";
                this.commandData.data = {
                    username: ""
                };
                this.commandData.outcome = this.forgotPassword;
            } else if (hash.startsWith("#confirmemail")) {
                const hashes = hash.split("/");
                this.commandData.username = hashes[1] ? hashes[1] : "";
                this.commandData.token = hashes[2] ? hashes[2] : "";
                this.commandData.outcome = this.confirmEmail;
            } else if (hash.startsWith("#resetpassword")) {
                this.commandData.view = "reset-password";
                const hashes = hash.split("/");
                this.commandData.data = {
                    token: hashes[1] ? hashes[1] : ""
                };
                this.commandData.outcome = this.resetPassword;
            } else {
                this.commandData.outcome = this.invalid;
                this.commandData.hash = "#";
            }
        }
    }
}

/*       S.D.G.       */
