function sample() {
    var name = document.querySelector('#nu').value;
    try {
        throw "Unknown_user";
    } catch (error) {
        document.querySelector("#a").innerHTML = error;
    } finally {
        document.querySelector("#a").innerHTML += "<br /> try/catch/finally ran the code";
    }
}