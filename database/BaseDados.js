import { openDatabase }  from 'expo-sqlite';

const db = openDatabase('ControleJogos.db');

// Crie a tabela no banco de dados (se ainda não existir)
db.transaction((tx) => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS jogos 
     (id INTEGER PRIMARY KEY AUTOINCREMENT, 
      nome TEXT, 
      plataforma TEXT, 
      genero TEXT, 
      nota REAL, 
      sobre TEXT);`
  );
});

// Função para adicionar um novo jogo ao banco de dados
const adicionarJogo = (nome, plataforma, genero, nota, sobre, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO jogos (nome, plataforma, genero, nota, sobre) VALUES (?, ?, ?, ?, ?)',
      [nome, plataforma, genero, nota, sobre],
      (_, result) => {
        callback(result.insertId);
      },
      (_, error) => {
        console.error('Erro ao adicionar jogo:', error);
        callback(null);
      }
    );
  });
};

// Função para listar todos os jogos no banco de dados
const listarJogos = (callback) => {
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM jogos', [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};

/**
 * Updates a record in a SQLite database table.
 * @param {number} id - The ID of the record to be updated.
 * @param {string} nome - The new value for the `nome` field.
 * @param {string} plataforma - The new value for the `plataforma` field.
 * @param {string} genero - The new value for the `genero` field.
 * @param {number} nota - The new value for the `nota` field.
 * @param {string} sobre - The new value for the `sobre` field.
 * @param {function} callback - A callback function to be called after the update is executed.
 */
const alterarJogo = (id, nome, plataforma, genero, nota, sobre, callback) => {
  db.transaction((tx) => {
    const sql = 'UPDATE jogos SET nome = ?, plataforma = ?, genero = ?, nota = ?, sobre = ? WHERE id = ?';
    const params = [nome, plataforma, genero, nota, sobre, id];

    tx.executeSql(
      sql,
      params,
      (_, result) => {
        callback(result.rowsAffected);
      },
      (_, error) => {
        console.error('Erro ao alterar jogo:', error);
        callback(0);
      }
    );
  });
};

const encontrarJogoPorNome = (nome, callback) => {
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM jogos WHERE nome = ?', [nome], (_, { rows }) => {
      if (rows.length > 0) {
        callback(rows._array[0]);
      } else {
        callback(null);
      }
    });
  });
};

const excluirJogo = (id, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'DELETE FROM jogos WHERE id = ?',
      [id],
      (_, result) => {
        callback(result.rowsAffected);
      },
      (_, error) => {
        console.error('Erro ao excluir jogo:', error);
        callback(0);
      }
    );
  });
};


export { adicionarJogo, listarJogos, alterarJogo, encontrarJogoPorNome, excluirJogo };
