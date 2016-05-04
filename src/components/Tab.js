import React, {
  Component,
  PropTypes,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';

class Tab extends Component {
  render() {
    return (
      <TabBarIOS.Item
        title={this.props.name}
        selected={this.props.selected}
        onPress={this.props.onPress}>

        <View style={styles.tabContent}>
          <Text style={styles.tabText}>
            {this.props.name}
          </Text>
        </View>

      </TabBarIOS.Item>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabeText: {
    margin: 50
  }
});

Tab.propTypes = {
  onPress: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired
}

module.exports = Tab;
