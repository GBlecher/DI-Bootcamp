import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "./actions";

const initialState = {
    tasks: {
        '2024-12-30': [],
        '2024-12-31': [],
        '2025-01-01': [],

    }
}

const taskReducer = (state = initialState.tasks, action) => {
    switch (action.type) {
        case ADD_TASK: {
            const { date, task } = action.payload
            return {
                ...state,
                [date]: [...(state[date] || []), task]
            }
        }
        case EDIT_TASK: {
            const { date, taskId, updatedTask } = action.payload
            return {
                ...state,
                [date]: state[date].map((task, index) =>
                    index === taskId ? updatedTask : task
                )
            }
        }
        case DELETE_TASK: {
            const { date, taskId } = action.payload
            return {
                ...state,
                [date]: state[date].filter((task, index) => index !== taskId),
            }
        }
        default:
            return state
    }

}

export default taskReducer
