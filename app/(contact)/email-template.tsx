import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Thank You, {firstName} for your message!</h1>
    <p>We are glad that you reached out to us</p>
    <p>We will get back to you as soon as possible</p>
    <p>Have a wonderful day</p>
  </div>
);
