import React, {
  Component,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { addTodo } from '../actions';

import Button from './../components/Button'

// way 1
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


// way 2 in guide

// let AddTodo = ({dispatch}) => {
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         returnKeyType='go'
//         onSubmitEditing={(event) => {
//           const text = event.nativeEvent.text;
//           dispatch(addTodo(text));
//         }}/>
//       <Button
//         label='Add Todo'
//         style={styles.button}/>
//     </View>
//   );
// }
//
// AddTodo = connect()(AddTodo);



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

export default AddTodo;
