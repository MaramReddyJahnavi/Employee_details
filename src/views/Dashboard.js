import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";

class Dashboard extends Component {
  render() {
  const { employeeList = [] } = this.props;
  const columns = [
    {
        Header: "Id",
        accessor: "id",
        minWidth: 30
    },
    {
        Header: "Name",
        accessor: "name"
    },
    {
        Header: "Age",
        accessor: "age",
        minWidth: 30
    },
    {
        Header: "Gender",
        accessor: "id",
        minWidth: 80
    },
    {
        Header: "Email",
        accessor: "email",
    },
    {
        Header: "Phone Number",
        accessor: "phoneNo",
    },
  ];
    return (
      <div className="animated fadeIn">
        <Row className="margin-10">
          <Col className="col-12">
            <h2 className="text-center mt-2"> Employee Details </h2>
            <ReactTable
              data={employeeList}
              columns={columns}
              showPagination={true}
              sortable={true}
              defaultPageSize={10}
              filterable={false}
              className=" -highlight mt-20"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    employeeList: state.userDetails ? state.userDetails.employeeList : null
  }
}

export default connect(mapStateToProps)(Dashboard);