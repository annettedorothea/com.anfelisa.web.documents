import CommonView from "../../common/views/CommonView";

export default class ContentView {
    static renderPublicCourses(eventData) {
        console.log("Texts", CommonView.getTexts());
        const template = $('#contentTemplate1_' + CommonView.getLanguage()).html();
        const rendered = Mustache.render(template, eventData.data);
        $('.content-pane').html(rendered);
    };

    static renderPublicLessons(eventData) {
        const template = $('#contentTemplate2').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.content-pane').html(rendered);
    };

    static renderPublicTests(eventData) {
        const template = $('#contentTemplate3').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.content-pane').html(rendered);
    };

    static renderPublicTest(eventData) {
        const html = "<div class='test'>" + eventData.data.html + "</div>";
        $(".content-pane").html(html);
        eventData.texts = CommonView.getTexts().common;
        //enableDrag();
        console.log("Texts", CommonView.getTexts());
        $("#startButton").html(CommonView.getTexts().common.withTyping);
        $("#repeatButton").html(CommonView.getTexts().common.asRepetition);
    };

    static renderPrivateLessons(eventData) {
        const template = $('#contentTemplate2').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.content-pane').html(rendered);
    };

    static renderPrivateTests(eventData) {
        const template = $('#contentTemplate3').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.content-pane').html(rendered);
    };

    static renderPrivateTest(eventData) {
        const html = "<div class='test'>" + eventData.data.html + "</div>";
        $(".content-pane").html(html);
        //enableDrag();
        eventData.texts = CommonView.getTexts().common;
        $("#startButton").html(CommonView.getTexts().common.withTyping);
        $("#repeatButton").html(CommonView.getTexts().common.asRepetition);
        $("#finishCardButton3").html(CommonView.getTexts().common.finishCardButton3Text);
        $("#finishCardButton2").html(CommonView.getTexts().common.finishCardButton2Text);
        $("#finishCardButton1").html(CommonView.getTexts().common.finishCardButton1Text);
        $("#repeatCardButton").html(CommonView.getTexts().common.repeatCardButtonText);
    };

    static renderResult(eventData) {
        const jsonString = eventData.data.json;
        if (jsonString !== null && jsonString.length > 0) {
            const jsonObject = JSON.parse(jsonString);
            if ((jQuery(".vocabulary")).length > 0) {
                for (let i in jsonObject) {
                    const value = jsonObject[i];
                    let item = jQuery("#" + i);
                    if (item.hasClass('vocabulary')) {
                        item.addClass("strike");
                        item.attr("disabled", "disabled");
                        for (let j = 0; j < value.length; j++) {
                            if (value[j] === '1') {
                                jQuery("#" + i + "_shots")
                                    .append(
                                        "<span class='strike'><i class='fa fa-check-circle-o'></i></span>");
                            } else {
                                jQuery("#" + i + "_shots")
                                    .append(
                                        "<span class='offTarget'><i class='fa fa-times-circle-o'></i></span>");
                            }
                        }
                    }
                }
                const template = $('#result_' + eventData.language).html();
                const rendered = Mustache.render(template, eventData.data);
                $('#correctParagraph').html(rendered);
            } else if ((jQuery("#questionOverviewList")).length > 0) {
                for (let i = 1; i <= eventData.data.maxPoints; i++) {
                    let item = $("#" + i);
                    item.addClass("show");
                    item.removeClass("hide");
                    $("#" + i + " button").remove();
                    let j = 0;
                    const value = jsonObject[i + ""];
                    jQuery("#" + i + " i").each(function () {
                        jQuery(this).prop("onclick", null);
                        const v = value.charAt(j);
                        let icon = $("#" + i + "_icon");
                        if (v === 1) {
                            jQuery(this).removeClass("fa fa-circle-o");
                            jQuery(this).addClass("fa fa-check-circle-o");
                            jQuery(this).addClass("correct");
                            icon.removeClass("fa fa-circle-o");
                            icon.addClass("fa fa-check-circle-o");
                            icon.addClass("correct");
                        } else if (v === 2) {
                            jQuery(this).removeClass("fa fa-circle-o");
                            jQuery(this).addClass("fa fa-times-circle-o");
                            jQuery(this).addClass("false");
                            icon.removeClass("fa fa-circle-o");
                            icon.addClass("fa fa-times-circle-o");
                            icon.addClass("false");
                        }
                        j++;
                    });
                }
                const template = $('#result_' + eventData.language).html();
                const rendered = Mustache.render(template, eventData.data);
                $('#resultDiv').html(rendered);
            } else if ((jQuery(".ccard")).length > 0) {
                $(".line").removeClass("hiddenLine");
                $(".word").removeClass("hiddenWord");
                const template = $('#result_' + eventData.language).html();
                const rendered = Mustache.render(template, eventData.data);
                $('#correctParagraph').html(rendered);
            } else {
                for (let i in jsonObject) {
                    const value = jsonObject[i];
                    let item = jQuery("#" + i);
                    if (item.hasClass('clickText')) {
                        item.html(value);
                    } else if (item.hasClass('completionText')) {
                        item.attr('value', value);
                    } else if (item.hasClass('singleChoice')) {
                        if (value === "selected") {
                            item.addClass("selectedItem");
                        }
                    } else if (item.hasClass('multipleChoice')) {
                        if (value === "selected") {
                            item.addClass("selectedItem");
                        }
                    } else if (item.hasClass('dragElement')) {
                        const splitted = value.split("###");
                        $("#" + i).children('.answer').html(splitted[0]);
                        item.css("left", splitted[1]);
                        item.css("top", splitted[2]);
                    }
                }
            }
        }
    };

    static renderStatistics(eventData) {
        console.log("Texts", CommonView.getTexts());
        if (eventData.data === null) {
            eventData.data = {
                statisticsItemList: []
            };
        }
        eventData.data.texts = CommonView.getTexts().common;
        const template = $('#statisticsTemplate').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.content-pane').html(rendered);
        $(".year").val(eventData.data.year);
        $(".month").val(eventData.data.month);
    };

    static renderCard(eventData) {
        let data = eventData.data;
        data.texts = CommonView.getTexts().common;
        const template = $('#breadcrumbsTemplateBox').html();
        const rendered = Mustache.render(template, data);
        $('.breadcrumbs').html(rendered);

        Mousetrap.unbind('q');
        Mousetrap.unbind('a');
        Mousetrap.unbind('y');
        Mousetrap.unbind('w');
        Mousetrap.unbind('s');
        Mousetrap.unbind('x');

        if (data.cardsForToday > 0) {
            $('li.active span.badge').html(data.cardsForToday);
        } else if (data.cardsForToday === 0) {
            $('li.active span.badge').html('');
        }
        data.texts = CommonView.getTexts().common;
        if (data.cardsForToday > 0 || /*App.cardView.goOnWithNewCards &&*/ data.newCards > 0) {
            const template = $('#cardTemplate').html();
            const rendered = Mustache.render(template, data);
            $('.content-pane').html(rendered);
            if (data["content"]["complex"]) {
                Mousetrap.bind('enter', function () {
                    $(".ccard").click()
                });
            } else {
                Mousetrap.bind('enter', function () {
                    $(".card").click()
                });
            }
        } else {
            let activeItem = $('li.active i.fa');
            activeItem.removeClass('fa-pencil-square-o');
            activeItem.addClass('fa-check-square-o');
            const template = $('#cardTemplateFinished').html();
            const rendered = Mustache.render(template, data);
            $('.content-pane').html(rendered);
        }
    };

    static renderNextReinforceCard(eventData) {
        let data = ReinforceCardList.reinforceCardList[0];
        data.texts = CommonView.getTexts().common;
        const template = $('#breadcrumbsTemplateBox').html();
        const rendered = Mustache.render(template, data);
        $('.breadcrumbs').html(rendered);

        Mousetrap.unbind('q');
        Mousetrap.unbind('a');
        Mousetrap.unbind('y');
        Mousetrap.unbind('w');
        Mousetrap.unbind('s');
        Mousetrap.unbind('x');

        Mousetrap.bind('enter', function () {
            $(".ccard").click()
        });
        Mousetrap.bind('enter', function () {
            $(".card").click()
        });

        data.reinforceCardsCount = ReinforceCardList.reinforceCardList.length;

        const reinforceCardTemplate = $('#reinforceCardTemplate').html();
        const reinforceCardRendered = Mustache.render(reinforceCardTemplate, data);
        $('.content-pane').html(reinforceCardRendered);
    };

    static renderReinforceFinished(eventData) {
        let data = {};
        data.texts = CommonView.getTexts().common;
        const template = $('#breadcrumbsTemplateBox').html();
        const rendered = Mustache.render(template, data);
        $('.breadcrumbs').html(rendered);

        const reinforceFinishedTemplate = $('#reinforceFinishedTemplate').html();
        const reinforceFinishedRendered = Mustache.render(reinforceFinishedTemplate, data);
        $('.content-pane').html(reinforceFinishedRendered);
    };

}

/*                    S.D.G.                    */
