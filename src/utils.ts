export interface Task {
    id: string,
    title: string,
    isDone: boolean,
}

export interface TodoContextTypes {
    tasks: Tasks;
    toggleCheckedTask: (id: Id, isDone: isDone) => void;
    newTaskTitle: string;
    setNewTaskTitle: React.Dispatch<React.SetStateAction<string>>;
    filteredTasks: Tasks;
    addTasks: (title: Title) => void;
    deleteTask: (taskId: Id) => void;
    editingTaskTitle: string;
    startEditTask: (id: Id) => void;
    setEditingTaskTitle: React.Dispatch<React.SetStateAction<string>>;
    editingTaskId: string | null;
    setEditingTaskId: React.Dispatch<React.SetStateAction<string | null>>;
    editInputRef: React.RefObject<HTMLInputElement | null>;
    editTaskApply: (id: Id, newTitle: Title) => void;
    isLoading: boolean;
}

export type Options = [ 'all', 'complete', 'incomplete' ]

export type ActiveOptions = Options[number];

export interface TodoUiContextTypes {
    activeOption: ActiveOptions;
    animation: animation;
    searchTaskTitle: string;
    setSearchTaskTitle: React.Dispatch<React.SetStateAction<string>>;
    setActiveOption: React.Dispatch<React.SetStateAction<ActiveOptions>>;
}

export type Tasks = Task[]

export type Id = Task["id"];
export type isDone = Task["isDone"]
export type Title = Task["title"];

export type Theme = "dark" | "light";

export type UseThemeReturn = {
    theme: Theme;
    setTheme: () => void;
}

export type animation = {
    deleatingTasks: string[],
    deleteAnim: string[],
    apperingAnim: string[],
}
export type animationKey = keyof animation;

export type OnFormType = React.FormEvent<HTMLFormElement>

export type OnInputType= React.ChangeEvent<HTMLInputElement>