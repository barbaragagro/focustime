import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { sizes } from '../utils/sizes';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
                activeUnderlineColor={colors.darkBlue}
          onChangeText={setSubject}
          label="What would you like to focus on?"
          style={styles.textInput}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  textInput: {
    flex: 1,
    marginRight: sizes.sm,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: sizes.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
