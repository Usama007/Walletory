import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { createStyles, maxWidth, minWidth } from 'react-native-media-queries';

const BottomButton = ({ title, onPressBtn }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={() => {
            onPressBtn()
        }}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

const base = {
    btn: {
        marginHorizontal: 16,
        backgroundColor: '#A09FC3',
        borderRadius: 8
    },
    btnText: {
        color: '#fff',
        paddingTop: 20,
        paddingBottom: 19,
        textAlign: 'center',
        fontFamily: "TTHoves-DemiBold",
        fontSize: 14
    }
}

const styles = createStyles(
    base,
    minWidth(368, maxWidth(400, {
        btnText: {
            color: '#fff',
            paddingTop: 21,
            paddingBottom: 19,
            textAlign: 'center',
            fontFamily: "TTHoves-DemiBold",
            fontSize: 16
        }
    })),
    minWidth(400, {
        btnText: {
            color: '#fff',
            paddingTop: 23,
            paddingBottom: 19,
            textAlign: 'center',
            fontFamily: "TTHoves-DemiBold",
            fontSize: 18
        }
    }),
);


export default BottomButton
