const sqlite3 = require('sqlite3');
const path = require('path');
const dbPath = path.join(__dirname,'ITBog.db');
const db = new sqlite3.Database(dbPath);


function getAllBooks() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM Bog', async function (err,Bog) {
      if (err) {
        reject(err);
      } else {
        resolve(Bog);
      }
    });
  });
}
function sellBook(){
  return new Promise((resolve, reject) => {
    db.all('INSERT INTO Bog (title, forfatter, forlag, udgave, pris) VALUES (?,?,?,?,?)', async function (err,Bog) {
      if (err) {
        reject(err);
      } else {
        resolve(Bog);
      }
    });
  });
}

module.exports = {
  getAllBooks,
  sellBook
};
