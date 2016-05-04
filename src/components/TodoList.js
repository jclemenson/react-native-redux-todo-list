import React, {
  Component,
  ListView,
  PropTypes
} from 'react-native';

import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props);



    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(this.props.todos)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.todos)
    })
  }

  _renderRow = (rowData) => {
    // console.log(rowData);
    return (
      <TodoItem
        text={rowData.text}
        completed={rowData.completed}
        onPress={() => this.props.onTodoPress(rowData.id)}/>
    );
  }

  render() {
    console.log(`TodoList.render`);
    console.log(this.props.todos);
    console.log(this.state.dataSource);

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
  onTodoPress: PropTypes.func.isRequired
}

module.exports = TodoList;
