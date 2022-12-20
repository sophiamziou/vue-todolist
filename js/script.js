const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            todolist: 
            [
                {
                    text: "fare la spesa",
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
                    done: false,
                },
                {
                    text: "rigiocare a ludo",
                    done: false,
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
        }
    },
}).mount('#app')