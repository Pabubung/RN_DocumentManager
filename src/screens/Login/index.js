/*This is an example of React Native App Intro Slider */
import React from 'react';
//import react in project
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
  Alert,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {
  Content,
  List,
  ListItem,
  InputGroup,
  Input,
  Icon,
  Picker,
  Item,
  Button,
  Label,
  // Grid, Col, Row
} from 'native-base';
import {connect} from 'react-redux';
import styles from './styles';
import * as Helper from '../../common/helper';

import RNExitApp from 'react-native-exit-app';
// import AndroidBackButton from 'android-back-button';
import validate from '../../common/validate.js';
import ButtonInternal from '../../component/Button';
// import AutoHeightImage from 'react-native-auto-height-image';
// import imageLogo from '../../image/logoBitrixLogin.png';

import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const w = percent => (width * percent) / 150;
export const h = percent => (height * percent) / 150;
export const totalSize = num =>
  (Math.sqrt(height * height + width * width) * num) / 150;
// import {versionDevice} from '../../common/constant';

// var DeviceInfo = require('react-native-device-info');

const constraints = {
  email: {
    presence: {
      allowEmpty: false,
      message: '^Please enter an email address',
    },
    email: {
      message: '^Please enter a valid email address',
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: '^Please enter a password',
    },
    length: {
      minimum: 5,
      message: '^Your password must be at least 5 characters',
    },
  },
};

const validator = (field, value) => {
  // Creates an object based on the field name and field value
  // e.g. let object = {email: 'email@example.com'}
  let object = {};
  object[field] = value;

  let constraint = constraints[field];

  // Validate against the constraint and hold the error messages
  const result = validate(object, {[field]: constraint});

  // If there is an error message, return it!
  if (result) {
    // Return only the field error message if there are multiple
    return result[field][0];
  }
  return null;
};

// Ini akhir keperluan untuk login //

class Login extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      loader: false,
      email: '',
      placeholderUsername: 'Email address here',
      emailError: '',
      passwordError: '',
      emailListitem: 'none',
      toggle: false,
      togglePassword: false,
      password: '',
      placeholderPassword: 'Password here',
      passwordError: '',
      dialogVisible: false,
      versionmobile: false,
      dxg: '',
      cekInputUsername: false,
      cekInputPassword: false,
      //To show the main page of the app
    };
  }

  UNSAFE_componentWillMount() {
    // console.log("Program jalan",
    // DeviceInfo.getUniqueID(),
    // DeviceInfo.getTimezone(),
    // DeviceInfo.getDeviceId(),
    // DeviceInfo.getModel(),
    // DeviceInfo.isTablet(),
    // DeviceInfo.getPhoneNumber(),
    // DeviceInfo.getSystemName(),
    // DeviceInfo.getSystemVersion()
    //  )

    const value = {
      //   versionDevice,
      //   DeviceInfo: DeviceInfo.getUniqueID(),
      //   DeviceType: DeviceInfo.getSystemName(),
    };
    this.props.dispatch({
      type: 'CHECK_VERSION',
      payload: value,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.someValue !== prevState.someValue) {
      return {someState: nextProps.someValue};
    } else return null;
  }

  // Ini fungsi untuk login

  onButtonPress() {
    let {cekInputUsername, cekInputPassword, email, password} = this.state;

    if ((cekInputUsername == true) & (cekInputPassword == true)) {
      Helper.navigateToPage(this, 'Home');

      const value = {
        email,
        password,
        // deviceInfo : DeviceInfo.getUniqueID()
      }
      this.setState({loader: true})

      // this.props.dispatch({
      //   type: 'USER_LOGIN',
      //   payload: value
      // });
    } else {
      this.onBlurUsername(email);
      this.onBlurPassword(password);
    }
  }

  onTouchStartUsername() {
    this.setState({placeholderUsername: ''});
  }

  onTouchStartPassword() {
    this.setState({placeholderPassword: ''});
  }

  onBlurUsername(value) {
    this.setState({email: value.trim()});

    let emailError = validator('email', value);
    if (emailError) {
      this.setState({
        toggle: true,
        emailError: emailError,
      });

      if (this.state.email == '') {
        this.setState({
          placeholderUsername: 'Email address here',
        });
      }
    } else {
      this.setState({
        toggle: false,
        emailError: emailError,
        cekInputUsername: true,
      });
    }
  }

  onBlurPassword(value) {
    this.setState({password: value.trim()});

    let passwordError = validator('password', value);

    if (passwordError) {
      this.setState({
        togglePassword: true,
        passwordError: passwordError,
      });

      if (this.state.password == '') {
        this.setState({
          placeholderPassword: 'Password here',
        });
      }
    } else {
      this.setState({
        togglePassword: false,
        passwordError: passwordError,
        cekInputPassword: true,
      });
    }
  }

  handleCancel = () => {
    this.setState({versionmobile: false});
    RNExitApp.exitApp();
  };

  handleDelete = () => {};

  testAlert() {
    Alert.alert(
      'Exit Application',
      'Are you sure want to exit ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => RNExitApp.exitApp()},
      ],
      {cancelable: false},
    );
    return true;
  }

  goToNext() {
    ToastAndroid.show('Dipencet dialognya', ToastAndroid.SHORT);
  }

  // Ini akhir fungsi untuk login

  // Ini screen untuk login

  body() {
    const {emailError, passwordError} = this.state;

    return (
      <View style={styles.body}>
        {/* <View style={styles.logInTitle}>
          <Text style={styles.logInTitleText}>{logInTitle}</Text>
          <Text style={styles.logInCaptionText}>{logInCaption}</Text>
        </View> */}

        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
            marginBottom: w(20),
          }}>
          {/* <AutoHeightImage
            width={w(100)}
            source={imageLogo}
            // style={styles.paragraph}
          /> */}
        </View>

        {/* <Label style={{fontWeight:'bold', color:'#ffffff'}}>USERNAME</Label> */}
        <Item
          style={[styles.inputStyle, this.state.toggle && styles.textInputAlt]}>
          <Icon
            active
            name="ios-person"
            style={{paddingLeft: w(0), color: '#ffffff'}}
          />
          <Input
            onTouchStart={() => this.onTouchStartUsername()}
            value={this.state.email}
            autoCorrect={false}
            onChangeText={value => this.onBlurUsername(value)}
            placeholder={this.state.placeholderUsername}
            placeholderTextColor="#ffffff"
            style={{color: '#ffffff'}}
          />
        </Item>
        {emailError ? (
          <View>
            <Text style={{color: '#e71636', paddingTop: 0, paddingBottom: 3}}>
              {emailError}
            </Text>
          </View>
        ) : null}

        {/* <Label style={{fontWeight:'bold', color:'#ffffff'}}>PASSWORD</Label>   */}
        <Item
          style={[
            styles.inputStyle,
            this.state.togglePassword && styles.textInputAlt,
          ]}>
          <Icon
            active
            name="ios-unlock"
            style={{paddingLeft: w(0), color: '#ffffff'}}
          />
          <Input
            onTouchStart={() => this.onTouchStartPassword()}
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={value => this.onBlurPassword(value)}
            placeholder={this.state.placeholderPassword}
            placeholderTextColor="#ffffff"
            style={{color: '#ffffff'}}
          />
        </Item>
        {passwordError ? (
          <View>
            <Text style={{color: '#e71636', paddingTop: 0, paddingBottom: 3}}>
              {passwordError}
            </Text>
          </View>
        ) : null}

        {/* <ButtonInternal
          buttonTextStyle={styles.buttonTextStyle}
          text="Login"
          style={styles.buttonStyle}
          onPress={() => this.onButtonPress()}
        /> */}

        <Button block info
          // style={styles.button}
          style={styles.buttonStyle}
          onPress={() => {
            this.onButtonPress()
          }}>
          <Text>Login</Text>
        </Button>
        {/* <TouchableOpacity
          buttonTextStyle={styles.buttonTextStyle}
          text="Login"
          style={styles.buttonStyle}
          onPress={() => this.onButtonPress()}></TouchableOpacity> */}

        {/* <ButtonInternal
          buttonTextStyle={styles.buttonTextStyle}
          text="Register"
          style={styles.buttonStyle}
          onPress={() => this.onButtonPress()}
        /> */}
      </View>
    );
  }

  // Akhir screen untuk login

  render() {
    return (
      <View style={styles.containerLogin}>
        <ImageBackground
          resizeMode="cover"
          // blurType="light"
          // blurAmount={5}
          // blurRadius={5}
          source={require('../../image/launchscreenBitrix.png')}
          style={styles.backgroundImage}>
          {this.body()}

          {/* <AndroidBackButton
            onPress={() => {
              // navigation.pop();
              this.testAlert();
              return 'ssss';
            }}
          /> */}
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loginData: state.loginData,
});

export default connect(mapStateToProps)(Login);
