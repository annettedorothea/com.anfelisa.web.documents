import React from "react";

export default class Dictionary extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.displayDictionary !== nextProps.displayDictionary;
    }

    render() {
        const languageMap = {
            "de": "deutsch",
            "fr": "franzoesisch",
            "en": "englisch"
        };
        const sourceLanguage = this.props.naturalInputOrder === true ? this.props.givenLanguage : this.props.wantedLanguage;
        const targetLanguage = this.props.naturalInputOrder === true ? this.props.wantedLanguage : this.props.givenLanguage;
        const value = this.props.naturalInputOrder === true ? this.props.given : this.props.wanted;

        const src = `https://www.linguee.de/${languageMap[sourceLanguage]}-${languageMap[targetLanguage]}/search?source=${languageMap[sourceLanguage]}&query=${value}`;
        if (this.props.displayDictionary === false) {
            return "";
        }
        return (
            <div className="dictionaryWrapper">
                <iframe src={src} frameBorder="0"/>
            </div>
        );
    }
}
