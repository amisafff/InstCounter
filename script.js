import express from 'express'
import https from 'https'

const app = express()
const PORT = 3000

app.get('/followers', (req, res) => {
	const options = {
		method: 'GET',
		hostname: 'instagram-scraper-api3.p.rapidapi.com',
		port: null,
		path: '/media_by_keyword?query=new%20york',
		headers: {
			'x-rapidapi-key': '905a5b02b0mshe2d4648703588b5p174c8bjsn9965c41f241e',
			'x-rapidapi-host': 'instagram-scraper-api3.p.rapidapi.com',
		},
	}

	const apiReq = https.request(options, function (apiRes) {
		const chunks = []

		apiRes.on('data', function (chunk) {
			chunks.push(chunk)
		})

		apiRes.on('end', function () {
			const body = Buffer.concat(chunks)
			res.send(body.toString())
		})
	})

	apiReq.end()
})

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})
