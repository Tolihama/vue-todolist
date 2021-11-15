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
            this.todos.unshift({
                text: this.inputText,
                completed: false,
            });
        },
        removeTodo(todoIndex) {
            this.todos.splice(todoIndex, 1);
        },
    },
});