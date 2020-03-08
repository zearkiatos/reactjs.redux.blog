import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
import * as userAction from "../../actions/userAction";
import * as publicationAction from "../../actions/publicationAction";
import Comments from "./Comments";

const { getUsers } = userAction;
const { getPublicationByUser, openClose, getComments } = publicationAction;

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

    if (!("publicationKey" in users[key])) return;

    const { publicationKey } = users[key];

    return this.showInfo(publications[publicationKey], publicationKey);
  };

  showInfo = (publications, publicationKey) =>
    publications.map((publication, commentKey) => {
      return (
        <div
          className="pub_title"
          key={publication.id}
          onClick={() =>
            this.props.showComments(
              publicationKey,
              commentKey,
              publication.comments
            )
          }
        >
          <h2>{publication.title}</h2>
          <h3>{publication.body}</h3>
          {publication.open ? <Comments /> : "Closed"}
        </div>
      );
    });

  showComments = (publicationKey, commentKey, comments) => {
    this.props.openClose(publicationKey, commentKey);
    this.props.getCommets(publicationKey, commentKey);
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
  getPublicationByUser,
  openClose,
  getComments
};
export default connect(mapStateToProps, mapDispatchToProps)(Publications);
