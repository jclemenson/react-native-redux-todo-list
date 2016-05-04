import React, {
  Component,
  ListView,
  PropTypes
} from 'react-native';

import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props);

    console.log(`todos = ${this.props.todos}`);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(this.props.todos)
    };
  }

  _renderRow = (rowData) => {
    console.log(rowData);
    return <TodoItem text={rowData.text} completed={rowData.completed}/>;
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}/>
    );
  }

  // renderHTML() {
  //   return (
  //     <ul>
  //       {todos.map(todo =>
  //         <Todo
  //           key={todo.id}
  //           {...todo}
  //           onClick={() => onTodoClick(todo.id)}
  //         />
  //       )}
  //     </ul>
  //   )
  // }

}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  // onTodoClick: PropTypes.func.isRequired
}

module.exports = TodoList;
