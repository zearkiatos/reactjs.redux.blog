import React from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
const Comments = props => {
  if (props.commentError) {
    return <Fatal message={props.commentError} />;
  }
  if (props.commentLoading && !props.comments.length) {
    return <Spinner />;
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
const mapStateToProps = ({ publicationReducer }) => publicationReducer;
export default connect(mapStateToProps)(Comments);
