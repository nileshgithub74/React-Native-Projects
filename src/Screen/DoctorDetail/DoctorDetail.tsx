import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

const DoctorDetail = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const doctor = route.params?.doctor;

  if (!doctor) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-gray-500">No doctor data available</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 pt-12 pb-4 flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Text className="text-2xl">←</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">My Appointment</Text>
      </View>

      {/* Doctor Image */}
      <View className="px-4 mb-6">
        <Image
          source={{ uri: doctor.image }}
          className="w-full h-80 rounded-3xl bg-gray-200"
          resizeMode="cover"
        />
      </View>

      {/* Doctor Info */}
      <View className="px-4">
        <Text className="text-2xl font-bold text-gray-900 mb-1">{doctor.name}</Text>
        <View className="flex-row items-center mb-6">
          <Text className="text-gray-500 text-base mr-2">
            {doctor.speciality || 'Specialist'} | V-care Clinic
          </Text>
        </View>

        {/* Rating */}
        <View className="flex-row items-center mb-6">
          <Text className="text-yellow-500 text-lg mr-1">⭐</Text>
          <Text className="text-gray-900 font-bold text-lg mr-1">{doctor.rating}</Text>
          <Text className="text-gray-400 text-sm">(332 reviews)</Text>
        </View>

        {/* Stats */}
        <View className="flex-row justify-between mb-8 px-2">
          <View className="items-center">
            <View className="w-12 h-12 bg-blue-50 rounded-full items-center justify-center mb-2">
              <Text className="text-blue-500 text-xl">👥</Text>
            </View>
            <Text className="text-blue-500 font-bold text-lg">120+</Text>
            <Text className="text-gray-500 text-xs">Patients</Text>
          </View>

          <View className="items-center">
            <View className="w-12 h-12 bg-blue-50 rounded-full items-center justify-center mb-2">
              <Text className="text-blue-500 text-xl">📊</Text>
            </View>
            <Text className="text-blue-500 font-bold text-lg">7+</Text>
            <Text className="text-gray-500 text-xs">Years Exp</Text>
          </View>

          <View className="items-center">
            <View className="w-12 h-12 bg-blue-50 rounded-full items-center justify-center mb-2">
              <Text className="text-blue-500 text-xl">⭐</Text>
            </View>
            <Text className="text-blue-500 font-bold text-lg">{doctor.rating}</Text>
            <Text className="text-gray-500 text-xs">Rating</Text>
          </View>

          <View className="items-center">
            <View className="w-12 h-12 bg-blue-50 rounded-full items-center justify-center mb-2">
              <Text className="text-blue-500 text-xl">💬</Text>
            </View>
            <Text className="text-blue-500 font-bold text-lg">100+</Text>
            <Text className="text-gray-500 text-xs">Reviews</Text>
          </View>
        </View>

        {/* About Me */}
        <View className="mb-8">
          <Text className="text-xl font-bold text-gray-900 mb-3">About Me</Text>
          <Text className="text-gray-500 text-base leading-6 mb-2">
            Dr. {doctor.name.replace('Dr. ', '')} is a top-rated {doctor.speciality || 'medical'} specialist in V-care Clinic. With over 7 years of experience, they have successfully treated more than 120 patients.
          </Text>
          <TouchableOpacity>
            <Text className="text-blue-500 font-semibold">Read More...</Text>
          </TouchableOpacity>
        </View>

        {/* Voice Call Button */}
        <TouchableOpacity className="bg-blue-500 rounded-2xl py-4 mb-8 flex-row items-center justify-center">
          <Text className="text-white text-lg mr-2">📞</Text>
          <Text className="text-white font-bold text-lg">Voice Call (14.30 - 15.00 PM)</Text>
        </TouchableOpacity>

        {/* Fee Info */}
        <View className="bg-gray-50 rounded-2xl p-4 mb-6">
          <Text className="text-gray-600 text-sm mb-1">Consultation Fee</Text>
          <Text className="text-emerald-600 font-bold text-2xl">₹{doctor.fees}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DoctorDetail;
