'use strict';

class ContentView {
    static renderPublicCourses(eventData) {
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
        eventData.texts = Texts.common;
        //enableDrag();
        $("#startButton").html(Texts.common.withTyping);
        $("#repeatButton").html(Texts.common.asRepetition);
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
        eventData.texts = Texts.common;
        $("#startButton").html(Texts.common.withTyping);
        $("#repeatButton").html(Texts.common.asRepetition);
        $("#finishCardButton3").html(Texts.common.finishCardButton3Text);
        $("#finishCardButton2").html(Texts.common.finishCardButton2Text);
        $("#finishCardButton1").html(Texts.common.finishCardButton1Text);
        $("#repeatCardButton").html(Texts.common.repeatCardButtonText);
    };

    static renderResult(eventData) {
        const jsonString = eventData.data.json;
        if (jsonString != null && jsonString.length > 0) {
            const jsonObject = JSON.parse(jsonString);
            if ((jQuery(".vocabulary")).length > 0) {
                for (let i in jsonObject) {
                    const value = jsonObject[i];
                    if (jQuery("#" + i).hasClass('vocabulary')) {
                        jQuery("#" + i).addClass("strike");
                        jQuery("#" + i).attr("disabled", "disabled");
                        for (let j = 0; j < value.length; j++) {
                            if (value[j] == '1') {
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
                    $("#" + i).addClass("show");
                    $("#" + i).removeClass("hide");
                    $("#" + i + " button").remove();
                    let j = 0;
                    const value = jsonObject[i + ""];
                    jQuery("#" + i + " i").each(function () {
                        jQuery(this).prop("onclick", null);
                        const v = value.charAt(j);
                        if (v == 1) {
                            jQuery(this).removeClass("fa fa-circle-o");
                            jQuery(this).addClass("fa fa-check-circle-o");
                            jQuery(this).addClass("correct");
                            $("#" + i + "_icon").removeClass("fa fa-circle-o");
                            $("#" + i + "_icon").addClass("fa fa-check-circle-o");
                            $("#" + i + "_icon").addClass("correct");
                        } else if (v == 2) {
                            jQuery(this).removeClass("fa fa-circle-o");
                            jQuery(this).addClass("fa fa-times-circle-o");
                            jQuery(this).addClass("false");
                            $("#" + i + "_icon").removeClass("fa fa-circle-o");
                            $("#" + i + "_icon").addClass("fa fa-times-circle-o");
                            $("#" + i + "_icon").addClass("false");
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
                    if (jQuery("#" + i).hasClass('clickText')) {
                        jQuery("#" + i).html(value);
                    } else if (jQuery("#" + i).hasClass('completionText')) {
                        jQuery("#" + i).attr('value', value);
                    } else if (jQuery("#" + i).hasClass('singleChoice')) {
                        if (value == "selected") {
                            jQuery("#" + i).addClass("selectedItem");
                        }
                    } else if (jQuery("#" + i).hasClass('multipleChoice')) {
                        if (value == "selected") {
                            jQuery("#" + i).addClass("selectedItem");
                        }
                    } else if (jQuery("#" + i).hasClass('dragElement')) {
                        const splitted = value.split("###");
                        $("#" + i).children('.answer').html(splitted[0]);
                        jQuery("#" + i).css("left", splitted[1]);
                        jQuery("#" + i).css("top", splitted[2]);
                    }
                }
            }
        }
    };

    static renderStatistics(eventData) {
        if (eventData.data === null) {
            eventData.data = {
                statisticsItemList: []
            };
        }
        eventData.data.texts = Texts.common;
        const template = $('#statisticsTemplate').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.content-pane').html(rendered);
        $(".year").val(eventData.data.year);
        $(".month").val(eventData.data.month);
    };

    static renderCard(eventData) {
        let data = eventData.data;
        data.texts = Texts.common;
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
        } else if (data.cardsForToday == 0) {
            $('li.active span.badge').html('');
        }
        data.texts = Texts.common;
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
        data.texts = Texts.common;
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
        data.texts = Texts.common;
        const template = $('#breadcrumbsTemplateBox').html();
        const rendered = Mustache.render(template, data);
        $('.breadcrumbs').html(rendered);

        const reinforceFinishedTemplate = $('#reinforceFinishedTemplate').html();
        const reinforceFinishedRendered = Mustache.render(reinforceFinishedTemplate, data);
        $('.content-pane').html(reinforceFinishedRendered);
    };

}

/*                    S.D.G.                    */
