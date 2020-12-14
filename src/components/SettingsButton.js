import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {SvgUri} from 'react-native-svg';

class SettingsButton extends React.Component {
    static propTypes = {
        imageSource: Image
    } // böyle yaparak itemleri istemek en iyisi mk!
    render() {
        return (<TouchableOpacity style={{
                width: 48,
                height: 48,

                borderRadius: 10,
                backgroundColor: '#F05454',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

              <Image style={{
                  width: 36,
                  height: 36
              }} source={require('../image/ic_settings.png')}/>
            </TouchableOpacity>
        );
    }
}


export default SettingsButton;
