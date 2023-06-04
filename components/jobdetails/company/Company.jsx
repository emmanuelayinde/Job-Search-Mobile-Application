import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { checkImageURL } from "../../../utils/checkImageURL";
import { icons } from "../../../constants";

const Company = ({ companyLogo, location, companyName, jobTitle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://th.bing.com/th/id/R.e50222ed4365605aa15758e447e6fee0?rik=5degLdVJNMl3Qw&pid=ImgRaw&r=0",
          }}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
        <View style={styles.companyInfoBox}>
          <Text style={styles.companyName}>{companyName} /</Text>
          <Image source={icons.location} style={styles.locationImage} />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
