sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'visitors',
            componentId: 'Data_RoomsList',
            contextPath: '/Data_Rooms'
        },
        CustomPageDefinitions
    );
});