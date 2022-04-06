import React from 'react';
import {View, Text, SafeAreaView, Image, FlatList, ScrollView} from 'react-native'
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons'

import { popularData } from '../../data/popularData';
import { categoriesData } from '../../data/categoriesData';
import {styles} from './styles';
import { theme } from '../../global/styles/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

Feather.loadFont()
MaterialCommunityIcons.loadFont()

export function Home({navigation}){

  const renderCategoryItem = ({item}) => {
    return (
      <View style={[styles.categoryItemWrapper, {
        backgroundColor: item.selected ? theme.colors.primary : theme.colors.white,
        marginLeft: item.id == 1 ? 20 : 0, 
      }]}>
        <Image
          source={item.image}
          style={styles.categoryItemImage}
        />
        <Text style={styles.categoryItemTitle}>
          {item.title}
        </Text>
        <View style={[styles.categorySelectWrapper, {
          backgroundColor: item.selected ? theme.colors.white : theme.colors.secondary
        }]}>
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? theme.colors.black : theme.colors.white}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              source={require('../../assets/profile.png')}
              style={styles.image}
            />
            <Feather
              name="menu"
              size={24}
              color="black"
            />
          </View>
        </SafeAreaView>

        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Food</Text>
          <Text style={styles.subtitle}>Delivery</Text>
        </View>

        <View style={styles.searchWrapper}>
          <Feather
            name="search"
            size={16}
            color="black"
          />
          <View style={styles.search}>
            <Text style={styles.searchText}>
              Pesquisar
            </Text>
          </View>
        </View>

        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categorias</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </View>

        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popularData.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('Details', {
                item: item,
              })}
              activeOpacity={1}
            >
              <View
                style={[styles.popularCardWrapper, {
                marginTop: item.id == 1 ? 10 : 20
              }]}>
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={theme.colors.primary}
                      />
                      <Text style={styles.popularTopText}>
                        O melhor da semana!
                      </Text>
                    </View>
                    <View style={styles.popularTitlesWrapper}>
                      <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                      <Text style={styles.popularTitlesWeight}>Peso {item.weight}</Text>
                    </View>
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Feather
                        name="plus"
                        size={10}
                        color="black"
                      />
                    </View>
                    <View style={styles.ratingWrapper}>
                      <MaterialCommunityIcons
                        name="star"
                        size={10}
                        color="black"
                      />
                      <Text style={styles.rating}>
                        {item.rating}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.popularCardRight}>
                  <Image 
                    source={item.image}
                    style={styles.popularCardImage}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}