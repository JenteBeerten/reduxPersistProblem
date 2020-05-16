    import React, { useEffect } from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    import { useSelector, useDispatch } from 'react-redux';
    import * as testActions from './store/actions/test';

    const TestComponent = props => {
      const dispatch = useDispatch();

      var test = useSelector(state => state.test.test);
      console.log('test='+test);

      useEffect(() => {
          
          dispatch(testActions.fetchTest());
        }, [dispatch]);

        return (
        <View style={styles.container}>
          <Text> Test is {test} </Text>
        </View>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }
      });


    export default TestComponent;