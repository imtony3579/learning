Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');


// const buttonel = document.querySelector('button');
// const inputel = document.querySelector('input');
// const listel = document.querySelector('ul');

// function addlist(){
//     const entervalue = inputel.value;
//     const listitem = document.createElement('li');
//     listitem.textContent = entervalue;
//     listel.appendChild(listitem);
//     inputel.value = '';
// }


// buttonel.addEventListener('click', addlist);