'use client';

import NewTask from "../Components/NewTask/NewTask";

export default function Dashboard() {
  function handleCreateTask() {
    // Logic to handle task creation
    console.log("Create Task button clicked");
    // You can navigate to a task creation page or open a modal here
    let createTaskButton = document.getElementById("createTaskButton");
    if (createTaskButton) {
      createTaskButton.style.backgroundColor = "#ff69b4"; // Change to a lighter pink on click
      setTimeout(() => {
        createTaskButton!.style.backgroundColor = "#ec4899"; // Revert back after 200ms
      }, 200);
    }

    let isFormAvailable = true;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Dashboard</h1>
      <p className="mt-4 text-center">
        Welcome to your dashboard! Here you can manage your tasks and track your
        productivity.
      </p>
      <button
        onClick={handleCreateTask}
        id="createTaskButton"
        className="mt-4 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded cursor-pointer"
      >
        Create New Task
      </button>
      <div>{/* Add dashboard components and features here */}</div>
    </main>
  );
}
