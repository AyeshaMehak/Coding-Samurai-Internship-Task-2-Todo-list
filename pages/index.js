import Image from "next/image";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";

export default function Home() {
 const [inputValue, setInputValue] = useState("");
 const [tasks, setTasks] = useState([]);

 const handleInputChange = (e) => {
  setInputValue(e.target.value); //set input value to the target's value property
 };

 //add task handler
 const handleAddTask = () => {
  if (inputValue == "") {
   alert("Please Enter At Least One Task");
  } else {
   //create a new task object
   const newTask = {
    id: tasks?.length + 1,
    text: inputValue,
   };
   // Add the new task to the tasks array
   setTasks([...tasks, newTask]);

   // Clear the input field
   setInputValue("");
  }
 };

 const handleDeleteTask = (taskId) => {
  // Filter out the task with the specified ID
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  setTasks(updatedTasks);
 };

 return (
  <>
   <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
     <Image
      src={require("../public/Images/todolist.png")}
      alt="to-do list"
      width={1000}
      height={1000}
      className="w-[50rem]"
     />
     <div className="text-center lg:w-2/3 w-full rounded-lg py-10">
      <p className="mb-5 leading-relaxed text-white font-bold">
       "Designed to organize your chaotic day."
      </p>
      <div className="flex justify-center">
       <input
        placeholder="Enter Your Task Here..."
        className="py-2 px-6 text-lg rounded-l-md max-sm:w-[10rem] focus:outline-none text-white bg-[#2438A2]"
        value={inputValue}
        onChange={handleInputChange}
       />
       <div className="rounded-r-md bg-[#2438A2] justify-center flex w-[10rem] items-center">
        <button
         className="rounded-lg  relative w-36 h-8 cursor-pointer flex items-center bg-white group"
         onClick={handleAddTask}
        >
         <span className="text-[#2438A2] font-semibold ml-8 transform group-hover:translate-x-10 transition-all duration-300">
          Include
         </span>
         <span className="absolute right-0 h-full w-10 rounded-lg bg-white flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
          <IoMdAdd className="text-[#2438A2] text-xl" />
         </span>
        </button>
       </div>
      </div>
     </div>
     <div className="text justify-center flex">
      <ul>
       {tasks.map((task) => (
        <li
         key={task.id}
         className="bg-white rounded-lg flex w-[10rem] pl-4 mb-2 py-2 text-black relative"
        >
         {task.text}{" "}
         <button
          className="absolute right-2 top-3"
          onClick={() => handleDeleteTask(task.id)}
         >
          <AiFillDelete className="hover:text-[#2438A2] text-gray-400 duration-200 text-xl" />
         </button>
        </li>
       ))}
      </ul>
     </div>
    </div>
   </section>
   <div className="lines-container">
  <div className="line1 absolute z-[-1] w-2 h-[5rem] bg-gradient-to-b from-orange-300 to-blue-300 rounded-full" />
  <div className="line2 absolute z-[-1] w-2 h-[3rem] bg-gradient-to-b from-orange-300 to-blue-300 rounded-full" />
  <div className="line3 absolute z-[-1] w-2 h-[4rem] bg-gradient-to-b from-orange-300 to-blue-300 rounded-full" />
  <div className="line4 absolute z-[-1] w-2 h-[3rem] bg-gradient-to-b from-orange-300 to-blue-300 rounded-full" />
  <div className="line5 absolute z-[-1] w-2 h-[4rem] bg-gradient-to-b from-orange-300 to-blue-300 rounded-full" />
  <div className="line6 absolute z-[-1] w-2 h-[5rem] bg-gradient-to-b from-orange-300 to-blue-300 rounded-full" />
</div>

  </>
 );
}
