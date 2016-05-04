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
          <Text>
            {this.props.label}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffddff',
    width: 200,
    padding: 25,
    borderRadius: 5
  },
});


Button.propTypes = {
  onPress: React.PropTypes.func,
  label: React.PropTypes.string
};

module.exports = Button;
