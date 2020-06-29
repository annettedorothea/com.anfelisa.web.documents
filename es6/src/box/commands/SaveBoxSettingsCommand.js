/* 
 * Copyright (c) 2019, Annette Pohl, Koblenz, Germany
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.

 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */


import AbstractSaveBoxSettingsCommand from "../../../gen/box/commands/AbstractSaveBoxSettingsCommand";
import {
    get_state_State_data_BoxSettings_boxId,
    get_state_State_data_BoxSettings_categoryId,
    get_state_State_data_BoxSettings_categoryName,
    get_state_State_data_BoxSettings_dictionaryLookup,
    get_state_State_data_BoxSettings_givenLanguage,
    get_state_State_data_BoxSettings_maxCardsPerDay,
    get_state_State_data_BoxSettings_maxInterval,
    get_state_State_data_BoxSettings_wantedLanguage
} from "../../../gen/ace/ReadAppState";
//please do not import "../../../gen/ace/WriteAppState" for you should not write the state in a command

export default class SaveBoxSettingsCommand extends AbstractSaveBoxSettingsCommand {

    validateCommandData() {
        this.commandData.maxCardsPerDay = get_state_State_data_BoxSettings_maxCardsPerDay();
        this.commandData.maxInterval = get_state_State_data_BoxSettings_maxInterval();
        this.commandData.boxId = get_state_State_data_BoxSettings_boxId();
        this.commandData.categoryId = get_state_State_data_BoxSettings_categoryId();
        this.commandData.categoryName = get_state_State_data_BoxSettings_categoryName();
        this.commandData.dictionaryLookup = get_state_State_data_BoxSettings_dictionaryLookup();
        if (this.commandData.dictionaryLookup === true) {
            this.commandData.givenLanguage = get_state_State_data_BoxSettings_givenLanguage();
            this.commandData.wantedLanguage = get_state_State_data_BoxSettings_wantedLanguage();
        } else {
            this.commandData.givenLanguage = null;
            this.commandData.wantedLanguage = null;
        }
        return true;
    }

    handleResponse(resolve) {
        this.commandData.hash = "#dashboard";
        this.commandData.outcome = this.ok;
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}


/******* S.D.G. *******/



