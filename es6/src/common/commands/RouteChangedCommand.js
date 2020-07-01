import AbstractRouteChangedCommand from "../../../gen/common/commands/AbstractRouteChangedCommand";

export default class RouteChangedCommand extends AbstractRouteChangedCommand {
    execute() {
        const hashes = this.commandData.hash.split("/");
        if (this.commandData.hash.startsWith("#confirmemail")) {
            this.commandData.username = hashes[1] ? hashes[1] : "";
            this.commandData.token = hashes[2] ? hashes[2] : "";
            this.commandData.outcome = this.confirmEmail;
        } else if (this.commandData.hash.startsWith("#resetpassword" && hashes.length >= 1 && hashes[1])) {
            this.commandData.resetPasswordView = {
                token: hashes[1]
            };
            this.commandData.outcome = this.resetPassword;
        } else if (this.commandData.hash === "#dashboard" && this.isUserLoggedIn()) {
            this.commandData.outcome = this.dashboard;
        } else if (this.commandData.hash === "#profile" && this.isUserLoggedIn()) {
            this.commandData.outcome = this.profile;
        } else if (this.commandData.hash === "#users" && this.isUserLoggedIn()) {
            this.commandData.outcome = this.userList;
        } else if (this.commandData.hash.startsWith("#categories") && hashes.length >= 2 && this.isUserLoggedIn()) {
            this.commandData.rootCategoryId = hashes[1];
            this.commandData.selectedCategoryId = hashes.length === 2 ? hashes[1] : hashes[2];
            this.commandData.outcome = this.categories;
        } else if (this.commandData.hash.startsWith("#box/settings") && hashes.length >= 2 && hashes[2] && this.isUserLoggedIn()) {
            this.commandData.boxId = hashes[2];
            this.commandData.outcome = this.boxSettings;
        } else if (this.commandData.hash.startsWith("#box/create" && this.isUserLoggedIn())) {
            this.commandData.outcome = this.boxCreate;
        } else if (this.commandData.hash.startsWith("#box" && hashes.length >= 1 && hashes[1] && this.isUserLoggedIn())) {
            if (hashes[1]) {
                this.commandData.boxId = hashes[1];
                this.commandData.outcome = this.nextCard;
            } else {
            }
        } else if (this.commandData.hash === "" && !this.isUserLoggedIn()) {
            this.commandData.data = {
                username: "",
                password: "",
                saveInLocalStorage: false
            };
            this.commandData.outcome = this.login;
        } else if (this.commandData.hash === "#registration" && !this.isUserLoggedIn()) {
            this.commandData.data = {
                displayUsernameSpinner: false,
                usernameAvailable: undefined,
                username: "",
                email: "",
                emailInvalid: false,
                passwordMismatch: false
            };
            this.commandData.outcome = this.registration;
        } else if (this.commandData.hash === "#forgotpassword" && !this.isUserLoggedIn()) {
            this.commandData.data = {
                username: ""
            };
            this.commandData.outcome = this.forgotPassword;
        } else if (this.isUserLoggedIn()) {
            this.commandData.outcome = this.invalid;
            this.commandData.hash = "#dashboard";
        } else {
            this.commandData.outcome = this.invalid;
            this.commandData.hash = "#";
        }
    }

    isUserLoggedIn() {
        return (this.commandData.loggedInUser && this.commandData.loggedInUser.password && this.commandData.loggedInUser.username);
    }
}

/*       S.D.G.       */
