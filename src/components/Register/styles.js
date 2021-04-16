import { StyleSheet } from 'react-native';
import colours from '../../assets/themes/colours';

export default StyleSheet.create({
    header: {
        fontSize: 21,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logoImage: {
        alignSelf: 'center', 
        height: 150, 
        marginTop: 10,
        width: 150, 
    },
    subheader: {
        fontSize: 17,
        fontWeight: 'bold',
        paddingVertical: 5,
        textAlign: 'center',
    },
    registertext: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 40,
    },
    registerlink: {
        color: colours.primary
    }
})