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




import AbstractChangeOrderCategoryCommand from "../../../gen/category/commands/AbstractChangeOrderCategoryCommand";
import * as AppState from "../../../gen/ace/ReadAppState";
import {getState} from "../../../gen/ace/ReadAppState";
//please do not import "../../../gen/ace/WriteAppState" for you should not write the state in a command

export default class ChangeOrderCategoryCommand extends AbstractChangeOrderCategoryCommand {

    initCommandData() {
        const data = getState().data.categoryTree;
        this.commandData.targetCategoryId = data.dropTargetCategoryId;
        this.commandData.movedCategoryId = data.movedCategory.categoryId;
        return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.selectedCategoryId = this.commandData.movedCategoryId;
        this.commandData.outcome = this.ok;

        resolve();
    }
    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}




/******* S.D.G. *******/


