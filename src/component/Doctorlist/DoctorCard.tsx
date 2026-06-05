import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

interface DoctorCardProps {
  name: string;
  rating: number;
  image: string;
  fees: number;
  speciality?: string;
  id?: number;
}

const DoctorCard = ({ name, rating, image, fees, speciality, id }: DoctorCardProps) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate('doctorDetail', {
      doctor: { name, rating, image, fees, speciality, id }
    });
  };

  return (
    <TouchableOpacity 
      className="bg-white rounded-2xl overflow-hidden shadow-lg mr-4 mb-4"
      onPress={handlePress}
    >
      <View className="relative">
        <Image 
          source={{ uri: image }} 
          className="w-full h-64 bg-gray-200"
          resizeMode="cover"
        />
        <View className="absolute top-3 right-3 bg-white/95 rounded-full px-3 py-1.5 flex-row items-center shadow-md">
          <Text className="text-yellow-500 text-sm mr-1">⭐</Text>
          <Text className="text-gray-800 font-semibold text-sm">{rating}</Text>
        </View>
      </View>

      <View className="p-4">
        <Text className="text-gray-900 text-lg font-bold mb-1" numberOfLines={1}>
          {name}
        </Text>
        
        {speciality && (
          <Text className="text-gray-500 text-sm mb-3" numberOfLines={1}>
            {speciality}
          </Text>
        )}

        <View className="flex-row items-center justify-between mt-2">
          <View>
            <Text className="text-gray-500 text-xs mb-1">Consultation Fee</Text>
            <Text className="text-emerald-600 text-xl font-bold">₹{fees}</Text>
          </View>
          <View className="bg-blue-500 rounded-full px-5 py-2.5">
            <Text className="text-white text-sm font-semibold">Book</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;
