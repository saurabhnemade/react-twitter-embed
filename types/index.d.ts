import * as React from 'react'

type TwitterTimelineEmbedBaseProps = {
  options?: any
  autoHeight?: boolean
  theme?: 'dark' | 'light'
  linkColor?: string
  borderColor?: string
  noHeader?: boolean
  noFooter?: boolean
  noBorders?: boolean
  noScrollbar?: boolean
  transparent?: boolean
  lang?: string
}

type TwitterTimelineEmbedProps =
  | TwitterTimelineEmbedBaseProps & { sourceType: 'profile' | 'likes', screenName: string }
  | TwitterTimelineEmbedBaseProps & { sourceType: 'profile' | 'likes', userId: number }
  | TwitterTimelineEmbedBaseProps & { sourceType: 'list', ownerScreenName: string, slug: string }
  | TwitterTimelineEmbedBaseProps & { sourceType: 'list', id: number }
  | TwitterTimelineEmbedBaseProps & { sourceType: 'collection', id: string }
  | TwitterTimelineEmbedBaseProps & { sourceType: 'url', url: string }
  | TwitterTimelineEmbedBaseProps & { sourceType: 'widget', widgetId: string }
  | TwitterTimelineEmbedBaseProps & { sourceType: 'timeline', id: string }

export class TwitterTimelineEmbed extends React.Component<TwitterTimelineEmbedProps> {}

type TwitterFollowButtonProps = {
  screenName: string
  options?: any
}

export class TwitterFollowButton extends React.Component<TwitterFollowButtonProps> {}

type TwitterHashtagButtonProps = {
  tag: string
  options?: any
}

export class TwitterHashtagButton extends React.Component<TwitterHashtagButtonProps> {}

type TwitterShareButtonProps = {
  url: string
  options?: any
}

export class TwitterShareButton extends React.Component<TwitterShareButtonProps> {}

type TwitterMentionButtonProps = {
  screenName: string
  options?: any
}

export class TwitterMentionButton extends React.Component<TwitterMentionButtonProps> {}

type TwitterTweetEmbedProps = {
  tweetId: string
  options?: any
  onLoaded?: (elm: any) => void
}

export class TwitterTweetEmbed extends React.Component<TwitterTweetEmbedProps> {}

type TwitterMomentShareProps = {
  momentId: string
  options?: any
}

export class TwitterMomentShare extends React.Component<TwitterMomentShareProps> {}

type TwitterDMButtonProps = {
  id: number
  options?: any
}

export class TwitterDMButton extends React.Component<TwitterDMButtonProps> {}

type TwitterVideoEmbedProps = {
  id: string
}

export class TwitterVideoEmbed extends React.Component<TwitterVideoEmbedProps> {}

type TwitterOnAirButtonProps = {
  username: string
  options?: any
}

export class TwitterOnAirButton extends React.Component<TwitterOnAirButtonProps> {}
