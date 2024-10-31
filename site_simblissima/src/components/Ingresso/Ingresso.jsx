import React from 'react';

function Ingresso() {
  return (
    <div>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Evento da Fórmula 1</Text>
        <Text style={{ marginTop: 10, textAlign: 'center' }}>
          O evento da Fórmula 1 é um dos mais importantes eventos desportivos do mundo.
          Neste ano, vamos contar com a presença de pilotos de alta competição,
          como Lewis Hamilton e Max Verstappen.
        </Text>
        <Button
          title="Comprar Ingresso"
          onPress={handleComprarIngresso}
          style={{ marginTop: 20 }}
        />
      </View>
    </div>
  );
};

export default Ingresso;