const substitutions = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

const reverseSubstitutions = Object.fromEntries(
  Object.entries(substitutions).map(([key, value]) => [value, key])
);

function encryptText() {
  const inputText = document.getElementById('inputText').value;
  const encryptedText = inputText.split('').map(char => substitutions[char] || char).join('');
  document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
  let inputText = document.getElementById('inputText').value;
  Object.keys(reverseSubstitutions).forEach(sub => {
      const regex = new RegExp(sub, 'g');
      inputText = inputText.replace(regex, reverseSubstitutions[sub]);
  });
  document.getElementById('outputText').value = inputText;
}

function copyText() {
  const outputText = document.getElementById('outputText');
  outputText.select();
  document.execCommand('copy');
}

    
    
    

 