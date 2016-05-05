import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

class Todo extends Component {
  render() {
    // console.log(`TodoItem.render: ${this.props.text} ${this.props.completed}`)
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor='#ddd'>
        <Text style={[styles.row, this.props.completed && styles.completed]}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

Todo.propTypes = {
  onPress: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  }
});

module.exports = Todo;
