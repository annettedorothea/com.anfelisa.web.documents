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

export default class SaveBoxSettingsCommand extends AbstractSaveBoxSettingsCommand {

    validateCommandData() {
        if (this.commandData.dictionaryLookup === false) {
            this.commandData.givenLanguage = null;
            this.commandData.wantedLanguage = null;
        }
        return true;
    }

    handleResponse(resolve) {
        this.commandData.dictionaryLookup = undefined;
        this.commandData.givenLanguage = undefined;
        this.commandData.wantedLanguage = undefined;
        this.commandData.boxId = undefined;
        this.commandData.maxInterval = undefined;
        this.commandData.maxCardsPerDay = undefined;
        this.commandData.categoryId = undefined;
        this.commandData.categoryName = undefined;
        this.commandData.hash = "#dashboard";
        this.commandData.outcome = this.ok;
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}


/******* S.D.G. *******/



