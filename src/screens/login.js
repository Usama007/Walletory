import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStyles, maxWidth, minWidth } from 'react-native-media-queries';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Form from '../components/form'
import BottomButton from '../components/bottomButton';
import { addLoginData } from "../redux/loginSlice"
import { addData } from "../redux/dataSlice"
import emailValidate from '../misc/emailValidation';
import data from '../misc/data';

const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const register = useSelector(state => state.register)
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const [showPassword, setshowPassword] = useState(false);
    const [errorMessage, seterrorMessage] = useState('')

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            seterrorMessage('');
            setemail('')
            setpassword('')
        });
        return unsubscribe;
    }, [navigation])

    useEffect(() => {
        seterrorMessage('');
    }, [email, password])

    const onPressChangePasswordVisibility = (show = false) => {
        setshowPassword(show);
    }

    const onPressLogin = () => {
        if (email == '') {
            seterrorMessage('Enter your email address')
        } else if (password == '') {
            seterrorMessage('Enter your password')
        } else if (emailValidate(email) == false) {
            seterrorMessage('Invalid email address')
        } else {
            if (register.length > 0) {
                let index = register.findIndex(item => { return item.email === email });
                if (index >= 0) {
                    if (register[index].email === email && register[index].password == password) {
                        let payload = {
                            isLoggedIn: true
                        }
                        dispatch(addLoginData(payload))
                        dispatch(addData(data))

                    } else {
                        seterrorMessage('Incorrect email and password')
                    }
                } else {
                    seterrorMessage('No user found with this email address')
                }
            } else {
                seterrorMessage('No user found with this email address')
            }
        }
    }

    const onPressBackBtn = () => {
        BackHandler.exitApp();
    }

    return (
        <View style={{ backgroundColor: '#fff', flex: 1, }}>
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
                    Log in to continue
                </Text>
            </View>
            <Form
                email={email}
                password={password}
                setemail={setemail}
                setpassword={setpassword}
                onPressChangePasswordVisibility={onPressChangePasswordVisibility}
                showPassword={showPassword} />
            <View style={styles.registerSection}>
                <Text style={styles.registerText}>
                    Don't have any account?{' '}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Registraion')}>
                    <Text style={styles.registerBtnText}>
                        Sign Up.
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.errorMsg}>{errorMessage}</Text>
            <BottomButton title="Log in" onPressBtn={onPressLogin} />
        </View>
    )
}

const base = {
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
    registerSection: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 130
    },
    registerText: {
        fontFamily: 'TTHoves-Regular',
        fontSize: 14,
    },
    registerBtnText: {
        fontFamily: 'TTHoves-DemiBold',
        textDecorationLine: 'underline',
        color: '#56539F',
        fontSize: 14,
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
        registerSection: {
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 200
        },
        registerText: {
            fontFamily: 'TTHoves-Regular',
            fontSize: 16,
        },
        registerBtnText: {
            fontFamily: 'TTHoves-DemiBold',
            textDecorationLine: 'underline',
            color: '#56539F',
            fontSize: 16,
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
        registerSection: {
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 320
        },
        registerText: {
            fontFamily: 'TTHoves-Regular',
            fontSize: 18,
        },
        registerBtnText: {
            fontFamily: 'TTHoves-DemiBold',
            textDecorationLine: 'underline',
            color: '#56539F',
            fontSize: 18,
        },
    }),
);

export default Login
