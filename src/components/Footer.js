import React, {
  Component,
  // TabBarIOS,
  StyleSheet,
  View
} from 'react-native';

// import FilterTab from './../containers/FilterTab'
import FilterButton from './../containers/FilterButton'

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'All'
    }
  }

  // _renderTab = (name, filter) => {
  //   return (
  //     <FilterTab
  //       name={name}
  //       filter={filter}
  //       selected={this.state.selected === name}
  //       onPress={() => {
  //         this.setState({selected: name})
  //         this.props.onPress(filter);
  //       }}
  //     />
  //   )
  // }

  _renderButton = (name, filter) => {
    return (
      <FilterButton
        label={name}
        filter={filter}
        selected={this.state.selected === name}
        onPress={() => {
          this.setState({selected: name})
          this.props.onPress(filter);
        }}
      />
    )
  }

  render() {
    return (
      // <TabBarIOS
      //   barTintColor='darkslateblue'
      //   tintColor='white'>
      //   {this._renderTab('All', 'SHOW_ALL')}
      //   {this._renderTab('Active', 'SHOW_ACTIVE')}
      //   {this._renderTab('Completed', 'SHOW_COMPLETED')}
      // </TabBarIOS>
      <View style={styles.footer}>
        {this._renderButton('All', 'SHOW_ALL')}
        {this._renderButton('Active', 'SHOW_ACTIVE')}
        {this._renderButton('Completed', 'SHOW_COMPLETED')}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
  }
});

module.exports = Footer
