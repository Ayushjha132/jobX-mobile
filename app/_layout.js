import {SplashScreen, Stack} from "expo-router";
import {useFonts} from "expo-font";
import {useCallback} from "react";

export default function Layout() {

    SplashScreen.preventAutoHideAsync();
    const [fontLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(
        async () => {
            if (fontLoaded) {
                await SplashScreen.hideAsync();
            }
        },
        [fontLoaded],
    );
    if (!fontLoaded) return null;

    return <Stack onLayout={onLayoutRootView()}/>
}
