import React from "react";
import { View, Text } from "react-native";

import styles from "./about.style";

const About = ({ description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{description}</Text>
      </View>
    </View>
  );
};

export default About;
