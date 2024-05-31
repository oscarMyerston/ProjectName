import React from "react";
import { Text } from "react-native"

class Table extends React.PureComponent {

  constructor(props) {
    super.props(props)
    this.state = {
      isBig: false
    }
  }

  

  render() {
    return (
      <Text
      onPress={this.changeState}
      >This is a Table</Text>
    )
  }
}

export default Table