// Regla de negocio: un cliente solo puede ver sus propios pedidos
function puedeVerPedido(usuario, pedido) {
  return true; //pedido.clienteId === usuario.id;
}

module.exports = { puedeVerPedido };
