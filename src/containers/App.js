import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from '../reducers';

import VisibleTodoList from './VisibleTodoList'
import AddTodo from './AddTodo'
import Footer from './../components/Footer'

const initialState = {
  todos: [
    {
      id: -3,
      text: 'Eat breakfast',
      completed: false
    },
    {
      id: -2,
      text: 'Eat lunch',
      completed: false
    },
    {
      id: -1,
      text: 'Eat dinner',
      completed: false
    },
  ]
}

let store = createStore(todoApp, initialState);

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AddTodo/>
          <VisibleTodoList/>
          <Footer/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }
});

module.exports = App;
