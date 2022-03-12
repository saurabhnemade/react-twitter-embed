import React from 'react';
import useScript from '../hooks/useScript';
import twitterWidgetJs from './twiter-widget-url';

declare global {
  interface Window {
    twttr: any;
  }
}

export interface TwitterVideoEmbedProps {
  /**
   * Id of video tweet.
   */
  id: string;
  /**
   * Placeholder while tweet is loading
   */
  placeholder?: string | React.ReactNode;
  /**
   * Function to execute after load, return html element
   */
  onLoad?: (element: any) => void;
  /**
   * ErrorMessage when tweet is error
   */
  errorMessage?: string | React.ReactNode;
}

const methodName = 'createVideo';

const TwitterVideoEmbed = (props: TwitterVideoEmbedProps): any => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    let isComponentMounted = true;
    const status = useScript(twitterWidgetJs);
    if (status === 'loading') {
      setLoading(true);
    } else if (status === 'error') {
      setError(true);
    } else if (status === 'ready' || status === 'idle') {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load');
        return;
      }
      if (isComponentMounted) {
        if (!window.twttr.widgets[methodName]) {
          console.error(
            `Method ${methodName} is not present anymore in twttr.widget api`
          );
          return;
        }

        window.twttr.widgets[methodName](props.id, ref?.current).then(
          (element: any) => {
            setLoading(false);
            if (props.onLoad) {
              props.onLoad(element);
            }
          }
        );
      }
    }

    // cleaning up
    return () => {
      isComponentMounted = false;
    };
  }, []);

  return (
    <React.Fragment>
      {loading && <React.Fragment>{props.placeholder}</React.Fragment>}
      {error && <React.Fragment>{props.errorMessage} </React.Fragment>}
      <div ref={ref} />
    </React.Fragment>
  );
};

export default TwitterVideoEmbed;
