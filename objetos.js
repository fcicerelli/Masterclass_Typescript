var porfolio = {
    Nombre: "",
    Apellido: "",
    Acercade: "",
    Titulos: ["", ""]
};
function GetNombre(nombre) {
    var nombre1 = document.getElementById("Nombre");
    nombre1.textContent = nombre;
}
function GetApellido(apellido) {
    var a = document.getElementById("Apellido");
    a.textContent = apellido;
    return porfolio.Apellido = apellido;
}
function GetAcercade(acercade) {
    var a = document.getElementById("text-acercade");
    a.textContent = acercade;
    return porfolio.Acercade = acercade;
}
function GetTitulos(titulo1, titulo2) {
    var a = document.getElementById("Titulos");
    a.textContent = titulo1, titulo2;
    return porfolio.Titulos[0] = titulo1, porfolio.Titulos[1] = titulo2;
}
function showFile1(input) {
    var file = input.files[0];
    //alert(`File name: ${file.name}`);   // e.g my.png
    //alert(`Last modified: ${file.lastModified}`);  // e.g 155283040824
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (progressEvent) {
        var _a;
        var s = (_a = reader.result) === null || _a === void 0 ? void 0 : _a.toString();
        console.log(s);
        var arr = s.split('\n');
        GetAcercade(arr[0]);
        GetNombre(arr[1]);
        GetApellido(arr[2]);
        GetTitulos(arr[3], arr[4]);
    };
}
