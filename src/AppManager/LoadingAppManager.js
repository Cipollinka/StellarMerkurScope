import React from 'react';
import {Text, View} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';

const styleView = {
  flex: 1,
  width: '100%',
  height: '100%',
  backgroundColor: '#03284F',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
};
const styleImage = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0.5,
};

export default function LoadingAppManager() {
  return (
    <View style={styleView}>
      <Text
        style={{
          fontFamily: 'TT Travels',
          fontWeight: '900',
          fontSize: 30,
          color: '#F1CE13',
          position: 'absolute',
          textAlign: 'center',
          marginBottom: 200,
        }}>
        StellarMerkurScope
      </Text>
      {/*<Image style={styleImage} source={require('../assets/images/basilArrowUpImage.png')} />*/}
      <SkypeIndicator color={'white'} />
    </View>
  );
}
