import * as React from "react";
import { TwitterTimelineEmbed, TwitterFollowButton, TwitterHashtagButton, TwitterShareButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from ".";

export const example = () => (
  <>
    <TwitterTimelineEmbed
      sourceType={"profile"}
      screenName={"saurabhnemade"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"profile"}
      userId={1934309676}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"likes"}
      screenName={"saurabhnemade"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"likes"}
      userId={1934309676}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"list"}
      ownerScreenName={"palafo"}
      slug={"breakingnews"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"list"}
      id={8044403}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"collection"}
      id={"576828964162965504"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"url"}
      url={"https://twitter.com/NYTNow/timelines/576828964162965504"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"url"}
      url={"https://twitter.com/rahul581"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"url"}
      url={"https://twitter.com/mashable/lists/social-media"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"url"}
      url={"https://twitter.com/ladygaga/likes"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"widget"}
      widgetId={"539487832448843776"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"widget"}
      widgetId={"539487832448843776"}
      autoHeight
    />
    <TwitterTimelineEmbed
      sourceType={"widget"}
      widgetId={"539487832448843776"}
      autoHeight
    />
    <TwitterTimelineEmbed
      sourceType={"widget"}
      widgetId={"539487832448843776"}
      autoHeight
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      theme={"dark"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      theme={"light"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      linkColor={"#F44336"}
      theme={"dark"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      linkColor={"#CDDC39"}
      theme={"dark"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      linkColor={"#4CAF50"}
      theme={"dark"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      borderColor={"#F44336"}
      theme={"dark"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      borderColor={"#CDDC39"}
      theme={"dark"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      borderColor={"#4CAF50"}
      theme={"dark"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      theme={"dark"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      theme={"dark"}
      noHeader
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      theme={"dark"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      theme={"dark"}
      noFooter
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      theme={"dark"}
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      theme={"dark"}
      noHeader
      noFooter
      options={{ height: 400 }}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      options={{ height: 400 }}
      theme={"dark"}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      theme={"dark"}
      options={{ height: 400 }}
      noBorders
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      options={{ height: 400 }}
      theme={"dark"}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      theme={"dark"}
      options={{ height: 400 }}
      noScrollbar
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      options={{ height: 400 }}
      theme={"dark"}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      theme={"dark"}
      options={{ height: 400 }}
      transparent
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      options={{ height: 400 }}
      theme={"dark"}
      lang={"hi"}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      theme={"dark"}
      options={{ height: 400 }}
      lang={"es"}
    />
    <TwitterTimelineEmbed
      sourceType={"timeline"}
      id={"539487832448843776"}
      theme={"dark"}
      options={{ height: 400 }}
      lang={"fr"}
    />
    <TwitterShareButton
      url={"https://facebook.com/saurabhnemade"}
      options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
    />
    <TwitterShareButton
      url={"https://facebook.com/saurabhnemade"}
      options={{
        text: "#reactjs is awesome",
        via: "saurabhnemade",
        size: "large"
      }}
    />
    <>
      <TwitterFollowButton screenName={"saurabhnemade"} />
      <TwitterFollowButton
        screenName={"saurabhnemade"}
        options={{ size: "large" }}
      />
    </>
    <>
      <TwitterHashtagButton tag={"cybersecurity"} />
      <TwitterHashtagButton tag={"cybersecurity"} options={{ size: "large" }} />
    </>

    <>
      <TwitterMentionButton screenName={"saurabhnemade"} />
      <TwitterMentionButton
        screenName={"saurabhnemade"}
        options={{ size: "large" }}
      />
    </>

    <TwitterTweetEmbed tweetId={"933354946111705097"} />
    <TwitterTweetEmbed tweetId={"1083592734038929408"} />
    <TwitterTweetEmbed
      tweetId={"1083592734038929408"}
      options={{ cards: "hidden" }}
    />
    <TwitterTweetEmbed
      tweetId={"1083592734038929408"}
      onLoaded={tweetWidgetEl => {
        const tweetEl = tweetWidgetEl.shadowRoot.querySelector(
          ".EmbeddedTweet"
        );
        tweetEl.style.border = "5px solid red";
      }}
    />
    <TwitterMomentShare momentId="650667182356082688" />
    <TwitterDMButton id={1364031673} />
    <TwitterDMButton id={1364031673} options={{ size: "large" }} />

    <TwitterVideoEmbed id={"560070183650213889"} />

    <TwitterOnAirButton username={"KatmaiNPS"} />
    <TwitterOnAirButton username={"KatmaiNPS"} options={{ size: "large" }} />
  </>
);
