import React from 'react';
import {FlatList, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import SquareButton from '../components/SquareButton';
import OptionButton from '../components/OptionButton';

function OpenFilePage() {
    return(<SafeAreaView
        style={{
            flex: 1,
        }}>
        <ImageBackground
            source={require('../image/Background.png')}
            style={{flex: 1}}>
            <View style={{
                flexDirection: 'column',
            }}>
                {/*TOP LAYOUT!*/}
                <View style={{
                    marginTop: 44,
                    marginHorizontal: 24,
                    backgroundColor: '#ffffff0e',
                    flexDirection: 'row',
                }}>

                    <SquareButton
                        buttonIcon={require('../image/ic_settings.png')}
                        onPressedFunc={() => {
                            navigation.navigate('OpenFilePage');
                        }}
                        style={{
                            alignSelf:'center',
                            justifySelf:'center'
                        }}/>


                        <View style={{
                            flex:1,
                            alignSelf:'center',
                            flexDirection:'column',
                            marginRight:48,
                        }}>
                            <Text style={{
                                fontSize: 28,
                                textAlign:'center',
                                fontWeight: 'bold',
                                color: 'rgba(255,255,255,0.8)',
                            }}>Liste Aç</Text>

                            <Text style={{
                                fontSize: 14,
                                textAlign:'center',
                                color: 'rgba(255,255,255,0.4)',
                            }}>/sdcard/msg/veri_okuyucu</Text>

                        </View>
                </View>
                {/*Top Layout*/}

                <Text style={{
                    fontSize: 18,
                    color: 'rgba(255,255,255,0.6)',
                    marginHorizontal: 24,
                    marginTop: 16,
                }}>Klasörler</Text>




            </View>
        </ImageBackground>
    </SafeAreaView>);
}

export default OpenFilePage;
