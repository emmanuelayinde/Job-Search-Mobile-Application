import React, { useState } from "react";
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";

import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import PopularJobCard from "./../../common/cards/popular/PopularJobCard";
import { SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });

  // console.log({data})
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Popular Job Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      {/*  */}
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text> Something went wrong </Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} selectedJob={selectedJob} handleCardPress={() => { setSelectedJob(item?.job_id);router.push(`/job-details/${item?.job_id}`)}} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
