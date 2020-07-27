// Declare package
var crypto = require('crypto');
// Declareing secret_key
let secret_key = 'encrypton_decryption';
// Declare secret_iv
let secret_iv = 'encrypton_decryption_iv';
// Declare encryption method
let encrypt_method = "AES-256-CBC";

/**
 * encrypt data from sha256
 * @param {*} data 
 */
const encryptData = async function (data) {
  let key = crypto.createHash('sha256').update(secret_key).digest('hex').substr(0, 32);
  let iv = crypto.createHash('sha256').update(secret_iv).digest('hex').substr(0, 16);
  let cipher = crypto.createCipheriv(encrypt_method, key, iv);
  let encrypted = cipher.update(data, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return Buffer.from(Buffer.from(encrypted).toString('utf8')).toString('base64');
}
/**
 * decypt data from sha256
 * @param {*} data 
 */
const decryptData = async function (data) {
  let key = crypto.createHash('sha256', secret_key).update(secret_key).digest('hex').substr(0, 32);
  let iv = crypto.createHash('sha256', secret_key).update(secret_iv).digest('hex').substr(0, 16);
  var decipher = crypto.createDecipheriv(encrypt_method, key, iv);
  var dec = decipher.update(Buffer.from(data, 'base64').toString('ascii'), 'base64', 'utf8');
  dec += decipher.final('utf8');
  return Buffer.from(dec).toString('utf8');
}

// Data encyption called
let hw = encryptData("hello");
console.log(hw);
// Data decyption called
let decryphw = decryptData('SEJFL0VVYy83SGcwc1prZFZST3A2Zz09');
console.log(decryphw);



