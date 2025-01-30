const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { message, botToken, chatId } = JSON.parse(event.body);
    
    if (!botToken || !chatId || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required parameters' })
      };
    }

    console.log('Sending Telegram message:', { chatId, message }); // Debug log

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML'
        })
      }
    );

    const data = await response.json();
    
    if (!data.ok) {
      console.error('Telegram API error:', data); // Debug log
      return {
        statusCode: 500,
        body: JSON.stringify({ error: data.description || 'Telegram API error' })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Webhook error:', error); // Debug log
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send message to Telegram' })
    };
  }
}; 