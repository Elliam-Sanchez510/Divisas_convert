import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ButtonCalculate from './ButtonCalculate';
import Inputs from './Inputs'

const Divisas = () => {

    const [Origen, setOrigen] = useState<string>('')
    const [Destino, setDestino] = useState<string>('')
    const [Change, setCambio] = useState<number>(0);
    const [Convertir, setCalcular] = useState<number>(0)
    const [Resultado, setResultado] = useState<number>(0)
    const [Error, setError] = useState<boolean>(false)

    const Moneda = (texto: string) => {
        setOrigen(texto)
    }
    const MonedaAConversion = (texto: string) => {
        setDestino(texto)
    }
    const Cambio = (numero: number) => {
        setCambio(numero);
      }
    const convert = (texto: string) => {
        const number = parseFloat(texto)
        if (isNaN(number)) {
            setError(true)
        } else {
            setError(false)
        }
        setCalcular(number)
    }
    const handleCalcular = () => {
        if (Origen === 'USD' && Destino === 'NIO') {
            const result = Convertir * Change
            setResultado(result)
        } else if (Origen === 'USD' && Destino === 'EUR') {
            const result = Convertir * Change
            setResultado(result)
        } else if (Origen === 'EUR' && Destino === 'NIO') {
            const result = Convertir * Change
            setResultado(result)
        } else if (Origen === 'EUR' && Destino === 'USD') {
            const result = Convertir * Change
            setResultado(result)
        } else if (Origen === 'NIO' && Destino === 'USD') {
            const result = Convertir * 	Change
            setResultado(result)
        } else if (Origen === 'NIO' && Destino === 'EUR') {
            const result = Convertir * Change
            setResultado(result)
        } else {
            alert(
                'Datos incorrectos'
            )
        }
    }

    return (

        <View style={styles.container}>
            <Text style={styles.divisas} >Divisas</Text>
            <View>
                <Text style={styles.divisas} >Moneda origen</Text>
            <Inputs 
                defaultValue={Origen}
                errorMessage='clave de moneda'
                onChangeText={setOrigen}
            />

            <Text style={styles.divisas} >Moneda a convertir</Text>
            <Inputs 
                defaultValue={Destino}
                errorMessage='clave de moneda'
                onChangeText={setDestino}
            />
            <Text style={styles.divisas} >Tasa Cambio</Text>
            <Inputs 
                defaultValue={Change.toString()}
                 errorMessage='clave de moneda'
                onChangeText={Cambio}
            />
            <Text style={styles.divisas} >Monto a convertir</Text>
            <Inputs 
                defaultValue={Convertir.toString()}
                errorMessage='No se permite letras'
                onChangeText={convert}
                handleError={Error}
            />
            <ButtonCalculate
                color='dark'
                text='Convertir'
                onPress={handleCalcular}
                disabled={Error}
            />

            <Text style={styles.divisas} >Resultado</Text>
            <Text style={styles.result}>
                {Resultado.toString()}
            </Text>
            </View>
        </View>
    )
}

export default Divisas

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    divisas: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#03a9f4'
    },
    result: {
        fontSize: 35,
        justifyContent: 'center',
        alignItems: 'center',   
        borderRadius: 5,
    },
})