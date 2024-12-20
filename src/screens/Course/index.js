import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Styles from './style.js';
import {Icons, Images} from '../../assets/index.js';
const index = () => {
  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.top}>
        <View style={Styles.circle}></View>
        <View style={Styles.navbar}>
          <View>
            <Image source={Icons.down_arrow} style={Styles.leftArrow} />
          </View>
          <View>
            <Text style={Styles.courseText}>Course</Text>
          </View>
          <View>
            <Image source={Icons.down_arrow} style={Styles.threeDots} />
          </View>
        </View>
        <View style={Styles.userInfoBar}>
          <View style={Styles.topLeftBar}>
            <View>
              <Text style={Styles.spanishText}>Spanish</Text>
            </View>

            <View style={Styles.section}>
              <View style={Styles.begginerTextBar}>
                <Text style={Styles.begginerText}>Begginer</Text>
              </View>
              <View>
                <Image source={Icons.down_arrow} style={Styles.down_arrow} />
              </View>
            </View>
          </View>
          <View style={Styles.xpBar}>
            <View style={Styles.percentTextBar}>
              <Text style={Styles.percentText}>43</Text>
              <Text style={Styles.percenTText}>%</Text>
            </View>
            <View>
              <Text style={Styles.compText}>Completed</Text>
            </View>
          </View>
        </View>
        <View style={Styles.rubyBar}>
          <View>
            <Image source={Icons.jewelry} style={Styles.ruby} />
          </View>
          <View>
            <Image source={Icons.jewelry} style={Styles.ruby} />
          </View>
          <View>
            <Text style={Styles.milestoneText}>2 Milestones</Text>
          </View>
        </View>
      </View>
      <View style={Styles.bottom}>
        <View style={Styles.boxContainer}>
          <View style={Styles.box}>
            <View style={Styles.boxImageRound}>
              <Image source={Icons.jewelry} style={Styles.boxJewelry} />
            </View>
            <View>
              <Text style={Styles.titleText}>Basics</Text>
            </View>
            <View style={Styles.boxTextBar}>
              <View>
                <Text style={Styles.progressText}>4</Text>
              </View>
              <View>
                <Text style={Styles.hundredText}>/5</Text>
              </View>
            </View>
            <View style={Styles.absBar}>
              <View style={Styles.progressBar} />
              <View style={Styles.progressByHundredBar} />
            </View>
          </View>
          <View style={Styles.box}>
            <View style={Styles.boxImageRound}>
              <Image source={Icons.location} style={Styles.boxJewelry} />
            </View>
            <View>
              <Text style={Styles.titleText}>Occupations</Text>
            </View>
            <View style={Styles.boxTextBar}>
              <View>
                <Text style={Styles.progressText}>1</Text>
              </View>
              <View>
                <Text style={Styles.hundredText}>/5</Text>
              </View>
            </View>
            <View style={Styles.absBar}>
              <View style={Styles.progressBar} />
              <View style={Styles.progressByHundredBar} />
            </View>
          </View>
          <View style={Styles.box}>
            <View style={Styles.boxImageRound}>
              <Image source={Icons.location} style={Styles.boxJewelry} />
            </View>
            <View>
              <Text style={Styles.titleText}>Conversation</Text>
            </View>
            <View style={Styles.boxTextBar}>
              <View>
                <Text style={Styles.progressText}>3</Text>
              </View>
              <View>
                <Text style={Styles.hundredText}>/5</Text>
              </View>
            </View>
            <View style={Styles.absBar}>
              <View style={Styles.progressBar} />
              <View style={Styles.progressByHundredBar} />
            </View>
          </View>
          <View style={Styles.box}>
            <View style={Styles.boxImageRound}>
              <Image source={Icons.jewelry} style={Styles.boxJewelry} />
            </View>
            <View>
              <Text style={Styles.titleText}>Places</Text>
            </View>
            <View style={Styles.boxTextBar}>
              <View>
                <Text style={Styles.progressText}>1</Text>
              </View>
              <View>
                <Text style={Styles.hundredText}>/5</Text>
              </View>
            </View>
            <View style={Styles.absBar}>
              <View style={Styles.progressBar} />
              <View style={Styles.progressByHundredBar} />
            </View>
          </View>
          <View style={Styles.box}>
            <View style={Styles.boxImageRound}>
              <Image source={Icons.jewelry} style={Styles.boxJewelry} />
            </View>
            <View>
              <Text style={Styles.titleText}>Family members</Text>
            </View>
            <View style={Styles.boxTextBar}>
              <View>
                <Text style={Styles.progressText}>3</Text>
              </View>
              <View>
                <Text style={Styles.hundredText}>/5</Text>
              </View>
            </View>
            <View style={Styles.absBar}>
              <View style={Styles.progressBar} />
              <View style={Styles.progressByHundredBar} />
            </View>
          </View>
          <View style={Styles.box}>
            <View style={Styles.boxImageRound}>
              <Image source={Icons.location} style={Styles.boxJewelry} />
            </View>
            <View>
              <Text style={Styles.titleText}>Foods</Text>
            </View>
            <View style={Styles.boxTextBar}>
              <View>
                <Text style={Styles.progressText}>2</Text>
              </View>
              <View>
                <Text style={Styles.hundredText}>/5</Text>
              </View>
            </View>
            <View style={Styles.absBar}>
              <View style={Styles.progressBar} />
              <View style={Styles.progressByHundredBar} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
