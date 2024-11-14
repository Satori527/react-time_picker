import { create } from "zustand";

const useTaskStore = create((set) => ({
    tasks: [{
        id: 1,
        title: "Task 1",}],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
}));

export default useTaskStore;