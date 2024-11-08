addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  if (url.hostname === 'xn--vj5bn0ab83a.com') {
    const redirectUrl = `https://205sla.notion.site${url.pathname}${url.search}`;

    await sendNotification(url);

    return Response.redirect(redirectUrl, 301);
  }

  return fetch(request);
}

async function sendNotification(url) {
  const yourEndpoint = '********';
  
  const notificationData = {
    title: 'hello',
    body: `go:${url.pathname}${url.search}`
  };
  console.log(`Notification body: go:${url.pathname}${url.search}`);

  const response = await fetch(`https://puuu.sh/notify/${yourEndpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(notificationData)
  });

  if (!response.ok) {
    console.error('Failed to send notification:', response.statusText);
  }
}
