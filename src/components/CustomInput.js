import { Input } from '@chakra-ui/input';
import { Text } from '@chakra-ui/layout';
import React from 'react';

function CustomInput({ name, placeholder, errors, register }) {
  return (
    <>
      <Input
        placeholder={placeholder}
        variant="filled"
        {...register(name)}
        mt="2"
      />
      {errors && errors[name] && (
        <Text color="red" fontSize="smaller" pl="1">
          {errors[name].message}
        </Text>
      )}
    </>
  );
}

export default CustomInput;
