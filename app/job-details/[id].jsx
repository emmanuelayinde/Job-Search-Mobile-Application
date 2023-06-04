import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { Stack, useRouter, useSearchParams } from "expo-router";
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES, icons, images } from "../../constants";

const tabs = ["About", "Qualifications", "Responsibilities"];

function JobDetails() {
  const params = useSearchParams();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const displayJobContent = () => {
    switch (activeTab) {
      case tabs[0]:
        return <JobAbout description={data[0]?.job_description ?? ["N/A"]} />;

      case tabs[1]:
        return (
          <Specifics
            title={tabs[1]}
            points={data[0]?.job_highlights?.[tabs[1]] ?? ["N/A"]}
          />
        );
      case tabs[2]:
        return (
          <Specifics
            title={tabs[2]}
            points={data[0]?.job_highlights?.[tabs[2]] ?? ["N/A"]}
          />
        );

      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: true,
          headerTitle: "Job Details",
          headerTitleAlign: "center",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              size="60%"
              handleOnPress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} size="60%" />
          ),
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text> No data</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 10 }}>
            <Company
              companyLogo={data[0]?.employer_logo}
              jobTitle={data[0]?.job_title}
              companyName={data[0]?.employer_name}
              location={data[0]?.job_country}
            />
            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </View>
        )}
        {displayJobContent()}
      </ScrollView>

      <JobFooter
        url={
          data[0]?.job_google_link ??
          data[0]?.job_apply_link ??
          "https://careers.google.com/jobs/results"
        }
      />
    </SafeAreaView>
  );
}

export default JobDetails;
