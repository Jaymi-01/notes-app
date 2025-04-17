import { Stack } from "expo-router";

const RootLayout =() => {
  return(
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffd248",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
        contentStyle: {
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: "#ffffff",
        }
      }}>
        <Stack.Screen name="index" options={{title: "Home"}} />
    </Stack>
  );
}

export default RootLayout;