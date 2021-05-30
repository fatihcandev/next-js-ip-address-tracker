import fetcher from 'utils/fetcher'

export default async function handler({ query: { ip } }, res) {
  const geolocation = await fetcher(
    `https://ifconfig.co/json${ip ? `?ip=${ip}` : ''}`
  )
  return res.status(200).json(geolocation)
}
