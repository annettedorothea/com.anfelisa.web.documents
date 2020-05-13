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




import ACEController from "../ace/ACEController";
import InitBoxesForDayAction from "../../src/box/actions/InitBoxesForDayAction";
import LoadBoxesAction from "../../src/box/actions/LoadBoxesAction";
import LoadBoxStatisticsAction from "../../src/box/actions/LoadBoxStatisticsAction";
import DeleteBoxClickAction from "../../src/box/actions/DeleteBoxClickAction";
import CancelDeleteBoxAction from "../../src/box/actions/CancelDeleteBoxAction";
import DeleteBoxAction from "../../src/box/actions/DeleteBoxAction";
import LoadNextCardAction from "../../src/box/actions/LoadNextCardAction";
import DisplayWantedAction from "../../src/box/actions/DisplayWantedAction";
import ScoreCardAction from "../../src/box/actions/ScoreCardAction";
import ScoreReinforceCardAction from "../../src/box/actions/ScoreReinforceCardAction";
import InitBoxesForDayDuringScoreAction from "../../src/box/actions/InitBoxesForDayDuringScoreAction";
import LoadSettingsAction from "../../src/box/actions/LoadSettingsAction";
import SaveBoxSettingsAction from "../../src/box/actions/SaveBoxSettingsAction";
import MaxCardsPerDayChangedAction from "../../src/box/actions/MaxCardsPerDayChangedAction";
import MaxIntervalChangedAction from "../../src/box/actions/MaxIntervalChangedAction";
import CreateNewBoxAction from "../../src/box/actions/CreateNewBoxAction";
import CreateRootCategoryAction from "../../src/box/actions/CreateRootCategoryAction";
import CategoryNameChangedAction from "../../src/box/actions/CategoryNameChangedAction";
import DictionaryLookupChangedAction from "../../src/box/actions/DictionaryLookupChangedAction";
import GivenLanguageChangedAction from "../../src/box/actions/GivenLanguageChangedAction";
import WantedLanguageChangedAction from "../../src/box/actions/WantedLanguageChangedAction";
import RootCategoryNameChangedAction from "../../src/box/actions/RootCategoryNameChangedAction";

export default class ActionFactoryRegistrationBox {

	static init() {
		ACEController.registerFactory('box.InitBoxesForDayAction', 
			(actionData) => new InitBoxesForDayAction());
		ACEController.registerFactory('box.LoadBoxesAction', 
			(actionData) => new LoadBoxesAction());
		ACEController.registerFactory('box.LoadBoxStatisticsAction', 
			(actionData) => new LoadBoxStatisticsAction());
		ACEController.registerFactory('box.DeleteBoxClickAction', 
			(actionData) => new DeleteBoxClickAction(actionData.boxId));
		ACEController.registerFactory('box.CancelDeleteBoxAction', 
			(actionData) => new CancelDeleteBoxAction());
		ACEController.registerFactory('box.DeleteBoxAction', 
			(actionData) => new DeleteBoxAction(actionData.boxId));
		ACEController.registerFactory('box.LoadNextCardAction', 
			(actionData) => new LoadNextCardAction(actionData.boxId));
		ACEController.registerFactory('box.DisplayWantedAction', 
			(actionData) => new DisplayWantedAction(actionData.wantedItemsLength));
		ACEController.registerFactory('box.ScoreCardAction', 
			(actionData) => new ScoreCardAction(actionData.scoredCardQuality));
		ACEController.registerFactory('box.ScoreReinforceCardAction', 
			(actionData) => new ScoreReinforceCardAction(actionData.scoredCardQuality));
		ACEController.registerFactory('box.InitBoxesForDayDuringScoreAction', 
			(actionData) => new InitBoxesForDayDuringScoreAction());
		ACEController.registerFactory('box.LoadSettingsAction', 
			(actionData) => new LoadSettingsAction(actionData.boxId));
		ACEController.registerFactory('box.SaveBoxSettingsAction', 
			(actionData) => new SaveBoxSettingsAction());
		ACEController.registerFactory('box.MaxCardsPerDayChangedAction', 
			(actionData) => new MaxCardsPerDayChangedAction(actionData.maxCardsPerDay));
		ACEController.registerFactory('box.MaxIntervalChangedAction', 
			(actionData) => new MaxIntervalChangedAction(actionData.maxInterval));
		ACEController.registerFactory('box.CreateNewBoxAction', 
			(actionData) => new CreateNewBoxAction());
		ACEController.registerFactory('box.CreateRootCategoryAction', 
			(actionData) => new CreateRootCategoryAction());
		ACEController.registerFactory('box.CategoryNameChangedAction', 
			(actionData) => new CategoryNameChangedAction(actionData.categoryName));
		ACEController.registerFactory('box.DictionaryLookupChangedAction', 
			(actionData) => new DictionaryLookupChangedAction());
		ACEController.registerFactory('box.GivenLanguageChangedAction', 
			(actionData) => new GivenLanguageChangedAction(actionData.givenLanguage));
		ACEController.registerFactory('box.WantedLanguageChangedAction', 
			(actionData) => new WantedLanguageChangedAction(actionData.wantedLanguage));
		ACEController.registerFactory('box.RootCategoryNameChangedAction', 
			(actionData) => new RootCategoryNameChangedAction(actionData.categoryName));
	}

}




/******* S.D.G. *******/



