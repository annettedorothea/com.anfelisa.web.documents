/**
 * Created by annette on 26.10.16.
 */
function loadJson(jsonString) {
    if (jsonString != null && jsonString.length > 0) {
        var jsonObject = JSON.parse(jsonString);
        if ((jQuery(".vocabulary")).length > 0) {
            for ( var i in jsonObject) {
                var value = jsonObject[i];
                if (jQuery("#" + i).hasClass('vocabulary')) {
                    jQuery("#" + i).addClass("strike");
                    jQuery("#" + i).attr("disabled", "disabled");
                    for (var j = 0; j < value.length; j++) {
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
            jQuery('#correctParagraph').html(
                "Du hast " + jsonObject["points"] + " von maximal "
                + jsonObject["maxPoints"] + " Punkten erreicht.");
        } else if ((jQuery("#questionOverviewList")).length > 0) {
            alert('questionOverviewList');
            for (var i = 1; i <= jsonObject["maxPoints"]; i++) {
                $("#" + i).addClass("show");
                $("#" + i).removeClass("hide");
                $("#" + i + " button").remove();
                var j = 0;
                var value = jsonObject[i + ""];
                jQuery("#" + i + " i").each(function() {
                    jQuery(this).prop("onclick", null);
                    var v = value.charAt(j);
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
            jQuery('#resultDiv').html(
                "Du hast " + jsonObject["points"] + " von maximal "
                + jsonObject["maxPoints"] + " Punkten erreicht.");
        } else if ((jQuery(".ccard")).length > 0) {
            $(".line").removeClass("invisible");
            $(".word").removeClass("invisible");
            jQuery('#correctParagraph').html(
                "Du hast " + jsonObject["points"] + " von maximal "
                + jsonObject["maxPoints"] + " Punkten erreicht.");
        } else {
            for ( var i in jsonObject) {
                var value = jsonObject[i];
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
                    var splitted = value.split("###");
                    $("#" + i).children('.answer').html(splitted[0]);
                    jQuery("#" + i).css("left", splitted[1]);
                    jQuery("#" + i).css("top", splitted[2]);
                }
            }
            correctTest(false);
        }
    }
}

function showNext(id, texts) {
    setDirtyState(true);
    var actualText = jQuery("#" + id).html();
    for (var i = 0; i < texts.length; i++) {
        if (actualText == texts[i]) {
            i++;
            if (i == texts.length) {
                i = 0;
            }
            jQuery("#" + id).text(texts[i]);
            break;
        }
    }
}

function toggleSingleChoice(id, group) {
    setDirtyState(true);
    var allItemsOfGroup = jQuery("." + group);
    for (var i = 0; i < allItemsOfGroup.length; i++) {
        var item = allItemsOfGroup[i];
        var currentId = $(item).attr('id');
        if (id == currentId) {
            jQuery("#" + currentId).addClass("selectedItem");
        } else {
            jQuery("#" + currentId).removeClass("selectedItem");
        }
    }
}

function toggleMultipleChoice(id) {
    setDirtyState(true);
    if (jQuery("#" + id).hasClass("selectedItem")) {
        jQuery("#" + id).removeClass("selectedItem");
    } else {
        jQuery("#" + id).addClass("selectedItem");
    }
}

function correctTest(save) {
    setDirtyState(false);
    var allClickTexts = jQuery(".clickText");
    var points = 0;
    var maxPoints = 0;
    var json = {};

    for (var i = 0; i < allClickTexts.length; i++) {
        var clickTextId = allClickTexts[i].id;
        var solution = jQuery("#" + clickTextId).next().html();
        var answer = jQuery("#" + clickTextId).html();
        json["" + clickTextId] = answer;
        if (solution == answer) {
            jQuery("#" + clickTextId).addClass("correct");
            points++;
        } else {
            jQuery("#" + clickTextId).addClass("false");
            jQuery("#" + clickTextId).append(
                ' <i class="fa fa-question-circle" data-toggle="tooltip" title="'
                + solution + '"></i>');
            jQuery('[data-toggle="tooltip"]').tooltip();
            points--;
        }
        maxPoints++;
        jQuery("#" + clickTextId).prop("onclick", null);
    }

    var allCompletionTexts = jQuery(".completionText");
    for (var i = 0; i < allCompletionTexts.length; i++) {
        var completionTextId = allCompletionTexts[i].id;
        var solution = jQuery("#" + completionTextId).next().html();
        var answer = jQuery("#" + completionTextId).val().trim();
        json["" + completionTextId] = answer;
        if (solution == answer) {
            jQuery("#" + completionTextId).addClass("correct");
            points++;
        } else {
            jQuery("#" + completionTextId).addClass("false");
            jQuery("#" + completionTextId).after(
                ' <i class="fa fa-question-circle" data-toggle="tooltip" title="'
                + solution + '" data-action="click"></i>');
            jQuery('[data-toggle="tooltip"]').tooltip();
        }
        maxPoints++;
        jQuery("#" + completionTextId).attr('readonly', 'readonly');
    }

    var allSingleChoices = jQuery(".singleChoice");
    var currentGroup = "";
    var groupCorrect;
    var precedingChoiceId;
    for (var i = 0; i < allSingleChoices.length; i++) {
        var singleChoiceId = allSingleChoices[i].id;
        if (!jQuery("#" + singleChoiceId).hasClass(currentGroup)) {
            if (groupCorrect) {
                jQuery("#" + precedingChoiceId).parent().addClass("correct");
            } else {
                jQuery("#" + precedingChoiceId).parent().addClass("false");
            }
            currentGroup = "group" + singleChoiceId;
            groupCorrect = true;
        }
        var solution = jQuery("#" + singleChoiceId).next().html();
        if (solution == "correct") {
            jQuery("#" + singleChoiceId).addClass("mcCorrect");
            if (jQuery("#" + singleChoiceId).hasClass("selectedItem")) {
                json["" + singleChoiceId] = "selected";
                points++;
            } else {
                groupCorrect = false;
                json["" + singleChoiceId] = "notSelected";
            }
            maxPoints++;
        } else {
            jQuery("#" + singleChoiceId).addClass("mcFalse");
            if (jQuery("#" + singleChoiceId).hasClass("selectedItem")) {
                json["" + singleChoiceId] = "selected";
                groupCorrect = false;
            } else {
                json["" + singleChoiceId] = "notSelected";
            }
        }
        jQuery("#" + singleChoiceId).prop("onclick", null);
        precedingChoiceId = singleChoiceId;
    }
    if (groupCorrect) {
        jQuery("#" + precedingChoiceId).parent().addClass("correct");
    } else {
        jQuery("#" + precedingChoiceId).parent().addClass("false");
    }

    var allMultipleChoices = jQuery(".multipleChoice");
    for (var i = 0; i < allMultipleChoices.length; i++) {
        var multipleChoiceId = allMultipleChoices[i].id;
        if (!jQuery("#" + multipleChoiceId).hasClass(currentGroup)) {
            if (groupCorrect) {
                jQuery("#" + precedingChoiceId).parent().addClass("correct");
            } else {
                jQuery("#" + precedingChoiceId).parent().addClass("false");
            }
            currentGroup = "group" + multipleChoiceId;
            groupCorrect = true;
        }
        var solution = jQuery("#" + multipleChoiceId).next().html();
        json["" + multipleChoiceId] = answer;
        if (solution == "correct") {
            jQuery("#" + multipleChoiceId).addClass("mcCorrect");
            if (jQuery("#" + multipleChoiceId).hasClass("selectedItem")) {
                points++;
                json["" + multipleChoiceId] = "selected";
            } else {
                points--;
                groupCorrect = false;
                json["" + multipleChoiceId] = "notSelected";
            }
        } else {
            jQuery("#" + multipleChoiceId).addClass("mcFalse");
            if (jQuery("#" + multipleChoiceId).hasClass("selectedItem")) {
                json["" + multipleChoiceId] = "selected";
                groupCorrect = false;
                points--;
            } else {
                points++;
                json["" + multipleChoiceId] = "notSelected";
            }
        }
        maxPoints++;
        jQuery("#" + multipleChoiceId).prop("onclick", null);
        precedingChoiceId = multipleChoiceId;
    }
    if (groupCorrect) {
        jQuery("#" + precedingChoiceId).parent().addClass("correct");
    } else {
        jQuery("#" + precedingChoiceId).parent().addClass("false");
    }

    var allDropAreas = jQuery(".dropArea");
    for (var i = 0; i < allDropAreas.length; i++) {
        var dropAreaId = allDropAreas[i].id;
        jQuery("#" + dropAreaId).addClass("correct");
    }
    var allDragElements = jQuery(".dragElement");
    for (var i = 0; i < allDragElements.length; i++) {
        var dragElementId = allDragElements[i].id;
        var solution = jQuery("#" + dragElementId).children(".solution").html();
        var answer = jQuery("#" + dragElementId).children(".answer").html();
        $("#" + dragElementId).appendTo("#" + answer + "DropArea");
        $("#" + dragElementId).css("left", "");
        $("#" + dragElementId).css("top", "");
        $("#" + dragElementId).css("z-index", "");

        json["" + dragElementId] = answer;
        if (solution == answer) {
            jQuery("#" + dragElementId).addClass("correct");
            points++;
        } else {
            jQuery("#" + dragElementId).addClass("false");
            jQuery("#" + dragElementId).append(
                ' <i class="fa fa-question-circle" data-toggle="tooltip" title="'
                + solution + '" data-action="click"></i>');
            jQuery('[data-toggle="tooltip"]').tooltip();
            points--;
        }
        jQuery("#" + dragElementId).draggable('destroy')
        if ((navigator.userAgent.match(/iPhone/i))
            || (navigator.userAgent.match(/iPod/i))
            || (navigator.userAgent.match(/iPad/i))) {
            $("span.dragElement").bind('touchstart', function() {
            });
            $("span.dragElement").bind('touchend', function() {
            });
        }
        maxPoints++;
    }

    jQuery(".tip").addClass('visibleTip');
    jQuery(".tip").removeClass('tip');

    if (points < 0) {
        points = 0;
    }

    jQuery('#correctParagraph').html(
        "Du hast " + points + " von " + maxPoints + " Punkten erreicht.");

    setDirtyState(false);

    jQuery('#correctButton').remove();
    json["points"] = points;
    json["maxPoints"] = maxPoints;
    //json["testid"] = App.anfelisaView.selection.selectedTest;
    json["token"] = $.cookie('anfelisa_login_token');
    if (save && $.cookie('anfelisa_login_token') != null) {
        $.post("saveResult.php", {
            json : json
        }, function(data) {
            $("#sumOfPoints").html("Du hast insgesamt " + data + " Punkte.");
            loadMyTests($("#lessonid").val(), false);
        });
    }

}

function saveResult(points, maxPoints) {
    var json = {};
    var allCompletionTexts = jQuery(".vocabulary");
    for (var i = 0; i < allCompletionTexts.length; i++) {
        var completionTextId = allCompletionTexts[i].id;
        var strikes = jQuery("#" + completionTextId + "_shots").children();
        var answer = "";
        for (var j = 0; j < strikes.length; j++) {
            var currentStrike = $(strikes[j]);
            if (currentStrike.hasClass("strike")) {
                answer += "1";
            } else {
                answer += "0";
            }
        }
        json["" + completionTextId] = answer;
    }

    setDirtyState(false);

    json["points"] = points;
    json["maxPoints"] = maxPoints;
    //json["testid"] = App.anfelisaView.selection.selectedTest;
    json["token"] = $.cookie('anfelisa_login_token');
    $.post("saveResult.php", {
        json : json
    }, function(data) {
        $("#sumOfPoints").html("Du hast insgesamt " + data + " Punkte.");
        loadMyTests($("#lessonid").val(), false);
    });
}

function enableDrag() {
    $(".dragElement").draggable({
        stack : ".dragElementStack span"
    }, {
        revert : "invalid"
    }, {
        containment : "parent"
    }, {
        scroll : false
    });
    $(".dropArea").droppable({
        accept : ".dragElement",
        activeClass : "active",
        hoverClass : "hover",
        drop : function(event, ui) {
            var id = $(this).attr('id');
            $(ui.draggable).children(".answer").html($(this).html());
            setDirtyState(true);
        }
    });
}

if (typeof String.prototype.trim != "function") {
    String.prototype.trim = (function() {
        var regXTrim = (/^\s+|\s+$/g);
        return (function() {
            return this.replace(regXTrim, "");
        });
    })();
}

function showCorrectMultipleChoice(icon, multipleChoiceId, last) {
    $(icon).removeClass("fa-circle-o");
    $(icon).addClass("fa-check-circle-o");
    $(icon).addClass("correct");
    $("#" + multipleChoiceId + "_icon").removeClass("fa-circle-o");
    $("#" + multipleChoiceId + "_icon").addClass("fa-check-circle-o");
    $("#" + multipleChoiceId + "_icon").addClass("correct");
    showMultipleChoiceCorrecture(icon, multipleChoiceId, last);
}
function showFalseMultipleChoice(icon, multipleChoiceId, last) {
    $(icon).removeClass("fa-circle-o");
    $(icon).addClass("fa-times-circle-o");
    $(icon).addClass("false");
    $("#" + multipleChoiceId + "_icon").removeClass("fa-circle-o");
    $("#" + multipleChoiceId + "_icon").addClass("fa-times-circle-o");
    $("#" + multipleChoiceId + "_icon").addClass("false");
    showMultipleChoiceCorrecture(icon, multipleChoiceId, last);
}
function setDirtyState(state) {

}
function showMultipleChoiceCorrecture(icon, multipleChoiceId, last) {
    jQuery("#" + multipleChoiceId + " i").prop("onclick", null);
    if (!last) {
        jQuery("#" + multipleChoiceId + " button").removeClass("disabled");
        jQuery("#" + multipleChoiceId + " button").removeAttr("disabled");
    } else {
        var json = {};

        setDirtyState(false);

        maxPoints = $("#questionOverviewList i").length;
        correctAnswers = $("#questionOverviewList i.correct").length;
        falseAnswers = $("#questionOverviewList i.false").length;
        points = correctAnswers - falseAnswers;
        if (points < 0) {
            points = 0;
        }

        for (var i = 1; i <= maxPoints; i++) {
            var result = "";
            $("#" + i + " i").each(function() {
                if ($(this).hasClass("correct")) {
                    result += "1";
                } else if ($(this).hasClass("false")) {
                    result += "2";
                } else {
                    result += "0";
                }
            });
            json[i] = result;
        }

        json["points"] = points;
        json["maxPoints"] = maxPoints;
        //json["testid"] = App.anfelisaView.selection.selectedTest;
        json["token"] = $.cookie('anfelisa_login_token');
        jQuery('#resultDiv').html(
            "Du hast " + points + " von maximal " + maxPoints
            + " Punkten erreicht.");
        if ($.cookie('anfelisa_login_token') != undefined) {
            $.post("saveResult.php", {
                json : json
            }, function(data) {
                $("#sumOfPoints").html("Du hast insgesamt " + data + " Punkte.");
                loadMyTests($("#lessonid").val(), false);
            });
        }
    }
}
function nextQuestion(multipleChoiceId) {
    jQuery("#" + multipleChoiceId).addClass("hide");
    jQuery("#" + multipleChoiceId).removeClass("show");
    multipleChoiceId++;
    jQuery("#" + multipleChoiceId).addClass("show");
    jQuery("#" + multipleChoiceId).removeClass("hide");
}
function showNextInTestMode(event, object) {
    /*if (event.altKey) {
     var nextWord = $( ".line.invisible > .word.invisible" ).first();
     nextWord.removeClass("invisible");
     if (nextWord.is(':last-child')) {
     nextWord.parent().removeClass("invisible");
     }
     } else {
     var nextLine = $( ".line.invisible" ).first();
     nextLine.removeClass("invisible");
     nextLine.children().removeClass("invisible");
     }
     if (!$(".word").hasClass("invisible")) {
     enableScoreButtons();
     }*/
}
function enableScoreButtons() {
    $("#finishCardButton3").removeAttr("disabled");
    $("#finishCardButton3").removeClass("disabled");
    $("#finishCardButton2").removeAttr("disabled");
    $("#finishCardButton2").removeClass("disabled");
    $("#finishCardButton1").removeAttr("disabled");
    $("#finishCardButton1").removeClass("disabled");
    $("#repeatCardButton").removeAttr("disabled");
    $("#repeatCardButton").removeClass("disabled");
    $('#correctParagraph button.blueButton').addClass("btn-blue");
    $('#correctParagraph button.greenButton').addClass("btn-green");
    $('#correctParagraph button.orangeButton').addClass("btn-orange");
    $('#correctParagraph button.redButton').addClass("btn-red");
}
function disableScoreButtons() {
    $("#finishCardButton3").attr("disabled", "disabled");
    $("#finishCardButton3").addClass("disabled");
    $("#finishCardButton2").attr("disabled", "disabled");
    $("#finishCardButton2").addClass("disabled");
    $("#finishCardButton1").attr("disabled", "disabled");
    $("#finishCardButton1").addClass("disabled");
    $("#repeatCardButton").attr("disabled", "disabled");
    $("#repeatCardButton").addClass("disabled");
    $('#correctParagraph button.blueButton').removeClass("btn-blue");
    $('#correctParagraph button.greenButton').removeClass("btn-green");
    $('#correctParagraph button.orangeButton').removeClass("btn-orange");
    $('#correctParagraph button.redButton').removeClass("btn-red");
}
function finishCard(save, points, maxPoints) {
    disableScoreButtons();
    jQuery('#correctParagraph').html(
        "Du hast " + points + " von maximal "
        + maxPoints + " Punkten erreicht.");
    if (save) {
        var json = {};
        json["points"] = points;
        json["maxPoints"] = maxPoints;
        //json["testid"] = App.anfelisaView.selection.selectedTest;
        json["token"] = $.cookie('anfelisa_login_token');
        if ($.cookie('anfelisa_login_token') != undefined) {
            $.post("saveResult.php", {
                json : json
            }, function(data) {
                $("#sumOfPoints").html("Du hast insgesamt " + data + " Punkte.");
                loadMyTests($("#lessonid").val(), false);
            });
        }
    }
}
function repeatCard() {
    disableScoreButtons();
    $(".ccard .line").addClass("invisible");
    $(".ccard .word").addClass("invisible");
}
