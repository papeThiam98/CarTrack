// test.js
const { hello } = require('../src/handler')

async function testHello () {
  try {
    const event = {}
    const result = await hello(event)
    console.log('Résultat:', result)
  } catch (error) {
    console.error('Erreur:', error)
  }
}

testHello()
