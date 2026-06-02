import {
  View,
  Image,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    Keyboard.dismiss();
    console.log('Phone number:', phoneNumber);
   
     navigation.navigate('otp');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1">
          <ImageBackground
            source={require('../../assets/img/splash.png')}
            style={{ flex: 1 }}
            resizeMode="cover">
            
            <View className="mt-8 flex-1 items-center justify-center">
              <Image
                source={require('../../assets/img/facility.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>

            {/* BOTTOM CARD SECTION */}
            <View className="flex-[0.8] rounded-tl-2xl rounded-tr-2xl bg-white px-6 pt-6">
              <Text className="text-center text-2xl font-semibold">Log in or Sign up</Text>

              <View className="mt-4 flex-row rounded-2xl border-2 border-gray-400 p-4">
                <Text className="mr-3">+91</Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  maxLength={10}
                  returnKeyType="done"
                  onSubmitEditing={handleLogin}
                  className="flex-1"
                />
              </View>
              <TouchableOpacity
                onPress={handleLogin}
                className="mt-10 items-center rounded-2xl bg-blue-500 py-4">
                <Text className="text-lg text-white">Login with mobile number</Text>
              </TouchableOpacity>

              <View className="m-3 flex-[0.3] items-center justify-center">
                <Text className="text-2xl text-gray-400">OR</Text>
              </View>

              <View className="flex-1">
                <TouchableOpacity
                  onPress={() => console.log('Google login')}
                  className="mt-4 flex-row items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-4">
                  <Image
                    source={require('../../assets/img/google_icon.png')}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text className="ml-3 text-base font-medium text-gray-800">
                    Continue with Google
                  </Text>
                </TouchableOpacity>

                <View className="mt-6 flex-row justify-center">
                  <Text className="text-gray-500">Don't have an account?</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                    <Text className="ml-2 font-semibold text-blue-500">Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;