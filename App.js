/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomButton from './src/components/CustomButton';

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


                    <CustomButton imagePath={}/>
                </View>
                {/*Top Layout*/}

                <Text style={{
                    fontSize: 24,
                    color: 'rgba(255,255,255,0.6)',
                    marginHorizontal: 24,
                    marginTop: 16,
                }}>Veri Tabanı</Text>

                <Text style={{
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: 'rgba(255,255,255,0.8)',
                }}>Veri Okuyucu</Text>
            </View>
        </ImageBackground>
    </SafeAreaView>;
};

const styles = StyleSheet.create({});

export default App;
