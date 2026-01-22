const KEY = 'tasks'

// // const URL = "http://localhost:3001/tasks";

// // const headers = {'Content-Type': 'application/json'};


const getItems = () => {
    const data = JSON.parse(localStorage.getItem(KEY))
    return data ? data : []
}

const taskAPI = {
    getAll: () => {
        // return fetch(URL).then((response) => {
        //     if (!response.ok) return
        //     return response.json()
        // })
        return getItems()
    },

    getById: (id) => {
        // return fetch(`${URL}/${id}`).then((response) => {
        //     if (!response.ok) return;
        //     return response.json()
        // })
        if (!id) return null;
        const prevTasks = getItems();
        return prevTasks.find(task => task.id === id);   
    },

    add: (task) => {
        // return fetch(URL, {
        //     method: 'POST',
        //     headers,
        //     body: JSON.stringify(task)
        // })
        // .then((response) => {
        //     if(!response.ok) return;
        //     return response.json()
        // })
        if (!task) return null;
        
            const prev = getItems()
            localStorage.setItem(KEY, JSON.stringify([...prev, task]))
            return task  

    },

    delete: (id) => {
        // return fetch(`${URL}/${id}`, {method: 'DELETE'})
        // .then((response) => {
        //     if(!response.ok) return;
        // })
        if (id) {
            const prevTasks = getItems();
            const filteredTasks = prevTasks.filter(task => task.id !== id)
            localStorage.setItem(KEY, JSON.stringify([...filteredTasks]))
            return id
        } 
        return null
    },

    toggleComplete: (id, isDone) => {
        // return fetch(`${URL}/${id}`, {
        //     method: 'PATCH',
        //     headers,
        //     body: JSON.stringify({isDone})
        // }).then((response) => {
        //     if(!response.ok) return    
        // })
        if (!id) return null;
        const prevTasks = getItems();
        const updateTasks = prevTasks.map((task) => {
            return task.id === id 
            ? {...task, isDone}
            : task
        }) 
        localStorage.setItem(KEY, JSON.stringify(updateTasks))
        return id
    },

    editTask: (id, title) => {
    //     return fetch(`${URL}/${id}`, {
    //         method: 'PATCH',
    //         headers,
    //         body: JSON.stringify({title})
    //     }).then((response) => {
    //         if(!response.ok) return    
    //     })
    if (!id) return null;
        const prevTasks = getItems();

        const updateTasks = prevTasks.map((task) => {
        return task.id === id 
        ? {...task, title}
        : task
        }) 

        localStorage.setItem(KEY, JSON.stringify(updateTasks))
        return id
    },
}

export default taskAPI;