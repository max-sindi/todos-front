import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodoById} from "../../store/todos/todosActions";

class TodoEdit extends Component {
  componentDidMount() {
    debugger
    this.props.fetchTodoById(this.props.match.params.id)
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}



export default connect(
  mapStateToProps, { fetchTodoById}
)(TodoEdit);
