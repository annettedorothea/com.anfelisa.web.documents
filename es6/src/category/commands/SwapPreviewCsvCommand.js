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




import AbstractSwapPreviewCsvCommand from "../../../gen/category/commands/AbstractSwapPreviewCsvCommand";
import * as AppState from "../../../gen/ace/ReadAppState";
import AppUtils from "../../app/AppUtils";

export default class SwapPreviewCsvCommand extends AbstractSwapPreviewCsvCommand {
    execute() {
        this.commandData.previewCsv = [];
        const csv = AppState.get_state_State_data_AuthorView_categoryTree_CategoryTree_previewCsv();
        csv.forEach(row => {
            if (row.length >= 2 && row[0].length > 0 && row[1].length > 0) {
                const normalizedRow = [];
                normalizedRow[0] = row[1];
                normalizedRow[1] = row[0];
                normalizedRow[2] = AppUtils.createUUID();
                this.commandData.previewCsv.push(normalizedRow);
            }
        });
    	this.commandData.outcome = this.ok;
    }
}




/******* S.D.G. *******/



