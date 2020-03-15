import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {getTraining} from '../action';
import {
  verticalScale,
  moderateScale,
  width,
  scale,
} from '../utils/device-scaling';
import Container from '../components/Container';
import Spinner from '../components/Spinner';
import Button from '../components/Button';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
require('moment/locale/ar-sa');

class Training extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getTraining();
  }

  render() {
    const {
      SwiperwrapperStyle,
      SwiperDotStyle,
      SwiperSlideStyle,
      SwiperImageStyle,
      swiperActiveDotStyle,
      rowDateView,
      dateTextStyle,
      dateImageStyle,
      trainerImageStyle,
      backImageStyle,
      shareImageStyle,
      swiperPaginationStyle,
      sepratorStyle,
      buttonViewStyle,
      buttonStyle,
      headerViewStyle,
      swiperContainerStyle,
      containerViewStyle,
      interestViewStyle,
      descriptionTextStyle,
      titleTextStyle,
      trainerNameTextStyle,
      bookingTextStyle,
      priceTextStyle,
    } = styles;

    const {trainingData} = this.props;
    return (
      <Container>
        {trainingData ? (
          <Container>
            <View style={headerViewStyle}>
              <Image
                style={shareImageStyle}
                source={require('../assets/icons/more.png')}
                resizeMode={'contain'}
              />
              <Image
                style={shareImageStyle}
                source={require('../assets/icons/Share.png')}
                resizeMode={'contain'}
              />
              <Image
                style={backImageStyle}
                source={require('../assets/icons/Arrow.png')}
                resizeMode={'contain'}
              />
            </View>
            {trainingData.img.length > 0 && (
              <View style={swiperContainerStyle}>
                <Swiper
                  Style={SwiperwrapperStyle}
                  dotStyle={SwiperDotStyle}
                  activeDotStyle={swiperActiveDotStyle}
                  paginationStyle={swiperPaginationStyle}
                  loop={true}
                  autoplay={true}
                  autoplayTimeout={4}
                  dotColor={'rgba(255,255,255,.45)'}
                  activeDotColor={'#fff'}>
                  {trainingData.img.map((item, index) => {
                    return (
                      <View key={index} style={SwiperSlideStyle}>
                        <FastImage
                          style={SwiperImageStyle}
                          source={require('../assets/icons/Rectangle.png')}
                          resizeMode={FastImage.resizeMode.stretch}
                        />
                      </View>
                    );
                  })}
                </Swiper>
              </View>
            )}
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={containerViewStyle}>
              <Text style={interestViewStyle}>
                {'# ' + trainingData.interest}
              </Text>
              <Text style={titleTextStyle}>{trainingData.title}</Text>

              <View style={rowDateView}>
                <Text style={dateTextStyle}>
                  {moment(trainingData.date, 'YYYY-MM-DD HH:mm:ss').format(
                    'dddd , DD MMMM,hh:mm a',
                  )}
                </Text>
                <Image
                  style={dateImageStyle}
                  source={require('../assets/icons/Date.png')}
                  resizeMode={'contain'}
                />
              </View>

              <View style={rowDateView}>
                <Text style={dateTextStyle}>{trainingData.address}</Text>
                <Image
                  style={dateImageStyle}
                  source={require('../assets/icons/Address.png')}
                  resizeMode={'contain'}
                />
              </View>
              <View style={sepratorStyle} />

              <View style={rowDateView}>
                <Text style={trainerNameTextStyle}>
                  {trainingData.trainerName}
                </Text>
                <Image
                  style={trainerImageStyle}
                  source={require('../assets/icons/Ellipse.png')}
                  resizeMode={'contain'}
                />
              </View>
              <Text style={descriptionTextStyle}>
                {trainingData.trainerInfo}
              </Text>
              <View style={sepratorStyle} />

              <Text style={trainerNameTextStyle}>عن الدورة</Text>
              <Text style={descriptionTextStyle}>
                {trainingData.occasionDetail}
              </Text>
              <View style={sepratorStyle} />
              <Text style={trainerNameTextStyle}> تكلفة الدورة</Text>
              <View style={rowDateView}>
                <Text style={priceTextStyle}>SAR 40</Text>
                <Text style={bookingTextStyle}>الحجز العادي</Text>
              </View>
              <View style={rowDateView}>
                <Text style={priceTextStyle}>SAR 80</Text>
                <Text style={bookingTextStyle}>الحجز المميز</Text>
              </View>
              <View style={rowDateView}>
                <Text style={priceTextStyle}>SAR 120</Text>
                <Text style={bookingTextStyle}>الحجز السريع</Text>
              </View>
            </ScrollView>
            <View style={buttonViewStyle}>
              <Button style={buttonStyle} text={'قم بالحجز الآن'} />
            </View>
          </Container>
        ) : (
          <Spinner />
        )}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  SwiperwrapperStyle: {
    width: scale(1080),
    height: verticalScale(675),
  },
  SwiperSlideStyle: {
    width: scale(1080),
    height: verticalScale(675),
    alignSelf: 'center',
  },
  SwiperDotStyle: {
    marginBottom: -verticalScale(30),
    width: verticalScale(18),
    height: verticalScale(18),
    borderRadius: verticalScale(9),
  },
  swiperActiveDotStyle: {
    marginBottom: -verticalScale(30),
    width: verticalScale(26),
    height: verticalScale(26),
    borderRadius: verticalScale(13),
  },
  SwiperImageStyle: {
    width: scale(1080),
    height: verticalScale(675),
  },
  rowDateView: {
    flexDirection: 'row',
    width: width * 0.9,
    paddingVertical: verticalScale(10),
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  dateTextStyle: {
    fontSize: moderateScale(60),
    color: '#B9BED1',
    fontFamily: 'Cairo-SemiBold',
  },
  dateImageStyle: {
    width: scale(40),
    height: verticalScale(40),
    marginHorizontal: scale(22),
  },
  trainerImageStyle: {
    width: scale(84.38),
    height: verticalScale(84.38),
  },
  backImageStyle: {
    width: scale(51),
    height: verticalScale(45),
    marginLeft: scale(750),
  },
  shareImageStyle: {
    width: scale(51),
    height: verticalScale(53),
    marginHorizontal: scale(22),
  },
  swiperPaginationStyle: {
    right: scale(800),
  },
  sepratorStyle: {
    width: scale(1080),
    height: verticalScale(2),
    backgroundColor: '#E3E8F0',
    marginVertical: verticalScale(22),
  },
  buttonViewStyle: {
    position: 'absolute',
    bottom: 0,
  },
  buttonStyle: {
    width: width,
    height: verticalScale(142),
    backgroundColor: '#703081',
  },
  headerViewStyle: {
    position: 'absolute',
    top: 20,
    zIndex: 2222,
    flexDirection: 'row',
    width: scale(991.43),
    height: verticalScale(54),
  },
  swiperContainerStyle: {
    width: scale(1080),
    height: verticalScale(675),
  },
  containerViewStyle: {
    alignItems: 'center',
    paddingBottom: verticalScale(222),
  },
  interestViewStyle: {
    fontSize: moderateScale(66),
    color: '#B9BED1',
    width: width * 0.9,
    paddingVertical: verticalScale(22),
    textAlign: 'right',
  },
  descriptionTextStyle: {
    textAlign: 'right',
    color: '#B9BED1',
    fontSize: moderateScale(55),
    width: width * 0.9,
  },
  titleTextStyle: {
    fontSize: moderateScale(66),
    color: '#9EA3B8',
    width: width * 0.9,
    textAlign: 'right',
  },
  trainerNameTextStyle: {
    fontSize: moderateScale(66),
    width: width * 0.9,
    color: '#B9BED1',
    marginHorizontal: scale(20),
    textAlign: 'right',
  },
  bookingTextStyle: {
    fontSize: moderateScale(50),
    color: '#B9BED1',
    width: scale(800),
    textAlign: 'right',
  },
  priceTextStyle: {
    fontSize: moderateScale(55),
    color: '#B9BED1',
    marginHorizontal: scale(20),
    textAlign: 'left',
    width: scale(150),
  },
});

const mapStateToProps = ({training}) => {
  const {trainingData} = training;
  return {
    trainingData,
  };
};

export default connect(
  mapStateToProps,
  {
    getTraining,
  },
)(Training);
