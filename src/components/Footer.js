import React, {
  Component,
  TabBarIOS,
} from 'react-native';

import FilterTab from './../containers/FilterTab'

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'All'
    }
  }

  _renderTab = (name, filter) => {
    return (
      <FilterTab
        name={name}
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
      <TabBarIOS
        barTintColor='darkslateblue'
        tintColor='white'>
        {this._renderTab('All', 'SHOW_ALL')}
        {this._renderTab('Active', 'SHOW_ACTIVE')}
        {this._renderTab('Completed', 'SHOW_COMPLETED')}
      </TabBarIOS>
    );
  }
}

module.exports = Footer
