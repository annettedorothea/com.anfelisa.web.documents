import TranslateAction from "../../author/actions/TranslateAction";
import CreateCardAction from "../../author/actions/CreateCardAction";
import DisplayErrorAction from "../../common/actions/DisplayErrorAction";
import GivenOfNewCardChangedAction from "../../author/actions/GivenOfNewCardChangedAction";
import React from "react";
import WantedOfNewCardChangedAction from "../../author/actions/WantedOfNewCardChangedAction";
import CancelNewCardAction from "../../author/actions/CancelNewCardAction";
import LoadWantedImageOfNewCardAction from "../../author/actions/LoadWantedImageOfNewCardAction";
import RemoveNewCardImageAction from "../../author/actions/RemoveNewCardImageAction";

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

    componentDidMount() {
        this.setFocus();
    }

    setFocus() {
        if (this.props.naturalInputOrder === true) {
            this.givenInput.focus();
        } else {
            this.wantedInput.focus();
        }
    }

    onWantedFileChange(event) {
        let files = event.target.files;

        if (files.length > 0) {
            const file = files[0];
            event.target.value = null;
            if (!file.type.match('image.*')) {
                new DisplayErrorAction({error: {errorKey: "noImageFile"}}).apply();
                return;
            }
            if (file.size > 2000000) {
                new DisplayErrorAction({error: {errorKey: "fileTooBig"}}).apply();
                return;
            }
            const reader = new FileReader();
            reader.onload = function (e) {
                new LoadWantedImageOfNewCardAction({
                    image: e.target.result
                }).apply();
            };
            reader.readAsDataURL(file);
        }
    }

    onGivenChange(event) {
        const given = event.target.value;
        new GivenOfNewCardChangedAction(
            {
                given,
                wanted: this.props.wanted,
                username: this.props.username,
                password: this.props.password,
                categoryId: this.props.categoryId,
                naturalInputOrder: this.props.naturalInputOrder
            }
        ).apply();
    }

    onWantedChange(event) {
        const wanted = event.target.value;
        new WantedOfNewCardChangedAction(
            {
                wanted,
                given: this.props.given,
                username: this.props.username,
                password: this.props.password,
                categoryId: this.props.categoryId,
                naturalInputOrder: this.props.naturalInputOrder,
            }
        ).apply();
    }

    onCancel() {
        const data = {
            parentDictionaryLookup: this.props.dictionaryLookup,
            parentGivenLanguage: this.props.givenLanguage,
            parentWantedLanguage: this.props.wantedLanguage
        };
        new CancelNewCardAction(data).apply();
        this.setFocus();
    }

    onNewCard() {
        const data = {
            username: this.props.username,
            password: this.props.password,
            given: this.props.given,
            wanted: this.props.wanted,
            categoryId: this.props.categoryId,
            image: this.props.image
        };
        new CreateCardAction(data).apply();
        this.setFocus();
    }

    onBlurGiven() {
        if (this.props.naturalInputOrder === true && this.props.dictionaryLookup === true) {
            const data = {
                given: this.props.given,
                wanted: this.props.wanted,
                givenLanguage: this.props.givenLanguage,
                wantedLanguage: this.props.wantedLanguage,
                naturalInputOrder: this.props.naturalInputOrder,
                username: this.props.username,
                password: this.props.password,
                categoryId: this.props.categoryId
            };
            new TranslateAction(data).apply();
        }
    }

    onBlurWanted() {
        if (this.props.naturalInputOrder === false && this.props.dictionaryLookup === true) {
            const data = {
                given: this.props.given,
                wanted: this.props.wanted,
                givenLanguage: this.props.givenLanguage,
                wantedLanguage: this.props.wantedLanguage,
                naturalInputOrder: this.props.naturalInputOrder,
                username: this.props.username,
                password: this.props.password,
                categoryId: this.props.categoryId
            };
            new TranslateAction(data).apply();
        }
    }

    onAltKeyUp(e) {
        e.preventDefault();
        if (e.keyCode === 13 && e.altKey && this.isValid()) {
            this.onNewCard();
        }
    }

    renderGiven() {
        return (
            <td>
                <div>
                    <textarea
                        rows="4"
                        cols="40"
                        onChange={this.onGivenChange}
                        autoComplete="off"
                        value={this.props.given}
                        placeholder={`${this.props.texts.cardList.given} ${this.props.dictionaryLookup ? "(" + this.props.texts.categoryList.languages[this.props.givenLanguage] + ")" : "" }`}
                        ref={textarea => {
                            this.givenInput = textarea;
                        }}
                        onKeyUp={this.onAltKeyUp}
                        onBlur={this.onBlurGiven}
                    />
                </div>
                {this.props.displaySpinner === true &&
                <label>{this.props.texts.cardList.searchingDuplicates}</label>}
                {this.props.displayTranslateSpinner === true &&
                <label>{this.props.texts.cardList.loadingTranslation}</label>}
            </td>
        )
    }

    renderWanted() {
        return (
            <td>
                <textarea
                    rows="4"
                    cols="40"
                    onChange={this.onWantedChange}
                    autoComplete="off"
                    value={this.props.wanted}
                    placeholder={`${this.props.texts.cardList.wanted} ${this.props.dictionaryLookup ? "(" + this.props.texts.categoryList.languages[this.props.wantedLanguage] + ")" : "" }`}
                    ref={textarea => {
                        this.wantedInput = textarea;
                    }}
                    onKeyUp={this.onAltKeyUp}
                    onBlur={this.onBlurWanted}
                />
            </td>
        )
    }

    renderImage() {
        if (this.props.image.length > 0) {
            return (
                <td>
                    <img className="preview" src={this.props.image}/>
                    <button onClick={this.onRemoveImage}>{"\u2717"}</button>
                </td>
            )
        }
        return (
            <td>
                <input type="file" onChange={this.onWantedFileChange} value={this.props.file}/>
            </td>
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
                <td></td>
                {this.props.naturalInputOrder === true && this.renderGiven()}
                {this.props.naturalInputOrder === true && this.renderWanted()}
                {this.props.naturalInputOrder === true && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderGiven()}
                <td/>
                <td>
                    <button
                        disabled={!this.isValid()}
                        onClick={this.onNewCard}
                    >{"\u2713"}</button>
                    <button
                        onClick={this.onCancel}
                    >{"\u2717"}</button>
                </td>
            </tr>
        );
    }
}

