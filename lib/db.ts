import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

export const connect = async () => {
  const connectionState = mongoose.connection.readyState

  if (connectionState === 1) {
    console.log('MongoDB is already connected')
    return
  }

  if (connectionState === 2) {
    console.log('MongoDB is connecting, waiting for connection...')
    return
  }

  try {
    await mongoose.connect(MONGODB_URI!, {
      dbName: 'betting-tool-api',
      bufferCommands: true
    })
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw new Error('Failed to connect to MongoDB')
  }
}
