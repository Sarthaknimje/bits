const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { walletAddress, volume, nftsBought, nftsSold, botToken, chatId } = JSON.parse(event.body);

    if (!botToken || !chatId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Bot token and chat ID are required' })
      };
    }

    const message = `
🚨 NFT Whale Alert! 🐋

👛 Wallet: ${walletAddress}
💰 Volume: ${Number(volume).toFixed(2)} ETH
🛍️ NFTs Bought: ${nftsBought || 0}
💎 NFTs Sold: ${nftsSold || 0}

🔍 View on OpenSea: https://opensea.io/${walletAddress}
    `;

    console.log('Attempting to send message to Telegram...', { chatId });

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML'
        })
      }
    );

    const data = await response.json();
    console.log('Telegram API response:', data);

    if (!data.ok) {
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
    console.error('Serverless function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Failed to send Telegram alert' })
    };
  }
}; 