import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDoctors } from '@/api/doctor';
import { useNavigation } from '@react-navigation/native';
import DoctorCard from './DoctorCard';

const DoctorsList = () => {
  const navigation = useNavigation<any>();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['doctors'],
    queryFn: fetchDoctors,
  });

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center py-10">
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text className="mt-3 text-gray-500">Loading doctors...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 items-center justify-center py-10">
        <Text className="text-base text-red-500">Failed to load doctors</Text>
      </View>
    );
  }

  if (!data || data.length === 0) {
    return (
      <View className="flex-1 items-center justify-center py-10">
        <Text className="text-base text-gray-500">No doctors available</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header with Back Button */}
      <View className="px-4 pt-12 pb-4 bg-white flex-row items-center border-b border-gray-100">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Text className="text-2xl text-gray-800">←</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">All Doctors</Text>
      </View>

      <FlatList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <DoctorCard {...item} />}
        contentContainerStyle={{ padding: 16 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
};

export default DoctorsList;
