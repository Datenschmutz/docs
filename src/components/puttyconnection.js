import Admonition from '@theme/Admonition';
import React from 'react';
import ImageUrl from '@site/static/img/docs/putty-connection.png';
export default function PuTTYConnectionGuide() {
  return (
    <div>
      <details>
        <summary>
        🪧PuTTY connection guide
        </summary>
        <div>
            <Admonition type="tip">
            <p>Folks with SSH/PuTTY experience will not need this part of the tutorial, you can skip to the next point!</p>
            </Admonition>
        </div>
        <div>
          Open PuTTY and enter the domain or IP address of your server in the text box named "Host Name (or IP address)". Then click the "OK" button below.
          <br/>
          <img src={ImageUrl} align="center" height="400" width="400" border="1" alt="Example banner" />
        </div>
      </details>
    </div>
  );
}