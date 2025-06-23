sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'visitors',
            componentId: 'Data_RoomsObjectPage',
            contextPath: '/Data_Rooms'
        },
        CustomPageDefinitions
    );
});