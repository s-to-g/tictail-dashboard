import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {AddUserAction, ErrorAction} from '../../actions/UserActions';
import {PATH_BASE, DEFAULT_TZ, DEFAULT_TEAM} from '../../constants/constants';
import Button from '../Button/Button';
import Input from '../Input/Input';
import TimeZoneSelect from '../TimeZoneSelect/TimeZoneSelect';
import Modal from '../Modal/Modal';
import './AddUser.css';

class AddUser extends React.Component {
  constructor() {
    super();
    this.state = {
      showingForm: false,
      firstName: "",
      lastName: "",
      location: DEFAULT_TZ,
      team: "",
      color: "",
      image: "",
    }
    this.addUser = this.addUser.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.updateSelect = this.updateSelect.bind(this);
  }

  updateInput(event) {
    let changedState = {
      ...this.state,
      [event.target.name]: event.target.value
    };
    this.setState(changedState);
  }

  updateSelect(event) {
    this.setState({
      location: event.target.value
    })
  }

  addUser() {
    const {firstName, lastName, title, color, image, location, team} = this.state;
    const {dispatch} = this.props;
    const newUser = {
      first_name: firstName || "",
      last_name: lastName || "",
      title: title || "",
      color: color || "",
      image: image || "",
      location: location || DEFAULT_TZ,
      team: team || DEFAULT_TEAM,
      id: Date.now()
    }
    axios.post(PATH_BASE, newUser)
    .then((response) => {
      axios.get(`${PATH_BASE}/${response.data.id}`)
        .then((response) => {
          dispatch(AddUserAction(response.data));
        })
        .catch((err) => {
          dispatch(ErrorAction());
        })
    })
    .catch((err) => {
      dispatch(ErrorAction());
    })

    this.toggleForm()
  }

  toggleForm() {
    const {showingForm} = this.state;
    this.setState({
      showingForm: !showingForm,
      firstName: "",
      lastName: "",
      location: DEFAULT_TZ,
      team: "",
      title: "",
      color: "",
      image: ""
    })
  }

  render() {
    const {isLoading, hasError} = this.props.users;
    const {showingForm, firstName, lastName, team, location, color, image, title} = this.state;
    return(
      <section className="AddUser">
      <h2 className="AddUser-title">Employees</h2>
        { !isLoading && !hasError ?
          <Button onClickAction={() => this.toggleForm()}>Add new user</Button> : null
        }
        { showingForm &&
          <Modal>
            <form onSubmit={(e) => {e.preventDefault(); this.addUser()}}>
              <Input inputValue={firstName} updateInput={this.updateInput} placeholder="First name" name="firstName" />
              <Input inputValue={lastName} updateInput={this.updateInput} placeholder="Last name" name="lastName" />
              <Input inputValue={team} updateInput={this.updateInput} placeholder="Team" name="team" />
              <Input inputValue={title} updateInput={this.updateInput} placeholder="Title" name="title" />
              <Input inputValue={color} updateInput={this.updateInput} placeholder="Hexa color without #" name="color" />
              <Input inputValue={image} updateInput={this.updateInput} placeholder="Image URL" name="image" />
              <TimeZoneSelect inputValue={location} updateInput={this.updateSelect} />
              <div className="AddUser-actions">
                <Button componentClass="AddUser-button Button--outline" type="button" onClickAction={(e) => {this.toggleForm()}}>Close</Button>
                <Button componentClass="AddUser-button">Add</Button>
              </div>
            </form>
          </Modal>
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(AddUser);
