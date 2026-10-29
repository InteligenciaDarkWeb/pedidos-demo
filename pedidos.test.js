const test = require('node:test');
const assert = require('node:assert');
const { puedeVerPedido } = require('./pedidos');

test('un cliente puede ver su propio pedido', () => {
  assert.strictEqual(puedeVerPedido({ id: 77 }, { id: 10481, clienteId: 77 }), true);
});

test('un cliente NO puede ver pedidos ajenos', () => {
  assert.strictEqual(puedeVerPedido({ id: 77 }, { id: 10482, clienteId: 131 }), false);
});
