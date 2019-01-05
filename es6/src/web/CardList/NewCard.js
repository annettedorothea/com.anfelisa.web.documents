import TranslateAction from "../../card/actions/TranslateAction";
import CreateCardAction from "../../card/actions/CreateCardAction";
import DisplayErrorAction from "../../common/actions/DisplayErrorAction";
import GivenOfNewCardChangedAction from "../../card/actions/GivenOfNewCardChangedAction";
import React from "react";
import WantedOfNewCardChangedAction from "../../card/actions/WantedOfNewCardChangedAction";
import CancelNewCardAction from "../../card/actions/CancelNewCardAction";
import LoadWantedImageOfNewCardAction from "../../card/actions/LoadWantedImageOfNewCardAction";
import RemoveNewCardImageAction from "../../card/actions/RemoveNewCardImageAction";
import PassValueToDictionaryAction from "../../card/actions/PassValueToDictionaryAction";
import Preview from "./Preview";
import FileInput from "./FileInput";

export default class NewCard extends React.Component {

    constructor(props) {
        super(props);
        this.onGivenChange = this.onGivenChange.bind(this);
        this.onWantedChange = this.onWantedChange.bind(this);
        this.onNewCard = this.onNewCard.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onAltKeyUp = this.onAltKeyUp.bind(this);
        this.onBlurGiven = this.onBlurGiven.bind(this);
        this.onBlurWanted = this.onBlurWanted.bind(this);
        this.onWantedFileChange = this.onWantedFileChange.bind(this);
        this.onRemoveImage = this.onRemoveImage.bind(this);
    }

    setFocus() {
        if (this.props.naturalInputOrder === true) {
            if (!this.props.given || this.props.given.length === 0) {
                this.setFocusGiven();
            } else {
                this.setFocusWanted();
            }
        } else {
            if (!this.props.wanted || this.props.wanted.length === 0) {
                this.setFocusWanted();
            } else {
                this.setFocusGiven();
            }
        }
    }

    setFocusByInputOrder() {
        if (this.props.naturalInputOrder === true) {
            this.setFocusGiven();
        } else {
            this.setFocusWanted();
        }
    }

    setFocusGiven() {
        if (this.givenInput) {
            this.givenInput.focus();
        }
    }

    setFocusWanted() {
        if (this.wantedInput) {
            this.wantedInput.focus();
        }
    }

    onWantedFileChange(event) {
        let files = event.target.files;

        if (files.length > 0) {
            const file = files[0];
            event.target.value = null;
            if (!file.type.match('image.*')) {
                new DisplayErrorAction("noImageFile").apply();
                return;
            }
            if (file.size > 2000000) {
                new DisplayErrorAction("fileTooBig").apply();
                return;
            }
            const reader = new FileReader();
            reader.onload = function (e) {
                new LoadWantedImageOfNewCardAction(e.target.result).apply();
            };
            reader.readAsDataURL(file);
        }
    }

    onGivenChange(event) {
        new GivenOfNewCardChangedAction(event.target.value).apply();
    }

    onWantedChange(event) {
        const wanted = event.target.value;
        new WantedOfNewCardChangedAction(event.target.value).apply();
    }

    onCancel() {
        new CancelNewCardAction().apply();
        this.setFocusByInputOrder();
    }

    onNewCard() {
        new CreateCardAction().apply();
        this.setFocusByInputOrder();
    }

    onBlurGiven() {
        if (this.props.naturalInputOrder === true && this.props.useDictionary === true && (!this.props.wanted || this.props.wanted.length === 0)) {
            new PassValueToDictionaryAction().apply();
        }
        if (this.props.naturalInputOrder === true && this.props.dictionaryLookup === true) {
            new TranslateAction().apply();
        }
    }

    onBlurWanted() {
        if (this.props.naturalInputOrder === false && this.props.useDictionary === true && (!this.props.given || this.props.given.length === 0)) {
            new PassValueToDictionaryAction().apply();
        }
        if (this.props.naturalInputOrder === false && this.props.dictionaryLookup === true) {
            new TranslateAction().apply();
        }
    }

    onAltKeyUp(e) {
        e.preventDefault();
        if (e.keyCode === 13 && e.altKey && this.isValid()) {
            this.onNewCard();
        }
    }

    renderGiven(renderGoogleLogo) {
        return (
            <td className="textarea">
                <textarea
                    onChange={this.onGivenChange}
                    autoComplete="off"
                    value={this.props.given}
                    placeholder={`${this.props.texts.cardList.given[this.props.language]} ${this.props.dictionaryLookup ? "(" + this.props.texts.categoryList.languages[this.props.givenLanguage][this.props.language] + ")" : "" }`}
                    ref={textarea => {
                        this.givenInput = textarea;
                    }}
                    onKeyUp={this.onAltKeyUp}
                    onBlur={this.onBlurGiven}
                    id="given"
                />
                {renderGoogleLogo === true &&
                <div className="google">
                    {(this.props.displayTranslateSpinner === true || this.props.displaySpinner === true) &&
                    <i className="fas fa-cog fa-spin"/>}
                </div>}
            </td>
        )
    }

    renderWanted(renderGoogleLogo) {
        return (
            <td className="textarea">
                <textarea
                    onChange={this.onWantedChange}
                    autoComplete="off"
                    value={this.props.wanted}
                    placeholder={`${this.props.texts.cardList.wanted[this.props.language]} ${this.props.dictionaryLookup ? "(" + this.props.texts.categoryList.languages[this.props.wantedLanguage][this.props.language] + ")" : "" }`}
                    ref={textarea => {
                        this.wantedInput = textarea;
                    }}
                    onKeyUp={this.onAltKeyUp}
                    onBlur={this.onBlurWanted}
                    id="wanted"
                />
                {renderGoogleLogo === true &&
                <div className="google">
                    {(this.props.displayTranslateSpinner === true || this.props.displaySpinner === true) &&
                    <i className="fas fa-cog fa-spin"/>}
                </div>}
            </td>
        )
    }

    renderImage() {
        if (this.props.image.length > 0) {
            return <Preview
                image={this.props.image}
                onRemoveImage={this.onRemoveImage}
            />
        }
        return (
            <FileInput
                onWantedFileChange={this.onWantedFileChange}
                file={this.props.file}
                texts={this.props.texts}
                language={this.props.language}
            />
        )
    }

    onRemoveImage() {
        new RemoveNewCardImageAction().apply();
    }

    isValid() {
        return this.props.given.length > 0 && (this.props.wanted.length > 0 || this.props.image.length > 0);
    }

    render() {
        return (
            <tr>
                <td/>
                {this.props.naturalInputOrder === true && this.renderGiven()}
                {this.props.naturalInputOrder === true && this.renderWanted(this.props.dictionaryLookup)}
                {this.props.naturalInputOrder === true && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderGiven(this.props.dictionaryLookup)}
                {this.props.naturalInputOrder === false && this.renderImage()}
                <td className="noBreak">
                    <button
                        disabled={!this.isValid()}
                        onClick={this.onNewCard}>
                        <i className="fas fa-check"/>
                    </button>
                    <button
                        onClick={this.onCancel}>
                        <i className="fas fa-times"/>
                    </button>
                </td>
            </tr>
        );
    }
}

