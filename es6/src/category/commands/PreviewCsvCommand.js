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


import AbstractPreviewCsvCommand from "../../../gen/category/commands/AbstractPreviewCsvCommand";
import AppUtils from "../../app/AppUtils";

export default class PreviewCsvCommand extends AbstractPreviewCsvCommand {
    execute() {
        const text = this.commandData.csv;
        let p = '', row = [''], csv = [row], i = 0, r = 0, s = !0, l;
        for (l of text) {
            if ('"' === l) {
                if (s && l === p) row[i] += l;
                s = !s;
            } else if (',' === l && s) l = row[++i] = '';
            else if ('\n' === l && s) {
                if ('\r' === p) row[i] = row[i].slice(0, -1);
                row = csv[++r] = [l = '']; i = 0;
            } else row[i] += l;
            p = l;
        }
        this.commandData.previewCsv = [];
        csv.forEach(row => {
           if (row.length >= 2 && row[0].length > 0 && row[1].length > 0) {
               const normalizedRow = [];
               normalizedRow[0] = row[0];
               normalizedRow[1] = row[1];
               normalizedRow[2] = AppUtils.createUUID();
               this.commandData.previewCsv.push(normalizedRow);
           }
        });
    	this.addOkOutcome();
    }
}




/******* S.D.G. *******/



