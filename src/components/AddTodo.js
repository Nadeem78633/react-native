import React, { useState } from "react";
import { View, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todoSlice";
import { Card, TextInput } from "react-native-paper";

const AddTodo = ({ scroll }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText("");
    }
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        value={text}
        style={{ backgroundColor: "white" }}
        onChangeText={(value) => setText(value)}
        left={
          <TextInput.Icon icon="plus" onPress={handleSubmit}></TextInput.Icon>
        }
      />
    </View>
  );
};

export default AddTodo;
