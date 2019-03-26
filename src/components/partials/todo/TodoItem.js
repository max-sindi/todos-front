import React from 'react';
import PropTypes from 'prop-types';
import {links} from 'components/partials/index'

const LinkToEdit = links.EditTodoById

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

function TodoItem({ todo: { title, body, id }}) {
  return (
    <div>
      <div>{title}</div>
      <div>{body}</div>
      <LinkToEdit id={id}>Edit</LinkToEdit>
    </div>
  );
}

export default TodoItem;