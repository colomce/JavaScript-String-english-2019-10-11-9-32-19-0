// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();
console.log(name);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function uppercase_word(str) {
    return str.replace(/\w\S*/g, 
        function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
sentence = uppercase_word(sentence);
console.log(sentence);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
