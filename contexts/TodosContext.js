import { createContext, useState } from 'react'

const TodosContext = createContext()

const TodosProvider = ({ children }) => {

  // STATE:
  const [allData, setAllData] = useState([])

  // FUNCTIONS:

  // Refresh Todos:
  const refreshTodo = async () => {
    try {
      const res = await fetch('/api/getTodos')
      const latestTodos = await res.json()
      setTodos(latestTodos)
    } catch (error) {
      console.log(error)
    }
  }

  // Add Todos:
  // const addTodo = async (description) => {
  //   try {
  //     const res = await fetch('/api/createTodo', {
  //       method: 'POST',
  //       body: JSON.stringify({ description }),
  //       headers: { 'Content-Type': 'application/json' },
  //     })
  //     const newTodo = await res.json()
  //     setTodos((prevTodos) => {
  //       return [newTodos, ...prevTodos]
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // Update Todos:
  // const updateTodo = async (updatedTodo) => {
  //   try {
  //     const res = await fetch('/api/updateTodo', {
  //       method: 'PUT',
  //       body: JSON.stringify(updatedTodo),
  //       headers: { 'Content-Type': 'application/json' },
  //     })
  //     await res.json()
  //     setTodos((prevTodos) => {
  //       const existingTodos = [...prevTodos]
  //       const existingTodo = existingTodos.find((todo) => todo.id === updatedTodo.id)
  //       existingTodo.fields = updatedTodo.fields
  //       return existingTodos
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // Delete Todos:
  // const deleteTodo = async (id) => {
  //   try {
  //     await fetch('/api/deleteTodo', {
  //       method: 'DELETE',
  //       body: JSON.stringify({ id }),
  //       headers: { 'Content-Type': 'application/json' },
  //     })
      
  //     setTodos((prevTodos) => {
  //       return prevTodos.filter((todo) => todo.id !== id) // <- NOTE: test
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // Return the parts to be accessible over the app:
  // Provider <> Consumer
  return (
    <TodosContext.Provider
      value={{
        allData,
        setAllData,
        refreshTodo,
        // addTodo,
        // updateTodo,
        // deleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}

export { TodosContext, TodosProvider }
