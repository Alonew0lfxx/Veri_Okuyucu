import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';


class OptionButton extends React.Component {

    static propTypes = {
        optionTitle: PropTypes.string.isRequired,
        optionMessage: PropTypes.string.isRequired,
        optionIcon: PropTypes.any.isRequired,
        optionOnPress: PropTypes.any.isRequired
    };

    render() {
        return (<TouchableOpacity
            onPress={this.props.optionOnPress}
            style={{
                marginTop: 4,
                backgroundColor: 'rgba(255,255,255,0.08)',
                marginHorizontal: 24,
                flexDirection: 'row',
                borderRadius: 10,
            }}>

            <View style={{
                margin: 10,
                flexDirection: 'row',
                alignItems: 'center',
                flexShrink: 1, //yazı ana view'ın uzunluğunu asla aşmaz!
            }}>
                <Image style={{
                    width: 36,
                    height: 36,
                }} source={this.props.optionIcon}/>

                <View style={{
                    marginHorizontal: 10,
                    flexDirection: 'column',
                    flexShrink: 1, //yazı ana view'ın uzunluğunu asla aşmaz!
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 14,
                        color: '#fff',

                    }}>{this.props.optionTitle}</Text>

                    <Text style={{
                        fontWeight: '100',
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.5)',
                    }}>{this.props.optionMessage}</Text>
                </View>

            </View>
        </TouchableOpacity>);
    }
}


export default OptionButton;
