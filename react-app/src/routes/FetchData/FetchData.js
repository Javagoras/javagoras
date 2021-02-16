import React, { Component } from 'react';
import { Table, Header, Container, Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], bank_accounts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderLoadingBankAccountsTable() {
    return (

      <div>
        <Table attached="top" celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Last Update</Table.HeaderCell>
              <Table.HeaderCell>Bank</Table.HeaderCell>
              <Table.HeaderCell>Account No.</Table.HeaderCell>
              <Table.HeaderCell>Holder Name</Table.HeaderCell>
              <Table.HeaderCell>Seller ID</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        </Table>

        <Dimmer.Dimmable as={Table} active attached="bottom">
          <Table.Body>
            <Table.Row>
              <Dimmer active inverted><Loader inverted content='Loading' /></Dimmer>
            </Table.Row>
            <Table.Row>
              <Table.Cell /><Table.Cell /><Table.Cell /><Table.Cell /><Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell /><Table.Cell /><Table.Cell /><Table.Cell /><Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell /><Table.Cell /><Table.Cell /><Table.Cell /><Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell /><Table.Cell /><Table.Cell /><Table.Cell /><Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell /><Table.Cell /><Table.Cell /><Table.Cell /><Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell /><Table.Cell /><Table.Cell /><Table.Cell /><Table.Cell />
            </Table.Row>
          </Table.Body>
        </Dimmer.Dimmable>
      </div>
    );
  }

  static renderBankAccountsTable(bank_accounts) {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Last Update</Table.HeaderCell>
            <Table.HeaderCell>Bank</Table.HeaderCell>
            <Table.HeaderCell>Account No.</Table.HeaderCell>
            <Table.HeaderCell>Holder Name</Table.HeaderCell>
            <Table.HeaderCell>Seller ID</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {bank_accounts.map(bank_account =>
            <Table.Row key={bank_account.id}>
              <Table.Cell>{bank_account.last_update}</Table.Cell>
              <Table.Cell>{bank_account.bank_full_name}</Table.Cell>
              <Table.Cell>{bank_account.account_no}</Table.Cell>
              <Table.Cell>{bank_account.account_holder_name}</Table.Cell>
              <Table.Cell>{bank_account.seller_id}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  }

  render() {
    let contents = this.state.loading
      ? FetchData.renderLoadingBankAccountsTable()
      : FetchData.renderBankAccountsTable(this.state.bank_accounts);

    return (
      <div>
        <Header as='h1'>Weather forecast</Header>
        <p>This component demonstrates fetching data from the server.</p>

        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const res = await axios.get('https://api.orders.ganhj.dev/bank-accounts');
    console.log(res);
    const response = await fetch('weatherforecast');
    const data = await response.json();
    console.log(data);
    this.setState({ forecasts: data, bank_accounts: res.data, loading: false });
  }
}
