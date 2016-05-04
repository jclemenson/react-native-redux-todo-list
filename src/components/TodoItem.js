import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text
} from 'react-native';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={[styles.row, this.props.completed && styles.completed]}>{this.props.text}</Text>
    );
  }

  // renderHTML() {
  //   return (
  //     <li
  //       onClick={onClick}
  //       style={{textDecoration: completed ? 'line-through' : 'none'}}>
  //       <text>
  //     </li>
  //   )
  // }

}


Todo.propTypes = {
  // onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  completed: {
    textDecorationLine: 'line-through'
  }
});

module.exports = Todo;
