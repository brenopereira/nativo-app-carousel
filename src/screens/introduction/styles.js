import {StyleSheet} from 'react-native';

import {metrics, colors} from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: metrics.padding,
  },
  carouselItem: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItemTitle: {
    color: colors.default,
    fontSize: 28,
    marginBottom: metrics.margin * 0.35,
  },
  carouselItemSubtitle: {
    fontSize: 18,
    lineHeight: 35,
    color: colors.gray,
  },
  containerDots: {
    flex: 1,
    marginTop: metrics.margin,
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: metrics.margin * 2.2,
  },
  buttonActionsContainer: {
    marginHorizontal: metrics.margin,
  },
  buttonContainer: {
    backgroundColor: colors.default,
    marginTop: 10,
    borderRadius: 20,
  },
  buttonAction: {
    paddingVertical: 15,
  },
  buttonActionText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },
  buttonActionTextLogin: {
    fontSize: 14,
    fontWeight: 'normal',
    color: colors.default,
  },
});
