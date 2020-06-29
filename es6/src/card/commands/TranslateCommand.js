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




import AbstractTranslateCommand from "../../../gen/card/commands/AbstractTranslateCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class TranslateCommand extends AbstractTranslateCommand {

    validateCommandData() {
        const data = getState().data;
        if (!!data.cardView.naturalInputOrder) {
            if (!data.cardView.newCard.given) {
                this.commandData.outcome = this.empty;
                return false;
            }
            if (!!data.cardView.newCard.wanted) {
                this.commandData.outcome = this.targetNotEmtpy;
                return false;
            }
            this.commandData.sourceValue = data.cardView.newCard.given;
            this.commandData.sourceLanguage = data.categoryTree.selectedCategory.givenLanguage;
            this.commandData.targetLanguage = data.categoryTree.selectedCategory.wantedLanguage;
        } else {
            if (!data.cardView.newCard.wanted) {
                this.commandData.outcome = this.empty;
                return false;
            }
            if (!!data.cardView.newCard.given) {
                this.commandData.outcome = this.targetNotEmtpy;
                return false;
            }
            this.commandData.sourceValue = data.cardView.newCard.wanted;
            this.commandData.sourceLanguage = data.categoryTree.selectedCategory.wantedLanguage;
            this.commandData.targetLanguage = data.categoryTree.selectedCategory.givenLanguage;
        }
        return true;
    }

    handleResponse(resolve) {
        const data = getState().data.cardView;
        if (!!data.naturalInputOrder) {
            this.commandData.wanted = this.commandData.targetValue;
            this.commandData.outcome = this.wantedFetched;
        } else {
            this.commandData.given = this.commandData.targetValue;
            this.commandData.outcome = this.givenFetched;
        }
    	resolve();
    }
    handleError(resolve) {
        this.commandData.outcome = this.error;
        resolve();
    }
}

/*       S.D.G.       */

