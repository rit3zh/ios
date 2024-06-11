import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { LoginStyles as style } from "@/stylesheet/screens/onboarding/Login";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CheckBox from "@react-native-community/checkbox";
import { GradientButton, SocialButton } from "@/components";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { hasDynamicIsland } from "react-native-device-info";

export function Signup(props: NativeStackHeaderProps) {
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);

  return (
    <ScrollView contentInsetAdjustmentBehavior="always">
      <SafeAreaView>
        <View style={style.headerContent}>
          <MaterialCommunityIcons
            name="star-three-points"
            size={50}
            color="white"
          />

          <View style={style.dot} />
          <View style={style.line} />
        </View>

        <View style={style.topContent}>
          <Text style={style.titleText}>Create an account ✨</Text>
          <View style={style.descriptionContainer}>
            <Text style={style.description}>
              Welcome! Please enter your details.
            </Text>
          </View>
        </View>

        <View style={style.textInputContainer}>
          <View style={style.upperTextInputTextContainer}>
            <Text style={style.upperTextInputText}>Name</Text>
          </View>
          <View style={style.searchContainerStyle}>
            <View style={style.iconContainer}>
              <AntDesign name="user" size={24} color="gray" />
            </View>
            <View style={style.textInput}>
              <TextInput
                placeholder="Enter your email"
                style={{ marginLeft: 0 }}
              />
            </View>
          </View>
        </View>

        <View style={[style.textInputContainer, { marginTop: 10 }]}>
          <View style={style.upperTextInputTextContainer}>
            <Text style={style.upperTextInputText}>Email</Text>
          </View>
          <View style={style.searchContainerStyle}>
            <View style={style.iconContainer}>
              <Ionicons name="mail-outline" size={24} color="gray" />
            </View>
            <View style={style.textInput}>
              <TextInput
                placeholder="Enter your email"
                style={{ marginLeft: 0 }}
              />
            </View>
          </View>
        </View>

        <View style={[style.textInputContainer, { marginTop: 10 }]}>
          <View style={style.upperTextInputTextContainer}>
            <Text style={style.upperTextInputText}>Password</Text>
          </View>
          <View style={style.searchContainerStyle}>
            <View style={style.iconContainer}>
              <Ionicons name="lock-closed-outline" size={24} color="gray" />
            </View>
            <View style={style.textInput}>
              <TextInput placeholder="Enter your password" secureTextEntry />
            </View>
            <View style={style.leftIconContainer}>
              <Ionicons name="eye-outline" size={24} color="gray" />
            </View>
          </View>
        </View>

        {/* checkbox */}
        <View style={style.footerContent}>
          <CheckBox
            boxType="circle"
            disabled={false}
            style={style.checkBox}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />

          <Text style={style.footerText}>Remember for 30 days</Text>
        </View>
        <View style={style.gradientButton}>
          <GradientButton text="Sign up" />
        </View>

        <View style={style.socialButtons}>
          <SocialButton
            image="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            text="Google"
          />
          <View style={{ marginTop: 15 }}>
            <SocialButton
              image="https://freepnglogo.com/images/all_img/1697562496facebook-logo-png.png"
              text="Facebook"
            />
          </View>
        </View>

        <View
          style={[
            style.footerContentContainer,
            {
              height: hasDynamicIsland()
                ? heightPercentageToDP(10)
                : heightPercentageToDP(8),
            },
          ]}
        >
          <Text style={style.footerContentText}>
            Don't have an account?{" "}
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
              Sign up
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
