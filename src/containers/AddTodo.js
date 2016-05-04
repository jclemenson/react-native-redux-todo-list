import { connect } from 'react-redux';
import { addTodo } from '../actions';

import AddTodoItem from './../components/AddTodoItem'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text));
    }
  }
}

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoItem);

export default AddTodo;
