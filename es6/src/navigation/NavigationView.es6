'use strict';

class NavigationView {
    static renderPublicCourses(eventData) {
        eventData.data.texts = Texts.common;
        $.get('templates/navigation/publicCoursesTemplate.mst', function(template) {
            var rendered = Mustache.render(template, eventData.data);
            $('.course-navigation').html(rendered);
        });
    };
    
    static renderPublicLessons(eventData) {
        eventData.data.texts = Texts.common;
        $.get('templates/navigation/publicLessonsTemplate.mst', function(template) {
            var rendered = Mustache.render(template, eventData.data);
            $('.course-navigation').html(rendered);
        });
    };
    
    static renderPublicTests(eventData) {
        eventData.data.texts = Texts.common;
        $.get('templates/navigation/publicTestsTemplate.mst', function(template) {
            var rendered = Mustache.render(template, eventData.data);
            $('.course-navigation').html(rendered);
        });
    };
    
    static renderPublicTest(eventData) {
        eventData.data.texts = Texts.common;
        $.get('templates/navigation/publicTestsTemplate.mst', function(template) {
            var rendered = Mustache.render(template, eventData.data);
            $('.course-navigation').html(rendered);
            $('.course-navigation li').removeClass('active');
            $('.course-navigation .test_' +  eventData.data.testId).addClass('active');
        });
    };
    
    static renderPrivateCourses(eventData) {
        eventData.data.texts = Texts.common;
        $.get('templates/navigation/privateCoursesTemplate.mst', function(template) {
            var rendered = Mustache.render(template, eventData.data);
            $('.course-navigation').html(rendered);
        });
    };
    
    static renderPrivateLessons(eventData) {
        eventData.data.texts = Texts.common;
        $.get('templates/navigation/privateLessonsTemplate.mst', function(template) {
            var rendered = Mustache.render(template, eventData.data);
            $('.course-navigation').html(rendered);
        });
    };
    
    static renderPrivateTests(eventData) {
        eventData.data.texts = Texts.common;
        $.get('templates/navigation/privateTestsTemplate.mst', function(template) {
            var rendered = Mustache.render(template, eventData.data);
            $('.course-navigation').html(rendered);
        });
    };
    
    static renderPrivateTest(eventData) {
        eventData.data.texts = Texts.common;
        $.get('templates/navigation/privateTestsTemplate.mst', function(template) {
            var rendered = Mustache.render(template, eventData.data);
            $('.course-navigation').html(rendered);
            $('.course-navigation li').removeClass('active');
            if (eventData.data.resultId === undefined) {
                $('.course-navigation .test_' +  eventData.data.testId).addClass('active');
            } else {
                $('.course-navigation .result_' +  eventData.data.resultId).addClass('active');
            }
        });
    };
    
}

/*                    S.D.G.                    */
