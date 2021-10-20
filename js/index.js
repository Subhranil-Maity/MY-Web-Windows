
let _data = false
let fet = function (fir) {
    if(fir == false){
    fetch("../data/main.json").then(function (resp) {
        return resp.json();
    }).then(function (data) {
        console.log(data["Os"])
        let Os = data["Os"]
        let SystemDetails = Os["SystemDetails"]
        let Name = SystemDetails["Name"]
        let livetimeValues = Os["livetimeValues"]
        let IsBooted = livetimeValues["IsBooted"]
        console.log(IsBooted)
        if (IsBooted == "No") {
            window.location.replace("../html/start.html")

        } else {

        }
    })}else{
        window.location.replace("../index.html")

    }
}

fet(this._data)
this._data=true

