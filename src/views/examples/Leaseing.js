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
// import RentalHeader from "components/Headers/RentalHeader.js";
import TenantsHeader from "components/Headers/TenantsHeader";
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
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { FormControlLabel, Switch } from '@mui/material';

const Leaseing = () => {
  const [prodropdownOpen, setproDropdownOpen] = React.useState(false);
  const [bankdropdownOpen, setbankDropdownOpen] = React.useState(false);
  const [userdropdownOpen, setuserDropdownOpen] = React.useState(false);
  const [baddropdownOpen, setbadDropdownOpen] = React.useState(false);
  const [bathdropdownOpen, setbathDropdownOpen] = React.useState(false);
  const [alignment, setAlignment] = React.useState("web");

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

  //   const handleChange = (e) => {
  //     // setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  //   };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <TenantsHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          {/* <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("../../assets/img/theme/team-4-800x800.jpg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based
                      Nick Murphy — writes, performs and records all of his own
                      music.
                    </p>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Show more
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col> */}
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Add lease</h3>
                    
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
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    signature Status
                  </h6>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                  >
                    <ToggleButton value="web">Signed</ToggleButton>
                    {/* <ToggleButton value="android">Android</ToggleButton> */}
                    <ToggleButton value="ios">Unsigned</ToggleButton>
                  </ToggleButtonGroup>
                  <br />
                  <br />
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-property"
                          >
                            Lease details
                          </label>
                          <br />
                          <select
                            className="form-select form-select-sm"
                            id="input-property"
                            aria-label=".form-select-sm example"
                          >
                            <option selected>Select property</option>
                            <option value="1">1 Clipper Count</option>
                            <option value="2">1 Fresconi Court</option>
                            <option value="3">10 madison Drive</option>
                            <option value="4">107 broad street</option>
                            <option value="5">11 Aarcher circle</option>
                            <option value="6">12 Alcott Drive</option>
                            <option value="7">12 alcott Drive</option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-property"
                          >
                            Lease Type
                          </label>
                          <br />
                          <select
                            className="form-select form-select-sm"
                            id="input-property"
                            aria-label=".form-select-sm example"
                          >
                            <option selected>Select Type</option>
                            <option value="1">fixed</option>
                            <option value="2">Fixed wirillover</option>
                            <option value="3">At-will month-to-month</option>
                          </select>
                        </FormGroup>
                      </Col>

                      <Col lg="2">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-unitadd"
                          >
                            START DATE
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-unitadd"
                            placeholder="3000"
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="2">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-unitadd"
                          >
                            END DATE
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-unitadd"
                            placeholder="3000"
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Tenants and Consigner
                          </label>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col lg="4">
                    <FormGroup>
                      <span
                        onClick={handleClickOpen}
                        style={{
                          cursor: "pointer",
                          fontSize: "14px",
                          fontFamily: "monospace",
                          color: "blue",
                        }}
                      >
                        <b style={{ fontSize: "20px" }}>+</b> Add Tenants or Consigner
                      </span>
                      <Dialog open={open} onClose={handleClose}>
                        <DialogTitle style={{ background: "#F0F8FF" }}>
                        Add Tenants or Consigner
                        </DialogTitle>
                        <DialogContent
                          style={{ width: "100%", maxWidth: "500px" }}
                        >
                          {/* <div
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
                          </div> */}

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
                    Rent (Optional)
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-property"
                          >
                            Rent cycle
                          </label>
                          <br />
                          <select
                            className="form-select form-select-sm"
                            id="input-property"
                            aria-label=".form-select-sm example"
                          >
                            <option selected>monthly</option>
                            <option value="1">Daily</option>
                            <option value="2">weekly</option>
                            <option value="3">Every Two Weeks</option>
                            <option value="4">Monthly</option>
                            <option value="5">Every Two Months</option>
                            <option value="6">Quarterly</option>
                          </select>
                        </FormGroup>
                       
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}

                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="7">
                        <FormGroup>
                          <Row>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  Amount
                                </label>
                                <br />
                                <FormGroup>
                                  <Input
                                    className="form-control-alternative"
                                    id="input-reserve"
                                    placeholder="$0.00"
                                    type="number"
                                  />
                                </FormGroup>
                              </FormGroup>
                            </Col>
                            <Col lg="5">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-property"
                                >
                                  Account
                                </label>
                                <br />
                                <select
                                  className="form-select form-select-sm"
                                  id="input-property"
                                  aria-label=".form-select-sm example"
                                >
                                  <option selected>Rent income</option>
                                  <option value="1">
                                    Application Fee Income
                                  </option>
                                  <option value="2">
                                    Association Fee Income
                                  </option>
                                  <option value="3">
                                    Clearing and maint Income
                                  </option>
                                  <option value="4">Convenience Fee</option>
                                  <option value="5">Count Fee</option>
                                </select>
                              </FormGroup>
                            </Col>

                            <Col lg="3">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-unitadd"
                                >
                                  Next Due Date
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-unitadd"
                                  placeholder="3000"
                                  type="date"
                                />
                              </FormGroup>
                            </Col>

                            <Col lg="5">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-unitadd"
                                >
                                  Memo
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-unitadd"
                                  placeholder="if left blank , will show Rent "
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </FormGroup>
                      </Col>
                    </Row>{" "}
                    <Row>
                      <Col md="5">
                        <FormGroup>
                          <span
                            onClick={handleClickOpen}
                            style={{
                              cursor: "pointer",
                              fontSize: "14px",
                              fontFamily: "monospace",
                              color: "blue",
                            }}
                          >
                            <b style={{ fontSize: "20px" }}>+</b> split rent
                            charge
                          </span>
                          <Dialog open={open} onClose={handleClose}>
                            <DialogTitle style={{ background: "#F0F8FF" }}>
                              split rent charge
                            </DialogTitle>
                            <DialogContent
                              style={{ width: "100%", maxWidth: "500px" }}
                            >
                              {/* <div
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
                              </div> */}

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
                  {/* Description */}
                  {/* <h6 className="heading-small text-muted mb-4">Unit</h6> */}
                  <div className="pl-lg-2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-address"
                      >
                        Security Deposite (Optional)
                      </label>
                      <br />
                      <br />
                      <Row>
                        <Col lg="2">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-unitadd"
                            >
                              Next Due Date
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-unitadd"
                              placeholder="3000"
                              type="date"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="2">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Amount
                            </label>
                            <br />
                            <FormGroup>
                              <Input
                                className="form-control-alternative"
                                id="input-reserve"
                                placeholder="$0.00"
                                type="number"
                              />
                            </FormGroup>
                          </FormGroup>
                        </Col>

                        <Col lg="7">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-unitadd"
                            >
                              {/* Memo */}
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-unitadd"
                              placeholder="Don't forget to record the panyment once you have connected the deposite "
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </FormGroup>
                  </div>
                </Form>
                <hr />
                <Row>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-address"
                      >
                        Charges (optional)
                      </label>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="2">
                    <FormGroup>
                      <span
                        onClick={handleClickOpen}
                        style={{
                          cursor: "pointer",
                          fontSize: "14px",
                          fontFamily: "monospace",
                          color: "blue",
                        }}
                      >
                        <b style={{ fontSize: "20px" }}>+</b> Add Recurring
                      </span>
                      <Dialog open={open} onClose={handleClose}>
                        <DialogTitle style={{ background: "#F0F8FF" }}>
                          Add Recurring
                        </DialogTitle>
                        <DialogContent
                          style={{ width: "100%", maxWidth: "500px" }}
                        >
                          {/* <div
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
                          </div> */}

                         
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>Cancel</Button>
                          <Button onClick={handleClose}>Add</Button>
                        </DialogActions>
                      </Dialog>
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <span
                        onClick={handleClickOpen}
                        style={{
                          cursor: "pointer",
                          fontSize: "14px",
                          fontFamily: "monospace",
                          color: "blue",
                        }}
                      >
                        <b style={{ fontSize: "20px" }}>+</b> Add one Time
                        charge
                      </span>
                      <Dialog open={open} onClose={handleClose}>
                        <DialogTitle style={{ background: "#F0F8FF" }}>
                        Add one Time charge
                        </DialogTitle>
                        <DialogContent
                          style={{ width: "100%", maxWidth: "500px" }}
                        >
                          {/* <div
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
                          </div> */}

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
                            />
                            <TextField
                              id="standard-multiline-static"
                              className="popinput"
                              variant="standard"
                              type="text"
                              placeholder="Last"
                              style={{ flex: 1 }} // Adjust flex property
                            />
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
                            />
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
                            />
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
                            />
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
                            />
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
                            />
                          </div>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>Cancel</Button>
                          <Button onClick={handleClose}>Add</Button>
                        </DialogActions>
                      </Dialog>
                    </FormGroup>
                  </Col>
                  <Col lg="4"></Col>
                </Row>
                <hr/>
                <Row>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-address"
                      >
                        Upload Files (Maximum of 10)
                      </label>
                    </FormGroup>
                  </Col>
                </Row>
                <div class="file-upload-wrapper">
                  <input
                    type="file"
                    id="input-file-max-fs"
                    class="file-upload"
                    data-max-file-size="2M"
                  />
                </div>
                <hr/>
                <Row>
      <Col lg="3">
        <FormGroup>
          <label className="form-control-label" htmlFor="input-address">
            Residents center Welcome Email
          </label>
           
          <label className="heading-small text-muted mb-4" htmlFor="input-address">
            we send a welcome Email to anyone without Resident Center access
          </label>
        </FormGroup>    
      </Col>
    
        <FormGroup>
          <FormControlLabel
            control={<Switch color="primary" />}
            // label="End"
            labelPlacement="end"
          />
        </FormGroup>
   
    </Row>
    <Button
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                            style={{background:'green'}}
                        >
                            Save
                        </Button>
                        <Button
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                            style={{background:'white',color:'black'}}
                        >
                            Cancel
                        </Button>
    
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Leaseing;
