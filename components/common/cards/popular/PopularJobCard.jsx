import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils/checkImageURL";


const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={handleCardPress}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item?.employer_logo
              : 'https://th.bing.com/th/id/R.e50222ed4365605aa15758e447e6fee0?rik=5degLdVJNMl3Qw&pid=ImgRaw&r=0',
          }}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item?.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item?.job_title}
        </Text>
        <Text style={styles.location}>{item?.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
