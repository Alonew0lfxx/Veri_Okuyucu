import React from 'react';
import {Alert, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import SquareButton from '../components/SquareButton';
import OptionButton from '../components/OptionButton';
import * as RNFS from 'react-native-fs';


function HomePage({navigation}) {

    //readDir(dirpath: string)
    RNFS.readDir(RNFS.DocumentDirectoryPath).then(files => {
        for (let i = 0; i < files.length; i++) {
            console.log("File Name: " + files[i].name);
            console.log("File isDirectory: " + files[i].isDirectory);
            console.log("File path: " + files[i].path);
            console.log("File size: " + files[i].size);
        }
    })
        .catch(err => {
            console.log(err.message, err.code);
        });

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
                        navigation.navigate('OpenFilePage');
                        }}
                        style={{

                        }}/>
                </View>
                {/*Top Layout*/}

                <Text style={{
                    fontSize: 18,
                    color: 'rgba(255,255,255,0.6)',
                    marginHorizontal: 24,
                    marginTop: 16,
                }}>Veri Tabanı</Text>


                <OptionButton
                    optionOnPress={() => {
                        navigation.navigate();
                    }}
                    optionTitle={'Liste Aç'}
                    optionMessage={'Cihazınızda var olan veri tabanı dosyasını görüntüleyin ve düzenleyin'}
                    optionIcon={require('../image/ic_open_file.png')}/>

                <OptionButton
                    optionTitle={'Yeni Liste Oluştur'}
                    optionMessage={'Yeni bir okuma listesi oluşturun ve düzenleyin'}
                    optionIcon={require('../image/ic_newFile.png')}
                    optionOnPress={{}}/>


                <Text style={{
                    fontSize: 18,
                    color: 'rgba(255,255,255,0.6)',
                    marginHorizontal: 24,
                    marginTop: 16,
                }}>Dışa Aktar</Text>


                <OptionButton
                    optionTitle={'Yeni Liste Oluştur'}
                    optionMessage={'Yeni bir okuma listesi oluşturun ve düzenleyin'}
                    optionIcon={require('../image/ic_share.png')}
                    optionOnPress={{}}/>
            </View>
        </ImageBackground>
    </SafeAreaView>);
}

export default HomePage;
