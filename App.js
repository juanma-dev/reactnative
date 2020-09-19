/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ScrollView, Switch} from 'react-native';
import Inputs from './input'
/*import { Constants } from 'expo';
import { Card } from 'react-native-elements';
*/

let id = 0;
const styles = StyleSheet.create(
  {
    todoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    appContainer: {
      paddingTop: 5
    }
  }
);

const Todo = props => (
  <View style={styles.todoContainer}>
    <Switch onValueChange={props.onToggle} value={props.todo.checked} />
    <Button onPress={props.onDelete} title="delete" />
    <Text>{props.todo.text}</Text>
  </View>
)

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      prompt: false,

    }
  }

  addTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos, 
        {id: id++, text: text, checked: false},
      ],
      prompt: false,
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.checked = !todo.checked
        }
        return todo;
      })
    })
  }
  
  promptWindow = () => {
    return this.state.prompt && (
      <Inputs 
         setText={(text) => this.addTodo(text)} 
      />
    )
  }

  enablePrompt() {
    this.setState({
      prompt: true,
    })
  }

  render() {
    return (
      <View style={styles.appContainer}>
        {this.promptWindow()}
        <Text>Todo count: {this.state.todos.length}</Text>
        <Text>Unchecked todo count: {this.state.todos
            .filter(todo => !todo.checked).length}
        </Text>
        <Button onPress={() => this.enablePrompt()} 
         title="Add TODO" />
        <ScrollView>
          {this.state.todos.map(todo => (
              <Todo 
                onToggle={() => this.toggleTodo(todo.id)}
                onDelete={() => this.removeTodo(todo.id)}
                todo={todo}
              />
            ))}
        </ScrollView>
      </View>
    )
  }
}
