import { addNewTask, updateTask } from './server';

(async function myFunc() {
  await addNewTask({
    name: "My task",
    id: "123488"
  });

 await updateTask({
   id: "12343",
   name: "My Task with new name!"
 });

})();
