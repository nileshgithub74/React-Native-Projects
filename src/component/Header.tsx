import { View, Image, Text } from 'react-native';
import React from 'react';

const HeaderComponent = () => {
  return (
    <View className="flex-1">
      <View className="flex-[0.29]  justify-center bg-blue-500">
        <View className='flex-row items-center'>
          <Image source={require('@/assets/img/avatar.png')} className="m-8 rounded-full" />

          <Text className='text-2xl '> Welcome User</Text>
        

        <View className='ml-10 justify-between '>

            <Image  source={require('@/assets/img/icon.png')}/>
        </View>
        </View>


      </View>
    </View>
  );
};

export default HeaderComponent;
