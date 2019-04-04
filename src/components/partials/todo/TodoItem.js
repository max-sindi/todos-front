import React from 'react';
import PropTypes from 'prop-types';
import {links} from 'components/partials/index'
import {deleteTodoById} from "store/todos/todosActions"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {Button, Card, Icon} from "antd"
import styled from "styled-components"

const LinkToEdit = links.EditTodoById

export const FieldTitle = styled.label`
  font-size: 18px;
`

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  indexInArray: PropTypes.number.isRequired,
};

function TodoItem({
  todo: {
    title,
    body,
    isDone,
    id
  },
  deleteTodoById,
  indexInArray,
}) {
  function deleteHandler() {
    deleteTodoById(id, indexInArray)
  }

  return (
    <Card style={{marginBottom: 20}}>
      <FieldTitle>
        Todo Title:
      </FieldTitle>
      <div>
        {title}
      </div>
      <FieldTitle>
        Todo content:
      </FieldTitle>
      <div>
        {body}
      </div>
      <FieldTitle>
        Done:
        <Icon type={isDone ? 'check' : 'close'}/>
      </FieldTitle>
      <div>
        <LinkToEdit id={id}>
          <Button icon={"edit"} style={{marginRight: 20}}>
            Edit
          </Button>
        </LinkToEdit>
        <Button type={"danger"} onClick={deleteHandler} icon={"delete"}>
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default connect(
  null, {deleteTodoById}
)(
  withRouter(TodoItem)
)