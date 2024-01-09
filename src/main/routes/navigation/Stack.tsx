import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@presentation/pages/Home";
import { MatchDetail } from "@presentation/pages/MatchDetail";

type StackNavigatorParamList = {
  Home: undefined;
  MatchDetail: undefined;
};

const { Navigator, Screen } =
  createNativeStackNavigator<StackNavigatorParamList>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="MatchDetail" component={MatchDetail} />
    </Navigator>
  );
}
