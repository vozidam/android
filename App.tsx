import React, {useState} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Alert,
} from 'react-native';

function App() {
  const [man, setMan] = useState(false);

  const screenWidth = Dimensions.get('window').width;
  const halfScreenWidth = screenWidth * 1;

  const screenHeight = Dimensions.get('window').height;
  const halfScreenHeight = screenHeight * 0.7;

  const styles = StyleSheet.create({
    home: {
      width: halfScreenWidth,
      height: halfScreenHeight,
      paddingTop: 30,
    },
    choice: {
      width: 40,
      height: 40,
      backgroundColor: 'grey',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    choiceContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 30,
    },
    imgHome: {
      width: 30,
      height: 30,
      borderRadius: 20,
    },
    manImgTrue: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
    },
    manImgFalse: {
      display: 'none',
    },
  });

  function click() {
    setMan(!man);
  }

  return (
    <View>
      <View style={styles.home}>
        <TouchableOpacity onPress={click}>
          <View style={styles.choiceContainer}>
            <View style={styles.choice}>
              <Image
                style={styles.imgHome}
                source={require('./components/img/arrow.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={click}>
          <View style={[styles.manImgFalse, man && styles.manImgTrue]}>
            <Image source={require('./components/img/man.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
