import React from "react";
import { Container } from "react-bootstrap";
import img1 from "../../../../assets/Video/VideoImg.png";

export const TermsConditonSection = () => {
  return (
    <>
      <Container>
        <div className="TermC Title">
          <div className="TermsCImg">
            <img src={img1} className="mx-auto img-fluid" alt="terms" />
          </div>

          <div>
            <div className="TermsContent">
              <h3>1. Our Website</h3>
              <p>Our website address is: </p>
              <blockquote>
                <p>
                  We collect certain data from you directly, like information
                  you enter yourself, data about your participation in courses,
                  and data from third-party platforms you connect with{" "}
                  <b>eCademy</b>. We also collect some data automatically, like
                  information about your device and what parts of our Services
                  you interact with or spend time using.
                </p>
              </blockquote>
            </div>
            <div className="TermsContent">
              <h3>2. Data you Provide to us</h3>
              <p>
                We may collect different data from or about you depending on how
                you use the Services. Below are some examples to help you better
                understand the data we collect.
              </p>
            </div>
            <div className="TermsContent">
              <h3>3. How we get data About you</h3>

              <p>
                We use tools like cookies, web beacons, analytics services, and
                advertising providers to gather the data listed above. Some of
                these tools offer you the ability to opt out of data collection.{" "}
              </p>
            </div>
            <div className="TermsContent">
              <h3>4. For What We Use Your Data</h3>
              <ol>
                <li>Responding to your questions and concerns;</li>
                <li>
                  Sending you administrative messages and information, including
                  messages from instructors and teaching assistants,
                  notifications about changes to our Service, and updates to our
                  agreements;
                </li>
                <li>
                  Sending push notifications to your wireless device to provide
                  updates and other relevant messages (which you can manage from
                  the “options” or “settings” page of the mobile app);
                </li>
              </ol>
            </div>

            <div className="TermsContent">
              <h3>5. Your Choices About the Use of Your Data</h3>
              <p>
                You can choose not to provide certain data to us, but you may
                not be able to use certain features of the Services.
              </p>
              <p>
                To stop receiving promotional communications from us, you can
                opt out by using the unsubscribe mechanism in the promotional
                communication you receive or by changing the email preferences
                in your account. Note that regardless of your email preference
                settings, we will send you transactional and relationship
                messages regarding the Services, including administrative
                confirmations, order confirmations, important updates about the
                Services, and notices about our policies.
              </p>
              <p>
                To update data you provide directly, log into your account and
                update your account at any time.
              </p>
            </div>
            <div className="TermsContent">
              <h3>6. Our Policy Concerning Children</h3>
              <p>
                We recognize the privacy interests of children and encourage
                parents and guardians to take an active role in their children’s
                online activities and interests. Children under 13 (or under 16
                in the European Economic Area) should not use the Services. If
                we learn that we’ve collected personal data from a child under
                those ages, we will take reasonable steps to delete it
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
