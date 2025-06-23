using CatalogService as service from '../../srv/information_srv';
annotate service.Data_Rooms with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'number',
                Value : number,
            },
            {
                $Type : 'UI.DataField',
                Label : 'type',
                Value : type,
            },
            {
                $Type : 'UI.DataField',
                Label : 'rate',
                Value : rate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'available',
                Value : available,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'number',
            Value : number,
        },
        {
            $Type : 'UI.DataField',
            Label : 'type',
            Value : type,
        },
        {
            $Type : 'UI.DataField',
            Label : 'rate',
            Value : rate,
        },
        {
            $Type : 'UI.DataField',
            Label : 'available',
            Value : available,
        },
    ],
);

