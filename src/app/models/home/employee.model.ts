export class EmployeeModel {
    public get createPersonal(): Array<any> {
        return [
            {
                id: 'MediaURL',
                label: 'MediaURL',
                name: 'MediaURL',
                type: 'link'
            },
            {
                id: 'FirstName',
                label: 'First Name',
                name: 'FirstName',
                type: 'text',
                required: true
            },
            {
                id: 'Gender',
                label: 'Gender',
                name: 'Gender',
                type: 'selected',
                data: []
            },
            {
                id: 'LastName',
                label: 'Last Name',
                name: 'LastName',
                type: 'text',
                required: true
            },
            {
                id: 'DOB',
                label: 'Date of birth',
                name: 'Date',
                type: 'date'
            },
            {
                id: 'JobTitle',
                label: 'JobTitle',
                name: 'JobTitle',
                type: 'text',
                data: []
            },
            {
                id: 'ProviderCode',
                label: 'Employee ID',
                name: 'ProviderCode',
                type: 'text',
                required: true
            },
            {
                id: 'Phone',
                label: 'Phone',
                name: 'Phone',
                type: 'text'
            },
            {
              id: 'NationalId',
              label: 'National ID',
              name: 'NationalId',
              type: 'text'
            },
            {
              id: 'Email',
              label: 'Email',
              name: 'Email',
              type: 'text',
              required: true
            },
            {
              id: 'Speciality',
              label: 'Speciality',
              name: 'Speciality',
              type: 'text'
            },
            {
              id: 'LanguageId',
              label: 'Language',
              name: 'LanguageId',
              type: 'selected',
              data: []
            },
            {
              id: 'LicenseNumber',
              label: 'License number',
              name: 'LicenseNumber',
              type: 'text'
            },
            {
              id: 'HomeAddress',
              label: 'Home address',
              name: 'HomeAddress',
              type: 'text'
            },
            {
              id: 'ClinicAddress',
              label: 'Clinic address',
              name: 'ClinicAddress',
              type: 'text'
            }
        ];
    }
    public get createEmergency(): Array<any> {
        return [
            {
                id: 'RelationshipFirstName',
                label: 'First Name',
                name: 'RelationshipFirstName',
                type: 'text'
            },
            {
                id: 'Relationship',
                label: 'Relationship',
                name: 'Relationship',
                type: 'text',
            },
            {
                id: 'RelationshipLastName',
                label: 'Last Name',
                name: 'RelationshipLastName',
                type: 'text'
            },
            {
                id: 'RelationshipPhone',
                label: 'Phone',
                name: 'RelationshipPhone',
                type: 'text',
            }
        ];
    }
    public get createRole(): Array<any> {
      return [
          {
              id: 'PositionId',
              label: 'Role',
              name: 'PositionId',
              type: 'selected',
              data: [],
              required: true
          },
          {
              id: 'Password',
              label: 'Password',
              name: 'Password',
              type: 'text',
          },
          // css thần thánh, éo biết sửa
          {
              id: 'RelationshipFirstName',
              label: 'First Name',
              name: 'RelationshipFirstName',
              type: 'text',
              hidden: true
          },
          {
              id: 'Relationship',
              label: 'Relationship',
              name: 'Relationship',
              type: 'text',
              hidden: true
          },
      ];
    }
    public get updateRole(): Array<any> {
      return [
        {
          id: 'PositionId',
          label: 'Role',
          name: 'PositionId',
          type: 'selected',
          data: []
      },
        // css thần thánh, éo biết sửa
          {
            id: 'Password',
            label: 'Password',
            name: 'Password',
            hidden: true,
        },
        {
            id: 'RelationshipFirstName',
            label: 'First Name',
            name: 'RelationshipFirstName',
            type: 'text',
            hidden: true
        },
        {
            id: 'Relationship',
            label: 'Relationship',
            name: 'Relationship',
            type: 'text',
            hidden: true
        },
      ];
    }
}
