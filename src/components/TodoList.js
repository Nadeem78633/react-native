import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleTodo,
  deleteTodo,
  deleteAllTodo,
} from "../redux/reducers/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <View style={styles.container}>
    
      {todos.map((todo) => (
        <View key={todo.id} style={styles.todoItem}>
    
          <Text
            style={[
              styles.todoText,
              todo.completed ? styles.completedTodoText : null,
            ]}
          >
            {todo.text}
          </Text>

          <TouchableOpacity style={styles.button}>
            <Button
              title={todo.completed ? "✓" : ""}
              onPress={() => handleToggle(todo.id)}
              color="#825cdd"
            />
          </TouchableOpacity>
         
        </View>
      ))}
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  todoText: {
    flex: 1,
    marginRight: 8,
  },
  completedTodoText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: "#825cdd",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "red",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
});

export default TodoList;
