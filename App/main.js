﻿require.config({
    paths: {
        'text': 'durandal/amd/text'
    }
});

define(function(require) {
    var app = require('durandal/app'),
        system = require('durandal/system'),
        viewLocator = require('durandal/viewLocator');

    system.debug(true);

    //Only used by navigation sample, since it has a more interesting structure.
    viewLocator.convertModuleIdToViewUrl = function (moduleId) {
        return moduleId.replace('viewmodels', 'views');
    };
    
    //Only used by view composition sample to map partial views.
    viewLocator.convertViewUrlToAreaUrl = function (area, viewUrl) {
        return 'samples/viewComposition/' + viewUrl;
    };

    app.start().then(function() {
        app.adaptToDevice();
        app.setRoot('samples/modal/shell');
    });
});