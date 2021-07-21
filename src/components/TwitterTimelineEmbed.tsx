import React from 'react';
import twitterWidgetJs from "./twiter-widget-url";

declare global {
  interface Window { twttr: any; }
}

interface JSONObject {
  [k: string] : any
}

export interface TwitterTimelineEmbedBase {
  options?: JSONObject;
  autoHeight?: boolean;
  theme?: 'dark' | 'light';
  linkColor?: string;
  borderColor?: string;
  noHeader?: boolean;
  noFooter?: boolean;
  noBorders?: boolean;
  noScrollbar?: boolean;
  transparent?: boolean;
  lang?: string;
  ariaPolite?: 'polite' | 'assertive' | 'rude';
  tweetLimit?: number;
  placeholder?: string | React.ReactNode;
  onLoad?: (element: any) => void;
}

export interface TwitterTimelineEmbedSourceScreenName extends TwitterTimelineEmbedBase {
  sourceType: 'profile' | 'likes';
  screenName: string;
}

export interface TwitterTimelineEmbedSourceUserId extends TwitterTimelineEmbedBase {
  sourceType: 'profile' | 'likes';
  userId: string;
}

export interface TwitterTimelineEmbedSourceTimeline extends TwitterTimelineEmbedBase {
  sourceType: 'timeline';
  id: string;
}

export interface TwitterTimelineEmbedSourceList extends TwitterTimelineEmbedBase {
  sourceType: 'list';
  ownerScreenName: string;
  slug: string;
}

export interface TwitterTimelineEmbedSourceListId extends TwitterTimelineEmbedBase {
  sourceType: 'list';
  id: string | number;
}

export interface TwitterTimelineEmbedSourceCollection extends TwitterTimelineEmbedBase {
  sourceType: 'collection';
  id: string | number;
}

export interface TwitterTimelineEmbedSourceUrl extends TwitterTimelineEmbedBase {
  sourceType: 'url';
  url: string;
}

export interface TwitterTimelineEmbedSourceWidget extends TwitterTimelineEmbedBase {
  sourceType: 'widget';
  widgetId: string;
}

export type TwitterTimelineEmbedPropsType =
  TwitterTimelineEmbedSourceScreenName |
  TwitterTimelineEmbedSourceUserId |
  TwitterTimelineEmbedSourceTimeline |
  TwitterTimelineEmbedSourceList |
  TwitterTimelineEmbedSourceListId |
  TwitterTimelineEmbedSourceCollection |
  TwitterTimelineEmbedSourceUrl |
  TwitterTimelineEmbedSourceWidget;

// export interface TwitterTimelineEmbedProps {
//   sourceType: 'profile' | 'likes' | 'list' | 'collection' | 'URL' | 'widget'
//   url: string;
//   options?: JSONObject,
//   placeholder?: string | React.ReactNode;
//   onLoad?: (element: any) => void;
// };

const methodName = 'createTimeline';

const TwitterTimelineEmbed = (props: TwitterTimelineEmbedPropsType) => {
  const ref = React.useRef<HTMLDivElement | null >(null);
  const [loading, setLoading] = React.useState(true);

  const buildOptions = () => {
    let options = Object.assign({}, props.options)
    if (props?.autoHeight) {
      options.height = (ref.current?.parentNode as HTMLElement)?.offsetHeight
    }

    options = Object.assign({}, options, {
      theme: props?.theme,
      linkColor: props?.linkColor,
      borderColor: props?.borderColor,
      lang: props?.lang,
      tweetLimit: props?.tweetLimit,
      ariaPolite: props?.ariaPolite
    })

    return options
  }

  const buildChromeOptions = (options: JSONObject) => {
    options.chrome = ''
    if (props.noHeader) { options.chrome = options.chrome + ' noheader'; }
    if (props.noFooter) { options.chrome = options.chrome + ' nofooter'; }
    if (props.noBorders) { options.chrome = options.chrome + ' noborders'; }
    if (props.noScrollbar) { options.chrome = options.chrome + ' noscrollbar' };
    if (props.transparent) { options.chrome = options.chrome + ' transparent' };

    return options
  }

  React.useEffect(() => {
    let isComponentMounted = true
    let script = require('scriptjs');
    script(twitterWidgetJs, 'twitter-embed', () => {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load');
        return;
      }
      if (isComponentMounted) {
        if (!window.twttr.widgets[methodName]) {
          console.error(`Method ${methodName} is not present anymore in twttr.widget api`);
          return;
        }

        let options = buildOptions()
        /** Append chrome options */
        options = buildChromeOptions(options)

        window
          .twttr
          .widgets[methodName](
          {
            sourceType: props.sourceType,
            screenName: props['screenName'],
            userId: props['userId'],
            ownerScreenName: props['ownerScreenName'],
            slug: props['slug'],
            id: props['id'] || props['widgetId'],
            url: props['url']
          },
          ref?.current,
          options
        ).then((element: any) => {
          setLoading(false);
          if (props.onLoad) {
            props.onLoad(element)
          }
        });
      }
    });

    // cleaning up
    return () => {
      isComponentMounted = false
    }
  }, []);

  return (
    <React.Fragment>
      {loading && (
        <React.Fragment>
          {props.placeholder}
        </React.Fragment>

      )}
      <div ref={ref} />
    </React.Fragment>
  );
};

export default TwitterTimelineEmbed;
