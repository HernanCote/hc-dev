import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

import styled, { css } from 'styled-components';
import {
  H3,
  P as BaseP,
} from '../Foundation';
import { getMediaMinWidth } from '../../utils';

const Container = styled.div`
  user-select: none;
  position: relative;
  width: 100%;
  height: auto;
  padding: 1.5rem;
  background: ${({ theme }) => theme.whiteGray};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  ${getMediaMinWidth('sm')} {
    height: 90vh
  }

  ${getMediaMinWidth('xsm')} {
    padding: 2rem;
  }
`;

const Root = styled.div`
  width: 100%;
  z-index: 10000;
  max-width: 55.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.75rem;
  box-shadow: 0 0 1.25rem 1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;

  ${getMediaMinWidth('sm')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const BigCircle = styled.span`
  display: none;
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #1cd4af, #159b80);
  bottom: 75%;
  right: 50%;
  transform: scale(0.9) translate(-40%, 30%);

  ::after {
    content: "";
    position: absolute;
    width: 360px;
    height: 360px;
    background-color: #fafafa;
    border-radius: 50%;
    top: calc(50% - 180px);
    left: calc(50% - 180px);
  }

  ${getMediaMinWidth('xsm')} {
    display: block;
  }

  ${getMediaMinWidth('sm')} {
    bottom: 50%;
    transform: scale(1) translate(-40%, 38%);
  }
`;

const Square = styled.img`
  display: none;
  position: absolute;
  height: 350px;
  top: 50%;
  left: 50%;
  transform: translate(140%, 43%);
  opacity: 0.2;

  ${getMediaMinWidth('xsm')} {
    display: block;
  }

  ${getMediaMinWidth('sm')} {
      transform: translate(181%, 11%);
      height: 400px;
  }
`;

const ContactInfo = styled.div`
  padding: 1.7rem 1.6rem;
  position: relative;
  z-index: 100000;

  ::before {
    display: none;
    opacity: 0.3;
    width: 100px;
    height: 100px;
    border: 22px solid #1abc9c;
    border-radius: 50%;
    position: absolute;
    content: "";
    bottom: initial;
    top: -75px;
    right: 65px;
    transform: scale(0.95);
  }

  ${getMediaMinWidth('xsm')} {
    padding: 2.3rem 2.2rem;

    ::before {
      display: block;
    }
  }

  ${getMediaMinWidth('sm')} {
    ::before {
      transform: scale(1);
      top: initial;
      bottom: -77px;
      right: 50px;
    }
  }
`;

const ContactSubmit = styled.div`
  background-color: ${({ theme }) => theme.colors.shamrock};
  position: relative;

  &::before{
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    background-color: ${({ theme }) => theme.colors.shamrock};;
    transform: rotate(45deg);
    top: -13px;
    left: initial;
    right: 70px;
  }

  ${getMediaMinWidth('sm')} {
    ::before {
      top: 50px;
      left: -13px;
    }
  }
`;

const commonCircleStyles = css`
  border-radius: 50%;
  background: linear-gradient(135deg, transparent 20%, ${({ theme }) => theme.colors.shamrockDarken});
  position: absolute;
`;

const CircleOne = styled.span`
  ${commonCircleStyles}
  width: 130px;
  height: 130px;
  top: 130px;
  right: -40px;
`;

const CircleTwo = styled.span`
  ${commonCircleStyles}
  width: 80px;
  height: 80px;
  top: 10px;
  right: 30px;
`;

const Form = styled.form`
  padding: 1.7rem 1.6rem;
  z-index: 1;
  overflow: hidden;
  position: relative;

  ${getMediaMinWidth('xsm')} {
    padding: 2.3rem 2.2rem;
  }
`;

const Title = styled(H3)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 1.15rem;
  line-height: 1;
  margin-bottom: 0.75rem;

  ${getMediaMinWidth('xsm')} {
    font-size: 1.5rem;
  }
`;

const inputsCommonStyles = css`
  font-family: 'Inter', sans-serif;
  width: 100%;
  outline: none;
  border: 2px solid #fafafa;
  background: none;
  padding: 0.45rem 1.2rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: 25px;
  transition: 0.3s;

  ${getMediaMinWidth('xsm')} {
    padding: 0.75rem 1.25rem;
  }
`;

const Input = styled.input`
  ${inputsCommonStyles}
`;

const labelCommonStyles = css`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  padding: 0 0.4rem;
  color: #fafafa;
  font-size: 0.9rem;
  font-weight: 400;
  pointer-events: none;
  transition: 0.5s;
  z-index: 1000;
`;

const Label = styled.label`
  ${labelCommonStyles}
`;

const TextAreaLabel = styled.label`
  ${labelCommonStyles}
  top: 1rem;
  transform: translateY(0);
`;

const TextArea = styled.textarea`
    ${inputsCommonStyles}
    padding: 0.8rem 1.2rem;
    min-height: 150px;
    border-radius: 22px;
    resize: none;
    overflow-y: auto;
`;

const SendButton = styled.input`
  padding: 0.45rem 1.2rem;
  background-color: #fff;
  border: 2px solid #fafafa;
  font-size: 0.95rem;
  color: #1abc9c;
  line-height: 1;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: 0.3s;
  margin: 0;
  
  :hover {
    background-color: transparent;
    color: #fff;
  }

  ${getMediaMinWidth('xsm')} {
    padding: 0.6rem 1.3rem;
  }
`;

const GhostLabel = styled.span`
  position: absolute;
  top: 0;
  left: 25px;
  transform: translateY(-50%);
  font-size: 0.8rem;
  padding: 0 0.4rem;
  color: transparent;
  pointer-events: none;
  z-index: 999;
  
  ::before, ::after {
    content: "";
    position: absolute;
    width: 10%;
    opacity: 0;
    transition: 0.3s;
    height: 5px;
    background-color: #1abc9c;
    top: 50%;
    transform: translateY(-50%);
  }

  ::before {
    left: 50%;
  }

  ::after {
    right: 50%;
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin: 1rem 0;

  &.focus {
    ${Label}, ${TextAreaLabel} {
      top: 0;
      transform: translateY(-50%);
      left: 25px;
      font-size: 0.8rem;
    }

    ${GhostLabel}{
      ::before, ::after {
        z-index: 1;
        width: 50%;
        opacity: 1;
      } 
    } 
  }
`;

const InfoTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.shamrock};
`;

const P = styled(BaseP)`
  padding: 0;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.black};

  ${getMediaMinWidth('xsm')} {
    font-size: 1rem;
  }
`;

const Text = styled(P)`
  color: #333;
  margin: 1rem 0 1.5rem 0;


  ${getMediaMinWidth('sm')} {
    margin: 1.5rem 0 2rem 0;
  }
`;

const Info = styled.div``;

const Information = styled.div`
  display: flex;
  margin: 0.75rem 0;
  align-items: center;
  font-size: 0.95rem;

  ${P} {
    color: #555;
  }
`;

const iconsCommonStyles = css`
  user-select: none;
  color: #1abc9c;
  margin-right: 0.75rem;
  width: 23px;

  ${getMediaMinWidth('xsm')} {
    width: 20px;
  }
`;

const Location = styled(MdLocationOn)`
  ${iconsCommonStyles}
`;

const Email = styled(MdEmail)`
  ${iconsCommonStyles}
`;

const Phone = styled(MdPhone)`
  ${iconsCommonStyles}
`;

const SocialMedia = styled.div`
  user-select: none;
  padding: 1.5rem 0 0 0;

  ${P} {
    color: #333;
  }

  ${getMediaMinWidth('sm')} {
    padding: 2rem 0 0 0;
  }
`;

const SocialIcons = styled.div`
  user-select: none;
  display: flex;
  margin-top: 0.5rem;
`;

const A = styled.a`
  user-select: none;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: linear-gradient(45deg, #1abc9c, #149279);
  color: #fff;
  text-align: center;
  line-height: 41px;
  margin-right: 0.5rem;
  transition: 0.3s;

  :hover{
    transform: scale(1.05);
  }

  ${getMediaMinWidth('xsm')} {
      width: 35px;
      height: 35px;
      line-height: 46px;
  }
`;

export {
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
};
