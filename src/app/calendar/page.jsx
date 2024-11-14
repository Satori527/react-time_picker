"use client";
import useTaskStore from "@/store/useTaskStore";
import { startOfToday } from "date-fns";

function Calendar() {

    const { tasks } = useTaskStore();

    return (
        <div>
            <h1>Calendar</h1>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h2>{task.title}</h2>
                    <p>{startOfToday().toISOString()}</p>
                    
                </div>
            ))}
        </div>
    );
}

export default Calendar