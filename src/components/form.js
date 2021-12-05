import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { createStyles, minWidth } from 'react-native-media-queries';
import Icon from 'react-native-vector-icons/Entypo';

const Form = ({ email, password, setemail, setpassword, onPressChangePasswordVisibility, showPassword }) => {
    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.inputEmail}
                placeholder="YOUR EMAIL"
                keyboardType={'email-address'}
                value={email}
                onChangeText={text => setemail(text)}
            />
            <View style={styles.passwordWrapper}>
                <TextInput
                    style={styles.inputPassword}
                    placeholder="YOUR PASSWORD"
                    keyboardType={'default'}
                    value={password}
                    secureTextEntry={showPassword ? false : true}
                    onChangeText={text => setpassword(text)}
                />
                {showPassword ? (
                    <TouchableOpacity style={styles.iconBtn} onPress={() => {
                        onPressChangePasswordVisibility(false)
                    }}>
                        <Icon
                            style={styles.icon}
                            name='eye-with-line'
                            color='#000'
                            size={16}
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.iconBtn} onPress={() => {
                        onPressChangePasswordVisibility(true)
                    }}>
                        <Icon
                            style={styles.icon}
                            name='eye'
                            color='#000'
                            size={16}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const base = {
    formContainer: {
        marginHorizontal: 16,
        marginVertical: 24,
    },
    passwordWrapper: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#F3F7FC',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    iconBtn: {
        alignSelf: 'center',
    },
    icon: {
        paddingRight: 20,
        color: '#BCC3C7',
    },
    inputEmail: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#F3F7FC',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        paddingLeft: 21,
        paddingBottom: 18,
        paddingTop: 22,
        fontSize: 14,
        fontFamily: "TTHoves-Regular",
    },
    inputPassword: {
        backgroundColor: '#fff',
        flex: 1,
        borderWidth: 0,
        paddingLeft: 21,
        paddingBottom: 18,
        paddingTop: 22,
        fontSize: 14,
        fontFamily: "TTHoves-Regular",
    },
}

const styles = createStyles(
    base,
    minWidth(400, {
        inputEmail: {
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#F3F7FC',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            paddingLeft: 21,
            paddingBottom: 18,
            paddingTop: 22,
            fontSize: 16,
            fontFamily: "TTHoves-Regular",
        },
        inputPassword: {
            backgroundColor: '#fff',
            flex: 1,
            borderWidth: 0,
            paddingLeft: 21,
            paddingBottom: 18,
            paddingTop: 22,
            fontSize: 16,
            fontFamily: "TTHoves-Regular",
        },
    }),
);

export default Form
