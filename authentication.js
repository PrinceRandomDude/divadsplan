// YOU SHOULD NOT BE READING THIS PAGE.

// perform authentication
async function authenticate(username, password) {
  try {
    const response = await fetch('secrets.json');
    if (!response.ok) {
      throw new Error('Failed to load JSON file');
    }
    const secrets = await response.json();

    if (secrets[username] === ERICO(password)) {
        return true;
    }
    else {
        return false;
    }
    
  } catch (error) {
    console.error('Error loading JSON:', error);
    return false;
  }
}

// Encryption Relying on Innovative and Confusing Operations
function ERICO(w) {
    w = c(w);
    w = d(w);
    w = a(w, b);
    return w
}

function a(s, shiftFunc) {
    return s.split('').map((c, i) => {
        let charCode = c.charCodeAt(0);
        let shiftedCharCode = ((charCode - 'a'.charCodeAt(0) + shiftFunc(i)) % 26) + 'a'.charCodeAt(0);
        return String.fromCharCode(shiftedCharCode);
    }).join('');
}

function b(x) {
    let p = 0, q = 1;
    for (let i = 0; i < x; i++) {
        [p, q] = [q, p + q];
    }
    return p;
}

function c(s) {
    let t = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            for (let z = i; z < j; z++) {
                t += s[z];
            }
        }
    }
    return t;
}

function d(s) {
    let t = '';
    for (let i = 0; i < s.length; i += 2) {
        if (i + 1 < s.length) {
            t += s[i + 1] + s[i];
        } else {
            t += s[i];
        }
    }
    return t;
}