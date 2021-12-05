import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStyles, maxWidth, minWidth } from 'react-native-media-queries';

const SelectedCard = ({ item }) => {
    return (
        <View style={styles.cardWrapper}>
            <View style={styles.cardLeftWrapper}>
                <Text style={styles.cardTextWalletName}>{item.name}</Text>
                <Text style={styles.cardTextAvailableBalance}>AVAILABLE BALANCE</Text>
                <Text style={styles.cardTextBalance}>{item.currency_sym} {item.balance}</Text>
            </View>
            <View style={styles.cardRightWrapper}>
                <Image source={{ uri: item.qr_code }} style={styles.cardQrImage} />
            </View>
        </View>
    )
}

const base = {
    cardWrapper: {
        backgroundColor: '#53509D',
        width: 205,
        height: 80,
        padding: 14,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 16,
        alignSelf: 'center'
    },
    cardRightWrapper: {
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5
    },
    cardTextWalletName: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'TTHoves-DemiBold',
        marginBottom: 12,
    },
    cardTextAvailableBalance: {
        color: '#fff',
        fontSize: 7,
        fontFamily: 'TTHoves-Regular',
    },
    cardTextBalance: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'TTHoves-DemiBold',
    },
    cardQrImage: {
        height: 40,
        width: 40,
    },

};

const styles = createStyles(
    base,


    minWidth(368, maxWidth(400, {
        cardWrapper: {
            backgroundColor: '#53509D',
            width: 226,
            height: 92,
            padding: 14,
            borderRadius: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 16,
            alignSelf: 'center'
        },
        cardTextWalletName: {
            color: '#fff',
            fontSize: 13,
            fontFamily: 'TTHoves-DemiBold',
            marginBottom: 15,
        },
        cardTextAvailableBalance: {
            color: '#fff',
            fontSize: 9,
            fontFamily: 'TTHoves-Regular',
        },
        cardTextBalance: {
            color: '#fff',
            fontSize: 18,
            fontFamily: 'TTHoves-DemiBold',
        },
        cardQrImage: {
            height: 52,
            width: 52,
        },

    })),

    minWidth(400, {
        cardWrapper: {
            backgroundColor: '#53509D',
            width: 240,
            height: 92,
            padding: 14,
            borderRadius: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 16,
            alignSelf: 'center'
        },
        cardTextWalletName: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'TTHoves-DemiBold',
            marginBottom: 14,
        },
        cardTextAvailableBalance: {
            color: '#fff',
            fontSize: 10,
            fontFamily: 'TTHoves-Regular',
        },
        cardTextBalance: {
            color: '#fff',
            fontSize: 19,
            fontFamily: 'TTHoves-DemiBold',
        },
        cardQrImage: {
            height: 52,
            width: 52,
        },


    }),
);

export default SelectedCard
