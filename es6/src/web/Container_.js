/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/


import {div, h1, spinner, p, a, mainView} from "../../gen/components/ReactHelper";
import Utils from "../../gen/ace/Utils";
import * as AppState from "../../gen/ace/AppState";
import {route} from "../../gen/common/ActionFunctions";

export function uiElement(attributes) {
    console.log(attributes);
    return div({}, [div({}, [
        "container",
        spinner(attributes.spinner),
        mainView({}, []),
        div({class: `footer ${attributes.loggedInUser === undefined ? "fixed" : ""}`}, [
            div({class: "footerContent"}, [
                    h1({}, [attributes.texts.container.about[attributes.language]]),
                    p({}, ["Annette Pohl · St.-Josef-Str. 20 · 56068 Koblenz"]),
                    p({}, [
                        "0261 1393793 · ",
                        a({href: "mailto:info@anfelisa.de"}, ["info@anfelisa.de"])
                    ]),
                    p({}, [
                        `${attributes.texts.container.version[attributes.language]} ${Utils && Utils.settings ? Utils.settings.clientVersion : ""}`
                    ]),
                    p({}, [
                        a({onClick: () => Utils.saveTimeline("save timeline", AppState.get_username())}, [attributes.texts.login.saveTimeline[attributes.language]])
                    ]),
                    p({}, [
                        a({onClick: () => route("#privacypolicy")}, [attributes.texts.login.privacyPolicy[attributes.language]])
                    ]),
                ]
            )
        ])
    ])
    ])
        ;
}


/******* S.D.G. *******/



