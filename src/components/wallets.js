import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import NotSelectedCard from './notSelectedCard';
import SelectedCard from './selectedCard';

const Wallets = ({ item, selectedWalletName, onPressWallet }) => {
    return (
        <View >
            <TouchableOpacity onPress={() => onPressWallet(item.name)}>
                {selectedWalletName == item.name ? (<SelectedCard item={item} />) : (<NotSelectedCard item={item} />)}
            </TouchableOpacity>
        </View>
    )
}

export default Wallets
