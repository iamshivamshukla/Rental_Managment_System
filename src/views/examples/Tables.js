/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  // CardFooter,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // DropdownToggle,
  // Media,
  // Pagination,
  // PaginationItem,
  // PaginationLink,
  // Progress,
  Table,
  Container,
  Row,

  // UncontrolledTooltip,
} from "reactstrap";
// core components
import PropertyHeader from "components/Headers/PropertyHeader";
import * as React from "react";
import axios from "axios";

const Tables = () => {
  let [rentalsData, setRentalsData] = React.useState();

  let getRentalsData = async () => {
    let responce = await axios.get("https://rms-node-9f9ec5119d40.herokuapp.com/rentals/rentals");
    setRentalsData(responce.data.data);
  };

  React.useEffect(() => {
    getRentalsData();
  }, []);
  return (
    <>
      <PropertyHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Properties</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    {/* <th scope="col">Property</th> */}
                    <th scope="col">Location</th>
                    <th scope="col">Rental Owners</th>
                    <th scope="col">Rental CompanyName</th>
                    {/* <th scope="col">Manager</th> */}
                    <th scope="col">Types</th>
                    <th scope="col">RentalOwner PrimaryEmail</th>
                    <th scope="col">RentalOwner PhoneNumber</th>
                    {/* <th scope="col" /> */}
                  </tr>
                </thead>
                <tbody>
                  {rentalsData?.map((rental) => (
                    <tr key={rental._id}>
                      <td>
                        <span className="mb-0 text-sm">
                          {rental.rental_adress}
                        </span>
                        <span className="mb-0 text-sm">
                          {rental.rentalOwner_companyName}
                        </span>
                        {/* <span className="mb-0 text-sm">
                          {rental.rentalOwner_companyName}
                        </span> */}
                        {/* <span className="mb-0 text-sm">
                          {rental.rentalOwner_firstName}
                        </span> */}
                      </td>
                      <td>{`${rental.rentalOwner_firstName}, ${rental.rentalOwner_lastName}`}</td>
                      <td>{rental.rentalOwner_companyName}</td>
                      <td>{`${rental.rental_city}, ${rental.rental_country}`}</td>
                      <td>{rental.rentalOwner_primaryEmail}</td>
                      <td>{rental.rentalOwner_phoneNumber}</td>
                      {/* Add other table cells here */}
                    </tr>
                  ))}

                  {/* <tr>
                    <th scope="row">
                      <span className="mb-0 text-sm">1 Clipper Court</span>
                    </th>
                    <td>Newerk, DE</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        NDG 302 LLC
                      </Badge>
                    </td>
                    <td>
                      John Deo
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        Residential,Townhome
                      </div>
                    </td>
                    <td className="text-right">U.S.Bank</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span className="mb-0 text-sm">2 Clipper Court</span>
                    </th>
                    <td>Newerk, DE</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        NDG 302 LLC
                      </Badge>
                    </td>
                    <td>
                      John Deo
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        Residential,Townhome
                      </div>
                    </td>
                    <td className="text-right">U.S.Bank</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span className="mb-0 text-sm">3 Clipper Court</span>
                    </th>
                    <td>Newerk, DE</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        NDG 302 LLC
                      </Badge>
                    </td>
                    <td>
                    
                      John Deo
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        Residential,Townhome
                      </div>
                    </td>
                    <td className="text-right">U.S.Bank</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span className="mb-0 text-sm">4 Clipper Court</span>
                    </th>
                    <td>Newerk, DE</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        NDG 302 LLC
                      </Badge>
                    </td>
                    <td>
                    
                      John Deo
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        Residential,Townhome
                      </div>
                    </td>
                    <td className="text-right">U.S.Bank</td>
                  </tr> */}
                </tbody>
              </Table>
              {/* <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter> */}
            </Card>
          </div>
        </Row>
        <br />
        <br />
        {/* Dark table */}
        {/* <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">Card tables</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Status</th>
                    <th scope="col">Users</th>
                    <th scope="col">Completion</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/bootstrap.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Argon Design System
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$2,500 USD</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        pending
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip731399078"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-1-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731399078"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip491083084"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-2-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip491083084"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip528540780"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-3-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip528540780"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip237898869"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip237898869"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-warning"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/angular.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Angular Now UI Kit PRO
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$1,800 USD</td>
                    <td>
                      <Badge color="" className="badge-dot">
                        <i className="bg-success" />
                        completed
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip188614932"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-1-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip188614932"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip66535734"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-2-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip delay={0} target="tooltip66535734">
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip427561578"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-3-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip427561578"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip904098289"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip904098289"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <Progress
                            max="100"
                            value="100"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/sketch.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Black Dashboard</span>
                        </Media>
                      </Media>
                    </th>
                    <td>$3,150 USD</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-danger" />
                        delayed
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip707904950"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-1-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip707904950"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip353988222"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-2-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip353988222"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip467171202"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-3-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip467171202"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip362118155"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip362118155"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">72%</span>
                        <div>
                          <Progress
                            max="100"
                            value="72"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/react.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            React Material Dashboard
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$4,400 USD</td>
                    <td>
                      <Badge color="" className="badge-dot">
                        <i className="bg-info" />
                        on schedule
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip226319315"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-1-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip226319315"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip711961370"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-2-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip711961370"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip216246707"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-3-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip216246707"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip638048561"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip638048561"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">90%</span>
                        <div>
                          <Progress
                            max="100"
                            value="90"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/vue.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Vue Paper UI Kit PRO
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$2,200 USD</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        completed
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip781594051"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-1-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip781594051"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip840372212"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-2-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip840372212"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip497647175"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-3-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip497647175"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip951447946"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip951447946"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <Progress
                            max="100"
                            value="100"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row> */}
      </Container>
    </>
  );
};

export default Tables;
