import React from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import styles from "./nearbyjobs.style";
import { useRouter } from "expo-router";
import useFetch from "../../../hook/useFetch";
import { TouchableOpacity } from "react-native";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

const Nearbyjobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "Python Developer",
    num_pages: 1,
  });

  // console.log({data})
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Popular Job Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-by-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
