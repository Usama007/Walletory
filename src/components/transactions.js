import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStyles, maxWidth, minWidth } from 'react-native-media-queries';
import Icon from 'react-native-vector-icons/Feather';


const Transactions = ({ item, isLastItem }) => {
    return (
        <View style={isLastItem ? styles.wrapperWithoutBorder : styles.wrapperWithBorder}>
            <View>
                <Image source={{ uri: item.picture }} style={styles.thumbnail} />
                <View style={styles.thumbnailBadge}>
                    <Icon name="arrow-right" size={8} color="#fff" />
                </View>
            </View>
            <View style={styles.midCol}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.type}>{item.type}</Text>

            </View>
            <View style={styles.rightCol}>
                <Text style={styles.title}>{item.currency_sym} {item.balance}</Text>

                <Text style={item.status.toUpperCase() == 'APPROVED' ? styles.statusApporved : item.status.toUpperCase() == 'DECLINED' ? styles.statusDeclined : styles.statusPending}>{item.status}</Text>

            </View>
        </View>
    )
}

const base = {

    wrapperWithBorder: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#E6EDFF'

    },
    wrapperWithoutBorder: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 10,
        borderBottomWidth: 0,
    },
    thumbnail: {
        height: 40, width: 40, borderRadius: 25
    },
    thumbnailBadge: {
        position: 'absolute',
        top: 28,
        right: 4,
        backgroundColor: '#5552A3',
        borderRadius: 16,
        paddingHorizontal: 4,
        paddingVertical: 3,
        zIndex: 10,
    },
    midCol: {
        flex: 2,
        marginLeft: 5
    },
    title: {
        fontFamily: 'TTHoves-DemiBold',
        color: '#000',
        textTransform: 'capitalize',
        fontSize: 13
    },
    type: {
        fontFamily: 'TTHoves-Regular',
        marginTop: 5,
        textTransform: 'capitalize',
        fontSize: 13
    },
    rightCol: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 20
    },
    statusApporved: {
        borderWidth: 1,
        paddingTop: 2,
        paddingHorizontal: 5,
        fontSize: 11,
        textTransform: 'capitalize',
        borderColor: '#0B7E5C',
        color: '#0B7E5C',
    },
    statusDeclined: {
        borderWidth: 1,
        paddingTop: 2,
        paddingHorizontal: 5,
        fontSize: 11,
        textTransform: 'capitalize',
        borderColor: '#CF1221',
        color: '#CF1221',
    },
    statusPending: {
        borderWidth: 1,
        paddingTop: 2,
        paddingHorizontal: 5,
        fontSize: 11,
        textTransform: 'capitalize',
        borderColor: '#F29339',
        color: '#F29339',
    }
};

const styles = createStyles(base);

export default Transactions
