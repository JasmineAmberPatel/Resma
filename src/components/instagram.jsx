import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

function Instagram() {
  return (
    <div className="Instagram_Posts">
      <InstagramEmbed className="Instagram"
        url='https://www.instagram.com/p/BxpqVGMFXl5/?utm_source=ig_web_copy_link'
        maxWidth={320}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      />
      <InstagramEmbed className="Instagram"
        url='https://www.instagram.com/p/B31-_fTBzKl/?utm_source=ig_web_copy_link'
        maxWidth={320}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      />
      <InstagramEmbed className="Instagram"
        url='https://www.instagram.com/p/BycQlkthnR3/?utm_source=ig_web_copy_link'
        maxWidth={320}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      />
    </div>
  );
}

export default Instagram;
