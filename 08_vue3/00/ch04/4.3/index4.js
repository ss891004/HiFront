var user = {
    id : 1,
    name : 'Tom',
    age : 10,
    school : 'primary school',
    sister:{   
        name:'Alice',
        age:12
    }
}
var handler = {
    get(target,prop){
        if(prop == 'id'){
            return undefined;
        }
        //return target[prop];
        return Reflect.get(target,prop);  
    },
 
    set(target,prop,value){
        if(prop == 'id' || prop == 'name' ){
            console.log(`Property ${prop} modification is not allowed.`)
        }else{
            //target[prop] = value;
            return Reflect.set(target,prop,value); 
        }
    },
 
    deleteProperty(target,prop){
        console.log('deleteProperty is called');
        return Reflect.deleteProperty(target,prop);  

    }
};

var proxyUser = new Proxy(user,handler); 
 
console.log(proxyUser.id);  
console.log(proxyUser.name);  
console.log(proxyUser.age);  
console.log(proxyUser.school);  
console.log(proxyUser.sister.ages);  
 
proxyUser.id = 2;   
proxyUser.name = 'Jack';  
proxyUser.age = 9;  
proxyUser.sister.age = 13;  
console.log(user);

 
proxyUser.gender='boy';
console.log(user);

 
delete proxyUser.age;
console.log(user);
 
proxyUser.sister.age=14;
console.log(user.sister.age);








