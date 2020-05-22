import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
class HomeScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Home Screen</Text>  
        </View>  
    );  
  }  
}  
class AboutScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>About Screen</Text>  
        </View>  
    );  
  }  
}  
class SettingsScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Settings Screen</Text>  
            </View>  
        );  
    }  
}  
class FaqsScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Faqs Screen</Text>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  
const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: HomeScreen,  
            navigationOptions:{  
                tabBarLabel:'HOME',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),  
              activeColor: 'white',  
              inactiveColor: 'white',  
              barStyle: { backgroundColor: '#6200EE' },  
            }  
        },  
        About: { screen: AboutScreen,  
            navigationOptions:{  
                tabBarLabel:'ABOUT',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                    </View>),  
               activeColor: 'white',  
               inactiveColor: 'white',  
                barStyle: { backgroundColor: '#03DAC5' },  
            }  
        },  
        Settings: { screen: SettingsScreen,  
            navigationOptions:{  
                tabBarLabel:'SETTINGS',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-settings'}/>  
                    </View>),  
                activeColor: 'white',  
                inactiveColor: 'white',  
                barStyle: { backgroundColor: '#33691E' },  
            }  
        },  
        Faqs: {  
            screen: FaqsScreen,  
            navigationOptions:{  
                tabBarLabel:'FAQs',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-mail'}/>  
                    </View>),  
                  activeColor: 'white',  
                  inactiveColor: 'white',   
                  barStyle: { backgroundColor: '#B00020' },        
            }  
        },  
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },  
    },  
);  
  
export default createAppContainer(TabNavigator);  