import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomInput from './CustomInput';
import { schema } from './YupSchema';

function Form1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  //   console.log(errors);
  const submitHandeler = data => {
    console.log(data);
  };
  return (
    <Box
      p="8"
      w="500px"
      rounded="10"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
    >
      <form onSubmit={handleSubmit(submitHandeler)}>
        <CustomInput
          name="firstName"
          placeholder="First Name"
          register={register}
          errors={errors}
        />
        <CustomInput
          name="lastName"
          placeholder="Last Name"
          register={register}
          errors={errors}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          register={register}
          errors={errors}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          register={register}
          errors={errors}
        />
        <CustomInput
          name="passwordConfirm"
          placeholder="Confirm Password"
          register={register}
          errors={errors}
        />
        <Button type="submit" colorScheme="blue" my="3">
          submit
        </Button>
      </form>
    </Box>
  );
}

export default Form1;
