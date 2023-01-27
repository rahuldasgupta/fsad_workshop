
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Pages
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Tabs from './Tabs';

const appStack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  render() {
    return (
      <NavigationContainer>
        <appStack.Navigator initialRouteName='Login'>
          <appStack.Screen name="Login" component={Login}
            /*options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#bc2431',
                elevation: 5,
                height: 85
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}*/
            options={{headerShown: false}}
          />
          <appStack.Screen name="Register" component={Register} options={{headerShown: false}}/>
          <appStack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
        </appStack.Navigator>
      </NavigationContainer>
    );
  }
}