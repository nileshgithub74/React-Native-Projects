import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

type sectionProps = {
  title: string;
  onPressHandler: () => void;
};

const SectionHeading: React.FC<sectionProps> = ({ title, onPressHandler }) => {
  return (
    <View className="mt-5 flex-row justify-between ">
      <Text className="text-bold ml-4 font-semibold text-black ">{title}</Text>
      <TouchableOpacity onPress={onPressHandler}>
        <Text className="mr-4 text-blue-600 ">See all </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeading;
