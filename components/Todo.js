import React, { useContext } from 'react'

// import { TodosContext } from '../contexts/TodosContext'

export default function ShowData({ data }) {
  // const { updateTodo, deleteTodo } = useContext(TodosContext)

  // onChange event handler:
  // const handleToggleCompleted = () => {
  //   const updatedFields = {
  //     ...todo.fields,
  //     completed: !todo.fields.completed,
  //   }
  //   const updatedTodo = { id: todo.id, fields: updatedFields }
  //   updateTodo(updatedTodo)
  // }

  return (
    <li className='bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4'>
      {/* <input
        type='checkbox'
        name='completed'
        id='completed'
        checked={todo.fields.completed}
        onChange={handleToggleCompleted}
        className='mr-2 form-checkbox h-5 w-5'
      /> */}
      <p className="flex-1 text-gray-800">{data.fields.projectName}</p>
      {/* <p className={`flex-1 text-gray-800 ${data.fields.completed ? 'line-through' : ''}`}>{data.fields.projectId}</p> */}
      <p className="flex-1 text-gray-800">{data.fields.city}</p>
      <p className="flex-1 text-gray-800">{data.fields.imageRes}</p>
      <p className="flex-1 text-gray-800">{data.fields.products}</p>
      <p className="flex-1 text-gray-800">{data.fields.campaign}</p>
      <p className="flex-1 text-gray-800">{data.fields.lastModified}</p>
      {/* <p className="flex-1 text-gray-800">{data.fields.projectId}</p> */}
      {/* <p className="flex-1 text-gray-800">{data.fields.deviceName}</p> */}
      {/* <button
        type='button'
        className='text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded '
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button> */}
    </li>
  )
}
