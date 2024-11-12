prefixesLite = {
  base: [
    'dumb', 'scum', 'douche', 'dick', 'dip', 'ass', 'dog', 'lib', 'butt', 'dirt', 'bum', 'trump',
    'piss', 'wank', 'poop'
  ],
  nsfw: ['shit', 'fuck', 'cock', 'twat', 'cum']
}

prefixesExtended = {
  base: [
    'snot', 'spit', 'jizz', 'piss', 'puke', 'spunk', 'fart', 'crap', 'poop', 'poo', 'turd', 'wank',
    'dumb', 'lame', 'gay', 'homo', 'queer', 'douche', 'jerk', 'dork', 'creep', 'dip', 'nazi', 'geek', 'slut',
    'bitch', 'lard', 'scum', 'slime', 'dirt', 'skeeze', 'sleaze', 'dog', 'monkey', 'rat', 'weasel', 'bird', 'fem',
    'lib', 'right', 'soy', 'trump', 'stink', 'bastard', 'donkey', 'moron', 'idiot', 'loser', 'harpy',
  ],
  nsfw: ['cum', 'shit', 'fuck', 'faggot', 'fag', 'whore']
}

suffixesLite = {
  base: [
    'ass', 'bag', 'head', 'hat', 'tard', 'lord', 'wit', 'face', 'wad', 'sucker', 'boy', 'stain', 'stick',
    'nozzle', 'clown', 'waffle', 'nugget', 'goblin'
  ],
  nsfw: ['shit', 'fuck']
}

suffixesExtended = {
  base: [
    'wad', 'bag', 'bucket', 'sack', 'ball', 'splash', 'pot', 'pile', 'weasel', 'monkey', 'dog', 'rat', 'bird', 'goblin',
    'puffin', 'licker', 'muncher', 'sucker', 'lord', 'clown', 'slut', 'pirate', 'bro', 'nazi', 'boy',
    'boi', 'burglar', 'bandit', 'bitch', 'waffle', 'burger', 'cake', 'nugget', 'rag', 'nozzle', 'stain', 'wagon', 'weed',
    'hat', 'canoe', 'boat', 'stick', 'socket', 'trumpet', 'mitten', 'twat', 'dick', 'ass', 'balls', 'face',
    'head', 'nuts', 'brain', 'brains', 'knuckle', 'mouth', 'nose', 'skull', 'tard', 'oid', 'ster', 'azoid', 'let',
    'fart', 'wit', 'lib', 'breath'
  ],
  nsfw: ['fucker', 'whore', 'cunt', 'fuck', 'shit', 'cock']
}

function getRandomWord(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function generate(b) {
  const nsfwToggle = document.getElementById('nsfwToggle');
  const extendedSetToggle = document.getElementById('extendedSetToggle');
  document.getElementById('output').style.visibility = 'visible';

  const prefixesPart = extendedSetToggle.checked ? prefixesExtended : prefixesLite;
  const suffixesPart = extendedSetToggle.checked ? suffixesExtended : suffixesLite;

  const prefixes = nsfwToggle.checked ? prefixesPart.base.concat(prefixesPart.nsfw) : prefixesPart.base
  const suffixes = nsfwToggle.checked ? suffixesPart.base.concat(suffixesPart.nsfw) : suffixesPart.base

  const prefix = getRandomWord(prefixes);
  const suffix = getRandomWord(suffixes);

  const targets = document.getElementsByClassName('target');
  for (let target of targets) {
    target.innerText = prefix === suffix ? prefix : prefix + suffix;
  }
  document.getElementById('count').innerText = prefixes.length * suffixes.length;
}

function usaToggle(element) {
  element.nextElementSibling.firstChild.classList.toggle('fa-bounce', element.checked);
  const orangeSpan = document.getElementById('orange');
  orangeSpan.innerText = element.checked ? 'orange' : '';
}
