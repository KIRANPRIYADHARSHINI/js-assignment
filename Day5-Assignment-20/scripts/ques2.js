// Question 2:
// Create a Class User with properties as name, age & email.
// He can login and logout
// Create another class Moderator which has all the features of User, plus additional functionality to Add
// coins and remove coins.
// Create one more class Admin which has all the features of Moderator plus additional features like add a
// Course and delete a particular course for a user.

const User1={
    name:'kiran',
    age:23,
    email:'k@gmail.com',
    login(){
        console.log('Kiran has logged in');
    },
    logout(){
        console.log('Kiran has logged out');
    }
}

class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins=this.coins;
        this.course=[];
    }

    addcoins(){
        this.coin++;
        console.log('${this.name} has ${this.coins} coins');
        return this;
    }

    removecoins(){
        this.coin--;
        console.log('${this.name} has ${this.coins} coins');
        return this;
    }

    addcourse(){
        
        console.log('${this.name} has ${this.course} course');
        return this;
    }

    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }
}

class Moderator extends User{
    constructor(name,age, email){
        super(name,age,email);
    }

    deleteUser(user){
        users=users.filter(u=>{
            return u.course!=user.course('javascript');
        })
    }
}

class Admin extends Moderator
{
    addcourse(user, course)
    {
        user.course.push(course);
        console.log(user);
    }
}

let userone=new User('kiran', 25, 'k@gmail.com');
let usertwo=new User('varsha', 25, 'v@gmail.com');
let mod=new  Moderator('navi', 27, 'n@gmail.com');
let admin=new Admin('summu', 23, 's@gmail.com' );
let users=[userone,usertwo,mod,admin];

users.forEach(element => {
    console.log(element);
})

admin.addcourse(userone, 'Javascript');
admin.addcourse(userone, 'Python');


userone.addcoins();
userone.removecoins();
userone.addcourse();