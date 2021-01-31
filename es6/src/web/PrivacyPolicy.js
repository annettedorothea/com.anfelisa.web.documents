import React from 'react';

export default class PrivacyPolicy extends React.Component {

    render() {
        return (
            <div className="center privacy-policy">
                <h1>
                    Datenschutzerklärung
                </h1>
                <h2>
                    Speicherung von Daten in Log-Dateien
                </h2>
                <p>
                    Um den Betrieb dieser Website sicherzustellen, werden IP-Adresse, Zeitpunkt des Zugriffs und Typ und
                    Version des verwendeten Browsers in Log-Dateien gespeichert.
                </p>
                <h2>
                    Speicherung personenbezogener Daten in einer Datenbank
                </h2>
                <p>
                    Registriert sich ein Benutzer bei der Plattform, werden personenbezogenen Daten in einer Datenbank,
                    die bei <a
                    href='https://www.hetzner.com/de/cloud' target='hetzner'>Hetzner</a> auf einem Cloud-Server liegt,
                    gespeichert. Dies ist nötig, um ihm den Zugriff auf seinen persönlichen Bereich zu gewährleisten.
                </p>
                <h2>
                    Keine Verwendung von Cookies
                </h2>
                <p>
                    Diese Website verwendet keine Cookies und analysiert auch keine Daten zu Marketingzwecken.
                </p>
                <h2>
                    Keine Anbindung an soziale Netzwerke
                </h2>
                <p>
                    Diese Website ist mit keinem sozialen Netzwerk verbunden.
                </p>
                <h2>
                    Anbindung an Linguee und DeepL
                </h2>
                <p>
                    Um dem Benutzer das Eingeben von Vokabeln zu erleichtern, besteht eine Anbindung an die Dienste
                    von <a href="https://www.linguee.de/" target="linguee">Linguee</a> und <a
                    href="https://www.deepl.com/de/docs-api/" target="deepl">DeepL</a>. Linguee wird in einem iFrame
                    angezeigt und unterliegt somit den Nutzungsbedingungen des Anbieters. Über eine API werden
                    Übersetzungen von DeepL angezeigt.
                </p>
                <p>
                    Sollte der Benutzer mit der Anzeige von Linguee und der Anbindung an DeepL nicht einverstanden sein, kann dies umgangen werden,
                    indem beim Anlegen einer Vokabel-Box keine Sprachen ausgewählt werden.
                </p>
            </div>
        );
    }
}

