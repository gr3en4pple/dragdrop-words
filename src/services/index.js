const wait = (time = 250) => new Promise((res) => setTimeout(res, time))
import paragraph from './paragraph.json'

const ApiService = {
  async get() {
    try {
      await wait()
      return paragraph
    } catch {
      return null
    }
  }
}

export default ApiService
