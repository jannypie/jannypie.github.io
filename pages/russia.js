// Args:
// tier: 1 = major, 2 = middle, 3 = minor; relative importance

var people = [];
const Person = function(firstname, lastname, title, nationality = 'American', description = 'Person of interest', link, tier = 3, photo) {
  this.name = {
    firstname,
    lastname
  };
  this.title = title;
  this.nationality = nationality;
  this.description = description;
  this.link = link;
  this.tier = tier;
  this.photo = photo;
  this.relatedEvents = {};
  this.relatedBiz = {};
  this.relatedPeople = {};

  this.fullname = this.name.firstname + ' ' + this.name.lastname;

  people.push(this);
}

var businesses = [];
const Business = function(params) {
  this.name = params.name;
  this.industry = params.industry;
  this.nationality = params.nationality;
  this.description = params.description;
  this.link = params.link;
  this.relatedEvents = {};
  this.relatedBiz = {};
  this.relatedPeople = {};

  businesses.push(this);
}

var events = [];
const Event = function(params) {
  this.name = params.name;
  this.date = params.date;
  this.location = params.location;
  this.description = params.description;
  this.link = params.link;
  this.tier = params.tier;
  this.relatedEvents = {};
  this.relatedBiz = {};
  this.relatedPeople = {};

  events.push(this);
}

// var blank = Person('first','last','title','nationality','description','link','tier','photo');

  new Person('Donald','Trump','US President','American','','',1,'');
  new Person('Robert','Mueller','Special Counsel','American','','',1,'');
  new Person('Donald','Trump Jr','Junior','American','','',2,'');
  new Person('Ivanka','Trump','Daughter','American','','',2,'');
  new Person('Jared','Kushner','Senior Advisor to the President','American','','',1,'');
  new Person('Hillary','Clinton','Secretary of State (Former)','American','','',3,'');
  new Person('George','Papadopoulos','Foreign Policy Advisor (Former)','American','','',2,'');
  new Person('Michael','Flynn','National Security Advisor (Former)','American','','',1,'');
  new Person('Paul','Manafort','Trump Campaign Manager (Former)','American','','',1,'');
  new Person('Rob','Goldstone','Publicist','British','','',3,'');
  new Person('Ara','Agalarov','Oligarch (Real Estate)','Russian','','',3,'');
  new Person('Natalia','Veselnitskaya','Lawyer/Lobbyist','Russian','','',2,'');
  new Person('Vladimir','Putin','Russian President','Russian','','',3,'');
  new Person('James','Comey','FBI Director (Former)','American','','',1,'');
  new Person('Dan','Coats','Director of National Intelligence','American','','',1,'');
  new Person('John','Podesta','Clinton Campaign Chair','American','','',3,'');
  new Person('Sergey','Kislyak','Ambassador to US','Russian','','',1,'');
  new Person('Jeff','Sessions','US Attorney General','American','','',2,'');
  new Person('Corey','Lewandowski','Trump Campaign Manager (Former)','American','','',2,'')
