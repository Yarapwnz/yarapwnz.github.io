import React, { useState } from "react";
import { Send, Email, LogoLinkedin, SendAlt } from "@carbon/icons-react";
import Layout from "../../components/Layout";
import { SectionTitle } from "../../styles";
import {
  ContactContainer,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  SuccessMessage,
  DirectContact,
  ContactLink,
} from "./styles";

const Contact = ({ user }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${
      user.basics.email
    }?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const linkedinProfile = user.basics.profiles?.find(
    (p) => p.network === "LinkedIn"
  );

  return (
    <Layout user={user}>
      <ContactContainer>
        <SectionTitle>Get In Touch</SectionTitle>

        {isSubmitted ? (
          <SuccessMessage>
            <Send size={20} />
            Opening your email client...
          </SuccessMessage>
        ) : (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <SubmitButton type="submit">
              <Send size={18} />
              Send Message
            </SubmitButton>
          </Form>
        )}

        <DirectContact>
          <Label>Or reach out directly</Label>
          <ContactLink href={`mailto:yarabarabaluk@gmail.com`}>
            <Email size={24} />
            yarabarabaluk@gmail.com
          </ContactLink>
          {linkedinProfile && (
            <ContactLink
              href={linkedinProfile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoLinkedin size={24} />
              LinkedIn Profile
            </ContactLink>
          )}
          <ContactLink
            href="https://t.me/yarikqx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SendAlt size={24} />
            @yarikqx
          </ContactLink>
        </DirectContact>
      </ContactContainer>
    </Layout>
  );
};

export default Contact;
