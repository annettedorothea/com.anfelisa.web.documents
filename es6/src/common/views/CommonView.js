let Texts = {};

let CommonViewConfig = {};

export default class CommonView {
    static getTexts() {
        return Texts;
    }

    static initLanguageInLocalStorage(data) {
        CommonViewConfig.language = data.language;
        try {
            localStorage.language = data.language;
        } catch (exception) {
        }
        Texts.errors = Translations[data.language].error;
        Texts.common = Translations[data.language].common;
        Texts.user = Translations[data.language].user;
    };

    static initUserInLocalStorage(data) {
        CommonViewConfig.username = data.username;
        CommonViewConfig.password = data.password;
        try {
            localStorage.username = data.username;
            localStorage.password = data.password;
        } catch (exception) {
        }
    };

    static removeUserFromLocalStorage(data) {
        CommonViewConfig.username = undefined;
        CommonViewConfig.password = undefined;
        try {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        } catch (exception) {
        }
    };

    static getUsername() {
        if (CommonViewConfig.username) {
            return CommonViewConfig.username;
        }
        try {
            return localStorage.username;
        } catch (exception) {
        }
        return undefined;
    }

    static getPassword() {
        if (CommonViewConfig.password) {
            return CommonViewConfig.password;
        }
        try {
            return localStorage.password;
        } catch (exception) {
        }
        return undefined;
    }

    static getLanguage() {
        if (CommonViewConfig.language) {
            return CommonViewConfig.language;
        }
        try {
            if (localStorage.language) {
                return localStorage.language;
            }
        } catch (exception) {
        }
        return "de";
    }

    static updateHash(data) {
        window.location.hash = data.hash;
    };

}

const Translations = {
    de: {
        common: {
            ok: "OK",
            home: "Home",
            forToday: "Für heute",
            forTomorrow: "Für morgen",
            total: "Insgesamt",
            last: "Zuletzt am",
            planned: "Nächstes Mal",
            finishedHeader: "Fertig!",
            finishedText: "Du hast alle Karten für heute fertig!",
            perfect: "Perfekt (q)",
            scarcely: "Knapp (w)",
            knewIt: "Gewusst (a)",
            didNotKnow: "Nicht (s)",
            withEffort: "Mit Mühe (y)",
            noIdea: "Kein Plan (x)",
            username: "Benutzername",
            password: "Passwort",
            login: "Anmelden",
            register: "Registrieren",
            forgotPassword: "Passwort vergessen",
            german: "Deutsch",
            english: "Englisch",
            hello: "Hallo",
            logout: "Abmelden",
            statistics: "Statistik",
            profile: "Mein Profil",
            myBoxes: "Meine Lern-Boxen",
            myCourses: "Meine Kurse",
            noCourses: "Keine Kurse",
            noBoxes: "Keine Lern-Boxen",
            backToMyCourses: "Zurück zu meinen Kursen",
            pointsOfMaxPoints: "von",
            backToMyLessons: "Zurück zu meinen Lektionen",
            publicCourses: "Kurse",
            backToPublicCourses: "Zurück zu den Kursen",
            backToPublicLessons: "Zurück zu den Lektionen",
            knewItTest: "Gewusst (g)",
            didNotKnowTest: "Nicht gewusst (n)",
            goOn: "Weiter (ctrl+space)",
            show: "Zeigen (z)",
            correct: "Korrigieren (ctrl+k)",
            withTyping: "Wörter mit Tastatur tippen",
            asRepetition: "Auf Blatt schreiben oder im Kopf",
            january: "Januar",
            february: "Februar",
            march: "März",
            april: "April",
            may: "Mai",
            june: "Juni",
            july: "Juli",
            august: "August",
            september: "September",
            october: "Oktober",
            november: "November",
            december: "Dezember",
            day: "Tag",
            name: "Name",
            count: "Anzahl",
            points: "Punkte",
            rate: "Quote",
            forgotPasswordSubmitted: "Die Anfrage wird bearbeitet.",
            finishCardButton3Text: "Sitzt",
            finishCardButton2Text: "OK",
            finishCardButton1Text: "Nicht gut",
            repeatCardButtonText: "Wiederholen",
            reallyRemoveCardFromBox: "Wirklich diese Karte aussortieren?",
            removeCardFromBox: "Aussortieren",
            reinforce: "Festigen",
            reinforceCardsCount: "Anzahl der Karten zum Festigen",
            reinforcecFinishedText: "Du hast alle Karten für heute gefestigt.",
            dayBehindMessage: "Du bist einen Tag hinterher. Soll Dein Zeitplan neu berechnet werden?",
            daysBehindMessage: "Du bist %number% Tage hinterher. Soll Dein Zeitplan neu berechnet werden?",
            yes: "Ja",
            warning: "Achtung!"
        },
        error: {
            readPrivateCoursesFailed: "Kurse konnten nicht geladen werden.",
            loginFailed: "Anmeldung schlug fehl.",
            readStatisticsFailed: "Statistik konnte nicht geladen werden.",
            readBoxesFailed: "Boxen konnten nicht geladen werden.",
            readPrivateLessonsFailed: "Lektionen konnten nicht geladen werden.",
            readPrivateTestsFailed: "Tests konnten nicht geladen werden.",
            readPrivateTestFailed: "Test konnte nicht geladen werden.",
            readResultFailed: "Ergebnis konnte nicht geladen werden.",
            readNextCardFailed: "Nächste Karte konnte nicht geladen werden.",
            readProfileFailed: "User-Info konnte nicht geladen werden.",
            dataInvalid: "Das Formular ist nicht richtig ausgefüllt.",
            readProfileCoursesFailed: "Kurse konnten nicht geladen werden.",
            readBoxFailed: "Lern-Box konnte nicht geladen werden.",
            readCoursesOfBoxFailed: "Kurse konnten nicht geladen werden.",
            passwordMismatch: "Passwörter stimmen nicht überein.",
            registerUserFailed: "Das Registieren des Benutzers schlug fehl.",
            readReinforceCardsFailed: "Die Karten zum Festigen konnten nicht geladen werden."
        },
        user: {
            profile: "Mein Profil",
            username: "Benutzername",
            password: "Passwort",
            name: "Nachname",
            prename: "Vorname",
            email: "Email",
            nameNotEmpty: "Nachname muss angegeben werden.",
            prenameNotEmpty: "Vorname muss angegeben werden.",
            emailNotEmpty: "Email muss angegeben werden.",
            save: "Speichern",
            myCourseList: "Meine Kurse",
            courseName: "Name",
            emptyCourseList: "Keine Kurse vorhanden",
            subscribe: "Bei anderen Kursen anmelden",
            myBoxList: "Meine Lern-Boxen",
            emptyBoxList: "Keine Lern-Boxen vorhanden",
            boxName: "Name",
            newBox: "Neue Lern-Box anlegen",
            editBox: "Lern-Box editieren",
            noCoursesFound: "Keine weiteren Kurse gefunden.",
            courseList: "Verfügbare Kurse",
            cancel: "Abbrechen",
            addAfterEdit: "Nach Bearbeiten hinzufügen",
            addAll: "Alle sofort hinzufügen",
            boxNameNotEmpty: "Lern-Box muss einen Namen haben.",
            coursesToAdd: "Kurse",
            reallyRemoveCourseFromUser: "Soll der Kurs wirklich entfernt werden?",
            reallyDeleteBox: "Soll die Lern-Box wirklich gelöscht werden? Alle bisher bewerteten Karten werden dann auch gelöscht.",
            changePassword: "Passwort ändern",
            passwordNotEmpty: "Passwort muss angegeben werden.",
            passwordRepetition: "Passwort wiederholen",
            passwordRepetitionNotEmpty: "Passwort muss zweimal angegeben werden.",
            passwordMismatch: "Passwörter stimmen nicht überein.",
            forgotPassword: "Passwort vergessen?",
            usernameNotEmpty: "Benutzername muss angegeben werden.",
            submit: "Abschicken",
            register: "Registrieren",
            usernameNotAvailable: "Benutzername ist leider nicht mehr frei."
        }
    },
    en: {
        common: {
            ok: "OK",
            home: "Home",
            forToday: "For today",
            forTomorrow: "For tomorrow",
            total: "Total",
            last: "Last",
            planned: "Next",
            finishedHeader: "Finished!",
            finishedText: "You did it!",
            perfect: "Perfect (q)",
            scarcely: "Scarcely (w)",
            knewIt: "Knew it (a)",
            didNotKnow: "Not (s)",
            withEffort: "With effort (y)",
            noIdea: "No idea (x)",
            username: "Username",
            password: "Password",
            login: "Login",
            register: "Register",
            forgotPassword: "Forgot passwort",
            german: "German",
            english: "English",
            hello: "Hello",
            logout: "Logout",
            statistics: "Statistics",
            profile: "My profile",
            myBoxes: "My boxes",
            myCourses: "My courses",
            noCourses: "Keine Kurse",
            noBoxes: "Keine Lern-Boxen",
            backToMyCourses: "Back to my courses",
            pointsOfMaxPoints: "of",
            backToMyLessons: "Back to my lessons",
            publicCourses: "Courses",
            backToPublicCourses: "Back to courses",
            backToPublicLessons: "Back to lessons",
            knewItTest: "Knew it (g)",
            didNotKnowTest: "Did not know (n)",
            goOn: "Go on (ctrl+space)",
            show: "Show (z)",
            correct: "Correct (ctrl+k)",
            withTyping: "With typing",
            asRepetition: "Without typing",
            january: "January",
            february: "February",
            march: "March",
            april: "April",
            may: "May",
            june: "June",
            july: "July",
            august: "August",
            september: "September",
            october: "October",
            november: "November",
            december: "December",
            day: "Day",
            name: "Name",
            count: "Count",
            points: "Points",
            rate: "Rate",
            forgotPasswordSubmitted: "Request is being processed.",
            finishCardButton3Text: "Fine",
            finishCardButton2Text: "OK",
            finishCardButton1Text: "Not good",
            repeatCardButtonText: "Repeat",
            reallyRemoveCardFromBox: "Really remove this card from box?",
            removeCardFromBox: "Remove",
            reinforce: "Reinforce",
            reinforceCardsCount: "Reinforce cards count",
            reinforcecFinishedText: "Reinforcing finished.",
            dayBehindMessage: "You are one day behind. Recalculate your schedule?",
            daysBehindMessage: "You are %number% days behind. Recalculate your schedule?",
            yes: "Yes",
            warning: "Attention!"
        },
        error: {
            readPrivateCoursesFailed: "Failed to load private courses.",
            loginFailed: "Login failed.",
            readStatisticsFailed: "Failed to load statistics.",
            readBoxesFailed: "Failed to load boxes.",
            readPrivateLessonsFailed: "Failed to load lessons.",
            readPrivateTestsFailed: "Failed to load tests.",
            readPrivateTestFailed: "Failed to load test.",
            readResultFailed: "Failed to load result.",
            readNextCardFailed: "Failed to load next card.",
            readProfileFailed: "Failed to load user info.",
            dataInvalid: "The form is not correctly filled.",
            readProfileCoursesFailed: "Failed to load courses.",
            readBoxFailed: "Failed to load box.",
            readCoursesOfBoxFailed: "Failed to load courses.",
            passwordMismatch: "Passwords do not match.",
            registerUserFailed: "Failed to register user.",
            readReinforceCardsFailed: "Failed to load reinforce cards."
        },
        user: {
            profile: "My Profile",
            username: "Username",
            password: "Password",
            name: "Lastname",
            prename: "Prename",
            email: "Email",
            nameNotEmpty: "Lastname must be given.",
            prenameNotEmpty: "Prename must be given.",
            emailNotEmpty: "Email must be given.",
            save: "Save",
            myCourseList: "My courses",
            courseName: "Name",
            emptyCourseList: "No courses",
            subscribe: "Subscribe to other courses",
            myBoxList: "My boxes",
            emptyBoxList: "No boxes",
            boxName: "Name",
            newBox: "New box",
            editBox: "Edit box",
            noCoursesFound: "No more courses found.",
            courseList: "Available courses",
            cancel: "Cancel",
            addAfterEdit: "Add after edit",
            addAll: "Add all now",
            boxNameNotEmpty: "Box name must be given.",
            coursesToAdd: "Courses",
            reallyRemoveCourseFromUser: "Do you really want to remove this course?",
            reallyDeleteBox: "Do you really want to delete this box?",
            changePassword: "Change password",
            passwordNotEmpty: "Password must be given.",
            passwordRepetition: "Repeat password",
            passwordRepetitionNotEmpty: "Password must be given twice.",
            passwordMismatch: "Passwords do not match.",
            forgotPassword: "Forgot your password?",
            usernameNotEmpty: "Username must be given.",
            submit: "Submit",
            register: "Register",
            usernameNotAvailable: "Username is already taken."
        }
    }
};

/*                    S.D.G.                    */
