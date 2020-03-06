import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
import * as userAction from "../../actions/userAction";
import * as publicationAction from "../../actions/publicationAction";

const { getUsers } = userAction;
const { getPublicationByUser } = publicationAction;

class Publications extends Component {
  async componentDidMount() {
    const {
      getUsers,
      getPublicationByUser,
      match: {
        params: { key }
      }
    } = this.props;
    if (!this.props.userReducer.users.length) {
      await getUsers();
    }
    if (this.props.userReducer.error) {
      return;
    }
    if (!("publications_key" in this.props.userReducer.users[key])) {
      getPublicationByUser(key);
    }
  }

  postUser = () => {
    const {
      userReducer,
      match: {
        params: { key }
      }
    } = this.props;
    if (userReducer.error) {
      return <Fatal message={userReducer.error} />;
    }
    if (!userReducer.users.length || userReducer.loading) {
      return <Spinner />;
    }

    const name = userReducer.users[key].name;

    return <h1>publications of {name}</h1>;
  };

  postPublications = () => {
    const {
      userReducer,
      userReducer: { users },
      publicationReducer,
      publicationReducer: { publications },
      match: {
        params: { key }
      }
    } = this.props;

    if (!users.length) return;

    if (userReducer.error) return;

    if (publicationReducer.loading) {
      return <Spinner />;
    }

    if (publicationReducer.error) {
      return <Fatal message={publicationReducer.error} />;
    }

    if (!publications.length) return;
    
    if (!("publicaciones_key" in users[key])) return;

    const { publications_key } = users[key];

    return publications[publications_key].map((publication) => {
      return ( <div className="pub_title">
            <h2>
              {publication.title}
            </h2>
            <h3>
              {publication.body}
            </h3>
      </div>);
    });
  };
  render() {
    console.log(this.props);
    return (
      <Fragment>
        {this.postUser()}
        {this.postPublications()}
      </Fragment>
    );
  }
}
const mapStateToProps = ({ userReducer, publicationReducer }) => {
  return {
    userReducer,
    publicationReducer
  };
};
const mapDispatchToProps = {
  getUsers,
  getPublicationByUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Publications);
