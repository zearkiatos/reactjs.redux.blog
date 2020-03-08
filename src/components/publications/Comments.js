import React from "react";
import { connect } from "react-redux";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
const Comments = props => {
  if (props.loading) {
    return <Spinner />;
  }
  if (props.error) {
    return <Fatal message={props.error} />;
  }
  const printComments = () =>
    props.comments.map(comment => (
      <li>
        <b>
          <u>{comment.email}</u>
        </b>
        <br />
        {comment.body}
      </li>
    ));
  return <ul>{printComments()}</ul>;
};
const mapStateToProps = ({ publicationsReducer }) => publicationsReducer;
export default connect(mapStateToProps)(Comments);
