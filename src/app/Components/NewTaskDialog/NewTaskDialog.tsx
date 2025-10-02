"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ReactDOM from "react-dom";

interface NewTaskDialogProps {
  onClose: () => void;
}

export default function NewTaskDialog({ onClose }: NewTaskDialogProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    task_description: "",
    productive_time: 0,
    leisure_time: 0,
  });

  function closeModal() {
    setIsOpen(false);
    setError(null);
    setFormData({
      title: "",
      task_description: "",
      productive_time: 0,
      leisure_time: 0,
    });
    setIsLoading(false);
    // send state to parent to close modal
    // You can implement this by passing a prop function from the parent component
    // For example: props.onClose();
    onClose();

  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  useEffect(() => {
    // Create a div to hold the modal
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      const newModalRoot = document.createElement('div');
      newModalRoot.id = 'modal-root';
      document.body.appendChild(newModalRoot);
    }
  }, []);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log("New Task created:", formData);
    setIsOpen(false);
  }  

  return createPortal(
    <div className="fixed inset-0 bg-[#0000007a] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-black">Create New Task</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-black">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-800"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="task_description" className="block text-sm font-medium text-black">Description</label>
            <textarea
              id="task_description"
              name="task_description"
              value={formData.task_description}
              onChange={handleChange}
              required
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="productive_time" className="block text-sm font-medium text-black">Productive Time (minutes)</label>
            <input
              id="productive_time"
              name="productive_time"
              type="number"
              value={formData.productive_time}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="leisure_time" className="block text-sm font-medium text-black">Leisure Time (minutes)</label>
            <input
              id="leisure_time"
              name="leisure_time"
              type="number"
              value={formData.leisure_time}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
            />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={closeModal}
              disabled={isLoading}
              className="cursor-pointer px-4 py-2 text-black bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="cursor-pointer px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
            >
              {isLoading ? 'Creating...' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
    , document.getElementById('modal-root')!
  );
}
