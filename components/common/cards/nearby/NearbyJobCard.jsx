import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils/checkImageURL";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job?.employer_logo)
              ? job?.employer_logo
              : "https://th.bing.com/th/id/R.e50222ed4365605aa15758e447e6fee0?rik=5degLdVJNMl3Qw&pid=ImgRaw&r=0",
          }}
          style={styles.logImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title}
        </Text>
        <Text style={styles.jobType}>{job?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
