const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Todo 1',
                completed: false,
            },
            {
                text: 'Todo 2',
                completed: true,
            },
            {
                text: 'Todo 3',
                completed: false,
            },
        ],
        inputText: '',
    },
    methods: {
        addTodo() {
            if (this.inputText.trim().length > 0) {
                this.todos.unshift({
                    text: this.inputText,
                    completed: false,
                });
                this.inputText = '';
            }
        },
        removeTodo(todoIndex) {
            this.todos.splice(todoIndex, 1);
        },
        toggleCompleted(todoIndex) {
            this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
        },
    },
});