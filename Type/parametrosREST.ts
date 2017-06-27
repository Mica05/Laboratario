function nombreCompleto( nombre:string, ...losDemasParametros:string[] ):string{
	return nombre + " " + losDemasParametros.join(" ");
}
let superman:string = nombreCompleto("Clark", "Joseph", "Kent");
let ironman:string = nombreCompleto("Anthony", "Edward", "Tony", "Stark");

console.log( superman );
console.log( ironman );
