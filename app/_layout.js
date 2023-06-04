import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useCallback } from "react";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";

preventAutoHideAsync();

function Layout() {
  const [loadedFonts] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutFontView = useCallback(async () => {
    if (loadedFonts) {
      await hideAsync();
    }
  }, [loadedFonts]);

  if (!loadedFonts) return null;

  return <Stack onLayout={onLayoutFontView} />;
}

export default Layout;
