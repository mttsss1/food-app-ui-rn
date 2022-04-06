import React from 'react';

import {View, Text, SafeAreaView, TouchableOpacity, Image, FlatList, Touchable} from 'react-native'
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons'

import {styles} from './styles';

export function Details({route, navigation}){

  const {item} = route.params;
  console.log(item)

  const renderIngredientsItem = ({item}) => {
    return (
      <View style={[styles.ingredientItemWrapper, {
        marginLeft: item.id === '1' ? 20 : 0,
      }]}>
        <Image
          source={item.image}
          style={styles.ingredientImage}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <View style={styles.headerLeft}>
              <Feather
                name="chevron-left"
                size={12}
                color="black"
              />
            </View>
          </TouchableOpacity>

          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name="star"
              size={12}
              color="white"
            />
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          {item.title}
        </Text>
      </View>

      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>
          R$ {item.price}
        </Text>
      </View>

      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>
              Tamanho
            </Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumber}"
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>
              Borda
            </Text>
            <Text style={styles.infoItemText}>
              {item.crust}
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>
              Entrega em
            </Text>
            <Text style={styles.infoItemText}>
              {item.deliveryTime} min
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={item.image}
            style={styles.itemImage}
          />
        </View>
      </View>

      <View style={styles.ingredientsWrapper}>
        <Text style={styles.ingredientsTitle}>
          Ingredientes
        </Text>
        <View style={styles.ingredientsListWrapper}>
        <FlatList
          data={item.ingredients}
          renderItem={renderIngredientsItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => alert('Seu pedido foi feito!')}
      >
        <View style={styles.orderWrapper}>
          <Text style={styles.orderText}>
            Fazer um pedido
          </Text>
          <Feather
            name="chevron-right"
            size={18}
            color="black"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}