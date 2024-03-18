function introduction (name){
    return `Hi, my name is ${name}.`
}
console.log(introduction("Aki"));
console,log(introduction("Sam"));
function introductionWithLanguage (name ,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional (name, language = 'Javascript' ){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguageOptional("Gracie"));
console.log(introductionWithLanguageOptional('Aki','ember.js'));