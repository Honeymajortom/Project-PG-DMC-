import { Alert } from 'react-native'

export const showAlert = message => {
    Alert.alert(message)
}

export const showSuccessAlert = message => {
    Alert.alert('Success',message)
}

export const showErrorAlert = message => {
    Alert.alert('Error', message)
}

export const showWarningAlert = message => {
    Alert.alert('Warning', message)
}

