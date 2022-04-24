export class MedicationModel {
    Name: string;
    Unit: string;
    Curren: number;
    NameGeneric: string;
    public get create(): Array<any> {
        return [
            {
                id: 'MediaURL',
                label: 'MediaURL',
                name: 'MediaURL',
                type: 'link'
            },
            {
                id: 'Name',
                label: 'Name',
                name: 'Name',
                type: 'text'
            }
            ,
            {
                id: 'GenericName',
                label: 'Name generic',
                name: 'GenericName',
                type: 'text'
            },
            {
                id: 'UnitId',
                label: 'Unit',
                name: 'UnitId',
                type: 'selected',
                data: []
            },
            {
                id: 'Price',
                label: 'Retail price',
                name: 'Retail price',
                type: 'number'
            },
            {
                id: 'CurrencyId',
                label: 'Currency',
                name: 'CurrencyId',
                type: 'selected',
                data: []
            },
            {
                id: 'Cost',
                label: 'Purchase price',
                name: 'Cost',
                type: 'number'
            },
            {
                id: 'Strength',
                label: 'Strengths',
                name: 'Strength',
                type: 'text'
            },
            {
                id: 'Route',
                label: 'Route of Admin',
                name: 'Route',
                type: 'text'
            }
            ,
            {
                id: 'AdultDosage',
                label: 'Normal adult dosage',
                name: 'AdultDosage',
                type: 'text'
            },
            {
                id: 'PediatricDosage',
                label: 'Normal pediatric dosage',
                name: 'PediatricDosage',
                type: 'text'
            }
            ,
            {
                id: 'PrescriptionNote',
                label: 'Notes for prescription',
                name: 'PrescriptionNote',
                type: 'text'
            },
            {
                id: 'CALS',
                label: 'CALS to be printed',
                name: 'CALS',
                type: 'text'
            },
            {
                id: 'WebMediaURL',
                label: 'Web link',
                name: 'Web link',
                type: 'text'
            },
            {
                id: 'Description',
                label: 'Decription',
                name: 'Decription',
                type: 'text'
            }
        ];
    }
}
