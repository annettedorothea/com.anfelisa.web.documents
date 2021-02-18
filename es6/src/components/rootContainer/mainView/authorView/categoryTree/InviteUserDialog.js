/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/


import {a, button, div, h2, h3, input, li, ul} from "../../../../../../gen/components/ReactHelper";
import {cancelInviteUser, invitedUsernameChanged, inviteUser} from "../../../../../../gen/category/ActionFunctions";
import React from "react";
import {Texts} from "../../../../../app/Texts";

export function uiElement(attributes) {
    if (attributes.display !== true) {
        return null;
    }
    let usernames = [];
    if (attributes.usernames) {
        usernames = attributes.usernames.map(username => {
            return li({}, [
                a({
                    onClick: () => inviteUser(username)
                }, [username])
            ]);
        })
    }
    let invitedUsernames = [];
    if (attributes.invitedUsernames) {
        invitedUsernames = attributes.invitedUsernames.map(username => {
            return li({}, [
                a({}, [username])
            ]);
        })
    }
    return div({class: "modal"}, [
        div({class: "modalContent form"}, [
            h2({}, [Texts.categoryTree.inviteUser.title[attributes.language]]),
            invitedUsernames.length > 0 ?
                div({class: "line"}, [
                    h3({}, [Texts.categoryTree.inviteUser.alreadyInvited[attributes.language]]),
                    ul({}, invitedUsernames)
                ]) :
                null,
            div({class: "line"}, [
                input({
                    type: "text",
                    onChange: (event) => invitedUsernameChanged(event.target.value),
                    autoComplete: "off",
                    value: attributes.usernameSearchString,
                    placeholder: Texts.categoryTree.inviteUser.username[attributes.language]
                })
            ]),
            usernames.length > 0 ?
                div({class: "line"}, [
                    ul({}, usernames)
                ]) :
                null,
            button({
                onClick: () => cancelInviteUser()
            }, [Texts.categoryTree.inviteUser.cancel[attributes.language]])
        ])
    ]);
}


/******* S.D.G. *******/



