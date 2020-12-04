import React from 'react';

import { FaGithub, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import ShapeSquare from '../../assets/img/shape.png';

import {
  Container,
  Root,
  BigCircle,
  Square,
  ContactInfo,
  ContactSubmit,
  CircleOne,
  CircleTwo,
  Form,
  Input,
  TextArea,
  SendButton,
  GhostLabel,
  InputContainer,
  InfoTitle,
  Information,
  Info,
  Text,
  Location,
  Email,
  Phone,
  SocialMedia,
  SocialIcons,
  P,
  A,
  Label,
  Title,
  TextAreaLabel,
} from './StyledComponents';

const inputs = document.querySelectorAll('.input');

function focusFunc() {
  const parent = this.parentNode;
  parent.classList.add('focus');
}

function blurFunc() {
  const parent = this.parentNode;
  if (this.value === '') {
    parent.classList.remove('focus');
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});

const ContactForm = () => (
  <Container>
    <BigCircle />
    <Square src={ShapeSquare} alt="dots" />
    <Root>
      <ContactInfo>
        <InfoTitle>Lets get in touch</InfoTitle>
        <Text>
          Send me an email or contact me through my social media!
        </Text>
        <Info>
          <Information>
            <Location size="1.5rem" />
            <P>Bogotá - Colombia</P>
          </Information>
          <Information>
            <Email size="1.5rem" />
            <P>hernan.cote@outlook.com</P>
          </Information>
          <Information>
            <Phone size="1.5rem" />
            <P>+57 310 483 32 61</P>
          </Information>
        </Info>
        <SocialMedia>
          <P>Connect with me: </P>
          <SocialIcons>
            <A href="https://github.com/HernanCote" target="_blank">
              <FaGithub size="1.5rem" />
            </A>
            <A href="https://www.linkedin.com/in/hernancote/" target="_blank">
              <FaLinkedin size="1.5rem" />
            </A>
            <A href="https://www.facebook.com/hernan.cote/" target="_blank">
              <FaFacebookSquare size="1.5rem" />
            </A>
          </SocialIcons>
        </SocialMedia>
      </ContactInfo>
      <ContactSubmit>
        <CircleOne />
        <CircleTwo />
        <Form>
          <Title>Contact Me</Title>
          <InputContainer>
            <Input
              type="email"
              name="name"
              className="input"
              autoComplete="off"
            />
            <Label htmlFor="name">Username</Label>
            <GhostLabel>Username</GhostLabel>
          </InputContainer>
          <InputContainer>
            <Input
              type="email"
              name="email"
              className="input"
              autoComplete="off"
            />
            <Label htmlFor="email">Email</Label>
            <GhostLabel>Email</GhostLabel>
          </InputContainer>
          <InputContainer>
            <Input
              type="tel"
              name="phone"
              className="input"
              autoComplete="off"
            />
            <Label htmlFor="phone">Phone</Label>
            <GhostLabel>Phone</GhostLabel>
          </InputContainer>
          <InputContainer>
            <TextArea
              name="message"
              className="input"
              autoComplete="off"
            />
            <TextAreaLabel htmlFor="message">Message</TextAreaLabel>
            <GhostLabel>Message</GhostLabel>
          </InputContainer>
          <SendButton type="submit" value="send" />
        </Form>
      </ContactSubmit>
    </Root>
  </Container>
);

export default ContactForm;
