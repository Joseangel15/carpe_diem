'use client';

import { createClient } from '@/utils/supabase/server';
import { Task } from '../../../../types/database';
import { revalidatePath } from 'next/cache';

export async function createTask(formData: FormData) {
    'use server';
    const supabase = await createClient();
    const title = formData.get('title') as string;
    const task_description = formData.get('task_description') as string;

    const { data, error } = await supabase
        .from('tasks')
        .insert([{ title, task_description }])
        .select();

    if (error) {
        console.error('Error creating task:', error);
        return null;
    }

    revalidatePath('/tasks');
    return data;
}

export default function NewTask() {
    return (
        <form action={createTask} className="w-full max-w-md mx-auto my-8">
            <div className="mb-4">
                <label
                    htmlFor="title"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="task_description"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >
                    Task Description
                </label>
                <textarea
                    name="task_description"
                    id="task_description"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Create Task
            </button>
        </form>
    );
}