export class CompanyModel {
    username: string;
    password: string;
    public get create(): Array<any> {
        return [
            {
                id: 'MediaURL',
                label: 'MediaURL',
                name: 'MediaURL',
                type: 'link'
            },
            {
                id: 'Color',
                label: 'Theme: ',
                name: 'Color',
                type: 'selected',
                data: [
                { Name: 'theme 1', value: 1 },
                { Name: 'theme 2', value: 2 },
              ]
            }
            ,
            {
                id: 'Nav',
                label: 'Narbar:',
                name: 'Nav',
                type: 'selected',
                data: [{ Name: 'not change', value: 1 },
                { Name: 'change', value: 2 }]
            }
        ];
    }
}
