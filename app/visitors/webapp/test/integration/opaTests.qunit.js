sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'visitors/test/integration/FirstJourney',
		'visitors/test/integration/pages/Data_RoomsList',
		'visitors/test/integration/pages/Data_RoomsObjectPage'
    ],
    function(JourneyRunner, opaJourney, Data_RoomsList, Data_RoomsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('visitors') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheData_RoomsList: Data_RoomsList,
					onTheData_RoomsObjectPage: Data_RoomsObjectPage
                }
            },
            opaJourney.run
        );
    }
);