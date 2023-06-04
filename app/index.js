import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, View } from "react-native";
import { COLORS, SIZES, icons, images } from "../constants";
import ScreenHeaderBtn from "./../components/common/header/ScreenHeaderBtn";
import Welcome from "./../components/home/welcome/Welcome";
import Popularjobs from "./../components/home/popular/Popularjobs";
import Nearbyjobs from "./../components/home/nearby/Nearbyjobs";
import { useState } from "react";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: true,
          headerTitle: "",
          headerTitleAlign: "center",
          headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} size="60%" />,
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.job} size="100%" />
          ),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onHandleSearch={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
