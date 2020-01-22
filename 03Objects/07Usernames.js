function usernames(array = []) {

    let result = new Set();

    array
    .sort((a,b)=> a.length - b.length || a.localeCompare(b))
    .map(x => result.add(x));

    result.forEach(x => console.log(x));
}
usernames([
'Denise',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Indie',
'Indie',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot']
)