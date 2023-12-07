import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import COLORS from "../../const/Colors";

interface LoaderProps {
  marginT?: number;
  visible: boolean;
  marginL?: number;
}

const Loader: React.FC<LoaderProps> = ({
  visible = true,
  marginT,
  marginL,
}) => {
  const { height, width } = useWindowDimensions();

  return (
    visible && (
      <View style={[styles.container, { height, width }]}>
        <View
          style={[styles.loader, { marginTop: marginT, marginLeft: marginL }]}
        >
          <ActivityIndicator size="large" color={COLORS.darkBlue} />
          <Text style={{ alignItems: "center", marginLeft: 15, fontSize: 16 }}>
            Loading...
          </Text>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    position: "absolute",
    zIndex: 10,
    backgroundColor: "rgb(0,0,0,0.5)",
  },
  loader: {
    height: 70,
    backgroundColor: COLORS.white,
    marginHorizontal: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default Loader;
