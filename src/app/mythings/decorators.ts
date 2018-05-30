
function student(argement){
    return function(target){
        Object.defineProperty(target.prototype, "course", {value:()=>console.log("jfjjfj")});
    }
}



@student({
    course:"CS"
})
export class names{

    get(name){
       console.log("get name is "+name);
    }
}