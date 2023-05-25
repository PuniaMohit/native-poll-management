import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#f6f9ff',
    paddingTop: '5%',
  },
  signupForm: {
    margin: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '25%',
    flexDirection: 'column',
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  heading: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
  },
  formGroup: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    marginTop: 5,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  submitButton: {
    color: 'white',
    borderWidth: 0,
    padding: 10,
    fontSize: 18,
    cursor: 'pointer',
    width: '100%',
    backgroundColor: '#007bff',
    marginTop: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
  },
  navigateSignup: {
    marginLeft: 5,
    color: '#007bff',
    cursor: 'pointer',
  },
  signinMessage: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default styles;
