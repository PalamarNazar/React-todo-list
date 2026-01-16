const URL = 'http://192.168.1.22:3001/tasks';

const headers = {'Content-Type': 'application/json'};

const taskAPI = {
    getAll: async () => {
        return fetch(URL).then((response) => {
            if (!response.ok) return
            return response.json()
        })
    },

    add: async (task) => {
        return fetch(URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(task)
        })
        .then((response) => {
            if(!response.ok) return;
            return response.json()
        })
    },

    delete: async (id) => {
        return fetch(`${URL}/${id}`, {method: 'DELETE'})
        .then((response) => {
            if(!response.ok) return;
        })
    },

    toggleComplete: async (id, isDone) => {
        return fetch(`${URL}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({isDone})
        }).then((response) => {
            if(!response.ok) return    
        })
    },

    editTask: async (id, title) => {
        return fetch(`${URL}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({title})
        }).then((response) => {
            if(!response.ok) return    
        })
    },
}

export default taskAPI;