import React from 'react';
import { StyleSheet, Button, View, Text, TextInput ,TouchableOpacity} from 'react-native';
import { BackHandler, Alert, Platform } from 'react-native';
import Loader from '../utility/loader';

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    this.state = {
      loading:false,
      username: '',
      password: ''
    };
  }

  onSubmitClicked() {

    this.props.navigation.navigate('NavHome')

    // if (this.state.username == '') {
    //   alert('Please Enter Username');

    // } else if (this.state.password == '') {
    //   alert('Please Enter Password');

    // } else {
    //     this.requestLogin()
    // }

  }

  requestLogin(){  
    
    this.setState({loading:true});
    
    const {navigate}=this.props.navigation;
    var dataToSend = {name: this.state.name,password:this.state.password};
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch('http://glocal.kazmatechnology.in/Webservice/login', {
      method: "POST",
      body: formBody,
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({loading:false});
       // alert(JSON.stringify(responseJson.data[0].location));
        if(responseJson.message=='Login successfull')
        {
            this.setState({userid:responseJson.data[0].user_id,location:responseJson.data[0].location,loading:false});
            navigate('Home',{item:[this.state.userid,this.state.location]});
        }
        else{
          alert('Enter Valid Credentials');
          this.props.navigation.navigate('NavScreen2')
        }
    })
    .catch((error) => {
      alert(JSON.stringify(error));
    });
  }



  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    //this.props.navigation.goBack(null);
    if (this.constructor.name == "LoginScreen") {
      Alert.alert(
        'Warning !!!',
        'Please confirm your request',
        [
          { text: 'Later', onPress: () => console.log('Ask me later pressed') },
          {
            text: 'Exit', onPress: () => {

              if (Platform.OS === 'android') {
                BackHandler.exitApp();
              }

            }
          },
        ],
        { cancelable: false },
      );
    }
    return true;
  }


  render() {
    return (
      <View style={styles.container}>
        <Loader loading={this.state.loading}/>

        <Text style={styles.login}>
          LOGIN
        </Text>

        <Text style={styles.loginText}>
          Username :
        </Text>

        <TextInput
          style={styles.loginInputs}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
          placeholder = 'Enter Username' />


        <Text style={styles.loginText}>
          Password :
        </Text>

        <TextInput style={styles.loginInputs}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password} 
          placeholder = 'Enter Password'
          secureTextEntry={true}/>

        <TouchableOpacity onPress={()=>this.onSubmitClicked()} style={styles.loginButton}>
            <Text style={{marginLeft: 30, marginTop:12, color:'white' ,fontWeight:'bold'}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },

  login: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 40,
    marginTop: 70,
    marginBottom: 70,
  },

  loginText: {
    fontWeight: 'bold',
    fontSize: 20,
    width: 200,
    marginBottom: 10,
  },

  loginInputs: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },

  loginButton: {
    height: 40,
    width: 100,
    marginTop: 10,
    backgroundColor:'gray',
  },
});