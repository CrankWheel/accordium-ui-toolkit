/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ResponsiveTable, RTableColumn, RTableContent, RTableHeader, RTableHeaderColumn, RTableRow } from '../lib';

storiesOf('Table', module).add('Responsive', () => {
  class Example extends React.Component {
    state = {
      tableData: [
        {
          id: 1,
          name: 'Contract for the sale of good.pdf',
          fileType: 'pdf',
          lastUsed: '30/01/2019 03:20 pm',
          selected: false,
        },
        {
          id: 2,
          name: 'Contract for the sale of good longer name.pdf',
          fileType: 'pdf',
          lastUsed: '30/01/2019 03:20 pm',
          selected: true,
        },
        {
          id: 3,
          name: 'Contract for short.pdf',
          fileType: 'pdf',
          lastUsed: '30/01/2019 03:20 pm',
          selected: false,
        },
        {
          id: 4,
          name: 'Contract for the sale of good super long name.pdf',
          fileType: 'pdf',
          lastUsed: '30/01/2019 03:20 pm',
          selected: false,
        },
      ],
    };

    /* onChange = event => {
      const target = event.target;
      const value = parseFloat(target.value);
      const name = target.name;
      this.setState({ [name]: value }, () => console.log(this.state.firstValue));
    };
*/
    render() {
      const { tableData } = this.state;
      return (
        <div className="p1" style={{ width: '80%' }}>
          <ResponsiveTable tableLabel="My library">
            <RTableHeader>
              <RTableHeaderColumn xs={12} sm={6}>
                Name
              </RTableHeaderColumn>
              <RTableHeaderColumn xs={12} sm={4}>
                Last Used
              </RTableHeaderColumn>
              <RTableHeaderColumn xs={12} sm={2} />
            </RTableHeader>
            <RTableContent>
              {tableData.map(data => (
                <RTableRow>
                  <RTableColumn xs={12} sm={6}>
                    {data.name}
                  </RTableColumn>
                  <RTableColumn xs={12} sm={4}>
                    {data.lastUsed}
                  </RTableColumn>
                  <RTableColumn xs={12} sm={2}>
                    [selectable checkbox]: {data.selected}
                  </RTableColumn>
                </RTableRow>
              ))}
            </RTableContent>
          </ResponsiveTable>
        </div>
      );
    }
  }
  return <Example />;
});
