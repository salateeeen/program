const myRequest = new XMLHttpRequest()
myRequest.open(`GET`, `json.json`)
myRequest.send();
myRequest.addEventListener(`load`, function(){
    console.log(JSON.parse(myRequest.responseText));
})