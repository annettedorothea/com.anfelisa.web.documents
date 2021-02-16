/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/


import {Texts} from "../app/Texts";


import {
    a,
    div,
    h1,
    loggedInUser,
    mainView,
    messagesItem,
    p,
    saveBugDialog,
    spinner,
    versionMismatchDialog,
    versionMismatchErrorDialog
} from "../../gen/components/ReactHelper";
import Utils from "../../gen/ace/Utils";
import {route} from "../../gen/common/ActionFunctions";

const content = (attributes) => div({}, [
    spinner({language: attributes.language}),
    saveBugDialog({language: attributes.language}),
    versionMismatchDialog({language: attributes.language}),
    versionMismatchErrorDialog({language: attributes.language}),
    div({class: "toastContainer"}, [
        attributes.messages ? attributes.messages.map((message) => messagesItem({
            ...message,
            language: attributes.language
        })) : []
    ]),
    mainView({language: attributes.language, role: attributes.role}),
    div({class: `footer ${attributes.loggedInUser === undefined ? "fixed" : ""}`}, [
        div({class: "footerContent"}, [
                h1({}, [Texts.container.about[attributes.language]]),
                p({}, ["Annette Pohl · St.-Josef-Str. 20 · 56068 Koblenz"]),
                p({}, [
                    "0261 1393793 · ",
                    a({href: "mailto:info@anfelisa.de"}, ["info@anfelisa.de"])
                ]),
                p({}, [
                    `${Texts.container.version[attributes.language]} ${Utils && Utils.settings ? Utils.settings.clientVersion : ""}`
                ]),
                p({}, [
                    a({onClick: () => Utils.saveTimeline("save timeline", attributes.mainView && attributes.mainView.loggedInUser ? attributes.mainView.loggedInUser.username : "anonymous")}, [Texts.login.saveTimeline[attributes.language]])
                ]),
                p({}, [
                    a({onClick: () => route("#privacypolicy")}, [Texts.login.privacyPolicy[attributes.language]])
                ]),
            ]
        )
    ])
]);

export function uiElement(attributes) {
    if (attributes.loggedInUser) {
        return div({class: "wrapper"}, [
            div({class: "header"}, [
                a({
                    onClick: () => route("#dashboard"),
                    class: "title"
                }, ["Anfelisa"]),
                loggedInUser({
                    language: attributes.language,
                    role: attributes.role,
                    ...attributes.loggedInUser}),
            ]),
            div({class: "content"}, [content(attributes)])
        ]);
    }
    return div({}, [content(attributes)]);
}


/******* S.D.G. *******/



