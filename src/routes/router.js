/* eslint-disable prettier/prettier */
import {  createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Training from '../pages/training';

const AppNavigator = createStackNavigator({
    Training: {
        screen: Training,
        navigationOptions: {
            header:null,
        },
},
   },
    {
        initialRouteName: 'Training',
        mode: 'card',
        headerMode: 'screen',
        defaultNavigationOptions:{
            headerStyle: {
                backgroundColor: '#3f51b5',
                 borderWidth: 1,
                 borderBottomColor: 'white' ,

                },
                headerTitleStyle:{
                    color:'#fff',
                },
                headerBackTitleStyle:{
                    color:'transparent',

                },
                headerTintColor:'#fff',
        },
    });


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
