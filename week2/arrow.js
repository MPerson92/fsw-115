// CLO1 
var temp = () => 104;
console.log(typeof temp);
console.log(temp());
// CLO2
var temp = multiplier => 104 * multiplier;
console.log(temp(2));
// CLO3
var temp = (multiplier, divider) => 104 * multiplier / divider;
console.log(temp(3,6));
// CLO4
var temp = (multiplier, divider) => {
    let result = 104 * multiplier;
    if (result) {
        result = 104 / divider;
    }
    return result;
};
console.log(temp(3, 6));
// CLO5
var clickButton = ('click', function(){
    console.log(this);
})
console.log(clickButton());
// CLO6
var clickButton = function(){
    console.log(this);
}
clickButton();
// CLO7
var clickButton = () => {
    console.log(this);
};
clickButton();
// CLO8
var person =  {
    name : 'David Smith',
    age : 56,
    details: function ( ){
    console.log(this);
    }
};

person.details();
// CLO9
var person =  {
    name : 'David Smith',
    age : 56,
    details: ( ) => {
        console.log(this);
    }
};

person.details();

// CLO10
var temp  = ( ) => 100; 
console.log(temp);
