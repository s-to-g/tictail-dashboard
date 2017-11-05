import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {FetchUsersAction, ReceivedUsersAction, ErrorAction} from '../../actions/UserActions';
import {PATH_BASE} from '../../constants/constants';
import Loader from '../Loader/Loader';
import User from '../User/User';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './UsersContainer.css';

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getUsers = this.getUsers.bind(this);
    this.sortUsers = this.sortUsers.bind(this);
  }

  getUsers() {
    const {dispatch} = this.props;
    dispatch(FetchUsersAction());
    axios.get(PATH_BASE)
      .then((response) => {
        dispatch(ReceivedUsersAction(response.data));
      })
      .catch((err) => {
        dispatch(ErrorAction());
      })
  }

  sortUsers(users) {
    let sortedUsers = [...users];
    sortedUsers.sort((a,b) => {
      let nameA = a.first_name  === null ? "" : a.first_name.toLowerCase();
      let nameB = b.first_name  === null ? "" : b.first_name.toLowerCase();
      return nameA.localeCompare(nameB);
    });
    return sortedUsers;
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const {isLoading, items, hasError} = this.props.users;
    let sortedUsers = this.sortUsers(items);
    return(
      <section className="UsersContainer">
        { isLoading && <Loader /> }
        { hasError && <ErrorMessage /> }
        { sortedUsers.length > 0 &&
          sortedUsers.map((user) => {
            return (
              <User key={user.id} user={user} />
            )
          })
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

export default connect(mapStateToProps)(UsersContainer);
