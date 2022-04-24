export class ServiceModel {
  public get create(): Array<any> {
    return [
      {
        id: 'Name',
        label: 'Service',
        name: 'MediaURL',
        type: 'text',
        required: true
      },
      {
        id: 'ServiceType',
        label: 'Category',
        name: 'LegalName',
        type: 'selected',
        required: true
      },
      {
        id: 'Description',
        label: 'Description',
        name: 'Description',
        type: 'text'
      },
      {
        id: 'CurrencyId',
        label: 'Currency',
        required: true,
        name: 'Currency',
        type: 'selected'
      },
      {
        id: 'Price',
        label: 'Price',
        required: true,
        name: 'Price',
        type: 'number'
      },
      {
        id: 'TaxRate',
        label: 'TaxRate',
        required: true,
        name: 'TaxRate',
        type: 'number'
      }
    ];
  }
  public get edit(): Array<any> {
    return [
      {
        id: 'Name',
        label: 'Service',
        required: true,
        name: 'MediaURL',
        type: 'text'
      },
      {
        id: 'ServiceType',
        label: 'Category',
        required: true,
        name: 'LegalName',
        type: 'selected',
        data: []
      },
      {
        id: 'Description',
        label: 'Description',
        name: 'Description',
        type: 'text'
      },
      {
        id: 'CurrencyId',
        label: 'Currency',
        required: true,
        name: 'CurrencyId',
        type: 'selected',
        data: []
      },
      {
        id: 'Price',
        label: 'Price',
        required: true,
        name: 'Price',
        type: 'number'
      },
      {
        id: 'TaxRate',
        label: 'TaxRate',
        name: 'TaxRate',
        type: 'number',
        required: true,
      }
    ];
  }
}
