import React from 'react';
import {ImageBackground, View} from 'react-native';



class CustomButton extends React.Component {
    static propTypes = {
        imagePath: PropType.string.isRequired,
    } // böyle yaparak itemleri istemek en iyisi mk!
    render() {
        return (<View style={{
                width: 48,
                height: 48,
                borderRadius: 10,
                backgroundColor: '#F05454',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <ImageBackground source={require()} style={{
                    width: 36,
                    height: 36,
                }}/>
            </View>
        );
    }
}


export default CustomButton;
