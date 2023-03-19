import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const prisma = new PrismaClient()
const router = new Router()

router.post('/', async (req, res) => {
  try {
    const data = await prisma.vaccine.create({ data: req.body })

		res.status(201).send(data)
  } catch (error) {
    console.log(error);
		res.status(500).send()
	}
})

export default router