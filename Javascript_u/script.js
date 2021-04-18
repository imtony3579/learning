var person = {
    name: "Jhon Smith",
    age: 28,
    skills: ["Cpp", "python", "Java script", "etc"],
    change_name: function(new_name) {
        this.name = new_name;
        return this;
    },
    change_age: function(age_number) {
        this.age = age_number;
        return this;
    }
};

person.change_name("Rimaru Tempest").change_age(123);

document.querySelector('#test').innerHTML = person.name + " " + person.age + " have skill " + person.skills.join(", ");

for (var key in person) {
    console.log(key, person[key].constructor);
}