import { Component } from "react";
import {
  FormWrapper,
  FormTitle,
  Form,
  FormRow,
  Label,
  Input,
  ButtonGroup,
  Button,
} from "./AddAddress.styles";

class AddAddress extends Component {
  render() {

    return (
      <FormWrapper>
        <FormTitle>Contact Information</FormTitle>

        <Form>
          <FormRow>
            <Label>First Name</Label>
            <Input type="text" />
          </FormRow>

          <FormRow>
            <Label>Last Name</Label>
            <Input type="text" />
          </FormRow>

          <FormRow>
            <Label>Company</Label>
            <Input type="email" />
          </FormRow>

          <FormRow>
            <Label>Phone Number</Label>
            <Input type="text" />
          </FormRow>

          <FormTitle>Adress</FormTitle>

          <FormRow>
            <Label>Street Address</Label>
            <Input type="text" />
          </FormRow>

          <FormRow>
            <Label>Country</Label>
            <Input type="text" />
          </FormRow>
          
          <FormRow>
            <Label>State/Province</Label>
            <Input type="text" />
          </FormRow>

          <FormRow>
            <Label>Zip/Postal Code</Label>
            <Input type="text" />
          </FormRow>

          <ButtonGroup>
            <Button type="submit">Save Address</Button>
          </ButtonGroup>
        </Form>
      </FormWrapper>
    );
  }
}

export default AddAddress;
