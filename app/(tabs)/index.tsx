import { Image, StyleSheet,Text,StatusBar, Platform,NativeModules, View, SafeAreaView } from 'react-native';
const { StatusBarManager } = NativeModules;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
       <View>
      <Text style={styles.titleContainer}>Hi there </Text>
      <Text style={styles.normalText}> Please give us these input and let us find your next destination </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  normalText:{
    alignItems:'center',
    textAlign:'center',
    fontSize:15,
  },
 
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "olive",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
