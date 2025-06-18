import { Button, Platform, StyleSheet, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export default function AnimatedExample() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
    const value = width.value;
    console.log(value);
  };

  console.log(Platform.OS);

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.box, width }} />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height: 100,
    backgroundColor: "#b58df1",
    borderRadius: 20,
    marginVertical: 64,
  },
});
