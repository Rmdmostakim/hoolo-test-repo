import { Link,} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { VerifiedTooltip } from "../Atomics/CustomCheckTooltips/CustomCheckTooltips";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import {useNavigate} from "react-router-dom"
import {logout} from "../Auth/firebase"

export default function MyAccountNav(props) {
  
  let history = useNavigate();

  const Signout = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  
    swal("See You Soon", "Singout Successful", "success");
    history.push("/auth/login");
  };

  return (
    <>
      {props.userinfo.map((user) => (
        <div className="single-channel-nav" key={user.id}>
          <Navbar expand="lg" key={user.id}>
            <Navbar.Brand className="channel-brand d-flex">
              <div>
                <img
                  className="channel-profile-img"
                  alt="hoolo"
                  src={`https://shop.hoolo.live/images/user/${user.image}`}
                />
              </div>
              <div>
                {user.name} <VerifiedTooltip />
              </div>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarSupportedContent" />

            <Navbar.Collapse id="navbarSupportedContent">
              <Nav as="ul" className="mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link " to="#">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    History
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Discussion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" onClick={Signout} className="nav-link">
                    Logout
                  </Link>
                </li>

                {/* <NavDropdown title="Donate" id="basic-nav-dropdown">
								<NavDropdown.Item href="#">
									Action
								</NavDropdown.Item>
								<NavDropdown.Item href="#">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#">
									Something
								</NavDropdown.Item>
							</NavDropdown> */}
              </Nav>
              <Form inline className=" my-2 my-lg-0">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-1"
                  size="sm"
                />
                <Button
                  variant="outline-success"
                  size="sm"
                  className="my-2 my-sm-0"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
                &nbsp;&nbsp;&nbsp;
                {/* <Button variant="outline-danger" size="sm">
								Subscribe <strong>1.4M</strong>
							</Button> */}
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
      ))}
    </>
  );
}
