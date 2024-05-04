//import liraries
import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {AppColors} from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';
import CategoryCard from '../../components/categories/categoryCard';
import {screenStyle} from '../../styles/screenStyle';
import Spinner from '../../components/uı/spinner';
import ProductCard from '../../components/product/productCard';

// create a component
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState([false]);
  const getCategories = () => {
    setLoading(true);
    getRequest(CATEGORIES_URL)
      .then(response => {
        setCategories(response.data);
      })
      .catch(eror => {
        console.log(eror);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={screenStyle.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({item}) => <CategoryCard item={item} />}
        />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  activeCategory: {
    padding: 12,
    backgroundColor: AppColors.PRIMARY,
    marginRight: 8,
    borderRadius: 100,
  },
  InactiveCategory: {
    padding: 12,
    backgroundColor: AppColors.SOFTGRAY,
    marginRight: 8,
    borderRadius: 100,
  },
});

//make this component available to the app
export default Categories;
