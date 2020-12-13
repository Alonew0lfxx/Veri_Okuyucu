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
const assets = require('./src/ImageAssets.js')

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
                    fontSize: 20,
                    color: 'rgba(255,255,255,0.6)',
                    marginHorizontal: 24,
                    marginTop: 16,
                }}>Veri Tabanı</Text>

                <View style={{
                    backgroundColor:'rgba(255,255,255,0.08)',
                    marginHorizontal:24,
                    flexDirection:'row',
                    borderRadius:10,
                }}>

                    <View style={{
                        margin:10,
                        flexDirection:'row',
                        alignItems:'center',
                    }}>
                        <View style={{
                            width:36,
                            height:36,
                            backgroundColor:'#000'
                        }}/>

                        <View style={{
                            flexDirection:'column',
                            marginRight:40
                        }}>
                            <Text style={{
                                fontWeight:'bold',
                                fontSize:14,
                                color:'#fff'
                            }}>Liste Aç</Text>

                            <Text style={{
                                fontWeight:'100',
                                fontSize:12,
                                color:'rgba(255,255,255,0.5)'
                            }}>Cihazınızda var olan veri tabanı dosyasını görüntüleyin ve düzenleyin</Text>
                        </View>

                    </View>
                </View>
            </View>
        </ImageBackground>
    </SafeAreaView>;
};

const styles = StyleSheet.create({});

export default App;
