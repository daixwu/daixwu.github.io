let store = {
    save(key, value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    fetch(key){
        return JSON.parse(localStorage.getItem(key)) || [];
    }
};

/*
let list = [
	{
		title:"吃饭打豆豆",
		isChecked:false
	},
	{
		title:"睡觉做美梦",
		isChecked:true
	}
];
*/
let filter = {
    all: function (list) {
        return list
    },
    finished: function () {
        return list.filter(function (item) {
            return item.isChecked;
        })
    },
    unfinished: function () {
        return list.filter(function (item) {
            return !item.isChecked;
        })
    }
}

let list =  store.fetch("adele-todo");
let vm = new Vue({
	el:".main",
	data:{
		list:list,
        todo:"",
        edtorTodos:"",
        beforeTitle:"",
        visibility: "all"
	},
    watch: {
	    list: {
	        handler: function(){
                store.save("adele-todo", this.list);
            },
            deep: true
        }
    },
    methods: {
	    addTodo(){
            this.list.push({
                title: this.todo,
                isChecked: false
            });
            this.todo = "";
        },
        deleteTodo(todo){
	        console.log(todo);
	        let index = this.list.indexOf(todo);
	        this.list.splice(index, 1);
        },
        edtorTodo(todo) {
            this.beforeTitle = todo.title;
            this.edtorTodos=todo;
        },
        edtorTodoed(todo){
            this.edtorTodos = "";
        },
        cancelTodo(todo){
            todo.title = this.beforeTitle;
            this.edtorTodos = "";
            this.beforeTitle ="";
        }
    },
    directives: {  //自定义指令
	    "focus": {
	          update(el, binding){
                  // console.log(el);
                  // console.log(binding);
                  if(binding.value){
                      el.focus()
                  }
              }
        }
    },
    computed: {
	    noCheckedLength: function(){
          return this.list.filter(function(item){
              return !item.isChecked
          }).length
        },
        filteredList: function () {
            return filter[this.visibility] ? filter[this.visibility](list) : list;
        }
    }
});

function watchHashChange() {
    let hash = window.location.hash.slice(1);
    vm.visibility = hash;
}
window.addEventListener("hashchange", watchHashChange)