import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useState } from "react";
import RentalHeader from "components/Headers/RentalHeader.js";

import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Rentals = () => {
  const [prodropdownOpen, setproDropdownOpen] = React.useState(false);
  const [bankdropdownOpen, setbankDropdownOpen] = React.useState(false);
  const [userdropdownOpen, setuserDropdownOpen] = React.useState(false);
  const [baddropdownOpen, setbadDropdownOpen] = React.useState(false);
  const [bathdropdownOpen, setbathDropdownOpen] = React.useState(false);

  const toggle1 = () => setproDropdownOpen((prevState) => !prevState);
  const toggle2 = () => setbankDropdownOpen((prevState) => !prevState);
  const toggle3 = () => setuserDropdownOpen((prevState) => !prevState);
  const toggle4 = () => setbadDropdownOpen((prevState) => !prevState);
  const toggle5 = () => setbathDropdownOpen((prevState) => !prevState);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    // setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const handlePropertyTypeSelect = (propertyType) => {
    setSelectedPropertyType(propertyType);
    localStorage.setItem("propertyType", propertyType);
  };

  const [selectedOperatingAccount, setSelectedOperatingAccount] = useState("");
  const handleOperatingAccount = (operatingAccount) => {
    setSelectedOperatingAccount(operatingAccount);
    localStorage.setItem("operatingAccount", operatingAccount);
  };

  // ==================================================================

  let [editData, setEditData] = React.useState({});
  let [id, setId] = React.useState();

  //   auto form fill up in edit
  let seletedEditData = async (datas) => {
    // setModalShowForPopupForm(true);
    setId(datas._id);
    setEditData(datas);
  };
  let navigate = useNavigate();
  const handleSubmit = async (values) => {
    console.log(values, "values");
    try {
      values["property_type"] = localStorage.getItem("propertyType");
      const res = await axios.post(
        "https://rms-node-9f9ec5119d40.herokuapp.com/rentals/rentals",
        values
      );

      if (res.data.statusCode === 200) {
        navigate("/admin/tables");
        alert(res.data.message);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let rentalsFormik = useFormik({
    initialValues: {
      rental_adress: "",
      rental_units: "",
      propertyType: "",
    },
    validationSchema: yup.object({
      rental_adress: yup.string().required("Required"),
      rental_units: yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
      console.log(values, "values");
    },
  });

  return (
    <>
      <RentalHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card
              className="bg-secondary shadow"
              onSubmit={rentalsFormik.handleSubmit}
            >
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">New Property</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    {/* <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Settings
                      </Button> */}
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form role="form">
                  <h6 className="heading-small text-muted mb-4">
                    Property information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-property"
                          >
                            What is the property type?
                          </label>
                          <br />
                          <br />
                          {/* <Dropdown isOpen={prodropdownOpen} toggle={toggle1}>
                            <DropdownToggle
                              caret
                              style={{ width: "150px" }}
                              name="rental_city"
                              onBlur={rentalsFormik.handleBlur}
                              onChange={rentalsFormik.handleChange}
                              value={rentalsFormik.values.property_type}
                            >
                              Select &nbsp;&nbsp;&nbsp;&nbsp;
                            </DropdownToggle>
                            <DropdownMenu style={{ width: "200px" }}>
                              <DropdownItem header style={{ color: "blue" }}>
                                Residential
                              </DropdownItem>
                              <DropdownItem>Townhome</DropdownItem>
                              <DropdownItem>Multi-family</DropdownItem>
                              <DropdownItem>Single-family</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem header style={{ color: "blue" }}>
                                Commercial
                              </DropdownItem>
                              <DropdownItem>Industrial</DropdownItem>
                              <DropdownItem>Office</DropdownItem>
                              <DropdownItem>Retail</DropdownItem>
                            </DropdownMenu>
                            {rentalsFormik.touched.property_type &&
                            rentalsFormik.errors.property_type ? (
                              <div style={{ color: "red" }}>
                                {rentalsFormik.errors.property_type}
                              </div>
                            ) : null}
                          </Dropdown> */}

                          <Dropdown isOpen={prodropdownOpen} toggle={toggle1}>
                            <DropdownToggle caret style={{ width: "150px" }}>
                              {selectedPropertyType
                                ? selectedPropertyType
                                : "Select"}
                            </DropdownToggle>
                            <DropdownMenu
                              style={{ width: "200px" }}
                              name="property_type"
                              onBlur={rentalsFormik.handleBlur}
                              onChange={rentalsFormik.handleChange}
                              value={rentalsFormik.values.property_type}
                            >
                              {rentalsFormik.touched.property_type &&
                              rentalsFormik.errors.property_type ? (
                                <div style={{ color: "red" }}>
                                  {rentalsFormik.errors.property_type}
                                </div>
                              ) : null}
                              <DropdownItem
                                onClick={() =>
                                  handlePropertyTypeSelect("Residential")
                                }
                              >
                                Residential
                              </DropdownItem>
                              <DropdownItem
                                onClick={() =>
                                  handlePropertyTypeSelect("Townhome")
                                }
                              >
                                Townhome
                              </DropdownItem>
                              <DropdownItem
                                onClick={() =>
                                  handlePropertyTypeSelect("Multi-family")
                                }
                              >
                                Multi-family
                              </DropdownItem>
                              <DropdownItem
                                onClick={() =>
                                  handlePropertyTypeSelect("Single-family")
                                }
                              >
                                Single-family
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem header style={{ color: "blue" }}>
                                Commercial
                              </DropdownItem>
                              <DropdownItem
                                onClick={() =>
                                  handlePropertyTypeSelect("Industrial")
                                }
                              >
                                Industrial
                              </DropdownItem>
                              <DropdownItem
                                onClick={() =>
                                  handlePropertyTypeSelect("Office")
                                }
                              >
                                Office
                              </DropdownItem>
                              <DropdownItem
                                onClick={() =>
                                  handlePropertyTypeSelect("Retail")
                                }
                              >
                                Retail
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </FormGroup>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            What is the street address?
                          </label>
                          <br />
                          <br />
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-address"
                              placeholder="Address"
                              type="text"
                              name="rental_adress"
                              onBlur={rentalsFormik.handleBlur}
                              onChange={rentalsFormik.handleChange}
                              value={rentalsFormik.values.rental_adress}
                            />
                            {rentalsFormik.touched.rental_adress &&
                            rentalsFormik.errors.rental_adress ? (
                              <div style={{ color: "red" }}>
                                {rentalsFormik.errors.rental_adress}
                              </div>
                            ) : null}
                          </FormGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-city"
                            placeholder="New York"
                            type="text"
                            name="rental_city"
                            onBlur={rentalsFormik.handleBlur}
                            onChange={rentalsFormik.handleChange}
                            value={rentalsFormik.values.rental_city}
                          />
                          {rentalsFormik.touched.rental_city &&
                          rentalsFormik.errors.rental_city ? (
                            <div style={{ color: "red" }}>
                              {rentalsFormik.errors.rental_city}
                            </div>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-country"
                            placeholder="United States"
                            type="text"
                            name="rental_country"
                            onBlur={rentalsFormik.handleBlur}
                            onChange={rentalsFormik.handleChange}
                            value={rentalsFormik.values.rental_country}
                          />
                          {rentalsFormik.touched.rental_country &&
                          rentalsFormik.errors.rental_country ? (
                            <div style={{ color: "red" }}>
                              {rentalsFormik.errors.rental_country}
                            </div>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                            name="rental_postcode"
                            onBlur={rentalsFormik.handleBlur}
                            onChange={rentalsFormik.handleChange}
                            value={rentalsFormik.values.rental_postcode}
                          />
                          {rentalsFormik.touched.rental_postcode &&
                          rentalsFormik.errors.rental_postcode ? (
                            <div style={{ color: "red" }}>
                              {rentalsFormik.errors.rental_postcode}
                            </div>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Owner information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Who is the property owner?
                          </label>
                          <br />
                          <br />
                          <label
                            className="label2"
                            style={{ fontSize: "0.7rem" }}
                          >
                            This information wiil be used to help prepare owner
                            drawns and 1099s.
                          </label>
                          <br />
                          <span
                            onClick={handleClickOpen}
                            style={{
                              cursor: "pointer",
                              fontSize: "14px",
                              fontFamily: "monospace",
                              color: "blue",
                            }}
                          >
                            <b style={{ fontSize: "20px" }}>+</b> Add rental
                            owner
                          </span>
                          <Dialog open={open} onClose={handleClose}>
                            <DialogTitle style={{ background: "#F0F8FF" }}>
                              Add rental owner
                            </DialogTitle>
                            <DialogContent
                              style={{ width: "100%", maxWidth: "500px" }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  margin: "30px 0",
                                }}
                              >
                                <Checkbox
                                  onClick={handleChange}
                                  style={{ marginRight: "10px" }}
                                />
                                <span>Choose an existing rental owner</span>
                              </div>

                              <div
                                className="formInput"
                                style={{ margin: "10px 10px" }}
                              >
                                <label
                                  className="label"
                                  style={{
                                    fontFamily: "monospace",
                                    fontSize: "14px",
                                  }}
                                >
                                  NAME *
                                </label>
                                <br />
                                <TextField
                                  id="standard-multiline-static"
                                  className="popinput"
                                  variant="standard"
                                  type="text"
                                  placeholder="First"
                                  style={{ marginRight: "10px", flex: 1 }} // Adjust flex property
                                  name="rentalOwner_firstName"
                                  onBlur={rentalsFormik.handleBlur}
                                  onChange={rentalsFormik.handleChange}
                                  value={
                                    rentalsFormik.values.rentalOwner_firstName
                                  }
                                />
                                {rentalsFormik.touched.rentalOwner_firstName &&
                                rentalsFormik.errors.rentalOwner_firstName ? (
                                  <div style={{ color: "red" }}>
                                    {rentalsFormik.errors.rentalOwner_firstName}
                                  </div>
                                ) : null}
                                <TextField
                                  id="standard-multiline-static"
                                  className="popinput"
                                  variant="standard"
                                  type="text"
                                  placeholder="Last"
                                  style={{ flex: 1 }} // Adjust flex property
                                  name="rentalOwner_lastName"
                                  onBlur={rentalsFormik.handleBlur}
                                  onChange={rentalsFormik.handleChange}
                                  value={
                                    rentalsFormik.values.rentalOwner_lastName
                                  }
                                />
                                {rentalsFormik.touched.rentalOwner_lastName &&
                                rentalsFormik.errors.rentalOwner_lastName ? (
                                  <div style={{ color: "red" }}>
                                    {rentalsFormik.errors.rentalOwner_lastName}
                                  </div>
                                ) : null}
                              </div>

                              <div
                                className="formInput"
                                style={{ margin: "30px 10px" }}
                              >
                                <label
                                  className="label"
                                  style={{
                                    fontFamily: "monospace",
                                    fontSize: "14px",
                                  }}
                                >
                                  COMPANY NAME
                                </label>
                                <br />
                                <TextField
                                  id="standard-multiline-static"
                                  className="popinput"
                                  variant="standard"
                                  type="text"
                                  style={{ marginRight: "10px", flex: 1 }} // Adjust flex property
                                  name="rentalOwner_companyName"
                                  onBlur={rentalsFormik.handleBlur}
                                  onChange={rentalsFormik.handleChange}
                                  value={
                                    rentalsFormik.values.rentalOwner_companyName
                                  }
                                />
                                {rentalsFormik.touched
                                  .rentalOwner_companyName &&
                                rentalsFormik.errors.rentalOwner_companyName ? (
                                  <div style={{ color: "red" }}>
                                    {
                                      rentalsFormik.errors
                                        .rentalOwner_companyName
                                    }
                                  </div>
                                ) : null}
                                <Checkbox
                                  onClick={handleChange}
                                  style={{ marginRight: "10px" }}
                                />
                                <span>Company</span>
                              </div>
                              <div
                                className="formInput"
                                style={{ margin: "30px 10px" }}
                              >
                                <label
                                  className="label"
                                  style={{
                                    fontFamily: "monospace",
                                    fontSize: "14px",
                                  }}
                                >
                                  PRIMARY EMAIL
                                </label>
                                <br />
                                <TextField
                                  id="standard-multiline-static"
                                  className="popinput"
                                  variant="standard"
                                  type="text"
                                  style={{
                                    marginRight: "10px",
                                    marginTop: "5px",
                                    flex: 1,
                                  }}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <EmailIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                  name="rentalOwner_primaryEmail"
                                  onBlur={rentalsFormik.handleBlur}
                                  onChange={rentalsFormik.handleChange}
                                  value={
                                    rentalsFormik.values
                                      .rentalOwner_primaryEmail
                                  }
                                />
                                {rentalsFormik.touched
                                  .rentalOwner_primaryEmail &&
                                rentalsFormik.errors
                                  .rentalOwner_primaryEmail ? (
                                  <div style={{ color: "red" }}>
                                    {
                                      rentalsFormik.errors
                                        .rentalOwner_primaryEmail
                                    }
                                  </div>
                                ) : null}
                              </div>
                              <div
                                className="formInput"
                                style={{ margin: "30px 10px" }}
                              >
                                <label
                                  className="label"
                                  style={{
                                    fontFamily: "monospace",
                                    fontSize: "14px",
                                  }}
                                >
                                  PHONE NUMBERS
                                </label>
                                <br />
                                <TextField
                                  id="standard-multiline-static"
                                  className="popinput"
                                  variant="standard"
                                  type="number"
                                  style={{
                                    marginBottom: "30px",
                                    marginRight: "10px",
                                    marginTop: "5px",
                                    flex: 1,
                                  }}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <PhoneIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                  name="rentalOwner_phoneNumber"
                                  onBlur={rentalsFormik.handleBlur}
                                  onChange={rentalsFormik.handleChange}
                                  value={
                                    rentalsFormik.values.rentalOwner_phoneNumber
                                  }
                                />
                                {rentalsFormik.touched
                                  .rentalOwner_phoneNumber &&
                                rentalsFormik.errors.rentalOwner_phoneNumber ? (
                                  <div style={{ color: "red" }}>
                                    {
                                      rentalsFormik.errors
                                        .rentalOwner_phoneNumber
                                    }
                                  </div>
                                ) : null}

                                <TextField
                                  id="standard-multiline-static"
                                  className="popinput"
                                  variant="standard"
                                  type="number"
                                  style={{
                                    marginBottom: "30px",
                                    marginRight: "10px",
                                    flex: 1,
                                  }}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <HomeIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                  name="rentalOwner_homeNumber"
                                  onBlur={rentalsFormik.handleBlur}
                                  onChange={rentalsFormik.handleChange}
                                  value={
                                    rentalsFormik.values.rentalOwner_homeNumber
                                  }
                                />
                                {rentalsFormik.touched.rentalOwner_homeNumber &&
                                rentalsFormik.errors.rentalOwner_homeNumber ? (
                                  <div style={{ color: "red" }}>
                                    {
                                      rentalsFormik.errors
                                        .rentalOwner_homeNumber
                                    }
                                  </div>
                                ) : null}

                                <TextField
                                  id="standard-multiline-static"
                                  className="popinput"
                                  variant="standard"
                                  type="number"
                                  style={{
                                    marginBottom: "10px",
                                    marginRight: "10px",
                                    flex: 1,
                                  }}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <BusinessIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                                  name="rentalOwner_businessNumber"
                                  onBlur={rentalsFormik.handleBlur}
                                  onChange={rentalsFormik.handleChange}
                                  value={
                                    rentalsFormik.values
                                      .rentalOwner_businessNumber
                                  }
                                />
                                {rentalsFormik.touched
                                  .rentalOwner_businessNumber &&
                                rentalsFormik.errors
                                  .rentalOwner_businessNumber ? (
                                  <div style={{ color: "red" }}>
                                    {
                                      rentalsFormik.errors
                                        .rentalOwner_businessNumber
                                    }
                                  </div>
                                ) : null}
                              </div>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose}>Cancel</Button>
                              <Button onClick={handleClose}>Add</Button>
                            </DialogActions>
                          </Dialog>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Bank Account Details
                  </h6>
                  <div className="pl-lg-4">
                    <label
                      className="form-control-label"
                      htmlFor="input-property"
                    >
                      What is the property's primary bank account?
                    </label>
                    <br />
                    <br />
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-account"
                          >
                            Operating Account
                          </label>
                          <br />
                          {/* <Dropdown isOpen={bankdropdownOpen} toggle={toggle2}>
                            <DropdownToggle caret style={{ width: "150px" }}>
                              Select 
                              <DropdownMenu style={{ width: "200px" }}>
                                <DropdownItem>JPMorgan Chase Bank</DropdownItem>
                                <DropdownItem>Bank of America</DropdownItem>
                                <DropdownItem>Wells Fargo Bank</DropdownItem>
                                <DropdownItem>Citibank</DropdownItem>
                                <DropdownItem>U.S.Bank</DropdownItem>
                                <DropdownItem>Capital One</DropdownItem>
                              </DropdownMenu>
                            </DropdownToggle>
                          </Dropdown> */}
                          <Dropdown isOpen={bankdropdownOpen} toggle={toggle2}>
                            <DropdownToggle caret style={{ width: "150px" }}>
                              Select 
                            </DropdownToggle>
                            <DropdownMenu style={{ width: "200px" }}>
                              <DropdownItem>JPMorgan Chase Bank</DropdownItem>
                              <DropdownItem>Bank of America</DropdownItem>
                              <DropdownItem>Wells Fargo Bank</DropdownItem>
                              <DropdownItem>Citibank</DropdownItem>
                              <DropdownItem>U.S.Bank</DropdownItem>
                              <DropdownItem>Capital One</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </FormGroup>
                      </Col>
                      <br />
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Property Reserve
                          </label>
                          <br />
                          <FormGroup>
                            <Input
                              className="form-control-alternative"
                              id="input-reserve"
                              placeholder="$0.00"
                              type="number"
                              name="rentalOwner_propertyReserve"
                              onBlur={rentalsFormik.handleBlur}
                              onChange={rentalsFormik.handleChange}
                              value={
                                rentalsFormik.values.rentalOwner_propertyReserve
                              }
                            />
                            {rentalsFormik.touched
                              .rentalOwner_propertyReserve &&
                            rentalsFormik.errors.rentalOwner_propertyReserve ? (
                              <div style={{ color: "red" }}>
                                {
                                  rentalsFormik.errors
                                    .rentalOwner_propertyReserve
                                }
                              </div>
                            ) : null}
                          </FormGroup>
                        </FormGroup>
                      </Col>
                    </Row>{" "}
                    <br />
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Who will be the primary manager of this property?
                          </label>
                          <br />
                          <br />
                          <label
                            className="label2"
                            style={{ fontSize: "0.7rem" }}
                          >
                            If the staff member has not yet been added as a user
                            in your account,they can be added to the
                            account,then as the manager later through the
                            property's summary details.
                          </label>
                          <br />
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Manager (Optional)
                          </label>
                          <br />
                          <FormGroup>
                            <Dropdown
                              isOpen={userdropdownOpen}
                              toggle={toggle3}
                            >
                              <DropdownToggle caret style={{ width: "100%" }}>
                                Select a staff member.. &nbsp;&nbsp;
                              </DropdownToggle>
                              <DropdownMenu style={{ width: "200px" }}>
                                <DropdownItem>John Deo</DropdownItem>
                                <DropdownItem>Noa Jonas</DropdownItem>
                                <DropdownItem>James Mary</DropdownItem>
                                <DropdownItem>Richard Susan</DropdownItem>
                                <DropdownItem>Thomas Sarah</DropdownItem>
                                <DropdownItem>Charles Lisa</DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </FormGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Unit</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-address"
                      >
                        Enter Units
                      </label>
                      <br />
                      <br />
                      <Row>
                        <Col lg="2">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Units *
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-unit"
                              placeholder="102"
                              type="number"
                              name="rental_units"
                              onBlur={rentalsFormik.handleBlur}
                              onChange={rentalsFormik.handleChange}
                              value={rentalsFormik.values.rental_units}
                            />
                            {rentalsFormik.touched.rental_units &&
                            rentalsFormik.errors.rental_units ? (
                              <div style={{ color: "red" }}>
                                {rentalsFormik.errors.rental_units}
                              </div>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-unitadd"
                            >
                              Unit Address *
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-unitadd"
                              placeholder="A12 Bhaskar Enclave, Phase 2 - 102"
                              type="text"
                              name="rental_unitsAdress"
                              onBlur={rentalsFormik.handleBlur}
                              onChange={rentalsFormik.handleChange}
                              value={rentalsFormik.values.rental_unitsAdress}
                            />
                            {rentalsFormik.touched.rental_unitsAdress &&
                            rentalsFormik.errors.rental_unitsAdress ? (
                              <div style={{ color: "red" }}>
                                {rentalsFormik.errors.rental_unitsAdress}
                              </div>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Rooms
                            </label>
                            <br />
                            <Dropdown isOpen={baddropdownOpen} toggle={toggle4}>
                              <DropdownToggle caret style={{ width: "100%" }}>
                                6 Bed &nbsp;&nbsp;
                              </DropdownToggle>
                              <DropdownMenu style={{ width: "200px" }}>
                                <DropdownItem>2 Bed</DropdownItem>
                                <DropdownItem>3 Bed</DropdownItem>
                                <DropdownItem>4 Bed</DropdownItem>
                                <DropdownItem>5 Bed</DropdownItem>
                                <DropdownItem>6 Bed</DropdownItem>
                                <DropdownItem>7 Bed</DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                            &nbsp; &nbsp;
                            <Dropdown
                              isOpen={bathdropdownOpen}
                              toggle={toggle5}
                            >
                              <DropdownToggle caret style={{ width: "100%" }}>
                                5 Bath &nbsp;&nbsp;
                              </DropdownToggle>
                              <DropdownMenu style={{ width: "200px" }}>
                                <DropdownItem>2 Bath</DropdownItem>
                                <DropdownItem>3 Bath</DropdownItem>
                                <DropdownItem>4 Bath</DropdownItem>
                                <DropdownItem>5 Bath</DropdownItem>
                                <DropdownItem>6 Bath</DropdownItem>
                                <DropdownItem>7 Bath</DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </FormGroup>
                        </Col>
                        <Col lg="2">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-unitadd"
                            >
                              Soft
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-unitadd"
                              placeholder="3000"
                              type="number"
                              name="rental_soft"
                              onBlur={rentalsFormik.handleBlur}
                              onChange={rentalsFormik.handleChange}
                              value={rentalsFormik.values.rental_soft}
                            />
                            {rentalsFormik.touched.rental_soft &&
                            rentalsFormik.errors.rental_soft ? (
                              <div style={{ color: "red" }}>
                                {rentalsFormik.errors.rental_soft}
                              </div>
                            ) : null}
                          </FormGroup>
                        </Col>

                        {/* <Col xs="8">
                        <h3 className="mb-0">New Property</h3>
                        </Col> */}
                        {/* <Col className="text-right" xs="4">
                        <Button
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                        >
                            Add Lease
                        </Button>
                        </Col> */}
                      </Row>
                    </FormGroup>
                  </div>

                  <Button
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    style={{ background: "white", color: "black" }}
                  >
                    Add another unit
                  </Button>
                  <br />
                  <br />
                  {/* <Button
                    type="submit"
                    color="primary"
                    href="#pablo"
                    // onClick={(e) => e.preventDefault()}
                    size="sm"
                    style={{ background: "green" }}
                  >
                    Create Property
                  </Button> */}

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ background: "green" }}
                  >
                    Create Property
                  </button>
                  <Button
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    style={{ background: "white", color: "black" }}
                  >
                    Cancel
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Rentals;
