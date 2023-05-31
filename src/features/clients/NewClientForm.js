import { useState, useEffect } from "react";
import { useAddNewClientMutation } from "./clientApiSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { ROLES } from "../../config/roles";

import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const USER_REGEX = /^[A-z]{3,20}$/;

const NewClientForm = ({client}) => {
  const [addNewClient, { isLoading, isSuccess, isError, error }] =
    useAddNewClientMutation();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [orders, setOrders] = useState([""]);
  const [phonenumber, setPhone] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setUsername("");
      setLocation("");
      setOrders([]);
      navigate("/dash/notes/new");
    }
  }, [isSuccess, navigate]);

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onLocationChanged = (e) => setLocation(e.target.value);
  const onPhoneChanged = (e) => setPhone(e.target.value);
  const onOrdersChanged = (e) => setOrders(e.target.value);

  const canSave =
    [orders, username, location, phonenumber].every(Boolean) && !isLoading;

  const onSaveClientClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await addNewClient({ username, orders, location, phonenumber });
    }
  };

  const content = (

    <>
      <CssBaseline />

      <Container maxWidth="sm">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="form__title-row">
            <h2>Add Client</h2>
            <div className="form__action-buttons">
              <button
                className="icon-button"
                title="Save"
                onClick={onSaveClientClicked}
              >
                <FontAwesomeIcon icon={faSave} />
              </button>
            </div>
          </div>
          <label className="form__label" htmlFor="username">
            Username:{" "}
          </label>

          <TextField
            id="username"
            name="username"
            type="text"
            autoComplete="off"
            value={username}
            onChange={onUsernameChanged}
            label="Outlined"
            variant="outlined"
          />

          <label className="form__label" htmlFor="location">
            Location:
          </label>

          <TextField
            id="location"
            name="location"
            type="text"
            autoComplete="off"
            value={location}
            onChange={onLocationChanged}
            label="Outlined"
            variant="outlined"
          />

          <label htmlFor="Phone">Phone Number</label>

          <TextField
            id="Phone"
            name="Phone"
            type="tel"
            autoComplete="off"
            value={phonenumber}
            onChange={onPhoneChanged}
            label="Outlined"
            variant="outlined"
          />

          <label className="form__label" htmlFor="Orders">
            ORDERS:
          </label>

          <TextField
            id="Orders"
            name="Orders"
            type="text"
            autoComplete="off"
            value={orders}
            onChange={onOrdersChanged}
            label="Outlined"
            variant="outlined"
          />
        </form>
      </Container>
    </>
  );

  return content;
};
export default NewClientForm;
