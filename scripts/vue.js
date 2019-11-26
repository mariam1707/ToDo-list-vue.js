//require('jquery-3.4.1.min');


var app = new Vue({
    el: '#app',
    data:{
        inputValue: '',
        list:[],
        listCount:0,
        showFooter:false,
        checked:0
    },
    methods:{
        addItem: function(){
            if(this.inputValue.length === 0) return;
            this.list.push({name:this.inputValue, isCheck:false, show:true});
            this.inputValue = '';
            this.listCount += 1;

            this.showFooter = true;
        },
        checkItem: function (id) {
            this.list[id].isCheck = !this.list[id].isCheck;
            if(this.list[id].isCheck === true){
                this.listCount -= 1;
                this.checked += 1;
            }
            else {
                this.listCount += 1;
                this.checked -= 1;
            }
        },
        clear: function () {
            for(let i = 0; i < this.list.length; i++){
                if(this.list[i].isCheck === true){
                    this.list.splice(i, 1);
                    i--;
                }
            }
            this.checked = 0;
        },
        deleteItem: function (id) {
            if(this.list[id].isCheck === false){
                this.listCount -= 1;
            }
            else {
                this.checked -= 1;
            }
            this.list.splice(id, 1);
        },
        showChecked: function () {
            for(let i = 0; i < this.list.length; i++){
                if(this.list[i].isCheck === false){
                    this.list[i].show = false;
                }
                else {
                    this.list[i].show = true;
                }
            }
        },
        showUnchecked: function () {
            for(let i = 0; i < this.list.length; i++){
                if(this.list[i].isCheck === true){
                    this.list[i].show = false;
                }
                else {
                    this.list[i].show = true;
                }
            }
        },
        showAll: function () {
            for(let i = 0; i < this.list.length; i++){
                this.list[i].show = true;

            }
        }
    },
});


