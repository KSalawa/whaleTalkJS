/*
Kamil Salawa october 2020 Whale Talk from codecademy.
input = lyrics to marcus mumford 'you'll never walk alone' song.
*/

let input = "When you walk through a storm Hold your head up high And don't be afraid of the dark At the end of a storm There's a golden sky And the sweet silver song of a lark";
input = input.toLocaleLowerCase();
//console.log(input);

let vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

//Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.

for (let ch = 0; ch < input.length; ch++) {
    //console.log(`ch = ${input[ch]}`);
    for (let vowel = 0; vowel < vowels.length; vowel++){
       // console.log(`vowel = ${vowel}`)
       if (input[ch] === vowels[vowel]){
           if (input[ch] === 'e'){
            resultArray.push('ee')
           }else if (input[ch] === 'u'){
            resultArray.push('uu')
           }else{
               resultArray.push(input[ch]);
           }
         }
    };
};

//console.log(resultArray);
resultArray = resultArray.join('').toUpperCase();
console.log(resultArray)