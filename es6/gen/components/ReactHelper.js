/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import React from 'react';
import { LoggedInUserComponent } from "./rootContainer/LoggedInUserComponent";
import { SpinnerComponent } from "./rootContainer/SpinnerComponent";
import { SaveBugDialogComponent } from "./rootContainer/SaveBugDialogComponent";
import { VersionMismatchDialogComponent } from "./rootContainer/VersionMismatchDialogComponent";
import { VersionMismatchErrorDialogComponent } from "./rootContainer/VersionMismatchErrorDialogComponent";
import { MessagesItemComponent } from "./rootContainer/MessagesItemComponent";
import { MainViewComponent } from "./rootContainer/MainViewComponent";
import { PrivacyPolicyViewComponent } from "./rootContainer/mainView/PrivacyPolicyViewComponent";
import { LoginViewComponent } from "./rootContainer/mainView/LoginViewComponent";
import { RegistrationViewComponent } from "./rootContainer/mainView/RegistrationViewComponent";
import { ForgotPasswordViewComponent } from "./rootContainer/mainView/ForgotPasswordViewComponent";
import { ResetPasswordViewComponent } from "./rootContainer/mainView/ResetPasswordViewComponent";
import { DashboardViewComponent } from "./rootContainer/mainView/DashboardViewComponent";
import { BoxListItemComponent } from "./rootContainer/mainView/dashboardView/BoxListItemComponent";
import { DeleteBoxComponent } from "./rootContainer/mainView/dashboardView/DeleteBoxComponent";
import { BoxSettingsViewComponent } from "./rootContainer/mainView/BoxSettingsViewComponent";
import { AllActiveCardsViewComponent } from "./rootContainer/mainView/AllActiveCardsViewComponent";
import { ActiveCardListItemComponent } from "./rootContainer/mainView/allActiveCardsView/ActiveCardListItemComponent";
import { ProfileViewComponent } from "./rootContainer/mainView/ProfileViewComponent";
import { UserListViewComponent } from "./rootContainer/mainView/UserListViewComponent";
import { UserListItemComponent } from "./rootContainer/mainView/userListView/UserListItemComponent";
import { QueryCardViewComponent } from "./rootContainer/mainView/QueryCardViewComponent";
import { AuthorViewComponent } from "./rootContainer/mainView/AuthorViewComponent";
import { CategoryTreeComponent } from "./rootContainer/mainView/authorView/CategoryTreeComponent";
import { SelectedCategoryComponent } from "./rootContainer/mainView/authorView/categoryTree/SelectedCategoryComponent";
import { RootCategoryComponent } from "./rootContainer/mainView/authorView/categoryTree/RootCategoryComponent";
import { MovedCategoryComponent } from "./rootContainer/mainView/authorView/categoryTree/MovedCategoryComponent";
import { CardViewComponent } from "./rootContainer/mainView/authorView/CardViewComponent";
import { CardListItemComponent } from "./rootContainer/mainView/authorView/cardView/CardListItemComponent";
import { EditedCardComponent } from "./rootContainer/mainView/authorView/cardView/EditedCardComponent";
import { NewCardComponent } from "./rootContainer/mainView/authorView/cardView/NewCardComponent";
import { DeleteCardComponent } from "./rootContainer/mainView/authorView/cardView/DeleteCardComponent";

const normalize = (options) => {
    if (options && options.class !== undefined) {
        options.className = options.class
        delete options.class;
    }
    if (options && options.id) {
    	options.key = options.id;
    }
    return options;
}

export const generic = (type, options, children) => {
    return React.createElement(
        type,
        normalize(options),
        children ? [...children] : undefined
    )
}

export const br = () => {
    return generic("br");
}

export const hr = () => {
    return generic("hr");
}

export const p = (options, children) => {
    return generic("p", options, children);
}

export const ul = (options, children) => {
    return generic("ul", options, children);
}

export const ol = (options, children) => {
    return generic("ol", options, children);
}

export const li = (options, children) => {
    return generic("li", options, children);
}

export const label = (options, children) => {
    return generic("label", options, children);
}

export const button = (options, children) => {
    return generic("button", options, children);
}

export const div = (options, children) => {
    return generic("div", options, children);
}

export const span = (options, children) => {
    return generic("span", options, children);
}

export const a = (options, children) => {
    return generic("a", options, children);
}

export const h1 = (options, children) => {
    return generic("h1", options, children);
}

export const h2 = (options, children) => {
    return generic("h2", options, children);
}

export const h3 = (options, children) => {
    return generic("h3", options, children);
}

export const h4 = (options, children) => {
    return generic("h4", options, children);
}

export const h5 = (options, children) => {
    return generic("h5", options, children);
}

export const h6 = (options, children) => {
    return generic("h6", options, children);
}

export const pre = (options, children) => {
    return generic("pre", options, children);
}

export const table = (options, children) => {
    return generic("table", options, children);
}

export const tbody = (options, children) => {
    return generic("tbody", options, children);
}

export const tr = (options, children) => {
    return generic("tr", options, children);
}

export const td = (options, children) => {
    return generic("td", options, children);
}

export const i = (options, children) => {
    return generic("i", options, children);
}

export const input = (options) => {
    return <input {...normalize(options)}/>
}


export const loggedInUser = (options) => {
    return <LoggedInUserComponent {...normalize(options)}/>
}
export const spinner = (options) => {
    return <SpinnerComponent {...normalize(options)}/>
}
export const saveBugDialog = (options) => {
    return <SaveBugDialogComponent {...normalize(options)}/>
}
export const versionMismatchDialog = (options) => {
    return <VersionMismatchDialogComponent {...normalize(options)}/>
}
export const versionMismatchErrorDialog = (options) => {
    return <VersionMismatchErrorDialogComponent {...normalize(options)}/>
}
export const messagesItem = (options) => {
    return <MessagesItemComponent {...normalize(options)}/>
}
export const mainView = (options) => {
    return <MainViewComponent {...normalize(options)}/>
}
export const privacyPolicyView = (options) => {
    return <PrivacyPolicyViewComponent {...normalize(options)}/>
}
export const loginView = (options) => {
    return <LoginViewComponent {...normalize(options)}/>
}
export const registrationView = (options) => {
    return <RegistrationViewComponent {...normalize(options)}/>
}
export const forgotPasswordView = (options) => {
    return <ForgotPasswordViewComponent {...normalize(options)}/>
}
export const resetPasswordView = (options) => {
    return <ResetPasswordViewComponent {...normalize(options)}/>
}
export const dashboardView = (options) => {
    return <DashboardViewComponent {...normalize(options)}/>
}
export const boxListItem = (options) => {
    return <BoxListItemComponent {...normalize(options)}/>
}
export const deleteBox = (options) => {
    return <DeleteBoxComponent {...normalize(options)}/>
}
export const boxSettingsView = (options) => {
    return <BoxSettingsViewComponent {...normalize(options)}/>
}
export const allActiveCardsView = (options) => {
    return <AllActiveCardsViewComponent {...normalize(options)}/>
}
export const activeCardListItem = (options) => {
    return <ActiveCardListItemComponent {...normalize(options)}/>
}
export const profileView = (options) => {
    return <ProfileViewComponent {...normalize(options)}/>
}
export const userListView = (options) => {
    return <UserListViewComponent {...normalize(options)}/>
}
export const userListItem = (options) => {
    return <UserListItemComponent {...normalize(options)}/>
}
export const queryCardView = (options) => {
    return <QueryCardViewComponent {...normalize(options)}/>
}
export const authorView = (options) => {
    return <AuthorViewComponent {...normalize(options)}/>
}
export const categoryTree = (options) => {
    return <CategoryTreeComponent {...normalize(options)}/>
}
export const selectedCategory = (options) => {
    return <SelectedCategoryComponent {...normalize(options)}/>
}
export const rootCategory = (options) => {
    return <RootCategoryComponent {...normalize(options)}/>
}
export const movedCategory = (options) => {
    return <MovedCategoryComponent {...normalize(options)}/>
}
export const cardView = (options) => {
    return <CardViewComponent {...normalize(options)}/>
}
export const cardListItem = (options) => {
    return <CardListItemComponent {...normalize(options)}/>
}
export const editedCard = (options) => {
    return <EditedCardComponent {...normalize(options)}/>
}
export const newCard = (options) => {
    return <NewCardComponent {...normalize(options)}/>
}
export const deleteCard = (options) => {
    return <DeleteCardComponent {...normalize(options)}/>
}



/******* S.D.G. *******/



