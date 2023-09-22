import react, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Switch,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";

const colors = {
  dark: "#22252D",
  dark1: "#292B36",
  dark2: "#272B33",
  light: "#FFF",
  light1: "#F1F1F1",
  light2: "#F7F7F7",
};

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState("");
  const { container, text } = styles;

  const Btn = ({ title, type }) => {
    return (
      <TouchableOpacity
        style={[
          styles.buttons,
          { backgroundColor: getColor(colors.light1, colors.dark1) },
        ]}
        onPress={() => calculate(title)}
      >
        <Text style={[styles.buttonText, { color: getBtnColor(type) }]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  const getBtnColor = (type) => {
    if (type == "Top") {
      return "#35FBC6";
    } else if (type == "Right") {
      return "#EB6363";
    }
    return getColor(colors.dark, colors.light);
  };

  const calculate = (title) => {
    if (title == "C") {
      setResult("");
    } else if (title == "DL") {
      setResult(result.substring(0, result.length - 1));
    } else if (title == "=") {
      const ans = Number(eval(result).toFixed(3)).toString();
      setResult(ans);
    } else {
      setResult(result + title);
    }
  };

  const getColor = (light, dark) => (darkTheme ? dark : light);

  return (
    <SafeAreaView
      style={[
        container,
        { backgroundColor: getColor(colors.light, colors.dark) },
      ]}
    >
      <View style={styles.switchTheme}>
        <Switch
          value={darkTheme}
          onValueChange={() => setDarkTheme(!darkTheme)}
          thumbColor={darkTheme ? colors.dark : colors.light}
          trackColor={{ true: colors.light1, false: colors.dark1 }}
          style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        />
      </View>

      <Text
        style={[
          text,
          {
            color: getColor(colors.dark1, colors.light1),
          },
        ]}
      >
        {result}
      </Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Btn title={"C"} type={"Top"} />
        <Btn title={"DL"} type={"Top"} />
        <Btn title={"/"} type={"Top"} />
        <Btn title={"%"} type={"Top"} />
        <Btn title={"7"} type={"Mid"} />
        <Btn title={"8"} type={"Mid"} />
        <Btn title={"9"} type={"Mid"} />
        <Btn title={"*"} type={"Right"} />
        <Btn title={"4"} type={"Mid"} />
        <Btn title={"5"} type={"Mid"} />
        <Btn title={"6"} type={"Mid"} />
        <Btn title={"-"} type={"Right"} />
        <Btn title={"3"} type={"Mid"} />
        <Btn title={"2"} type={"Mid"} />
        <Btn title={"1"} type={"Mid"} />
        <Btn title={"+"} type={"Right"} />
        <Btn title={"00"} type={"Mid"} />
        <Btn title={"0"} type={"Mid"} />
        <Btn title={"."} type={"Mid"} />
        <Btn title={"="} type={"Right"} />
      </View>
    </SafeAreaView>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
  },
  switchTheme: {
    marginTop: 10,
    paddingTop: 10,
    alignItems: "center",
    // backgroundColor: 'red',
  },
  text: {
    marginTop: "25%",
    fontSize: 40,
    textAlign: "right",
    paddingHorizontal: 20,
  },
  buttons: {
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: colors.light2,
    height: 70,
    width: 70,
    margin: 10,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
