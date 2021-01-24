import AbstractRouteChangedCommand from "../../../gen/common/commands/AbstractRouteChangedCommand";

export default class RouteChangedCommand extends AbstractRouteChangedCommand {
    execute() {
        const hashes = this.commandData.hash.split("/");
        if (this.commandData.hash.startsWith("#confirmemail") && hashes.length >= 2 && hashes[1] && hashes[2]) {
            this.commandData.username = hashes[1];
            this.commandData.token = hashes[2];
            this.addConfirmEmailOutcome();
        } else if (this.commandData.hash.startsWith("#resetpassword" && hashes.length >= 1 && hashes[1])) {
            this.commandData.resetPasswordView = {
                token: hashes[1]
            };
            this.addResetPasswordOutcome();
        } else if (this.commandData.hash === "#dashboard" && this.isUserLoggedIn()) {
            this.addDashboardOutcome();
        } else if (this.commandData.hash === "#profile" && this.isUserLoggedIn()) {
            this.addProfileOutcome();
        } else if (this.commandData.hash === "#users" && this.isUserLoggedIn()) {
            this.addUserListOutcome();
        } else if (this.commandData.hash.startsWith("#categories") && hashes.length >= 2 && this.isUserLoggedIn()) {
            this.commandData.rootCategoryId = hashes[1];
            if (hashes[hashes.length-1] === "reverse") {
                this.commandData.reverse = true;
                this.commandData.selectedCategoryId = hashes.length === 3 ? this.commandData.rootCategoryId : hashes[2];
            } else {
                this.commandData.selectedCategoryId = hashes.length === 2 ? this.commandData.rootCategoryId : hashes[2];
                this.commandData.reverse = false;
            }
            if (!this.commandData.filterNonScheduled) {
                this.commandData.filterNonScheduled = false;
            }
            if (!this.commandData.priority) {
                this.commandData.priority = null;
            }
            this.addCategoriesOutcome();
        } else if (this.commandData.hash.startsWith("#box/settings") && hashes.length >= 2 && hashes[2] && this.isUserLoggedIn()) {
            this.commandData.boxId = hashes[2];
            this.addBoxSettingsOutcome();
        } else if (this.commandData.hash.startsWith("#box/active-cards") && hashes.length >= 2 && hashes[2] && this.isUserLoggedIn()) {
            this.commandData.boxId = hashes[2];
            this.addAllActiveCardsOutcome();
        } else if (this.commandData.hash === "#box/create" && this.isUserLoggedIn()) {
            this.commandData.boxSettingsView = {
                maxCardsPerDay: 8,
                maxInterval: "",
                boxId: "",
                categoryName: "",
                dictionaryLookup: false,
                wantedLanguage: "",
                givenLanguage: ""
            };
            this.addBoxCreateOutcome();
        } else if (this.commandData.hash.startsWith("#box") && hashes.length >= 1 && hashes[1] && this.isUserLoggedIn()) {
            this.commandData.boxId = hashes[1];
            this.addNextCardOutcome();
        } else if (this.commandData.hash === "" && !this.isUserLoggedIn()) {
            this.commandData.loginView = {
                username: "",
                password: "",
                saveInLocalStorage: false
            };
            this.addLoginOutcome();
        } else if (this.commandData.hash === "#registration" && !this.isUserLoggedIn()) {
            this.commandData.registrationView = {
                displayUsernameSpinner: false,
                usernameAvailable: undefined,
                username: "",
                email: "",
                emailInvalid: false,
                passwordMismatch: false
            };
            this.addRegistrationOutcome();
        } else if (this.commandData.hash === "#forgotpassword" && !this.isUserLoggedIn()) {
            this.commandData.forgotPasswordView = {
                username: ""
            };
            this.addForgotPasswordOutcome();
        } else if (this.isUserLoggedIn()) {
            this.addInvalidOutcome();
            this.commandData.hash = "#dashboard";
        } else {
            this.addInvalidOutcome();
            this.commandData.hash = "#";
        }
    }

    isUserLoggedIn() {
        return (this.commandData.loggedInUser && this.commandData.loggedInUser.password && this.commandData.loggedInUser.username);
    }
}

/*       S.D.G.       */
