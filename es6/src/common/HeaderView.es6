'use strict';

class HeaderView {
    static renderLogin(eventData) {
        eventData.texts = Texts.common;
        $.get('templates/common/login.mst', function(template) {
            var rendered = Mustache.render(template, eventData);
            $('.login-logout-pane').html(rendered);
        });
    };
    
    static renderLogout(eventData) {
        eventData.texts = Texts.common;
        $.get('templates/common/logout.mst', function(template) {
            var rendered = Mustache.render(template, eventData);
            $('.login-logout-pane').html(rendered);
        });
    };
    
}

/*                    S.D.G.                    */
