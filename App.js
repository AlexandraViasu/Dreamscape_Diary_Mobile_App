import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Home, AddADream, DreamJournal, Statistics } from "./screens"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions = {screenOptions}>
        <Tab.Screen
        name= "Home"
        component={Home}
        options={{
          tabBarIcon: ({focused})=>{
            return (
                <View sytle={{alignItem: "center", justifyContent: "center"}}>
                  <Entypo name="home" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>Home</Text>
            </View>
            )
          }
        }}
        />
        <Tab.Screen
        name= "AddADream"
        component={AddADream}
        options={{
          tabBarIcon: ({focused})=>{
            return (
                <View sytle={{alignItem: "center", justifyContent: "center"}}>
                  <Ionicons name="add-circle" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>Add</Text>
            </View>
            )
          }
        }}
        />
        <Tab.Screen
        name= "DreamJournal"
        component={DreamJournal}
        options={{
          tabBarIcon: ({focused})=>{
            return (
                <View sytle={{alignItem: "center", justifyContent: "center"}}>
                  <MaterialCommunityIcons name="sleep" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>Dreams</Text>
            </View>
            )
          }
        }}
        />
        <Tab.Screen
        name= "Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({focused})=>{
            return (
                <View sytle={{alignItem: "center", justifyContent: "center"}}>
                  <Ionicons name="stats-chart" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>Stats</Text>
            </View>
            )
          }
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
