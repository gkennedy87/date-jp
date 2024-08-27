 export default function half2full(str) {
    return str.replace(/[A-Za-z0-9]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
    });
  } // credit to JLRishe on Stackoverflow (https://stackoverflow.com/users/1945651/jlrishe)