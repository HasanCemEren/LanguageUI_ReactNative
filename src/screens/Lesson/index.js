import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Styles from './style.js';
import {Icons, Images} from '../../assets/index.js';
const index = () => {
  return (
    <SafeAreaView style={Styles.safeArea}>
      <ImageBackground source={Images.theme} style={Styles.bckImage}>
        <View style={Styles.navbar}>
          <View>
            <Image source={Icons.down_arrow} />
          </View>
          <View>
            <Text style={Styles.navbarText}>Lesson</Text>
          </View>
          <View>
            <Image source={Icons.down_arrow} />
          </View>
        </View>
        <View>
          <Text style={Styles.translateText}>
            Translate these phrases to english
          </Text>
        </View>
        <View style={Styles.boxBar}>
          <View style={Styles.box}>
            <View style={Styles.boxNavbar}>
              <View>
                <Text style={Styles.quoteText}>"</Text>
              </View>
              <View>
                <Image source={Icons.menus_3} style={Styles.message} />
              </View>
            </View>
            <View style={Styles.translateTextBar}>
              <Text style={Styles.translateText}>
                Buenas noches, ¿como estuvo su dia?
              </Text>
            </View>
            <View>
              <Text
                style={[
                  Styles.quoteText,
                  {textAlign: 'right', paddingRight: 20, paddingBottom: 25},
                ]}>
                "
              </Text>
            </View>
          </View>
        </View>
        <View style={Styles.center}>
          <View style={Styles.circles}>
            <View style={[Styles.circle, {backgroundColor: 'blue'}]} />
            <View style={Styles.circle} />
            <View style={Styles.circle} />
            <View style={Styles.circle} />
            <View style={Styles.circle} />
          </View>
        </View>
        <View style={Styles.center}>
          <View style={Styles.answerBox}>
            <Text style={Styles.answerText}>Your answer...</Text>
          </View>
          <View style={Styles.tickBar}>
            <Image source={Icons.jewelry} style={Styles.tick} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default index;
