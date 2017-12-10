import CommonView from "../../common/views/CommonView";

export default class BreadcrumbsView {
    static renderPublicCoursesBreadcrumbs(eventData) {
        eventData.data.texts = CommonView.getTexts().common;
        const template = $('#breadcrumbsTemplate1Public').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.breadcrumbs').html(rendered);
    };

    static renderPublicLessonsBreadcrumbs(eventData) {
        eventData.data.texts = CommonView.getTexts().common;
        const template = $('#breadcrumbsTemplate2Public').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.breadcrumbs').html(rendered);
    };

    static renderPublicTestsBreadcrumbs(eventData) {
        eventData.data.texts = CommonView.getTexts().common;
        const template = $('#breadcrumbsTemplate3Public').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.breadcrumbs').html(rendered);
    };

    static renderPrivateCoursesBreadcrumbs(eventData) {
        eventData.data.texts = CommonView.getTexts().common;
        const template = $('#breadcrumbsTemplate1').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.breadcrumbs').html(rendered);
    };

    static renderPrivateLessonsBreadcrumbs(eventData) {
        eventData.data.texts = CommonView.getTexts().common;
        const template = $('#breadcrumbsTemplate2').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.breadcrumbs').html(rendered);
    };

    static renderPrivateTestsBreadcrumbs(eventData) {
        eventData.data.texts = CommonView.getTexts().common;
        const template = $('#breadcrumbsTemplate3').html();
        const rendered = Mustache.render(template, eventData.data);
        $('.breadcrumbs').html(rendered);
    };

}

/*                    S.D.G.                    */
