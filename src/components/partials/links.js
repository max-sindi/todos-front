import {Link} from "react-router-dom"
import React from 'react'

export const Todos = <Link to={"/todos"} />
export const EditTodoById = props => <Link to={`/todos/${props.id}/edit`}>{props.children}</Link>
export const CreateNewTodo = props => <Link to={`/todos/new`}>{props.children}</Link>