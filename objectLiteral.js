let person ={
    name:'Farurqe',
    age:20,
    print:function(){
        console.log('My Name is '+ this.name)
        console.log('My Age is '+ this.age)
    }
}
person.print()
person.age = 25
person.print()