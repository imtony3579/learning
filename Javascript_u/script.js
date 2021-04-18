var newArray = ['a', [2, 3, 5, 6], 'b'];

for (var index in newArray) {
    console.log(index)
    if (newArray[index].constructor === Array) {
        console.log(newArray[index]);
    }
}