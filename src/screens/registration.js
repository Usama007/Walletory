import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStyles, maxWidth, minWidth } from 'react-native-media-queries';
import { View, Text, TouchableOpacity, Image, Alert, Switch } from 'react-native'
import Form from '../components/form'
import BottomButton from '../components/bottomButton';
import { addNewUser } from "../redux/registerSlice"
import emailValidate from '../misc/emailValidation';

const Registraion = ({ navigation }) => {
    const dispatch = useDispatch();
    const register = useSelector(state => state.register)
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const [showPassword, setshowPassword] = useState(false);
    const [errorMessage, seterrorMessage] = useState('')
    const [isToggleEnabled, setisToggleEnabled] = useState(false)

    useEffect(() => {
        seterrorMessage('');
    }, [email, password, isToggleEnabled])

    const onPressChangePasswordVisibility = (show = false) => {
        setshowPassword(show);
    }

    const onPressRegisterBtn = () => {
        if (email == '') {
            seterrorMessage('Enter your email address')
        } else if (password == '') {
            seterrorMessage('Enter your password')
        } else if (emailValidate(email) == false) {
            seterrorMessage('Invalid email address')
        } else if (!isToggleEnabled) {
            seterrorMessage('You need to accept terms and condition.')
        }
        else {
            if (register.length > 0) {
                let index = register.findIndex(item => { return item.email === email });
                if (index >= 0) {
                    Alert.alert(
                        "SORRY!",
                        "This email is already registered", [
                        { text: "Go To Login", onPress: () => onPressBackBtn() },
                        { text: "Close", onPress: () => { } }
                    ]
                    );

                } else {
                    let payload = {
                        email: email,
                        password: password
                    }
                    dispatch(addNewUser(payload))
                    Alert.alert(
                        "Success!",
                        "Account has been created successfully",
                        [
                            { text: "Go To Login", onPress: () => onPressBackBtn() }
                        ]
                    );
                }
            } else {
                let payload = {
                    email: email,
                    password: password
                }
                dispatch(addNewUser(payload))
                Alert.alert(
                    "Success!",
                    "Account has been created successfully",
                    [
                        { text: "Go To Login", onPress: () => onPressBackBtn() }
                    ]
                );

            }

        }
    }

    const onPressBackBtn = () => {
        navigation.goBack()
    }

    const toggleSwitch = () => setisToggleEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={onPressBackBtn}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/images/arrow-back.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.welComeTextSection}>
                <Text style={styles.welcomeText}>
                    Welcome
                </Text>
                <Text style={styles.welcomeLoginText}>
                    Sign up to continue
                </Text>
            </View>
            <Form
                email={email}
                password={password}
                setemail={setemail}
                setpassword={setpassword}
                onPressChangePasswordVisibility={onPressChangePasswordVisibility}
                showPassword={showPassword} />
            <View style={styles.toggleWrapper}>
                <Switch
                    style={styles.switch}
                    trackColor={{ false: "#767577", true: "#A09FC3" }}
                    thumbColor={isToggleEnabled ? "#56539F" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isToggleEnabled}
                />
                <Text style={styles.toggleText}>I have read, understood, and agree to<Text style={styles.hyperLinkText}> walletory's “Terms & Conditions” </Text> and <Text style={styles.hyperLinkText}>”Privacy Policy"</Text></Text>
            </View>
            <Text style={styles.errorMsg}>{errorMessage}</Text>
            <BottomButton title="Create account" onPressBtn={onPressRegisterBtn} />
        </View>
    )
}

const base = {
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    icon: {
        height: 16,
        width: 16,
        marginTop: 16,
        marginBottom: 28,
        marginLeft: 16
    },
    welComeTextSection: {
        marginLeft: 16
    },
    welcomeText: {
        fontSize: 24,
        color: '#56539F',
        fontFamily: "TTHoves-DemiBold"
    },
    welcomeLoginText: {
        fontSize: 24,
        color: '#000',
        fontFamily: "TTHoves-Medium"
    },
    toggleWrapper: {
        marginLeft: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 120
    },
    toggleText: {
        marginRight: 6,
        fontFamily: "TTHoves-Regular",
        fontSize: 12,
        flex: 5.2
    },
    switch: {
        flex: 1
    },
    hyperLinkText: {
        color: '#56539F',
        textDecorationLine: 'underline'
    },
    errorMsg: {
        color: '#F32013',
        textAlign: 'center',
        fontSize: 14,
        fontFamily: "TTHoves-Regular",
    }
}

const styles = createStyles(
    base,
    minWidth(368, maxWidth(400, {
        welcomeText: {
            fontSize: 26,
            color: '#56539F',
            fontFamily: "TTHoves-DemiBold"
        },
        welcomeLoginText: {
            fontSize: 26,
            color: '#000',
            fontFamily: "TTHoves-Medium"
        },
        toggleWrapper: {
            marginLeft: 5,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 180
        },
        toggleText: {
            marginRight: 6,
            fontFamily: "TTHoves-Regular",
            fontSize: 13,
            flex: 5.4
        },
    })),

    minWidth(400, {
        welcomeText: {
            fontSize: 28,
            color: '#56539F',
            fontFamily: "TTHoves-DemiBold"
        },
        welcomeLoginText: {
            fontSize: 28,
            color: '#000',
            fontFamily: "TTHoves-Medium"
        },
        toggleWrapper: {
            marginLeft: 5,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 300
        },
        toggleText: {
            marginRight: 6,
            fontFamily: "TTHoves-Regular",
            fontSize: 14,
            flex: 6
        },
    }),
);

export default Registraion
