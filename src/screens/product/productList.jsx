//import liraries
import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {PRODUCTS_URL} from '../../service/urls';
import ProductCard from '../../components/product/productCard';
import {getRequest} from '../../service/verbs';
import {screenStyle} from '../../styles/screenStyle';
import {AppColors} from '../../theme/colors';
import Spinner from '../../components/uı/spinner';
import CategorySelect from '../../components/widgets/categorySelect';

// create a component
const ProductList = ({route}) => {
  const [product, setProducts] = useState([]);
  const [isLoading, setLoading] = useState([false]);
  const productCategory = route?.params?.category;
  const getAllProducts = category => {
    const url = category
      ? PRODUCTS_URL + `/category/${category}`
      : PRODUCTS_URL;
    setLoading(true);
    getRequest(url)
      .then(response => {
        //console.log('veri', response.data);//
        setProducts(response.data);
      })
      .catch(eror => {
        console.log('hata', eror);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllProducts(productCategory);
  }, []);
  return (
    <View style={screenStyle.container}>
      <CategorySelect onSelect={value => getAllProducts(value)} />

      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
          numColumns={2}
          data={product}
          renderItem={({item}) => <ProductCard item={item} />}
        />
      )}
    </View>
  );
};

export default ProductList;
