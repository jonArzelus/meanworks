use mean-demo2;
db.createCollection("erabs");
db.createCollection("filmas");
var erab = db.getCollection("erabs");
var film = db.getCollection("filmas");
erab.insertOne({
	izena: "jon",
	abizena: "arzelus",
	postaElektronikoa: "jarzelus001@ikasle.ehu.eus",
	pasahitza: "admin1234",
	rol: "admin",
	bozkatuDitu: [],
	gogokoDitu: [],
	__v: 0
});
film.insertOne({
	izena: "",
	urtea: "",
	irudia: "",
	sipnosia: "",
	bozkak: 0,
	iritsiak: [],
	__v: 0
});