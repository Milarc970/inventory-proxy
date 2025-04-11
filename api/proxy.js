// Minor update to trigger Vercel build
export default async function handler(req, res) {
  const response = await fetch("https://sheetdb.io/api/v1/ig2o5huoe0dew");
  const data = await response.json();
  res.status(200).json(data);
}
