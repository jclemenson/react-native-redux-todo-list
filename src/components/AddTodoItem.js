import React, {
  Component,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

import Button from './Button'

class AddTodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: null
    };
  }

  _handleSubmit = (event) => {
    this.props.addTodo(this.state.text);
  }

  _handleTextChange = (text) => {
    this.setState({
      text: text
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          returnKeyType='go'
          onSubmitEditing={(event) => {
            // set the state one more time since if they submit with an autocorrect modal
            // it replace the value but onChangeText will not fire
            this._handleTextChange(event.nativeEvent.text);
            this._handleSubmit();
          }}
          onChangeText={text => this._handleTextChange(text)}
          />
        <Button
          label='Add Todo'
          style={styles.button}
          onPress={this._handleSubmit}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  input: {
    flex: 3
  },
  button: {
    flex: 1
  }
});

module.exports = AddTodoItem;
