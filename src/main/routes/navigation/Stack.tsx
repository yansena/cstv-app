import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@presentation/pages/Home";
import { MatchDetail } from "@presentation/pages/MatchDetail";
import { MatchProps } from "@data/redux/slices/matchs-slice";

export type StackNavigatorParamList = {
  Home: undefined;
  MatchDetail: { match: MatchProps };
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
