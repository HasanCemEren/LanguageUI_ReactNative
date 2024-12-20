import {
  Image,
  SafeAreaView,
  ScrollView,
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
      <View style={Styles.navbar}>
        <View style={Styles.leftNavbar}>
          <Image source={Icons.menus_3} style={Styles.menu} />
        </View>
        <View style={Styles.rightNavbar}>
          <View style={Styles.ukBar}>
            <Image source={Icons.uk} style={Styles.uk} />
          </View>
          <View style={Styles.navbarTextBar}>
            <Text style={Styles.englishText}>English</Text>
          </View>
          <View style={Styles.downBar}>
            <Image source={Icons.down_arrow} style={Styles.down_arrow} />
          </View>
        </View>
      </View>

      <View style={Styles.profileBar}>
        <View style={Styles.leftBar}>
          <View style={Styles.imageBar}>
            <Image style={Styles.profilePhoto} source={Images.pp} />
          </View>
        </View>
        <View style={Styles.rightBar}>
          <View style={Styles.nameTextBar}>
            <Text style={Styles.nameText}>Martha Stewart</Text>
          </View>
          <View style={Styles.locationBar}>
            <View style={Styles.locateIconBar}>
              <Image style={Styles.locate} source={Icons.location} />
            </View>
            <View style={Styles.locateTextBar}>
              <Text style={Styles.locateText}>United Kingdom</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={Styles.welcomeTextBar}>
        <Text style={Styles.welcomeText}>Welcome back!</Text>
      </View>

      <View style={Styles.later}>
        <Image source={Images.todayschal} style={Styles.todayschal} />
      </View>

      <View style={Styles.coursesTextBar}>
        <Text style={Styles.coursesText}>Your courses</Text>
      </View>

      <ScrollView horizontal={true} style={Styles.scroll}>
        <View style={[Styles.box, {backgroundColor: 'orange'}]}>
          <View style={Styles.textBox}>
            <Text style={Styles.languageText}>Spanish</Text>
            <Text style={Styles.levelText}>Begginner</Text>
            <View style={Styles.percentRound}>
              <Text style={Styles.percentText}>43%</Text>
            </View>
          </View>
        </View>
        <View style={Styles.box}>
          <View style={Styles.textBox}>
            <Text style={Styles.languageText}>Italian</Text>
            <Text style={Styles.levelText}>Advenced</Text>
            <View style={Styles.percentRound}>
              <Text style={Styles.percentText}>16%</Text>
            </View>
          </View>
        </View>
        <View style={[Styles.box, {backgroundColor: 'blue'}]}>
          <View style={Styles.textBox}>
            <Text style={Styles.languageText}>Turkish</Text>
            <Text style={Styles.levelText}>Advenced</Text>
            <View style={Styles.percentRound}>
              <Text style={Styles.percentText}>43%</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
