import {
  TwitterDMButton,
  TwitterFollowButton,
  TwitterTweetEmbed
} from '../../../index';
import React from 'react';
import useTwitterEvents from '../../../components/useTwitterEvents';
import { mount } from '@cypress/react';

const RenderEventTweetDMButton = ({ name, fn }: { name: string; fn: any }) => {
  useTwitterEvents({
    [name]: fn
  });
  return <TwitterDMButton id={1364031673} />;
};

const RenderEventTwitterFollowButton = ({
  name,
  fn
}: {
  name: string;
  fn: any;
}) => {
  useTwitterEvents({
    [name]: fn
  });
  return <TwitterFollowButton screenName='saurabhnemade' />;
};

const RenderEventTwitterTweet = ({ name, fn }: { name: string; fn: any }) => {
  useTwitterEvents({
    [name]: fn
  });
  return <TwitterTweetEmbed tweetId='933354946111705097' />;
};

describe('Twitter Events', () => {
  it('loaded event test', () => {
    const callback = cy.stub();
    mount(<RenderEventTweetDMButton name='loaded' fn={callback} />);
    cy.wait(4000);
    cy.waitUntil(() => expect(callback.callCount).to.eq(1));
  });

  it('rendered event test', () => {
    const callback = cy.stub();
    mount(<RenderEventTweetDMButton name='rendered' fn={callback} />);
    cy.wait(4000);
    cy.waitUntil(() => expect(callback.callCount).to.eq(1));
  });

  it('follow event test', () => {
    const callback = cy.stub();
    mount(<RenderEventTwitterFollowButton name='follow' fn={callback} />);
    cy.wait(4000);
    cy.getIframeBody().getIframeBody().click();
    cy.waitUntil(() => expect(callback.callCount).to.eq(1));
  });

  it('like event test', () => {
    const callback = cy.stub();
    mount(<RenderEventTwitterTweet name='like' fn={callback} />);
    cy.wait(4000);
    cy.getIframeBody().then((el: any) => {
      const likeBtn: any = Array.from(
        el[0]
          .querySelector('[role="article"]')
          .querySelectorAll('[role="link"]')
      ).find((elm: any) => elm.textContent === '1.6K');
      likeBtn.click();
      cy.wait(4000);
      cy.waitUntil(() => expect(callback.callCount).to.eq(1));
    });
  });

  it('click event test', () => {
    const callback = cy.stub();
    mount(<RenderEventTwitterTweet name='click' fn={callback} />);
    cy.wait(4000);
    cy.getIframeBody().then((el: any) => {
      const likeBtn: any = Array.from(
        el[0]
          .querySelector('[role="article"]')
          .querySelectorAll('[role="link"]')
      ).find((elm: any) => elm.textContent === '1.6K');
      likeBtn.click();
      cy.wait(4000);
      cy.waitUntil(() => expect(callback.callCount).to.eq(1));
    });
  });
});
