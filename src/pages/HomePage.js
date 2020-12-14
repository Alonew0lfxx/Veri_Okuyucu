import React from 'react';
import {Alert, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import SquareButton from '../components/SquareButton';
import OptionButton from '../components/OptionButton';

function HomePage({navigation}) {
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
                    <Text style={{
                        fontSize: 28,
                        flex: 1,
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        color: 'rgba(255,255,255,0.8)',
                    }}>Veri Okuyucu</Text>

                    <SquareButton
                        buttonIcon={require('../image/ic_settings.png')}
                        onPressedFunc={() => {
                        navigation.navigate()}

                        }/>
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
                    optionIcon={require('../image/ic_open_file.png')}/>

                <OptionButton
                    optionTitle={'Yeni Liste Oluştur'}
                    optionMessage={'Yeni bir okuma listesi oluşturun ve düzenleyin'}
                    optionIcon={require('../image/ic_newFile.png')}/>


                <Text style={{
                    fontSize: 18,
                    color: 'rgba(255,255,255,0.6)',
                    marginHorizontal: 24,
                    marginTop: 16,
                }}>Dışa Aktar</Text>


                <OptionButton
                    optionTitle={'Yeni Liste Oluştur'}
                    optionMessage={'Yeni bir okuma listesi oluşturun ve düzenleyin'}
                    optionIcon={require('../image/ic_share.png')}/>
            </View>
        </ImageBackground>
    </SafeAreaView>);
}

export default HomePage;
