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

function createExamples(word) {
  const examplesSpace = document.getElementById('examples');
  const orangeToggle = document.getElementById('orangeToggle');

  const examples = [
    [`What a complete `, `${word}!`],
    [`That `, `${word} is at it again`],
    [`Screw this `, `${word}`]
  ]

  examplesSpace.innerHTML = null;

  examples.forEach((example) => {
    const orangeSpan = document.createElement("span");
    orangeSpan.classList.add('orangeMod');
    orangeSpan.innerText = 'orange ';
    orangeSpan.style.display = orangeToggle.checked ? 'inline' : 'none';

    const newSpan = document.createElement("span");
    newSpan.append(example[0], orangeSpan, example[1]);

    examplesSpace.appendChild(newSpan);
    newSpan.after(document.createElement("br"))
  })

}

function generate() {
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

  const word = prefix === suffix ? prefix : prefix + suffix;

  for (let target of targets) {
    target.innerText = word;
  }
  document.getElementById('count').innerText = prefixes.length * suffixes.length;

  createExamples(word);
}

function orangeToggle(element) {
  const orangeSpans = document.getElementsByClassName('orangeMod');
  for (let orangeSpan of orangeSpans) {
    orangeSpan.style.display = element.checked ? 'inline' : 'none';
  }
}
