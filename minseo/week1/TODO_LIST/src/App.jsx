import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "todo 만들어보기" },
    { id: 2, task: "민서 열일중" },
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null); 
  const [editingText, setEditingText] = useState(''); 

  // 1. 추가하기
  const addTodo = () => {
    if (text.trim() === '') return;
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 3, task: text }
    ]);
    setText('');
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. 수정하기
  const updateTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, task: newText } : item
      )
    );
    setEditingId(null); 
    setEditingText('');
  };

  // submit 시 새로고침 방지
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="submitButton" type="submit">
          할 일 등록
        </button>
      </form>

      <div>
        {todos.map((todo) => (
          <div key={todo.id} style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            {/* 수정 중이 아닐 때 */}
            {editingId !== todo.id && (
              <div style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            )}

            {/* 수정 중일 때 */}
            {editingId === todo.id && (
              <div style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}.</p>
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
              </div>
            )}
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>

            {editingId === todo.id ? (
              <button onClick={() => updateTodo(editingId, editingText)}>
                수정 완료
              </button>
            ) : (
              <button onClick={() => {
                setEditingId(todo.id);
                setEditingText(todo.task);
              }}>
                수정 진행
              </button>
            )}

          </div>
        ))}
      </div>
    </>
  );
}

export default App;