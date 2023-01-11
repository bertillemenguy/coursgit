let aPerson = {
	name : 'Person',
	age : 35,
	gender : 'masculin',
	interest : ['musique', 'Jeux vidéo'],
};

aPerson.sayHello = function(){
	console.log('Bonjour! Je suis' + this.name + '.'); 
};

aPerson.sayHello();



