import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterTimelineEmbed } from './../index';

const { describe, it } = global;

describe('Twitter follow button', () => {
  it('Should create follow button without options', () => {
    expect(function () {
      mount(<TwitterFollowButton screenName="saurabhnemade" />);
    }).to.not.throw();
  });

  it('Should create follow button with options', () => {
    expect(function () {
      mount(<TwitterFollowButton screenName="saurabhnemade" options={{ size: 'large' }} />);
    }).to.not.throw();
  });
});

describe('Twitter hashtag button', () => {
  it('Should create hashtag button without options', () => {
    expect(function () {
      mount(<TwitterHashtagButton tag="saurabhnemade" />);
    }).to.not.throw();
  });

  it('Should create hashtag button with options', () => {
    expect(function () {
      mount(<TwitterHashtagButton tag="saurabhnemade" options={{ size: 'large' }} />);
    }).to.not.throw();
  });
});

describe('Twitter Mention button', () => {
  it('Should create Mention button without options', () => {
    expect(function () {
      mount(<TwitterMentionButton screenName="saurabhnemade" />);
    }).to.not.throw();
  });

  it('Should create Mention button with options', () => {
    expect(function () {
      mount(<TwitterMentionButton screenName="saurabhnemade" options={{ size: 'large' }} />);
    }).to.not.throw();
  });
});

describe('Twitter tweet view', () => {
  it('Should create tweet view', () => {
    expect(function () {
      mount(<TwitterTweetEmbed tweetId="933354946111705097" />);
    }).to.not.throw();
  });
});

describe('Twitter timeline view', () => {
  it('Should create timeline with screen name without options', () => {
    expect(function () {
      mount(<TwitterTimelineEmbed
        sourceType="profile"
        screenName="saurabhnemade"
      />);
    }).to.not.throw();
  });

  it('Should create timeline with screen name with options', () => {
    expect(function () {
      mount(<TwitterTimelineEmbed
        sourceType="profile"
        screenName="saurabhnemade"
        options={{ height: 400 }}
      />);
    }).to.not.throw();
  });

  it('Should create timeline with userid without options', () => {
    expect(function () {
      mount(<TwitterTimelineEmbed
        sourceType="profile"
        userId={1934309676}
      />);
    }).to.not.throw();
  });

  it('Should create timeline with userid without options', () => {
    expect(function () {
      mount(<TwitterTimelineEmbed
        sourceType="profile"
        userId={1934309676}
        options={{ height: 400 }}
      />);
    }).to.not.throw();
  });

  it('Should create timeline likes with screenname without options', () => {
    expect(function () {
      mount(<TwitterTimelineEmbed
        sourceType="likes"
        screenName="saurabhnemade"
      />);
    }).to.not.throw();
  });

  it('Should create timeline likes with screenname with options', () => {
    expect(function () {
      mount(<TwitterTimelineEmbed
        sourceType="likes"
        screenName="saurabhnemade"
        options={{ height: 400 }}
      />);
    }).to.not.throw();
  });

  it('Should create timeline likes with userid without options', () => {
    expect(function () {
      mount(<TwitterTimelineEmbed
        sourceType="likes"
        userId={1934309676}
      />);
    }).to.not.throw();
  });

  it('Should create timeline likes with userid with options', () => {
    expect(function () {
      mount(<TwitterTimelineEmbed
        sourceType="likes"
        userId={1934309676}
        options={{ height: 400 }}
      />);
    }).to.not.throw();
  });

  it('Should create timeline list with ownerScreenName and slug without options', () => {
    expect(function () {
      mount(<TwitterTimelineEmbed
        sourceType="list"
        ownerScreenName="palafo"
        slug="breakingnews"
      />);
    }).to.not.throw();
  });

  it('Should create timeline list with ownerScreenName and slug with options', () => {
    expect(function () {
      mount(<TwitterTimelineEmbed
        sourceType="list"
        ownerScreenName="palafo"
        slug="breakingnews"
        options={{ height: 400 }}
      />);
    }).to.not.throw();
  });

  it('Should create timeline list with list id without options', () => {
    expect(function () {
      mount(<TwitterTimelineEmbed
        sourceType="list"
        id={8044403}
      />);
    }).to.not.throw();
  });

  it('Should create timeline list with list id with options', () => {
    expect(function () {
      mount(<TwitterTimelineEmbed
        sourceType="list"
        id={8044403}
        options={{ height: 400 }}
      />);
    }).to.not.throw();
  });

  it('Should create timeline list with list id without options', () => {
    expect(function () {
      mount(<TwitterTimelineEmbed
        sourceType="collection"
        id={'588824628950269952'}
      />);
    }).to.not.throw();
  });

  it('Should create timeline list with list id with options', () => {
    expect(function () {
      mount(<TwitterTimelineEmbed
        sourceType="collection"
        id={'588824628950269952'}
        options={{ height: 400 }}
      />);
    }).to.not.throw();
  });
});
