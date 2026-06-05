import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDoctors } from '@/api/doctor';
import DoctorCard from './DoctorCard';

const DoctorsHorizontalList = () => {
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
    <View className="py-4">
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <DoctorCard {...item} />}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
};

export default DoctorsHorizontalList;
