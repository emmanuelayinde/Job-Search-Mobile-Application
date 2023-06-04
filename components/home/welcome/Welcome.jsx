import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";
import { useRouter } from "expo-router";

const jobTypes = ["Full-time", "Part-time", "Remote"];

const Welcome = ({ searchTerm, setSearchTerm, onHandleSearch }) => {
  const [activeJobType, setActiveJobType] = useState(jobTypes[0]);

  const router = useRouter();
  return (
    <View>
      {/* Name and Intro */}
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Emmanuel</Text>
        <Text style={styles.welcomeMessage}>Find your perfect jobs here</Text>
      </View>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => onHandleSearch()}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      {/* Job categories tabs */}
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
