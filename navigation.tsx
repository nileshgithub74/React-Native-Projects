import LoginScreen from '@/Screen/Login/Login';
import Onboarding from '@/Screen/Onboarding/Onboarding';
import SingupScreen from '@/Screen/SignUp/SingUp';
import OTPScreen from '@/Screen/OTP/OTP';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/Screen/Home/HomeScreen';
import SearchScreen from '@/Screen/Search/SearchScreen';
import DoctorsList from '@/component/Doctorlist/DoctorsList';
import DoctorDetail from '@/Screen/DoctorDetail/DoctorDetail';

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={SingupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="otp" component={OTPScreen} />
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="search" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="doctorList" component={DoctorsList} options={{ headerShown: false }} />
        <Stack.Screen name="doctorDetail" component={DoctorDetail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;
