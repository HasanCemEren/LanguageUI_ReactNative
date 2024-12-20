import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  top: {
    height: '50%',
    width: '100%',
  },
  circle: {
    position: 'absolute',
    bottom: 10,
    width: 900,
    height: 900,
    backgroundColor: 'orange',
    borderRadius: 500,
    alignSelf: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '2%',
  },
  leftArrow: {
    tintColor: 'white',
  },
  courseText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  threeDots: {
    tintColor: 'white',
  },

  userInfoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLeftBar: {
    marginLeft: '8%',
    padding: '5%',
  },
  spanishText: {
    fontSize: 40,
    color: 'white',
    fontWeight: '600',
    letterSpacing: 2,
  },
  section: {
    borderRadius: 50,
    width: '65%',
    height: '25%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8%',
  },
  begginerTextBar: {
    justifyContent: 'center',
    marginLeft: '15%',
    height: '100%',
  },
  begginerText: {
    color: 'orange',
    fontSize: 20,
    fontWeight: '400',
  },
  down_arrow: {
    width: 16,
    height: 16,
    tintColor: 'orange',
    marginHorizontal: '3%',
  },

  xpBar: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20%',
    borderRightWidth: 5,
  },
  percentTextBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentText: {
    fontSize: 30,
    fontWeight: '400',
    color: 'white',
  },
  percenTText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: '5%',
    marginLeft: '2%',
  },
  compText: {
    color: 'white',
    fontSize: 10,
  },
  rubyBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '12%',
  },
  ruby: {
    width: 36,
    height: 36,
    marginHorizontal: '1%',
  },
  milestoneText: {
    color: 'white',
    letterSpacing: 1,
    marginHorizontal: '1%',
    fontSize: 15,
  },

  bottom: {
    height: '60%',
    width: '100%',
  },
  boxContainer: {
    width: '100%',
    height: '120%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  box: {
    margin: '5%',
    width: '35%',
    height: '22%',
    borderRadius: 10,
    elevation: 5,
    shadowOffset: {width: 10, height: 10},
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxTextBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxImageRound: {
    padding: 10,
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
    elevation: 2,
    shadowOffset: {width: 5, height: 5},
  },
  boxJewelry: {},
  titleText: {},
  progressText: {
    fontSize: 15,
  },
  hundredText: {
    fontSize: 10,
  },
  absBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
  },
  progressBar: {
    borderRadius: 25,
    width: '20%',
    height: 4,
    backgroundColor: 'green',
  },
  progressByHundredBar: {
    width: '70%',
    height: 4,
    backgroundColor: 'red',
  },
});
