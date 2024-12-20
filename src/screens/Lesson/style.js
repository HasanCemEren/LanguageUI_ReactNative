import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  bckImage: {
    flex: 1,
  },
  center: {alignItems: 'center'},
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  navbarText: {
    color: 'white',
    fontSize: 18,
  },
  translateTextBar: {
    paddingLeft: 20,
  },
  translateText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 40,
    paddingTop: 50,
  },
  boxBar: {
    alignItems: 'center',
    paddingTop: 50,
  },
  box: {
    width: '85%',
    height: 350,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 5,
    shadowOffset: {width: 5, height: 5},
  },
  boxNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  quoteText: {
    fontSize: 70,
    color: 'black',
  },
  message: {
    tintColor: 'blue',
  },
  translateTextBar: {
    marginLeft: 20,
    width: '90%',
  },
  translateText: {
    fontWeight: '400',
    fontSize: 40,
  },
  circles: {
    flexDirection: 'row',
    height: 50,
    width: '50%',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    marginHorizontal: 10,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'grey',
  },
  answerBox: {
    width: '85%',
    height: 100,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 5,
    shadowOffset: {width: 5, height: 5},
  },
  answerText: {
    margin: 25,
    fontSize: 20,
    opacity: 0.5,
    color: 'black',
  },
  tickBar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  tick: {
    tintColor: 'blue',
  },
});
