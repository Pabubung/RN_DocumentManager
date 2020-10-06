import { NavigationActions, StackActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';

const loginReqPages = ['NotesList','UserProfile','Feedback','RegisterEvent','SpeakersNote'];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
module.exports = {
  
  // resetNavigation to zero index
  resetNavigation(pointer, navigation, parameter = null) {
    const _this = pointer;

    console.log("resetNavigation", navigation, _this.props);

    _this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: navigation, params: parameter })],
    }));
  },
 
  navigateToPage(self, page, params = null) {
    if(loginReqPages.includes(page)){
      AsyncStorage.getItem('userData').then((data) => {
        if(!data){
          self.props.navigation.navigate('Login');
        }else{
          if (page === 'goBack' || page === '') {
            self.props.navigation.goBack(null);
          } else {
            self.props.navigation.navigate(page, { ...params });
          }
        } 
      }).done(); 
    } else {
      self.props.navigation.navigate(page, { ...params });
    }  
  },

  timeFormat(data){
    const timeValue = data.split(' ')
    return timeValue[1]
  },

  _commonAlert(Alert, txt, self, screenTo) {
		Alert.alert('', txt, [{text: 'OK', onPress: () => self.props.navigation.navigate(screenTo) },], {cancelable: false})
	},

  getTimeFormat(data) {
    var dateObj = new Date(data);
    
    
var month =  monthNames[dateObj.getUTCMonth()]

    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var h = dateObj.getUTCHours();
    var m = dateObj.getUTCMinutes();

    return  month + " " + day + ", " + year + " " + h + " : " + m;
  }

};
