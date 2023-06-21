import React, { useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config/firebaseConfig";

export const SignUp = () => {
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value, //When using square brackets around an object's key/property in JavaScript, it allows you to use a dynamic value as the key name.
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { password, confirmPassword, email } = form;

      if (password !== confirmPassword) {
        return toast.error("password does not match", {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      //create and save user in firebase auth
      const userPending = createUserWithEmailAndPassword(auth, email, password);

      toast.promise(
        userPending,
        {
          pending: "please wait",
          // success: "Signup Successfully",
        },
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );

      const { user } = await userPending;

      if (user?.uid) {
        toast.success("Signup successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {}
  };
  const inputs = [
    {
      label: "Name",
      name: "name",
      placeholder: "",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      placeholder: "",
      type: "email",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      placeholder: "********",
      type: "password",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      placeholder: "********",
      type: "password",
      required: true,
      minLength: 6,
    },
  ];

  return (
    <DefaultLayout>
      <Container className="mt-5">
        <Form
          className="border rounded shadow-lg p-5 m-auto py-5"
          style={{ width: "450px" }}
          onSubmit={handleOnSubmit}
        >
          <h3 className="text-primary fw-bolder">Join our library</h3>

          <Form.Text className="mt-5 py-2">
            Anyone can create admin or user account for experiment purpose.
            <br />
            <br />
            Once you are registered, you will be redirected to Dashboard
            automatically.
          </Form.Text>

          <div className="mt-5">
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}
          </div>
          <div className="d-grid mt-3">
            <Button type="submit">Join Library</Button>
          </div>
        </Form>
      </Container>
    </DefaultLayout>
  );
};
