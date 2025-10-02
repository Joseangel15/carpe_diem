'use client';

import { useState } from "react";
import NewTaskDialog from "../Components/NewTaskDialog/NewTaskDialog";
import Task from "../Components/Task/Task";

export default function Dashboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  function handleCreateTask() {
    // Logic to handle task creation
    console.log("Create Task button clicked");
    // You can navigate to a task creation page or open a modal here
    setIsDialogOpen(true);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Dashboard</h1>
      <p className="mt-4 text-center">
        Welcome to your dashboard! Here you can manage your tasks and track your
        productivity.
      </p>
      <Task task={null} />
      <button
        onClick={handleCreateTask}
        id="createTaskButton"
        className="mt-4 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded cursor-pointer"
      >
        Create New Task
      </button>
      <div>{/* Add dashboard components and features here */}
      </div>
      {isDialogOpen && <NewTaskDialog onClose={() => setIsDialogOpen(false)} />}
    </main>
  );
}
