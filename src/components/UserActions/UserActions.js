import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import TimeZoneSelect from '../TimeZoneSelect/TimeZoneSelect';
import {DeleteUserAction, UpdateUserAction, ErrorAction} from '../../actions/UserActions';
import {PATH_BASE, DEFAULT_TZ, DEFAULT_TEAM} from '../../constants/constants';
import './UserActions.css';

class UserActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingForm: false,
      firstName: "",
      lastName: "",
      color: "",
      title: "",
      location: DEFAULT_TZ,
      team: "",
      image: ""
    }
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.resetState = this.resetState.bind(this);
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

  deleteUser(id) {
    const {dispatch} = this.props;
    axios.delete(`${PATH_BASE}/${id}`)
      .then((response) => {
        dispatch(DeleteUserAction(id));
      })
      .catch((err) => {
        dispatch(ErrorAction());
      })
  }

  updateUser(id) {
    const {dispatch} = this.props;
    const {firstName, lastName, title, color, image, location, team} = this.state;
    const updatedUser = {
      id: id,
      first_name: firstName || "",
      last_name: lastName || "",
      title: title || "",
      color: color || "",
      image: image || "",
      location: location || DEFAULT_TZ,
      team: team || DEFAULT_TEAM,
    }
    axios.put(`${PATH_BASE}/${id}`, updatedUser)
      .then((response) => {
        dispatch(UpdateUserAction(id, updatedUser));
      })
      .catch((err) => {
        dispatch(ErrorAction());
      })
    this.editUser();
  }

  editUser() {
    const {showingForm} = this.state;
    this.setState({
      showingForm: !showingForm
    });
    this.resetState();
  }

  resetState() {
    const {user} = this.props;
    this.setState({
      firstName: user.first_name || "",
      lastName: user.last_name || "",
      team: user.team || "",
      title: user.title || "",
      location: user.location || "",
      color: user.color || "",
      image: user.image || ""
    })
  }

  componentDidMount() {
    this.resetState();
  }

  render() {
    const {user} = this.props;
    const {showingForm, firstName, lastName, team, title, location, color, image} = this.state;
    return(
      <div className="UserActions-wrapper">
        <Button componentClass="UserActions-button Button--outline" type="button" onClickAction={() => this.editUser()}>Edit</Button>
        <Button componentClass="UserActions-button Button--outline" type="button" onClickAction={() => this.deleteUser(user.id)}>Remove</Button>
        { showingForm &&
          <Modal>
            <form onSubmit={(e) => {e.preventDefault(); this.updateUser(user.id)}}>
              <Input inputValue={firstName} updateInput={this.updateInput} placeholder="First name" name="firstName" />
              <Input inputValue={lastName} updateInput={this.updateInput} placeholder="Last name" name="lastName" />
              <Input inputValue={team} updateInput={this.updateInput} placeholder="Team" name="team" />
              <Input inputValue={title} updateInput={this.updateInput} placeholder="Title" name="title" />
              <Input inputValue={color} updateInput={this.updateInput} placeholder="Hexa color without #" name="color" />
              <Input inputValue={image} updateInput={this.updateInput} placeholder="Image URL" name="image" />
              <TimeZoneSelect inputValue={location} updateInput={this.updateSelect} name="location" />
              <div className="UserActions-actions">
                <Button componentClass="UserActions-Modalbutton Button--outline" type="button" onClickAction={() => {this.editUser()}}>Cancel</Button>
                <Button componentClass="UserActions-Modalbutton">Update</Button>
              </div>
            </form>
          </Modal>
        }
      </div>
    )
  }
}

UserActions.propTypes = {
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserActions);
