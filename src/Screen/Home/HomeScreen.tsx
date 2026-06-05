import { View } from 'react-native';
import React from 'react';
import HeaderComponent from '@/component/Header';
import CategoriesComponent from '@/component/Categories';
import DoctorsHorizontalList from '@/component/Doctorlist/DoctorsHorizontalList';
import SectionHeading from '@/component/SectionHeading';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View className="flex-1">
      <HeaderComponent />
      <CategoriesComponent />
      <SectionHeading
        title="Top Doctors"
        onPressHandler={() => navigation.navigate('doctorList')}
      />
      <DoctorsHorizontalList />
    </View>
  );
};

export default HomeScreen;
