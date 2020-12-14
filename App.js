/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SettingsButton from './src/components/SettingsButton';
import OptionButton from './src/components/OptionButton';

const assets = require('./src/ImageAssets.js');

const App: () => React$Node = () => {
    return <SafeAreaView
        style={{
            flex: 1,
        }}>
        <ImageBackground
            source={require('./src/image/Background.png')}
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
                    <Text style={{
                        fontSize: 28,
                        flex: 1,
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        color: 'rgba(255,255,255,0.8)',
                    }}>Veri Okuyucu</Text>

                    <SettingsButton imageSource={assets.images.ic_settings.uri}/>
                </View>
                {/*Top Layout*/}

                <Text style={{
                    fontSize: 18,
                    color: 'rgba(255,255,255,0.6)',
                    marginHorizontal: 24,
                    marginTop: 16,
                }}>Veri Tabanı</Text>


                <OptionButton
                    optionTitle={'Liste Aç'}
                    optionMessage={'Cihazınızda var olan veri tabanı dosyasını görüntüleyin ve düzenleyin'}
                    optionIcon={require('./src/image/ic_open_file.png')}/>

                <OptionButton
                    optionTitle={'Yeni Liste Oluştur'}
                    optionMessage={'Yeni bir okuma listesi oluşturun ve düzenleyin'}
                    optionIcon={require('./src/image/ic_newFile.png')}/>


                <Text style={{
                    fontSize: 18,
                    color: 'rgba(255,255,255,0.6)',
                    marginHorizontal: 24,
                    marginTop: 16,
                }}>Dışa Aktar</Text>


                <OptionButton
                    optionTitle={'Yeni Liste Oluştur'}
                    optionMessage={'Yeni bir okuma listesi oluşturun ve düzenleyin'}
                    optionIcon={require('./src/image/ic_share.png')}/>
            </View>
        </ImageBackground>
    </SafeAreaView>;
};

const styles = StyleSheet.create({});

export default App;
