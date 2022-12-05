const infoUser = require ('./information')

var  cowsay  =  require ( "cowsay" ) ;

console.log (cowsay.say({ 
    text : `Hi, my name is ${ infoUser.description.name} from ${infoUser.description.campus}`, 
    e : "oO" , 
    T : "U ",
} ) ) ;