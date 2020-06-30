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




import AbstractLoadBoxStatisticsCommand from "../../../gen/box/commands/AbstractLoadBoxStatisticsCommand";

export default class LoadBoxStatisticsCommand extends AbstractLoadBoxStatisticsCommand {

    validateCommandData() {
    	//add from appState to commandData
    	return true;
    }

    handleResponse(resolve) {
        this.commandData.boxList.forEach((box) => {
            const boxWithStats = this.commandData.boxStatisticsList.find((bs) => {
                return bs.boxId === box.boxId;
            });
            box.countsPerDayNextWeek = boxWithStats.countsPerDayNextWeek;
            box.maxCardsPerDay = boxWithStats.maxCardsPerDay;
            box.quality0Count = boxWithStats.quality0Count;
            box.quality1Count = boxWithStats.quality1Count;
            box.quality2Count = boxWithStats.quality2Count;
            box.quality3Count = boxWithStats.quality3Count;
            box.quality4Count = boxWithStats.quality4Count;
            box.quality5Count = boxWithStats.quality5Count;
        });
        this.commandData.boxStatisticsList = undefined;
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}




/******* S.D.G. *******/



