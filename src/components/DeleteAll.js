import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleTodo,
  deleteTodo,
  deleteAllTodo,
} from "../redux/reducers/todoSlice";
import { StyleSheet, View, Button } from "react-native";
import { Icon } from "@rneui/themed";
// Card
import { Card, Text, Avatar } from "@rneui/themed";

// Icons
import delete_black from "./delete_black.svg";

const DeleteAll = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const handleDeleteAll = () => {
    dispatch(deleteAllTodo());
  };
  return (
    <View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Avatar
          size={20}
          rounded
          containerStyle={{
            marginRight: -20,
            backgroundColor: "green",
          }}
        />
        <Avatar
          size={20}
          rounded
          containerStyle={{
            marginLeft: 15,
            backgroundColor: "red",
          }}
        />
        <Avatar
          size={20}
          rounded
          containerStyle={{
            marginLeft: -5,
            backgroundColor: "blue",
          }}
        />
        {/* Add more Avatar components as needed */}
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 ,marginBottom:20}}>
        <Text style={{ textAlign: "center" }}>Task Details</Text>
        <Icon
          onPress={handleDeleteAll}
          name="delete"
          color="red"
          style={{ marginLeft: 200 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
  },
  text1: {
    color: "blue",
  },
});

export default DeleteAll;
