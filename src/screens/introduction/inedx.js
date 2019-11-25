import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Carousel from 'react-native-carousel-control';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';
import {colors} from '../../styles';

export default class IntroductionScreen extends Component {
  state = {
    current: 0,
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          backgroundColor: colors.gray_light,
        }}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <View style={styles.container}>
          <Carousel
            currentPage={this.state.current}
            sneak={0}
            onPageChange={current => this.setState({current})}>
            <View style={styles.carouselItem}>
              <Image source={require('../../assets/images/intro-image.png')} />
              <Text style={styles.carouselItemTitle}>Lorem ipsum</Text>
              <Text style={styles.carouselItemSubtitle}>
                Lorem ipsum dolor sit amet
              </Text>
            </View>
            <View style={styles.carouselItem}>
              <Image source={require('../../assets/images/intro-image.png')} />
              <Text style={styles.carouselItemTitle}>Lorem ipsum</Text>
              <Text style={styles.carouselItemSubtitle}>
                Lorem ipsum dolor sit amet
              </Text>
            </View>
            <View style={styles.carouselItem}>
              <Image source={require('../../assets/images/intro-image.png')} />
              <Text style={styles.carouselItemTitle}>Lorem ipsum</Text>
              <Text style={styles.carouselItemSubtitle}>
                Lorem ipsum dolor sit amet
              </Text>
            </View>
          </Carousel>
          <View style={styles.containerDots}>
            <Icon
              name="dot-single"
              size={this.state.current === 0 ? 32 : 26}
              color={this.state.current === 0 ? colors.default : '#dad9de'}
            />
            <Icon
              name="dot-single"
              size={this.state.current === 1 ? 32 : 26}
              color={this.state.current === 1 ? colors.default : '#dad9de'}
            />
            <Icon
              name="dot-single"
              size={this.state.current === 2 ? 32 : 26}
              color={this.state.current === 2 ? colors.default : '#dad9de'}
            />
          </View>
          <View style={styles.buttonActionsContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonAction}>
                <Text style={styles.buttonActionText}>Criar uma conta</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.buttonAction}>
                <Text
                  style={[
                    styles.buttonActionText,
                    styles.buttonActionTextLogin,
                  ]}>
                  Acessar a minha conta
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
