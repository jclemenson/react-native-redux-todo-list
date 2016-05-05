import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class Button extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={[styles.button, this.props.style]}>
          <Text style={styles.text}>
            {this.props.label}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ccc',
    // width: 200,
    padding: 25,
    borderRadius: 5,
    margin: 2
  },
  text: {
    fontSize: 24,
    textAlign: 'center'
  }
});


Button.propTypes = {
  onPress: React.PropTypes.func,
  label: React.PropTypes.string
};

module.exports = Button;
