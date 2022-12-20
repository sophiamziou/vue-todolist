const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            newTask: '',
            todolist: 
            [
                {
                    text: "seguire la lezione",
                    done: false,
                },
                {
                    text: "fare la pasta",
                    done: true,
                },                
                {
                    text: "fare gli esercizi",
                    done: false,
                },                
                {
                    text: "fare niente",
                    done: true,
                },
                {
                    text: "giocare a ludo king",
                    done: true,
                },
                {
                    text: "rigiocare a ludo",
                    done: true,
                }
            ]
        }
    },
    methods: {
        addTask()
        {
            let object = {
                text: this.newTask,
                done: false
            }
            this.todolist.push(object);
            this.newTask = '';
        },
        checkTask(index)
        {
            let task = this.todolist[index];
            if(task.done == true) {
                task.done = false;
            }
            else{
                task.done = true;
            }
        },
        deleteTask(index)
        {
            this.todolist.splice(index, 1)
        }
    },
}).mount('#app')