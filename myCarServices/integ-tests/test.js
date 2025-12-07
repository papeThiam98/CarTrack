// test.js
const { hello } = require('../src/handler')

async function testHello() {
  try {
    const event = {}  //simuler un event vide ou personnalisé
    const result = await hello(event)
    console.log('Résultat:', result)
  } catch (error) {
    console.error('Erreur:', error)
  }
}

testHello()
