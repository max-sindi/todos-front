import React from 'react';
import PropTypes from 'prop-types';
import {links} from 'components/partials/index'
import {deleteTodoById} from "store/todos/todosActions"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"


const LinkToEdit = links.EditTodoById

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

function TodoItem({
  todo: {
    title,
    body,
    id
  },
  deleteTodoById,
}) {
  return (
    <div>
      <div>{title}</div>
      <div>{body}</div>
      <LinkToEdit id={id}>Edit</LinkToEdit>
      <button onClick={() => deleteTodoById(id)}>Delete</button>
    </div>
  );
}

export default connect(
  null, {deleteTodoById}
)(
  withRouter(TodoItem)
)