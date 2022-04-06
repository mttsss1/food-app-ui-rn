import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 70
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20
  },
  title: {
    fontFamily: theme.fonts.text500,
    fontSize: 16,
    color: theme.colors.textDark
  },
  subtitle: {
    fontFamily: theme.fonts.text700,
    fontSize: 32,
    color: theme.colors.textDark,
    marginTop: 5
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: theme.colors.textLight,
    borderBottomWidth: 2
  },
  searchText: {
    fontFamily: theme.fonts.text600,
    fontSize: 14,
    marginBottom: 5,
    color: theme.colors.textLight
  },
  categoriesWrapper: {
    marginTop: 30
  },
  categoriesTitle: {
    fontFamily: theme.fonts.text700,
    fontSize: 16,
    paddingHorizontal: 20
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20
  },
  categoryItemWrapper: {
    backgroundColor: theme.colors.primary,
    marginRight: 20,
    borderRadius: 20,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: theme.fonts.text500,
    fontSize: 13,
    marginTop: 10
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 50,
    marginBottom: 20
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
  popularWrapper: {
    paddingHorizontal: 20
  },
  popularTitle: {
    fontFamily: theme.fonts.text700,
    fontSize: 16
  },
  popularCardWrapper: {
    backgroundColor: theme.colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: theme.fonts.text600,
    fontSize: 14
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: theme.fonts.text600,
    fontSize: 14,
    color: theme.colors.textDark
  },
  popularTitlesWeight: {
    fontFamily: theme.fonts.text500,
    fontSize: 12,
    color: theme.colors.textLight,
    marginTop: 5
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20
  },
  addPizzaButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  rating: {
    fontFamily: theme.fonts.text600,
    fontSize: 12,
    color: theme.colors.textDark,
    marginLeft: 5
  },
  popularCardRight: {
    marginLeft: 40
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain'
  }
}) 