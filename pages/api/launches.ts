import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

// I couldn't manage to query the original api to fetch launches by ids, so I created my own.
const handler = nc<NextApiRequest, NextApiResponse>().get(async (req, res) => {
  const launchesIds = req.query['launches[]'];

  const response = await fetch('https://api.spacexdata.com/v4/launches');
  const launches = await response.json();

  res.json({
    launches: launches.filter(launch => launchesIds.includes(launch.id)),
  });
});

export default handler;
