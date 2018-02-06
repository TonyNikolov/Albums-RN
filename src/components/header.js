// import libraries
import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

// make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

Header.propTypes = {
  headerText: PropTypes.string,
};

Header.defaultProps = {
  headerText: 'Albums',
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
  },
  textStyle: {
    fontSize: 20,
  },
};

// export component
export default Header;
