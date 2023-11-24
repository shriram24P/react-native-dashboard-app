import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
  Image,
  Linking,
  ScrollView,
  ImageSourcePropType,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useEffect, memo } from "react";
import { RootDrawerParamList } from "../../../../App";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import UserTable from "../../components/UserTable";
import { useTranslation } from "react-i18next";
import ListButtons from "../../components/ListButtons";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";

import * as Contacts from "expo-contacts";
import { RadioButton } from "react-native-paper";
import * as SMS from "expo-sms";
import COLORS from "./../../../const/Colors";
import { CheckBox } from "@rneui/themed";
import { Dropdown } from "react-native-element-dropdown";
import DropDownPicker from "react-native-dropdown-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SelectCountry } from "react-native-element-dropdown";
import { useTheme } from "../../../customTheme/ThemeContext";

interface SearchScreenProp {
  navigation: DrawerNavigationProp<RootDrawerParamList, "SearchScreen">;
}

export interface UserData {
  id: number;
  name: string;
  phone: number;
  image: any;
  phone2: number;
  phone3: number;
  phone4: number;
}

interface ColorIconProps {
  source: any;
  onPress: () => void;
}

interface Option {
  label: string;
  value: string;
  image: any;
  onSelect: () => void;
}

const myData = [
  {
    label: "abc",
    value: "xyz",
  },
  {
    label: "abcd",
    value: "xyzw",
  },
  {
    label: "abcde",
    value: "xyzwx",
  },
];

const SearchScreen = ({ navigation }: SearchScreenProp) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<UserData[]>([]);
  const [checked, setChecked] = React.useState("first");
  const [modalVisible, setModalVisible] = useState(false);
  const [editedUserData, setEditedUserData] = useState<UserData | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [isBluetoothEnabled, setIsBluetoothEnabled] = useState(false);
  const [bluetoothEnabled, setBluetoothEnabled] = useState<boolean>(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [viewUserData, setViewUserData] = React.useState(true);

  const [familyModalVisible, setFamilyModalVisible] = useState(false);
  const [editedFamilyUserData, setEditedFamilyUserData] =
    useState<UserData | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [selectedAction, setSelectedAction] = useState(null);

  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [check3, setCheck3] = React.useState(false);

  const [clicked, setClicked] = useState(false);

  const [selectedData, setSelectedData] = useState("");

  const [option, setOption] = useState("");

  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const containerStyle = isDarkMode
    ? styles.darkContainer
    : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;

  const data: UserData[] = [
    {
      id: 1,
      name: "Apple",
      phone: 1234567890,
      image: require("../../../../assets/user.png"),
      phone2: 1234567890,
      phone3: 1234567890,
      phone4: 1234567890,
    },
    {
      id: 2,
      name: "Banana",
      phone: 1234567890,
      image: require("../../../../assets/user.png"),
      phone2: 1234567890,
      phone3: 1234567890,
      phone4: 1234567890,
    },
    {
      id: 3,
      name: "Cherry",
      phone: 1234567890,
      image: require("../../../../assets/user.png"),
      phone2: 1234567890,
      phone3: 1234567890,
      phone4: 1234567890,
    },
    {
      id: 4,
      name: "Date",
      phone: 123,
      image: require("../../../../assets/user.png"),
      phone2: 12342,
      phone3: 12342,
      phone4: 12342,
    },
    {
      id: 5,
      name: "Grapes",
      phone: 123,
      image: require("../../../../assets/vote.jpg"),
      phone2: 12342,
      phone3: 12342,
      phone4: 12342,
    },
    {
      id: 6,
      name: "Lemon",
      phone: 123,
      image: require("../../../../assets/vote.jpg"),
      phone2: 12342,
      phone3: 12342,
      phone4: 12342,
    },
    {
      id: 7,
      name: "Orange",
      phone: 123,
      image: require("../../../../assets/vote.jpg"),
      phone2: 12342,
      phone3: 12342,
      phone4: 12342,
    },
    {
      id: 8,
      name: "Peach",
      phone: 123,
      image: require("../../../../assets/vote.jpg"),
      phone2: 12342,
      phone3: 12342,
      phone4: 12342,
    },
    {
      id: 9,
      name: "Strawberry",
      phone: 123,
      image: require("../../../../assets/vote.jpg"),
      phone2: 12342,
      phone3: 12342,
      phone4: 12342,
    },
    {
      id: 10,
      name: "Watermelon",
      phone: 123,
      image: require("../../../../assets/vote.jpg"),
      phone2: 12342,
      phone3: 12342,
      phone4: 12342,
    },
  ];

  const handleAction = (action: any) => {
    // Implement logic for each action (makePhoneCall, sendSMS, sendWhatsAppMessage)
    console.log(`Performing action: ${action}`);
    setSelectedAction(null); // Reset selected action after handling it
  };

  const handleSearch = (text: string) => {
    const filteredResults = data.filter(
      (item) =>
        item.name.toLowerCase().startsWith(text.toLowerCase()) &&
        item.name !== text
    );
    setSearchResults(filteredResults);
  };

  const handleEditUser = React.useCallback((userData: UserData) => {
    setEditedUserData(userData);
    setSelectedUser(userData);
    setModalVisible(true);
  }, []);

  const saveEditedUserData = React.useCallback(() => {
    // Implement logic to save edited data
    setModalVisible(false);
  }, []);

  const handleImageSelection = React.useCallback((image: number) => {
    setSelectedImage(image);
  }, []);

  const EditUserModal = React.memo(() => {
    const sendSMS = async () => {
      // Check if the device supports sending SMS
      const isAvailable = await SMS.isAvailableAsync();

      if (isAvailable) {
        const { result } = await SMS.sendSMSAsync(
          ["123456789"],
          "Your message here"
        );

        if (result === "sent") {
          console.log("SMS sent successfully");
        } else {
          console.error("Failed to send SMS");
        }
      } else {
        console.error("SMS is not available on this device");
      }
    };

    const sendWhatsAppMessage = () => {
      const phoneNumber = "7038455432"; // Replace with the recipient's phone number
      const message = "Your WhatsApp message here"; // Replace with your desired message
      const whatsappLink = `whatsapp://send?text=${encodeURIComponent(
        message
      )}&phone=${phoneNumber}`;

      Linking.openURL(whatsappLink)
        .then(() => console.log("Opened WhatsApp"))
        .catch(() => console.error("Failed to open WhatsApp"));
    };

    const pickImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    };

    const pickVideo = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    };

    const pickAudio = async () => {
      try {
        const result = await DocumentPicker.getDocumentAsync({
          type: "audio/*",
        });
      } catch (error) {
        console.error("Error picking audio:", error);
      }
    };

    const makePhoneCall = () => {
      const phoneNumber = "123456789"; // Replace with the desired phone number

      // Use the appropriate URL based on the platform (iOS or Android)
      const phoneCallUrl =
        Platform.OS === "ios" ? `tel:${phoneNumber}` : `tel:${phoneNumber}`;

      Linking.openURL(phoneCallUrl)
        .then(() => console.log("Phone call initiated"))
        .catch(() => console.error("Failed to initiate phone call"));
    };

    const ColorIcon: React.FC<ColorIconProps> = memo(({ source, onPress }) => (
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 25,
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          borderWidth: 1,
        }}
        onPress={onPress}
      >
        <Image source={source} style={{ width: 40, height: 40 }} />
      </TouchableOpacity>
    ));

    const handleOpenFamilyModal = () => {
      setModalVisible(false);
      setFamilyModalVisible(true);
    };

    // const saveFamilyEditedUserData = () => {
    //   setModalVisible(true);
    //   setFamilyModalVisible(false);
    // };

    const options: Option[] = [
      {
        label: "sms",
        value: "sms",
        image: require("../../../../assets/sms.png"),
        onSelect: () => handleOption1(),
      },
      {
        label: "text",
        value: "text",
        image: require("../../../../assets/wp.png"),
        onSelect: () => handleOption2(),
      },
      {
        label: "img",
        value: "image",
        image: require("../../../../assets/wp.png"),
        onSelect: () => handleOption3(),
      },
      {
        label: "call",
        value: "call",
        image: require("../../../../assets/call.png"),
        onSelect: () => handleOption4(),
      },
    ];

    const handleOption1 = () => {
      sendSMS();
    };

    const handleOption2 = () => {
      sendWhatsAppMessage();
    };
    const handleOption3 = () => {
      sendWhatsAppMessage();
    };
    const handleOption4 = () => {
      makePhoneCall();
    };

    return (
      <Modal visible={modalVisible} animationType="slide">
        <View style={containerStyle}>
          {/* Add TextInput components for editing user data */}
          {/* <TextInput
            style={styles.input}
            placeholder={t("pFullName")}
            value={editedUserData?.name}
            onChangeText={(text) =>
              setEditedUserData((prevUserData) => ({
                ...(prevUserData as UserData),
                ...{ name: text },
              }))
            }
          /> */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.darkBlue,
                width: 40,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                padding: 5,
                margin: 3,
              }}
              onPress={sendSMS}
            >
              <Image
                source={require("../../../../assets/sms.png")}
                style={{ width: 25, height: 20 }}
              />
              <Text style={{ color: "white", fontSize: 10 }}>sms</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: COLORS.darkBlue,
                width: 40,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                padding: 5,
                margin: 3,
              }}
              onPress={sendWhatsAppMessage}
            >
              <Image
                source={require("../../../../assets/wp.png")}
                style={{ width: 25, height: 20 }}
              />
              <Text style={{ color: "white", fontSize: 10 }}>text</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: COLORS.darkBlue,
                width: 40,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                padding: 5,
                margin: 3,
              }}
              onPress={sendWhatsAppMessage}
            >
              <Image
                source={require("../../../../assets/wp.png")}
                style={{ width: 25, height: 20 }}
              />
              <Text style={{ color: "white", fontSize: 10 }}>image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.darkBlue,
                width: 40,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                padding: 5,
                margin: 3,
              }}
              onPress={pickImage}
            >
              <Image
                source={require("../../../../assets/pic.png")}
                style={{ width: 25, height: 20 }}
              />
              <Text style={{ color: "white", fontSize: 8 }}>picture</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.darkBlue,
                width: 40,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                padding: 5,
                margin: 3,
              }}
              onPress={pickAudio}
            >
              <Image
                source={require("../../../../assets/audio.png")}
                style={{ width: 25, height: 20 }}
              />
              <Text style={{ color: "white", fontSize: 10 }}>audio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.darkBlue,
                width: 40,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                padding: 5,
                margin: 3,
              }}
              onPress={pickVideo}
            >
              <Image
                source={require("../../../../assets/video.png")}
                style={{ width: 25, height: 20 }}
              />
              <Text style={{ color: "white", fontSize: 10 }}>video</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.darkBlue,
                width: 40,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                padding: 5,
                margin: 3,
              }}
              onPress={makePhoneCall}
            >
              <Image
                source={require("../../../../assets/call.png")}
                style={{ width: 25, height: 20 }}
              />
              <Text style={{ color: "white", fontSize: 10 }}>call</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.darkBlue,
                width: 40,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                padding: 5,
                margin: 3,
              }}
              onPress={handleOpenFamilyModal}
            >
              <Image
                source={require("../../../../assets/family.png")}
                style={{ width: 25, height: 20 }}
              />
              <Text style={{ color: "white", fontSize: 10 }}>family</Text>
            </TouchableOpacity>
          </View>
          <View>
            <RadioButton.Group
              onValueChange={(newValue) => setChecked(newValue)}
              value={checked}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginLeft: 10,
                  marginTop: -5,
                }}
              >
                <RadioButton.Item
                  label="Normal Whatsapp"
                  value="first"
                  labelStyle={[textStyle, { fontSize: 14 }]}
                  color={isDarkMode ? "white" : COLORS.darkBlue}
                />
                <RadioButton.Item
                  label="Bussiness Whatsapp"
                  value="second"
                  labelStyle={[textStyle, { fontSize: 14 }]}
                  color={isDarkMode ? "white" : COLORS.darkBlue}
                />
              </View>
            </RadioButton.Group>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: -20,
              justifyContent: "space-around",
            }}
          >
            <ListButtons
              buttonText="Survey"
              iconName="clipboard-search-outline"
              onPress={() => {}}
              buttonHeight={40}
              buttonWidth={100}
              borderRadi={5}
            />
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.darkBlue,
                width: 60,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                padding: 5,
                margin: 3,
                marginTop: 17,
              }}
            >
              <Image
                source={require("../../../../assets/bluetooth.png")}
                style={{ width: 25, height: 20 }}
              />
              <Text style={{ color: "white", fontSize: 10 }}>bluetooth</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.darkBlue,
                width: 60,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                padding: 5,
                margin: 3,
                marginTop: 17,
              }}
            >
              <Image
                source={require("../../../../assets/printer.png")}
                style={{ width: 25, height: 20 }}
              />
              <Text style={{ color: "white", fontSize: 10 }}>Print Slip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.darkBlue,
                width: 60,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                padding: 5,
                margin: 3,
                marginTop: 17,
              }}
            >
              <Image
                source={require("../../../../assets/receipt.png")}
                style={{ width: 25, height: 20 }}
              />
              <Text style={{ color: "white", fontSize: 10 }}>family slip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.darkBlue,
                width: 60,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                padding: 5,
                margin: 3,
                marginTop: 17,
              }}
            >
              <Image
                source={require("../../../../assets/exit.png")}
                style={{ width: 35, height: 35 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 2,
              backgroundColor: COLORS.darkBlue,
              marginTop: -10,
              marginBottom: 10,
            }}
          ></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <ColorIcon
              source={require("../../../../assets/nocolor.png")}
              onPress={() =>
                handleImageSelection(require("../../../../assets/nocolor.png"))
              }
            />
            <ColorIcon
              source={require("../../../../assets/star.png")}
              onPress={() =>
                handleImageSelection(require("../../../../assets/star.png"))
              }
            />
            <ColorIcon
              source={require("../../../../assets/red.png")}
              onPress={() =>
                handleImageSelection(require("../../../../assets/red.png"))
              }
            />
            <ColorIcon
              source={require("../../../../assets/green.png")}
              onPress={() =>
                handleImageSelection(require("../../../../assets/green.png"))
              }
            />
            <ColorIcon
              source={require("../../../../assets/yellow.png")}
              onPress={() =>
                handleImageSelection(require("../../../../assets/yellow.png"))
              }
            />
            <ColorIcon
              source={require("../../../../assets/grey.png")}
              onPress={() =>
                handleImageSelection(require("../../../../assets/grey.png"))
              }
            />
            {selectedImage && (
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                }}
              >
                <Image
                  source={selectedImage}
                  style={{ width: 40, height: 40 }}
                />
              </View>
            )}
          </View>
          <View
            style={{
              height: 2,
              backgroundColor: COLORS.darkBlue,
              marginTop: 10,
              marginBottom: 10,
            }}
          ></View>
          <ScrollView style={{ height: "70%" }}>
            {selectedUser && (
              <>
                <View style={{ display: "flex" }}>
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      paddingVertical: 7,
                    }}
                  >
                    <Text style={[textStyle, { fontSize: 14, marginLeft: 20 }]}>
                      Sr.No. :
                    </Text>
                    <Text
                      style={[textStyle, { marginRight: 50, fontSize: 14 }]}
                    >
                      {selectedUser.id}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      paddingVertical: 7,
                    }}
                  >
                    <Text style={[textStyle, { fontSize: 14, marginLeft: 20 }]}>
                      Name :
                    </Text>
                    <Text
                      style={[textStyle, { marginRight: 50, fontSize: 14 }]}
                    >
                      {selectedUser.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      paddingVertical: 7,
                    }}
                  >
                    <Text style={[textStyle, { fontSize: 14, marginLeft: 19 }]}>
                      Age :
                    </Text>
                    <Text
                      style={[textStyle, { marginRight: 50, fontSize: 14 }]}
                    >
                      27
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      paddingVertical: 7,
                    }}
                  >
                    <Text style={[textStyle, { fontSize: 14, marginLeft: 19 }]}>
                      Phone :
                    </Text>
                    <Text
                      style={[textStyle, { marginLeft: 100, fontSize: 14 }]}
                    >
                      {selectedUser.phone}
                    </Text>
                    <TouchableOpacity
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 30,
                      }}
                      onPress={makePhoneCall}
                    >
                      <Image
                        source={require("../../../../assets/contact.png")}
                        style={{ width: 25, height: 20 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingVertical: 7,
                    }}
                  >
                    <Text style={[textStyle, { fontSize: 14, marginLeft: 20 }]}>
                      Mobile No. 2 :
                    </Text>
                    <Text style={[textStyle, { fontSize: 14, marginLeft: 20 }]}>
                      {selectedUser.phone2}
                    </Text>
                    <SelectCountry
                      style={[styles.dropdown2]}
                      selectedTextStyle={styles.selectedTextStyle}
                      placeholderStyle={[textStyle, styles.placeholderStyle]}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      maxHeight={200}
                      value={value}
                      data={options}
                      valueField="value"
                      labelField="label"
                      imageField="image"
                      placeholder="Op"
                      onChange={(e: Option) => {
                        setOption(e.value);
                        e.onSelect && e.onSelect();
                      }}
                    />
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingVertical: 7,
                    }}
                  >
                    <Text style={[textStyle, { fontSize: 14, marginLeft: 20 }]}>
                      Mobile No. 3 :
                    </Text>
                    <Text style={[textStyle, { fontSize: 14, marginLeft: 20 }]}>
                      {selectedUser.phone2}
                    </Text>
                    <SelectCountry
                      style={styles.dropdown2}
                      selectedTextStyle={styles.selectedTextStyle}
                      placeholderStyle={[textStyle, styles.placeholderStyle]}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      maxHeight={200}
                      value={value}
                      data={options}
                      valueField="value"
                      labelField="label"
                      imageField="image"
                      placeholder="Op"
                      onChange={(e: Option) => {
                        setOption(e.value);
                        e.onSelect && e.onSelect();
                      }}
                    />
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingVertical: 7,
                    }}
                  >
                    <Text style={[textStyle, { fontSize: 14, marginLeft: 20 }]}>
                      Mobile No. 4 :
                    </Text>
                    <Text style={[textStyle, { fontSize: 14, marginLeft: 20 }]}>
                      {selectedUser.phone2}
                    </Text>
                    <SelectCountry
                      style={styles.dropdown2}
                      selectedTextStyle={styles.selectedTextStyle}
                      placeholderStyle={[textStyle, styles.placeholderStyle]}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      maxHeight={200}
                      value={value}
                      data={options}
                      valueField="value"
                      labelField="label"
                      imageField="image"
                      placeholder="Op"
                      onChange={(e: Option) => {
                        setOption(e.value);
                        e.onSelect && e.onSelect();
                      }}
                    />
                  </View>

                  <View
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      paddingVertical: 7,
                    }}
                  >
                    <Text style={[textStyle, { fontSize: 14, marginLeft: 20 }]}>
                      Booth No. :
                    </Text>
                    <Text
                      style={[textStyle, { marginRight: 50, fontSize: 14 }]}
                    >
                      1/ Laxmi Chowk
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      paddingVertical: 7,
                    }}
                  >
                    <Text style={[textStyle, { fontSize: 14, marginLeft: 20 }]}>
                      House No. :
                    </Text>
                    <Text
                      style={[textStyle, { marginRight: 50, fontSize: 14 }]}
                    >
                      1/ Laxmi Chowk
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      paddingVertical: 7,
                    }}
                  >
                    <Text style={[textStyle, { fontSize: 14, marginLeft: 20 }]}>
                      Address :
                    </Text>
                    <Text
                      style={[textStyle, { marginRight: 50, fontSize: 14 }]}
                    >
                      1/ Laxmi Chowk
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 15,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={[
                        textStyle,
                        { marginLeft: 20, marginRight: 10, fontSize: 14 },
                      ]}
                    >
                      Vibhag :
                    </Text>
                    <TextInput
                      style={[
                        containerStyle,
                        {
                          borderColor: COLORS.darkBlue,
                          height: 30,
                          borderWidth: 0.5,
                          width: "50%",
                          paddingHorizontal: 10,
                          marginRight: 15,
                        },
                      ]}
                      placeholder="Vibhag"
                      placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 15,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={[
                        textStyle,
                        { marginLeft: 20, marginRight: 10, fontSize: 14 },
                      ]}
                    >
                      House No. :
                    </Text>
                    <TextInput
                      style={[
                        containerStyle,
                        {
                          borderColor: COLORS.darkBlue,
                          height: 30,

                          borderWidth: 0.5,
                          width: "50%",
                          paddingHorizontal: 10,
                          marginRight: 15,
                        },
                      ]}
                      placeholder="House No."
                      placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 15,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={[
                        textStyle,
                        { marginLeft: 20, marginRight: 10, fontSize: 14 },
                      ]}
                    >
                      Society :
                    </Text>
                    <TextInput
                      style={[
                        containerStyle,
                        {
                          borderColor: COLORS.darkBlue,
                          height: 30,

                          borderWidth: 0.5,
                          width: "50%",
                          paddingHorizontal: 10,
                          marginRight: 15,
                        },
                      ]}
                      placeholder="Society"
                      placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 18,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={[
                        textStyle,
                        { marginLeft: 20, marginRight: 10, fontSize: 14 },
                      ]}
                    >
                      Post :
                    </Text>
                    <TextInput
                      style={[
                        containerStyle,
                        {
                          borderColor: COLORS.darkBlue,
                          height: 30,

                          borderWidth: 0.5,
                          width: "50%",
                          paddingHorizontal: 10,
                          marginRight: 15,
                        },
                      ]}
                      placeholder="Post"
                      placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 15,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={[
                        textStyle,
                        { marginLeft: 20, marginRight: 10, fontSize: 14 },
                      ]}
                    >
                      Caste :
                    </Text>
                    <TextInput
                      style={[
                        containerStyle,
                        {
                          borderColor: COLORS.darkBlue,
                          height: 30,

                          borderWidth: 0.5,
                          width: "50%",
                          paddingHorizontal: 10,
                          marginRight: 15,
                        },
                      ]}
                      placeholder="Caste"
                      placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 15,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={[
                        textStyle,
                        { marginLeft: 20, marginRight: 10, fontSize: 14 },
                      ]}
                    >
                      Party Worker :
                    </Text>
                    <TextInput
                      style={[
                        containerStyle,
                        {
                          borderColor: COLORS.darkBlue,
                          height: 30,

                          borderWidth: 0.5,
                          width: "50%",
                          paddingHorizontal: 10,
                          marginRight: 15,
                        },
                      ]}
                      placeholder="Party Worker"
                      placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 15,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={[
                        textStyle,
                        { marginLeft: 20, marginRight: 10, fontSize: 14 },
                      ]}
                    >
                      PartyWorker Mobile :
                    </Text>
                    <TextInput
                      style={[
                        containerStyle,
                        {
                          borderColor: COLORS.darkBlue,
                          height: 30,

                          borderWidth: 0.5,
                          width: "45%",
                          paddingHorizontal: 10,
                          marginRight: 37,
                        },
                      ]}
                      placeholder="PartyWorker Mobile"
                      placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <RadioButton.Group
                      onValueChange={(newValue) => setChecked(newValue)}
                      value={checked}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          marginHorizontal: 10,
                          alignItems: "center",
                          marginLeft: 20,
                        }}
                      >
                        <Text style={[textStyle]}>Dead? :</Text>
                        <View
                          style={{
                            marginLeft: 70,
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <RadioButton.Item
                            label="No"
                            value="first"
                            labelStyle={[textStyle, { fontSize: 14 }]}
                            color={isDarkMode ? "white" : COLORS.darkBlue}
                          />
                          <RadioButton.Item
                            label="Yes"
                            value="second"
                            labelStyle={[textStyle, { fontSize: 14 }]}
                            color={isDarkMode ? "white" : COLORS.darkBlue}
                          />
                        </View>
                      </View>
                    </RadioButton.Group>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",

                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={[
                        textStyle,
                        { marginLeft: 20, marginRight: 10, fontSize: 14 },
                      ]}
                    >
                      Location :
                    </Text>
                    <TextInput
                      style={[
                        containerStyle,
                        {
                          borderColor: COLORS.darkBlue,
                          height: 30,

                          borderWidth: 0.5,
                          width: "50%",
                          paddingHorizontal: 10,
                          marginRight: 15,
                        },
                      ]}
                      placeholder="Location"
                      placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 18,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={[
                        textStyle,
                        { marginLeft: 20, marginRight: 10, fontSize: 14 },
                      ]}
                    >
                      Location Address :
                    </Text>
                    <TextInput
                      style={[
                        containerStyle,
                        {
                          borderColor: COLORS.darkBlue,

                          borderWidth: 0.5,
                          width: "40%",
                          paddingHorizontal: 10,
                          marginRight: 15,
                          height: 60,
                        },
                      ]}
                      placeholder="Post"
                      placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 10,
                      marginHorizontal: 15,
                    }}
                  >
                    <ListButtons
                      buttonText="Get Locations"
                      iconName=""
                      onPress={() => {}}
                      buttonHeight={40}
                      buttonWidth={150}
                      borderRadi={10}
                    />
                    <ListButtons
                      buttonText="Get Directions"
                      iconName=""
                      onPress={() => {}}
                      buttonHeight={40}
                      buttonWidth={150}
                      borderRadi={10}
                    />
                  </View>
                  <View style={{ marginLeft: 100, marginTop: -10 }}>
                    <ListButtons
                      buttonText="Save"
                      iconName=""
                      onPress={() => {}}
                      buttonHeight={40}
                      buttonWidth={150}
                      borderRadi={10}
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ marginTop: -10 }}>
                      <ListButtons
                        buttonText="All Voters on This Address"
                        iconName=""
                        onPress={() => {}}
                        buttonHeight={40}
                        buttonWidth={300}
                        borderRadi={10}
                      />
                    </View>
                    <View style={{ marginTop: -20 }}>
                      <ListButtons
                        buttonText="All Voters on This Booth"
                        iconName=""
                        onPress={() => {}}
                        buttonHeight={40}
                        buttonWidth={300}
                        borderRadi={10}
                      />
                    </View>
                  </View>
                </View>
              </>
            )}
          </ScrollView>
          {/* <Button title="Save" onPress={saveEditedUserData} /> */}
        </View>
      </Modal>
    );
  });

  return (
    <>
      <View style={[containerStyle]}>
        <Modal visible={familyModalVisible} animationType="slide">
          {selectedUser && (
            <View style={[containerStyle]}>
              <Text style={[textStyle, { alignSelf: "center", marginTop: 10 }]}>
                {selectedUser.name} Family
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 10,
                }}
              >
                <ListButtons
                  buttonText="Add"
                  iconName=""
                  onPress={() => {}}
                  buttonWidth={60}
                  buttonHeight={45}
                  borderRadi={10}
                />
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.darkBlue,
                    width: 60,
                    height: 45,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    padding: 5,
                    margin: 3,
                    marginTop: 17,
                  }}
                >
                  <Image
                    source={require("../../../../assets/bluetooth.png")}
                    style={{ width: 25, height: 20 }}
                  />
                  <Text style={{ color: "white", fontSize: 10 }}>
                    bluetooth
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.darkBlue,
                    width: 60,
                    height: 45,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    padding: 5,
                    margin: 3,
                    marginTop: 17,
                  }}
                >
                  <Image
                    source={require("../../../../assets/receipt.png")}
                    style={{ width: 25, height: 20 }}
                  />
                  <Text style={{ color: "white", fontSize: 10 }}>
                    family slip
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.darkBlue,
                    width: 60,
                    height: 45,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    padding: 5,
                    margin: 3,
                    marginTop: 18,
                  }}
                >
                  <Image
                    source={require("../../../../assets/sms.png")}
                    style={{ width: 25, height: 20 }}
                  />
                  <Text style={{ color: "white", fontSize: 10 }}>sms</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginTop: -20,
                  alignSelf: "center",
                }}
              >
                <ListButtons
                  buttonText="Add data to Family"
                  iconName="content-save-outline"
                  onPress={() => setFamilyModalVisible(false)}
                  buttonHeight={40}
                  buttonWidth={250}
                  borderRadi={10}
                />
              </View>
              <View
                style={{
                  height: 2,
                  width: "100%",
                  backgroundColor: COLORS.darkBlue,
                }}
              ></View>
              <ScrollView style={{ height: "60%" }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 15,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={[
                      textStyle,
                      { marginLeft: 20, marginRight: 10, fontSize: 18 },
                    ]}
                  >
                    Mobile :
                  </Text>
                  <TextInput
                    style={[
                      containerStyle,
                      {
                        borderColor: COLORS.darkBlue,
                        height: 30,

                        borderWidth: 0.5,
                        width: "50%",
                        paddingHorizontal: 10,
                        marginRight: 15,
                      },
                    ]}
                    placeholder="Mobile"
                    placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 15,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={[
                      textStyle,
                      { marginLeft: 20, marginRight: 10, fontSize: 18 },
                    ]}
                  >
                    Mobile 2 :
                  </Text>
                  <TextInput
                    style={[
                      containerStyle,
                      {
                        borderColor: COLORS.darkBlue,
                        height: 30,

                        borderWidth: 0.5,
                        width: "50%",
                        paddingHorizontal: 10,
                        marginRight: 15,
                      },
                    ]}
                    placeholder="Mobile 2"
                    placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 15,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={[
                      textStyle,
                      { marginLeft: 20, marginRight: 10, fontSize: 18 },
                    ]}
                  >
                    Mobile 3 :
                  </Text>
                  <TextInput
                    style={[
                      containerStyle,
                      {
                        borderColor: COLORS.darkBlue,
                        height: 30,

                        borderWidth: 0.5,
                        width: "50%",
                        paddingHorizontal: 10,
                        marginRight: 15,
                      },
                    ]}
                    placeholder="Mobile 3"
                    placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 15,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={[
                      textStyle,
                      { marginLeft: 20, marginRight: 10, fontSize: 18 },
                    ]}
                  >
                    Mobile 4 :
                  </Text>
                  <TextInput
                    style={[
                      containerStyle,
                      {
                        borderColor: COLORS.darkBlue,
                        height: 30,

                        borderWidth: 0.5,
                        width: "50%",
                        paddingHorizontal: 10,
                        marginRight: 15,
                      },
                    ]}
                    placeholder="Mobile 4"
                    placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 15,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={[
                      textStyle,
                      { marginLeft: 20, marginRight: 10, fontSize: 18 },
                    ]}
                  >
                    House No. :
                  </Text>
                  <TextInput
                    style={[
                      containerStyle,
                      {
                        borderColor: COLORS.darkBlue,
                        height: 30,

                        borderWidth: 0.5,
                        width: "50%",
                        paddingHorizontal: 10,
                        marginRight: 15,
                      },
                    ]}
                    placeholder="House No."
                    placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 15,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={[
                      textStyle,
                      { marginLeft: 20, marginRight: 10, fontSize: 18 },
                    ]}
                  >
                    Society :
                  </Text>
                  <TextInput
                    style={[
                      containerStyle,
                      {
                        borderColor: COLORS.darkBlue,
                        height: 30,

                        borderWidth: 0.5,
                        width: "50%",
                        paddingHorizontal: 10,
                        marginRight: 15,
                      },
                    ]}
                    placeholder="Society"
                    placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 15,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={[
                      textStyle,
                      { marginLeft: 20, marginRight: 10, fontSize: 18 },
                    ]}
                  >
                    Vibhag :
                  </Text>
                  <TextInput
                    style={[
                      containerStyle,
                      {
                        borderColor: COLORS.darkBlue,
                        height: 30,

                        borderWidth: 0.5,
                        width: "50%",
                        paddingHorizontal: 10,
                        marginRight: 15,
                      },
                    ]}
                    placeholder="Vibhag"
                    placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                  />
                </View>
                <View
                  style={[
                    containerStyle,
                    {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    },
                  ]}
                >
                  <CheckBox
                    title="Rental"
                    checked={check1}
                    onPress={() => setCheck1(!check1)}
                    checkedColor={COLORS.darkBlue}
                    containerStyle={[containerStyle]}
                  />
                  <CheckBox
                    title="Migrated"
                    checked={check2}
                    onPress={() => setCheck2(!check2)}
                    checkedColor={COLORS.darkBlue}
                    containerStyle={[containerStyle]}
                  />
                  <CheckBox
                    title="Closed"
                    checked={check3}
                    onPress={() => setCheck3(!check3)}
                    checkedColor={COLORS.darkBlue}
                    containerStyle={[containerStyle]}
                  />
                </View>
                {check2 && (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: 15,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={[
                        textStyle,
                        {
                          marginLeft: 20,
                          marginRight: 10,
                          fontSize: 18,
                        },
                      ]}
                    >
                      Migrated to :
                    </Text>
                    <TextInput
                      style={[
                        containerStyle,
                        {
                          borderColor: COLORS.darkBlue,
                          height: 30,

                          borderWidth: 0.5,
                          width: "50%",
                          paddingHorizontal: 10,
                          marginRight: 15,
                        },
                      ]}
                      placeholder="Migrated to"
                      placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                    />
                  </View>
                )}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",

                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={[
                      textStyle,
                      { marginLeft: 20, marginRight: 10, fontSize: 18 },
                    ]}
                  >
                    Old Town :
                  </Text>
                  <TextInput
                    style={[
                      containerStyle,
                      {
                        borderColor: COLORS.darkBlue,
                        height: 30,
                        borderWidth: 0.5,
                        width: "50%",
                        paddingHorizontal: 10,
                        marginRight: 15,
                      },
                    ]}
                    placeholder="Old Town"
                    placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 15,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={[
                      textStyle,
                      { marginLeft: 20, marginRight: 10, fontSize: 18 },
                    ]}
                  >
                    Caste :
                  </Text>
                  <TextInput
                    style={[
                      containerStyle,
                      {
                        borderColor: COLORS.darkBlue,
                        height: 30,

                        borderWidth: 0.5,
                        width: "50%",
                        paddingHorizontal: 10,
                        marginRight: 15,
                      },
                    ]}
                    placeholder="Caste"
                    placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 15,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={[
                      textStyle,
                      { marginLeft: 20, marginRight: 10, fontSize: 18 },
                    ]}
                  >
                    PartyWorker :
                  </Text>
                  <TextInput
                    style={[
                      containerStyle,
                      {
                        borderColor: COLORS.darkBlue,
                        height: 30,

                        borderWidth: 0.5,
                        width: "50%",
                        paddingHorizontal: 10,
                        marginRight: 15,
                      },
                    ]}
                    placeholder="PartyWorker"
                    placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 15,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={[
                      textStyle,
                      { marginLeft: 20, marginRight: 10, fontSize: 14 },
                    ]}
                  >
                    PartyWorker Mobile :
                  </Text>
                  <TextInput
                    style={[
                      containerStyle,
                      {
                        borderColor: COLORS.darkBlue,
                        height: 30,

                        borderWidth: 0.5,
                        width: "45%",
                        paddingHorizontal: 10,
                        marginRight: 15,
                      },
                    ]}
                    placeholder="PartyWorker Mobile"
                    placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                  />
                </View>
                <View
                  style={[containerStyle, styles.container, { marginTop: 15 }]}
                >
                  <Text
                    style={[
                      textStyle,
                      { marginRight: 10, marginLeft: 20, fontSize: 18 },
                    ]}
                  >
                    Relation
                  </Text>
                  <Dropdown
                    style={[
                      containerStyle,
                      styles.dropdown,
                      {
                        borderColor: COLORS.darkBlue,
                      },
                    ]}
                    placeholderStyle={[textStyle, styles.placeholderStyle]}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={myData}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? "Select item" : "..."}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                      setValue(item.value);
                      setIsFocus(false);
                    }}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 15,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={[
                      textStyle,
                      { marginLeft: 20, marginRight: 10, fontSize: 18 },
                    ]}
                  >
                    Location :
                  </Text>
                  <TextInput
                    style={[
                      containerStyle,
                      {
                        borderColor: COLORS.darkBlue,
                        height: 30,

                        borderWidth: 0.5,
                        width: "50%",
                        paddingHorizontal: 10,
                        marginRight: 15,
                      },
                    ]}
                    placeholder="Location"
                    placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 15,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={[
                      textStyle,
                      { marginLeft: 20, marginRight: 10, fontSize: 14 },
                    ]}
                  >
                    Location Address :
                  </Text>
                  <TextInput
                    style={[
                      containerStyle,
                      {
                        borderColor: COLORS.darkBlue,
                        height: 70,

                        borderWidth: 0.5,
                        width: "50%",
                        paddingHorizontal: 10,
                        marginRight: 15,
                      },
                    ]}
                    placeholder="Location Address"
                    placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 20,
                  }}
                >
                  <ListButtons
                    buttonText="Get Location"
                    iconName=""
                    onPress={() => {}}
                    buttonHeight={40}
                    borderRadi={10}
                  />
                  <ListButtons
                    buttonText="Get Direction"
                    iconName=""
                    onPress={() => {}}
                    buttonHeight={40}
                    borderRadi={10}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 15,
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 15,
                  }}
                >
                  <Text
                    style={[
                      textStyle,
                      { marginLeft: 20, marginRight: 10, fontSize: 14 },
                    ]}
                  >
                    Problems :
                  </Text>
                  <TextInput
                    style={[
                      containerStyle,
                      {
                        borderColor: COLORS.darkBlue,
                        height: 30,

                        borderWidth: 0.5,
                        width: "50%",
                        paddingHorizontal: 10,
                        marginRight: 15,
                      },
                    ]}
                    placeholder="Problems"
                    placeholderTextColor={isDarkMode ? "lightgrey" : "black"}
                  />
                </View>
              </ScrollView>
              {viewUserData && (
                <View
                  style={[
                    containerStyle,
                    {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      height: "20%",
                      width: "100%",
                      elevation: 7,
                      borderWidth: 0.5,
                      borderColor: COLORS.darkBlue,
                    },
                  ]}
                >
                  <Text style={[textStyle, { marginLeft: 10, marginTop: 10 }]}>
                    {selectedUser.id}
                  </Text>
                  <Text style={[textStyle, { marginTop: 10 }]}>
                    {selectedUser.name}
                  </Text>
                  <View style={{ marginRight: 10, marginTop: -10 }}>
                    <ListButtons
                      buttonText="Remove"
                      iconName=""
                      onPress={() => setViewUserData(false)}
                      buttonHeight={40}
                      buttonWidth={80}
                      borderRadi={10}
                    />
                  </View>
                </View>
              )}
            </View>
          )}
        </Modal>
        <View style={[containerStyle, styles.container1]}>
          <View
            style={[
              styles.searchBar,
              {
                marginLeft: 20,
                marginRight: 20,
                borderColor: isDarkMode ? "white" : COLORS.darkBlue,
                borderRadius: 10,
              },
            ]}
          >
            <TextInput
              style={[textStyle, styles.input]}
              placeholder={t("pFullName")}
              placeholderTextColor={isDarkMode ? "white" : "black"}
              value={searchText}
              onChangeText={(text) => {
                setSearchText(text);
                handleSearch(text);
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={[
                styles.searchBar,
                {
                  width: 110,
                  marginLeft: 20,
                  borderColor: isDarkMode ? "white" : COLORS.darkBlue,
                  borderRadius: 10,
                },
              ]}
            >
              <TextInput
                style={[containerStyle, styles.input]}
                placeholder={t("lName")}
                placeholderTextColor={isDarkMode ? "white" : "black"}
                value={searchText}
                onChangeText={(text) => {
                  setSearchText(text);
                  handleSearch(text);
                }}
              />
            </View>
            <View
              style={[
                containerStyle,
                styles.searchBar,
                {
                  width: 80,
                  borderColor: isDarkMode ? "white" : COLORS.darkBlue,
                  borderRadius: 10,
                },
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder={t("name")}
                placeholderTextColor={isDarkMode ? "white" : "black"}
                value={searchText}
                onChangeText={(text) => {
                  setSearchText(text);
                  handleSearch(text);
                }}
              />
            </View>
            <View
              style={[
                styles.searchBar,
                {
                  width: 120,
                  marginRight: 10,
                  borderColor: isDarkMode ? "white" : COLORS.darkBlue,
                  borderRadius: 10,
                },
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder={t("pMiddleName")}
                placeholderTextColor={isDarkMode ? "white" : "black"}
                value={searchText}
                onChangeText={(text) => {
                  setSearchText(text);
                  handleSearch(text);
                }}
              />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={[
                styles.searchBar,
                {
                  width: 160,
                  marginLeft: 20,
                  marginRight: 10,
                  borderColor: isDarkMode ? "white" : COLORS.darkBlue,
                  borderRadius: 10,
                },
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder={t("pCard")}
                placeholderTextColor={isDarkMode ? "white" : "black"}
                value={searchText}
                onChangeText={(text) => {
                  setSearchText(text);
                  handleSearch(text);
                }}
              />
            </View>
            <View
              style={[
                styles.searchBar,
                {
                  width: 180,
                  borderColor: isDarkMode ? "white" : COLORS.darkBlue,
                  borderRadius: 10,
                },
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder={t("pBooth")}
                placeholderTextColor={isDarkMode ? "white" : "black"}
                value={searchText}
                onChangeText={(text) => {
                  setSearchText(text);
                  handleSearch(text);
                }}
              />
            </View>
          </View>
          <View style={styles.buttonContainer1}>
            <TouchableOpacity style={styles.button}>
              <Icon name="text-search" size={18} color="white" />
              <Text style={styles.searchBtn}>{t("search")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon name="rotate-left" size={18} color="white" />
              <Text style={styles.searchBtn}>{t("reset")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon name="file-document-outline" size={18} color="white" />
              <Text style={styles.searchBtn}>Excel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer2}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.searchBtn}>General SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.searchBtn}>Festive SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.searchBtn}>Voter Slip</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[containerStyle, { display: "flex", flexDirection: "row" }]}
          >
            <RadioButton.Group
              onValueChange={(newValue) => setChecked(newValue)}
              value={checked}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 20,
                }}
              >
                <RadioButton.Item
                  label="All"
                  value="first"
                  labelStyle={textStyle}
                  color={isDarkMode ? "white" : COLORS.darkBlue}
                />
                <RadioButton.Item
                  label="Survey"
                  value="second"
                  labelStyle={textStyle}
                  color={isDarkMode ? "white" : COLORS.darkBlue}
                />
                <RadioButton.Item
                  label="Non Survey"
                  value="third"
                  labelStyle={textStyle}
                  color={isDarkMode ? "white" : COLORS.darkBlue}
                />
              </View>
            </RadioButton.Group>
          </View>
        </View>
      </View>

      <View style={[containerStyle, styles.tableContainer]}>
        <View style={styles.headerTopBar}>
          <Text style={styles.headerTopBarText}>{t("users")}</Text>
        </View>
        <View style={styles.header}>
          <Text style={[textStyle, styles.heading, { width: 90 }]}>Photo</Text>
          <Text style={[textStyle, styles.heading, { width: 90 }]}>Name</Text>
          <Text style={[textStyle, styles.heading, { width: 110 }]}>Phone</Text>
        </View>

        <UserTable data={searchResults} onEdit={handleEditUser} />
        <EditUserModal />
      </View>
    </>
  );
};

// nameWiseList

const styles = StyleSheet.create({
  container1: {
    height: "50%",
  },
  container2: {
    flex: 1,
    padding: 16,
    paddingBottom: 10,
  },
  tableContainer: {
    paddingHorizontal: 20,
    flex: 1,
    marginTop: 10,
  },
  headerTopBar: {
    backgroundColor: COLORS.darkBlue,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  headerTopBarText: {
    color: "white",
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  heading: {
    fontSize: 18,
    marginLeft: 18,
  },
  searchBar: {
    flexDirection: "row",
    paddingHorizontal: 10,
    borderWidth: 0.5,
    alignItems: "center",
    marginTop: 20,
    padding: 7,
    marginHorizontal: 10,
  },
  input: {
    fontSize: 16,
  },
  buttonContainer1: {
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 10,
  },
  buttonContainer2: {
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 5,
  },
  button: {
    backgroundColor: COLORS.darkBlue,
    width: 100,
    margin: 5,
    padding: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  searchBtn: {
    color: "white",
  },
  resultItem: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 8,
  },
  resultText: {
    fontSize: 18,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
  },
  dropdown: {
    height: 35,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 8,
    width: 150,
  },
  dropdown2: {
    height: 30,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 5,
    width: "18%",
    marginRight: 25,
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },

  inputSearchStyle: {
    height: 30,
    fontSize: 14,
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  lightContainer: {
    backgroundColor: "white",
  },
  darkContainer: {
    backgroundColor: "#14213d",
  },
  text: {
    fontSize: 24,
  },
  lightText: {
    color: "#38385b",
  },
  darkText: {
    color: "white",
  },
});

export default SearchScreen;
