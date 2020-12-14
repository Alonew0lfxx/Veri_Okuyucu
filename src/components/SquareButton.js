import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

class SquareButton extends React.Component {
    static propTypes = {
        onPressedFunc: PropTypes.func.isRequired,
        buttonIcon: PropTypes.any.isRequired,
        style: PropTypes.any.isRequired,
    }; // böyle yaparak itemleri istemek en iyisi mk!
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPressedFunc}
                style={[{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    backgroundColor: '#F05454',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }, this.props.style]}>

                <Image style={{
                    width: 36,
                    height: 36,
                }} source={this.props.buttonIcon}/>
            </TouchableOpacity>
        );
    }
}


export default SquareButton;
