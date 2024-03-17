import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Home from "./Home";
import Pickup from "./Pickup";
import Search from "./Search";
import Cart from "./Cart";
import Account from "./Account";

const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {selectedTab === 0 ? (
          <Home />
        ) : selectedTab === 1 ? (
          <Pickup />
        ) : selectedTab === 2 ? (
          <Search />
        ) : selectedTab === 3 ? (
          <Cart />
        ) : (
          <Account />
        )}
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setSelectedTab(0)}
        >
          <Icon
            name={selectedTab === 0 ? "home" : "home"}
            size={23}
            color={selectedTab === 0 ? "#000" : "#888"}
          />
          <Text
            style={[
              styles.label,
              { color: selectedTab === 0 ? "#000" : "#888" },
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setSelectedTab(1)}
        >
          <Icon
            name={selectedTab === 1 ? "walking" : "walking"}
            size={23}
            color={selectedTab === 1 ? "#000" : "#888"}
          />
          <Text
            style={[
              styles.label,
              { color: selectedTab === 1 ? "#000" : "#888" },
            ]}
          >
            Pickup
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setSelectedTab(2)}
        >
          <Icon
            name={selectedTab === 2 ? "search" : "search"}
            size={23}
            color={selectedTab === 2 ? "#000" : "#888"}
          />
          <Text
            style={[
              styles.label,
              { color: selectedTab === 2 ? "#000" : "#888" },
            ]}
          >
            Search
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setSelectedTab(3)}
        >
          <Icon
            name={selectedTab === 3 ? "shopping-cart" : "shopping-cart"}
            size={23}
            color={selectedTab === 3 ? "#000" : "#888"}
          />
          <Text
            style={[
              styles.label,
              { color: selectedTab === 3 ? "#000" : "#888" },
            ]}
          >
            Cart
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setSelectedTab(4)}
        >
          <Icon
            name={selectedTab === 4 ? "child" : "child"}
            size={23}
            color={selectedTab === 4 ? "#000" : "#888"}
          />
          <Text
            style={[
              styles.label,
              { color: selectedTab === 4 ? "#000" : "#888" },
            ]}
          >
            Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    width: "100%",
    height: 60,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default Main;
