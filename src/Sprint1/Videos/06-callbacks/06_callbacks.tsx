import { ChangeEvent, MouseEvent } from 'react';

// const callback = () => {alert('hello')};
// window.setTimeout(callback, 1000);

export const User = () => {

  const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
    
    alert(e.currentTarget.name);
  };

  const saveUser = () => {
    alert("user have been saved");
  };

  const onNameChanged = () => {
    console.log('name changed');
  }

  const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('age changed: ' + e.currentTarget.value);
  }

  const focusLostHandler = () => {
    console.log('focus lost');
  }

  return (
    <div>
      <textarea onBlur={focusLostHandler} onChange={onNameChanged}>Dimych</textarea>
      <input type={'number'} onChange={onAgeChanged}/>
      <button name={'delete'} onClick={deleteUser}>x</button>
      <button name={'save'} onClick={deleteUser}>x</button>
    </div>
  );
};
