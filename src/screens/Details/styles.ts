import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 50
  },
  headerLeft: {
    borderColor: theme.colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10
  },
  headerRight: {
    backgroundColor: theme.colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: theme.colors.primary,
    borderWidth: 2
  },
  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 30
  },
  title: {
    fontFamily: theme.fonts.text700,
    fontSize: 32,
    color: theme.colors.textDark,
    width: '60%'
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  priceText: {
    color: theme.colors.price,
    fontFamily: theme.fonts.text700,
    fontSize: 32
  },
  infoWrapper: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20
  },
  infoItemTitle: {
    fontFamily: theme.fonts.text600,
    fontSize: 14,
    color: theme.colors.textLight
  },
  infoItemText: {
    fontFamily: theme.fonts.text600,
    fontSize: 18,
    color: theme.colors.textDark
  },
  itemImage: {
    resizeMode: 'contain',
    marginLeft: 50
  },
  ingredientsWrapper: {
    marginTop: 40
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: theme.fonts.text700,
    fontSize: 16,
    color: theme.colors.textDark
  },
  ingredientsListWrapper: {
    paddingVertical: 20
  },
  ingredientItemWrapper: {
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2
  },
  ingredientImage: {
    resizeMode: 'contain'
  },
  orderWrapper: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  orderText: {
    fontFamily: theme.fonts.text700,
    fontSize: 14,
    marginRight: 10
  }
}) 