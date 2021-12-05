import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';
import { createStyles, maxWidth, minWidth } from 'react-native-media-queries';

import Wallets from '../components/wallets'
import Transactions from '../components/transactions';
import { removeTransaction } from "../redux/dataSlice"



const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const [selectedWalletName, setselectedWalletName] = useState(data?.wallets[0]?.name)
    const [isRecentSelected, setisRecentSelected] = useState(true)
    const [selectedTransactionDate, setselectedTransactionDate] = useState('')
    const [selectedTransactionObj, setselectedTransactionObj] = useState({})

    useEffect(() => {
        if (selectedTransactionDate != '' && selectedTransactionObj.title != undefined) {
            onPressTransaction();
        }
    }, [selectedTransactionDate, selectedTransactionObj])



    const RenderTransactions = () => {
        let items = [];
        for (const [key, value] of Object.entries(data.transactions)) {
            if (value == undefined || value.length != 0) {
                items.push(
                    <View key={JSON.stringify(value)}>
                        <Text style={styles.transantionDateText}>{moment(key, ['yyyy-MM-DD']).format('DD MMMM,yyyy')}</Text>

                        {value.map((item, index) =>
                            <TouchableOpacity key={index + '_' + item} onPress={() => { setselectedTransactionDate(key); setselectedTransactionObj(item) }}>
                                <Transactions item={item} isLastItem={index + 1 == value.length ? true : false} />
                            </TouchableOpacity>

                        )}
                    </View>
                )
            }
        }
        return items
    }

    const onPressConfirmDelete = () => {
        let payload = {
            transactionDate: selectedTransactionDate,
            selectedTransaction: selectedTransactionObj
        }
        dispatch(removeTransaction(payload))
        setselectedTransactionDate('');
        setselectedTransactionObj({})
    }

    const onPressTransaction = () => {
        Alert.alert(
            "Are You Sure?",
            "This transaction will be deleted once confirmed",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Confirm", onPress: () => onPressConfirmDelete() }
            ]
        );
    }

    const onPressWallet = (walletName) => {
        setselectedWalletName(walletName)
    }


    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.topSectionWrapper}>
                <View style={styles.topSectionLeftWrapper}>
                    <Image source={{ uri: 'https://paypipes.atlassian.net/rest/servicedesk/1/customer/viewport-resources/portal-logo/5/5' }} style={styles.logo} />
                </View>
                <View style={styles.topSectionRightWrapper}>
                    <View style={styles.notificationWrapper}>
                        <View style={styles.badgeContainer}>
                            <View style={styles.iconBadge}>
                                <Text style={styles.iconBadgeText}>
                                    3
                                </Text>
                            </View>
                            <Icon name="bell" size={17} color="#53509D" />
                        </View>
                    </View>
                    <View style={styles.thumbnailWrapper}>
                        <Image source={{ uri: 'https://www.revolvermag.com/sites/default/files/styles/image_750_x_420/public/media/images/article/1f54ea004f76be619a2c8c1b00f26d66.jpg?itok=VyJWjCaH&timestamp=1532716425' }} style={styles.profileThumbnail} />
                    </View>
                </View>
            </View>
            <View style={styles.cardSectionWrapper}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {data.wallets.map((item) =>
                        <Wallets key={item.name} item={item} selectedWalletName={selectedWalletName} onPressWallet={onPressWallet} />
                    )}
                </ScrollView>
            </View>
            <View style={styles.mainActionSectionWrapper}>
                <View style={styles.mainActionCol}>
                    <Image
                        style={styles.mainActionIcon}
                        source={require('../assets/images/pay.png')}
                    />
                    <Text style={styles.mainActionText}>Pay</Text>
                </View>
                <View style={styles.mainActionCol}>
                    <Image
                        style={styles.mainActionIcon}
                        source={require('../assets/images/request.png')}
                    />
                    <Text style={styles.mainActionText}>Request</Text>
                </View>
                <View style={styles.mainActionCol}>
                    <Image
                        style={styles.mainActionIcon}
                        source={require('../assets/images/topup.png')}
                    />
                    <Text style={styles.mainActionText}>TopUp</Text>
                </View>
                <View style={[styles.mainActionCol, { borderRightWidth: 0 }]}>
                    <Image
                        style={styles.mainActionIcon}
                        source={require('../assets/images/withdraw.png')}
                    />
                    <Text style={styles.mainActionText}>Withdraw</Text>
                </View>
            </View>
            <View style={styles.tabSectionWrapper}>
                <View style={styles.tabSectionColLeft}>
                    <View style={styles.tabSectionToggleWrapper}>
                        <TouchableOpacity style={isRecentSelected ? styles.tabSectionToggleBtnSelected : styles.tabSectionToggleBtnNotSelected} onPress={() => { setisRecentSelected(true) }}>
                            <Text style={isRecentSelected ? styles.tabSectionToggleBtnSelectedText : styles.tabSectionToggleBtnNotSelectedText} >Recent</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={!isRecentSelected ? styles.tabSectionToggleBtnSelected : styles.tabSectionToggleBtnNotSelected} onPress={() => { setisRecentSelected(false) }}>
                            <Text style={!isRecentSelected ? styles.tabSectionToggleBtnSelectedText : styles.tabSectionToggleBtnNotSelectedText}>Pending</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.tabSectionColRight}>
                    <TouchableOpacity style={styles.viewAllBtn}>
                        <Text style={styles.viewAllBtnText}>View all</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.transactionSectionWrapper}>
                <RenderTransactions />
            </View>

        </ScrollView>
    )
}

const base = {
    container: {
        backgroundColor: '#ffff',
        flex: 1,
        paddingLeft: 16,
    },
    topSectionWrapper: {
        flexDirection: 'row',
        height: 34,
        marginBottom: 25
    },
    cardSectionWrapper: {
        height: 80,
        marginBottom: 17
    },
    mainActionSectionWrapper: {
        height: 62,
        flexDirection: 'row',
        borderWidth: 1,
        marginRight: 16,
        borderRadius: 8,
        borderColor: '#E6EDFF',
        marginBottom: 5
    },
    tabSectionWrapper: {
        height: 70,
        flexDirection: 'row'
    },
    transactionSectionWrapper: {
        height: 100
    },
    topSectionLeftWrapper: {
        flex: 3
    },
    topSectionRightWrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    notificationWrapper: {
        flex: 1
    },
    thumbnailWrapper: {
        flex: 1
    },
    logo: {
        height: 15.74,
        width: 24.37,
        marginTop: 33
    },
    badgeContainer: {
        width: 24,
        height: 24,
        position: 'relative',
        alignSelf: 'flex-end',
        marginTop: 33
    },
    iconBadge: {
        position: 'absolute',
        top: -5,
        right: 4,
        backgroundColor: '#CF1221',
        borderRadius: 16,
        paddingHorizontal: 4,
        paddingVertical: 2,
        zIndex: 2,
    },
    iconBadgeText: {
        color: 'white',
        fontSize: 6,
        fontWeight: '600',
    },
    profileThumbnail: {
        height: 34,
        width: 34,
        borderRadius: 17,
        marginTop: 24,
        alignSelf: 'center'
    },
    mainActionCol: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: '#E6EDFF'
    },
    mainActionIcon: {
        height: 15,
        width: 20,
        marginBottom: 8
    },
    mainActionText: {
        fontFamily: 'TTHoves-DemiBold',
        color: '#000',
    },
    tabSectionColLeft: {
        flex: 2,
        justifyContent: 'center'
    },
    tabSectionColRight: {
        flex: 1,
    },
    viewAllBtn: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        flex: 1,
        marginRight: 20
    },
    viewAllBtnText: {
        fontFamily: 'TTHoves-DemiBold',
        color: '#000',
        fontSize: 12
    },
    tabSectionToggleWrapper: {
        flexDirection: 'row',
        backgroundColor: '#E5EDF9',
        alignSelf: 'center',
        flex: 1,
        marginVertical: 15,
        marginRight: 10,
        borderRadius: 8,
    },
    tabSectionToggleBtnSelected: {
        alignSelf: 'center',
        paddingHorizontal: 5
    },
    tabSectionToggleBtnNotSelected: {
        flex: 1,
        alignSelf: 'center',
    },
    tabSectionToggleBtnSelectedText: {
        textAlign: 'center',
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 6,
        color: '#000'
    },
    tabSectionToggleBtnNotSelectedText: {
        textAlign: 'center',
    },
    transactionSectionWrapper: {
        flex: 6
    },
    transantionDateText: {
        borderBottomWidth: 1,
        borderColor: '#F8F9FA',
        paddingBottom: 10,
        color: '#000',
        fontFamily: 'TTHoves-Medium',
        fontSize: 13
    }
}

const styles = createStyles(
    base,
    minWidth(368, maxWidth(400, {
        topSectionWrapper: {
            flexDirection: 'row',
            height: 34,
            marginBottom: 33
        },
        cardSectionWrapper: {
            height: 92,
            marginBottom: 24
        },
        mainActionIcon: {
            height: 18,
            width: 25,
            marginBottom: 8
        },
        viewAllBtnText: {
            fontFamily: 'TTHoves-DemiBold',
            color: '#000',
            fontSize: 13
        },
        transantionDateText: {
            borderBottomWidth: 1,
            borderColor: '#F8F9FA',
            paddingBottom: 10,
            color: '#000',
            fontFamily: 'TTHoves-Medium',
            fontSize: 14
        },
        tabSectionColLeft: {
            flex: 1,
            justifyContent: 'center'
        },
        tabSectionColRight: {
            flex: 1,
        },
    })),
    minWidth(400, {
        topSectionWrapper: {
            flexDirection: 'row',
            height: 34,
            marginBottom: 31
        },
        cardSectionWrapper: {
            height: 92,
            marginBottom: 26
        },
        mainActionIcon: {
            height: 18,
            width: 25,
            marginBottom: 8
        },
        viewAllBtnText: {
            fontFamily: 'TTHoves-DemiBold',
            color: '#000',
            fontSize: 14
        },
        transantionDateText: {
            borderBottomWidth: 1,
            borderColor: '#F8F9FA',
            paddingBottom: 10,
            color: '#000',
            fontFamily: 'TTHoves-Medium',
            fontSize: 14
        },
        tabSectionColLeft: {
            flex: 1,
            justifyContent: 'center'
        },
        tabSectionColRight: {
            flex: 1,
        },
    }),
);
export default Home