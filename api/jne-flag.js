import { flagsClient } from '@vercel/flags-core';

export default async function handler(_req, res) {
  try {
    const result = await flagsClient.evaluate('jne-info-flag', false);
    res.setHeader('Cache-Control', 'no-store');
    res.json({ value: result.value });
  } catch {
    res.json({ value: false });
  }
}
