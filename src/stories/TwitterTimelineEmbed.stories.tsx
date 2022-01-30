import React from 'react';
import { Story, Meta } from '@storybook/react';
import TwitterTimelineEmbed, {
  TwitterTimelineEmbedPropsType
} from './../components/TwitterTimelineEmbed';
import { action } from '@storybook/addon-actions';
import './story.css';

export default {
  title: 'Twitter Timeline Embed',
  component: TwitterTimelineEmbed,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const Template: Story<TwitterTimelineEmbedPropsType> = (args) => (
  <div className='centerContent'>
    <div className='selfCenter spaceBetween'>
      <TwitterTimelineEmbed {...args} />
    </div>
  </div>
);

// export const TimelineProfileWithScreenName = Template.bind({});
// TimelineProfileWithScreenName.args = {
//   sourceType: 'profile',
//   screenName: 'saurabhnemade',
//   options: { height: 400 },
//   onLoad: action('sample action')
// };

export const TimelineProfileWithUserId = Template.bind({});
TimelineProfileWithUserId.args = {
  sourceType: 'profile',
  userId: 1934309676,
  options: { height: 400 }
};

// export const TimelineLikesWithScreenName = Template.bind({});
// TimelineLikesWithScreenName.args = {
//   sourceType: 'likes',
//   screenName: 'saurabhnemade',
//   options: { height: 400 }
// };

export const TimelineLikesWithUserId = Template.bind({});
TimelineLikesWithUserId.args = {
  sourceType: 'likes',
  userId: 1934309676,
  options: { height: 400 }
};

export const TimelineListWithOwnerScreenNameSlug = Template.bind({});
TimelineListWithOwnerScreenNameSlug.args = {
  sourceType: 'list',
  ownerScreenName: 'palafo',
  slug: 'breakingnews',
  options: { height: 400 }
};

export const TimelineListWithListId = Template.bind({});
TimelineListWithListId.args = {
  sourceType: 'list',
  id: 8044403,
  options: { height: 400 }
};

export const TimelineCollection = Template.bind({});
TimelineCollection.args = {
  sourceType: 'collection',
  id: '576828964162965504',
  options: { height: 400 }
};

export const TimelineCollectionWithUrl = Template.bind({});
TimelineCollectionWithUrl.args = {
  sourceType: 'collection',
  url: 'https://twitter.com/NYTNow/timelines/576828964162965504',
  options: { height: 400 }
};

export const TimelineUrlWithProfileUrl = Template.bind({});
TimelineUrlWithProfileUrl.args = {
  sourceType: 'url',
  url: 'https://twitter.com/rahul581',
  options: { height: 400 }
};

export const TimelineUrlWithListUrl = Template.bind({});
TimelineUrlWithListUrl.args = {
  sourceType: 'url',
  url: 'https://twitter.com/mashable/lists/social-media',
  options: { height: 400 }
};

export const TimelineUrlWithLikesUrl = Template.bind({});
TimelineUrlWithLikesUrl.args = {
  sourceType: 'url',
  url: 'https://twitter.com/ladygaga/likes',
  options: { height: 400 }
};

export const TimelineWidget = Template.bind({});
TimelineWidget.args = {
  sourceType: 'widget',
  widgetId: '539487832448843776',
  options: { height: 400 }
};

export const TimelineAutoheight = ({
  sourceType,
  widgetId,
  autoHeight
}: {
  sourceType: 'widget';
  widgetId: string;
  autoHeight: boolean;
}) => (
  <div className='centerContent'>
    <div className='selfCenter' style={{ width: 250, height: 200, margin: 20 }}>
      <TwitterTimelineEmbed
        sourceType={sourceType}
        widgetId={widgetId}
        autoHeight={autoHeight}
      />
    </div>
    <div className='selfCenter' style={{ width: 250, height: 300, margin: 20 }}>
      <TwitterTimelineEmbed
        sourceType={sourceType}
        widgetId={widgetId}
        autoHeight={autoHeight}
      />
    </div>
    <div className='selfCenter' style={{ width: 250, height: 250, margin: 20 }}>
      <TwitterTimelineEmbed
        sourceType={sourceType}
        widgetId={widgetId}
        autoHeight={autoHeight}
      />
    </div>
  </div>
);
TimelineAutoheight.args = {
  sourceType: 'widget',
  widgetId: '539487832448843776',
  autoHeight: true
};

export const TimelineDarkTheme = Template.bind({});
TimelineDarkTheme.args = {
  sourceType: 'timeline',
  widgetId: '539487832448843776',
  theme: 'dark',
  options: { height: 400 }
};

export const TimelineLightTheme = Template.bind({});
TimelineLightTheme.args = {
  sourceType: 'timeline',
  widgetId: '539487832448843776',
  theme: 'light',
  options: { height: 400 }
};

// Twitter deprecated this
// export const TimelineCustomLinkColor = () => (
//   <div className='centerContent'>
//     <div className='selfCenter spaceBetween standardWidth'>
//       <TwitterTimelineEmbed
//         sourceType='timeline'
//         id='539487832448843776'
//         linkColor='#F44336'
//         theme='dark'
//         options={{ height: 400 }}
//       />
//     </div>
//     <div className='selfCenter spaceBetween standardWidth'>
//       <TwitterTimelineEmbed
//         sourceType='timeline'
//         id='539487832448843776'
//         linkColor='#CDDC39'
//         theme='dark'
//         options={{ height: 400 }}
//       />
//     </div>
//     <div className='selfCenter spaceBetween standardWidth'>
//       <TwitterTimelineEmbed
//         sourceType='timeline'
//         id='539487832448843776'
//         linkColor='#4CAF50'
//         theme='dark'
//         options={{ height: 400 }}
//       />
//     </div>
//   </div>
// )

export const TimelineCustomBorderColor = ({
  borderColors
}: {
  borderColors: Array<string>;
}) => (
  <div className='centerContent'>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        borderColor={borderColors[0]}
        theme='dark'
        options={{ height: 400 }}
      />
    </div>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        borderColor={borderColors[1]}
        theme='dark'
        options={{ height: 400 }}
      />
    </div>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        borderColor={borderColors[2]}
        theme='dark'
        options={{ height: 400 }}
      />
    </div>
  </div>
);
TimelineCustomBorderColor.args = {
  borderColors: ['#F44336', '#CDDC39', '#4CAF50']
};

export const TimelineWithNoheader = ({ noHeader }: { noHeader: boolean }) => (
  <div className='centerContent'>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        theme='dark'
        noHeader={noHeader}
        options={{ height: 400 }}
      />
    </div>
  </div>
);
TimelineWithNoheader.args = {
  noHeader: true
};

export const TimelineWithNofooter = ({ noFooter }: { noFooter: boolean }) => (
  <div className='centerContent'>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        theme='dark'
        noFooter={noFooter}
        options={{ height: 400 }}
      />
    </div>
  </div>
);
TimelineWithNofooter.args = {
  noFooter: true
};

export const TimelineWithNoHeaderNoFooter = () => (
  <div className='centerContent'>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        theme='dark'
        options={{ height: 400 }}
      />
    </div>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        theme='dark'
        noHeader
        noFooter
        options={{ height: 400 }}
      />
    </div>
  </div>
);

export const TimelineWithNoBorder = () => (
  <div className='centerContent'>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        options={{ height: 400 }}
        theme='dark'
      />
    </div>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        theme='dark'
        options={{ height: 400 }}
        noBorders
      />
    </div>
  </div>
);

export const TimelineWithNoScrollbar = () => (
  <div className='centerContent'>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        options={{ height: 400 }}
        theme='dark'
      />
    </div>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        theme='dark'
        options={{ height: 400 }}
        noScrollbar
      />
    </div>
  </div>
);

export const TimelineWithTransparentBackground = () => (
  <div className='centerContent'>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        options={{ height: 400 }}
        theme='dark'
      />
    </div>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        theme='dark'
        options={{ height: 400 }}
        transparent
      />
    </div>
  </div>
);

export const TimelineWithCustomLanguage = () => (
  <div className='centerContent'>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        options={{ height: 400 }}
        theme='dark'
        lang='hi'
      />
    </div>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        theme='dark'
        options={{ height: 400 }}
        lang='es'
      />
    </div>
    <div className='selfCenter spaceBetween standardWidth'>
      <TwitterTimelineEmbed
        sourceType='timeline'
        id='539487832448843776'
        theme='dark'
        options={{ height: 400 }}
        lang='fr'
      />
    </div>
  </div>
);

export const TimelineWithTextPlaceholder = Template.bind({});
TimelineWithTextPlaceholder.args = {
  sourceType: 'timeline',
  widgetId: '539487832448843776',
  theme: 'dark',
  lang: 'hi',
  placeholder: 'Loading',
  options: { height: 400 }
};

export const TimelineWithCustomPlaceholder = Template.bind({});
TimelineWithCustomPlaceholder.args = {
  sourceType: 'timeline',
  widgetId: '539487832448843776',
  theme: 'dark',
  lang: 'hi',
  placeholder: (
    <div
      style={{
        padding: 10,
        margin: 10,
        backgroundColor: 'red',
        color: 'white'
      }}
    >
      Hello I am custom placeholder
    </div>
  ),
  options: { height: 400 }
};

export const TimelineWithOnload = Template.bind({});
TimelineWithOnload.args = {
  sourceType: 'timeline',
  widgetId: '539487832448843776',
  theme: 'dark',
  lang: 'hi',
  onLoad: action('Timeline loaded'),
  options: { height: 400 }
};
