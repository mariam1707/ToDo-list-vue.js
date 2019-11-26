/*var vm = new Vue({
    el:'#app',
    data:{
        text:'Test about Vue',
        numbers:[0,1,2,3,4,5,6,7,8,9]
    },
    computed:{
        reverseItems: function(){
            return this.numbers.slice().reverse();
        }
    }

});*/

var app = new Vue({
    el: '#app',
    data:{
        inputValue: '',
        list:["1 item", "2 item","3 item","4 item","5 item"],
        searchValue:'',
        mess:''
    },
    methods:{
        addItem: function(){
            var text = this.inputValue;
            this.list.push(text)
        },
        searchItem: function () {

            return this.list.filter( (item) => {
                return item===this.searchValue;
            });

        },
        drawlist: function () {
            
        }
    }
});

