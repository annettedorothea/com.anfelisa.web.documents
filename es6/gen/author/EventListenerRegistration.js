import ACEController from "../ace/ACEController";
import CategoriesView from "../../src/author/views/CategoriesView";
import CommonView from "../../src/common/views/CommonView";

export default class EventListenerRegistrationAuthor {

	static init() {
		ACEController.registerListener('author.LoadCategoriesOkEvent', CategoriesView.render);
		ACEController.registerListener('author.LoadCategoriesUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.CreateCategoryOkEvent', CategoriesView.resetNewCategoryValues);
		ACEController.registerListener('author.CreateCategoryUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.UpdateCategoryOkEvent', CategoriesView.resetEditCategoryValues);
		ACEController.registerListener('author.UpdateCategoryUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.DeleteCategoryOkEvent', CategoriesView.hideConfirmCategoryDelete);
		ACEController.registerListener('author.DeleteCategoryUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.DeleteCategoryUnauthorizedEvent', CategoriesView.hideConfirmCategoryDelete);
		ACEController.registerListener('author.NameOfNewCategoryChangedOkEvent', CategoriesView.nameOfNewCategoryChanged);
		ACEController.registerListener('author.CancelNewCategoryOkEvent', CategoriesView.resetNewCategoryValues);
		ACEController.registerListener('author.NameOfEditedCategoryChangedOkEvent', CategoriesView.nameOfEditedCategoryChanged);
		ACEController.registerListener('author.CancelEditCategoryOkEvent', CategoriesView.resetEditCategoryValues);
		ACEController.registerListener('author.EditCategoryOkEvent', CategoriesView.editCategory);
		ACEController.registerListener('author.DeleteCategoryClickOkEvent', CategoriesView.displayConfirmCategoryDelete);
		ACEController.registerListener('author.CancelDeleteCategoryOkEvent', CategoriesView.hideConfirmCategoryDelete);
		ACEController.registerListener('author.CreateCardOkEvent', CategoriesView.resetNewCardValues);
		ACEController.registerListener('author.CreateCardUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.UpdateCardOkEvent', CategoriesView.resetEditCardValues);
		ACEController.registerListener('author.UpdateCardUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.DeleteCardOkEvent', CategoriesView.hideConfirmCardDelete);
		ACEController.registerListener('author.DeleteCardUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.DeleteCardUnauthorizedEvent', CategoriesView.hideConfirmCardDelete);
		ACEController.registerListener('author.GivenOfNewCardChangedOkEvent', CategoriesView.givenOfNewCardChanged);
		ACEController.registerListener('author.SearchDuplicateCardsOkEvent', CategoriesView.initDuplicates);
		ACEController.registerListener('author.SearchDuplicateCardsTooShortEvent', CategoriesView.resetDuplicates);
		ACEController.registerListener('author.SearchDuplicateCardsUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.SearchDuplicateCardsUnauthorizedEvent', CategoriesView.hideConfirmCardDelete);
		ACEController.registerListener('author.WantedOfNewCardChangedOkEvent', CategoriesView.wantedOfNewCardChanged);
		ACEController.registerListener('author.CancelNewCardOkEvent', CategoriesView.resetNewCardValues);
		ACEController.registerListener('author.GivenOfEditedCardChangedOkEvent', CategoriesView.givenOfEditedCardChanged);
		ACEController.registerListener('author.WantedOfEditedCardChangedOkEvent', CategoriesView.wantedOfEditedCardChanged);
		ACEController.registerListener('author.CancelEditCardOkEvent', CategoriesView.resetEditCardValues);
		ACEController.registerListener('author.EditCardOkEvent', CategoriesView.editCard);
		ACEController.registerListener('author.DeleteCardClickOkEvent', CategoriesView.displayConfirmCardDelete);
		ACEController.registerListener('author.CancelDeleteCardOkEvent', CategoriesView.hideConfirmCardDelete);
		ACEController.registerListener('author.FilterCardsOkEvent', CategoriesView.filterChanged);
		ACEController.registerListener('author.TranslateWantedFetchedEvent', CategoriesView.wantedOfNewCardChanged);
		ACEController.registerListener('author.TranslateGivenFetchedEvent', CategoriesView.givenOfNewCardChanged);
		ACEController.registerListener('author.PassValueToDictionaryOkEvent', CategoriesView.setDictionaryValue);
		ACEController.registerListener('author.ToggleDictionaryLookupOfNewCategoryOkEvent', CategoriesView.toggleDictionaryLookupOfNewCategory);
		ACEController.registerListener('author.ToggleDictionaryLookupOfEditedCategoryOkEvent', CategoriesView.toggleDictionaryLookupOfEditedCategory);
		ACEController.registerListener('author.GivenLanguageOfNewCategoryChangedOkEvent', CategoriesView.givenLanguageOfNewCategoryChanged);
		ACEController.registerListener('author.GivenLanguageOfEditedCategoryChangedOkEvent', CategoriesView.givenLanguageOfEditedCategoryChanged);
		ACEController.registerListener('author.WantedLanguageOfNewCategoryChangedOkEvent', CategoriesView.wantedLanguageOfNewCategoryChanged);
		ACEController.registerListener('author.WantedLanguageOfEditedCategoryChangedOkEvent', CategoriesView.wantedLanguageOfEditedCategoryChanged);
		ACEController.registerListener('author.ToggleInputOrderOkEvent', CategoriesView.toggleInputOrder);
		ACEController.registerListener('author.ToggleUseDictionaryOkEvent', CategoriesView.toggleUseDictionary);
		ACEController.registerListener('author.LoadWantedImageOfNewCardOkEvent', CategoriesView.displayImageOfNewCard);
		ACEController.registerListener('author.LoadWantedImageOfEditedCardOkEvent', CategoriesView.displayImageOfEditedCard);
		ACEController.registerListener('author.RemoveNewCardImageOkEvent', CategoriesView.removeNewCardImage);
		ACEController.registerListener('author.RemoveEditedCardImageOkEvent', CategoriesView.removeEditedCardImage);
		ACEController.registerListener('author.ToggleScheduleCardSelectionOkEvent', CategoriesView.toggleScheduleCardSelection);
		ACEController.registerListener('author.ToggleAllScheduleCardSelectionOkEvent', CategoriesView.toggleAllScheduleCardSelection);
		ACEController.registerListener('author.ScheduleSelectedCardsUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.ScheduleSelectedCardsUnauthorizedEvent', CategoriesView.hideConfirmCardDelete);
	}

}

/*       S.D.G.       */
